(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/FoodAppDelivery/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"22b0":function(t,e,s){"use strict";var a=s("4ec8"),i=s.n(a);i.a},"4ec8":function(t,e,s){},5017:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("app-navigation"),s("v-content",{attrs:{transition:"slide-x-transition"}},[s("router-view")],1),s("Footer")],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("v-navigation-drawer",{staticClass:"blue-grey darken-4",attrs:{app:"",dark:"","disable-resize-watcher":"","overlay-opacity":"0.3"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v(" Order Food Fastest ")]),s("v-list-item-subtitle",[t._v(" Cheap-Fast and More ")])],1)],1),s("v-list",[t._l(t.items,(function(e,a){return[s("v-list-tile",{key:a,staticClass:"list-item",on:{click:function(s){return t.changeroute(e)}}},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-tile-content",[t._v(" "+t._s(e.title)+" ")])],1),s("v-divider",{key:"divider-"+a})]}))],2)],1),s("v-toolbar",{attrs:{app:"",color:"brown darken-4",dark:""}},[s("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),s("v-spacer",{staticClass:"hidden-md-and-up"}),s("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[t._v(t._s(t.appTitle))]),s("v-btn",{staticClass:"hidden-sm-and-down btn",attrs:{flat:"",to:"/Menu"}},[t._v("Menu")]),s("v-spacer",{staticClass:"hidden-sm-and-down"}),t.isAuthenticated?s("div",[s("v-btn",{staticClass:"hidden-sm-and-down btn",attrs:{color:"success",to:"/Recipe"}},[t._v("Cart "),s("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-shopping")])],1),s("v-btn",{staticClass:"hidden-sm-and-down btn",attrs:{color:"brown lighten-3"},on:{click:t.logout}},[t._v("Logout")])],1):s("div",{staticClass:"hidden-sm-and-down"},[s("v-btn",{staticClass:"hidden-sm-and-down btn",attrs:{flat:"",to:"/Signin"}},[t._v("SIGN IN")]),s("v-btn",{staticClass:"hidden-sm-and-down btn",attrs:{color:"brown lighten-3",to:"/Join"}},[t._v("JOIN")])],1)],1)],1)},o=[],c={name:"AppNavigation",data:function(){return{appTitle:"Meal Prep",drawer:!1,items:[{title:"Menu",icon:"mdi-food",route:"/Menu"},{title:"Sign In",icon:"mdi-account",route:"/Signin"},{title:"Join",icon:"mdi-check",route:"/Join"}]}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{logout:function(){this.$store.dispatch("userSignOut")},changeroute:function(t){this.$router.push(t.route)}}},l=c,u=(s("d194"),s("2877")),d=Object(u["a"])(l,n,o,!1,null,"7d79250d",null),p=d.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{attrs:{dark:"",padless:""}},[s("v-card",{staticClass:"brown darken-4 white--text text-center",attrs:{width:"100%",flat:"",tile:""}},[s("v-card-text",t._l(t.icons,(function(e){return s("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),s("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Thank you for choosing us, Enjoy your meal ")]),s("v-divider"),s("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),s("strong",[t._v("Food App")])])],1)],1)},m=[],f={name:"Footer",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},h=f,b=Object(u["a"])(h,v,m,!1,null,"3294cd72",null),g=b.exports,w={name:"App",components:{AppNavigation:p,Footer:g}},y=w,x=Object(u["a"])(y,i,r,!1,null,null,null),_=x.exports,k=(s("45fc"),s("8c4f")),R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HomeHero",{attrs:{id:"HomeHero"}}),s("HomeDetails")],1)},C=[],A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"home-hero",attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[s("div",{staticClass:"font-weight-black white--text text-xs-center",class:[t.$vuetify.breakpoint.mdAndUp?"display-4":"display-3"]},[t._v("HEALTHY MEALS")]),s("div",{staticClass:"font-weight-black white--text text-xs-center mb-3",class:[t.$vuetify.breakpoint.mdAndUp?"display-4":"display-3"]},[t._v("FOR YOUR TABLE")]),s("div",{staticClass:"font-weight-bold white--text text-sub",class:[t.$vuetify.breakpoint.mdAndUp?"display-1":"display-0"]},[t._v("Finally be a foodie at home with fresh, chef-prepared meals delivered daily.")]),s("v-btn",{staticClass:"mt-5 brown darken-4 hidden-sm-and-down",attrs:{larger:"",fab:""}},[s("v-icon",{attrs:{large:"",color:"white"}},[t._v("mdi-arrow-down")])],1),s("v-btn",{staticClass:"mt-5 brown darken-4 hidden-md-and-up",attrs:{small:"",fab:""}},[s("v-icon",{attrs:{medium:"",color:"white"}},[t._v("mdi-arrow-down")])],1)],1)],1)},E=[],S={name:"HomeHero",data:function(){return{}}},$=S,j=(s("90e5"),Object(u["a"])($,A,E,!1,null,"173f16fd",null)),O=j.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-lg":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"text-xs-center display-1 font-weight-black my-5",attrs:{xs12:""}},[t._v("Available Meal Plans")])],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[s("v-card",{attrs:{height:"730"}},[s("v-img",{attrs:{src:"http://source.unsplash.com/hjCA3ecCXAQ",height:"500px"}},[s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-layout",{attrs:{"fill-height":""}},[s("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[s("span",{staticClass:"headline white--text"},[t._v("KETO")])])],1)],1)],1),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v("Keto")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Its products are also totally free of gluten (in case gluten is an issue for you!), antibiotics and added hormones, so you can rest-easy knowing that you're eating only the highest-quality ingredients. ")])])],1),["menu"].includes(t.$route.name)?s("v-card-actions",{staticStyle:{display:"block",width:"100%"}},[s("v-btn",{attrs:{outline:"",block:"",color:"#64FFDA"},on:{click:function(e){return t.showRecipes("keto")}}},[t._v("Select This Plan")])],1):t._e()],1)],1)],1),s("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[s("v-card",{attrs:{height:"730"}},[s("v-img",{attrs:{src:"http://source.unsplash.com/6S27S6pZ6o0",height:"500px"}},[s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-layout",{attrs:{"fill-height":""}},[s("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[s("span",{staticClass:"headline white--text"},[t._v("PALEO")])])],1)],1)],1),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v("Paleo")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Meals are prepared and delivered fresh—never frozen—and last for up to 10 days in the refrigerator. Customers can choose from one, two or three meals per day and can subscribe weekly. ")])])],1),["menu"].includes(t.$route.name)?s("v-card-actions",{staticStyle:{display:"block",width:"100%"}},[s("v-btn",{attrs:{outline:"",block:"",color:"#64FFDA"},on:{click:function(e){return t.showRecipes("paleo")}}},[t._v("Select This Plan")])],1):t._e()],1)],1)],1),s("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[s("v-card",{attrs:{height:"730"}},[s("v-img",{attrs:{src:"http://source.unsplash.com/1SPu0KT-Ejg",height:"500px"}},[s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-layout",{attrs:{"fill-height":""}},[s("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[s("span",{staticClass:"headline white--text"},[t._v("VEGAN")])])],1)],1)],1),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v("Vegan")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("A vegan diet is one that consists only of plant-derived foods. Like non-vegans, vegans eat soups, stews, stir-fries, salads, and casseroles. More details below ")])])],1),["menu"].includes(t.$route.name)?s("v-card-actions",{staticStyle:{display:"block",width:"100%"}},[s("v-btn",{attrs:{outline:"",block:"",color:"#64FFDA"},on:{click:function(e){return t.showRecipes("vegan")}}},[t._v("Select This Plan")])],1):t._e()],1)],1)],1)],1)],1)},F=[],M={name:"HomeDetails",methods:{showRecipes:function(t){this.$store.dispatch("getRecipes",t)}}},U=M,I=Object(u["a"])(U,P,F,!1,null,"efb29d84",null),H=I.exports,T={name:"Home",components:{HomeHero:O,HomeDetails:H}},L=T,q=(s("bd2d"),Object(u["a"])(L,R,C,!1,null,"bc418bd0",null)),D=q.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-form",{ref:"form",attrs:{id:"form","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"#E0F2F1"},on:{click:t.submit}},[t._v(" Login ")]),s("v-btn",{staticClass:"mr-4",attrs:{color:"#EF5350"},on:{click:t.reset}},[t._v(" Cancel ")])],1)},z=[],N={data:function(){return{valid:!1,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userLogin",{email:this.email,password:this.password})},reset:function(){this.$refs.form.reset()}}},V=N,K=(s("58f1"),Object(u["a"])(V,J,z,!1,null,"2de66df1",null)),Y=K.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",{attrs:{"grid-list-lg":""}},[s("v-layout",{attrs:{row:"",align:t.alignment,justify:t.justify}},[s("v-flex",{staticClass:"text-xs-center display-1 font-weight-black my-5",attrs:{md8:"",xs12:"",sm12:""}},[s("div",{attrs:{id:"text"}},[t._v("Available Meal Plans")]),s("v-carousel",{staticStyle:{width:"80%",margin:"15px auto"},attrs:{height:"300px","show-arrows-on-hover":""}},t._l(t.items,(function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1),s("v-flex",{staticStyle:{display:"flex","align-items":"center"},attrs:{md4:"",xs12:"",sm12:""}},[s("v-form",{ref:"form",attrs:{id:"form","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"#E0F2F1"},on:{click:t.submit}},[t._v(" Register ")]),s("v-btn",{staticClass:"mr-4",attrs:{color:"#EF5350"},on:{click:t.reset}},[t._v(" Cancel ")])],1)],1)],1)],1)],1)},B=[],G={data:function(){return{valid:!1,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be greater than 6 characters"}],items:[{src:"https://images.all-free-download.com/images/graphiclarge/food_picture_03_hd_pictures_167556.jpg"},{src:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{src:"https://wallpaperaccess.com/full/1400917.jpg"},{src:"https://cdn.hipwallpaper.com/i/38/27/dVptfA.jpg"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userJoin",{email:this.email,password:this.password})},reset:function(){this.$refs.form.reset()}}},W=G,Q=(s("7fc7"),Object(u["a"])(W,Z,B,!1,null,"e02a7e2e",null)),X=Q.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HomeDetails"),s("MealRecipes")],1)},et=[],st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.recipes,(function(e,a){return s("v-flex",{key:a,attrs:{xs12:"",sm3:"",md3:"",lg3:""}},[s("v-card",{staticStyle:{height:"600px",margin:"10px 0"}},[s("v-responsive",[s("v-img",{attrs:{src:e.recipe.image}})],1),s("v-card-text",{staticStyle:{height:"300px",overflow:"scroll"}},[s("div",{staticClass:"title"},[t._v(t._s(e.recipe.label))]),s("div",{staticClass:"subheading"},[t._v("Ingredients")]),s("ul",t._l(e.recipe.ingredientLines,(function(e,a){return s("li",{key:a},[t._v(t._s(e))])})),0)]),s("v-btn",{staticStyle:{display:"block",margin:"0 auto"},attrs:{flat:""},on:{click:function(s){return t.orderRecipe(e)}}},[t._v("Order Now")])],1)],1)})),1)],1)},at=[],it={name:"MealRecipes",computed:{recipes:function(){return this.$store.state.recipes},isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{orderRecipe:function(t){this.isAuthenticated?this.$store.dispatch("addRecipe",t):this.$router.push("/Signin")}}},rt=it,nt=Object(u["a"])(rt,st,at,!1,null,"cabbb810",null),ot=nt.exports,ct={name:"Menu",components:{HomeDetails:H,MealRecipes:ot}},lt=ct,ut=Object(u["a"])(lt,tt,et,!1,null,"3c706b3f",null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"background",attrs:{fluid:""}},[s("v-layout",{staticStyle:{width:"fit-content",margin:"0 auto"},attrs:{column:""}},[s("v-card",{staticStyle:{opacity:"0.9"},attrs:{color:"#FCE4EC"}},[s("v-card-title",{staticClass:"justify-center"},[t._v(" My Recipe ")]),t._l(t.userRecipes,(function(e,a){return s("div",{key:a,staticClass:"subheading mb-2",staticStyle:{"text-align":"center",margin:"0 40px"}},[t._v(" "+t._s(e)+" "),s("v-btn",{attrs:{small:"",color:"purple",text:""},on:{click:function(e){return t.removeRecipe(a)}}},[s("v-icon",{attrs:{small:""}},[t._v(" mdi-close")])],1)],1)}))],2)],1)],1)},vt=[],mt={name:"Recipe",computed:{userRecipes:function(){return this.$store.state.userRecipes}},mounted:function(){this.getRecipes()},methods:{getRecipes:function(){this.$store.dispatch("getUserRecipes")},removeRecipe:function(t){this.$store.dispatch("removeRecipe",t)}}},ft=mt,ht=(s("22b0"),Object(u["a"])(ft,pt,vt,!1,null,"1743b658",null)),bt=ht.exports,gt=(s("96cf"),s("1da1")),wt=s("2f62"),yt=s("bc3a"),xt=s.n(yt),_t=s("8aa5"),kt=s.n(_t),Rt=s("0e44");a["default"].use(wt["a"]);var Ct=new wt["a"].Store({plugins:[Object(Rt["a"])({storage:window.sessionStorage})],state:{recipes:[],apiUrl:"https://api.edamam.com/search",user:null,isAuthenticated:!1,userRecipes:[]},getters:{isAuthenticated:function(t){return null!==t.user&&void 0!==t.user}},mutations:{setRecipes:function(t,e){t.recipes=e},setUser:function(t,e){t.user=e},setIsAuthenticated:function(t,e){t.isAuthenticated=e},setUserRecipes:function(t,e){t.userRecipes=e}},actions:{getRecipes:function(t,e){return Object(gt["a"])(regeneratorRuntime.mark((function s(){var a,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.state,i=t.commit,s.prev=1,s.next=4,xt.a.get("".concat(a.apiUrl),{params:{q:e,app_id:"5b6623d5",app_key:"46674aa2193dbb7b88ffd897331e661a",from:6,to:14}});case 4:r=s.sent,i("setRecipes",r.data.hits),s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](1),i("setRecipes",[]);case 11:case"end":return s.stop()}}),s,null,[[1,8]])})))()},userJoin:function(t,e){var s=t.commit,a=e.email,i=e.password;kt.a.auth().createUserWithEmailAndPassword(a,i).then((function(t){s("setUser",t),s("setIsAuthenticated",!0),St.push("/")})).catch((function(){s("setUser",null),s("setIsAuthenticated",!1),alert("Register fail, check Email or Password again !")}))},userLogin:function(t,e){var s=t.commit,a=e.email,i=e.password;kt.a.auth().signInWithEmailAndPassword(a,i).then((function(t){s("setUser",t),s("setIsAuthenticated",!0),St.push("/Menu")})).catch((function(){s("setUser",null),s("setIsAuthenticated",!1),alert("Login fail, check Email or Password again !")})),console.log(sessionStorage)},userSignOut:function(t){var e=t.commit;kt.a.auth().signOut().then((function(){e("setUser",null),e("setIsAuthenticated",!1),sessionStorage.clear(),St.push("/")})).catch((function(){e("setUser",null),e("setIsAuthenticated",!1),sessionStorage.clear(),St.push("/")}))},addRecipe:function(t,e){var s=t.state;kt.a.database().ref("users").child(s.user.user.uid).push(e.recipe.label)},getUserRecipes:function(t){var e=t.state,s=t.commit;return kt.a.database().ref("users/"+e.user.user.uid).once("value",(function(t){s("setUserRecipes",t.val())}))},removeRecipe:function(t,e){var s=t.state,a=t.commit;return kt.a.database().ref("users").child(s.user.user.uid).child(e).remove(),kt.a.database().ref("users/"+s.user.user.uid).once("value",(function(t){a("setUserRecipes",t.val())}))}}});a["default"].use(k["a"]);var At=[{path:"/",name:"home",component:D},{path:"/Signin",name:"signin",component:Y},{path:"/Join",name:"join",component:X},{path:"/Menu",name:"menu",component:dt},{path:"/Recipe",name:"recipe",component:bt,meta:{authRequired:!0}}],Et=new k["a"]({routes:At});Et.beforeEach((function(t,e,s){t.matched.some((function(t){return t.meta.authRequired}))?Ct.state.user?s():s({path:"/signin"}):s()}));var St=Et,$t=s("ce5b"),jt=s.n($t);s("bf40");a["default"].use(jt.a);var Ot=new jt.a({}),Pt={apiKey:"AIzaSyBZLgEMThCeTygrVrJ8lEZVVYJ7ym-Eb7A",authDomain:"prep-meal.firebaseapp.com",databaseURL:"https://prep-meal.firebaseio.com",projectId:"prep-meal",storageBucket:"prep-meal.appspot.com",messagingSenderId:"963139854865",appId:"1:963139854865:web:d0dd7acef2c5027e2947b0",measurementId:"G-5PPPPZ5HFV"};kt.a.initializeApp(Pt),kt.a.analytics(),a["default"].config.productionTip=!1,new a["default"]({router:St,store:Ct,vuetify:Ot,render:function(t){return t(_)}}).$mount("#app")},"58f1":function(t,e,s){"use strict";var a=s("5017"),i=s.n(a);i.a},"5a05":function(t,e,s){},6429:function(t,e,s){},"7fc7":function(t,e,s){"use strict";var a=s("a433"),i=s.n(a);i.a},"90e5":function(t,e,s){"use strict";var a=s("f31e"),i=s.n(a);i.a},a433:function(t,e,s){},bd2d:function(t,e,s){"use strict";var a=s("6429"),i=s.n(a);i.a},d194:function(t,e,s){"use strict";var a=s("5a05"),i=s.n(a);i.a},f31e:function(t,e,s){}});
//# sourceMappingURL=app.c199c4c4.js.map