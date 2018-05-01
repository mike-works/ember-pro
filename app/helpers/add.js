import { helper } from '@ember/component/helper';

export function add([x, y]/*, hash*/) {
  return x + y;
}

export default helper(add);
