import Controller from '@ember/controller';
import comment from 'commently/models/comment';

export default Controller.extend({
  actions: {
    saveComment(post, commentDraft) {
      // this.set('isDeleting', true)
      this.store.createRecord('comment', {
        body: commentDraft.body,
        post,
        user: this.store.peekRecord('user', 45)
      }).save().then(savedRecord => {
        commentDraft.set('body', '');
      });
    }
  }
});
