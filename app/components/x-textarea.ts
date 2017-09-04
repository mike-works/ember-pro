import Component from '@ember/component';
import TextField from '../mixins/text-field';

export default Component.extend(TextField, {
  classNames: ['x-textarea']
});