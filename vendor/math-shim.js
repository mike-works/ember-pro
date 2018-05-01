define('math', [], function() {
  // top-level module scope
  return {
    default: Math, // default export
    PI: Math.PI // a named export
  }
});