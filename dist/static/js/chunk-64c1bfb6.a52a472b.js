(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64c1bfb6"],{"229a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:" d-flex align-items-center justify-content-center",staticStyle:{height:"520px","padding-top":"40px","margin-top":"40px"}},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-7 align-middle",staticStyle:{"padding-top":"15%"}},[n("p",{staticStyle:{"font-size":"40px","font-weight":"bold",width:"100%"}},[t._v("IPFS Blog Engine | Render Machine")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rootCID,expression:"rootCID"}],staticClass:"form-control border border-dark border-2 d-inline",staticStyle:{width:"70%"},attrs:{type:"text",placeholder:"Drop your blog's URI here..."},domProps:{value:t.rootCID},on:{input:function(e){e.target.composing||(t.rootCID=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-dark border border-dark border-2 ms-4",on:{click:t.renderCID}},[t._v("Render it!")]),n("p",{staticClass:" mt-3",staticStyle:{"font-size":"20px"}},[t._v("Haven't created blog yet? "),n("span",[n("router-link",{staticStyle:{color:"black"},attrs:{to:"/"}},[t._v("Click here")])],1)])]),t._m(0)])]),n("Footer")],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-md-5"},[o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n("752f")}})])}],i=n("b2c8"),a={name:"RenderMachine",components:{Footer:i["a"]},data:function(){return{rootCID:""}},methods:{renderCID:function(){""!=this.rootCID&&this.$router.push("/blog/".concat(this.rootCID))}}},s=a,c=n("2877"),l=Object(c["a"])(s,o,r,!1,null,"3c9e1444",null);e["default"]=l.exports},"752f":function(t,e,n){t.exports=n.p+"static/img/doodle-machine-2.92b315fd.png"},b2c8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),n("p",{staticClass:"text-center",staticStyle:{"font-size":"20px","padding-top":"30px","padding-bottom":"40px"}},[t._v("Build and render with love ♥IFPS Blog Engine")])])}],i=n("2877"),a={},s=Object(i["a"])(a,o,r,!1,null,null,null);e["a"]=s.exports}}]);