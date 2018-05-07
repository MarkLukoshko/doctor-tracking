import Ember from 'ember';
import moment from 'moment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  handleResponse(response, resolve, reject) {
    response
    .then((timer) => resolve(moment(timer.timer_start).toDate()))
    .catch(() => reject());
  },

  getTimerStart() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.handleResponse(this.get('ajax').request('/timer'), resolve, reject);
    });
  },

  startTimer() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const params = {
        data: JSON.stringify({timer_start: moment().toISOString()}),
        contentType: 'application/json'
      };
      this.handleResponse(this.get('ajax').put('/timer', params), resolve, reject);
    });
  },

  stopTimer() {
    return this.get('ajax').del('/timer');
  }
});
