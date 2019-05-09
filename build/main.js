require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  user: {
    role: 'superAdmin',
    username: 'q',
    password: 'q',
    email: 'qq22337383@gmail.com',
    nickname: 'VueBlog',
    motto: 'Never too old to learn',
    avatar: 'avatar.png'
  },
  jwt: {
    secret: 'vueblog'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'vueblog',
    port: 27017,
    username: '',
    password: ''
  },
  githubConfig: {
    githubClient: '',
    githubSecret: '',
    scope: 'user'
  },
  emailConfig: {
    user: '',
    pass: ''
  },
  app: {
    domain: '',
    host: '45.77.31.139',
    port: 3000,
    routerBaseApi: 'api'
  }
};

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("md5");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = {
  head: {
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'renderer', content: 'webkit' }, { hid: 'keywords', name: 'keywords', content: 'VueBlog, Vuejs, Nodejs, 服务端渲染' }, { hid: 'description', name: 'description', content: 'VueBlog是一个基于Vuejs开发的小型博客应用，让你可以为所欲为的分享自己的知识和创作' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'alternate', type: 'application/rss+xml', title: 'RSS 2.0', href: '/rss.xml' }, { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_620064_hrymm1e94nnlv7vi.css' }]
  },
  css: ['~assets/css/main.scss', 'highlight.js/styles/github.css'],
  loading: { color: '#42B983' },
  build: {
    vendor: ['axios'],
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  manifest: {
    name: 'VueBlog',
    description: 'A blog system',
    theme_color: '#42B983'
  },
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  plugins: ['~/plugins/components.js', '~/plugins/filters.js']
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__ = __webpack_require__(21);






var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();
var user = __webpack_require__(20);
var tag = __webpack_require__(18);
var article = __webpack_require__(16);
var comment = __webpack_require__(17);
var tool = __webpack_require__(19);

router.get('/rss.xml', tool.rss).get('/sitemap.xml', tool.sitemap).get('/robots.txt', tool.robots).post('/api/send-email', tool.sendEmail);

router.get(/\/api\/oauth\/github\/callback/, user.githubCallback).get('/api/oauth/github/:state?', user.githubLogin);

router.get('/api/user/:username?', user.getUserInfo).patch('/api/user', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], user.patchUserInfo).post('/api/login', user.login).post('/api/logout', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], user.logout);

router.get('/api/tags/:id?', tag.getTagsOrArticles).post('/api/tag', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], tag.postTag).patch('/api/tag', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], tag.patchTag).del('/api/tag/:id?', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], tag.deleteTag);

router.get('/api/search/:keyword?', article.search).get('/api/article/:id?', article.getArticle).get('/api/articles/:page?/:limit?', article.getArticles).get('/api/private-articles', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], article.getPrivateArticles).get('/api/archives', article.archives).post('/api/article', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], article.postArticle).post('/api/upload', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], article.upload).patch('/api/article', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], article.patchArticle).del('/api/article/:id?', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], article.deleteArticle);

router.post('/api/comment', comment.postComment).get('/api/comments', comment.getComments).del('/api/comment/:id?', __WEBPACK_IMPORTED_MODULE_4__middlewares_check_token__["a" /* checkToken */], comment.deleteComment); // 管理员可以删除评论

/* harmony default export */ exports["a"] = router;

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("@koa/cors");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_os__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_formidable__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_formidable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_formidable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "getArticles", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getPrivateArticles", function() { return getPrivateArticles; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "postArticle", function() { return postArticle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "patchArticle", function() { return patchArticle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "deleteArticle", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(exports, "archives", function() { return archives; });
/* harmony export (binding) */ __webpack_require__.d(exports, "upload", function() { return upload; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var Article = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Article');

var domain = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.domain ? __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.domain : 'http://' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.host + ':' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.port;

var getArticles = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var _ctx$params, _ctx$params$page, page, _ctx$params$limit, limit, total, data;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$params = ctx.params, _ctx$params$page = _ctx$params.page, page = _ctx$params$page === undefined ? 1 : _ctx$params$page, _ctx$params$limit = _ctx$params.limit, limit = _ctx$params$limit === undefined ? 15 : _ctx$params$limit;

            page = Number((page - 1) * limit) || 0;
            limit = Number(limit) || 15;

            _context.prev = 3;
            _context.next = 6;
            return Article.find({ publish: true }).exec();

          case 6:
            total = _context.sent;

            total = total.length;
            _context.next = 10;
            return Article.find({ publish: true }).populate({
              path: 'tags',
              select: 'id name'
            }).skip(page).limit(limit).sort({ 'createdAt': -1 }).exec();

          case 10:
            data = _context.sent;

            ctx.body = {
              success: true,
              data: data,
              total: total
            };
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context['catch'](3);

            ctx.body = {
              success: false,
              err: _context.t0,
              total: 0
            };

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[3, 14]]);
  }));

  return function getArticles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getPrivateArticles = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Article.find({ publish: false }).populate({
              path: 'tags',
              select: 'id name'
            }).sort({ 'updatedAt': -1 }).exec();

          case 2:
            data = _context2.sent;

            ctx.body = {
              success: true,
              data: data
            };

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function getPrivateArticles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getArticle = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var id, article;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context3.prev = 3;
            _context3.next = 6;
            return Article.findOne({ _id: id }).populate({
              path: 'tags',
              select: 'id name'
            }).populate({
              path: 'comments',
              populate: { path: 'user'
                // options: {sort:{createdAt: -1}}
              } }).exec();

          case 6:
            article = _context3.sent;
            _context3.next = 9;
            return Article.findByIdAndUpdate(id, { views: article.views + 1 }).exec();

          case 9:
            ctx.body = {
              success: true,
              data: article
            };
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3['catch'](3);

            // console.log(e)
            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[3, 12]]);
  }));

  return function getArticle(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var postArticle = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var body, _body, title, content, publish;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            body = ctx.request.body;
            _body = body, title = _body.title, content = _body.content, publish = _body.publish;

            if (!(!title || !content || !String(publish))) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt('return', ctx.body = {
              success: false,
              err: 'Field incomplete'
            });

          case 4:
            _context4.prev = 4;
            _context4.next = 7;
            return new Article(body);

          case 7:
            body = _context4.sent;
            _context4.next = 10;
            return body.save();

          case 10:
            ctx.body = {
              success: true,
              data: body
            };
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](4);

            ctx.body = {
              success: false,
              err: _context4.t0
            };

          case 16:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[4, 13]]);
  }));

  return function postArticle(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// 修改私有文章或已发布文章
var patchArticle = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
    var body, _body2, id, title, content, publish;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            body = ctx.request.body;

            body.updatedAt = Date.now();
            _body2 = body, id = _body2.id, title = _body2.title, content = _body2.content, publish = _body2.publish;

            if (!(!id || !title || !content || !String(publish))) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return', ctx.body = {
              success: false,
              err: 'Field incomplete'
            });

          case 5:
            _context5.prev = 5;
            _context5.next = 8;
            return Article.findByIdAndUpdate(id, body).exec();

          case 8:
            body = _context5.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5['catch'](5);

            ctx.body = {
              success: false,
              err: _context5.t0
            };

          case 15:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[5, 12]]);
  }));

  return function patchArticle(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var deleteArticle = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
    var id, body;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return Article.findByIdAndRemove(id).exec();

          case 6:
            body = _context6.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6['catch'](3);

            ctx.body = {
              success: false,
              err: _context6.t0
            };

          case 13:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[3, 10]]);
  }));

  return function deleteArticle(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var search = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(ctx, next) {
    var keyword, reg, body;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            keyword = ctx.params.keyword;

            keyword = decodeURIComponent(keyword);
            reg = new RegExp(keyword, 'i');
            _context7.prev = 3;
            _context7.next = 6;
            return Article.find({
              publish: true,
              $or: [{ title: { $regex: reg } }, { content: { $regex: reg } }]
            }).sort({ 'createdAt': -1 }).exec();

          case 6:
            body = _context7.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context7.next = 13;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7['catch'](3);

            ctx.body = {
              success: false,
              err: _context7.t0
            };

          case 13:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this, [[3, 10]]);
  }));

  return function search(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var archives = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(ctx, next) {
    var articles, arr, arr2, year, month, date, i, _i, total, archiveArticles, j;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Article.find({ publish: true }).populate({
              path: 'tags',
              select: 'id name'
            }).select('id title tags createdAt updatedAt').sort({ 'createdAt': -1 }).exec();

          case 2:
            articles = _context8.sent;
            arr = [], arr2 = [], year = void 0, month = void 0, date = void 0;

            for (i = 0; i < articles.length; i++) {
              year = new Date(articles[i].createdAt).getFullYear() + '';
              month = new Date(articles[i].createdAt).getMonth() + 1 + '';
              if (month.length === 1) {
                month = '0' + month;
              }
              date = year + '\u5E74' + month + '\u6708';
              arr.push({
                date: date,
                article: articles[i]
              });
            }

            for (_i = 0; _i < arr.length;) {
              total = 0, archiveArticles = [];

              for (j = _i; j < arr.length; j++) {
                if (arr[_i].date === arr[j].date) {
                  archiveArticles.push(arr[j].article);
                  total++;
                }
              }
              arr2.push({
                date: arr[_i].date,
                articles: archiveArticles,
                total: total
              });
              _i += total;
            }

            ctx.body = {
              success: true,
              data: arr2
            };

          case 7:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, _this);
  }));

  return function archives(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var upload = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(ctx, next) {
    var form, getImgUrl;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            getImgUrl = function getImgUrl(ctx) {
              return new Promise(function (resolve, reject) {
                form.parse(ctx.req, function (err, fields, files) {
                  if (err) {
                    console.log(err);
                    reject(err);
                  }
                  // console.log(files)
                  var lastItem = files[Object.keys(files)[Object.keys(files).length - 1]];

                  // 获取文件后缀名
                  var extname = Date.now() + __WEBPACK_IMPORTED_MODULE_2_path___default.a.extname(lastItem.name);
                  var oldUrl = lastItem.path;
                  var newUrl = './public/' + extname;

                  // 文件重命名，上传到服务器
                  var readStream = __WEBPACK_IMPORTED_MODULE_4_fs___default.a.createReadStream(oldUrl);
                  var writeStream = __WEBPACK_IMPORTED_MODULE_4_fs___default.a.createWriteStream(newUrl);
                  readStream.pipe(writeStream);
                  var imgUrl = domain + '/public/' + extname;
                  resolve(imgUrl);
                });
              });
            };

            form = new __WEBPACK_IMPORTED_MODULE_5_formidable___default.a.IncomingForm();
            _context9.next = 4;
            return getImgUrl(ctx).then(function (url) {
              ctx.body = url;
            });

          case 4:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, _this);
  }));

  return function upload(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony export (binding) */ __webpack_require__.d(exports, "postComment", function() { return postComment; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(exports, "deleteComment", function() { return deleteComment; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var Article = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Article');
var Comment = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Comment');
var User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User');

var postComment = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var body, id, token, content, _body$replyId, replyId, _ref2, data, user, comment;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = ctx.request.body;
            id = body.id, token = body.token, content = body.content, _body$replyId = body.replyId, replyId = _body$replyId === undefined ? '' : _body$replyId;
            // replyId表示是一条回复，是可选的

            if (!(!id || !token || !content)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', ctx.body = {
              success: false,
              err: 'Field incomplete'
            });

          case 4:
            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('https://api.github.com/user?access_token=' + token);

          case 6:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (!data.login) {
              _context.next = 28;
              break;
            }

            _context.next = 11;
            return User.findOne({ username: data.login });

          case 11:
            user = _context.sent;
            _context.prev = 12;
            _context.next = 15;
            return new Comment({
              content: content,
              user: user._id,
              article: id,
              replyId: replyId
            });

          case 15:
            comment = _context.sent;
            _context.next = 18;
            return comment.save();

          case 18:
            _context.next = 20;
            return Article.findByIdAndUpdate(id, { $push: { comments: comment } }, { safe: true, upsert: true });

          case 20:
            ctx.body = {
              success: true,
              data: comment
            };
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context['catch'](12);

            ctx.body = {
              success: false,
              err: _context.t0
            };

          case 26:
            _context.next = 29;
            break;

          case 28:
            ctx.body = {
              success: false,
              err: 'Token is invalid'
            };

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[12, 23]]);
  }));

  return function postComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getComments = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var comments;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Comment.find({}).populate({
              path: 'user'
            }).populate({
              path: 'article',
              select: 'id title'
            }).sort({ 'createdAt': -1 }).exec();

          case 2:
            comments = _context2.sent;

            try {
              ctx.body = {
                success: true,
                data: comments
              };
            } catch (e) {
              ctx.body = {
                success: false,
                err: e
              };
            }

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function getComments(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteComment = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var id, body;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context3.prev = 3;
            _context3.next = 6;
            return Comment.findByIdAndRemove(id).exec();

          case 6:
            body = _context3.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](3);

            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[3, 10]]);
  }));

  return function deleteComment(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "getTagsOrArticles", function() { return getTagsOrArticles; });
/* harmony export (binding) */ __webpack_require__.d(exports, "postTag", function() { return postTag; });
/* harmony export (binding) */ __webpack_require__.d(exports, "patchTag", function() { return patchTag; });
/* harmony export (binding) */ __webpack_require__.d(exports, "deleteTag", function() { return deleteTag; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var Tag = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Tag');
var Article = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Article');
var getTagsOrArticles = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var id, data;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = ctx.params.id, data = void 0;

            if (!id) {
              _context.next = 14;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return Article.find({ publish: true, tags: [id] }).populate({
              path: 'tags',
              select: 'id name'
            }).sort({ 'updatedAt': -1 }).exec();

          case 5:
            data = _context.sent;

            ctx.body = {
              success: true,
              data: data
            };
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](2);

            ctx.body = {
              success: false,
              err: _context.t0
            };

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.next = 16;
            return Tag.find({}).sort({ 'updatedAt': -1 }).exec();

          case 16:
            data = _context.sent;

            ctx.body = {
              success: true,
              data: data
            };

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 9]]);
  }));

  return function getTagsOrArticles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var postTag = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var body, _body, name;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            body = ctx.request.body;
            _body = body, name = _body.name;

            if (name) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', ctx.body = {
              success: false,
              err: 'Tag name is required'
            });

          case 4:
            _context2.prev = 4;

            body = new Tag(body);
            _context2.next = 8;
            return body.save();

          case 8:
            ctx.body = {
              success: true,
              data: body
            };
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](4);

            ctx.body = {
              success: false,
              err: _context2.t0
            };

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[4, 11]]);
  }));

  return function postTag(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var patchTag = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var body, _body2, id;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = ctx.request.body;

            body.updatedAt = Date.now();
            _body2 = body, id = _body2.id;

            if (id) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 5:
            _context3.prev = 5;
            _context3.next = 8;
            return Tag.findByIdAndUpdate(id, body).exec();

          case 8:
            body = _context3.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3['catch'](5);

            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 15:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[5, 12]]);
  }));

  return function patchTag(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteTag = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var id, body;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = ctx.params.id;

            if (id) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt('return', ctx.body = {
              success: false,
              err: 'id is required'
            });

          case 3:
            _context4.prev = 3;
            _context4.next = 6;
            return Tag.findByIdAndRemove(id).exec();

          case 6:
            body = _context4.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4['catch'](3);

            ctx.body = {
              success: false,
              err: _context4.t0
            };

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[3, 10]]);
  }));

  return function deleteTag(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_markdown_it__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony export (binding) */ __webpack_require__.d(exports, "sitemap", function() { return sitemap; });
/* harmony export (binding) */ __webpack_require__.d(exports, "rss", function() { return rss; });
/* harmony export (binding) */ __webpack_require__.d(exports, "robots", function() { return robots; });
/* harmony export (binding) */ __webpack_require__.d(exports, "sendEmail", function() { return sendEmail; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var nodemailer = __webpack_require__(29);
var Article = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Article');
var domain = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.domain ? __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.domain : 'http://' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.host + ':' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.port;
// sitemap
var sitemap = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var sitemap, head, tail, res, body;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sitemap = '';
            head = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\r\n';
            tail = '</urlset>';
            _context.next = 5;
            return Article.find({ publish: true }).sort({ 'createdAt': -1 }).exec();

          case 5:
            res = _context.sent;
            body = res.reduce(function (prev, curr) {
              prev += ('\n      <url>\n        <loc>' + domain + '/detail/' + curr.id + '</loc>\n        <lastmod>' + curr.updatedAt + '</lastmod>\n        <priority>0.6</priority>\n      </url>').trim();
              return prev;
            }, '');

            sitemap = head + body + tail;
            ctx.type = 'application/xml';
            ctx.res.end(sitemap);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function sitemap(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// rss
var rss = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var rss, head, tail, res, body;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rss = '';
            head = '<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">\n    <channel>\n      <title>' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].user.nickname + '</title>\n      <link>' + domain + '</link>\n      <description>' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].user.motto + '</description>\n      <atom:link href="' + domain + '/rss.xml" rel="self"/>\n      <language>zh-CN</language>\n      <lastBuildDate>' + new Date().toUTCString() + '</lastBuildDate>\r\n';
            tail = '</channel>\r\n</rss>';
            _context2.next = 5;
            return Article.find({ publish: true }).limit(10).sort({ 'createdAt': -1 }).exec();

          case 5:
            res = _context2.sent;
            body = res.reduce(function (prev, curr) {
              var date = new Date(curr.updatedAt).toUTCString();
              var md = new __WEBPACK_IMPORTED_MODULE_1_markdown_it___default.a();
              var content = md.render(curr.content).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
              prev += ('\n      <item>\n        <title>' + curr.title + '</title>\n        <link>' + domain + '/detail/' + curr.id + '</link>\n        <description>' + content + '</description>\n        <pubDate>' + date + '</pubDate>\n        <guid>' + domain + '/detail/' + curr.id + '</guid>\n      </item>').trim();
              return prev;
            }, '');

            ctx.type = 'application/xml';
            rss = head + body + tail;
            ctx.res.end(rss);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function rss(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// robots
var robots = function robots(ctx, next) {
  var robots = ('\n    User-agent: *\n    Allow: /\n    Sitemap: ' + domain + '/sitemap.xml\n    User-agent: YisouSpider\n    Disallow: /\n    User-agent: EasouSpider\n    Disallow: /\n    User-agent: EtaoSpider\n    Disallow: /\n    User-agent:').trim();
  ctx.res.end(robots);
};

var sendEmail = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var body, fromUserNickname, fromUserContent, fromUserEmail, toUserNickname, toUserContent, toUserEmail, articleId, transporter, domain, mailOptions;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = ctx.request.body;
            fromUserNickname = body.fromUserNickname, fromUserContent = body.fromUserContent, fromUserEmail = body.fromUserEmail, toUserNickname = body.toUserNickname, toUserContent = body.toUserContent, toUserEmail = body.toUserEmail, articleId = body.articleId;

            if (!(!fromUserNickname || !fromUserContent || !fromUserEmail || !toUserNickname || !toUserContent || !toUserEmail || !articleId)) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'Field incomplete'
            });

          case 4:
            transporter = nodemailer.createTransport({
              service: 'qq',
              port: 465,
              secure: true,
              auth: {
                user: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].emailConfig.user,
                pass: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].emailConfig.pass
              }
            });
            domain = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.domain ? __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.domain : __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].app.host;
            mailOptions = {
              from: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].emailConfig.user,
              to: toUserEmail,
              subject: '博客评论通知',
              html: ('<p>' + fromUserNickname + '\u56DE\u590D\u4E86\u4F60\u7684\u8BC4\u8BBA\uFF1A<p>\n    <p>\u539F\u5185\u5BB9\uFF1A' + toUserContent + '<p>\n    <p>\u56DE\u590D\u5185\u5BB9\uFF1A' + fromUserContent + '<p>\n    <p><a href="' + domain + '/detail/' + articleId + '">\u67E5\u770B\u539F\u6587</a></p>').trim()
            };
            _context3.next = 9;
            return transporter.sendMail(mailOptions).then(function (info) {
              ctx.body = {
                success: true,
                data: info
              };
            }).catch(function (err) {
              ctx.body = {
                success: false,
                err: err
              };
            });

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function sendEmail(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_url__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(exports, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(exports, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(exports, "patchUserInfo", function() { return patchUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(exports, "githubLogin", function() { return githubLogin; });
/* harmony export (binding) */ __webpack_require__.d(exports, "githubCallback", function() { return githubCallback; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








var User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User');

var domain = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.domain ? __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.domain : 'http://' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.host + ':' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].app.port;

var login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var _ctx$request$body, username, password, user, secret, expiresIn, token;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;

            password = __WEBPACK_IMPORTED_MODULE_3_md5___default()(password);
            _context.prev = 2;
            _context.next = 5;
            return User.findOne({ username: username, password: password }).exec();

          case 5:
            user = _context.sent;
            secret = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].jwt.secret;
            expiresIn = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].jwt.expiresIn;
            token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign({ username: user.username, userID: user._id }, secret);

            ctx.cookies.set('token', token);
            ctx.body = {
              success: true,
              data: {
                token: token
              }
            };
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](2);

            ctx.body = {
              success: false,
              err: _context.t0
            };

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 13]]);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var logout = function logout(ctx, next) {
  ctx.cookies.set('token', null);
  ctx.body = {
    success: true,
    data: {}
  };
};

var getUserInfo = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var username, avatarUrl, data, _data;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = ctx.params.username;
            avatarUrl = domain + '/public/' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].user.avatar;

            if (username) {
              _context2.next = 16;
              break;
            }

            _context2.prev = 3;
            _context2.next = 6;
            return User.findOne({ role: 'superAdmin' }).exec();

          case 6:
            data = _context2.sent;

            data.avatar = avatarUrl;
            ctx.body = {
              success: true,
              data: data
            };
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](3);

            ctx.body = {
              success: false,
              err: _context2.t0
            };

          case 14:
            _context2.next = 26;
            break;

          case 16:
            _context2.prev = 16;
            _context2.next = 19;
            return User.findOne({ username: username }).exec();

          case 19:
            _data = _context2.sent;

            ctx.body = {
              success: true,
              data: _data
            };
            _context2.next = 26;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t1 = _context2['catch'](16);

            ctx.body = {
              success: false,
              err: _context2.t1
            };

          case 26:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[3, 11], [16, 23]]);
  }));

  return function getUserInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var patchUserInfo = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var body, oldPassword, newPassword, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            body = ctx.request.body;

            if (!(body.oldPassword && body.newPassword)) {
              _context3.next = 21;
              break;
            }

            // 更新管理员密码
            oldPassword = __WEBPACK_IMPORTED_MODULE_3_md5___default()(body.oldPassword);
            newPassword = __WEBPACK_IMPORTED_MODULE_3_md5___default()(body.newPassword);
            _context3.prev = 4;
            _context3.next = 7;
            return User.findOne({ role: 'superAdmin' }).exec();

          case 7:
            user = _context3.sent;

            if (!(user.password !== oldPassword)) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt('return', ctx.body = {
              success: false,
              err: 'Wrong password'
            });

          case 10:
            _context3.next = 12;
            return User.findOneAndUpdate({ role: 'superAdmin' }, { password: newPassword, updatedAt: Date.now() }).exec();

          case 12:
            body = _context3.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3['catch'](4);

            ctx.body = {
              success: false,
              err: _context3.t0
            };

          case 19:
            _context3.next = 32;
            break;

          case 21:
            // 更新管理员信息
            body.updatedAt = Date.now();
            _context3.prev = 22;
            _context3.next = 25;
            return User.findOneAndUpdate({ role: 'superAdmin' }, body).exec();

          case 25:
            body = _context3.sent;

            ctx.body = {
              success: true,
              data: body
            };
            _context3.next = 32;
            break;

          case 29:
            _context3.prev = 29;
            _context3.t1 = _context3['catch'](22);

            ctx.body = {
              success: false,
              err: _context3.t1
            };

          case 32:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[4, 16], [22, 29]]);
  }));

  return function patchUserInfo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// state表示github授权后的回调信息
var state = '';
var githubLogin = function githubLogin(ctx, next) {
  state = ctx.params.state || '';
  var u = 'https://github.com/login/oauth/authorize?client_id=' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].githubConfig.githubClient + '&scope=' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].githubConfig.scope + '&redirect_uri=' + domain + '/api/oauth/github/callback&state=' + state;
  ctx.res.statusCode = 302;
  ctx.res.setHeader('location', u);
  ctx.res.end();
};

// 授权成功后的回调函数
var githubCallback = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var query, code, u, githubToken, userInfo, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = __WEBPACK_IMPORTED_MODULE_5_url___default.a.parse(ctx.req.url, true).query;
            code = query.code;
            u = 'https://github.com/login/oauth/access_token?client_id=' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].githubConfig.githubClient + '&client_secret=' + __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].githubConfig.githubSecret + '&code=' + code + '&state=' + state;
            githubToken = '';

            // 把获取到的token设置到cookie里

            _context4.next = 6;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(u).then(function (ret) {
              var data = ret.data;

              var arr = data.split('&'),
                  obj = {};
              arr.forEach(function (item) {
                var key = item.split('=')[0];
                var value = item.split('=')[1];
                obj[key] = value;
              });
              if (obj.access_token) {
                githubToken = obj.access_token;
                ctx.cookies.set('githubToken', obj.access_token);
              } else {
                ctx.cookies.set('githubToken', '');
              }
            });

          case 6:
            if (!githubToken) {
              _context4.next = 17;
              break;
            }

            userInfo = {};
            // 把用户信息保存到数据库

            _context4.next = 10;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('https://api.github.com/user?access_token=' + githubToken).then(function (ret) {
              var data = ret.data;

              userInfo.role = 'user';
              userInfo.username = data.login;
              userInfo.email = data.email;
              userInfo.nickname = data.name;
              userInfo.motto = data.bio;
              userInfo.avatar = data.avatar_url;
            });

          case 10:
            _context4.next = 12;
            return User.findOne({ username: userInfo.username }).exec();

          case 12:
            user = _context4.sent;

            if (user) {
              _context4.next = 17;
              break;
            }

            user = new User(userInfo);
            _context4.next = 17;
            return user.save();

          case 17:
            return _context4.abrupt('return', ctx.response.redirect(domain + '/detail/' + state));

          case 18:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function githubCallback(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return checkToken; });
/* unused harmony export checkGithubToken */


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User');

function parseCookies(cookies) {
  var cookie = cookies.split(';'),
      cookieObj = {},
      cookieArr = [],
      key = '',
      value = '';
  for (var i = 0; i < cookie.length; i++) {
    cookieArr = cookie[i].trim().split('=');
    key = cookieArr[0];
    value = cookieArr[1];
    cookieObj[key] = value;
  }
  return cookieObj;
}
var checkToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var cookieObj, token, decoded, username, userID, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 可以从cookie里面获得token，也可以从request header里获取token
            cookieObj = parseCookies(ctx.get('Cookie')), token = '';

            if (cookieObj && cookieObj.token) {
              token = cookieObj.token;
            } else if (ctx.get('token')) {
              token = ctx.get('token');
            } else {
              token = '';
            }

            if (!token) {
              _context.next = 23;
              break;
            }

            _context.prev = 3;
            decoded = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].jwt.secret);
            username = decoded.username;
            userID = decoded.userID;
            _context.next = 9;
            return User.findOne({ _id: userID, username: username }).exec();

          case 9:
            user = _context.sent;

            if (!(user._id && user.username)) {
              _context.next = 15;
              break;
            }

            _context.next = 13;
            return next();

          case 13:
            _context.next = 16;
            break;

          case 15:
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: 'Token is invalid'
            });

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](3);
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: _context.t0
            });

          case 21:
            _context.next = 24;
            break;

          case 23:
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: 'Please login'
            });

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[3, 18]]);
  }));

  return function checkToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var checkGithubToken = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var githubToken, _ref3, data, user;

    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            githubToken = ctx.get('githubToken');

            if (!githubToken) {
              _context2.next = 23;
              break;
            }

            _context2.prev = 2;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('https://api.github.com/user?access_token=' + githubToken);

          case 5:
            _ref3 = _context2.sent;
            data = _ref3.data;
            _context2.next = 9;
            return User.findOne({ username: data.login });

          case 9:
            user = _context2.sent;

            if (!(user._id && user.username)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 13;
            return next();

          case 13:
            _context2.next = 16;
            break;

          case 15:
            return _context2.abrupt('return', ctx.body = {
              success: false,
              err: 'Token is invalid'
            });

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2['catch'](2);
            return _context2.abrupt('return', ctx.body = {
              success: false,
              err: _context2.t0
            });

          case 21:
            _context2.next = 24;
            break;

          case 23:
            return _context2.abrupt('return', ctx.body = {
              success: false,
              err: 'Please login'
            });

          case 24:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[2, 18]]);
  }));

  return function checkGithubToken(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var ArticleSchema = new Schema({
  title: String,
  content: String,
  publish: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  flag: {
    type: Number,
    default: 1
  },
  like: {
    type: Array,
    default: []
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ArticleSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
};
// db.users.update({}, {$set: {github: 'https://github.com/wmui'}}, {multi: 1})
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Article', ArticleSchema);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  },
  content: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  replyId: {
    type: String,
    default: ''
  }
});

CommentSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
};

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Comment', CommentSchema);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





__webpack_require__(26);
__webpack_require__(25);
__webpack_require__(22);
__webpack_require__(23);

var User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User');

var mongoUrl = 'mongodb://' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].mongodb.host + ':' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].mongodb.port + '/' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].mongodb.database;
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection.openUri(mongoUrl).once('open', _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
  var userInfo, user;
  return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('database connect successed');
          // 初始化管理员信息
          userInfo = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].user;

          userInfo.password = __WEBPACK_IMPORTED_MODULE_2_md5___default()(userInfo.password);

          _context.next = 5;
          return User.findOne({ role: 'superAdmin' }).exec();

        case 5:
          user = _context.sent;

          if (user) {
            _context.next = 11;
            break;
          }

          user = new User(userInfo);
          _context.next = 10;
          return user.save();

        case 10:
          console.log('Administrator information initialization succeeded');

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}))).on('error', function (error) {
  console.warn('database connect fail', error);
});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var TagSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

TagSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
};

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Tag', TagSchema);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var UserSchema = new Schema({
  role: {
    type: String,
    default: 'user'
  },
  username: String,
  password: String,
  email: String,
  nickname: String,
  motto: String,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// 隐藏一些字段
UserSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform: function transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.id;
  }
};
__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("formidable");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("markdown-it");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("nodemailer");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("url");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__koa_cors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(10);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, router, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].app.host;
            port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].app.port;
            router = new __WEBPACK_IMPORTED_MODULE_5_koa_router___default.a();

            app.use(__WEBPACK_IMPORTED_MODULE_6__koa_cors___default()());
            app.use(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default()());
            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_static___default()('.'));
            router.use('', __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */].routes());
            app.use(router.routes()).use(router.allowedMethods());

            // Import and Set Nuxt.js options
            config = __webpack_require__(9);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 16;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 16;
            return builder.build();

          case 16:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_heyong_Workspace_hy_Projects_vueblog_vueblog_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map