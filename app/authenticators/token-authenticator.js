import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {
    if (!Ember.isEmpty(data.token)) {
      return Ember.RSVP.resolve(data);
    }
    return Ember.RSVP.reject();
  },

  authenticate(credentials) {
    return this.get('ajax').post('/login', {data: credentials});
  },

  invalidate() {
    return Ember.RSVP.resolve();
  }
});
