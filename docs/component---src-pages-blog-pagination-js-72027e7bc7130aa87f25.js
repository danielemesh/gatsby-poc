webpackJsonp([39530430036204],{

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.query = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactstrap = __webpack_require__(19);
	
	var _gatsbyLink = __webpack_require__(66);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BlogPagination = function (_Component) {
	  _inherits(BlogPagination, _Component);
	
	  function BlogPagination(_ref) {
	    var data = _ref.data;
	
	    _classCallCheck(this, BlogPagination);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    console.log(data);
	    _this.state = {
	      posts: data.allPaginatedPostsPost.edges.map(function (e) {
	        return e.node;
	      })
	    };
	
	    _this.getPostsByUserId = _this.getPostsByUserId.bind(_this);
	    _this.onPaginationClick = _this.onPaginationClick.bind(_this);
	    return _this;
	  }
	
	  BlogPagination.prototype.getPostsByUserId = function () {
	    var _ref2 = _asyncToGenerator(function* (id) {
	      var response = yield fetch('http://jsonplaceholder.typicode.com/posts/?userId=' + id);
	      var posts = yield response.json();
	
	      return posts;
	    });
	
	    function getPostsByUserId(_x) {
	      return _ref2.apply(this, arguments);
	    }
	
	    return getPostsByUserId;
	  }();
	
	  BlogPagination.prototype.onPaginationClick = function onPaginationClick(id) {
	    var _this2 = this;
	
	    this.getPostsByUserId(id).then(function (posts) {
	      _this2.setState(_extends({}, _this2.state, { posts: posts }));
	    });
	  };
	
	  BlogPagination.prototype.render = function render() {
	    var _this3 = this;
	
	    return _react2.default.createElement(
	      _reactstrap.Container,
	      { fluid: true },
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        'h1',
	        null,
	        'This content is Static'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _reactstrap.Pagination,
	        null,
	        _react2.default.createElement(
	          _reactstrap.PaginationItem,
	          null,
	          _react2.default.createElement(_reactstrap.PaginationLink, { previous: true, href: '#' })
	        ),
	        Array.from(Array(10).keys()).map(function (index) {
	          return _react2.default.createElement(
	            _reactstrap.PaginationItem,
	            { key: index },
	            _react2.default.createElement(
	              _reactstrap.PaginationLink,
	              { href: '#', onClick: function onClick() {
	                  return _this3.onPaginationClick(index + 1);
	                } },
	              index + 1
	            )
	          );
	        })
	      ),
	      _react2.default.createElement('br', null),
	      this.state.posts.map(function (post) {
	        return _react2.default.createElement(
	          _reactstrap.Row,
	          { key: post.id },
	          _react2.default.createElement(
	            _reactstrap.Col,
	            null,
	            _react2.default.createElement(
	              _reactstrap.Card,
	              null,
	              _react2.default.createElement(
	                _reactstrap.CardBody,
	                null,
	                _react2.default.createElement(
	                  _reactstrap.CardTitle,
	                  null,
	                  post.title
	                ),
	                _react2.default.createElement(
	                  _reactstrap.CardText,
	                  null,
	                  post.body
	                ),
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  { to: '/app/posts/' + (post.paginatedPostsId || post.id) },
	                  'app'
	                )
	              )
	            )
	          )
	        );
	      })
	    );
	  };
	
	  return BlogPagination;
	}(_react.Component);
	
	exports.default = BlogPagination;
	var query = exports.query = '** extracted graphql fragment **';

/***/ })

});
//# sourceMappingURL=component---src-pages-blog-pagination-js-72027e7bc7130aa87f25.js.map