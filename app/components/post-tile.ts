import Component from '@ember/component';
import stateFor from "ember-state-services/state-for";

export default Component.extend({
  commentDraft: stateFor("post-info", "model"),
  classNames: ["post-tile"]
});