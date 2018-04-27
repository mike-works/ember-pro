import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default class PostsShow extends Controller.extend({
  // anything which *must* be merged to prototype here
  saveCommentTask: task(function* saveCommentGenerator(this: any, post, commentDraft) {
    let newComment = this.store.createRecord('comment', {
      body: commentDraft.get('body'),
      post,
      user: this.store.peekRecord('user', 1)
    });
    let savedComment = yield newComment.save();
    commentDraft.set('body', '');  
  })
  // actions: {
  //   saveComment(post, commentDraft) {
  //   }
  // }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'posts/show': PostsShow;
  }
}
