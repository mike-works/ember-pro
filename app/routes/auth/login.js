import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Ember from 'ember';

const {
  Logger
} = Ember;

export default Route.extend({
  session: service(),
  currentUser: service(),
  actions: {
    login(email, password) {
      this.get('session')
        .authenticate('authenticator:oauth2', email, password)
        .then(() => {
          return this.get('currentUser').loadUserInfo();
        })
        .catch((e) => {
          Logger.error('Problem logging in', e);
        });
    }
  },
  model() {
    return {
      email: '',
      password: ''
    };
  }
});