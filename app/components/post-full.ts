import Component from '@ember/component';
import stateFor from 'ember-state-services/state-for';
import model from 'ember-data/model';

export default Component.extend({
  commentDraft: stateFor("post-info", "model"),
  classNames: ["post-full"],

  actions: {
    deleteComment(comment: model) {
      comment.destroyRecord();
    }
  }
});