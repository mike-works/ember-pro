import Controller from '@ember/controller';
import { debounce } from '@ember/runloop';

export default Controller.extend({
  refreshPosts(newSearch) {
    this.set('search', newSearch);
    this.send('refreshPostsData');
  },
  actions: {
    searchUpdated(newSearch) {
      debounce(this, 'refreshPosts', newSearch, 250);
    }
  }
});
