import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('show', { path: ':id' });
  });

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('styleguide');
  this.mount('articles', {
    as: 'hr-articles'
  });
  this.mount('articles', {
    as: 'eng-articles'
  });
  this.mount('articles', {
    as: 'exec-articles'
  });
});

export default Router;
