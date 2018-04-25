// import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Ember from 'ember';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';

const {
  Logger
} = Ember;

class LoginRoute extends Route {
  @service('session') session;
  @service('currentUser') currentUser;
  
  @action
  login(this: LoginRoute, email, password) {
    this.get('session')
      .authenticate('authenticator:oauth2', email, password)
      .then(() => {
        return this.get('currentUser').loadUserInfo();
      })
      .catch((e) => {
        Logger.error('Problem logging in', e);
      });
  }
  model() {
    return {
      email: '',
      password: ''
    };
  }
}

export default LoginRoute;