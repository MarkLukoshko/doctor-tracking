import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('weekly', function() {
    this.route('week', {
      path: ':week_id'
    });
  });
  this.route('contracts', function() {
    this.route('detail', {
      path: ':contract_id'
    });
  });
  this.route('monthly', function() {
    this.route('month', {
      path: ':month_id'
    });
  });
});

export default Router;
