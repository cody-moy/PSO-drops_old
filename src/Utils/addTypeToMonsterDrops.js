import monsterDrops from '../data/MONSTER_DROPS';
import setType from './setItemType';

export const addTypeToMonsterDrops = () => {
  let temp = monsterDrops;

  console.log('begin processing...');

  let difficulties = ['ultimate', 'vhard', 'hard', 'normal'];

  for (let diff = 0; diff < 4; diff++) {
    for (
      let episode = 0;
      episode < temp[difficulties[diff]].episodes.length;
      episode++
    ) {
      for (
        let area = 0;
        area < temp[difficulties[diff]].episodes[episode].areas.length;
        area++
      ) {
        for (
          let source = 0;
          source <
          temp[difficulties[diff]].episodes[episode].areas[area].drops.length;
          source++
        ) {
          for (let secId = 0; secId < 10; secId++) {
            if (
              temp[difficulties[diff]].episodes[episode].areas[area].drops[
                source
              ].items[secId].itemName
            ) {
              temp[difficulties[diff]].episodes[episode].areas[area].drops[
                source
              ].items[secId] = setType(
                temp[difficulties[diff]].episodes[episode].areas[area].drops[
                  source
                ].items[secId]
              );
            }
          }
        }
      }
    }
  }

  localStorage.setItem('ultimate', JSON.stringify(temp));
};
