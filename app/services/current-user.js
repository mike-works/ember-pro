import Service, { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  loadUserInfo() {
    return this.get('store').peekRecord('user', 'current')
    || this.get('store').findRecord('user', 'current');
  }
});