import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from '../config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
  moment: Ember.inject.service(),
  i18n: Ember.inject.service(),

  beforeModel() {
    const locale = this.calculateLocale();
    this.get('moment').changeLocale(locale);
    this.set('i18n.locale', locale);
  },

  /**
   * Calculates the locale that should be used for the set locale in the navigator. If there is an exact match it is
   * used. Otherwise the locale with the longest matching prefix is used. If none matches null is returned.
   */
  calculateLocale() {
    const defaultLocale = config.i18n.defaultLocale;
    const locales = this.get('i18n.locales');
    const locale = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage || defaultLocale;

    if (locales.contains(locale)) {
      return locale;
    }

    let matchingLocale = null;
    locales.forEach(elem => {
      if (locale.startsWith(elem))  {
        if (matchingLocale === null || elem.length > matchingLocale.length) {
          matchingLocale = elem;
        }
      }
    });

    return matchingLocale || defaultLocale;
  }
});
