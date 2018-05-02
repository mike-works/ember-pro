import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  classNames: ['post-comment'],
  isEditing: false,
  updateComment: task(function*() {
    yield this.get('model').save();
    this.set('isEditing', false);
  }),
  actions: {
    cancelEdit() {
      this.get('updateComment').cancelAll();
      this.get('model').rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});