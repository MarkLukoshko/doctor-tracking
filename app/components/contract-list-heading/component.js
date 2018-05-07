import Ember from 'ember';

export default Ember.Component.extend({
  contracts: null,
  hasContracts: Ember.computed.notEmpty('contracts.[]')
});
