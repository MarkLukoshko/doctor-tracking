import Ember from 'ember';
import {Validations} from 'doctrack/models/contract';
import formBufferProperty from 'ember-validated-form-buffer';

export default Ember.Component.extend({
  itoast: Ember.inject.service(),

  tagName: '',

  contract: null,
  title: null,

  isOpened: false,

  buffer: formBufferProperty('contract', Validations),

  actions: {
    saveContract() {
      this.get('buffer').applyBufferedChanges();
      this.get('contract').save()
      .then(() => this.get('itoast').success('contract-dialog.success-message'))
      .catch(() => this.get('itoast').error('contract-dialog.error-message'))
      .finally(() => this.set('isOpened', false));
    },

    closeDialog() {
      this.get('buffer').discardBufferedChanges();
      const contract = this.get('contract');
      if (contract && contract.get('isNew')) {
        contract.rollbackAttributes();
      }
      this.set('isOpened', false);
    }
  }
});
