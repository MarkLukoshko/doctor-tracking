import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';
import { validator, buildValidations } from 'ember-cp-validations';

export const Validations = buildValidations({
  fromTime: validator('presence', true),
  toTime: validator('presence', true),
  comment: validator('no-whitespace-around'),
  contract: validator('presence', true)
});

const {attr, belongsTo} = DS;

export default DS.Model.extend(Validations, {
  fromTime: attr('datetime'),
  toTime: attr('datetime'),
  comment: attr('string'),
  contract: belongsTo('contract'),

  duration: Ember.computed('fromTime', 'toTime', function() {
    const start = moment(this.get('fromTime'));
    const end = moment(this.get('toTime'));
    return end.diff(start, 'hours', true);
  })
});
