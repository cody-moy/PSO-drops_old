/* eslint-disable eqeqeq */
const buildClassTable = string => {
  return (
    <table className="class-table">
      <caption>Class compatibility</caption>
      <tbody>
        <tr>
          <td
            className={string.charAt(0) == 1 ? 'equippable' : 'not-equippable'}
          >
            HUmar
          </td>
          <td
            className={string.charAt(1) == 1 ? 'equippable' : 'not-equippable'}
          >
            HUnewearl
          </td>
          <td
            className={string.charAt(2) == 1 ? 'equippable' : 'not-equippable'}
          >
            HUcast
          </td>
          <td
            className={string.charAt(3) == 1 ? 'equippable' : 'not-equippable'}
          >
            HUcaseal
          </td>
        </tr>
        <tr>
          <td
            className={string.charAt(4) == 1 ? 'equippable' : 'not-equippable'}
          >
            RAmar
          </td>
          <td
            className={string.charAt(5) == 1 ? 'equippable' : 'not-equippable'}
          >
            RAmarl
          </td>
          <td
            className={string.charAt(6) == 1 ? 'equippable' : 'not-equippable'}
          >
            RAcast
          </td>
          <td
            className={string.charAt(7) == 1 ? 'equippable' : 'not-equippable'}
          >
            RAcaseal
          </td>
        </tr>
        <tr>
          <td
            className={string.charAt(8) == 1 ? 'equippable' : 'not-equippable'}
          >
            FOmar
          </td>
          <td
            className={string.charAt(9) == 1 ? 'equippable' : 'not-equippable'}
          >
            FOmarl
          </td>
          <td
            className={string.charAt(10) == 1 ? 'equippable' : 'not-equippable'}
          >
            FOnewm
          </td>
          <td
            className={string.charAt(11) == 1 ? 'equippable' : 'not-equippable'}
          >
            FOnewearl
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default buildClassTable;
