import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RedirectionRoute from 'doctrack/routes/redirection-route';
import {getCurrentMonthId} from 'doctrack/utils/month';

export default RedirectionRoute.extend(AuthenticatedRouteMixin, {
  redirectionTarget: 'monthly.month',

  getRedirectionParameter() {
    return getCurrentMonthId();
  }
});
