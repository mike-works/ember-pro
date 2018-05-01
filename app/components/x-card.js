import Component from '@ember/component';

export default class XCard extends Component {
  constructor() {
    super(...arguments);
    this._count = 1;
  }
}

function renderName(firstName, otherNamesFn) {
  return `${firstName} ${otherNamesFn()}`;
}
let y = 4;
renderName('foo', function(x) {

});
let count =0;
function setCount(newVal) {

}

let myAction = function() {
  // nothing
  (function() {
    let x = count + 1;
    setCount(x);
  }.bind(this))()
}.bind(this)