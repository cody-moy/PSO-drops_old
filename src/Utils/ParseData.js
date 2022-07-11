import React, { useEffect, useState } from 'react';
import { secIDs } from '../data/miscData';

import table_u from '../data/table_u';
import table_nhvh from '../data/table_nhvh';

import { ultimate, rest } from '../data/data.js';

function ParseData(props) {
  const [difficulty, setDifficulty] = useState('ultimate');
  const [dataSet, setDataSet] = useState();
  const [tableSkeleton, setTableSkeleton] = useState('table_nhvh');
  const [tableToRead, setTableToRead] = useState('ultimate');
  const [compiledData, setCompiledData] = useState();
  const parser = new DOMParser();
  const [test, setTest] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData(difficulty);
    setTableSkeleton(difficulty);
    setTableToRead(difficulty);
  }, [[difficulty]]);

  useEffect(() => {
    console.log('finished parsing', difficulty);
  }, [compiledData]);

  const getData = title => {
    if (title === 'ultimate') setDataSet(ultimate);
    else setDataSet(rest);
  };

  // this function returns the indices of the "good" rows; that is, the rows that
  // aren't an episode label or the row with the sectionIDs
  // (the ones with a dropping entity and items)
  const getEpMonsterRows = epIndex => {
    switch (true) {
      case epIndex === 0: {
        return [
          { start: 2, end: 13 },
          { start: 15, end: 27 },
          { start: 29, end: 36 },
          { start: 38, end: 50 }
        ]; // ep1
      }
      case epIndex === 1: {
        return [
          { start: 2, end: 18 },
          { start: 20, end: 30 },
          { start: 32, end: 44 },
          { start: 46, end: 54 },
          { start: 56, end: 58 }
        ]; // ep2
      }
      case epIndex === 2: {
        return [
          { start: 2, end: 13 },
          { start: 15, end: 23 }
        ]; // ep4
      }
      default:
        return 0;
    }
  };

  const parseData = () => {
    let allData = parser.parseFromString(tableToRead, 'text/html');
    let tables = allData.querySelectorAll('table'); // there will be one table for each episode
    let tableData = JSON.parse(JSON.stringify(dataSet));

    tables.forEach((t, i) => {
      parseMonsterTable(
        tableData,
        parser.parseFromString(t.outerHTML, 'text/html'),
        i
      );
    });
    console.log('Success! JSON is compiled.');
    setCompiledData(tableData);
  };

  const parseMonsterTable = (tableData, table, episodeIndex) => {
    let rows = table.querySelectorAll('tr');

    let epRowGroups = getEpMonsterRows(episodeIndex);
    let episodes = [0, 1, 2, 0, 1, 2];
    let episodeText = [1, 2, 4];

    // console.log(`I. BEGIN EPISODE ${episodeText[episodeIndex]}`);
    for (
      let epRowGroupsIndex = 0;
      epRowGroupsIndex < epRowGroups.length;
      epRowGroupsIndex++
    ) {
      let destinationMonsterIndex = 0;

      // loop through the row groups (see getEp())
      // console.log('II. LOOPING THROUGH ROW GROUPS');
      for (
        let rowIndex = epRowGroups[epRowGroupsIndex].start;
        rowIndex <= epRowGroups[epRowGroupsIndex].end;
        rowIndex++
      ) {
        destinationMonsterIndex =
          rowIndex - epRowGroups[epRowGroupsIndex].start;

        let cellsInCurrentRow = [...rows[rowIndex].children];

        // iterate through all rows in area
        // console.log('III. LOOPING THROUGH CELLS IN ROW');
        for (
          let currentCellIndex = 1;
          currentCellIndex < cellsInCurrentRow.length;
          currentCellIndex++
        ) {
          // console.log(
          //   'cellsInCurrentRow[currentCellIndex]:',
          //   cellsInCurrentRow[currentCellIndex]
          // );
          // get the item name
          let itemName = extractName(
            String(cellsInCurrentRow[currentCellIndex].textContent)
          );
          // get the drop rate
          let dropRate = extractRate(
            String(cellsInCurrentRow[currentCellIndex].textContent)
          );

          // write sectionID
          tableData.episodes[episodes[episodeIndex]].areas[
            epRowGroupsIndex
          ].drops[destinationMonsterIndex].items[currentCellIndex - 1].secID =
            secIDs[currentCellIndex - 1].name;

          // write item name
          tableData.episodes[episodes[episodeIndex]].areas[
            epRowGroupsIndex
          ].drops[destinationMonsterIndex].items[
            currentCellIndex - 1
          ].itemName = itemName === ' ' ? null : itemName;

          // write item droprate
          tableData.episodes[episodes[episodeIndex]].areas[
            epRowGroupsIndex
          ].drops[destinationMonsterIndex].items[
            currentCellIndex - 1
          ].dropRate = dropRate;
        }
        destinationMonsterIndex = destinationMonsterIndex + 1;
      }
    }
  };

  const extractName = string => {
    // erase all the newlines and spaces
    string = string.replaceAll(/\n/g, '');
    string = string.replaceAll(/  /g, '');

    // remove everything after the name
    string = string.slice('', string.indexOf('Drop Rate:'));

    return string;
  };

  const extractRate = string => {
    // erase all the newlines and spaces
    string = string.replaceAll(/\n/g, '');
    string = string.replaceAll(/  /g, '');

    // remove everything after the subStr 'Rate:'
    string = string.slice(string.indexOf('Rate:') + 5);

    let rate = parseFloat(string.slice(string.indexOf('⁄') + 1));

    return rate;
  };

  const saveFile = () => {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(compiledData, null, ' ')], {
      type: 'text/JSON'
    });
    a.href = URL.createObjectURL(file);
    a.download = 'test';
    a.click();
  };

  return (
    <div className="data-parser-container">
      <p>
        Selected difficulty:{' '}
        {difficulty[0].toUpperCase() + difficulty.substring(1)}
      </p>
      <div>
        <button onClick={() => setDifficulty('ultimate')}>
          Select Ultimate
        </button>
        <button
          onClick={() => {
            parseData();
          }}
        >
          Parse
        </button>
        <button onClick={saveFile}>Save</button>
      </div>
      <div>
        <button onClick={() => setDifficulty('vhard')}>Select Very Hard</button>
        <button
          onClick={() => {
            parseData();
          }}
        >
          Parse
        </button>
        <button onClick={saveFile}>Save</button>
      </div>
      <div>
        <button onClick={() => setDifficulty('hard')}>Select Hard</button>
        <button
          onClick={() => {
            parseData();
          }}
        >
          Parse
        </button>
        <button onClick={saveFile}>Save</button>
      </div>
      <div>
        <button onClick={() => setDifficulty('normal')}>Select Normal</button>
        <button
          onClick={() => {
            parseData();
          }}
        >
          Parse
        </button>
        <button onClick={saveFile}>Save</button>
      </div>
    </div>
  );
}

export default ParseData;
