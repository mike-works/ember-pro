import Component from '@ember/component';
import stateFor from 'ember-state-services/state-for';

export default Component.extend({
  classNames: ["post-full"],
  draft: stateFor("comment-draft", "model"),
  actions: {
    onDeleteComment(comment) {
      comment.destroyRecord();
    }
  }
});