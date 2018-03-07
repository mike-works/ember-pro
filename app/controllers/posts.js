import Controller from "@ember/controller";
import { debounce } from "@ember/runloop";

export default Controller.extend({
  _fireRouteRefresh(newVal) {
    this.set("search", newVal);
    this.send('doRefresh');
  },
  actions: {
    filterUpdated(newVal) {
      debounce(this, '_fireRouteRefresh', newVal, 250);
    }
  }
});
