/* eslint-env node */
'use strict';
const MyPlugin = require('./my-plugin');

module.exports = {
  name: 'commenter',
  postprocessTree(treeType, tree) {
    console.log(treeType);
    if (treeType === 'js') {
      return new MyPlugin(tree);
    } else return tree;
  },
  isDevelopingAddon() {
    return true;
  }
};
