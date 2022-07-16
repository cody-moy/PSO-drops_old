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

const getItemFromWiki = item => {
  let itemType = item.type.object;
  let index = item.type.index;

  switch (true) {
    case itemType === 'Bazooka': {
      return bazookas[index];
    }
    case itemType === 'Cane': {
      return canes[index];
    }
    case itemType === 'Card': {
      return cards[index];
    }
    case itemType === 'Claw': {
      return claws[index];
    }
    case itemType === 'Dagger': {
      return daggers[index];
    }
    case itemType === 'Double-saber': {
      return doubleSabers[index];
    }
    case itemType === 'Fist': {
      return fists[index];
    }
    case itemType === 'Handgun': {
      return handguns[index];
    }
    case itemType === 'Katana': {
      return katanas[index];
    }
    case itemType === 'Launcher': {
      return launchers[index];
    }
    case itemType === 'Mechgun': {
      return mechguns[index];
    }
    case itemType === 'Partisan': {
      return partisans[index];
    }
    case itemType === 'Rifle': {
      return rifles[index];
    }
    case itemType === 'Rod': {
      return rods[index];
    }
    case itemType === 'Saber': {
      return sabers[index];
    }
    case itemType === 'Shot': {
      return shots[index];
    }
    case itemType === 'Slicer': {
      return slicers[index];
    }
    case itemType === 'Sword': {
      return swords[index];
    }
    case itemType === 'Twin-sword': {
      return twinSwords[index];
    }
    case itemType === 'Wand': {
      return wands[index];
    }
    case itemType === 'Frame': {
      return frames[index];
    }
    case itemType === 'Armor': {
      return armors[index];
    }
    case itemType === 'Barrier': {
      return barriers[index];
    }
    case itemType === 'Shield': {
      return shields[index];
    }
    case itemType === 'Unit': {
      return units[index];
    }
    case itemType === 'Tool': {
      return tools[index];
    }
    case itemType === 'Misc': {
      return misc[index];
    }
    default:
      break;
  }
};

export default getItemFromWiki;
