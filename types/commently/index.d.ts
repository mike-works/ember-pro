
import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};

declare module '@ember-decorators/object' {
  export function observes(...propertyNames: string[]): MethodDecorator;
}

declare module 'ember' {
  namespace Ember {
    interface Route<T = any> {
      currentModel: T;
    }
  }
}