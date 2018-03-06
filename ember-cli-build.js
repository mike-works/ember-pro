/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const stew = require('broccoli-stew');
const CommentPlugin = require('./broccoli/commenter');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  
  app.import('vendor/math-shim.js');
  
  // function commentTree(tree) {
  //   stew.debug(
  //     new CommentPlugin(tree), { name: 'after' }
  //   )
  // }

  return app.toTree();
};
