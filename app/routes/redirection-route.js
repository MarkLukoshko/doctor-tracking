import Ember from 'ember';

export default Ember.Route.extend({
  redirectionTarget: null,

  redirect() {
    const redirection = this.get('redirectionTarget');
    if (Ember.isPresent(redirection)) {
      this.transitionTo(redirection, this.getRedirectionParameter());
    }
  },

  getRedirectionParameter() {
    return null;
  }
});
