import { helper } from '@ember/component/helper';

export function not([a]/*, hash*/) {
  return !a;
}

export default helper(not);
