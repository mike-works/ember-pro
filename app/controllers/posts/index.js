import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('loc', getOwner(this).lookup('data:location'));
  }
});
