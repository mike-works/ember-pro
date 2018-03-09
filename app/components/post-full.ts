import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';
import { task } from 'ember-concurrency';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  postInfo: stateFor('post-info', 'model'),
  deleteComment: task(function*(comment) {
    yield comment.destroyRecord();
  })
});