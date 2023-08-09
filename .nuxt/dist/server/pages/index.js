exports.ids = [3];
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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4f2d4fb4", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("27f003a0", content, true, context)
};

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3c9277b3", content, true, context)
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/somos.c4f989e.jpg";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bf42d17e", content, true, context)
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("39a7b932", content, true, context)
};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7ed2ad84", content, true, context)
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2f48bf9c", content, true, context)
};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("302bfada", content, true, context)
};

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("08491925", content, true, context)
};

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_id_a28a54fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_id_a28a54fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_id_a28a54fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_id_a28a54fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_id_a28a54fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-a28a54fc]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-a28a54fc]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-a28a54fc]{font-size:28px;line-height:44px}}.use-text-title2[data-v-a28a54fc]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-a28a54fc]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-a28a54fc]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-a28a54fc]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-a28a54fc]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-a28a54fc]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-a28a54fc]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-a28a54fc]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-a28a54fc]{font-size:16px;line-height:24px}}.use-text-caption[data-v-a28a54fc],.use-text-paragraph[data-v-a28a54fc]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-a28a54fc]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-a28a54fc]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-a28a54fc]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-a28a54fc]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-a28a54fc]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a28a54fc]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-a28a54fc]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-a28a54fc]{display:none}}.parallax-wrap[data-v-a28a54fc]{position:absolute;width:100%;height:100%;overflow:hidden;z-index:0}[dir=ltr] .parallax-wrap[data-v-a28a54fc]{left:0}[dir=rtl] .parallax-wrap[data-v-a28a54fc]{right:0}@media(max-width:1279px){.parallax-wrap[data-v-a28a54fc]{display:none}}.inner-parallax[data-v-a28a54fc],.inner-parallax .figure[data-v-a28a54fc]{height:800px;width:100%;position:absolute;display:block}.inner-parallax .figure[data-v-a28a54fc]  .Masthead,.inner-parallax .figure[data-v-a28a54fc]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-a28a54fc]{height:800px;width:100%;display:block;position:absolute;top:0}.parallax-oval[data-v-a28a54fc]{border-radius:50%;position:absolute}[dir=ltr] .parallax-oval[data-v-a28a54fc]{left:-12%}[dir=rtl] .parallax-oval[data-v-a28a54fc]{right:-12%}@media(min-width:1920px){.parallax-oval[data-v-a28a54fc]{display:none}}.parallax-primary[data-v-a28a54fc]{width:700px;height:700px;opacity:.2}.theme--light .parallax-primary[data-v-a28a54fc]{background-color:var(--v-primarylight-base)}.theme--dark .parallax-primary[data-v-a28a54fc]{background-color:var(--v-primarydark-base)}.banner .parallax-primary[data-v-a28a54fc]{top:110px}[dir=ltr] .banner .parallax-primary[data-v-a28a54fc]{right:240px}[dir=rtl] .banner .parallax-primary[data-v-a28a54fc]{left:240px}.about[data-v-a28a54fc]{top:350px}.about .parallax-primary[data-v-a28a54fc]{top:190px}.dots-wrap[data-v-a28a54fc]{top:800px;width:600px;height:800px;position:absolute;z-index:2}.testi[data-v-a28a54fc]{top:-400px}[dir=ltr] .testi[data-v-a28a54fc]{left:50px}[dir=rtl] .testi[data-v-a28a54fc]{right:50px}.parallax-dot[data-v-a28a54fc]{width:845px;height:1099px;opacity:.2;top:90px;transform:scale(.5);position:absolute}.theme--dark .parallax-dot[data-v-a28a54fc]{fill:hsla(0,0%,100%,.5)}.theme--light .parallax-dot[data-v-a28a54fc]{fill:rgba(0,0,0,.38)}[dir=ltr] .parallax-dot[data-v-a28a54fc]{left:10px}[dir=rtl] .parallax-dot[data-v-a28a54fc]{right:10px}.v-application--is-rtl .parallax-dot[data-v-a28a54fc]{transform-origin:top right}.v-application--is-ltr .parallax-dot[data-v-a28a54fc]{transform-origin:top left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/juntasdir.2a35b5f.jpg";

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_d9550304_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_d9550304_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_d9550304_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_d9550304_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoBanner_vue_vue_type_style_index_0_id_d9550304_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-d9550304]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-d9550304]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-d9550304]{font-size:28px;line-height:44px}}.use-text-title2[data-v-d9550304]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-d9550304]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-d9550304]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-d9550304]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-d9550304]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-d9550304]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-d9550304]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-d9550304]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-d9550304]{font-size:16px;line-height:24px}}.use-text-caption[data-v-d9550304],.use-text-paragraph[data-v-d9550304]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-d9550304]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-d9550304]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-d9550304]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-d9550304]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-d9550304]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-d9550304]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-d9550304]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-d9550304]{display:none}}.hero-content[data-v-d9550304]{position:relative}.hero-content>.container[data-v-d9550304]{padding-left:0!important;padding-right:0!important;margin:0 auto}@media(min-width:1280px){.hero-content[data-v-d9550304]{margin-bottom:0}[dir=ltr] .hero-content[data-v-d9550304]{padding-left:48px}[dir=rtl] .hero-content[data-v-d9550304]{padding-right:48px}}@media(max-width:959px){.hero-content[data-v-d9550304]{margin-bottom:0;padding-bottom:8px}}.banner-text[data-v-d9550304]{position:relative;z-index:4;padding:32px 0}@media(min-width:960px){.banner-text[data-v-d9550304]{margin-top:-10vh}}@media(max-width:1279px){.banner-text[data-v-d9550304]{padding:16px 0}}@media(max-width:959px){.banner-text[data-v-d9550304]{margin-top:58vh!important;height:30vh;max-width:100%;margin:0 auto;text-align:left;color:#252b42}}.title[data-v-d9550304]{margin-bottom:24px}@media(max-width:1279px){.title[data-v-d9550304]{height:20vh}}@media(max-width:1279px){.titleMovil[data-v-d9550304]{font-family:\"Poppins\",sans-serif!important;font-weight:600;font-size:calc(2.038em + .9vw);line-height:1}}.text-helper[data-v-d9550304]{display:inline-block;margin-top:.3em}@media(min-width:1280px){[dir=ltr] .text-helper[data-v-d9550304]{padding-right:80px}[dir=rtl] .text-helper[data-v-d9550304]{padding-left:80px}}.second-row[data-v-d9550304]{display:flex;align-items:center}.subtitle[data-v-d9550304]{margin-bottom:24px}@media(min-width:1280px){[dir=ltr] .subtitle[data-v-d9550304]{padding-right:8px}[dir=rtl] .subtitle[data-v-d9550304]{padding-left:8px}}@media(max-width:1279px){.subtitle[data-v-d9550304]{margin-top:5.5vh;font-family:\"Poppins\",sans-serif!important;margin-bottom:8px;font-size:calc(.8em + .9vw)}}.consultas[data-v-d9550304]{display:flex;justify-content:center}.consultas .btnconsultas[data-v-d9550304]{margin-top:1vh;font-family:\"Poppins\",sans-serif!important;font-size:calc(.5em + .5vw);text-transform:capitalize}[dir=ltr] .icon[data-v-d9550304]{margin-left:8px}[dir=rtl] .icon[data-v-d9550304]{margin-right:8px}.v-application--is-rtl .icon[data-v-d9550304]{transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg)}.mobile-cover[data-v-d9550304]{position:relative;top:32px;left:0;margin:0;height:0;background:#000}.mobile-cover img[data-v-d9550304]{min-width:100%;height:100%;opacity:.9}@media(max-width:599px){.mobile-cover img[data-v-d9550304]{margin-bottom:100px;-o-object-fit:contain;object-fit:contain;opacity:.9;width:100vw;height:60vh}}.visual-content[data-v-d9550304]{position:relative}@media(min-width:960px){.deco-banner[data-v-d9550304]{opacity:.9}}.deco-banner .menu-bg[data-v-d9550304]{top:-670px;right:-50px}@media(max-width:959px){.deco-banner .menu-bg[data-v-d9550304]{top:-750px;background-image:url(https://via.placeholder.com/964x723/1071ef/FFFFF);background-repeat:no-repeat;background-size:cover;background-position:top;overflow:hidden}.deco-banner .menu-bg[data-v-d9550304]:after{content:\"\";position:absolute;background:rgba(0,0,0,.6);width:100%;height:100%}}.deco-banner .video-bg[data-v-d9550304]{top:-280px;opacity:.45}@media(max-width:959px){.deco-banner .video-bg[data-v-d9550304]{display:none}}.parallax-banner[data-v-d9550304]{position:absolute;top:100px;width:300px;height:400px;z-index:10;transform:scale(.4);transform-origin:top left}[dir=ltr] .parallax-banner[data-v-d9550304]{left:-40px}[dir=rtl] .parallax-banner[data-v-d9550304]{right:-40px}.parallax-banner>div[data-v-d9550304]{top:0}.parallax-banner>div[data-v-d9550304]  svg{opacity:.4;width:600px;height:600px}.video-wrap[data-v-d9550304]{position:relative;width:100vw;height:90vh;margin-top:64px}@media(max-width:959px){.video-wrap[data-v-d9550304]{display:none}}.video-figure[data-v-d9550304]{height:50vh}.inner-figure[data-v-d9550304],.video-figure[data-v-d9550304]{position:absolute;width:100vw}.inner-figure[data-v-d9550304]{height:90vh}.juntadir[data-v-d9550304]{display:block;margin-left:-10vw;margin-top:5vh;position:absolute;top:0!important;left:0!important;width:100vw!important;height:90vh!important;z-index:2!important}.search-banner[data-v-d9550304]{margin-top:24px;font-size:18px;overflow:visible}.search-banner.v-card[data-v-d9550304]:not(.v-sheet--tile):not(.v-card--shaped){border-radius:75px}@media(min-width:960px){.search-banner[data-v-d9550304]{width:700px;max-width:none}}@media(max-width:599px){.search-banner[data-v-d9550304]{margin-top:32px}}.search-banner[data-v-d9550304]  .v-text-field--filled>.v-input__control>.v-input__slot{background:none!important;min-height:0;padding:0!important}.search-banner[data-v-d9550304]  .v-text-field--filled>.v-input__control>.v-input__slot .v-input__append-inner{margin-top:4px}.search-banner[data-v-d9550304]  .v-text-field--filled>.v-input__control>.v-input__slot:after,.search-banner[data-v-d9550304]  .v-text-field--filled>.v-input__control>.v-input__slot:before{display:none}.search-banner .v-text-field--full-width .v-label--active[data-v-d9550304],.search-banner[data-v-d9550304]  .v-text-field--filled .v-label--active{transform:translateY(-18px) scale(.75);transform-origin:top left}.search[data-v-d9550304]{font-size:18px;width:100%}[data-v-d9550304] .search.v-text-field input{margin:0;border-radius:75px;padding:16px;max-height:none;height:75px}@media(min-width:960px){[data-v-d9550304] .search.v-text-field input{padding:32px 240px 24px 24px}}.theme--light[data-v-d9550304]  .search.v-text-field input:focus{box-shadow:var(--v-primarylight-base) 0 0 0 .4rem}.theme--dark[data-v-d9550304]  .search.v-text-field input:focus{box-shadow:var(--v-primarydark-base) 0 0 0 .4rem}.search[data-v-d9550304]  label{top:28px}[dir=ltr] .search[data-v-d9550304]  label{left:24px!important}[dir=rtl] .search[data-v-d9550304]  label{right:24px!important}.action[data-v-d9550304]{position:absolute;top:0;height:100%;display:flex;align-items:center;padding:16px}[dir=ltr] .action[data-v-d9550304]{right:0}[dir=rtl] .action[data-v-d9550304]{left:0}.button.v-btn:not(.v-btn--round).v-size--default[data-v-d9550304]{width:100px;height:48px;line-height:48px;align-items:center;padding:2px 28px;box-sizing:content-box}@media(max-width:599px){.button.v-btn:not(.v-btn--round).v-size--default[data-v-d9550304]{padding:2px;width:50px;background:none!important;box-shadow:none;color:var(--v-primary-base)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_b3082630_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_b3082630_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_b3082630_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_b3082630_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WithDecoration_vue_vue_type_style_index_0_id_b3082630_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-b3082630]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-b3082630]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-b3082630]{font-size:28px;line-height:44px}}.use-text-title2[data-v-b3082630]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-b3082630]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-b3082630]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-b3082630]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-b3082630]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-b3082630]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-b3082630]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-b3082630]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-b3082630]{font-size:16px;line-height:24px}}.use-text-caption[data-v-b3082630],.use-text-paragraph[data-v-b3082630]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-b3082630]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-b3082630]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-b3082630]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-b3082630]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-b3082630]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-b3082630]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-b3082630]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-b3082630]{display:none}}.title-default[data-v-b3082630]{padding:0 16px}@media(min-width:600px){.title-default[data-v-b3082630]{padding:0 32px}}.title-primary[data-v-b3082630]{font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-primary[data-v-b3082630]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-b3082630]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-b3082630]{font-size:32px;line-height:42px}}.title-secondary[data-v-b3082630]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-secondary[data-v-b3082630]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-b3082630]{font-size:32px;line-height:42px}}.title-deco[data-v-b3082630]{position:relative;display:inline-block}.title-deco h3[data-v-b3082630]{overflow:hidden;color:#fff;padding:32px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;text-transform:capitalize;font-size:48px;font-Weight:var(--font-bold)}@media(min-width:960px){.title-deco h3[data-v-b3082630]{border-radius:50%;width:300px;height:300px;background-color:var(--v-primary-base);background-attachment:fixed;background-repeat:no-repeat;background-size:contain}[dir=ltr] .title-deco h3[data-v-b3082630]{background-position:0}[dir=rtl] .title-deco h3[data-v-b3082630]{background-position:100%}.title-deco h3.bg-img[data-v-b3082630]:before{content:\"\";width:100%;height:100%;background:#3b3b3b;opacity:.38;position:absolute;top:0;left:0}.title-deco h3 span[data-v-b3082630]{position:relative}}@media(max-width:1279px){.title-deco h3[data-v-b3082630]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-b3082630]{padding-bottom:16px;background:none!important;width:auto;text-align:center}.theme--dark .title-deco h3[data-v-b3082630]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-b3082630]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-b3082630]{font-size:32px;line-height:42px}}.title-deco[data-v-b3082630]:before{content:\"\";width:400px;height:400px;top:-50px;left:-50px;border-radius:50%;border:1px solid;position:absolute}.theme--light .title-deco[data-v-b3082630]:before{border-color:var(--v-primarylight-base)}.theme--dark .title-deco[data-v-b3082630]:before{border-color:var(--v-primarydark-base)}@media(max-width:959px){.title-deco[data-v-b3082630]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-b3082630]{width:350px}}.title-icon-deco h3[data-v-b3082630]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-b3082630]{color:#fff}.theme--light .title-icon-deco h3[data-v-b3082630]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-b3082630]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-b3082630]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-b3082630]{position:relative;font-size:80px;color:transparent;-webkit-text-stroke:2px var(--v-primary-base);display:block;margin:144px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-b3082630]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-b3082630]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-b3082630]{display:none}}.title-icon-deco .capsul[data-v-b3082630]{width:900px;height:500px;border-radius:500px;position:absolute;opacity:.75;top:80px}.theme--light .title-icon-deco .capsul[data-v-b3082630]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .title-icon-deco .capsul[data-v-b3082630]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}[dir=ltr] .title-icon-deco .capsul[data-v-b3082630]{right:-300px}[dir=rtl] .title-icon-deco .capsul[data-v-b3082630]{left:-300px;transform:rotate(30deg)}[dir=ltr] .title-icon-deco .capsul[data-v-b3082630]{transform:rotate(-30deg)}.title-icon-deco .circle[data-v-b3082630]{width:700px;height:700px;top:50px;border-radius:50%;border:1px solid;position:absolute}[dir=ltr] .title-icon-deco .circle[data-v-b3082630]{right:-40px}[dir=rtl] .title-icon-deco .circle[data-v-b3082630]{left:-40px}.theme--light .title-icon-deco .circle[data-v-b3082630]{border-color:var(--v-primarylight-base)}.theme--dark .title-icon-deco .circle[data-v-b3082630]{border-color:var(--v-primarydark-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/integral2.6892e4b.png";

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_34d2339a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_34d2339a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_34d2339a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_34d2339a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_34d2339a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(86);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(238);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-34d2339a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-34d2339a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-34d2339a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-34d2339a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-34d2339a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-34d2339a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-34d2339a]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-34d2339a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-34d2339a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-34d2339a]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-34d2339a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-34d2339a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-34d2339a],.use-text-paragraph[data-v-34d2339a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-34d2339a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-34d2339a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-34d2339a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-34d2339a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-34d2339a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-34d2339a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-34d2339a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-34d2339a]{display:none}}.root[data-v-34d2339a]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");-o-object-fit:cover;object-fit:cover;max-width:none}.root blockquote[data-v-34d2339a]{max-width:none;margin:40px 32px 0;font-size:20px;font-style:italic}[dir=ltr] .root blockquote[data-v-34d2339a]{padding-left:16px}[dir=rtl] .root blockquote[data-v-34d2339a]{padding-right:16px}.theme--light .root blockquote[data-v-34d2339a]{color:rgba(0,0,0,.54)}.theme--dark .root blockquote[data-v-34d2339a]{color:hsla(0,0%,100%,.7)}.v-application--is-ltr .root blockquote[data-v-34d2339a]{border-left:4px solid}.v-application--is-rtl .root blockquote[data-v-34d2339a]{border-right:4px solid}.theme--light .root blockquote[data-v-34d2339a]{border-color:#d8d8d8}.theme--dark .root blockquote[data-v-34d2339a]{border-left-color:hsla(0,0%,100%,.2)}@media(max-width:599px){.root blockquote[data-v-34d2339a]{margin:0;font-size:20px;line-height:32px}[dir=ltr] .root blockquote[data-v-34d2339a]{padding-left:16px}[dir=rtl] .root blockquote[data-v-34d2339a]{padding-right:16px}}@media(max-width:959px){.root h4[data-v-34d2339a]{text-align:center;margin-top:-24px}}.root .title .titletext[data-v-34d2339a]{margin-left:2vw;font-weight:600;font-family:\"Poppins\",sans-serif!important;font-size:calc(1.2em + 1.3vw)!important}@media(max-width:1279px){.root .title[data-v-34d2339a]{white-space:nowrap;display:block;float:center;width:100%}.root .title .titletext[data-v-34d2339a]{margin-left:2vw;font-weight:600;font-family:\"Poppins\",sans-serif!important;font-size:calc(1.2em + 1.3vw)}}.root .quienessomosweb[data-v-34d2339a]{font-weight:600;font-family:\"Poppins\",sans-serif!important;font-size:calc(1em + 1vw)!important;text-decoration:none;color:#252b42}@media(max-width:1279px){.root .quienessomosweb[data-v-34d2339a]{display:none}}.root .subtitle[data-v-34d2339a]{font-family:\"Poppins\",sans-serif!important;font-weight:400;font-size:calc(.8em + .8vw)}@media(max-width:1279px){.root .subtitle[data-v-34d2339a]{font-family:\"Poppins\",sans-serif!important;font-weight:400;font-size:calc(.8em + .8vw)}}.root .parrafo[data-v-34d2339a]{font-family:\"Poppins\",sans-serif!important;font-weight:100;font-size:calc(.7em + .7vw)}@media(max-width:1279px){.root .parrafo[data-v-34d2339a]{font-family:\"Poppins\",sans-serif!important;font-weight:100;font-size:calc(.7em + .7vw)}}.root .curved-right[data-v-34d2339a]{position:relative;margin-top:50vh;top:0;left:0;background-color:#fff;border-radius:0 80px 0 0!important;border:1px solid #ccc}@media(min-width:960px){.root .curved-right[data-v-34d2339a]{margin-left:10vw}}.root .img2[data-v-34d2339a]{height:100vh;width:45vw;top:0;right:0;opacity:1%;z-index:0;position:absolute;-o-object-fit:cover;object-fit:cover}@media(min-width:960px){.root .img2[data-v-34d2339a]{transform:rotate(-270deg);width:20vh;height:50vw;top:-30vh;right:auto;z-index:0;position:absolute;-o-object-fit:cover;object-fit:cover;left:50vw;-webkit-transform:rotate(-270deg);-moz-transform:rotate(-270deg);-ms-transform:rotate(-270deg);-o-transform:rotate(-270deg)}}.title-default[data-v-34d2339a]{padding:0 16px}@media(min-width:600px){.title-default[data-v-34d2339a]{padding:0 32px}}.title-primary[data-v-34d2339a]{font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-primary[data-v-34d2339a]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-34d2339a]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-34d2339a]{font-size:32px;line-height:42px}}.title-secondary[data-v-34d2339a]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-secondary[data-v-34d2339a]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-34d2339a]{font-size:32px;line-height:42px}}.title-deco[data-v-34d2339a]{position:relative;display:inline-block}.title-deco h3[data-v-34d2339a]{overflow:hidden;color:#fff;padding:32px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;text-transform:capitalize;font-size:48px;font-Weight:var(--font-bold)}@media(min-width:960px){.title-deco h3[data-v-34d2339a]{border-radius:50%;width:300px;height:300px;background-color:var(--v-primary-base);background-attachment:fixed;background-repeat:no-repeat;background-size:contain}[dir=ltr] .title-deco h3[data-v-34d2339a]{background-position:0}[dir=rtl] .title-deco h3[data-v-34d2339a]{background-position:100%}.title-deco h3.bg-img[data-v-34d2339a]:before{content:\"\";width:100%;height:100%;background:#3b3b3b;opacity:.38;position:absolute;top:0;left:0}.title-deco h3 span[data-v-34d2339a]{position:relative}}@media(max-width:1279px){.title-deco h3[data-v-34d2339a]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-34d2339a]{padding-bottom:16px;background:none!important;width:auto;text-align:center}.theme--dark .title-deco h3[data-v-34d2339a]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-34d2339a]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-34d2339a]{font-size:32px;line-height:42px}}.title-deco[data-v-34d2339a]:before{content:\"\";width:400px;height:400px;top:-50px;left:-50px;border-radius:50%;border:1px solid;position:absolute}.theme--light .title-deco[data-v-34d2339a]:before{border-color:var(--v-primarylight-base)}.theme--dark .title-deco[data-v-34d2339a]:before{border-color:var(--v-primarydark-base)}@media(max-width:959px){.title-deco[data-v-34d2339a]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-34d2339a]{width:350px}}.title-icon-deco h3[data-v-34d2339a]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-34d2339a]{color:#fff}.theme--light .title-icon-deco h3[data-v-34d2339a]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-34d2339a]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-34d2339a]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-34d2339a]{position:relative;font-size:80px;color:transparent;-webkit-text-stroke:2px var(--v-primary-base);display:block;margin:144px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-34d2339a]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-34d2339a]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-34d2339a]{display:none}}.title-icon-deco .capsul[data-v-34d2339a]{width:900px;height:500px;border-radius:500px;position:absolute;opacity:.75;top:80px}.theme--light .title-icon-deco .capsul[data-v-34d2339a]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .title-icon-deco .capsul[data-v-34d2339a]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}[dir=ltr] .title-icon-deco .capsul[data-v-34d2339a]{right:-300px}[dir=rtl] .title-icon-deco .capsul[data-v-34d2339a]{left:-300px;transform:rotate(30deg)}[dir=ltr] .title-icon-deco .capsul[data-v-34d2339a]{transform:rotate(-30deg)}.title-icon-deco .circle[data-v-34d2339a]{width:700px;height:700px;top:50px;border-radius:50%;border:1px solid;position:absolute}[dir=ltr] .title-icon-deco .circle[data-v-34d2339a]{right:-40px}[dir=rtl] .title-icon-deco .circle[data-v-34d2339a]{left:-40px}.theme--light .title-icon-deco .circle[data-v-34d2339a]{border-color:var(--v-primarylight-base)}.theme--dark .title-icon-deco .circle[data-v-34d2339a]{border-color:var(--v-primarydark-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group1.6435523.png";

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group2.9fa4a61.png";

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group3.714bbd7.png";

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group4.1145ce8.png";

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_style_index_0_id_5ae04b1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_style_index_0_id_5ae04b1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_style_index_0_id_5ae04b1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_style_index_0_id_5ae04b1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Expertise_vue_vue_type_style_index_0_id_5ae04b1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-5ae04b1e]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-5ae04b1e]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-5ae04b1e]{font-size:28px;line-height:44px}}.use-text-title2[data-v-5ae04b1e]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-5ae04b1e]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-5ae04b1e]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-5ae04b1e]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-5ae04b1e]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-5ae04b1e]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-5ae04b1e]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-5ae04b1e]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-5ae04b1e]{font-size:16px;line-height:24px}}.use-text-caption[data-v-5ae04b1e],.use-text-paragraph[data-v-5ae04b1e]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-5ae04b1e]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-5ae04b1e]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-5ae04b1e]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-5ae04b1e]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-5ae04b1e]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-5ae04b1e]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-5ae04b1e]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-5ae04b1e]{display:none}}.root[data-v-5ae04b1e]{position:relative}@media(max-width:959px){.root[data-v-5ae04b1e]{text-align:center}}@media(max-width:959px){.root h4[data-v-5ae04b1e]{margin-top:-16px;margin-bottom:24px}}.background[data-v-5ae04b1e]{width:560px;height:560px;top:880px;position:absolute}[dir=ltr] .background[data-v-5ae04b1e]{left:20%}[dir=rtl] .background[data-v-5ae04b1e]{right:20%}.decoration[data-v-5ae04b1e]{width:300px;height:300px;top:10vh;right:-50px;border-radius:50%;border:2px solid;position:absolute}.theme--light .decoration[data-v-5ae04b1e]{border-color:var(--v-primarylight-base)}.theme--dark .decoration[data-v-5ae04b1e]{border-color:var(--v-primarydark-base)}.desc[data-v-5ae04b1e]{line-height:32px;padding:0 32px}@media(min-width:600px){.desc[data-v-5ae04b1e]{padding:32px}}.parallax-wrap[data-v-5ae04b1e]{position:absolute;top:0;transform-origin:top;width:1200px}[dir=ltr] .parallax-wrap[data-v-5ae04b1e]{left:0}[dir=rtl] .parallax-wrap[data-v-5ae04b1e]{right:0}.parallax-wrap span[data-v-5ae04b1e]{background-size:100%;display:block;position:relative}@media(max-width:1279px){.parallax-wrap[data-v-5ae04b1e]{display:none}}.icon-green[data-v-5ae04b1e]{top:-200px;width:320px;height:600px;background:url(/images/medical/green_buble.png) no-repeat}[dir=ltr] .icon-green[data-v-5ae04b1e]{left:-40px}[dir=rtl] .icon-green[data-v-5ae04b1e]{right:-40px}.icon-red[data-v-5ae04b1e]{width:560px;height:560px;top:-650px;background:url(/images/medical/red_buble.png) no-repeat}[dir=ltr] .icon-red[data-v-5ae04b1e]{left:40px}[dir=rtl] .icon-red[data-v-5ae04b1e]{right:40px}.icon-blue[data-v-5ae04b1e]{width:560px;height:560px;top:-1200px;background:url(/images/medical/blue_buble.png) no-repeat}[dir=ltr] .icon-blue[data-v-5ae04b1e]{left:0}[dir=rtl] .icon-blue[data-v-5ae04b1e]{right:0}.running-tag[data-v-5ae04b1e]{position:relative;height:130px;padding:0 32px}.running-tag .slick-active .tag-item[data-v-5ae04b1e]{background:var(--v-primary-base);color:#fff;border-color:var(--v-primary-base)}.tag-item[data-v-5ae04b1e]{display:inline-block;border-radius:40px;text-transform:capitalize;transition:all .3s ease-in;border:1px solid;font-size:14px;margin-bottom:17px;padding:4px}.theme--light .tag-item[data-v-5ae04b1e]{border-color:rgba(0,0,0,.12)}.theme--dark .tag-item[data-v-5ae04b1e]{border-color:hsla(0,0%,100%,.12)}[dir=ltr] .tag-item[data-v-5ae04b1e]{margin-right:8px}[dir=rtl] .tag-item[data-v-5ae04b1e]{margin-left:8px}@media(min-width:960px){.tag-item[data-v-5ae04b1e]{padding:4px 32px}}.tag-group[data-v-5ae04b1e]{display:block}.tag-group[data-v-5ae04b1e]:focus{outline:none}@media(min-width:960px){.mobilecard[data-v-5ae04b1e]{display:none}}.experttitle[data-v-5ae04b1e]{font-weight:400;font-size:calc(2em + 1.5vw)}.expertsubtitle[data-v-5ae04b1e],.experttitle[data-v-5ae04b1e]{font-family:\"Poppins\",sans-serif!important;color:#fff}.expertsubtitle[data-v-5ae04b1e]{font-weight:300;font-size:calc(1.4em + 1.5vw)}.tag-item[data-v-5ae04b1e]{width:85vw;height:75vh}@media(max-width:1279px){.webcarrousel[data-v-5ae04b1e]{display:none}}.tag-groupweb[data-v-5ae04b1e]{display:flex;justify-content:flex-start;align-items:center}.tag-itemweb[data-v-5ae04b1e]{width:45vw;height:35vh;width:auto;height:auto;margin:0 8px}.expertsubtitleweb[data-v-5ae04b1e]{font-weight:300;font-family:\"Poppins\",sans-serif!important;font-size:calc(1em + 1.5vw);color:#fff}@media(max-width:1279px){.expertsubtitleweb[data-v-5ae04b1e]{display:none}}.title-default[data-v-5ae04b1e]{padding:0 16px}@media(min-width:600px){.title-default[data-v-5ae04b1e]{padding:0 32px}}.title-primary[data-v-5ae04b1e]{font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-primary[data-v-5ae04b1e]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-5ae04b1e]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-5ae04b1e]{font-size:32px;line-height:42px}}.title-secondary[data-v-5ae04b1e]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-secondary[data-v-5ae04b1e]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-5ae04b1e]{font-size:32px;line-height:42px}}.title-deco[data-v-5ae04b1e]{position:relative;display:inline-block}.title-deco h3[data-v-5ae04b1e]{overflow:hidden;color:#fff;padding:32px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;text-transform:capitalize;font-size:48px;font-Weight:var(--font-bold)}@media(min-width:960px){.title-deco h3[data-v-5ae04b1e]{border-radius:50%;width:300px;height:300px;background-color:var(--v-primary-base);background-attachment:fixed;background-repeat:no-repeat;background-size:contain}[dir=ltr] .title-deco h3[data-v-5ae04b1e]{background-position:0}[dir=rtl] .title-deco h3[data-v-5ae04b1e]{background-position:100%}.title-deco h3.bg-img[data-v-5ae04b1e]:before{content:\"\";width:100%;height:100%;background:#3b3b3b;opacity:.38;position:absolute;top:0;left:0}.title-deco h3 span[data-v-5ae04b1e]{position:relative}}@media(max-width:1279px){.title-deco h3[data-v-5ae04b1e]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-5ae04b1e]{padding-bottom:16px;background:none!important;width:auto;text-align:center}.theme--dark .title-deco h3[data-v-5ae04b1e]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-5ae04b1e]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-5ae04b1e]{font-size:32px;line-height:42px}}.title-deco[data-v-5ae04b1e]:before{content:\"\";width:400px;height:400px;top:-50px;left:-50px;border-radius:50%;border:1px solid;position:absolute}.theme--light .title-deco[data-v-5ae04b1e]:before{border-color:var(--v-primarylight-base)}.theme--dark .title-deco[data-v-5ae04b1e]:before{border-color:var(--v-primarydark-base)}@media(max-width:959px){.title-deco[data-v-5ae04b1e]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-5ae04b1e]{width:350px}}.title-icon-deco h3[data-v-5ae04b1e]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-5ae04b1e]{color:#fff}.theme--light .title-icon-deco h3[data-v-5ae04b1e]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-5ae04b1e]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-5ae04b1e]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-5ae04b1e]{position:relative;font-size:80px;color:transparent;-webkit-text-stroke:2px var(--v-primary-base);display:block;margin:144px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-5ae04b1e]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-5ae04b1e]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-5ae04b1e]{display:none}}.title-icon-deco .capsul[data-v-5ae04b1e]{width:900px;height:500px;border-radius:500px;position:absolute;opacity:.75;top:80px}.theme--light .title-icon-deco .capsul[data-v-5ae04b1e]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .title-icon-deco .capsul[data-v-5ae04b1e]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}[dir=ltr] .title-icon-deco .capsul[data-v-5ae04b1e]{right:-300px}[dir=rtl] .title-icon-deco .capsul[data-v-5ae04b1e]{left:-300px;transform:rotate(30deg)}[dir=ltr] .title-icon-deco .capsul[data-v-5ae04b1e]{transform:rotate(-30deg)}.title-icon-deco .circle[data-v-5ae04b1e]{width:700px;height:700px;top:50px;border-radius:50%;border:1px solid;position:absolute}[dir=ltr] .title-icon-deco .circle[data-v-5ae04b1e]{right:-40px}[dir=rtl] .title-icon-deco .circle[data-v-5ae04b1e]{left:-40px}.theme--light .title-icon-deco .circle[data-v-5ae04b1e]{border-color:var(--v-primarylight-base)}.theme--dark .title-icon-deco .circle[data-v-5ae04b1e]{border-color:var(--v-primarydark-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_23269d0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_23269d0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_23269d0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_23269d0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_23269d0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-23269d0d]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-23269d0d]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-23269d0d]{font-size:28px;line-height:44px}}.use-text-title2[data-v-23269d0d]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-23269d0d]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-23269d0d]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-23269d0d]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-23269d0d]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-23269d0d]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-23269d0d]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-23269d0d]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-23269d0d]{font-size:16px;line-height:24px}}.use-text-caption[data-v-23269d0d],.use-text-paragraph[data-v-23269d0d]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-23269d0d]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-23269d0d]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-23269d0d]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-23269d0d]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-23269d0d]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-23269d0d]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-23269d0d]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-23269d0d]{display:none}}.cards[data-v-23269d0d]{align-items:center;justify-content:center;text-align:center}.default-card[data-v-23269d0d]{direction:ltr;border-radius:12px;width:240px;height:380px;margin:24px 16px}.default-card figure[data-v-23269d0d]{border-radius:0 0 50px 0;overflow:hidden;height:170px;margin-bottom:24px}.default-card figure img[data-v-23269d0d]{height:100%;min-width:100%}.default-card .text[data-v-23269d0d]{padding:0 20px}.default-card h6[data-v-23269d0d]{margin-bottom:16px}.default-card p[data-v-23269d0d]{height:70px;overflow:hidden;margin-bottom:24px}.default-card .button[data-v-23269d0d]{width:50%;height:43px;line-height:44px;position:absolute;right:0;bottom:0}[dir=ltr] .default-card .button[data-v-23269d0d]{margin-left:50%}[dir=rtl] .default-card .button[data-v-23269d0d]{margin-right:50%}.theme--light .default-card .button[data-v-23269d0d]{box-shadow:0 5px 6px -3px rgba(50,50,50,.2),0 9px 12px 1px rgba(50,50,50,.14),0 3px 16px 2px rgba(50,50,50,.12)}.theme--dark .default-card .button[data-v-23269d0d]{box-shadow:0 5px 6px -3px hsla(0,0%,50.2%,.2),0 9px 12px 1px hsla(0,0%,50.2%,.14),0 3px 16px 2px hsla(0,0%,50.2%,.12)}[dir=ltr] .default-card .button[data-v-23269d0d]{border-radius:20px 0 0 0}[dir=rtl] .default-card .button[data-v-23269d0d]{border-radius:0 20px 0 0}.button[data-v-23269d0d]{box-shadow:none}.testi-card[data-v-23269d0d]{direction:ltr;position:relative}.v-application .paper.v-card[data-v-23269d0d]{padding:48px 16px 0 0;width:300px;height:300px;border-radius:0 50% 50% 50%}.v-application .paper.v-card p[data-v-23269d0d]{padding:24px;height:100px;overflow:hidden}.rating[data-v-23269d0d]{margin-left:24px}.star-icon[data-v-23269d0d]{color:#ffc107}.theme--light .star-icon-disable[data-v-23269d0d]{color:rgba(0,0,0,.12)}.theme--dark .star-icon-disable[data-v-23269d0d]{color:hsla(0,0%,100%,.12)}.avatar[data-v-23269d0d]{border:1px solid #fff;box-sizing:content-box;border-radius:50% 50% 0 50%}.theme--dark .avatar[data-v-23269d0d]{box-shadow:0 4px 5px -2px rgba(50,50,50,.2),0 7px 10px 1px rgba(50,50,50,.14),0 2px 16px 1px rgba(50,50,50,.12)}.theme--light .avatar[data-v-23269d0d]{box-shadow:0 4px 5px -2px hsla(0,0%,50.2%,.2),0 7px 10px 1px hsla(0,0%,50.2%,.14),0 2px 16px 1px hsla(0,0%,50.2%,.12)}[dir=ltr] .avatar[data-v-23269d0d]{margin-left:8px}[dir=rtl] .avatar[data-v-23269d0d]{margin-right:8px}.person[data-v-23269d0d]{display:flex;margin-top:-80px;justify-content:flex-end;position:relative}[dir=ltr] .person[data-v-23269d0d]{margin-right:40px}[dir=rtl] .person[data-v-23269d0d]{margin-left:40px}.person .avatar[data-v-23269d0d]{width:70px;height:70px}.person .caption[data-v-23269d0d]{font-weight:var(--font-medium)}.name[data-v-23269d0d]{text-align:center}[dir=ltr] .name[data-v-23269d0d]{margin-left:16px}[dir=rtl] .name[data-v-23269d0d]{margin-right:16px}.name h6[data-v-23269d0d]{font-size:70px;font-weight:var(--font-bold)}.profile[data-v-23269d0d]{overflow:visible;margin:.5rem 0 1rem;text-align:center}.profile .divider[data-v-23269d0d]{border-bottom:none;background:none;margin:0 16px}.theme--light .profile .divider[data-v-23269d0d]{border-color:rgba(0,0,0,.12)}.theme--dark .profile .divider[data-v-23269d0d]{border-color:hsla(0,0%,100%,.12)}.person-block[data-v-23269d0d]{display:flex;align-items:center;justify-content:center;text-align:center}.person-block .photo[data-v-23269d0d]{width:80px;height:80px}.person-block .container-icon[data-v-23269d0d]{display:flex!important;justify-content:center!important;align-items:center!important;text-align:center!important}.person-block .name-card[data-v-23269d0d]{padding:8px}.person-block h4[data-v-23269d0d]{font-size:22px}.person-block p[data-v-23269d0d]{font-size:16px}.theme--light .person-block p[data-v-23269d0d]{color:rgba(0,0,0,.54)}.theme--dark .person-block p[data-v-23269d0d]{color:hsla(0,0%,100%,.7)}.action[data-v-23269d0d]{padding:16px}@media(min-width:600px){.action[data-v-23269d0d]{display:flex;justify-content:space-between;align-items:center}}.action .button[data-v-23269d0d]{height:36px!important}@media(min-width:600px){.action .button[data-v-23269d0d]{width:100px}}@media(max-width:599px){.action .button[data-v-23269d0d]{width:100%;margin-top:16px}}.property span[data-v-23269d0d]{font-size:14px;display:inline-block}.theme--light .property span[data-v-23269d0d]{color:rgba(0,0,0,.38)}.theme--dark .property span[data-v-23269d0d]{color:hsla(0,0%,100%,.5)}[dir=ltr] .property span[data-v-23269d0d]{margin-right:32px}[dir=rtl] .property span[data-v-23269d0d]{margin-left:32px}.property span i[data-v-23269d0d]{font-size:24px}.paper[data-v-23269d0d]{padding:16px 0 24px}.icon[data-v-23269d0d]{color:var(--v-primary-base)}[dir=ltr] .icon[data-v-23269d0d]{margin-right:8px}[dir=rtl] .icon[data-v-23269d0d]{margin-left:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services1.0796ea8.png";

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services2.e017ade.png";

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services3.1a8505f.png";

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services4.9056db2.png";

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AskDoctors_vue_vue_type_style_index_0_id_39ac8a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AskDoctors_vue_vue_type_style_index_0_id_39ac8a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AskDoctors_vue_vue_type_style_index_0_id_39ac8a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AskDoctors_vue_vue_type_style_index_0_id_39ac8a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AskDoctors_vue_vue_type_style_index_0_id_39ac8a0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-39ac8a0a]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-39ac8a0a]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-39ac8a0a]{font-size:28px;line-height:44px}}.use-text-title2[data-v-39ac8a0a]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-39ac8a0a]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-39ac8a0a]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-39ac8a0a]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-39ac8a0a]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-39ac8a0a]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-39ac8a0a]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-39ac8a0a]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-39ac8a0a]{font-size:16px;line-height:24px}}.use-text-caption[data-v-39ac8a0a],.use-text-paragraph[data-v-39ac8a0a]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-39ac8a0a]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-39ac8a0a]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-39ac8a0a]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-39ac8a0a]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-39ac8a0a]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-39ac8a0a]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-39ac8a0a]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-39ac8a0a]{display:none}}.root[data-v-39ac8a0a]{position:relative;z-index:10}@media(max-width:959px){.root .nav>*[data-v-39ac8a0a]{display:flex;overflow:auto}}.side-filter[data-v-39ac8a0a]{text-align:center}.side-filter .subtitle[data-v-39ac8a0a]{font-size:120%}.side-filter .nav[data-v-39ac8a0a]{background:none}@media(max-width:599px){.side-filter .nav>*[data-v-39ac8a0a]{padding:0 24px}}.side-filter .filter[data-v-39ac8a0a]{border-radius:40px;text-transform:capitalize;margin-bottom:8px;padding:4px 16px;width:90%;min-height:36px}.side-filter .filter[data-v-39ac8a0a]:before{border-radius:40px}@media(min-width:600px){.side-filter .filter[data-v-39ac8a0a]{overflow:hidden}}@media(max-width:959px){.side-filter .filter>div[data-v-39ac8a0a]{text-align:center}}.side-filter[data-v-39ac8a0a]  .v-list-item--active{background:var(--v-primarylight-base);color:var(--v-primarydark-base)}.massonry button[data-v-39ac8a0a]{width:100%}@media(min-width:960px){.massonry .consulta[data-v-39ac8a0a]{display:flex;align-items:center;justify-content:center;width:15vw}}.title-default[data-v-39ac8a0a]{padding:0 16px}@media(min-width:600px){.title-default[data-v-39ac8a0a]{padding:0 32px}}.title-primary[data-v-39ac8a0a]{font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-primary[data-v-39ac8a0a]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-39ac8a0a]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-39ac8a0a]{font-size:32px;line-height:42px}}.title-secondary[data-v-39ac8a0a]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-secondary[data-v-39ac8a0a]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-39ac8a0a]{font-size:32px;line-height:42px}}.title-deco[data-v-39ac8a0a]{position:relative;display:inline-block}.title-deco h3[data-v-39ac8a0a]{overflow:hidden;color:#fff;padding:32px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;text-transform:capitalize;font-size:48px;font-Weight:var(--font-bold)}@media(min-width:960px){.title-deco h3[data-v-39ac8a0a]{border-radius:50%;width:300px;height:300px;background-color:var(--v-primary-base);background-attachment:fixed;background-repeat:no-repeat;background-size:contain}[dir=ltr] .title-deco h3[data-v-39ac8a0a]{background-position:0}[dir=rtl] .title-deco h3[data-v-39ac8a0a]{background-position:100%}.title-deco h3.bg-img[data-v-39ac8a0a]:before{content:\"\";width:100%;height:100%;background:#3b3b3b;opacity:.38;position:absolute;top:0;left:0}.title-deco h3 span[data-v-39ac8a0a]{position:relative}}@media(max-width:1279px){.title-deco h3[data-v-39ac8a0a]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-39ac8a0a]{padding-bottom:16px;background:none!important;width:auto;text-align:center}.theme--dark .title-deco h3[data-v-39ac8a0a]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-39ac8a0a]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-39ac8a0a]{font-size:32px;line-height:42px}}.title-deco[data-v-39ac8a0a]:before{content:\"\";width:400px;height:400px;top:-50px;left:-50px;border-radius:50%;border:1px solid;position:absolute}.theme--light .title-deco[data-v-39ac8a0a]:before{border-color:var(--v-primarylight-base)}.theme--dark .title-deco[data-v-39ac8a0a]:before{border-color:var(--v-primarydark-base)}@media(max-width:959px){.title-deco[data-v-39ac8a0a]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-39ac8a0a]{width:350px}}.title-icon-deco h3[data-v-39ac8a0a]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-39ac8a0a]{color:#fff}.theme--light .title-icon-deco h3[data-v-39ac8a0a]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-39ac8a0a]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-39ac8a0a]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-39ac8a0a]{position:relative;font-size:80px;color:transparent;-webkit-text-stroke:2px var(--v-primary-base);display:block;margin:144px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-39ac8a0a]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-39ac8a0a]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-39ac8a0a]{display:none}}.title-icon-deco .capsul[data-v-39ac8a0a]{width:900px;height:500px;border-radius:500px;position:absolute;opacity:.75;top:80px}.theme--light .title-icon-deco .capsul[data-v-39ac8a0a]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .title-icon-deco .capsul[data-v-39ac8a0a]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}[dir=ltr] .title-icon-deco .capsul[data-v-39ac8a0a]{right:-300px}[dir=rtl] .title-icon-deco .capsul[data-v-39ac8a0a]{left:-300px;transform:rotate(30deg)}[dir=ltr] .title-icon-deco .capsul[data-v-39ac8a0a]{transform:rotate(-30deg)}.title-icon-deco .circle[data-v-39ac8a0a]{width:700px;height:700px;top:50px;border-radius:50%;border:1px solid;position:absolute}[dir=ltr] .title-icon-deco .circle[data-v-39ac8a0a]{right:-40px}[dir=rtl] .title-icon-deco .circle[data-v-39ac8a0a]{left:-40px}.theme--light .title-icon-deco .circle[data-v-39ac8a0a]{border-color:var(--v-primarylight-base)}.theme--dark .title-icon-deco .circle[data-v-39ac8a0a]{border-color:var(--v-primarydark-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OvalTop_vue_vue_type_style_index_0_id_14851000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OvalTop_vue_vue_type_style_index_0_id_14851000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OvalTop_vue_vue_type_style_index_0_id_14851000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OvalTop_vue_vue_type_style_index_0_id_14851000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OvalTop_vue_vue_type_style_index_0_id_14851000_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-14851000]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-14851000]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-14851000]{font-size:28px;line-height:44px}}.use-text-title2[data-v-14851000]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-14851000]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-14851000]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-14851000]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-14851000]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-14851000]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-14851000]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-14851000]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-14851000]{font-size:16px;line-height:24px}}.use-text-caption[data-v-14851000],.use-text-paragraph[data-v-14851000]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-14851000]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-14851000]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-14851000]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-14851000]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-14851000]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-14851000]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-14851000]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-14851000]{display:none}}.parallax-wrap[data-v-14851000]{position:absolute;width:100%;height:100%;overflow:hidden;z-index:0}[dir=ltr] .parallax-wrap[data-v-14851000]{left:0}[dir=rtl] .parallax-wrap[data-v-14851000]{right:0}@media(max-width:1279px){.parallax-wrap[data-v-14851000]{display:none}}.inner-parallax[data-v-14851000],.inner-parallax .figure[data-v-14851000]{height:800px;width:100%;position:absolute;display:block}.inner-parallax .figure[data-v-14851000]  .Masthead,.inner-parallax .figure[data-v-14851000]  .Masthead__image{overflow:visible}.inner-parallax .figure>div[data-v-14851000]{height:800px;width:100%;display:block;position:absolute;top:0}.parallax-oval[data-v-14851000]{border-radius:50%;position:absolute}[dir=ltr] .parallax-oval[data-v-14851000]{left:-12%}[dir=rtl] .parallax-oval[data-v-14851000]{right:-12%}@media(min-width:1920px){.parallax-oval[data-v-14851000]{display:none}}.parallax-primary[data-v-14851000]{width:700px;height:700px;opacity:.2}.theme--light .parallax-primary[data-v-14851000]{background-color:var(--v-primarylight-base)}.theme--dark .parallax-primary[data-v-14851000]{background-color:var(--v-primarydark-base)}.banner .parallax-primary[data-v-14851000]{top:110px}[dir=ltr] .banner .parallax-primary[data-v-14851000]{right:240px}[dir=rtl] .banner .parallax-primary[data-v-14851000]{left:240px}.about[data-v-14851000]{top:350px}.about .parallax-primary[data-v-14851000]{top:190px}.dots-wrap[data-v-14851000]{top:800px;width:600px;height:800px;position:absolute;z-index:2}.testi[data-v-14851000]{top:-400px}[dir=ltr] .testi[data-v-14851000]{left:50px}[dir=rtl] .testi[data-v-14851000]{right:50px}.parallax-dot[data-v-14851000]{width:845px;height:1099px;opacity:.2;top:90px;transform:scale(.5);position:absolute}.theme--dark .parallax-dot[data-v-14851000]{fill:hsla(0,0%,100%,.5)}.theme--light .parallax-dot[data-v-14851000]{fill:rgba(0,0,0,.38)}[dir=ltr] .parallax-dot[data-v-14851000]{left:10px}[dir=rtl] .parallax-dot[data-v-14851000]{right:10px}.v-application--is-rtl .parallax-dot[data-v-14851000]{transform-origin:top right}.v-application--is-ltr .parallax-dot[data-v-14851000]{transform-origin:top left}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_116318b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_116318b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_116318b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_116318b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_116318b6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-116318b6]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-116318b6]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-116318b6]{font-size:28px;line-height:44px}}.use-text-title2[data-v-116318b6]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-116318b6]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-116318b6]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-116318b6]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-116318b6]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-116318b6]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-116318b6]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-116318b6]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-116318b6]{font-size:16px;line-height:24px}}.use-text-caption[data-v-116318b6],.use-text-paragraph[data-v-116318b6]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-116318b6]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-116318b6]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-116318b6]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-116318b6]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-116318b6]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-116318b6]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-116318b6]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-116318b6]{display:none}}.main-wrap[data-v-116318b6]{position:relative;width:100%;overflow:hidden}.theme--light .main-wrap[data-v-116318b6]{color:rgba(0,0,0,.87)}.theme--dark .main-wrap[data-v-116318b6]{color:#fff;background-color:#303030}.theme--light .main-wrap[data-v-116318b6]{background-color:#fff}.space-top[data-v-116318b6]{margin-top:160px}@media(max-width:1279px){.space-top[data-v-116318b6]{margin-top:120px}}@media(max-width:599px){.space-top[data-v-116318b6]{margin-top:80px}}.space-bottom-short[data-v-116318b6]{margin-bottom:80px}.space-top-short[data-v-116318b6]{margin-top:80px}@media(min-width:960px){.container-wrap[data-v-116318b6]{margin-top:48px}}.container-wrap section[data-v-116318b6]{position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=116318b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-wrap\" data-v-116318b6>","</div>",[_c('main-header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-wrap\" data-v-116318b6>","</div>",[_c('oval-top'),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"home\" style=\"margin-left: 0;\" data-v-116318b6>","</section>",[_c('video-banner')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"about\" class=\"space-top-short\" data-v-116318b6>","</section>",[_c('about')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"ask-doctors\""+(_vm._ssrClass(null,[_vm.isMobile ? 'space-top-short' : 'space-top']))+" data-v-116318b6>","</section>",[_c('ask-doctors')],1),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"facility\""+(_vm._ssrClass(null,[_vm.isTablet ? 'space-top-short' : 'space-top']))+" style=\"background-color: #252B42;\" data-v-116318b6>","</section>",[_c('expertise')],1)],2),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('page-nav')],1),_vm._ssrNode(" "),_c('main-footer'),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdDown"}},[_c('notification')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=116318b6&scoped=true&

// EXTERNAL MODULE: ./components/Header/index.js + 58 modules
var Header = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoBanner/VideoBanner.vue?vue&type=template&id=d9550304&scoped=true&
var VideoBannervue_type_template_id_d9550304_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-content"},[_c('hidden',{attrs:{"point":"smUp"}},[_c('figure',{staticClass:"mobile-cover"},[_c('img',{attrs:{"src":_vm.cover,"alt":"cover"}})])]),_vm._ssrNode(" "),_c('v-container',{class:{ 'fixed-width': _vm.mdUp }},[_c('v-row',[(_vm.isTablet)?_c('v-col',{staticClass:"pa-6 visual-content",attrs:{"md":"6","cols":"12"}},[_c('div',{staticClass:"deco-banner"},[_c('div',{staticClass:"menu-bg"}),_vm._v(" "),_c('div',{staticClass:"video-bg"})]),_vm._v(" "),_c('img',{staticClass:"juntadir",attrs:{"src":_vm.juntasdir,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"video-wrap"},[_c('div',{staticClass:"video-figure"},[_c('div',{staticClass:"inner-figure"})])]),_vm._v(" "),_c('div',{staticClass:"parallax-banner"},[_c('dots-parallax')],1)]):_vm._e()],1)],1),_vm._ssrNode(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"banner-text"},[_c('div',{staticClass:"title"},[_c('h3',{staticClass:"text-helper use-text-title titleMovil"},[_vm._v("\n              Tu guía en "),_c('br'),_vm._v("cada trámite, "),_c('a',{staticStyle:{"color":"#2091F9"}},[_vm._v("Mejorando")]),_vm._v(" Tu "),_c('br'),_vm._v("Vida\n            ")])]),_vm._v(" "),_c('h5',{staticClass:"subtitle use-text-subtitle2"},[_vm._v("\n            Comprometidos con Tu Progreso\n\n          ")]),_vm._v(" "),_c('div',{staticClass:"consultas"},[_c('v-btn',{staticClass:"btnconsultas",staticStyle:{"background-color":"#252B42","color":"rgb(255, 255, 255)"},attrs:{"size":"small"},on:{"click":_vm.realizarLlamada}},[_vm._v("Consultas Gratis")])],1)])])],2)}
var VideoBannervue_type_template_id_d9550304_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.vue?vue&type=template&id=d9550304&scoped=true&

// CONCATENATED MODULE: ./static/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  medical: ['https://via.placeholder.com/570x562/1071ef/FFFFFF', 'https://via.placeholder.com/1280x825/99d8ff/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', 'https://via.placeholder.com/490x327/ffc999/FFFFFF', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg', 'https://via.placeholder.com/964x723/1071ef/FFFFFF'],
  urpe: ['/images/urpe/homeMovil.png', '/images/urpe/logo.png', '/images/urpe/Menu.png' // '/images/avatars/pp_boy3.svg',
  // '/images/avatars/pp_boy4.svg',
  // '/images/avatars/pp_boy5.svg',
  // 'https://via.placeholder.com/964x723/1071ef/FFFFFF'
  ],
  expertos: ['/images/urpe/Group1.png', '/images/urpe/Group2.png', '/images/urpe/Group3.png', '/images/urpe/Group4.png']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Dots.vue?vue&type=template&id=a28a54fc&scoped=true&
var Dotsvue_type_template_id_a28a54fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap dots-wrap"},[_vm._ssrNode("<div class=\"inner-parallax\" data-v-a28a54fc>","</div>",[_vm._ssrNode("<div class=\"figure\" data-v-a28a54fc>","</div>",[(_vm.loaded)?_vm._ssrNode("<div data-v-a28a54fc>","</div>",[_c('parallax',{attrs:{"speed-factor":0.3,"section-height":1000,"direction":"down"}},[_c('svg',{staticClass:"parallax-dot",attrs:{"fill":"#cccccc","width":"902px","height":"300px"}},[_c('use',{attrs:{"xlink:href":"/images/decoration/dot-deco.svg#dot"}})])])],1):_vm._e()])])])}
var Dotsvue_type_template_id_a28a54fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/Dots.vue?vue&type=template&id=a28a54fc&scoped=true&

// EXTERNAL MODULE: external "vue-parallaxy"
var external_vue_parallaxy_ = __webpack_require__(205);
var external_vue_parallaxy_default = /*#__PURE__*/__webpack_require__.n(external_vue_parallaxy_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/Dots.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Dotsvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/Dots.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_Dotsvue_type_script_lang_js_ = (Dotsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Parallax/Dots.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(251)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Parallax_Dotsvue_type_script_lang_js_,
  Dotsvue_type_template_id_a28a54fc_scoped_true_render,
  Dotsvue_type_template_id_a28a54fc_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "a28a54fc",
  "206d3e11"
  
)

/* harmony default export */ var Dots = (component.exports);
// EXTERNAL MODULE: ./static/images/urpe/juntasdir.jpg
var juntasdir = __webpack_require__(253);
var juntasdir_default = /*#__PURE__*/__webpack_require__.n(juntasdir);

// CONCATENATED MODULE: ./youtube.js
const useYoutube = {
  use: true
};
/* harmony default export */ var youtube = (useYoutube);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&
var Hiddenvue_type_template_id_057339fd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mq-layout',{attrs:{"mq":_vm.breakpoints}},[_vm._t("default")],2)}
var Hiddenvue_type_template_id_057339fd_staticRenderFns = []


// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Hiddenvue_type_script_lang_js_ = ({
  props: {
    point: {
      type: String,
      required: true
    }
  },
  computed: {
    breakpoints() {
      switch (this.point) {
        case 'smUp':
          return ['xsDown'];

        case 'mdUp':
          return ['xsDown', 'smDown'];

        case 'lgUp':
          return ['xsDown', 'smDown', 'mdDown'];

        case 'xsDown':
          return ['smDown', 'mdDown', 'lgDown', 'xl'];

        case 'smDown':
          return ['mdDown', 'lgDown', 'xl'];

        case 'mdDown':
          return ['lgDown', 'xl'];

        case 'lgDown':
          return 'xl';

        default:
          return 'xl';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=script&lang=js&
 /* harmony default export */ var Hidden_Hiddenvue_type_script_lang_js_ = (Hiddenvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Hidden/Hidden.vue





/* normalize component */

var Hidden_component = Object(componentNormalizer["a" /* default */])(
  Hidden_Hiddenvue_type_script_lang_js_,
  Hiddenvue_type_template_id_057339fd_render,
  Hiddenvue_type_template_id_057339fd_staticRenderFns,
  false,
  null,
  null,
  "5ab3c03e"
  
)

/* harmony default export */ var Hidden = (Hidden_component.exports);
// CONCATENATED MODULE: ./components/Hidden/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoBanner/VideoBanner.vue?vue&type=script&lang=js&
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





/* harmony default export */ var VideoBannervue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden,
    DotsParallax: Dots
  },

  data() {
    // videoId: 'sbef4EWb4js',
    return {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8009'
      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: images_imgAPI.urpe[0],
      juntasdir: juntasdir_default.a,
      nroTlf: '+1 800-643-6740'
    };
  },

  methods: {
    playing() {
      this.play = true;
      this.playCtrl = true;
    },

    ended() {
      this.player.playVideo();
    },

    togglePause() {
      this.playCtrl = !this.playCtrl;

      if (this.playCtrl) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
    },

    realizarLlamada() {
      window.location.href = 'tel:' + this.nroTlf;
    }

  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },

    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    },

    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    },

    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp;
      return smUp.indexOf(this.$mq) > -1;
    },

    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown;
      return mdDown.indexOf(this.$mq) > -1;
    },

    isMobile2() {
      const xsDown = this.$store.state.breakpoints.xsDown;
      return xsDown.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var VideoBanner_VideoBannervue_type_script_lang_js_ = (VideoBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(224);

// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.vue



function VideoBanner_injectStyles (context) {
  
  var style0 = __webpack_require__(254)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var VideoBanner_component = Object(componentNormalizer["a" /* default */])(
  VideoBanner_VideoBannervue_type_script_lang_js_,
  VideoBannervue_type_template_id_d9550304_scoped_true_render,
  VideoBannervue_type_template_id_d9550304_scoped_true_staticRenderFns,
  false,
  VideoBanner_injectStyles,
  "d9550304",
  "bb6d11d8"
  
)

/* harmony default export */ var VideoBanner = (VideoBanner_component.exports);

/* vuetify-loader */





installComponents_default()(VideoBanner_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/VideoBanner/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=template&id=34d2339a&scoped=true&
var Aboutvue_type_template_id_34d2339a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"root"},[_c('v-container',{staticClass:"fixed-width",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('div',{staticClass:"containerdiv"},[_c('img',{staticClass:"img2",attrs:{"src":_vm.integral,"alt":""}}),_vm._v(" "),_c('v-card',{staticClass:"curved-right"},[_c('v-card-text',[_c('title',{staticClass:"title titletext"},[_vm._v("\n          Quienes somos?\n          ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',{staticClass:"title-default subtitle"},[_c('a',{staticClass:"quienessomosweb",attrs:{"href":""}},[_vm._v("Quienes somos? "),_c('br'),_vm._v(" "),_c('br')]),_vm._v(" "),_c('a',{staticClass:"text"},[_vm._v("\"Urpe Integral Services")]),_vm._v(" es como tu amigo confiable que te guía a través de los trámites\"\n        ")]),_vm._v(" "),_c('p',{staticClass:"title-default use-text-subtitle parrafo"},[_vm._v("\n           \"Desde inmigración, impuestos, reparación de crédito y bienes raíces en los Estados Unidos.\n          Nos adaptamos a tus necesidades, ofreciéndote consejos y soluciones personalizadas para ayudarte a alcanzar tu estabilidad.\n          En Urpe, estamos a tu lado en cada paso del camino, haciendo tu vida más fácil y próspera en tu nuevo hogar.\"\n        ")])])],1)],1)])],1)],1)],1)}
var Aboutvue_type_template_id_34d2339a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/About/About.vue?vue&type=template&id=34d2339a&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/WithDecoration.vue?vue&type=template&id=b3082630&scoped=true&
var WithDecorationvue_type_template_id_b3082630_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"title-deco\" data-v-b3082630><h3"+(_vm._ssrClass(null,{ 'bg-img': _vm.bg }))+(_vm._ssrStyle(null,{ 'background-image': 'url(' + _vm.bg + ')'}, null))+" data-v-b3082630><span data-v-b3082630>"+_vm._ssrEscape("\n        "+_vm._s(_vm.text)+"\n      ")+"</span></h3></div>")])}
var WithDecorationvue_type_template_id_b3082630_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Title/WithDecoration.vue?vue&type=template&id=b3082630&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/WithDecoration.vue?vue&type=script&lang=js&
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
/* harmony default export */ var WithDecorationvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/Title/WithDecoration.vue?vue&type=script&lang=js&
 /* harmony default export */ var Title_WithDecorationvue_type_script_lang_js_ = (WithDecorationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Title/WithDecoration.vue



function WithDecoration_injectStyles (context) {
  
  var style0 = __webpack_require__(256)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WithDecoration_component = Object(componentNormalizer["a" /* default */])(
  Title_WithDecorationvue_type_script_lang_js_,
  WithDecorationvue_type_template_id_b3082630_scoped_true_render,
  WithDecorationvue_type_template_id_b3082630_scoped_true_staticRenderFns,
  false,
  WithDecoration_injectStyles,
  "b3082630",
  "027cf728"
  
)

/* harmony default export */ var WithDecoration = (WithDecoration_component.exports);
// EXTERNAL MODULE: ./static/images/urpe/somos.jpg
var somos = __webpack_require__(238);
var somos_default = /*#__PURE__*/__webpack_require__.n(somos);

// EXTERNAL MODULE: ./static/images/urpe/integral2.png
var integral2 = __webpack_require__(258);
var integral2_default = /*#__PURE__*/__webpack_require__.n(integral2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About/About.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  data() {
    return {
      photo: images_imgAPI.medical[1],
      somos: somos_default.a,
      integral: integral2_default.a
    };
  },

  components: {
    TitleDeco: WithDecoration
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/About/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var About_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(51);

// CONCATENATED MODULE: ./components/About/About.vue



function About_injectStyles (context) {
  
  var style0 = __webpack_require__(259)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  About_Aboutvue_type_script_lang_js_,
  Aboutvue_type_template_id_34d2339a_scoped_true_render,
  Aboutvue_type_template_id_34d2339a_scoped_true_staticRenderFns,
  false,
  About_injectStyles,
  "34d2339a",
  "11be4040"
  
)

/* harmony default export */ var About = (About_component.exports);

/* vuetify-loader */






installComponents_default()(About_component, {VCard: VCard["a" /* default */],VCardText: components_VCard["a" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/About/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Expertise/Expertise.vue?vue&type=template&id=5ae04b1e&scoped=true&
var Expertisevue_type_template_id_5ae04b1e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[_c('div',{staticClass:"root"},[_c('v-container',[_c('v-row',{staticClass:"spacing8"},[(_vm.isDesktop)?_c('v-col',{attrs:{"cols":"12","lg":"1"}}):_vm._e(),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"5"}},[_c('div',{class:{ 'text-center': !_vm.isDesktop}},[_c('div',{staticClass:"title-deco"},[(_vm.isDesktop)?_c('div',{staticClass:"decoration"}):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"experttitle"},[_vm._v("Expertos")]),_vm._v(" "),_c('h4',{staticClass:"title-default use-text-subtitle expertsubtitleweb"},[_vm._v("\n                 Esperando tu llamado\n              ")])])])]),_vm._v(" "),_c('v-col',{staticClass:"mobilecard",attrs:{"cols":"12","lg":"6","md":"7"}},[_c('h4',{staticClass:"title-default use-text-subtitle expertsubtitle"},[_vm._v("\n           Esperando tu llamado\n          ")]),_vm._v(" "),_c('div',{staticClass:"tag-group"},_vm._l((_vm.expertosArray),function(item,index){return _c('img',{key:index,staticClass:"tag-item",attrs:{"src":item,"alt":"Experto Image"},on:{"click":_vm.realizarLlamada}})}),0)]),_vm._v(" "),_c('v-col',{staticClass:"webcarrousel",attrs:{"cols":"12","lg":"6","md":"7"}},[_c('div',{staticClass:"tag-groupweb"},[_c('slick',{attrs:{"options":_vm.slickOptions}},_vm._l((_vm.expertosArray),function(item,index){return _c('div',{key:index,staticClass:"tag-itemweb"},[_c('img',{attrs:{"src":item,"alt":"Experto Image"}})])}),0)],1)])],1)],1)],1)])}
var Expertisevue_type_template_id_5ae04b1e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Expertise/Expertise.vue?vue&type=template&id=5ae04b1e&scoped=true&

// EXTERNAL MODULE: external "vue-kinesis"
var external_vue_kinesis_ = __webpack_require__(206);

// EXTERNAL MODULE: ./static/images/urpe/Group1.png
var Group1 = __webpack_require__(261);
var Group1_default = /*#__PURE__*/__webpack_require__.n(Group1);

// EXTERNAL MODULE: ./static/images/urpe/Group2.png
var Group2 = __webpack_require__(262);
var Group2_default = /*#__PURE__*/__webpack_require__.n(Group2);

// EXTERNAL MODULE: ./static/images/urpe/Group3.png
var Group3 = __webpack_require__(263);
var Group3_default = /*#__PURE__*/__webpack_require__.n(Group3);

// EXTERNAL MODULE: ./static/images/urpe/Group4.png
var Group4 = __webpack_require__(264);
var Group4_default = /*#__PURE__*/__webpack_require__.n(Group4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Expertise/Expertise.vue?vue&type=script&lang=js&
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








/* harmony default export */ var Expertisevue_type_script_lang_js_ = ({
  components: {
    TitleDeco: WithDecoration,
    Hidden: Hidden,
    KinesisContainer: external_vue_kinesis_["KinesisContainer"],
    KinesisElement: external_vue_kinesis_["KinesisElement"],
    Slick: () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 84, 7))
  },

  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        imgAPI: images_imgAPI,
        vertical: true
      },
      expertosArray: [Group1_default.a, Group2_default.a, Group3_default.a, Group4_default.a],
      nroTlf: '+1 800-643-6740'
    };
  },

  methods: {
    realizarLlamada() {
      window.location.href = 'tel:' + this.nroTlf;
    }

  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp;
      return lgUp.indexOf(this.$mq) > -1;
    }

  }
});
// CONCATENATED MODULE: ./components/Expertise/Expertise.vue?vue&type=script&lang=js&
 /* harmony default export */ var Expertise_Expertisevue_type_script_lang_js_ = (Expertisevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Expertise/Expertise.vue



function Expertise_injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Expertise_component = Object(componentNormalizer["a" /* default */])(
  Expertise_Expertisevue_type_script_lang_js_,
  Expertisevue_type_template_id_5ae04b1e_scoped_true_render,
  Expertisevue_type_template_id_5ae04b1e_scoped_true_staticRenderFns,
  false,
  Expertise_injectStyles,
  "5ae04b1e",
  "13f6e968"
  
)

/* harmony default export */ var Expertise = (Expertise_component.exports);

/* vuetify-loader */




installComponents_default()(Expertise_component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/Expertise/index.js

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AskDoctors/AskDoctors.vue?vue&type=template&id=39ac8a0a&scoped=true&
var AskDoctorsvue_type_template_id_39ac8a0a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fragment',[_c('div',{staticClass:"root"},[_c('div',{staticClass:"deco"}),_vm._v(" "),_c('v-container',{class:{ 'fixed-width': _vm.mdUp }},[_c('v-row',{staticClass:"spacing6",attrs:{"justify":"center"}},[_c('v-col',{staticClass:"pa-0",attrs:{"cols":"12","sm":"9","md":"2"}},[_c('div',{staticClass:"side-filter"},[_c('h4',{staticClass:"title-primary"},[_vm._v("\n              SERVICIOS\n\n            ")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("\n              De Inmigracion a Inversion\n            ")])])]),_vm._v(" "),_c('v-col',{staticClass:"pa-6 py-0",attrs:{"cols":"12","lg":"8","md":"10"}},[_c('div',{staticClass:"massonry"},[_c('v-row',_vm._l((_vm.doctorsData),function(item,index){return _c('v-col',{key:index,staticClass:"px-lg-8 px-3 py-3",attrs:{"cols":"12","sm":"6"}},[_c('div',[_c('profile-card',{attrs:{"avatar":item.avatar,"title":item.title,"description":item.description}})],1)])}),1),_vm._v(" "),_c('v-col',[_c('v-btn',{staticClass:"consulta",staticStyle:{"text-transform":"capitalize"},attrs:{"color":"primary"},on:{"click":_vm.realizarLlamada}},[_vm._v("\n                Consulta Gratis\n              ")])],1)],1)])],1)],1)],1)])}
var AskDoctorsvue_type_template_id_39ac8a0a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/AskDoctors/AskDoctors.vue?vue&type=template&id=39ac8a0a&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Profile.vue?vue&type=template&id=23269d0d&scoped=true&
var Profilevue_type_template_id_23269d0d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cards"},[_vm._ssrNode("<div class=\"container-icon\" data-v-23269d0d><img"+(_vm._ssrAttr("src",_vm.avatar))+" class=\"photo\" data-v-23269d0d></div> "),_c('v-card',{staticClass:"profile",attrs:{"elevation":"0"}},[_c('div',{staticClass:"person-block"},[_c('div',{staticClass:"name-card"},[_c('h4',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.description))])])]),_vm._v(" "),_c('div',{staticClass:"action"})])],2)}
var Profilevue_type_template_id_23269d0d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards/Profile.vue?vue&type=template&id=23269d0d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards/Profile.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Profilevue_type_script_lang_js_ = ({
  props: {
    avatar: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    } // rating: {
    //   type: Number,
    //   required: true
    // },
    // exp: {
    //   type: Number,
    //   required: true
    // }

  }
});
// CONCATENATED MODULE: ./components/Cards/Profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cards_Profilevue_type_script_lang_js_ = (Profilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards/Profile.vue



function Profile_injectStyles (context) {
  
  var style0 = __webpack_require__(267)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Profile_component = Object(componentNormalizer["a" /* default */])(
  Cards_Profilevue_type_script_lang_js_,
  Profilevue_type_template_id_23269d0d_scoped_true_render,
  Profilevue_type_template_id_23269d0d_scoped_true_staticRenderFns,
  false,
  Profile_injectStyles,
  "23269d0d",
  "c7b92fdc"
  
)

/* harmony default export */ var Profile = (Profile_component.exports);

/* vuetify-loader */


installComponents_default()(Profile_component, {VCard: VCard["a" /* default */]})

// EXTERNAL MODULE: ./static/images/urpe/services1.png
var services1 = __webpack_require__(269);
var services1_default = /*#__PURE__*/__webpack_require__.n(services1);

// EXTERNAL MODULE: ./static/images/urpe/services2.png
var services2 = __webpack_require__(270);
var services2_default = /*#__PURE__*/__webpack_require__.n(services2);

// EXTERNAL MODULE: ./static/images/urpe/services3.png
var services3 = __webpack_require__(271);
var services3_default = /*#__PURE__*/__webpack_require__.n(services3);

// EXTERNAL MODULE: ./static/images/urpe/services4.png
var services4 = __webpack_require__(272);
var services4_default = /*#__PURE__*/__webpack_require__.n(services4);

// EXTERNAL MODULE: ./static/images/urpe/logo.png
var logo = __webpack_require__(62);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AskDoctors/AskDoctors.vue?vue&type=script&lang=js&
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






/* harmony default export */ var AskDoctorsvue_type_script_lang_js_ = ({
  components: {
    ProfileCard: Profile
  },

  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      logo: logo_default.a,
      service1: services1_default.a,
      service2: services2_default.a,
      service3: services3_default.a,
      service4: services4_default.a,
      nroTlf: '+1 800-643-6740',
      // categories: [
      //   'all',
      //   'Orthopedic',
      //   'Nutritionist',
      //   'Pediatric',
      //   'Anaesthestic'
      // ],
      doctorsData: [{
        avatar: services1_default.a,
        title: 'Tramites de inmigracion ',
        description: 'Nos encargamos de todo tu proceso de Visado y/o Asilo.'
      }, {
        avatar: services2_default.a,
        title: 'Asesoría de impuestos',
        description: 'Simplificando tus Impuestos, maximizando tus devoluciones.'
      }, {
        avatar: services3_default.a,
        title: 'Reparación de Crédito',
        description: 'Reconstruimos tu Crédito, mejorando y abriendo puertas a nuevas oportunidades.'
      }, {
        avatar: services4_default.a,
        title: 'Real Estate (Bienes Raíces)',
        description: 'Asesoría total en la compra y venta de bienes raíces.'
      }]
    };
  },

  methods: {
    realizarLlamada() {
      window.location.href = 'tel:' + this.nroTlf;
    }

  },

  mounted() {
    this.loaded = true;
  },

  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl';
    }

  }
});
// CONCATENATED MODULE: ./components/AskDoctors/AskDoctors.vue?vue&type=script&lang=js&
 /* harmony default export */ var AskDoctors_AskDoctorsvue_type_script_lang_js_ = (AskDoctorsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/AskDoctors/AskDoctors.vue



function AskDoctors_injectStyles (context) {
  
  var style0 = __webpack_require__(273)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AskDoctors_component = Object(componentNormalizer["a" /* default */])(
  AskDoctors_AskDoctorsvue_type_script_lang_js_,
  AskDoctorsvue_type_template_id_39ac8a0a_scoped_true_render,
  AskDoctorsvue_type_template_id_39ac8a0a_scoped_true_staticRenderFns,
  false,
  AskDoctors_injectStyles,
  "39ac8a0a",
  "365ff09e"
  
)

/* harmony default export */ var AskDoctors = (AskDoctors_component.exports);

/* vuetify-loader */





installComponents_default()(AskDoctors_component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})

// CONCATENATED MODULE: ./components/AskDoctors/index.js

// EXTERNAL MODULE: ./components/Footer/index.js + 10 modules
var Footer = __webpack_require__(61);

// EXTERNAL MODULE: ./components/Notification/index.js + 5 modules
var Notification = __webpack_require__(231);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/OvalTop.vue?vue&type=template&id=14851000&scoped=true&
var OvalTopvue_type_template_id_14851000_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"parallax-wrap"},[_vm._ssrNode("<div class=\"inner-parallax about\" data-v-14851000>","</div>",[_vm._ssrNode("<div class=\"figure\" data-v-14851000>","</div>",[(_vm.loaded)?_vm._ssrNode("<div data-v-14851000>","</div>",[_c('parallax',{attrs:{"speed-factor":0.3,"section-height":1000,"direction":"down"}},[_c('div',{staticClass:"parallax-oval parallax-primary"})])],1):_vm._e()])])])}
var OvalTopvue_type_template_id_14851000_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Parallax/OvalTop.vue?vue&type=template&id=14851000&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Parallax/OvalTop.vue?vue&type=script&lang=js&
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

/* harmony default export */ var OvalTopvue_type_script_lang_js_ = ({
  components: {
    Parallax: external_vue_parallaxy_default.a
  },

  data() {
    return {
      loaded: false
    };
  },

  mounted() {
    this.loaded = true;
  }

});
// CONCATENATED MODULE: ./components/Parallax/OvalTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var Parallax_OvalTopvue_type_script_lang_js_ = (OvalTopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Parallax/OvalTop.vue



function OvalTop_injectStyles (context) {
  
  var style0 = __webpack_require__(275)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OvalTop_component = Object(componentNormalizer["a" /* default */])(
  Parallax_OvalTopvue_type_script_lang_js_,
  OvalTopvue_type_template_id_14851000_scoped_true_render,
  OvalTopvue_type_template_id_14851000_scoped_true_staticRenderFns,
  false,
  OvalTop_injectStyles,
  "14851000",
  "dbbf83a8"
  
)

/* harmony default export */ var OvalTop = (OvalTop_component.exports);
// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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


 // import Facilities from '~/components/Facilities'

 // import Testimonials from '~/components/Testimonials'

 // import CallAction from '~/components/CallAction'
// import Clinics from '~/components/Clinics'


 // import PageNav from '~/components/PageNav'

 // import DotsParallax from '~/components/Parallax/Dots'



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    'main-header': Header["a" /* default */],
    // DotsParallax,
    OvalTop: OvalTop,
    VideoBanner: VideoBanner,
    About: About,
    // Facilities,
    Expertise: Expertise,
    // Testimonials,
    AskDoctors: AskDoctors,
    // CallAction,
    // Clinics,
    // PageNav,
    Hidden: Hidden,
    Notification: Notification["a" /* default */],
    'main-footer': Footer["a" /* default */]
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'; // eslint-disable-line
    },

    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown';
    }

  },

  head() {
    return {
      title: brand["a" /* default */].medical.name + ' - Home Page'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(277)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "116318b6",
  "6e420782"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map