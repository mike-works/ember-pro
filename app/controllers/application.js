import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  currentUser: service(),
  init() {
    this._super(...arguments);
    let container = getOwner(this);
    let loc = container.lookup('data:location');
    this.set('loc', loc);
  }
});