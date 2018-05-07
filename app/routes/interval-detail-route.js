import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  logTime : Ember.inject.service(),

  recordName: null,

  init() {
    this._super(...arguments);
    this.get('logTime').addObserver(() => this.refresh());
  },

  model(params) {
    const recordName = this.get('recordName');
    let hash = {
      contracts: this.store.findAll('contract')
    };
    hash[recordName] = this.store.findRecord(recordName, params[recordName + '_id']);
    return Ember.RSVP.hash(hash);
  }
});
