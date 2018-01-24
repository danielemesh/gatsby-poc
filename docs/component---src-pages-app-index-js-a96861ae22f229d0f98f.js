webpackJsonp([221308268577256,93886835457461,193171168935561,92998084348926,228723561944273],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  console.log('ClientAbout: ', props);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'This is the client\'s about page component'
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  console.log('Home: ', props);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'Home'
	    ),
	    _react2.default.createElement(
	      _reactRouterDom.Link,
	      { to: '/app/about/' },
	      'About'
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Post = function (_React$Component) {
	  _inherits(Post, _React$Component);
	
	  function Post(props) {
	    _classCallCheck(this, Post);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    console.log('Post: ', props);
	
	    _this.state = {
	      post: {}
	    };
	    return _this;
	  }
	
	  Post.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.fetchPost(this.props.match.params.id).then(function (post) {
	      _this2.setState(_extends({}, _this2.state, { post: post }));
	    });
	  };
	
	  Post.prototype.fetchPost = function () {
	    var _ref = _asyncToGenerator(function* (id) {
	      var response = yield fetch('http://jsonplaceholder.typicode.com/posts/' + id);
	      return yield response.json();
	    });
	
	    function fetchPost(_x) {
	      return _ref.apply(this, arguments);
	    }
	
	    return fetchPost;
	  }();
	
	  Post.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h3',
	        null,
	        this.state.post.title
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        this.state.post.body
	      )
	    );
	  };
	
	  return Post;
	}(_react2.default.Component);
	
	exports.default = Post;
	module.exports = exports['default'];

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
	//import ClientAbout from './components/ClientAbout';
	
	
	//if (typeof window !== 'undefined') {
	var Routes = __webpack_require__(75);
	//}
	
	exports.default = function (props) {
	  return _react2.default.createElement(Routes, props);
	};
	
	//export default (props) => (<Routes {...props} />);
	
	//export default (props) => {
	//  return (
	//      <BrowserRouter>
	//        <Switch>
	//          <Route path="/app/" exact render={() => <Home {...props} />} />
	//          <Route path="/app/posts/:id/" component={Post} />
	//          <Route path="/app/about/" render={() => <ClientAbout />} />
	//        </Switch>
	//      </BrowserRouter>
	//  );
	//};
	
	
	//const Home = (props) => {
	//  return (
	//      <div>
	//        <h1>Home</h1>
	//        <Link to="/app/about">About</Link>
	//      </div>
	//  );
	//};
	
	//class Post extends React.Component {
	//  constructor(props) {
	//    super(props);
	//    console.log('post: ', props);
	//
	//    this.state = {
	//      post: {}
	//    };
	//  }
	//
	//  componentDidMount() {
	//    this.fetchPost(this.props.match.params.id).then(post => {
	//      this.setState({...this.state, post});
	//    });
	//  }
	//
	//  async fetchPost(id) {
	//    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
	//    return await response.json();
	//  }
	//
	//  render() {
	//    return (
	//        <div>
	//          <h3>{this.state.post.title}</h3>
	//          <p>{this.state.post.body}</p>
	//        </div>
	//    );
	//  }
	//}
	

	module.exports = exports['default'];

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(22);
	
	var _Home = __webpack_require__(44);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _ClientAbout = __webpack_require__(43);
	
	var _ClientAbout2 = _interopRequireDefault(_ClientAbout);
	
	var _Post = __webpack_require__(45);
	
	var _Post2 = _interopRequireDefault(_Post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  console.log('Routes: ', props);
	
	  return _react2.default.createElement(
	    _reactRouterDom.Switch,
	    null,
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/app/', exact: true, component: _Home2.default }),
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/app/posts/:id/', component: _Post2.default }),
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/app/about/', component: _ClientAbout2.default })
	  );
	};
	
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-pages-app-index-js-a96861ae22f229d0f98f.js.map