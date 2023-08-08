exports.ids = [1];
exports.modules = {

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("148ef55b", content, true, context)
};

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_360bd3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_360bd3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_360bd3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_360bd3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_360bd3e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-360bd3e2]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-360bd3e2]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-360bd3e2]{font-size:28px;line-height:44px}}.use-text-title2[data-v-360bd3e2]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-360bd3e2]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-360bd3e2]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-360bd3e2]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-360bd3e2]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-360bd3e2]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-360bd3e2]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-360bd3e2]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-360bd3e2]{font-size:16px;line-height:24px}}.use-text-caption[data-v-360bd3e2],.use-text-paragraph[data-v-360bd3e2]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-360bd3e2]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-360bd3e2]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-360bd3e2]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-360bd3e2]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-360bd3e2]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-360bd3e2]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-360bd3e2]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-360bd3e2]{display:none}}.notification[data-v-360bd3e2]{width:95%;margin:0 auto}@media(min-width:1280px){.notification[data-v-360bd3e2]{width:80%}}.notification[data-v-360bd3e2]  .v-snack__wrapper{width:100%;margin-bottom:16px;max-width:none;font-size:16px;color:#fff;background:#424242}@media(min-width:600px){.notification[data-v-360bd3e2]  .v-snack__wrapper{padding:4px 16px}}.notification[data-v-360bd3e2]  .v-snack__wrapper>div:first-child{display:flex;align-items:center}@media(min-width:600px){.notification[data-v-360bd3e2]  .v-snack__wrapper>div:first-child .action{flex:1}[dir=ltr] .notification[data-v-360bd3e2]  .v-snack__wrapper>div:first-child .action{margin-right:16px}[dir=rtl] .notification[data-v-360bd3e2]  .v-snack__wrapper>div:first-child .action{margin-left:16px}}@media(max-width:599px){.notification[data-v-360bd3e2]  .v-snack__wrapper>div:first-child .action{text-align:center}}.notification .button.v-btn[data-v-360bd3e2]{width:100%;box-shadow:none}@media(min-width:600px){.notification .button.v-btn[data-v-360bd3e2]{width:150px}}@media(max-width:599px){.action[data-v-360bd3e2]{width:100%;padding:0;margin:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=template&id=360bd3e2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{staticClass:"notification",attrs:{"timeout":-1},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n    "+_vm._s(_vm.$t('common.notif_msg'))+"\n  ")]),_vm._v(" "),_c('v-btn',{staticClass:"button",attrs:{"outlined":"","color":"white"},on:{"click":function($event){_vm.snackbar = false}}},[_vm._v("\n    "+_vm._s(_vm.$t('common.accept'))+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=template&id=360bd3e2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification/Notification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  data() {
    return {
      snackbar: true
    };
  }

});
// CONCATENATED MODULE: ./components/Notification/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notification_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(222);

// CONCATENATED MODULE: ./components/Notification/Notification.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(229)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Notification_Notificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "360bd3e2",
  "11e38544"
  
)

/* harmony default export */ var Notification = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})

// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7638a3fd", content, true, context)
};

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_1f3fd5de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_1f3fd5de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_1f3fd5de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_1f3fd5de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_blank_page_vue_vue_type_style_index_0_id_1f3fd5de_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-1f3fd5de]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-1f3fd5de]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-1f3fd5de]{font-size:28px;line-height:44px}}.use-text-title2[data-v-1f3fd5de]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-1f3fd5de]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-1f3fd5de]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-1f3fd5de]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-1f3fd5de]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-1f3fd5de]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-1f3fd5de]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-1f3fd5de]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-1f3fd5de]{font-size:16px;line-height:24px}}.use-text-caption[data-v-1f3fd5de],.use-text-paragraph[data-v-1f3fd5de]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-1f3fd5de]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-1f3fd5de]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-1f3fd5de]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-1f3fd5de]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-1f3fd5de]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-1f3fd5de]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-1f3fd5de]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-1f3fd5de]{display:none}}.main-wrap[data-v-1f3fd5de]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-1f3fd5de]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-1f3fd5de]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-1f3fd5de]{background-color:#fff}.space-bottom[data-v-1f3fd5de]{margin-bottom:160px}.space-top[data-v-1f3fd5de]{margin-top:160px}.container-wrap[data-v-1f3fd5de]{margin-top:80px;padding:32px}.container-wrap>section[data-v-1f3fd5de]{position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=template&id=1f3fd5de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section id=\"home\" data-v-1f3fd5de></section> "),_vm._ssrNode("<div class=\"main-wrap\" data-v-1f3fd5de>","</div>",[_c('main-header',{attrs:{"invert":""}}),_vm._ssrNode(" <div class=\"container-wrap\" data-v-1f3fd5de><section class=\"space-top space-bottom\" data-v-1f3fd5de><h2 class=\"display-3 text-center mb-4\" data-v-1f3fd5de>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('common.title'))+"\n        ")+"</h2> <h4 class=\"display-1 text-center\" data-v-1f3fd5de>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('common.subtitle'))+"\n        ")+"</h4></section></div> "),_vm._ssrNode("<section class=\"spaceTop\" data-v-1f3fd5de>","</section>",[_c('main-footer')],1),_vm._ssrNode(" "),_c('notification')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=template&id=1f3fd5de&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 58 modules
var Header = __webpack_require__(60);

// EXTERNAL MODULE: ./components/Footer/index.js + 10 modules
var Footer = __webpack_require__(61);

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(231);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blank-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var blank_pagevue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    Notification: Notification["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },

  head() {
    return {
      title: brand["a" /* default */].medical.name + ' - Blank Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/blank-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blank_pagevue_type_script_lang_js_ = (blank_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/blank-page.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(245)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blank_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f3fd5de",
  "dd282030"
  
)

/* harmony default export */ var blank_page = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blank-page.js.map