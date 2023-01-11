(function(){var t={8856:function(){},1357:function(t,e,o){"use strict";var n={};o.r(n),o.d(n,{storedTodoItems:function(){return q}});var r={};o.r(r),o.d(r,{addOneItem:function(){return Q},clearAllItems:function(){return V},completeOneItem:function(){return U},reMakeindex:function(){return G},removeOneItem:function(){return R}});o(6992),o(8674),o(9601),o(7727);var a=o(6369),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoInput"),o("TodoList"),o("TodoFooter")],1)},l=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v(t._s(this.$store.state.headerText))])])},c=[],u=o(8856),d=o.n(u),f=d(),m=o(3736),p=(0,m.Z)(f,s,c,!1,null,"d798c276",null),v=p.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("p",[t._v(t._s(t.newWriting))])]),o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"fa fa-plus addbtn"})]),t.showModal?o("Modal",{on:{close:function(e){t.showModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고!")]),o("p",{attrs:{slot:"body"},slot:"body"},[t._v("무언가를 입력하세요.")]),o("p",{attrs:{slot:"footer"},slot:"footer"},[o("i",{staticClass:"fa fa-times-circle-o closeModalBtn",staticStyle:{"font-size":"36px"},on:{click:function(e){t.showModal=!1}}})])]):t._e()],1)])},g=[],I=(o(3210),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),o("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),o("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),o("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])]}))],2)])])])])}),y=[],_={},T=_,w=(0,m.Z)(T,I,y,!1,null,null,null),k=w.exports,b={data:function(){return{newTodoItem:"",newWriting:"",showModal:!1}},watch:{newTodoItem:function(){console.log("입력중"),this.newWriting="입력중",this.timer=setTimeout(this.reChange,1500)}},methods:{reChange:function(){this.newWriting=""},addTodo:function(){if(""!==this.newTodoItem){var t=Math.floor(1e5*Math.random()),e=this.newTodoItem.trim();this.$store.commit("addOneItem",{text:e,keynum:t}),this.clearInput()}else this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{Modal:k}},C=b,x=(0,m.Z)(C,h,g,!1,null,"8d815bd4",null),O=x.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.storedTodoItems,(function(e,n){return o("li",{key:e.item,staticClass:"shadow"},[o("i",{staticClass:"checkBtn fa fa-check",class:{checkBtnCompleted:e.completed},on:{click:function(o){return t.toggleComplete({todoItem:e,index:n})}}}),o("span",{class:{textCompleted:e.completed}},[t._v(t._s(e.item))]),o("span",{staticClass:"removeBtn",on:{click:function(o){return t.removeTodo({todoItem:e,index:n})}}},[o("i",{staticClass:"fa fa-trash-o"})])])})),0)],1)},M=[],Z=o(4648),$=o(3822),j={computed:(0,Z.Z)({},(0,$.Se)(["storedTodoItems"])),methods:(0,Z.Z)({},(0,$.OI)({removeTodo:"removeOneItem",toggleComplete:"completeOneItem"}))},E=j,P=(0,m.Z)(E,S,M,!1,null,"292dd033",null),B=P.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v(" Clear All ")])])},N=[],W={methods:(0,Z.Z)({},(0,$.OI)({clearTodo:"clearAllItems"}))},F=W,J=(0,m.Z)(F,A,N,!1,null,"6d393f5c",null),H=J.exports,L={data:function(){return{}},methods:{},components:{TodoHeader:v,TodoInput:O,TodoList:B,TodoFooter:H}},z=L,D=(0,m.Z)(z,i,l,!1,null,null,null),K=D.exports,q=(o(1539),o(4747),o(7941),function(t){return t.todoItems}),G=(o(8862),o(561),function(t,e){t.indexnum=e}),Q=function(t,e){var o={key:e.keynum,completed:!1,item:e.text};localStorage.setItem(e.keynum,JSON.stringify(o)),t.todoItems.push(o)},R=function(t,e){localStorage.removeItem(e.todoItem.key),t.todoItems.splice(e.index,1)},U=function(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.key),localStorage.setItem(e.todoItem.key,JSON.stringify(e.todoItem))},V=function(t){localStorage.clear(),t.todoItems=[]};a.Z.use($.ZP);var X={fetch:function(){var t=[];if(localStorage.length>0){Object.keys(localStorage).forEach((function(e){console.log(e,localStorage.getItem(e)),"loglevel:webpack-dev-server"!==localStorage.key(e)&&(1,t.push(JSON.parse(localStorage.getItem(e))))}))}return t}},Y=new $.ZP.Store({state:{headerText:"ToDo it~!",indexnum:0,todoItems:X.fetch()},getters:n,mutations:r});a.Z.config.productionTip=!1,new a.Z({render:function(t){return t(K)},store:Y}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,a){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],a=t[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,i=n[0],l=n[1],s=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var u=s(o)}for(e&&e(n);c<i.length;c++)a=i[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunkvue_cli"]=self["webpackChunkvue_cli"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1357)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.4baf5e78.js.map