import I18nValidator from './i18n-validator';
import _string from 'lodash/string';

export default I18nValidator.extend({
  doValidate(value) {
    if (value === _string.trim(value)) {
      return null;
    }
    return 'errors.no-whitespace-around';
  }
});
