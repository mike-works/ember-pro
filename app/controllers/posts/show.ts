import Controller from '@ember/controller';

export default class PostsShow extends Controller.extend({
  // anything which *must* be merged to prototype here
  actions: {
    saveComment(post, commentDraft) {
      let newComment = this.store.createRecord('comment', {
        body: commentDraft.get('body'),
        post,
        user: this.store.peekRecord('user', 1)
      });
      newComment.save().then(savedComment => {
        commentDraft.set('body', '');
      });
    }
  }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'posts/show': PostsShow;
  }
}
