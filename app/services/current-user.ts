import Service from '@ember/service';
import { service } from '@ember-decorators/service';
// import SessionService from 'ember-simple-auth/'
class CurrentUserService extends Service {
  @service('store') store

  loadUserInfo(this: CurrentUserService) {
    let user = this.get('store').peekRecord('user', 'current');
    if (!user) {
      user = this.get('store').findRecord('user', 'current');
      user.then(u => {
        this.set('current', u);
      })
    }
    return user;
  }
}

declare module '@ember/service' {
  interface Registry {
    currentUser: CurrentUserService;
    session: Service;
  }
}

export default CurrentUserService;