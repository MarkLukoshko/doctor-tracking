import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  week: null,
  contracts: null,

  startFormat: Ember.computed('week.isWithinOneMonth', function() {
    if (this.get('week.isWithinOneMonth')) {
      return "DD.";
    }
    return "DD. MMMM";
  })
});
