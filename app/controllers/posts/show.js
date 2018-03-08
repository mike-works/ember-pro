import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveComment(post, draftObject) {
      let newComment = this.store.createRecord('comment', {
        post,
        user: this.store.peekRecord('user', 1),
        body: draftObject.get('comment')
      });
      newComment.save().then(() => {
        draftObject.set('comment', '');
      });
    }
  }
});
