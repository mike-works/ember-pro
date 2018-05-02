import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: { 
      replace: true,
      as: 's'
    }
  },
  actions: {
    refreshPostsData() {
      this.refresh();
    }
  },
  model({ search }) {
    if (!search) {
      return this.store.findAll('post');
    } else {
      return this.store.query('post', { search });
    }
  }
});