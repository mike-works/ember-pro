import Helper from '@ember/component/helper';

export function titleize([s = '']/* , hash*/) {
  return s[0].toUpperCase() + s.substring(1);
}

export default Helper.helper(titleize);
