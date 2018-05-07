import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  periods: null,
  contracts: null,
  showJumpToContractButton: true,

  filteredPeriods: Ember.computed.filter('periods.@each.{isNew,isDeleted}', function(period) {
    return !period.get('isNew') && !period.get('isDeleted');
  }),

  sortedPeriods: Ember.computed.sort('filteredPeriods.@each.{fromTime,toTime}', function(a, b) {
    const order = b.get('fromTime') - a.get('fromTime');
    if (order === 0) {
      return b.get('toTime') - a.get('toTime');
    }
    return order;
  })
});
