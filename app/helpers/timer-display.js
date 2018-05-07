import Ember from 'ember';
import moment from 'moment';

export default Ember.Helper.extend({
  intervalTimer: null,

  compute(params) {
    this.clearTimer();
    this.intervalTimer = setTimeout(Ember.run.bind(this, this.recompute), 500);

    const timerStart = moment(params[0]);
    const duration = moment.duration(moment().diff(timerStart));
    return this.renderDuration(duration);
  },

  clearTimer() {
    clearTimeout(this.intervalTimer);
  },

  destroy() {
    this.clearTimer();
    this._super(...arguments);
  },

  renderDuration(duration) {
    const hours = parseInt(duration.asHours());
    const minutes = parseInt(duration.asMinutes() - hours*60);
    const seconds = parseInt(duration.asSeconds() - (hours*60*60 + minutes*60));
    let formatted = "";
    formatted += hours.toString() + ":";
    if (minutes < 10) {
      formatted += "0";
    }
    formatted += minutes.toString() + ":";
    if (seconds < 10) {
      formatted += "0";
    }
    formatted += seconds.toString();
    return formatted;
  }
});
