import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      contracts: this.store.findAll('contract'),
      contract: this.store.findRecord('contract', params.contract_id)
    });
  }
});
