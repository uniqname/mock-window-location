'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = function () {
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

var _require = require('./util.js');
var compose = _require.compose;
var negate = _require.negate;

var location = {
  protocol: 'file:',
  host: '',
  hostname: '',
  port: '',
  pathname: '',
  search: '',
  hash: ''
  // username: '',
  // password: '',
};

var PROTOCOL = /^(\w*:)\/\//;
var HOSTNAME = /^([^\/]+\.[^\/]+)\/*?/;
var PATHNAME = /^.+\/{2}(?:[^/]*)(.*)[?#].*$/;

var getProtocol = function getProtocol(url) {
  var _ref = url.match(PROTOCOL) || 'file:',
      _ref2 = slicedToArray(_ref, 2),
      match = _ref2[0],
      capture = _ref2[1];

  return capture;
};
var getHostname = function getHostname(url) {
  var _url$replace$match = url.replace(getProtocol(url) + '//', '').match(HOSTNAME),
      _url$replace$match2 = slicedToArray(_url$replace$match, 2),
      match = _url$replace$match2[0],
      capture = _url$replace$match2[1];

  return capture;
};
var getHost = function getHost(url) {
  return getHostname(url).replace(/:\d+/, '');
};
var getPort = function getPort(url) {
  var _getHostname$match = getHostname(url).match(/:\d+/),
      _getHostname$match2 = slicedToArray(_getHostname$match, 2),
      match = _getHostname$match2[0],
      capture = _getHostname$match2[1];

  return capture;
};
var getPathname = function getPathname(url) {
  var _url$match = url.match(PATHNAME),
      _url$match2 = slicedToArray(_url$match, 2),
      match = _url$match2[0],
      capture = _url$match2[1];

  return capture;
};

var parseLocation = function parseLocation(url) {
  return {
    protocol: getProtocol(url),
    host: getHost(url),
    hostname: getHostname(url),
    port: getPort(url),
    pathname: getPathname(url),
    search: getSearch(url),
    hash: getHash(url),
    get origin() {
      this.href;
    },
    get href() {
      this.protocol + '//' + this.host + this.pathname;
    }
  };
};

var noop = function noop() {};

Object.defineProperties(global, location, {
  href: {
    get: function get$$1() {
      return location.href;
    },
    set: function set$$1(newHref) {
      location = parseLocation(newHref);
    },

    enumerable: true
  },
  protocol: {
    get: function get$$1() {
      location.protocol;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  },
  host: {
    get: function get$$1() {
      location.host;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  },
  hostname: {
    get: function get$$1() {
      location.hostname;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  },
  port: {
    get: function get$$1() {
      location.port;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  },
  pathname: {
    get: function get$$1() {
      location.pathname;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  },
  search: {
    get: function get$$1() {
      location.search;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  },
  hash: {
    get: function get$$1() {
      location.hash;
    },
    set: function set$$1() {
      noop;
    },

    enumerable: true
  }

});

exports.getProtocol = getProtocol;
exports.getHostname = getHostname;
exports.getHost = getHost;
exports.getPort = getPort;
exports.getPathname = getPathname;
exports.parseLocation = parseLocation;
//# sourceMappingURL=index.js.map
