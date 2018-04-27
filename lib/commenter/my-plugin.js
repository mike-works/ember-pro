const Filter = require("broccoli-filter");

function MyFilter(inputNode) {
  Filter.call(this, inputNode);
}

MyFilter.prototype = Object.create(Filter.prototype);

MyFilter.prototype.processString = function(existingString, pathName) {
  let d = new Date();
  
  return `
/**
 * ${pathName}
 *
 * (c) ${d.getFullYear()} 🦄🦄🦄🔫🌈🍺🍺 All Rights Reserved
 * generated at: ${d.toISOString()}
 */
  ${existingString}`;
};

MyFilter.prototype.extensions = ["css", "js"];

module.exports = MyFilter;