import Ember from 'ember';
import moment from 'moment';
import Interval from 'doctrack/models/interval';

export default Interval.extend({
  name: Ember.computed('startTime', function() {
    const month = this.get('startTime').getMonth();
    return moment.monthsShort(month);
  }),

  year: Ember.computed('startTime', function() {
    return this.get('startTime').getFullYear();
  })
});
