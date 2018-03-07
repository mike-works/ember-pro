import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      as: 's'
    }
  },
  model({ search = '' }) {
    if (search) {
      return this.store.query('post', { search });
    }
    return this.store.findAll('post');
  },
  actions: {
    doRefresh(this: Ember.Route) {
      this.refresh();
    }
  }
});