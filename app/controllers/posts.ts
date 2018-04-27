import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { debounce } from '@ember/runloop';
 
export default class PostsController extends Controller.extend({
  // anything which *must* be merged to prototype here

}) {
  search: string = ''
  constructor() {
    super();
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  refreshArticleList(newSearch: string) {
    (this as any).set('search', newSearch);
    this.send('_refreshRoute');
  }

  searchUpdated(x: string) {
    debounce(this, "refreshArticleList", x, 250);
  }
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'posts': PostsController;
  }
}
