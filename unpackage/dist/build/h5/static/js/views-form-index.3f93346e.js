(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-form-index"],{"0288":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={components:{},props:{},data:function(){return{model:{username:"",password:"",code:""},rules:{username:[{required:!0,message:"用户名不能为空",trigger:"change"},{min:2,max:6,message:"用户名2-6位之间",trigger:"change"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:{submit:function(){this.$refs.form.validate((function(e){e?console.log("success"):console.log("fail")}))},reset:function(){this.$refs.form.resetFields()}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};t.default=o},"0e73":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var o={ccForm:n("5c3b").default,ccFormItem:n("e6c2").default,ccField:n("8ba2").default,ccButton:n("b893").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("cc-form",{ref:"form",attrs:{model:e.model,rules:e.rules},on:{"update:model":function(t){arguments[0]=t=e.$handleEvent(t),e.model=t}}},[n("cc-form-item",{attrs:{leftIcon:"person",label:"用户名",prop:"username"}},[n("cc-field",{attrs:{value:e.model.username,border:!1},on:{"update:value":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.model,"username",t)}}})],1),n("cc-form-item",{attrs:{label:"密码",prop:"password"}},[n("cc-field",{attrs:{type:"password",value:e.model.password,border:!1},on:{"update:value":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.model,"password",t)}}})],1),n("cc-form-item",{attrs:{label:"验证码"}},[n("cc-field",{attrs:{type:"password",value:e.model.code,border:!1},on:{"update:value":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.model,"code",t)}}})],1),n("cc-form-item",[n("cc-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")]),n("cc-button",{staticStyle:{"margin-left":"30rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reset.apply(void 0,arguments)}}},[e._v("重置")])],1)],1)],1)},c=[]},"1fce":function(e,t,n){"use strict";n.r(t);var o=n("0e73"),r=n("ef42");for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);var a,u=n("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"2bba8648",null,!1,o["a"],a);t["default"]=s.exports},ef42:function(e,t,n){"use strict";n.r(t);var o=n("0288"),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a}}]);