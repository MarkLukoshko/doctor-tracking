import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    username: attr('string'),
    fullName: attr('string'),
    timezone: attr('string')
});
