import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  isOpened: false,
  title: '',
  content: '',
  confirmText: 'Confirm',

  finish(action) {
    this.set('isOpened', false);
    if (this.get(action)) {
      this.sendAction(action);
    }
  },

  actions: {
    confirm() {
      this.finish('confirm');
    },

    cancel() {
      this.finish('cancel');
    }
  }
});
