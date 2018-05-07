import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  contracts: null,

  filteredContracts: Ember.computed.filter('contracts.@each.{isNew,isDeleted}', function(contract) {
    return !contract.get('isNew') && !contract.get('isDeleted');
  }),

  sortedContracts: Ember.computed.sort('filteredContracts.@each.{startDate,endDate}', function(a, b) {
    const order = b.get('startDate') - a.get('startDate');
    if (order === 0) {
      return b.get('endDate') - a.get('endDate');
    }
    return order;
  })
});
