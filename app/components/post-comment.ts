import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  classNames: ["post-comment"],
  isEditing: false,
  isUpdateCancellable: false,
  updateComment: task(function* updateCommentTask(comment) {
    this.set("isUpdateCancellable", true);
    yield timeout(3000);
    this.set("isUpdateCancellable", false);
    yield comment.save();
    this.set("isEditing", false);
  }),
  actions: {
    cancelUpdate() {
      this.get('updateComment').cancelAll();
      this.get('model').rollbackAttributes();
      this.set("isEditing", false);
      this.set("isUpdateCancellable", false);
      console.log('cancelled');
    }
  }
});