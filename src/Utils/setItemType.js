import { bazookas } from '../data/wiki/weapons/bazookas';
import { canes } from '../data/wiki/weapons/canes';
import { cards } from '../data/wiki/weapons/cards';
import { claws } from '../data/wiki/weapons/claws';
import { daggers } from '../data/wiki/weapons/daggers';
import { doubleSabers } from '../data/wiki/weapons/double-sabers';
import { fists } from '../data/wiki/weapons/fists';
import { handguns } from '../data/wiki/weapons/handguns';
import { katanas } from '../data/wiki/weapons/katanas';
import { launchers } from '../data/wiki/weapons/launchers';
import { mechguns } from '../data/wiki/weapons/mechguns';
import { partisans } from '../data/wiki/weapons/partisans';
import { rifles } from '../data/wiki/weapons/rifles';
import { rods } from '../data/wiki/weapons/rods';
import { sabers } from '../data/wiki/weapons/sabers';
import { shots } from '../data/wiki/weapons/shots';
import { slicers } from '../data/wiki/weapons/slicers';
import { swords } from '../data/wiki/weapons/swords';
import { twinSwords } from '../data/wiki/weapons/twin-swords';
import { wands } from '../data/wiki/weapons/wands';

import { frames } from '../data/wiki/armor/frames';
import { armors } from '../data/wiki/armor/armors';
import { barriers } from '../data/wiki/armor/barriers';
import { shields } from '../data/wiki/armor/shields';

import { units } from '../data/wiki/units/units';

import { tools } from '../data/wiki/tools/tools';

import { misc } from '../data/wiki/misc/misc';

const setType = item => {
  let found = false;
  if (!item.itemName) return 'error';
  for (let x = 0; x < bazookas.length; x++) {
    if (bazookas[x].name.toLowerCase() === item.itemName.toLowerCase()) {
      found = true;
      item.type = {
        object: 'Bazooka',
        index: x
      };
      return item;
    }
  }
  if (!found)
    for (let x = 0; x < canes.length; x++) {
      if (canes[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Cane',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < cards.length; x++) {
      if (cards[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Card',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < claws.length; x++) {
      if (claws[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Claw',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < daggers.length; x++) {
      if (daggers[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Dagger',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < doubleSabers.length; x++) {
      if (doubleSabers[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Double-saber',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < fists.length; x++) {
      if (fists[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Fist',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < handguns.length; x++) {
      if (handguns[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Handgun',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < katanas.length; x++) {
      if (katanas[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Katana',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < launchers.length; x++) {
      if (launchers[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Launcher',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < mechguns.length; x++) {
      if (mechguns[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Mechgun',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < partisans.length; x++) {
      if (partisans[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Partisan',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < rifles.length; x++) {
      if (rifles[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Rifle',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < rods.length; x++) {
      if (rods[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Rod',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < sabers.length; x++) {
      if (sabers[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Saber',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < shots.length; x++) {
      if (shots[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Shot',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < slicers.length; x++) {
      if (slicers[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Slicer',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < swords.length; x++) {
      if (swords[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Sword',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < twinSwords.length; x++) {
      if (twinSwords[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Twin-sword',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < wands.length; x++) {
      if (wands[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Wand',
          index: x
        };
        return item;
      }
    }

  if (!found)
    for (let x = 0; x < frames.length; x++) {
      if (frames[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Frame',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < armors.length; x++) {
      if (armors[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Armor',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < barriers.length; x++) {
      if (barriers[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Barrier',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < shields.length; x++) {
      if (shields[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Shield',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < units.length; x++) {
      if (units[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Unit',
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < tools.length; x++) {
      if (tools[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Tool',
          objectSubType: tools[x].type,
          index: x
        };
        return item;
      }
    }
  if (!found)
    for (let x = 0; x < misc.length; x++) {
      if (misc[x].name.toLowerCase() === item.itemName.toLowerCase()) {
        found = true;
        item.type = {
          object: 'Misc',
          objectSubType: misc[x].type,
          index: x
        };
        return item;
      }
    }
  return item;
};

export default setType;
