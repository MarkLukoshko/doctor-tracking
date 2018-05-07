import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  moment: Ember.inject.service(),

  locales: Ember.computed('i18n.locale', 'i18n.locales', function() {
    const i18n = this.get('i18n');
    return this.get('i18n.locales').map(function(loc) {
      return {
        id: loc,
        name: i18n.t('select-language.name.' + loc)
      };
    });
  }),

  actions: {
    setLocale() {
      const locale = this.$('select').val();
      this.set('i18n.locale', locale);
      this.get('moment').changeLocale(locale);
    }
  }
});
