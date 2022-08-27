import { fromDate } from 'dot-beat-time';

export const getBeatTime = () => {
  return fromDate(new Date());
};
