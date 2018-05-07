import moment from 'moment';

export function getLocalizedBase() {
  const base = moment({
    year: 1970,
    month: 0,
    day: 5
  });
  return base;
}

