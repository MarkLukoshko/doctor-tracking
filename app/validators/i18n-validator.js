import Ember from 'ember';
import BaseValidator from 'ember-cp-validations/validators/base';

export default BaseValidator.extend({
  i18n: Ember.inject.service(),

  validate(value) {
    let messageKey = this.doValidate(value);
    if (messageKey === null) {
      return true;
    }
    const i18n = this.get('i18n');
    let description =  i18n.t('errors.description');
    let message = i18n.t(messageKey, {
      description: description
    });
    return this.unwrap(message);
  },

  unwrap(input) {
    if (input instanceof Ember.Handlebars.SafeString) {
      return input.toString();
    }
    return input;
  },

  doValidate(/* value */) {
    return true;
  }
});
