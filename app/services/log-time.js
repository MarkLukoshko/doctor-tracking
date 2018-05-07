import Ember from 'ember';
import _ from 'lodash';

export default Ember.Service.extend({
  observers: [],

  logTime(period) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      period.save()
      .then(response => {
        Ember.run.next(this, () => this.notifyObservers(response));
        resolve(response);
      })
      .catch(() => reject());
    });
  },

  notifyObservers(response) {
    _.forEach(this.get('observers'), observer => observer(response));
  },

  addObserver(observer) {
    this.get('observers').push(observer);
  }
});
