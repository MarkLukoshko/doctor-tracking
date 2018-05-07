import Ember from 'ember';

export default Ember.Component.extend({
  itoast: Ember.inject.service(),
  routing: Ember.inject.service("-routing"),

  tagName: '',

  showInfoButton: false,

  buttonExtraClass: '',
  showInfoClass: Ember.computed('buttonExtraClass', function() {
    return 'btn btn-info ' + this.get('buttonExtraClass');
  }),

  contract: null,

  isEditOpened: false,
  isDeleteOpened: false,

  onDelete: null,

  actions: {
    openEditDialog() {
      this.set('isEditOpened', true);
    },

    openDeleteDialog() {
      this.set('isDeleteOpened', true);
    },

    deleteContract() {
      this.get('contract').destroyRecord()
      .then(() => {
        this.get('itoast').success('contract-edit-buttons.success-message');
        if (this.get('onDelete')) {
          this.sendAction('onDelete');
        }
      })
      .catch(() => this.get('itoast').error('contract-edit-buttons.error-message'));
    }
  }
});
