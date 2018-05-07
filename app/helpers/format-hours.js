import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params) {
    if (params.length < 1) {
      throw "Expected a duration";
    }
    const duration = params[0];
    const hours = Math.floor(duration);
    const minutes = Math.floor((duration - hours) * 60);
    let formatted = hours.toString() + ':';
    if (minutes < 10) {
      formatted += '0';
    }
    formatted += minutes.toString();
    return formatted;
  }
});
