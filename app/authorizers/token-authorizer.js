import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
  authorize(sessionData, setHeader) {
    const token = sessionData.token;
    if (!Ember.isEmpty(token)) {
      setHeader('Authentication', token);
    }
  }
});
