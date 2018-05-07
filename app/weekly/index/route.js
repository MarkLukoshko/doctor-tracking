import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RedirectionRoute from 'doctrack/routes/redirection-route';
import {getCurrentWeekId} from 'doctrack/utils/week';

export default RedirectionRoute.extend(AuthenticatedRouteMixin, {
  redirectionTarget: 'weekly.week',

  getRedirectionParameter() {
    return getCurrentWeekId();
  }
});
