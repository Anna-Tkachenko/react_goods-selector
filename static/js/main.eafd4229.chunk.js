(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(7),r=c(4),a=c(5),l=c(9),d=c(8),i=c(1),u=c.n(i),h=c(6),b=c.n(h),j=(c(14),c(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.clearSelectedGoods=function(){e.setState({selectedGoods:[]})},e.addProduct=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.deleteProduct=function(t){var c=e.state.selectedGoods.filter((function(e){return e!==t}));e.setState({selectedGoods:c})},e.getStringOfProducts=function(){var t=e.state.selectedGoods,c="";if(t.length>1){var s=t.slice(0,-1);c="".concat(s.join(", ")," ")+"and ".concat(t[t.length-1]," are selected")}else c="".concat(t[0]," is selected");return c},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,c=this.getStringOfProducts(),s=t.length?c:"No goods selected";return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App__header",children:[Object(j.jsx)("h1",{children:s}),!!t.length&&Object(j.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.clearSelectedGoods,children:"Clear"})]}),Object(j.jsx)("ul",{className:"list list-group",children:p.map((function(c){var s=t.includes(c);return Object(j.jsxs)("li",{className:b()({"list-group-item":!0,"list-group-item-success":s,"list-group-item-dark":!s}),children:[Object(j.jsx)("span",{children:c}),Object(j.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){s?e.deleteProduct(c):e.addProduct(c)},children:s?"Remove":"Add"})]},c)}))})]})}}]),c}(u.a.Component);n.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eafd4229.chunk.js.map