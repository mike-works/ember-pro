'use strict';

define('commently/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n6:1 - Unexpected console statement. (no-console)\n7:1 - Unexpected console statement. (no-console)');
  });

  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('authorizers/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('session-stores/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'session-stores/application.js should pass ESLint\n\n');
  });
});
define('commently/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('commently/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test'; /* global wait */

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
define('commently/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'commently/tests/helpers/start-app', 'commently/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('commently/tests/helpers/resolver', ['exports', 'commently/resolver', 'commently/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('commently/tests/helpers/start-app', ['exports', 'commently/app', 'commently/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('commently/tests/integration/components/post-comment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('post-comment', 'Integration | Component | post comment', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ikl5YKHU",
      "block": "{\"symbols\":[],\"statements\":[[1,[20,\"post-comment\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('commently/tests/integration/components/post-full-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('post-full', 'Integration | Component | post full', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('model', {
      title: 'My Post',
      body: 'this is the body',
      createdAt: '2016-12-07T23:48:13.678Z',
      updatedAt: '2016-12-07T23:48:13.678Z'
    });

    this.render(Ember.HTMLBars.template({
      "id": "75xrZcgA",
      "block": "{\"symbols\":[],\"statements\":[[1,[26,\"post-full\",null,[[\"model\"],[[22,[\"model\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var innerText = this.$().text().replace(/\s+/g, '');
    assert.ok(innerText.indexOf('WrittenAt') >= 0, 'Written At is present');
  });
});
define('commently/tests/integration/components/post-tile-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('post-tile', 'Integration | Component | post tile', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('model', {
      title: 'My Post',
      body: 'this is the body',
      createdAt: '2016-12-07T23:48:13.678Z',
      updatedAt: '2016-12-07T23:48:13.678Z'
    });

    this.render(Ember.HTMLBars.template({
      "id": "w5cMuPUn",
      "block": "{\"symbols\":[],\"statements\":[[1,[26,\"post-tile\",null,[[\"model\"],[[22,[\"model\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    var innerText = this.$().text().replace(/\s+/g, '');
    assert.ok(innerText.indexOf('') >= 0, '');
  });
});
define('commently/tests/integration/components/x-input-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('x-input', 'Integration | Component | x input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "SNn054Rs",
      "block": "{\"symbols\":[],\"statements\":[[1,[20,\"x-input\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('commently/tests/integration/components/x-textarea-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('x-textarea', 'Integration | Component | x textarea', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "vdevsYCn",
      "block": "{\"symbols\":[],\"statements\":[[1,[20,\"x-textarea\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('commently/tests/integration/helpers/titleize-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('titleize', 'helper:titleize', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "9o5Jlxj8",
      "block": "{\"symbols\":[],\"statements\":[[1,[26,\"titleize\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('commently/tests/test-helper', ['commently/app', 'commently/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('commently/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/post-comment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/post-comment-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/post-full-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/post-full-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/post-tile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/post-tile-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/x-input-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-input-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/x-textarea-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/x-textarea-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/titleize-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/titleize-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/helpers/tease-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/tease-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/text-field-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/text-field-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/comment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/comment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/auth/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/auth/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/auth/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/auth/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/posts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/posts/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/posts/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts/show-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/current-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass ESLint\n\n');
  });
});
// import { moduleFor, test } from 'ember-qunit';

// moduleFor('adapter:application', 'Unit | Adapter | application', {
//   // Specify the other units that are required for this test.
//   // needs: ['serializer:foo']
// });

// // Replace this with your real tests.
// test('it exists', function(assert) {
//   let adapter = this.subject();
//   assert.ok(adapter);
// });
define("commently/tests/unit/adapters/application-test", [], function () {
  "use strict";
});
define('commently/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    needs: ['service:current-user']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('commently/tests/unit/helpers/tease-test', ['commently/helpers/tease', 'qunit'], function (_tease, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Helper | tease');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _tease.tease)([42]);
    assert.ok(result);
  });
});
define('commently/tests/unit/initializers/geo-test', ['commently/initializers/geo', 'qunit', 'ember-qunit', 'commently/tests/helpers/destroy-app'], function (_geo, _qunit, _emberQunit, _destroyApp) {
    'use strict';

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var Application = Ember.Application;

    (0, _qunit.module)('Unit | Initializer | geo', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);
        hooks.beforeEach(function () {
            this.TestApplication = Application.extend();
            this.TestApplication.initializer({
                name: 'initializer under test',
                initialize: _geo.initialize
            });
            this.application = this.TestApplication.create({ autoboot: false });
        });
        hooks.afterEach(function () {
            (0, _destroyApp.default)(this.application);
        });
        // Replace this with your real tests.
        (0, _qunit.test)('it works', function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.application.boot();

                            case 2:
                                assert.ok(true);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }());
    });
});
define('commently/tests/unit/mixins/text-field-test', ['commently/mixins/text-field', 'qunit'], function (_textField, _qunit) {
  'use strict';

  var Obj = Ember.Object;


  (0, _qunit.module)('Unit | Mixin | text field');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var TextFieldObject = Obj.extend(_textField.default);
    var subject = TextFieldObject.create();
    assert.ok(subject);
  });
});
define('commently/tests/unit/models/comment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('comment', 'Unit | Model | comment', {
    // Specify the other units that are required for this test.
    needs: ['model:post']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('commently/tests/unit/models/post-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: ['model:comment']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('commently/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('commently/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    needs: ['service:session', 'service:currentUser']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/routes/auth/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:auth/login', 'Unit | Route | auth/login', {
    // Specify the other units that are required for this test.
    needs: ['service:session', 'service:currentUser']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/routes/auth/register-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:auth/register', 'Unit | Route | auth/register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/routes/posts-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/routes/posts/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:posts/index', 'Unit | Route | posts/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/routes/posts/show-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:posts/show', 'Unit | Route | posts/show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('commently/tests/unit/services/current-user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:current-user', 'Unit | Service | current user', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('commently/config/environment', [], function() {
  var prefix = 'commently';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('commently/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
