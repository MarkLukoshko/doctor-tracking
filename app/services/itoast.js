import Ember from 'ember';

export default Ember.Service.extend({
  i18n: Ember.inject.service(),
  toast: Ember.inject.service(),

  success(messageKey, titleKey) {
    const i18n = this.get('i18n');
    titleKey = titleKey || 'itoast.success-title';
    this.get('toast').success(i18n.t(messageKey), i18n.t(titleKey));
  },

  error(messageKey, titleKey) {
    const i18n = this.get('i18n');
    titleKey = titleKey || 'itoast.error-title';
    this.get('toast').error(i18n.t(messageKey), i18n.t(titleKey));
  },
});
