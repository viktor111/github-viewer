(this["webpackJsonpgithub-viewer"]=this["webpackJsonpgithub-viewer"]||[]).push([[0],{111:function(e,t,s){},112:function(e,t,s){},137:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s.n(r),i=s(48),n=s.n(i),c=(s(111),s(19)),l=s(38),o=s(39),d=s(43),b=s(42),j=(s(112),s(9)),h=s(87),u=s(44),p=s.n(u),g=s(55),x=s(56),O=s.n(x),m=s(146),f=s(147),v=s(158),C=s(96),F=s(150),w=s(3),_=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hidden:!1,size:0,lang:"",stars:0,watchers:0},e.renderPosts=Object(g.a)(p.a.mark((function t(){var s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get(e.props.repos_url);case 3:s=t.sent,0,r=s.data,e.setState({size:r.map((function(e,t){return e.size+=e.size}))}),e.setState({size:e.state.size.reduce((function(e,t){return e+t}),0)}),console.log(s.data),console.log(e.state.size),e.setState({lang:r.map((function(e){return e.language})).reduce((function(e,t,s,r){return r.filter((function(t){return t===e})).length>=r.filter((function(e){return e===t})).length?e:t}),null)}),console.log(e.state.lang),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])}))),e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.props;return Object(w.jsxs)(m.a,{hidden:this.state.hidden,className:"col-md-6 col-lg-4",style:{width:"18rem",marginTop:150,marginBottom:20},children:[Object(w.jsx)("span",{onClick:function(){e.setState({hidden:!0})},className:"dot",style:{marginBottom:10}}),Object(w.jsx)("a",{rel:"noreferrer",target:"_blank",href:t.html_url,children:Object(w.jsx)("img",{className:"card-img-top rounded",src:t.avatar_url,alt:""})}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:Object(w.jsx)(f.a,{fontSize:"2xl",children:t.name})}),Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.login}),Object(w.jsx)("p",{className:"card-text",children:Object(w.jsx)(f.a,{color:"gray.500",children:t.bio})}),Object(w.jsxs)(v.a,{placement:"top-start",closeOnBlur:!1,children:[Object(w.jsx)(v.g,{children:Object(w.jsx)(C.a,{onClick:this.renderPosts,p:4,color:"white",fontWeight:"bold",borderRadius:"md",bgGradient:"linear(to-l, #8d769c,#b06cba)",_hover:{bgGradient:"linear(to-l, #7928CA,#FF0080)"},mt:4,children:"More details"})}),Object(w.jsxs)(v.e,{children:[Object(w.jsxs)(v.f,{fontWeight:"semibold",children:["Additional details for ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.login})]}),Object(w.jsx)(v.b,{}),Object(w.jsx)(v.d,{}),Object(w.jsx)(v.c,{children:Object(w.jsxs)(F.b,{children:[Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Total size of repos in KB:"})," ",Object(w.jsxs)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:[" ",this.state.size,"kb"]})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Total size of repos in MB:"})," ",Object(w.jsxs)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:[(this.state.size/1e3).toFixed(2),"mb"]})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Total size of repos in GB:"})," ",Object(w.jsxs)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:[(this.state.size/1048576).toFixed(2),"gb"]})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Most used language:"})," ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:this.state.lang})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Account last update:"})," ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.updated_at.split("T")[0]})]})})]})})]})]})]}),Object(w.jsx)(F.a,{children:Object(w.jsxs)(F.b,{children:[Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Public repos:"})," ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.public_repos})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Followers:"})," ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.followers})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Following:"})," ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.following})]})}),Object(w.jsx)(F.d,{children:Object(w.jsxs)(F.c,{children:[Object(w.jsx)(f.a,{as:"i",children:"Created:"})," ",Object(w.jsx)(f.a,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",as:"em",children:t.created_at.split("T")[0]})]})})]})})]})}}]),s}(a.a.Component),y=function(e){var t;return Object(w.jsx)(m.a,(t={className:"fixed-top",rounded:"lg",borderWidth:"1px"},Object(j.a)(t,"className","container"),Object(j.a)(t,"children",Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)(_,{login:"torvalds",id:1024025,node_id:"MDQ6VXNlcjEwMjQwMjU=",avatar_url:"https://avatars.githubusercontent.com/u/1024025?v=4",gravatar_id:"",url:"https://api.github.com/users/torvalds",html_url:"https://github.com/torvalds",followers_url:"https://api.github.com/users/torvalds/followers",following_url:"https://api.github.com/users/torvalds/following{/other_user}",gists_url:"https://api.github.com/users/torvalds/gists{/gist_id}",starred_url:"https://api.github.com/users/torvalds/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/torvalds/subscriptions",organizations_url:"https://api.github.com/users/torvalds/orgs",repos_url:"https://api.github.com/users/torvalds/repos",events_url:"https://api.github.com/users/torvalds/events{/privacy}",received_events_url:"https://api.github.com/users/torvalds/received_events",type:"User",site_admin:!1,name:"Linus Torvalds",company:"Linux Foundation",blog:"",location:"Portland, OR",email:null,hireable:null,bio:null,twitter_username:null,public_repos:6,public_gists:0,followers:131896,following:0,created_at:"2011-09-03T15:26:22Z",updated_at:"2021-01-10T19:36:11Z"}),e.profiles.map((function(e){return Object(w.jsx)(_,Object(h.a)({},e),e.id)}))]})),t))},S=s(100),A=s(159),N=s(151),z=s(152),G=s(153);var k=function(){var e=Object(S.b)(),t=e.colorMode,s=e.toggleColorMode;return Object(w.jsx)(A.a,{label:"Change color mode",fontSize:"md",children:Object(w.jsx)(N.a,{icon:"light"===t?Object(w.jsx)(z.a,{}):Object(w.jsx)(G.a,{}),isRound:"true",size:"sm",onClick:s})})},M=s(160),T=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={userName:"",msg:"",hidden:!0},e.handleSubmit=function(){var t=Object(g.a)(p.a.mark((function t(s){var r,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s.preventDefault(),r=e.state.userName,t.next=5,O.a.get("https://api.github.com/users/".concat(r)).catch((function(t){404===t.response.status&&e.setState({msg:"Could not find user",hidden:!1}),403===t.response.status&&e.setState({msg:"Please wait a while before more requests are allowed by github api",hidden:!1})}));case 5:a=t.sent,e.props.onSubmit(a.data),e.setState({userName:""}),console.log(a.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e.onChangeHandler=function(t){e.setState({userName:t.target.value})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(w.jsx)(m.a,{className:"fixed-top",style:{width:"200px"},children:Object(w.jsxs)("form",{className:"form-inline ",onSubmit:this.handleSubmit,children:[Object(w.jsx)("p",{style:{color:"red",marginRight:10},onClick:function(){e.setState({msg:"",hidden:!0})},hidden:this.state.hidden,children:this.state.msg}),Object(w.jsx)(M.a,{type:"search",placeholder:"GitHub search user",value:this.state.userName,onChange:this.onChangeHandler,required:!0}),Object(w.jsx)(A.a,{label:"Search for any user",fontSize:"md",children:Object(w.jsx)(C.a,{p:4,color:"white",fontWeight:"bold",borderRadius:"md",bgGradient:"linear(to-l, #8d769c,#b06cba)",_hover:{bgGradient:"linear(to-l, #7928CA,#FF0080)"},mt:4,type:"submit",children:"Search"})})]})})}}]),s}(a.a.Component),P=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={profiles:[]},e.addNewProfile=function(t){e.setState((function(e){return{profiles:[].concat(Object(c.a)(e.profiles),[t])}}))},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{pos:"fixed",id:"picker",children:Object(w.jsx)(k,{})}),Object(w.jsxs)("div",{className:"App container",children:[Object(w.jsx)(f.a,{bgClip:"text",fontSize:"6xl",fontWeight:"extrabold",bgGradient:"linear(to-l, #7928CA,#FF0080)",children:"GitHub profile comparer"}),Object(w.jsx)(T,{onSubmit:this.addNewProfile}),Object(w.jsx)(y,{profiles:this.state.profiles})]})]})}}]),s}(a.a.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,163)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),r(e),a(e),i(e),n(e)}))},R=s(161),W=s(155),H=s(154),L=Object(H.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}});n.a.render(Object(w.jsxs)(R.a,{children:[Object(w.jsx)(W.a,{initialColorMode:L.config.initialColorMode}),Object(w.jsx)(P,{})]}),document.getElementById("root")),B()}},[[137,1,2]]]);
//# sourceMappingURL=main.0f3d2243.chunk.js.map