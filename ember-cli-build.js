/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const stew = require('broccoli-stew');
const CommentPlugin = require('./broccoli/commenter');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'esw-cache-fallback': {
      // RegExp patterns specifying which URLs to cache.
      patterns: [        
        'https://commently-api-stage.herokuapp.com/api/(.+)',
      ]
    }
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
