(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f798be82"],{"1f8b":function(t,e,s){t.exports=s.p+"img/login.2f04ab6a.png"},3293:function(t,e,s){"use strict";s("dc31")},"8b48":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[e("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[e("vx-card",[e("div",{attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row no-gutter justify-center items-center"},[e("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[e("img",{staticClass:"mx-auto",attrs:{src:s("1f8b"),alt:"login"}})]),e("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[e("div",{staticClass:"p-8 login-tabs-container"},[e("div",{staticClass:"vx-card__title mb-4"},[e("h4",{staticClass:"mb-4"},[t._v("Login")]),e("p",[t._v("Welcome back, please login to your account.")])]),e("div",[e("vs-input",{staticClass:"w-full",attrs:{name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e("vs-input",{staticClass:"w-full mt-6",attrs:{type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("div",{staticClass:"flex flex-wrap justify-between my-5"},[e("vs-checkbox",{staticClass:"mb-3",model:{value:t.checkbox_remember_me,callback:function(e){t.checkbox_remember_me=e},expression:"checkbox_remember_me"}},[t._v("Remember Me")]),e("router-link",{attrs:{to:""}},[t._v("Forgot Password?")])],1),e("vs-button",{attrs:{type:"border"}},[t._v("Register")]),e("vs-button",{staticClass:"float-right",on:{click:function(e){return t.submit()}}},[t._v("Login")])],1)])])])])])],1)])},a=[],o=(s("96cf"),s("1da1")),i=function(t){var e=/^(([^<>()[\]\\.,;:\s@'"]+(\.[^<>()[\]\\.,;:\s@'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())},n={data:function(){return{email:"",password:"",checkbox_remember_me:!1}},computed:{loginError:function(){return this.$store.state.loginError}},watch:{loginError:function(t){t&&this.$vs.notify({title:"Alert",text:t,color:"danger"})}},methods:{submit:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i(this.email)){t.next=3;break}return this.$vs.notify({title:"Alert",text:"Please enter correct email.",color:"danger"}),t.abrupt("return");case 3:if(this.password){t.next=6;break}return this.$vs.notify({title:"Alert",text:"Please enter password.",color:"danger"}),t.abrupt("return");case 6:return t.next=8,this.$store.dispatch("login",{email:this.email,password:this.password}).catch((function(t){console.error(t)}));case 8:e=t.sent,e.data.statusCode<400&&this.$router.push("/");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=n,l=(s("3293"),s("2877")),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},dc31:function(t,e,s){}}]);
//# sourceMappingURL=chunk-f798be82.248a49b0.js.map