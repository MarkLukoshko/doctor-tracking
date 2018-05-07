import Ember from 'ember';
import {Validations} from 'doctrack/models/period';
import formBufferProperty from 'ember-validated-form-buffer';

export default Ember.Component.extend({
  logTime: Ember.inject.service(),
  itoast: Ember.inject.service(),

  tagName: '',

  contracts: null,
  period: null,
  title: null,

  isOpened: false,

  initialSelection: Ember.computed('buffer.contract.id', function() {
    const contractId = this.get('period.contract.id');
    const contracts = this.get('contracts');
    if (contracts) {
      return contracts.find(contract => contract.get('id') === contractId);
    }
    return null;
  }),

  buffer: formBufferProperty('period', Validations),

  actions: {
    logTime() {
      this.get('buffer').applyBufferedChanges();
      this.get('logTime').logTime(this.get('period'))
      .then(() => this.get('itoast').success('log-time.success-message'))
      .catch(() => this.get('itoast').error('log-time.error-message'))
      .finally(() => this.set('isOpened', false));
    },

    closeDialog() {
      this.get('buffer').discardBufferedChanges();
      const period = this.get('period');
      if (period && period.get('isNew')) {
        period.rollbackAttributes();
      }
      this.set('isOpened', false);
    }
  }
});
