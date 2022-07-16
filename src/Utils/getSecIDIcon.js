import Greenill from '../assets/Greenill_icon.png';
import Viridia from '../assets/Viridia_icon.png';
import Bluefull from '../assets/Bluefull_icon.png';
import Oran from '../assets/Oran_icon.png';
import Purplenum from '../assets/Purplenum_icon.png';
import Skyly from '../assets/Skyly_icon.png';
import Pinkal from '../assets/Pinkal_icon.png';
import Whitill from '../assets/Whitill_icon.png';
import Yellowboze from '../assets/Yellowboze_icon.png';
import Redria from '../assets/Redria_icon.png';

const getSecIDIcon = id => {
  switch (true) {
    case id === 'Greenill': {
      return Greenill;
    }
    case id === 'Viridia': {
      return Viridia;
    }
    case id === 'Bluefull': {
      return Bluefull;
    }
    case id === 'Oran': {
      return Oran;
    }
    case id === 'Purplenum': {
      return Purplenum;
    }
    case id === 'Skyly': {
      return Skyly;
    }
    case id === 'Pinkal': {
      return Pinkal;
    }
    case id === 'Whitill': {
      return Whitill;
    }
    case id === 'Yellowboze': {
      return Yellowboze;
    }
    case id === 'Redria': {
      return Redria;
    }
    default:
      return Viridia;
  }
};

export default getSecIDIcon;
