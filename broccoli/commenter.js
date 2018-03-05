/* eslint-env node */
const Filter = require('broccoli-filter');

function CommentPlugin(inputNode) {
  Filter.call(this, inputNode);
  this.date = new Date();
}

CommentPlugin.prototype = Object.create(Filter.prototype);

CommentPlugin.prototype.processString = 
  function(existingString, filePath) {
  return `/**
* ${filePath}
*
* (c) ${this.date.getFullYear()} 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
* generated at: ${this.date.toISOString()}
*/
${existingString}`;
};

CommentPlugin.prototype.extensions = ['css', 'js'];
// CommentPlugin.prototype.targetExtension = 'js';

module.exports = CommentPlugin;