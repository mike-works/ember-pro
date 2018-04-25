import Service from '@ember/service';
import { service } from '@ember-decorators/service';
// import SessionService from 'ember-simple-auth/'
class CurrentUserService extends Service {
  @service('store') store

  loadUserInfo(this: CurrentUserService) {
    return this.get('store').peekRecord('user', 'current')
    || this.get('store').findRecord('user', 'current');
  }
}

declare module '@ember/service' {
  interface Registry {
    currentUser: CurrentUserService;
    session: Service;
  }
}

export default CurrentUserService;