import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    redirectToContracts() {
      this.transitionToRoute('contracts');
    }
  }
});
