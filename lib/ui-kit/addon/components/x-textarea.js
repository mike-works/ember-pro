import Component from '@ember/component';
import TextField from '../mixins/text-field';
import layout from "../templates/components/x-textarea";

export default Component.extend(TextField, {
  classNames: ['x-textarea'],
  layout
});