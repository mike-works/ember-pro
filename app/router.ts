import Router from '@ember/routing/router';
import config from './config/environment';

const MyRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

MyRouter.map(function() {
  this.route("styleguide");
  this.route("posts", function() {
    this.route("show", { path: ":id" });
  });

  this.route("auth", function() {
    this.route("login");
    this.route("register");
  });

  this.mount('blog');
  // this.mount('blog', {path: 'marketing-blog'});
  // this.mount('blog', {path: 'exec-blog'});
  // this.mount('blog', {path: 'engineering-blog'});
});

export default MyRouter;
