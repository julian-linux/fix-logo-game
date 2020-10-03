import ZOOVU_O from '../assets/O.svg';
import ZOOVU_U from '../assets/U.svg';
import ZOOVU_V from '../assets/V.svg';
import ZOOVU_Z from '../assets/Z.svg';

const CORRECT_PATTERN = [
  { img: ZOOVU_Z, id: 'Z', isEmpty: false },
  { img: ZOOVU_O, id: 'O_1', isEmpty: false },
  { img: ZOOVU_O, id: 'O_2', isEmpty: false },
  { img: ZOOVU_V, id: 'V', isEmpty: false },
  { img: ZOOVU_U, id: 'U', isEmpty: false },
];

const EMPTY_PATTER = [
  { img: null, id: null, isEmpty: true },
  { img: null, id: null, isEmpty: true },
  { img: null, id: null, isEmpty: true },
  { img: null, id: null, isEmpty: true },
  { img: null, id: null, isEmpty: true },
];

export { CORRECT_PATTERN, EMPTY_PATTER };
