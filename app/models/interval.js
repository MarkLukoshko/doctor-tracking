import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const {attr, hasMany} = DS;

export default DS.Model.extend({
  startTime: attr('datetime'),
  endTime: attr('datetime'),
  periods: hasMany('period', {
    inverse: null
  }),

  inclusiveEndTime: Ember.computed('endTime', function() {
    const endTime = moment(this.get('endTime'));
    return endTime.subtract(1, 'days').endOf('day');
  }),

  workedTime: Ember.computed('startTime', 'endTime', 'periods.@each.{fromTime,toTime}', function() {
    let duration = 0;
    const startTime = moment(this.get('startTime'));
    const endTime = moment(this.get('endTime'));
    this.get('periods').forEach(period => {
      const min = moment.max(moment(period.get('fromTime')), startTime);
      const max = moment.min(moment(period.get('toTime')), endTime);
      duration += max.diff(min, 'hours', true);
    });
    return duration;
  }),

  previousId: Ember.computed('id', function() {
    let previousId = parseInt(this.get('id')) - 1;
    if (previousId < 0) {
      previousId = null;
    }
    return previousId;
  }),

  hasPrevious: Ember.computed('previousId', function() {
    return !Ember.isNone(this.get('previousId'));
  }),

  nextId: Ember.computed('id', function() {
    return parseInt(this.get('id')) + 1;
  })
});
