"use strict";



define('commently/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin', 'commently/config/environment'], function (exports, _emberData, _dataAdapterMixin, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
  var _config$DS = _environment.default.DS,
      host = _config$DS.host,
      namespace = _config$DS.namespace;
  exports.default = JSONAPIAdapter.extend(_dataAdapterMixin.default, {
    authorizer: 'authorizer:oauth2',
    host: host,
    namespace: namespace
  });
});
define('commently/app', ['exports', 'commently/resolver', 'ember-load-initializers', 'commently/config/environment', 'math'], function (exports, _resolver, _emberLoadInitializers, _environment, _math) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;

  console.log('PI=', _math.PI);
  console.log('4^.5 = ', _math.default.sqrt(4));

  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('commently/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant', 'commently/config/environment'], function (exports, _oauth2PasswordGrant, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$DS = _environment.default.DS,
      host = _config$DS.host,
      namespace = _config$DS.namespace;
  exports.default = _oauth2PasswordGrant.default.extend({
    serverTokenEndpoint: host + '/' + namespace + '/sessions'
  });
});
define('commently/authorizers/oauth2', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _oauth2Bearer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2Bearer.default.extend();
});
define("commently/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
define("commently/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
define("commently/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
define("commently/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
define("commently/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
define("commently/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
define("commently/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
define("commently/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
define("commently/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
define('commently/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
define("commently/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
define("commently/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
define('commently/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
define('commently/components/post-comment', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['post-comment']
    });
});
define('commently/components/post-full', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['post-full']
    });
});
define('commently/components/post-tile', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['post-tile']
    });
});
define('commently/components/x-input', ['exports', 'commently/mixins/text-field'], function (exports, _textField) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend(_textField.default, {
        classNames: ['x-input'],
        type: 'text'
    });
});
define('commently/components/x-textarea', ['exports', 'commently/mixins/text-field'], function (exports, _textField) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend(_textField.default, {
        classNames: ['x-textarea']
    });
});
define("commently/controllers/application", ["exports", "@ember-decorators/service"], function (exports, _service) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    // import { inject as service } from '@ember/service';
    var Controller = Ember.Controller;
    var getOwner = Ember.getOwner;

    var ApplicationController = function (_Controller) {
        _inherits(ApplicationController, _Controller);

        function ApplicationController() {
            _classCallCheck(this, ApplicationController);

            var _this = _possibleConstructorReturn(this, (ApplicationController.__proto__ || Object.getPrototypeOf(ApplicationController)).call(this));

            _this.location = { latitude: null, longitude: null };
            var coords = getOwner(_this).lookup('data:location');
            coords.then(function (coordsValue) {
                _this.set('location', coordsValue);
            });
            return _this;
        }

        return ApplicationController;
    }(Controller);

    __decorate([(0, _service.service)('store')], ApplicationController.prototype, "currentUser", void 0);
    exports.default = ApplicationController;
});
define('commently/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('commently/helpers/app-version', ['exports', 'commently/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('commently/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('commently/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('commently/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancel-all', 'cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('commently/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('commently/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('commently/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('commently/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('commently/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('commently/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('commently/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('commently/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('commently/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('commently/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('commently/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('commently/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('commently/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('commently/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('commently/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('commently/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('commently/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('commently/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('commently/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('commently/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('commently/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define("commently/helpers/is-authenticated", ["exports", "@ember-decorators/service"], function (exports, _service) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Helper = Ember.Helper;
    var observer = Ember.observer;

    var IsAuthenticatedHelper = function (_Helper) {
        _inherits(IsAuthenticatedHelper, _Helper);

        function IsAuthenticatedHelper() {
            _classCallCheck(this, IsAuthenticatedHelper);

            return _possibleConstructorReturn(this, (IsAuthenticatedHelper.__proto__ || Object.getPrototypeOf(IsAuthenticatedHelper)).apply(this, arguments));
        }

        _createClass(IsAuthenticatedHelper, [{
            key: "compute",
            value: function compute() {
                return this.get('session.isAuthenticated');
            }
        }]);

        return IsAuthenticatedHelper;
    }(Helper);

    __decorate([(0, _service.service)('store')], IsAuthenticatedHelper.prototype, "store", void 0);
    IsAuthenticatedHelper.prototype.onAuthStateChanged = observer("session.isAuthenticated", function () {
        this.recompute();
    });
    exports.default = IsAuthenticatedHelper;
});
define('commently/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('commently/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('commently/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('commently/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('commently/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('commently/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('commently/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('commently/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
define('commently/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
define('commently/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('commently/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('commently/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('commently/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('commently/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('commently/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('commently/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('commently/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('commently/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('commently/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('commently/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('commently/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('commently/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('commently/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('commently/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('commently/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('commently/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('commently/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('commently/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('commently/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('commently/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('commently/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('commently/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('commently/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('commently/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', 'perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('commently/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('commently/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('commently/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('commently/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('commently/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('commently/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('commently/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('commently/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('commently/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('commently/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('commently/helpers/route-action', ['exports', 'ember-route-action-helper/helpers/route-action'], function (exports, _routeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeAction.default;
    }
  });
});
define('commently/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('commently/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('commently/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('commently/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('commently/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('commently/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define("commently/helpers/tease", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.tease = tease;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var helper = Ember.Helper.helper;
    function tease(_ref, hash) {
        var _ref2 = _slicedToArray(_ref, 1),
            str = _ref2[0];

        var len = (hash || {}).chars || 100;
        return ("" + (str || "")).replace(/[#*]+/g, "").substring(0, len);
    }
    exports.default = helper(tease);
});
define('commently/helpers/titleize', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.titleize = titleize;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var Helper = Ember.Helper;
    function titleize(_ref) /* , hash*/{
        var _ref2 = _slicedToArray(_ref, 1),
            _ref2$ = _ref2[0],
            s = _ref2$ === undefined ? '' : _ref2$;

        return s[0].toUpperCase() + s.substring(1);
    }
    exports.default = Helper.helper(titleize);
});
define('commently/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('commently/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('commently/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('commently/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('commently/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('commently/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('commently/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'commently/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('commently/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('commently/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('commently/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('commently/initializers/ember-simple-auth', ['exports', 'commently/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _environment, _configuration, _setupSession, _setupSessionService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
    }
  };
});
define('commently/initializers/export-application-global', ['exports', 'commently/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("commently/initializers/geo", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initialize = initialize;
    function initialize(application) {
        var _navigator = navigator,
            geolocation = _navigator.geolocation;

        var locPromise = new Promise(function (resolve, reject) {
            geolocation.getCurrentPosition(function (pos) {
                var _pos$coords = pos.coords,
                    latitude = _pos$coords.latitude,
                    longitude = _pos$coords.longitude;

                resolve(pos.coords);
            });
        });
        application.register("data:location", locPromise, {
            instantiate: false
        });
    }
    exports.default = {
        initialize: initialize
    };
});
define("commently/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define("commently/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('commently/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _setupSessionRestoration.default)(instance);
    }
  };
});
define('commently/mixins/adapter-fetch', ['exports', 'ember-fetch/mixins/adapter-fetch'], function (exports, _adapterFetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _adapterFetch.default;
    }
  });
});
define('commently/mixins/text-field', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Mixin = Ember.Mixin;
    var computed = Ember.computed;
    exports.default = Mixin.create({
        classNames: ["form-group"],
        classNameBindings: ["isOk:has-success", "isError:has-error"],
        disabled: false,
        readonly: false,
        isError: computed("value.length", "errors.[]", function () {
            return this.get("value.length") && this.get("errors.length") > 0;
        }),
        isOk: computed("value.length", "isError", function () {
            return !this.get("isError") && this.get("value.length") > 0;
        }),
        actions: {
            _oninput: function _oninput(evt) {
                this.set("value", evt.target.value);
                this.sendAction.apply(this, ["oninput"].concat(Array.prototype.slice.call(arguments)));
            },
            _onclick: function _onclick() {
                this.sendAction.apply(this, ["onclick"].concat(Array.prototype.slice.call(arguments)));
            }
        }
    });
});
define('commently/models/comment', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        post: belongsTo('post'),
        body: attr('string'),
        createdAt: attr('string'),
        updatedAt: attr('string')
    });
});
define('commently/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({
        body: attr('string'),
        title: attr('string'),
        authorName: attr('string'),
        authorPhotoUrl: attr('string'),
        featuredImageUrl: attr('string'),
        categoryName: attr('string'),
        createdAt: attr('string'),
        updatedAt: attr('string'),
        comments: hasMany('comments')
    });
});
define('commently/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr;
    exports.default = Model.extend({
        email: attr('string'),
        password: attr('string'),
        passwordConfirmation: attr('string')
    });
});
define('commently/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('commently/router', ['exports', 'commently/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Router = Ember.Router;

    var MyRouter = Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });
    MyRouter.map(function () {
        this.route("posts", function () {
            this.route("show", { path: ":id" });
        });
        this.route("auth", function () {
            this.route("login");
            this.route("register");
        });
    });
    exports.default = MyRouter;
});
define('commently/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var service = Ember.inject.service;
  var Route = Ember.Route;
  exports.default = Route.extend(_applicationRouteMixin.default, {
    session: service(),
    currentUser: service(),
    actions: {
      logout: function logout() {
        this.get('session').invalidate();
      }
    },
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      if (this.get('session.isAuthenticated')) {
        return this.get('currentUser').loadUserInfo();
      }
    }
  });
});
define("commently/routes/auth/login", ["exports", "@ember-decorators/service", "@ember-decorators/object"], function (exports, _service, _object) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    // import { inject as service } from '@ember/service';
    var Route = Ember.Route;
    var Logger = Ember.Logger;

    var LoginRoute = function (_Route) {
        _inherits(LoginRoute, _Route);

        function LoginRoute() {
            _classCallCheck(this, LoginRoute);

            return _possibleConstructorReturn(this, (LoginRoute.__proto__ || Object.getPrototypeOf(LoginRoute)).apply(this, arguments));
        }

        _createClass(LoginRoute, [{
            key: "login",
            value: function login(email, password) {
                var _this2 = this;

                this.get('session').authenticate('authenticator:oauth2', email, password).then(function () {
                    return _this2.get('currentUser').loadUserInfo();
                }).catch(function (e) {
                    Logger.error('Problem logging in', e);
                });
            }
        }, {
            key: "model",
            value: function model() {
                return {
                    email: '',
                    password: ''
                };
            }
        }]);

        return LoginRoute;
    }(Route);

    __decorate([(0, _service.service)('session')], LoginRoute.prototype, "session", void 0);
    __decorate([(0, _service.service)('currentUser')], LoginRoute.prototype, "currentUser", void 0);
    __decorate([_object.action], LoginRoute.prototype, "login", null);
    exports.default = LoginRoute;
});
define("commently/routes/auth/register", ["exports", "@ember-decorators/object"], function (exports, _object) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Route = Ember.Route;

    var RegisterRoute = function (_Route) {
        _inherits(RegisterRoute, _Route);

        function RegisterRoute() {
            _classCallCheck(this, RegisterRoute);

            return _possibleConstructorReturn(this, (RegisterRoute.__proto__ || Object.getPrototypeOf(RegisterRoute)).apply(this, arguments));
        }

        _createClass(RegisterRoute, [{
            key: "register",
            value: function register() {
                this.get('currentModel').save();
            }
        }, {
            key: "model",
            value: function model() {
                return this.store.createRecord('user');
            }
        }]);

        return RegisterRoute;
    }(Route);

    __decorate([_object.action], RegisterRoute.prototype, "register", null);
    exports.default = RegisterRoute;
});
define('commently/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        beforeModel: function beforeModel() {
            this.replaceWith('posts.index');
        }
    });
});
define('commently/routes/posts', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model() {
            return this.store.findAll('post');
        }
    });
});
define('commently/routes/posts/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('commently/routes/posts/show', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Route = Ember.Route;
    exports.default = Route.extend({
        model: function model(_ref) {
            var id = _ref.id;

            return this.store.findRecord('post', id);
        }
    });
});
define('commently/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define("commently/services/current-user", ["exports", "@ember-decorators/service"], function (exports, _service) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Service = Ember.Service;

    var CurrentUserService = function (_Service) {
        _inherits(CurrentUserService, _Service);

        function CurrentUserService() {
            _classCallCheck(this, CurrentUserService);

            return _possibleConstructorReturn(this, (CurrentUserService.__proto__ || Object.getPrototypeOf(CurrentUserService)).apply(this, arguments));
        }

        _createClass(CurrentUserService, [{
            key: "loadUserInfo",
            value: function loadUserInfo() {
                return this.get('store').peekRecord('user', 'current') || this.get('store').findRecord('user', 'current');
            }
        }]);

        return CurrentUserService;
    }(Service);

    __decorate([(0, _service.service)('store')], CurrentUserService.prototype, "store", void 0);
    exports.default = CurrentUserService;
});
define("commently/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
define('commently/services/moment', ['exports', 'ember-moment/services/moment', 'commently/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('commently/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('commently/session-stores/application', ['exports', 'ember-simple-auth/session-stores/cookie'], function (exports, _cookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookie.default.extend();
});
define("commently/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qenUiKz/", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[10,\"class\",\"navbar\"],[8],[0,\"\\n  \"],[4,\"link-to\",[\"posts.index\"],[[\"classNames\"],[\"brand\"]],{\"statements\":[[0,\"Comment.ly\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"pull-right\"],[8],[0,\"\\n      \"],[1,[22,[\"currentUser\",\"email\"]],false],[0,\"\\n\"],[4,\"unless\",[[26,\"is-authenticated\",null,null]],null,{\"statements\":[[0,\"        \"],[4,\"link-to\",[\"auth.login\"],[[\"class\"],[\"btn\"]],{\"statements\":[[0,\"Login\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"button\"],[10,\"class\",\"btn\"],[11,\"onclick\",[26,\"route-action\",[\"logout\"],null],null],[8],[0,\"Logout\"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"p\"],[8],[0,\"\\n\\n  \"],[1,[22,[\"location\",\"latitude\"]],false],[0,\", \"],[1,[22,[\"location\",\"longitude\"]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[22,[\"req\",\"userAgent\"]],false],[0,\"\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/application.hbs" } });
});
define("commently/templates/auth", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DihZwOaw", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col-sm-6 col-sm-offset-3 col-xs-12\"],[8],[0,\"\\n      \"],[1,[20,\"outlet\"],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/auth.hbs" } });
});
define("commently/templates/auth/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xE6j9Aee", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-xs-12\"],[8],[0,\"\\n    \"],[6,\"h1\"],[8],[0,\"Login\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"hr\"],[8],[9],[0,\"\\n  \"],[1,[26,\"x-input\",null,[[\"label\",\"value\",\"classNames\"],[\"Email\",[22,[\"model\",\"email\"]],\"col-xs-12\"]]],false],[0,\"\\n  \"],[1,[26,\"x-input\",null,[[\"label\",\"type\",\"value\",\"classNames\"],[\"Password\",\"password\",[22,[\"model\",\"password\"]],\"col-xs-12\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-xs-12\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"onclick\",[26,\"route-action\",[\"login\",[22,[\"model\",\"email\"]],[22,[\"model\",\"password\"]]],null],null],[8],[0,\"\\n      Login\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"pull-right\"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"auth.register\"],null,{\"statements\":[[0,\"Register\"]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/auth/login.hbs" } });
});
define("commently/templates/auth/register", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fGqs3DMe", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-xs-12\"],[8],[0,\"\\n    \"],[6,\"h1\"],[8],[0,\"Register\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"hr\"],[8],[9],[0,\"\\n  \"],[1,[26,\"x-input\",null,[[\"label\",\"type\",\"value\",\"classNames\"],[\"Email\",\"email\",[22,[\"model\",\"email\"]],\"col-xs-12\"]]],false],[0,\"\\n  \"],[1,[26,\"x-input\",null,[[\"label\",\"type\",\"value\",\"classNames\"],[\"Password\",\"password\",[22,[\"model\",\"password\"]],\"col-xs-12\"]]],false],[0,\"\\n  \"],[1,[26,\"x-input\",null,[[\"label\",\"type\",\"value\",\"classNames\"],[\"Confirm Password\",\"password\",[22,[\"model\",\"passwordConfirmation\"]],\"col-xs-12\"]]],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"col-xs-12\"],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"onclick\",[26,\"route-action\",[\"register\"],null],null],[8],[0,\"\\n      Register\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"pull-right\"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"auth.login\"],null,{\"statements\":[[0,\"Login\"]],\"parameters\":[]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/auth/register.hbs" } });
});
define("commently/templates/components/post-comment", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xrQIBlbn", "block": "{\"symbols\":[\"@delete-comment\"],\"statements\":[[6,\"p\"],[10,\"class\",\"comment-body\"],[8],[0,\"\\n  \"],[1,[22,[\"model\",\"body\"]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"span\"],[10,\"class\",\"delete-indicator\"],[11,\"onClick\",[21,1,[]],null],[8],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"model\",\"updatedAt\"]]],null,{\"statements\":[[0,\"  \"],[6,\"span\"],[10,\"class\",\"posted-at\"],[8],[0,\"\\n    \"],[1,[26,\"moment-from-now\",[[22,[\"model\",\"updatedAt\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/components/post-comment.hbs" } });
});
define("commently/templates/components/post-full", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fihREf0e", "block": "{\"symbols\":[\"comment\"],\"statements\":[[6,\"div\"],[10,\"class\",\"title-row\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[22,[\"model\",\"authorPhotoUrl\"]],null],[11,\"alt\",[20,\"authorName\"],null],[10,\"class\",\"author-portrait\"],[8],[9],[0,\"\\n  \"],[6,\"h1\"],[10,\"class\",\"post-title\"],[8],[1,[26,\"titleize\",[[22,[\"model\",\"title\"]]],null],false],[9],[0,\"\\n  \\n  \"],[6,\"div\"],[10,\"class\",\"metadata-row\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"metadata-item author\"],[8],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-label\"],[8],[0,\"By\"],[9],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-value\"],[8],[1,[22,[\"model\",\"authorName\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"metadata-item created-at\"],[8],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-label\"],[8],[0,\"Written At\"],[9],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-value\"],[8],[1,[26,\"moment-format\",[[22,[\"model\",\"createdAt\"]],\"LLL\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[4,\"unless\",[[26,\"eq\",[[22,[\"model\",\"createdAt\"]],[22,[\"model\",\"updatedAt\"]]],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"metadata-item updated-at\"],[8],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-label\"],[8],[0,\"Updated At\"],[9],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-value\"],[8],[1,[26,\"moment-format\",[[22,[\"model\",\"updatedAt\"]],\"LLL\"],null],false],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,[\"model\",\"categoryName\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"metadata-item\"],[8],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-label\"],[8],[0,\"Category\"],[9],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"metadata-item-value\"],[8],[1,[22,[\"model\",\"categoryName\"]],false],[9],[0,\"\\n    \"],[9],[0,\"  \\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\\n\\n\"],[4,\"if\",[[22,[\"model\",\"featuredImageUrl\"]]],null,{\"statements\":[[6,\"div\"],[10,\"class\",\"feature-image-row\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[22,[\"model\",\"featuredImageUrl\"]],null],[10,\"alt\",\"\"],[10,\"class\",\"feature-image\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"p\"],[10,\"class\",\"body\"],[8],[0,\"\\n  \"],[1,[26,\"markdown-to-html\",[[22,[\"model\",\"body\"]]],null],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"hr\"],[8],[9],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"model\",\"comments\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"post-comment\",null,[[\"model\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"  \"],[6,\"p\"],[10,\"class\",\"no-comments\"],[8],[0,\"\\n    No comments yet\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[1,[26,\"x-textarea\",null,[[\"class\"],[\"reply-field\"]]],false],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"post-actions\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn\"],[8],[0,\"Reply\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/components/post-full.hbs" } });
});
define("commently/templates/components/post-tile", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NDi0UAx6", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"posts.show\",[22,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"author-image\"],[8],[0,\"\\n    \"],[6,\"img\"],[11,\"src\",[22,[\"model\",\"authorPhotoUrl\"]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"post-tile-content\"],[8],[0,\"\\n      \"],[6,\"span\"],[10,\"class\",\"comment-count\"],[8],[0,\"\\n        \"],[1,[22,[\"model\",\"comments\",\"length\"]],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"h3\"],[8],[1,[22,[\"model\",\"title\"]],false],[9],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"author-name\"],[8],[0,\"\\n      \"],[1,[22,[\"model\",\"authorName\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"created-at pull-right\"],[8],[0,\"\\n      \"],[1,[26,\"moment-format\",[[22,[\"model\",\"createdAt\"]],\"LL\"],null],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"post-tease\"],[8],[0,\"\\n      \"],[1,[26,\"tease\",[[22,[\"model\",\"body\"]]],[[\"chars\"],[80]]],false],[0,\"...\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/components/post-tile.hbs" } });
});
define("commently/templates/components/x-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HVQFbu5a", "block": "{\"symbols\":[\"e\"],\"statements\":[[6,\"label\"],[8],[1,[20,\"label\"],false],[9],[0,\"\\n\"],[6,\"input\"],[10,\"class\",\"form-control\"],[11,\"placeholder\",[20,\"label\"],null],[11,\"value\",[20,\"value\"],null],[11,\"id\",[20,\"id\"],null],[11,\"readonly\",[20,\"readonly\"],null],[11,\"disabled\",[20,\"disabled\"],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"_onclick\"],null],null],[11,\"onInput\",[26,\"action\",[[21,0,[]],\"_oninput\"],null],null],[11,\"type\",[20,\"type\"],null],[8],[9],[0,\"\\n\"],[4,\"if\",[[22,[\"icon\"]]],null,{\"statements\":[[6,\"span\"],[10,\"class\",\"input-icon\"],[8],[0,\"\\n  \"],[6,\"i\"],[11,\"class\",[20,\"icon\"],null],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[26,\"and\",[[22,[\"value\",\"length\"]],[22,[\"errors\",\"length\"]]],null]],null,{\"statements\":[[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"help-block\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/components/x-input.hbs" } });
});
define("commently/templates/components/x-textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "it3pgJr5", "block": "{\"symbols\":[\"e\"],\"statements\":[[6,\"label\"],[8],[1,[20,\"label\"],false],[9],[0,\"\\n\"],[6,\"textarea\"],[10,\"class\",\"form-control\"],[11,\"value\",[20,\"value\"],null],[11,\"disabled\",[20,\"disabled\"],null],[11,\"readonly\",[20,\"readonly\"],null],[11,\"placeholder\",[20,\"label\"],null],[11,\"onInput\",[26,\"action\",[[21,0,[]],\"_oninput\"],null],null],[11,\"onClick\",[26,\"action\",[[21,0,[]],\"_onclick\"],null],null],[8],[0,\"\\n\"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"value\",\"length\"]],[22,[\"errors\",\"length\"]]],null]],null,{\"statements\":[[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"help-block\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/components/x-textarea.hbs" } });
});
define("commently/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XdviJadE", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/index.hbs" } });
});
define("commently/templates/posts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LHSQQtCt", "block": "{\"symbols\":[\"post\"],\"statements\":[[6,\"div\"],[10,\"class\",\"posts-index\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"posts-left\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"posts-left-search\"],[8],[0,\"\\n      \"],[6,\"input\"],[10,\"class\",\"posts-search-field\"],[10,\"placeholder\",\"🔎 Search\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"posts-left-content\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"posts-left-content-pane\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[1,[26,\"post-tile\",null,[[\"model\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"posts-right\"],[8],[0,\"\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/posts.hbs" } });
});
define("commently/templates/posts/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OCSJfein", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"no-post-selected\"],[8],[0,\"\\n  \"],[6,\"h4\"],[8],[0,\"\\n    Please select a post\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/posts/index.hbs" } });
});
define("commently/templates/posts/show", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GktBPCWB", "block": "{\"symbols\":[],\"statements\":[[1,[26,\"post-full\",null,[[\"model\"],[[22,[\"model\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "commently/templates/posts/show.hbs" } });
});
define('commently/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
define('commently/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
define('commently/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
define('commently/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
define('commently/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
define('commently/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
define('commently/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
define('commently/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
define('commently/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
define('commently/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
define('commently/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
define('commently/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
define('commently/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
define('commently/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
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

if (!runningTests) {
  require("commently/app")["default"].create({"name":"commently","version":"0.0.0+81e73ef7"});
}
//# sourceMappingURL=commently.map
