import Ember from 'ember';

export function firstNotNull(params/*, hash*/) {
  const result = params.find(elem => {
    return !Ember.isNone(elem);
  });
  return result;
}

export default Ember.Helper.helper(firstNotNull);
