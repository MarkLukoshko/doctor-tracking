import moment from 'moment';
import {getLocalizedBase} from './time';

export function getCurrentWeekId() {
  return getWeekId(moment());
}

export function getWeekId(time) {
  const base = getLocalizedBase();
  const start = time.startOf('week');
  return Math.ceil(start.diff(base, 'weeks', true));
}
