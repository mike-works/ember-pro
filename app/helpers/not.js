import { helper } from '@ember/component/helper';

export function not([x]) {
  return !x;
}

export default helper(not);
