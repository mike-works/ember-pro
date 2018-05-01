/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Filter = require('broccoli-filter');
const stew = require('broccoli-stew');

function Commenter(inputNode) {
  Filter.call(this, inputNode);
}

Commenter.prototype = Object.create(Filter.prototype);

Commenter.prototype.processString = function(existingString, pth) {
  let d = new Date();
  return `/**
* ${pth}
*
* (c) ${d.getFullYear()} 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
* generated at: ${d.toISOString()}
*/
${existingString}
`;
};

Commenter.prototype.extensions = ["css", "js"];

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('vendor/math-shim.js');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  // @ts-ignore
  return new Commenter(app.toTree());
};
