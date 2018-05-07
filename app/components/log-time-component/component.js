import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: '',

  contracts: null,
  period: null,
  isDialogOpened: false,

  actions: {
    openLogTime() {
      const store = this.get('store');
      store.findAll('contract')
      .then(contracts => {
        this.set('contracts', contracts);
        const period = store.createRecord('period', {
          fromTime: moment().startOf('day').toDate(),
          toTime: moment().toDate(),
          comment: '',
          contract: contracts.get('firstObject')
        });
        this.set('period', period);
        this.set('isDialogOpened', true);
      });
    }
  }
});
