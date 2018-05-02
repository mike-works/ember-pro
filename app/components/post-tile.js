import Component from '@ember/component';
import stateFor from 'ember-state-services/state-for';

export default Component.extend({
  classNames: ["post-tile"],
  draft: stateFor("comment-draft", "model")
});