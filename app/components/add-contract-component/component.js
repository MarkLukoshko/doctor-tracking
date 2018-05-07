import Ember from 'ember';
import {getCurrentMonthStartDay, getCurrentMonthEndDay} from 'doctrack/utils/month';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  store: Ember.inject.service(),

  contract: null,
  isDialogOpened: false,

  actions: {
    openAddContract() {
      const contract = this.get('store').createRecord('contract', {
        name: null,
        startDate: getCurrentMonthStartDay(),
        endDate: getCurrentMonthEndDay(),
        hoursPerWeek: 30
      });
      this.set('contract', contract);
      this.set('isDialogOpened', true);
    }
  }
});
