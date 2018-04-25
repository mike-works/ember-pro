import Helper from '@ember/component/helper';
import { observer } from '@ember/object';
import { service } from '@ember-decorators/service';

class IsAuthenticatedHelper extends Helper {
  @service('store') store

  compute(this: IsAuthenticatedHelper) {
    return (this as any).get('session.isAuthenticated');
  }
}

(IsAuthenticatedHelper.prototype as any).onAuthStateChanged = observer(
  "session.isAuthenticated",
  function(this: IsAuthenticatedHelper) {
    this.recompute();
  }
);

export default IsAuthenticatedHelper;