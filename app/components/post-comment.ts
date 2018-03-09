import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  isEditing: false,
  disabled: false,
  isWaiting: false,
  saveEdit: task(function*() {
    this.set('isWaiting', true);
    yield timeout(3000);
    this.set('isWaiting', false);
    yield this.get('model').save();
    this.set('isEditing', false);
  }),
  actions: {
    beginEdit() {
      this.set('isEditing', true);
    },
    cancelEdit() {
      this.model.rollbackAttributes();
      this.get('saveEdit').cancelAll();
      this.set('isEditing', false);
      this.set('isWaiting', false);
    }
  }
});