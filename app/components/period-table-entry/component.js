import Ember from 'ember';

export default Ember.Component.extend({
  itoast: Ember.inject.service(),

  tagName: 'tr',

  period: null,
  contracts: null,

  showJumpToContractButton: true,

  isEditOpened: false,
  isDeleteOpened: false,

  actions: {
    openEditDialog() {
      this.set('isEditOpened', true);
    },

    openDeleteDialog() {
      this.set('isDeleteOpened', true);
    },

    deletePeriod() {
      this.get('period').destroyRecord()
      .then(() => this.get('itoast').success('period-table.entry.success-message'))
      .catch(() => this.get('itoast').error('period-table.entry.error-message'));
    }
  }
});
