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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _index = __webpack_require__(5);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(8);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _search = __webpack_require__(11);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _detail = __webpack_require__(15);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _cart = __webpack_require__(18);
	
	var _cart2 = _interopRequireDefault(_cart);
	
	var _info = __webpack_require__(21);
	
	var _info2 = _interopRequireDefault(_info);
	
	var _my = __webpack_require__(24);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _login = __webpack_require__(27);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _login3 = __webpack_require__(30);
	
	var _login4 = _interopRequireDefault(_login3);
	
	var _store = __webpack_require__(33);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = Vue.extend({
	  store: _store2.default
	});
	//开启debug
	
	
	// import Vue from "./libs/vue.js";
	// import VueRouter from "./libs/vue-router.js"
	// Vue.use(VueRouter);
	
	//vuex
	Vue.config.debug = true;
	
	var router = new VueRouter({
	  routes: [{
	    path: "/",
	    component: _login2.default
	  }, {
	    path: '/index',
	    component: _index2.default,
	    children: [{
	      path: '/index/main',
	      component: _main2.default
	    }, {
	      path: '/index/search',
	      component: _search2.default
	
	    }, {
	      path: '/index/cart',
	      component: _cart2.default
	    }, {
	      path: '/index/info',
	      component: _info2.default
	    }, {
	      path: '/index/my',
	      component: _my2.default
	    }]
	  }, {
	    name: 'detail',
	    path: '/search/detail/:id',
	    component: _detail2.default
	  }, {
	    name: 'login1',
	    path: '/login/:loginid',
	    component: _login4.default
	  }]
	});
	
	var app = new Vue({
	  router: router
	}).$mount('#xhsapp');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-de3e70cc/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <!-- //单页面 包含整个app公共部分 -->
	// <template>
	//   <div class="box-container">
	//       <router-view transition="goto" transition-mode="out-in" keep-alive></router-view>
	//     <footer id="footer">
	//       <ul>
	//         <li  v-for="(tab,$index) in tabList" v-bind:class="curIndex==$index?'active':''" v-on:click="changPage($index)">
	//           <router-link :to="{ path: tab.path }">
	//               <i class="iconfont"><div v-html="tab.icon"></div></i>
	//               <span>{{tab.name}}</span>
	//            </router-link>
	//          </li>
	//       </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	//
	// <script>
	// import {changeIndex} from "../vuex/actions.js";
	// import { getIndex } from '../vuex/getters';
	exports.default = {
	  // vuex: {
	  //   actions: {
	  //     change:changeIndex
	  //   },
	  //   getters: {
	  //     curIndex: getIndex
	  //   }
	  // },
	  data: function data() {
	    return {
	      curIndex: 0,
	      tabList: [{
	        path: '/index/main',
	        icon: "&#xe6bb;",
	        name: "首页"
	      }, {
	        path: '/index/search',
	        icon: "&#xe65c;",
	        name: "发现"
	      }, {
	        path: '/index/cart',
	        icon: "&#xe6b9;",
	        name: "购买"
	      }, {
	        path: '/index/info',
	        icon: "&#xe7bd;",
	        name: "消息"
	      }, {
	        path: '/index/my',
	        icon: "&#xe787;",
	        name: "我的"
	      }]
	    };
	  },
	
	  methods: {
	    changPage: function changPage(index) {
	      this.curIndex = index;
	      console.log(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"box-container\">\n    <router-view transition=\"goto\" transition-mode=\"out-in\" keep-alive></router-view>\n  <footer id=\"footer\">\n    <ul>\n      <li  v-for=\"(tab,$index) in tabList\" v-bind:class=\"curIndex==$index?'active':''\" v-on:click=\"changPage($index)\">\n        <router-link :to=\"{ path: tab.path }\">\n            <i class=\"iconfont\"><div v-html=\"tab.icon\"></div></i>\n            <span>{{tab.name}}</span>\n         </router-link>\n       </li>\n    </ul>\n  </footer>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-47b928a1/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <!-- //主页面 -->
	// <template>
	//     <div class="main-container">
	//
	//
	//         <div class="main-header">
	//             <ul>
	//                 <li><i class="iconfont">&#xe65c;</i></li>
	//                 <li>小红书</li>
	//                 <li><i class="iconfont">&#xe77e;</i></li>
	//             </ul>
	//         </div>
	//
	//         <div class="main-content" id="main-scroll">
	//             <div class="scroll-box">
	//
	//                 <div class="loading">
	//                     <div class="yo-loadtip yo-loadtip-test">
	//                         <i class="yo-ico"><div v-html="loadingicon"></div></i>
	//                         <div class="text">
	//                             <div v-html="loadingtext"></div>
	//                         </div>
	//                     </div>
	//                 </div>
	//
	//
	//                 <div id="app" class="app1">
	//                     <div>
	//                         <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="itemslist"  ref="waterfall">
	//                             <!-- each component is wrapped by a waterfall slot -->
	//                             <waterfall-slot v-for="(item, index) in itemslist" :width="item.width" :height="item.height" :order="index" :key="item.index" move-class="item-move">
	//                                 <div class="item" :style="item.style" :index="item.index">
	//                                   <template>
	//                                       <img v-bind:src="item.url" alt="">
	//                                   </template>
	//                                     <!-- <template v-for="temp1 in content">
	//
	//                                         <div class="txt">
	//                                             <h2>{{temp1.name}}</h2>
	//                                             <p>{{temp1.desc}}</p>
	//                                         </div>
	//
	//                                         <div class="user">
	//                                             {{temp1.user.nickname}}
	//                                         </div>
	//                                     </template> -->
	//
	//                                 </div>
	//                             </waterfall-slot>
	//                         </waterfall>
	//                     </div>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	//对上面的渲染
	// var Vue = require('../libs/vue.js');
	// var VueResource = require('../libs/vue-resource.js');
	// Vue.use(VueResource);
	//vuex状态
	// import {
	//     changeIndex
	// } from "../vuex/actions";
	exports.default = {
	    // vuex:{
	    //     actions:{
	    //       change:changeIndex
	    //     }
	    //   },
	    components: {
	        'waterfall': Waterfall.waterfall,
	        'waterfall-slot': Waterfall.waterfallSlot
	    },
	    data: function data() {
	        return {
	            loadingicon: '',
	            loadingtext: '',
	            align: 'center',
	            itemslist: [],
	            content: '',
	            isBusy: false
	        };
	    },
	
	
	    methods: {},
	    updated: function updated() {},
	    mounted: function mounted() {
	
	        this.$nextTick(function () {
	            var _this = this;
	
	            // 保证 this.$el 已经插入文档
	            // this.change(0);
	            var that = this;
	            var myScroll;
	            var arrpush = [];
	            this.$http.get('http://www.htmlk.cn/vuejson/index3.json').then(function (res) {
	                // 第一次加载数据
	                _this.list = res.body.data;
	                _this.content = res.body.data;
	                for (var i = 0; i < res.body.data.length; i++) {
	                    _this.itemslist.push(res.body.data[i].images_list[0]);
	                }
	            });
	            //滑动
	            setTimeout(function () {
	                myScroll = new IScroll('#main-scroll', {
	                    click: true,
	                    mouseWheel: true,
	                    scrollbars: false,
	                    probeType: 1
	                });
	                myScroll.scrollTo(0, -100);
	                //下来刷新
	                myScroll.on("scroll", function () {
	
	                    if (this.y >= 0) {
	                        that.loadingicon = '&#xf07b;';
	                        that.loadingtext = "正在挖小红薯的路上...";
	                    }
	                });
	                //刷新加载数据
	                myScroll.on("scrollEnd", function () {
	                    console.log(this.y);
	                    var y = this.y;
	                    if (this.y > -100 && this.y < 0) {
	                        that.loadingicon = '&#xf07b;';
	                        that.loadingtext = "正在挖小红薯的路上...";
	                        myScroll.scrollTo(0, -100, 4000);
	                    }
	                    if (this.y == 0) {
	                        that.loadingicon = '&#xf089;';
	                        that.loadingtext = "正在搬运小红薯...";
	                        that.$http.get('http://www.htmlk.cn/vuejson/index2.json').then(function (res1) {
	                            console.log(res1.body.data);
	                            for (var j = 0; j < res1.body.data.length; j++) {
	                                arrpush.push(res1.body.data[j].images_list[0]);
	                                var arr = arrpush.concat(that.itemslist);
	                            }
	                            that.itemslist = arr;
	                            that.loadingicon = '&#xf078;';
	                            that.loadingtext = "小红薯都已经到达...";
	                            myScroll.scrollTo(0, -100, 4000);
	                            setTimeout(function () {
	                                myScroll.refresh();
	                            }, 1500);
	                        });
	                    }
	                });
	            }, 0);
	        });
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"main-container\">\n\n\n    <div class=\"main-header\">\n        <ul>\n            <li><i class=\"iconfont\">&#xe65c;</i></li>\n            <li>小红书</li>\n            <li><i class=\"iconfont\">&#xe77e;</i></li>\n        </ul>\n    </div>\n\n    <div class=\"main-content\" id=\"main-scroll\">\n        <div class=\"scroll-box\">\n\n            <div class=\"loading\">\n                <div class=\"yo-loadtip yo-loadtip-test\">\n                    <i class=\"yo-ico\"><div v-html=\"loadingicon\"></div></i>\n                    <div class=\"text\">\n                        <div v-html=\"loadingtext\"></div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div id=\"app\" class=\"app1\">\n                <div>\n                    <waterfall :align=\"align\" :line-gap=\"200\" :min-line-gap=\"100\" :max-line-gap=\"220\" :single-max-width=\"300\" :watch=\"itemslist\"  ref=\"waterfall\">\n                        <!-- each component is wrapped by a waterfall slot -->\n                        <waterfall-slot v-for=\"(item, index) in itemslist\" :width=\"item.width\" :height=\"item.height\" :order=\"index\" :key=\"item.index\" move-class=\"item-move\">\n                            <div class=\"item\" :style=\"item.style\" :index=\"item.index\">\n                              <template>\n                                  <img v-bind:src=\"item.url\" alt=\"\">\n                              </template>\n                                <!-- <template v-for=\"temp1 in content\">\n\n                                    <div class=\"txt\">\n                                        <h2>{{temp1.name}}</h2>\n                                        <p>{{temp1.desc}}</p>\n                                    </div>\n\n                                    <div class=\"user\">\n                                        {{temp1.user.nickname}}\n                                    </div>\n                                </template> -->\n\n                            </div>\n                        </waterfall-slot>\n                    </waterfall>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-36f70510/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(13);
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.changeIndex
	        }
	    },
	    data: function data() {
	        return {
	            events: '',
	            topic: '',
	            lifestyle: '',
	            destination: '',
	            lasts: ''
	        };
	    },
	
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;
	
	            // 保证 this.$el 已经插入文档
	            //this.change(1);
	            this.$http.get('http://www.htmlk.cn/vuejson/search.json').then(function (res) {
	                _this.events = res.data.data[0].events;
	                _this.topic = res.data.data[2].topic;
	                _this.lifestyle = res.data.data[4].lifestyle;
	                _this.destination = res.data.data[5].destination;
	                //console.log(res.data.data);
	                setTimeout(function () {
	                    new IScroll('#search-scroll', {
	                        click: true
	                    });
	                    new IScroll('#item-scroll-1', {
	                        scrollX: true,
	                        scrollY: false
	                    });
	                    new IScroll('#item-scroll-2', {
	                        scrollX: true,
	                        scrollY: false
	                    });
	                    new IScroll('#item-scroll-3', {
	                        scrollX: true,
	                        scrollY: false
	                    });
	                    new Swiper('.swiper-container', {
	                        autoplay: 3000, //可选选项，自动滑动
	                        loop: true,
	                        effect: 'fade',
	                        pagination: '.swiper-pagination',
	                        paginationType: 'fraction'
	                    });
	                }, 1500);
	            }, function (res) {
	                console.log(res.data.data); //error
	                _this.lasts = res.data.data[0];
	            });
	            var self = this;
	            this.$http.get('http://www.htmlk.cn/vuejson/searchlast.json').then(function (res) {
	                //  console.log(res.data.data[0]);
	                self.lasts = res.data.data;
	            });
	        });
	    }
	
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="search-container">
	//         <div class="search-header">
	//             <ul>
	//
	//                 <li><i class="iconfont">&#xe65c;</i>
	//                     <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
	//                 </li>
	//                 <li><i class="iconfont">&#xe6c9;</i></li>
	//             </ul>
	//         </div>
	//         <div class="search-content" id="search-scroll">
	//             <div><!-- IScroll 盒子 -->
	//                 <div class="swiper-container">
	//                     <div class="swiper-wrapper">
	//                         <div class="swiper-slide" v-for="item in events"><img v-bind:src="item.image" alt=""></div>
	//                     </div>
	//                     <div class="swiper-pagination"></div>
	//                 </div>
	//
	//                 <div class="hot-container">
	//                     <div class="title">
	//                         <ul>
	//                             <li >热门话题</li>
	//                             <li>hot topice</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="content" id="item-scroll-1">
	//                         <ul>
	//                             <li v-for="item1 in topic"><img v-bind:src="item1.image" alt="">
	//                                 <p>{{item1.name}}</p>
	//                             </li>
	//                             <li>
	//                               <p>全部</p>
	//                               <p>see all</p>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="hot-container"  >
	//                     <div class="title">
	//                         <ul>
	//                             <li>品质生活</li>
	//                             <li>liftstyles</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="content" id="item-scroll-2">
	//                         <ul>
	//                             <li v-for="item2 in lifestyle"><img v-bind:src="item2.image" alt="">
	//                                 <p>{{item2.name}}</p>
	//                             </li>
	//                             <li>
	//                               <p>全部</p>
	//                               <p>see all</p>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="hot-container" >
	//                     <div class="title">
	//                         <ul>
	//                             <li>全球购物</li>
	//                             <li>destinations</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="content" id="item-scroll-3">
	//                         <ul>
	//                             <li v-for="item3 in destination"><img v-bind:src="item3.image" alt="">
	//                                 <p>{{item3.name}}</p>
	//                             </li>
	//                             <li>
	//                               <p>全部</p>
	//                               <p>see all</p>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="hot-container"    >
	//                     <div class="title">
	//                         <ul>
	//                             <li>热门专辑</li>
	//                             <li>selected boards</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="last-content" >
	//                         <ul>
	//                             <li v-for="item5 in lasts" >
	//                               <router-link :to="{ name: 'detail', params: {id:item5.id } }">
	//                                 <div class="last-title" >
	//                                     <p>{{item5.name}}</p>
	//                                     <span>笔记·{{item5.total}}</span>
	//                                     <span>粉丝·{{item5.fans}}</span>
	//                                 </div>
	//                                 <div class="last-images">
	//                                   <template v-for="test in item5.images"><img v-bind:src="test" alt="">
	//                                   </template>
	//                                 </div>
	//                                 <div class="last-user">
	//                                       <img v-bind:src="item5.user.images" alt="">
	//                                       <p>由{{item5.user.nickname}}创建<p>
	//
	//                                 </div>
	//                               </router-link>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	//对上面的渲染
	// var Vue = require('../libs/vue.js');
	// var VueResource = require('../libs/vue-resource.js');
	// Vue.use(VueResource);

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var changeIndex = exports.changeIndex = function changeIndex(_ref, tabIndex) {
	  var dispatch = _ref.dispatch,
	      state = _ref.state;
	
	  dispatch('CHANGEINDEX', tabIndex);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-container\">\n    <div class=\"search-header\">\n        <ul>\n\n            <li><i class=\"iconfont\">&#xe65c;</i>\n                <input type=\"text\" name=\"name\" value=\"\" placeholder=\"搜索笔记商品和用户\" />\n            </li>\n            <li><i class=\"iconfont\">&#xe6c9;</i></li>\n        </ul>\n    </div>\n    <div class=\"search-content\" id=\"search-scroll\">\n        <div><!-- IScroll 盒子 -->\n            <div class=\"swiper-container\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\" v-for=\"item in events\"><img v-bind:src=\"item.image\" alt=\"\"></div>\n                </div>\n                <div class=\"swiper-pagination\"></div>\n            </div>\n\n            <div class=\"hot-container\">\n                <div class=\"title\">\n                    <ul>\n                        <li >热门话题</li>\n                        <li>hot topice</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"content\" id=\"item-scroll-1\">\n                    <ul>\n                        <li v-for=\"item1 in topic\"><img v-bind:src=\"item1.image\" alt=\"\">\n                            <p>{{item1.name}}</p>\n                        </li>\n                        <li>\n                          <p>全部</p>\n                          <p>see all</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"hot-container\"  >\n                <div class=\"title\">\n                    <ul>\n                        <li>品质生活</li>\n                        <li>liftstyles</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"content\" id=\"item-scroll-2\">\n                    <ul>\n                        <li v-for=\"item2 in lifestyle\"><img v-bind:src=\"item2.image\" alt=\"\">\n                            <p>{{item2.name}}</p>\n                        </li>\n                        <li>\n                          <p>全部</p>\n                          <p>see all</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"hot-container\" >\n                <div class=\"title\">\n                    <ul>\n                        <li>全球购物</li>\n                        <li>destinations</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"content\" id=\"item-scroll-3\">\n                    <ul>\n                        <li v-for=\"item3 in destination\"><img v-bind:src=\"item3.image\" alt=\"\">\n                            <p>{{item3.name}}</p>\n                        </li>\n                        <li>\n                          <p>全部</p>\n                          <p>see all</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"hot-container\"    >\n                <div class=\"title\">\n                    <ul>\n                        <li>热门专辑</li>\n                        <li>selected boards</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"last-content\" >\n                    <ul>\n                        <li v-for=\"item5 in lasts\" >\n                          <router-link :to=\"{ name: 'detail', params: {id:item5.id } }\">\n                            <div class=\"last-title\" >\n                                <p>{{item5.name}}</p>\n                                <span>笔记·{{item5.total}}</span>\n                                <span>粉丝·{{item5.fans}}</span>\n                            </div>\n                            <div class=\"last-images\">\n                              <template v-for=\"test in item5.images\"><img v-bind:src=\"test\" alt=\"\">\n                              </template>\n                            </div>\n                            <div class=\"last-user\">\n                                  <img v-bind:src=\"item5.user.images\" alt=\"\">\n                                  <p>由{{item5.user.nickname}}创建<p>\n\n                            </div>\n                          </router-link>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-238b3b39/detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="detail">
	//         <div class="detail-header">
	//             <ul>
	//                 <li>
	//                     <router-link :to="{path:'/index/search'}">&lt</router-link</li>
	//                         <li>专辑</li>
	//                         <li>发现</li>
	//             </ul>
	//         </div>
	//
	//         <div class="detail-content">
	//             <div class="title">
	//                 <div class="title-txt">
	//                     <h2>{{detail.name}}</h2>
	//                     <span>笔记:{{detail.total}}</span>
	//                     <span>粉丝:{{detail.fans}}</span>
	//                 </div>
	//                 <div class="like">
	//                     <p>+关注</p>
	//                 </div>
	//             </div>
	//
	//             <div class="desc">
	//                 <img v-bind:src="userinfo.images" alt="">
	//                 <p><span>{{userinfo.nickname}}</span>:{{detail.desc}}</p>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            detail: '',
	            userinfo: ''
	        };
	    },
	
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;
	
	            // 保证 this.$el 已经插入文档
	            //console.log(this.$route.params.id)
	            this.$http.get('http://www.htmlk.cn/vuejson/searchlast.json').then(function (res) {
	                //console.log(res.data.data);
	                for (var i = 0; i < res.data.data.length; i++) {
	                    var routeId = _this.$route.params.id;
	                    var goodId = res.data.data[i].id;
	                    if (routeId == goodId) {
	                        //  console.log(res.data.data[i])
	                        _this.detail = res.data.data[i];
	                        _this.userinfo = res.data.data[i].user;
	                    }
	                }
	            }, function (error) {
	                //console.log(error)
	            });
	        });
	    }
	
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"detail\">\n    <div class=\"detail-header\">\n        <ul>\n            <li>\n                <router-link :to=\"{path:'/index/search'}\">&lt</router-link</li>\n                    <li>专辑</li>\n                    <li>发现</li>\n        </ul>\n    </div>\n\n    <div class=\"detail-content\">\n        <div class=\"title\">\n            <div class=\"title-txt\">\n                <h2>{{detail.name}}</h2>\n                <span>笔记:{{detail.total}}</span>\n                <span>粉丝:{{detail.fans}}</span>\n            </div>\n            <div class=\"like\">\n                <p>+关注</p>\n            </div>\n        </div>\n\n        <div class=\"desc\">\n            <img v-bind:src=\"userinfo.images\" alt=\"\">\n            <p><span>{{userinfo.nickname}}</span>:{{detail.desc}}</p>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\cart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-489d9288/cart.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="cart-container">
	//         <div class="search-header">
	//             <ul>
	//                 <li><i class="iconfont">&#xe65c;</i>
	//                     <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
	//                 </li>
	//                 <li><i class="iconfont">&#xe73d;</i></li>
	//             </ul>
	//         </div>
	//
	//         <div class="cart-content">
	//
	//           <div id="app" class="app1">
	//               <div>
	//                   <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="itemslist" @reflowed="reflowed" ref="waterfall">
	//                       <!-- each component is wrapped by a waterfall slot -->
	//                       <waterfall-slot v-for="(item, index) in itemslist" :width="item.width" :height="item.height" :order="index" :key="item.index" move-class="item-move">
	//                           <div class="item" :style="item.style" :index="item.index">
	//                               <img v-bind:src="item.url" alt="">
	//                           </div>
	//                       </waterfall-slot>
	//                   </waterfall>
	//               </div>
	//           </div>
	//
	//
	//         </div>
	//     </div>
	// </template>
	// <script>
	///import {changeIndex} from "../vuex/actions";
	
	exports.default = {
	    // vuex:{
	    //   actions:{
	    //     change:changeIndex
	    //   }
	    // },
	    components: {
	        'waterfall': Waterfall.waterfall,
	        'waterfall-slot': Waterfall.waterfallSlot
	    },
	    data: function data() {
	        return {
	            align: 'center',
	            itemslist: [],
	            content: {},
	            isBusy: false
	        };
	    },
	
	
	    methods: {
	
	        addItems: function addItems() {
	            if (!this.isBusy && this.items.length < 500) {
	                this.isBusy = true;
	                this.items.push.apply(this.items, ItemFactory.get(50));
	            }
	        },
	        shuffle: function shuffle() {
	            this.items.sort(function () {
	                return Math.random() - 0.5;
	            });
	        },
	        reflowed: function reflowed() {
	            this.isBusy = false;
	        }
	    },
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;
	
	            this.$http.get('http://www.htmlk.cn/vuejson/index.json').then(function (res) {
	                _this.list = res.body.data;
	                console.log(res.body.data);
	                _this.content = res.body.data;
	                for (var i = 0; i < res.body.data.length; i++) {
	                    _this.itemslist.push(res.body.data[i].images_list[0]);
	                }
	                //  console.log(this.itemslist);
	                setTimeout(function () {
	                    var myScroll = new IScroll('#app', {});
	                }, 1500);
	            });
	        });
	    }
	
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cart-container\">\n    <div class=\"search-header\">\n        <ul>\n            <li><i class=\"iconfont\">&#xe65c;</i>\n                <input type=\"text\" name=\"name\" value=\"\" placeholder=\"搜索笔记商品和用户\" />\n            </li>\n            <li><i class=\"iconfont\">&#xe73d;</i></li>\n        </ul>\n    </div>\n\n    <div class=\"cart-content\">\n\n      <div id=\"app\" class=\"app1\">\n          <div>\n              <waterfall :align=\"align\" :line-gap=\"200\" :min-line-gap=\"100\" :max-line-gap=\"220\" :single-max-width=\"300\" :watch=\"itemslist\" @reflowed=\"reflowed\" ref=\"waterfall\">\n                  <!-- each component is wrapped by a waterfall slot -->\n                  <waterfall-slot v-for=\"(item, index) in itemslist\" :width=\"item.width\" :height=\"item.height\" :order=\"index\" :key=\"item.index\" move-class=\"item-move\">\n                      <div class=\"item\" :style=\"item.style\" :index=\"item.index\">\n                          <img v-bind:src=\"item.url\" alt=\"\">\n                      </div>\n                  </waterfall-slot>\n              </waterfall>\n          </div>\n      </div>\n\n\n    </div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-52d50516/info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(13);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      cur: 0,
	      mySwiper: null,
	      infolist: ['动态', '关于你', '通知']
	    };
	  },
	
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      // 保证 this.$el 已经插入文档
	      //this.change(3)
	      var that = this;
	      this.mySwiper = new Swiper('.swiper-container', {
	        onSlideChangeStart: function onSlideChangeStart(swiper) {
	          that.cur = swiper.activeIndex;
	          console.log(swiper.activeIndex);
	        }
	      });
	    });
	  },
	  methods: {
	    changeTab: function changeTab(index) {
	      this.cur = index;
	      this.mySwiper.slideTo(index);
	    }
	  }
	
	};
	
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="info-container">
	//   <div class="search-header">
	//     消息
	//   </div>
	//
	//   <div class="info-content">
	//     <div class="infoTab">
	//       <ul>
	//         <li v-bind:class="cur==$index?'active':''"  v-on:click="changeTab($index)" v-for='(item,$index) in infolist' >{{item}}</li>
	//       </ul>
	//     </div>
	//     <div class="info-main">
	//       <div class="swiper-container">
	//           <div class="swiper-wrapper">
	//               <div class="swiper-slide">
	//                 <div class="new">
	//                     没有最新的动态
	//                 </div>
	//               </div>
	//               <div class="swiper-slide">
	//                 <div class="new">
	//                     编辑更新
	//                 </div>
	//               </div>
	//               <div class="swiper-slide">
	//                 <div class="new">
	//                     没有通知了.....
	//                 </div>
	//               </div>
	//           </div>
	//       </div>
	//     </div>
	//   </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"info-container\">\n<div class=\"search-header\">\n  消息\n</div>\n\n<div class=\"info-content\">\n  <div class=\"infoTab\">\n    <ul>\n      <li v-bind:class=\"cur==$index?'active':''\"  v-on:click=\"changeTab($index)\" v-for='(item,$index) in infolist' >{{item}}</li>\n    </ul>\n  </div>\n  <div class=\"info-main\">\n    <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\">\n              <div class=\"new\">\n                  没有最新的动态\n              </div>\n            </div>\n            <div class=\"swiper-slide\">\n              <div class=\"new\">\n                  编辑更新\n              </div>\n            </div>\n            <div class=\"swiper-slide\">\n              <div class=\"new\">\n                  没有通知了.....\n              </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6c3c19d8/my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="my-container">
	//
	//
	//     </div>
	// </template>
	//
	// <script>
	// import Waterfall from '../libs/waterfall.vue';
	// import WaterfallSlot from '../libs/waterfall-slot.vue';
	exports.default = {
	    // el(){
	    //   return '#app'
	    // },
	
	    data: function data() {
	        return {};
	    }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"my-container\">\n\n\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\login.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5a886ab1/login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//     <div class="bg-container">
	//
	//         <div class="swiper-container">
	//             <div class="swiper-wrapper">
	//                 <div class="swiper-slide" track-by="$index" v-for="item in slide">
	//                   <p>{{item.title}}</p>
	//                   <img  v-bind:src="item.pic" alt="">
	//                 </div>
	//             </div>
	//              <div class="swiper-pagination"></div>
	//         </div>
	//
	//         <div class="bg-box">
	//           <div class="regbox"><router-link :to="{ name:'login1' ,params: { loginid: 1 }}">注册</router-link></div>
	//           <div class="loginbox"><router-link :to="{ name:'login1',params: { loginid: 2 }}">登录</router-link></div>
	//         </div>
	//
	//     </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      slide: [{
	        title: '发现世界的好生活',
	        pic: '/images/xy_walkthroughs_card1.png'
	      }, {
	        title: '和最会生活的人做朋友',
	        pic: '/images/xy_walkthroughs_card2.png'
	      }, {
	        title: '找到全世界的好东西',
	        pic: '/images/xy_walkthroughs_card3.png'
	      }]
	    };
	  },
	
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      var mySwiper = new Swiper('.swiper-container', {
	        autoplay: 5000, //可选选项，自动滑动
	        pagination: '.swiper-pagination'
	      });
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bg-container\">\n\n    <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\" track-by=\"$index\" v-for=\"item in slide\">\n              <p>{{item.title}}</p>\n              <img  v-bind:src=\"item.pic\" alt=\"\">\n            </div>\n        </div>\n         <div class=\"swiper-pagination\"></div>\n    </div>\n\n    <div class=\"bg-box\">\n      <div class=\"regbox\"><router-link :to=\"{ name:'login1' ,params: { loginid: 1 }}\">注册</router-link></div>\n      <div class=\"loginbox\"><router-link :to=\"{ name:'login1',params: { loginid: 2 }}\">登录</router-link></div>\n    </div>\n\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(31)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\login1.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-12e30560/login1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="login-box">
	//       <div class="login-header">
	//         <ul>
	//           <li><router-link :to="{ path:'/'}">返回</router-link></li>
	//           <li>{{info}}</li>
	//           <li><router-link :to="{ path:'/index/main'}">跳过</router-link></li>
	//         </ul>
	//       </div>
	//
	//       <div class="login-btn">
	//           <ul>
	//             <li><div><img src="/images/ic_bind_weixin.png" alt=""></div><p>微信</p></li>
	//             <li><div><img src="/images/ic_bind_qq.png" alt=""></div><p>QQ</p></li>
	//             <li><div><img src="/images/ic_bind_weibo.png" alt=""></div><p>微博</p></li>
	//           </ul>
	//       </div>
	//       <div class="login-content">
	//         <ul>
	//           <li><p>————</p><p>手机号快速{{info}}</p><p>————</p></li>
	//           <li><input type="tell"  placeholder="请输入手机号"/></li>
	//           <li><input type="button" name="name" value="下一步" ></li>
	//           <li><p>快速{{info}}</p><p>使用账号密码{{info}}</p></li>
	//         </ul>
	//       </div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      info: ''
	    };
	  },
	
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      //获取传过来的id
	      var id = this.$route.params.loginid;
	      if (id == 2) {
	        this.info = "登录";
	      } else {
	        this.info = "注册";
	      }
	    });
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"login-box\">\n    <div class=\"login-header\">\n      <ul>\n        <li><router-link :to=\"{ path:'/'}\">返回</router-link></li>\n        <li>{{info}}</li>\n        <li><router-link :to=\"{ path:'/index/main'}\">跳过</router-link></li>\n      </ul>\n    </div>\n\n    <div class=\"login-btn\">\n        <ul>\n          <li><div><img src=\"/images/ic_bind_weixin.png\" alt=\"\"></div><p>微信</p></li>\n          <li><div><img src=\"/images/ic_bind_qq.png\" alt=\"\"></div><p>QQ</p></li>\n          <li><div><img src=\"/images/ic_bind_weibo.png\" alt=\"\"></div><p>微博</p></li>\n        </ul>\n    </div>\n    <div class=\"login-content\">\n      <ul>\n        <li><p>————</p><p>手机号快速{{info}}</p><p>————</p></li>\n        <li><input type=\"tell\"  placeholder=\"请输入手机号\"/></li>\n        <li><input type=\"button\" name=\"name\" value=\"下一步\" ></li>\n        <li><p>快速{{info}}</p><p>使用账号密码{{info}}</p></li>\n      </ul>\n    </div>\n</div>\n";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _states = __webpack_require__(34);
	
	var _mutations = __webpack_require__(35);
	
	exports.default = new Vuex.Store({
	  state: _states.state,
	  mutations: _mutations.mutations
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = exports.state = {
	  tabIndex: 0
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mutations = exports.mutations = {
	  CHANGEINDEX: function CHANGEINDEX(state, curIndex) {
	    state.tabIndex = curIndex;
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map