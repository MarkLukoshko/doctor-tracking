import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),

  namespace: '/api',
  headers: Ember.computed('session.data.authenticated.token', function() {
    let headers = {};
    const token = this.get('session.data.authenticated.token');
    if (token) {
      headers['Authentication'] = token;
    }
    return headers;
  })
});
