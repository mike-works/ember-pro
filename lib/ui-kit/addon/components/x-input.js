import Component from '@ember/component';
import TextField from '../mixins/text-field';
import layout from "../templates/components/x-input";

export default Component.extend(TextField, {
  classNames: ['x-input'],
  type: 'text',
  layout
});