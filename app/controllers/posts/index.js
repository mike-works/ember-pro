import Controller from '@ember/controller';
import { getOwner } from '@ember/application';

export default Controller.extend({
  init() {
    this._super(...arguments);
    getOwner(this).lookup('data:location').then(loc => {
      this.set('loc', loc );
    })
  }
});
