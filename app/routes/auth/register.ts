import Route from '@ember/routing/route';
import { action } from '@ember-decorators/object';

class RegisterRoute extends Route {
  @action 
  register(this: Route) {
    this.get('currentModel').save();
  }
  model() {
    return this.store.createRecord('user');
  }
}

export default RegisterRoute;