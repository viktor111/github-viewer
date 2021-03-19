(this["webpackJsonpgithub-viewer"]=this["webpackJsonpgithub-viewer"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(17),c=n.n(r),i=(n(26),n(20)),o=n(3),l=n(4),u=n(6),d=n(5),h=(n(27),n(21)),b=n(0),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={hidden:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props;return Object(b.jsxs)("div",{hidden:this.state.hidden,className:"card col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-white rounded",style:{width:"18rem",marginTop:150,marginBottom:20},children:[Object(b.jsx)("span",{onClick:function(){e.setState({hidden:!0})},className:"dot",style:{marginBottom:10}}),Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:t.html_url,children:Object(b.jsx)("img",{className:"card-img-top",src:t.avatar_url,alt:""})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.name}),Object(b.jsx)("p",{className:"card-text",children:t.bio})]}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:["Public repos: ",t.public_repos]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Followers: ",t.followers]}),Object(b.jsxs)("li",{className:"list-group-item",children:["Following: ",t.following]})]})]})}}]),n}(s.a.Component),m=function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{children:"Users"}),e.profiles.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.id)}))]})})},p=n(8),f=n.n(p),g=n(18),O=n(19),v=n.n(O),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={userName:"",msg:"",hidden:!0},e.handleSubmit=function(){var t=Object(g.a)(f.a.mark((function t(n){var a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),a=e.state.userName,t.next=5,v.a.get("https://api.github.com/users/".concat(a)).catch((function(t){404===t.response.status&&e.setState({msg:"Could not find user",hidden:!1}),403===t.response.status&&e.setState({msg:"Please wait a while before more requests are allowed by github api",hidden:!1})}));case 5:s=t.sent,e.props.onSubmit(s.data),e.setState({userName:""}),console.log(s.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e.onChangeHandler=function(t){e.setState({userName:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("nav",{class:"navbar navbar-dark bg-dark fixed-top",children:Object(b.jsxs)("form",{className:"form-inline ",onSubmit:this.handleSubmit,children:[Object(b.jsx)("p",{style:{color:"red",marginRight:10},onClick:function(){e.setState({msg:"",hidden:!0})},hidden:this.state.hidden,children:this.state.msg}),Object(b.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"GitHub search user",value:this.state.userName,onChange:this.onChangeHandler,required:!0}),Object(b.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",children:"Search"})]})})}}]),n}(s.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={profiles:[]},e.addNewProfile=function(t){e.setState((function(e){return{profiles:[].concat(Object(i.a)(e.profiles),[t])}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App container",children:[Object(b.jsx)(x,{onSubmit:this.addNewProfile}),Object(b.jsx)(m,{profiles:this.state.profiles})]})}}]),n}(s.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.ff2ab64b.chunk.js.map