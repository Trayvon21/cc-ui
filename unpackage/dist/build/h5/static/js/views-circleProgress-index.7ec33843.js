(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-circleProgress-index"],{"058c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-circle-progress"},[n("v-uni-view",{staticClass:"cc-circle-progress-box",style:{width:t.width+"px",height:t.width+"px"}},[n("v-uni-canvas",{staticClass:"cc-circle-progress-bg",style:{width:t.width+"px",height:t.width+"px"},attrs:{"canvas-id":"canvasProgressbg-"+t._uid}}),n("v-uni-canvas",{staticClass:"cc-circle-progress-canvas",style:{width:t.width+"px",height:t.width+"px"},attrs:{"canvas-id":"canvasProgress-"+t._uid}}),n("v-uni-view",{staticClass:"cc-circle-progress-text"},[t.$slots.default?t._t("default"):n("v-uni-view",[t._v(t._s(t.percent))])],2)],1)],1)},r=[]},"0816":function(t,e,n){var i=n("fd09");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("62cebe9a",i,!0,{sourceMap:!1,shadowMode:!1})},"1e53":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cc-circleProgress",components:{},props:{percent:{type:[Number,String],default:0},width:{type:[Number,String],default:100},layerColor:{type:String,default:"#fff"},fillColor:{type:String,default:"#0081ff"},strokeWidth:{type:[Number,String],default:4}},data:function(){return{id:""}},methods:{drawProgressbg:function(){var t=wx.createCanvasContext("canvasProgressbg-".concat(this._uid),this);t.setLineWidth(Number(this.strokeWidth)),t.setStrokeStyle(this.layerColor),t.setLineCap("round"),t.beginPath(),t.arc(Number(this.width)/2,Number(this.width)/2,Number(this.width)/2-10,0,2*Math.PI,!1),t.stroke(),t.draw()},drawCircle:function(t){var e=wx.createCanvasContext("canvasProgress-".concat(this._uid),this),n=e.createLinearGradient(200,100,100,200);n.addColorStop("0",this.fillColor),n.addColorStop("0.5",this.fillColor),n.addColorStop("1.0",this.fillColor),e.setLineWidth(Number(this.strokeWidth)),e.setStrokeStyle(n),e.setLineCap("round"),e.beginPath(),e.arc(Number(this.width)/2,Number(this.width)/2,Number(this.width)/2-10,-Math.PI/2,t*Math.PI-Math.PI/2,!1),e.stroke(),e.draw()}},mounted:function(){this.drawProgressbg(),this.drawCircle(Number(this.percent)/50)},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=i},2086:function(t,e,n){var i=n("7085");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("75480ed2",i,!0,{sourceMap:!1,shadowMode:!1})},5806:function(t,e,n){"use strict";n.r(e);var i=n("1e53"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=s.a},"66d2":function(t,e,n){"use strict";var i=n("0816"),s=n.n(i);s.a},7085:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-circle-progress-box[data-v-44c9291c]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cc-circle-progress-bg[data-v-44c9291c]{position:absolute}.cc-circle-progress-text[data-v-44c9291c]{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}',""]),t.exports=e},7392:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={ccCircleProgress:n("fa81").default},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"contanier"},[n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-circleProgress",{attrs:{percent:50}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("自定义颜色")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-circleProgress",{attrs:{fillColor:"#39b54a",percent:60}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("自定义宽度")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-circleProgress",{attrs:{strokeWidth:"10",percent:70}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("自定义内容")]),n("v-uni-view",{staticClass:"demo-item",staticStyle:{"font-size":"12px"}},[n("cc-circleProgress",{attrs:{percent:80}},[n("v-uni-view",[t._v("营业额")])],1)],1)],1)],1)},r=[]},"76ce":function(t,e,n){"use strict";var i=n("2086"),s=n.n(i);s.a},"855e":function(t,e,n){"use strict";n.r(e);var i=n("7392"),s=n("b033");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("66d2");var c,a=n("f0c5"),o=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"0499e4b4",null,!1,i["a"],c);e["default"]=o.exports},b033:function(t,e,n){"use strict";n.r(e);var i=n("ea3a"),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=s.a},ea3a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},props:{},data:function(){return{}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=i},fa81:function(t,e,n){"use strict";n.r(e);var i=n("058c"),s=n("5806");for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n("76ce");var c,a=n("f0c5"),o=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"44c9291c",null,!1,i["a"],c);e["default"]=o.exports},fd09:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contanier[data-v-0499e4b4]{background:#fafafa;height:100vh}',""]),t.exports=e}}]);