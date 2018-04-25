import { inject as service } from '@ember/service';
import Helper from '@ember/component/helper';
import { observer } from '@ember/object';

export default Helper.extend({
  session: service(),
  onAuthStateChanged: observer('session.isAuthenticated', function() {
    this.recompute();
  }),
  compute() {
    return this.get('session.isAuthenticated');
  }
});