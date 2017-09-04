import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    register() {
      this.get('currentModel').save();
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});