import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  username: validator('presence', true),
  password: validator('presence', true)
});

export default Ember.Component.extend(Validations, {
  session: Ember.inject.service(),
  itoast: Ember.inject.service(),

  username: null,
  password: null,

  actions: {
    signin() {
      const credentials = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:token-authenticator', credentials).then(() => {
        this.get('itoast').success('login.success-message');
      }).catch(() => {
        this.get('itoast').error('login.error-message');
        this.set('password', null);
      });
    }
  }
});
