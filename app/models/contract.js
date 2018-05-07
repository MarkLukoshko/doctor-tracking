import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';
import { validator, buildValidations } from 'ember-cp-validations';

const {attr, hasMany} = DS;

export const Validations = buildValidations({
  name: [
    validator('presence', true),
    validator('no-whitespace-around')
  ],
  // TODO startDate < endDate
  startDate: validator('presence', true),
  endDate: validator('presence', true),
  // TODO hoursPerWeek > 0
  hoursPerWeek: validator('presence', true)
});

export default DS.Model.extend(Validations, {
  name: attr('string'),
  hoursPerWeek: attr('number'),
  startDate: attr('datetime'),
  endDate: attr('datetime'),
  periods: hasMany('period'),

  // the time in hours that should have been worked in this contract until now
  shouldTimeUntilNow: Ember.computed('startDate', 'endDate', 'hoursPerWeek', function() {
    return this.calculateShouldTime(true);
  }),

  shouldTime: Ember.computed('startDate', 'endDate', 'hoursPerWeek', function() {
    return this.calculateShouldTime(false);
  }),

  calculateShouldTime(untilNow) {
    const startDate = moment(this.get('startDate')).startOf('day');
    // use the beginning of the next day as end to get a round period of time
    let endDate = moment(this.get('endDate')).add(1, 'days').startOf('day');
    if (untilNow) {
      endDate = moment.min(moment(), endDate);
    }
    const shouldTime = endDate.diff(startDate, 'weeks', true) * this.get('hoursPerWeek');
    return Math.max(0, shouldTime);
  },

  workedTime: Ember.computed('periods.@each.duration', function() {
    let duration = 0;
    this.get('periods').forEach(period => {
      duration += period.get('duration');
    });
    return duration;
  }),

  hasWorkDoneUntilNow: Ember.computed('shouldTimeUntilNow', 'workedTime', function() {
    return this.get('shouldTimeUntilNow') <= this.get('workedTime');
  }),

  hasWorkDone: Ember.computed('shouldTime', 'workedTime', function() {
    return this.get('shouldTime') <= this.get('workedTime');
  })
});
