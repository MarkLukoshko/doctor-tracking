import moment from 'moment';
import {getLocalizedBase} from './time';

export function getCurrentMonthId() {
  return getMonthId(moment());
}

export function getCurrentMonthStartDay() {
  return moment().startOf('month');
}

export function getCurrentMonthEndDay() {
  return moment().endOf('month').startOf('day');
}

export function getMonthId(time) {
  const base = getLocalizedBase();
  const start = time.startOf('month');
  return Math.ceil(start.diff(base, 'months', true));
}
