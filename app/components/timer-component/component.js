import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  timer: Ember.inject.service(),

  tagName: '',
  timerStart: null,
  contracts: null,
  period: null,
  isRunning: Ember.computed.notEmpty('timerStart'),
  isDialogOpened: false,

  didInsertElement() {
    this._super(...arguments);
    this.get('timer').getTimerStart()
    .then((timerStart) => this.set('timerStart', timerStart));
  },

  actions: {
    startTimer() {
      this.get('timer').startTimer()
      .then((timerStart) => {
        this.set('timerStart', timerStart);
      });
    },

    stopTimer() {
      const store = this.get('store');
      store.findAll('contract')
      .then(contracts => {
        this.set('contracts', contracts);
        const period = store.createRecord('period', {
          fromTime: this.get('timerStart'),
          toTime: moment().toDate(),
          comment: '',
          contract: contracts.get('firstObject')
        });
        this.get('timer').stopTimer()
        .then(() => this.set('timerStart', null))
        .finally(() => {
          this.set('period', period);
          this.set('isDialogOpened', true);
        });
      });
      // TODO error
    }
  }
});
