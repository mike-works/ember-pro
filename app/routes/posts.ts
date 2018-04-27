import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      replace: true,
      as: "s"
    }
  },
  actions: {
    _refreshRoute() {
      this.refresh();
    }
  },
  model(params) {
    let { search } = params;
    if (!search) {
      return this.store.findAll("post");
    } else {
      return this.store.query("post", { search });
    }
  }
});