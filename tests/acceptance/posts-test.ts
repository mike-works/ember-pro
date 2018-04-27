import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /posts', async function(assert) {
    await visit('/posts');
    assert.equal(currentURL(), '/posts');

  });
});
