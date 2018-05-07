import Ember from 'ember';
import moment from 'moment';
import Interval from 'doctrack/models/interval';

export default Interval.extend({
  weekOfYear: Ember.computed('startTime', function() {
    return moment(this.get('startTime')).isoWeek();
  }),

  isWithinOneMonth: Ember.computed('startTime', 'endTime', function() {
    const startTime = this.get('startTime');
    const endTime = this.get('endTime');
    return startTime.getMonth() === endTime.getMonth();
  })
});
