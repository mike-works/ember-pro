import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  classNames: ['form-group'],
  classNameBindings: ['isOk:has-success', 'isError:has-error'],
  disabled: false,
  readonly: false,
  isError: computed('value.length', 'errors.[]', function() : boolean {
    return this.get('value.length') && (this.get('errors.length') > 0);
  }),
  isOk: computed('value.length', 'isError', function() : boolean {
    return !this.get('isError') && (this.get('value.length') > 0);
  }),
  actions: {
    _oninput(evt) {
      this.set('value', evt.target.value);
      this.sendAction('oninput', ...arguments);
    },
    _onclick(/* evt */) {
      this.sendAction('onclick', ...arguments);
    }
  }
});