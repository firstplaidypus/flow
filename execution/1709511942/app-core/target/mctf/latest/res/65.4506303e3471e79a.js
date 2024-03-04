"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[65],{1065:(Y,P,v)=>{v.d(P,{bK:()=>ri});var f=v(6391),C=v(8917),m=v(6947),x=v(145),E=v(6224),w=v(2957),y=v(1256),I=v(8814);class T{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return k(r),r}enqueue(e){var r=this._sentinel;e._prev&&e._next&&k(e),e._next=r._next,r._next._prev=e,r._next=e,e._prev=r}toString(){for(var e=[],r=this._sentinel,t=r._prev;t!==r;)e.push(JSON.stringify(t,S)),t=t._prev;return"["+e.join(", ")+"]"}}function k(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function S(n,e){if("_next"!==n&&"_prev"!==n)return e}var R=x.Z(1);function F(n,e,r,t,i){var a=i?[]:void 0;return f.Z(n.inEdges(t.v),function(o){var s=n.edge(o),u=n.node(o.v);i&&a.push({v:o.v,w:o.w}),u.out-=s,B(e,r,u)}),f.Z(n.outEdges(t.v),function(o){var s=n.edge(o),d=n.node(o.w);d.in-=s,B(e,r,d)}),n.removeNode(t.v),a}function B(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function z(n){var e="greedy"===n.graph().acyclicer?function L(n,e){if(n.nodeCount()<=1)return[];var r=function A(n,e){var r=new I.k,t=0,i=0;f.Z(n.nodes(),function(s){r.setNode(s,{v:s,in:0,out:0})}),f.Z(n.edges(),function(s){var u=r.edge(s.v,s.w)||0,d=e(s);r.setEdge(s.v,s.w,u+d),i=Math.max(i,r.node(s.v).out+=d),t=Math.max(t,r.node(s.w).in+=d)});var a=y.Z(i+t+3).map(function(){return new T}),o=t+1;return f.Z(r.nodes(),function(s){B(a,o,r.node(s))}),{graph:r,buckets:a,zeroIdx:o}}(n,e||R),t=function O(n,e,r){for(var o,t=[],i=e[e.length-1],a=e[0];n.nodeCount();){for(;o=a.dequeue();)F(n,e,r,o);for(;o=i.dequeue();)F(n,e,r,o);if(n.nodeCount())for(var s=e.length-2;s>0;--s)if(o=e[s].dequeue()){t=t.concat(F(n,e,r,o,!0));break}}return t}(r.graph,r.buckets,r.zeroIdx);return E.Z(w.Z(t,function(i){return n.outEdges(i.v,i.w)}))}(n,function r(t){return function(i){return t.edge(i).weight}}(n)):function K(n){var e=[],r={},t={};return f.Z(n.nodes(),function i(a){m.Z(t,a)||(t[a]=!0,r[a]=!0,f.Z(n.outEdges(a),function(o){m.Z(r,o.w)?e.push(o):i(o.w)}),delete r[a])}),e}(n);f.Z(e,function(t){var i=n.edge(t);n.removeEdge(t),i.forwardName=t.name,i.reversed=!0,n.setEdge(t.w,t.v,i,C.Z("rev"))})}var b=v(2986),N=v(6264),$=v(3233),D=v(6460);const G=function X(n,e,r){for(var t=-1,i=n.length;++t<i;){var a=n[t],o=e(a);if(null!=o&&(void 0===s?o==o&&!(0,D.Z)(o):r(o,s)))var s=o,u=a}return u},W=function H(n,e){return n>e};var U=v(9940);const j=function Q(n){return n&&n.length?G(n,U.Z,W):void 0},un=function de(n){var e=null==n?0:n.length;return e?n[e-1]:void 0};var fe=v(3496),Nn=v(7607),en=v(4380);const dn=function ce(n,e){var r={};return e=(0,en.Z)(e,3),(0,Nn.Z)(n,function(t,i,a){(0,fe.Z)(r,i,e(t,i,a))}),r};var V=v(9948);const Cn=function ve(n,e){return n<e},rn=function he(n){return n&&n.length?G(n,U.Z,Cn):void 0};var le=v(5946);const Tn=function(){return le.Z.Date.now()};function q(n,e,r,t){var i;do{i=C.Z(t)}while(n.hasNode(i));return r.dummy=e,n.setNode(i,r),i}function Rn(n){var e=new I.k({multigraph:n.isMultigraph()}).setGraph(n.graph());return f.Z(n.nodes(),function(r){n.children(r).length||e.setNode(r,n.node(r))}),f.Z(n.edges(),function(r){e.setEdge(r,n.edge(r))}),e}function On(n,e){var u,d,r=n.x,t=n.y,i=e.x-r,a=e.y-t,o=n.width/2,s=n.height/2;if(!i&&!a)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(a)*o>Math.abs(i)*s?(a<0&&(s=-s),u=s*i/a,d=s):(i<0&&(o=-o),u=o,d=o*a/i),{x:r+u,y:t+d}}function fn(n){var e=w.Z(y.Z(Mn(n)+1),function(){return[]});return f.Z(n.nodes(),function(r){var t=n.node(r),i=t.rank;V.Z(i)||(e[i][t.order]=r)}),e}function Pn(n,e,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),q(n,"border",i,e)}function Mn(n){return j(w.Z(n.nodes(),function(e){var r=n.node(e).rank;if(!V.Z(r))return r}))}function ge(n,e){var r=Tn();try{return e()}finally{console.log(n+" time: "+(Tn()-r)+"ms")}}function Ee(n,e){return e()}function kn(n,e,r,t,i,a){var s=i[e][a-1],u=q(n,"border",{width:0,height:0,rank:a,borderType:e},r);i[e][a]=u,n.setParent(u,t),s&&n.setEdge(s,u,{weight:1})}function _n(n){f.Z(n.nodes(),function(e){Sn(n.node(e))}),f.Z(n.edges(),function(e){Sn(n.edge(e))})}function Sn(n){var e=n.width;n.width=n.height,n.height=e}function hn(n){n.y=-n.y}function ln(n){var e=n.x;n.x=n.y,n.y=e}const Zn=function Oe(n,e){return n&&n.length?G(n,(0,en.Z)(e,2),Cn):void 0};function mn(n){var e={};f.Z(n.sources(),function r(t){var i=n.node(t);if(m.Z(e,t))return i.rank;e[t]=!0;var a=rn(w.Z(n.outEdges(t),function(o){return r(o.w)-n.edge(o).minlen}));return(a===Number.POSITIVE_INFINITY||null==a)&&(a=0),i.rank=a})}function tn(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function An(n){var i,a,e=new I.k({directed:!1}),r=n.nodes()[0],t=n.nodeCount();for(e.setNode(r,{});Pe(e,n)<t;)i=Me(e,n),a=e.hasNode(i.v)?tn(n,i):-tn(n,i),ke(e,n,a);return e}function Pe(n,e){return f.Z(n.nodes(),function r(t){f.Z(e.nodeEdges(t),function(i){var a=i.v,o=t===a?i.w:a;!n.hasNode(o)&&!tn(e,i)&&(n.setNode(o,{}),n.setEdge(t,o,{}),r(o))})}),n.nodeCount()}function Me(n,e){return Zn(e.edges(),function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return tn(e,r)})}function ke(n,e,r){f.Z(n.nodes(),function(t){e.node(t).rank+=r})}var Fn=v(8706),_e=v(1952);var Fe=v(9009),Be=v(1605);var Ue=Math.max;const pn=function Se(n){return function(e,r,t){var i=Object(e);if(!(0,Fn.Z)(e)){var a=(0,en.Z)(r,3);e=(0,_e.Z)(e),r=function(s){return a(i[s],s,i)}}var o=n(e,r,t);return o>-1?i[a?e[o]:o]:void 0}}(function je(n,e,r){var t=null==n?0:n.length;if(!t)return-1;var i=null==r?0:function De(n){var e=(0,Be.Z)(n),r=e%1;return e==e?r?e-r:e:0}(r);return i<0&&(i=Ue(t+i,0)),(0,Fe.Z)(n,(0,en.Z)(e,3),i)});var an=v(8736);x.Z(1),x.Z(1),v(4884),v(7183),v(7079);var wn=v(4177);v(214),(0,v(666).Z)("length"),RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Bn="\\ud800-\\udfff",br="["+Bn+"]",bn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",gn="\\ud83c[\\udffb-\\udfff]",Dn="[^"+Bn+"]",Wn="(?:\\ud83c[\\udde6-\\uddff]){2}",Un="[\\ud800-\\udbff][\\udc00-\\udfff]",jn="(?:"+bn+"|"+gn+")?",zn="[\\ufe0e\\ufe0f]?",yr=zn+jn+"(?:\\u200d(?:"+[Dn,Wn,Un].join("|")+")"+zn+jn+")*",Ir="(?:"+[Dn+bn+"?",bn,Wn,Un,br].join("|")+")";function Gn(n,e,r){wn.Z(e)||(e=[e]);var t=(n.isDirected()?n.successors:n.neighbors).bind(n),i=[],a={};return f.Z(e,function(o){if(!n.hasNode(o))throw new Error("Graph does not have node: "+o);Yn(n,o,"post"===r,a,t,i)}),i}function Yn(n,e,r,t,i,a){m.Z(t,e)||(t[e]=!0,r||a.push(e),f.Z(i(e),function(o){Yn(n,o,r,t,i,a)}),r&&a.push(e))}function J(n){n=function me(n){var e=(new I.k).setGraph(n.graph());return f.Z(n.nodes(),function(r){e.setNode(r,n.node(r))}),f.Z(n.edges(),function(r){var t=e.edge(r.v,r.w)||{weight:0,minlen:1},i=n.edge(r);e.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),e}(n),mn(n);var r,e=An(n);for(xn(e),En(e,n);r=Hn(e);)$n(e,n,r,Jn(e,n,r))}function En(n,e){var r=function _r(n,e){return Gn(n,e,"post")}(n,n.nodes());r=r.slice(0,r.length-1),f.Z(r,function(t){!function Ar(n,e,r){var t=n.node(r);n.edge(r,t.parent).cutvalue=Kn(n,e,r)}(n,e,t)})}function Kn(n,e,r){var i=n.node(r).parent,a=!0,o=e.edge(r,i),s=0;return o||(a=!1,o=e.edge(i,r)),s=o.weight,f.Z(e.nodeEdges(r),function(u){var d=u.v===r,c=d?u.w:u.v;if(c!==i){var h=d===a,l=e.edge(u).weight;if(s+=h?l:-l,function Br(n,e,r){return n.hasEdge(e,r)}(n,r,c)){var p=n.edge(r,c).cutvalue;s+=h?-p:p}}}),s}function xn(n,e){arguments.length<2&&(e=n.nodes()[0]),Xn(n,{},1,e)}function Xn(n,e,r,t,i){var a=r,o=n.node(t);return e[t]=!0,f.Z(n.neighbors(t),function(s){m.Z(e,s)||(r=Xn(n,e,r,s,t))}),o.low=a,o.lim=r++,i?o.parent=i:delete o.parent,r}function Hn(n){return pn(n.edges(),function(e){return n.edge(e).cutvalue<0})}function Jn(n,e,r){var t=r.v,i=r.w;e.hasEdge(t,i)||(t=r.w,i=r.v);var a=n.node(t),o=n.node(i),s=a,u=!1;a.lim>o.lim&&(s=o,u=!0);var d=an.Z(e.edges(),function(c){return u===Qn(0,n.node(c.v),s)&&u!==Qn(0,n.node(c.w),s)});return Zn(d,function(c){return tn(e,c)})}function $n(n,e,r,t){n.removeEdge(r.v,r.w),n.setEdge(t.v,t.w,{}),xn(n),En(n,e),function Fr(n,e){var r=pn(n.nodes(),function(i){return!e.node(i).parent}),t=function Sr(n,e){return Gn(n,e,"pre")}(n,r);t=t.slice(1),f.Z(t,function(i){var a=n.node(i).parent,o=e.edge(i,a),s=!1;o||(o=e.edge(a,i),s=!0),e.node(i).rank=e.node(a).rank+(s?o.minlen:-o.minlen)})}(n,e)}function Qn(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function Dr(n){switch(n.graph().ranker){case"network-simplex":default:!function qn(n){J(n)}(n);break;case"tight-tree":!function Ur(n){mn(n),An(n)}(n);break;case"longest-path":Wr(n)}}RegExp(gn+"(?="+gn+")|"+Ir+yr,"g"),new Error,v(1595),J.initLowLimValues=xn,J.initCutValues=En,J.calcCutValue=Kn,J.leaveEdge=Hn,J.enterEdge=Jn,J.exchangeEdges=$n;var Wr=mn;var nn=v(1412),vn=v(2510);function jr(n){var e=q(n,"root",{},"_root"),r=function zr(n){var e={};function r(t,i){var a=n.children(t);a&&a.length&&f.Z(a,function(o){r(o,i+1)}),e[t]=i}return f.Z(n.children(),function(t){r(t,1)}),e}(n),t=j(nn.Z(r))-1,i=2*t+1;n.graph().nestingRoot=e,f.Z(n.edges(),function(o){n.edge(o).minlen*=i});var a=function Vr(n){return vn.Z(n.edges(),function(e,r){return e+n.edge(r).weight},0)}(n)+1;f.Z(n.children(),function(o){ne(n,e,i,a,t,r,o)}),n.graph().nodeRankFactor=i}function ne(n,e,r,t,i,a,o){var s=n.children(o);if(s.length){var u=Pn(n,"_bt"),d=Pn(n,"_bb"),c=n.node(o);n.setParent(u,o),c.borderTop=u,n.setParent(d,o),c.borderBottom=d,f.Z(s,function(h){ne(n,e,r,t,i,a,h);var l=n.node(h),p=l.borderTop?l.borderTop:h,g=l.borderBottom?l.borderBottom:h,M=l.borderTop?t:2*t,sn=p!==g?1:i-a[o]+1;n.setEdge(u,p,{weight:M,minlen:sn,nestingEdge:!0}),n.setEdge(g,d,{weight:M,minlen:sn,nestingEdge:!0})}),n.parent(o)||n.setEdge(e,u,{weight:0,minlen:i+a[o]})}else o!==e&&n.setEdge(e,o,{weight:0,minlen:r})}var Yr=v(4258);const Jr=function Hr(n){return(0,Yr.Z)(n,5)};var nt=v(1481);var at=v(113),yn=v(7988),ot=v(7298),st=v(1177);var ft=v(6932);const vt=function ct(n,e){if(n!==e){var r=void 0!==n,t=null===n,i=n==n,a=(0,D.Z)(n),o=void 0!==e,s=null===e,u=e==e,d=(0,D.Z)(e);if(!s&&!d&&!a&&n>e||a&&o&&u&&!s&&!d||t&&o&&u||!r&&u||!i)return 1;if(!t&&!a&&!d&&n<e||d&&r&&i&&!t&&!a||s&&r&&i||!o&&i||!u)return-1}return 0},mt=function Zt(n,e,r){e=e.length?(0,yn.Z)(e,function(a){return(0,wn.Z)(a)?function(o){return(0,ot.Z)(o,1===a.length?a[0]:a)}:a}):[U.Z];var t=-1;return e=(0,yn.Z)(e,(0,ft.Z)(en.Z)),function ut(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n}((0,st.Z)(n,function(a,o,s){return{criteria:(0,yn.Z)(e,function(d){return d(a)}),index:++t,value:a}}),function(a,o){return function ht(n,e,r){for(var t=-1,i=n.criteria,a=e.criteria,o=i.length,s=r.length;++t<o;){var u=vt(i[t],a[t]);if(u)return t>=s?u:u*("desc"==r[t]?-1:1)}return n.index-e.index}(a,o,r)})};var pt=v(7965),ee=v(4810);const on=(0,pt.Z)(function(n,e){if(null==n)return[];var r=e.length;return r>1&&(0,ee.Z)(n,e[0],e[1])?e=[]:r>2&&(0,ee.Z)(e[0],e[1],e[2])&&(e=[e[0]]),mt(n,(0,at.Z)(e,1),[])});function bt(n,e){for(var r=0,t=1;t<e.length;++t)r+=gt(n,e[t-1],e[t]);return r}function gt(n,e,r){for(var t=function tt(n,e){return function et(n,e,r){for(var t=-1,i=n.length,a=e.length,o={};++t<i;)r(o,n[t],t<a?e[t]:void 0);return o}(n||[],e||[],nt.Z)}(r,w.Z(r,function(d,c){return c})),i=E.Z(w.Z(e,function(d){return on(w.Z(n.outEdges(d),function(c){return{pos:t[c.w],weight:n.edge(c).weight}}),"pos")})),a=1;a<r.length;)a<<=1;var o=2*a-1;a-=1;var s=w.Z(new Array(o),function(){return 0}),u=0;return f.Z(i.forEach(function(d){var c=d.pos+a;s[c]+=d.weight;for(var h=0;c>0;)c%2&&(h+=s[c+1]),s[c=c-1>>1]+=d.weight;u+=d.weight*h})),u}function re(n,e,r){for(var t;e.length&&(t=un(e)).i<=r;)e.pop(),n.push(t.vs),r++;return r}function te(n,e,r,t){var i=n.children(e),a=n.node(e),o=a?a.borderLeft:void 0,s=a?a.borderRight:void 0,u={};o&&(i=an.Z(i,function(g){return g!==o&&g!==s}));var d=function xt(n,e){return w.Z(e,function(r){var t=n.inEdges(r);if(t.length){var i=vn.Z(t,function(a,o){var s=n.edge(o),u=n.node(o.v);return{sum:a.sum+s.weight*u.order,weight:a.weight+s.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}return{v:r}})}(n,i);f.Z(d,function(g){if(n.children(g.v).length){var M=te(n,g.v,r,t);u[g.v]=M,m.Z(M,"barycenter")&&function Rt(n,e){V.Z(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}(g,M)}});var c=function yt(n,e){var r={};return f.Z(n,function(i,a){var o=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:a};V.Z(i.barycenter)||(o.barycenter=i.barycenter,o.weight=i.weight)}),f.Z(e.edges(),function(i){var a=r[i.v],o=r[i.w];!V.Z(a)&&!V.Z(o)&&(o.indegree++,a.out.push(r[i.w]))}),function It(n){var e=[];function r(a){return function(o){o.merged||(V.Z(o.barycenter)||V.Z(a.barycenter)||o.barycenter>=a.barycenter)&&function Lt(n,e){var r=0,t=0;n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=r/t,n.weight=t,n.i=Math.min(e.i,n.i),e.merged=!0}(a,o)}}function t(a){return function(o){o.in.push(a),0==--o.indegree&&n.push(o)}}for(;n.length;){var i=n.pop();e.push(i),f.Z(i.in.reverse(),r(i)),f.Z(i.out,t(i))}return w.Z(an.Z(e,function(a){return!a.merged}),function(a){return N.Z(a,["vs","i","barycenter","weight"])})}(an.Z(r,function(i){return!i.indegree}))}(d,r);!function Tt(n,e){f.Z(n,function(r){r.vs=E.Z(r.vs.map(function(t){return e[t]?e[t].vs:t}))})}(c,u);var h=function Nt(n,e){var r=function be(n,e){var r={lhs:[],rhs:[]};return f.Z(n,function(t){e(t)?r.lhs.push(t):r.rhs.push(t)}),r}(n,function(c){return m.Z(c,"barycenter")}),t=r.lhs,i=on(r.rhs,function(c){return-c.i}),a=[],o=0,s=0,u=0;t.sort(function Ct(n){return function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i}}(!!e)),u=re(a,i,u),f.Z(t,function(c){u+=c.vs.length,a.push(c.vs),o+=c.barycenter*c.weight,s+=c.weight,u=re(a,i,u)});var d={vs:E.Z(a)};return s&&(d.barycenter=o/s,d.weight=s),d}(c,t);if(o&&(h.vs=E.Z([o,h.vs,s]),n.predecessors(o).length)){var l=n.node(n.predecessors(o)[0]),p=n.node(n.predecessors(s)[0]);m.Z(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+p.order)/(h.weight+2),h.weight+=2}return h}function ie(n,e,r){return w.Z(e,function(t){return function Qr(n,e,r){var t=function qr(n){for(var e;n.hasNode(e=C.Z("_root")););return e}(n),i=new I.k({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(a){return n.node(a)});return f.Z(n.nodes(),function(a){var o=n.node(a),s=n.parent(a);(o.rank===e||o.minRank<=e&&e<=o.maxRank)&&(i.setNode(a),i.setParent(a,s||t),f.Z(n[r](a),function(u){var d=u.v===a?u.w:u.v,c=i.edge(d,a),h=V.Z(c)?0:c.weight;i.setEdge(d,a,{weight:n.edge(u).weight+h})}),m.Z(o,"minRank")&&i.setNode(a,{borderLeft:o.borderLeft[e],borderRight:o.borderRight[e]}))}),i}(n,t,r)})}function Pt(n,e){var r=new I.k;f.Z(n,function(t){var i=t.graph().root,a=te(t,i,r,e);f.Z(a.vs,function(o,s){t.node(o).order=s}),function $r(n,e,r){var i,t={};f.Z(r,function(a){for(var s,u,o=n.parent(a);o;){if((s=n.parent(o))?(u=t[s],t[s]=o):(u=i,i=o),u&&u!==o)return void e.setEdge(u,o);o=s}})}(t,r,a.vs)})}function ae(n,e){f.Z(e,function(r){f.Z(r,function(t,i){n.node(t).order=i})})}var oe=v(5750);var Ft=v(139),Bt=v(571);function se(n,e,r){if(e>r){var t=e;e=r,r=t}var i=n[e];i||(n[e]=i={}),i[r]=!0}function Vt(n,e,r){if(e>r){var t=e;e=r,r=t}return m.Z(n[e],r)}function $t(n){var i,e=fn(n),r=b.Z(function Ut(n,e){var r={};return vn.Z(e,function t(i,a){var o=0,s=0,u=i.length,d=un(a);return f.Z(a,function(c,h){var l=function zt(n,e){if(n.node(e).dummy)return pn(n.predecessors(e),function(r){return n.node(r).dummy})}(n,c),p=l?n.node(l).order:u;(l||c===d)&&(f.Z(a.slice(s,h+1),function(g){f.Z(n.predecessors(g),function(M){var sn=n.node(M),ue=sn.order;(ue<o||p<ue)&&(!sn.dummy||!n.node(g).dummy)&&se(r,M,g)})}),s=h+1,o=p)}),a}),r}(n,e),function jt(n,e){var r={};function t(a,o,s,u,d){var c;f.Z(y.Z(o,s),function(h){n.node(c=a[h]).dummy&&f.Z(n.predecessors(c),function(l){var p=n.node(l);p.dummy&&(p.order<u||p.order>d)&&se(r,l,c)})})}return vn.Z(e,function i(a,o){var u,s=-1,d=0;return f.Z(o,function(c,h){if("border"===n.node(c).dummy){var l=n.predecessors(c);l.length&&(u=n.node(l[0]).order,t(o,d,h,s,u),d=h,s=u)}t(o,d,o.length,u,a.length)}),o}),r}(n,e)),t={};f.Z(["u","d"],function(o){i="u"===o?e:nn.Z(e).reverse(),f.Z(["l","r"],function(s){"r"===s&&(i=w.Z(i,function(h){return nn.Z(h).reverse()}));var u=("u"===o?n.predecessors:n.successors).bind(n),d=function Gt(n,e,r,t){var i={},a={},o={};return f.Z(e,function(s){f.Z(s,function(u,d){i[u]=u,a[u]=u,o[u]=d})}),f.Z(e,function(s){var u=-1;f.Z(s,function(d){var c=t(d);if(c.length)for(var h=((c=on(c,function(M){return o[M]})).length-1)/2,l=Math.floor(h),p=Math.ceil(h);l<=p;++l){var g=c[l];a[d]===d&&u<o[g]&&!Vt(r,d,g)&&(a[g]=d,a[d]=i[d]=i[g],u=o[g])}})}),{root:i,align:a}}(0,i,r,u),c=function Yt(n,e,r,t,i){var a={},o=function Kt(n,e,r,t){var i=new I.k,a=n.graph(),o=function Qt(n,e,r){return function(t,i,a){var d,o=t.node(i),s=t.node(a),u=0;if(u+=o.width/2,m.Z(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":d=-o.width/2;break;case"r":d=o.width/2}if(d&&(u+=r?d:-d),d=0,u+=(o.dummy?e:n)/2,u+=(s.dummy?e:n)/2,u+=s.width/2,m.Z(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":d=s.width/2;break;case"r":d=-s.width/2}return d&&(u+=r?d:-d),d=0,u}}(a.nodesep,a.edgesep,t);return f.Z(e,function(s){var u;f.Z(s,function(d){var c=r[d];if(i.setNode(c),u){var h=r[u],l=i.edge(h,c);i.setEdge(h,c,Math.max(o(n,d,u),l||0))}u=d})}),i}(n,e,r,i),s=i?"borderLeft":"borderRight";function u(h,l){for(var p=o.nodes(),g=p.pop(),M={};g;)M[g]?h(g):(M[g]=!0,p.push(g),p=p.concat(l(g))),g=p.pop()}return u(function d(h){a[h]=o.inEdges(h).reduce(function(l,p){return Math.max(l,a[p.v]+o.edge(p))},0)},o.predecessors.bind(o)),u(function c(h){var l=o.outEdges(h).reduce(function(g,M){return Math.min(g,a[M.w]-o.edge(M))},Number.POSITIVE_INFINITY),p=n.node(h);l!==Number.POSITIVE_INFINITY&&p.borderType!==s&&(a[h]=Math.max(a[h],l))},o.successors.bind(o)),f.Z(t,function(h){a[h]=a[r[h]]}),a}(n,i,d.root,d.align,"r"===s);"r"===s&&(c=dn(c,function(h){return-h})),t[o+s]=c})});var a=function Xt(n,e){return Zn(nn.Z(e),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return function Dt(n,e){null==n||(0,Ft.Z)(n,(0,oe.Z)(e),Bt.Z)}(r,function(a,o){var s=function qt(n,e){return n.node(e).width}(n,o)/2;t=Math.max(a+s,t),i=Math.min(a-s,i)}),t-i})}(n,t);return function Ht(n,e){var r=nn.Z(e),t=rn(r),i=j(r);f.Z(["u","d"],function(a){f.Z(["l","r"],function(o){var d,s=a+o,u=n[s];if(u!==e){var c=nn.Z(u);(d="l"===o?t-rn(c):i-j(c))&&(n[s]=dn(u,function(h){return h+d}))}})})}(t,a),function Jt(n,e){return dn(n.ul,function(r,t){if(e)return n[e.toLowerCase()][t];var i=on(w.Z(n,t));return(i[1]+i[2])/2})}(t,n.graph().align)}function ni(n){(function ei(n){var e=fn(n),r=n.graph().ranksep,t=0;f.Z(e,function(i){var a=j(w.Z(i,function(o){return n.node(o).height}));f.Z(i,function(o){n.node(o).y=t+a/2}),t+=a+r})})(n=Rn(n)),function St(n,e){n&&(0,Nn.Z)(n,(0,oe.Z)(e))}($t(n),function(e,r){n.node(r).x=e})}function ri(n,e){var r=e&&e.debugTiming?ge:Ee;r("layout",function(){var t=r("  buildLayoutGraph",function(){return function hi(n){var e=new I.k({multigraph:!0,compound:!0}),r=Ln(n.graph());return e.setGraph(b.Z({},oi,In(r,ai),N.Z(r,si))),f.Z(n.nodes(),function(t){var i=Ln(n.node(t));e.setNode(t,$.Z(In(i,ui),di)),e.setParent(t,n.parent(t))}),f.Z(n.edges(),function(t){var i=Ln(n.edge(t));e.setEdge(t,b.Z({},ci,In(i,fi),N.Z(i,vi)))}),e}(n)});r("  runLayout",function(){!function ti(n,e){e("    makeSpaceForEdgeLabels",function(){!function li(n){var e=n.graph();e.ranksep/=2,f.Z(n.edges(),function(r){var t=n.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)})}(n)}),e("    removeSelfEdges",function(){!function yi(n){f.Z(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e,label:n.edge(e)}),n.removeEdge(e)}})}(n)}),e("    acyclic",function(){z(n)}),e("    nestingGraph.run",function(){jr(n)}),e("    rank",function(){Dr(Rn(n))}),e("    injectEdgeLabelProxies",function(){!function Zi(n){f.Z(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),i=n.node(e.w);q(n,"edge-proxy",{rank:(i.rank-t.rank)/2+t.rank,e},"_ep")}})}(n)}),e("    removeEmptyRanks",function(){!function we(n){var e=rn(w.Z(n.nodes(),function(a){return n.node(a).rank})),r=[];f.Z(n.nodes(),function(a){var o=n.node(a).rank-e;r[o]||(r[o]=[]),r[o].push(a)});var t=0,i=n.graph().nodeRankFactor;f.Z(r,function(a,o){V.Z(a)&&o%i!=0?--t:t&&f.Z(a,function(s){n.node(s).rank+=t})})}(n)}),e("    nestingGraph.cleanup",function(){!function Gr(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,f.Z(n.edges(),function(r){n.edge(r).nestingEdge&&n.removeEdge(r)})}(n)}),e("    normalizeRanks",function(){!function pe(n){var e=rn(w.Z(n.nodes(),function(r){return n.node(r).rank}));f.Z(n.nodes(),function(r){var t=n.node(r);m.Z(t,"rank")&&(t.rank-=e)})}(n)}),e("    assignRankMinMax",function(){!function mi(n){var e=0;f.Z(n.nodes(),function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=j(e))}),n.graph().maxRank=e}(n)}),e("    removeEdgeLabelProxies",function(){!function pi(n){f.Z(n.nodes(),function(e){var r=n.node(e);"edge-proxy"===r.dummy&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}(n)}),e("    normalize.run",function(){!function Ce(n){n.graph().dummyChains=[],f.Z(n.edges(),function(e){!function Te(n,e){var r=e.v,t=n.node(r).rank,i=e.w,a=n.node(i).rank,o=e.name,s=n.edge(e),u=s.labelRank;if(a!==t+1){var d,c,h;for(n.removeEdge(e),h=0,++t;t<a;++h,++t)s.points=[],d=q(n,"edge",c={width:0,height:0,edgeLabel:s,edgeObj:e,rank:t},"_d"),t===u&&(c.width=s.width,c.height=s.height,c.dummy="edge-label",c.labelpos=s.labelpos),n.setEdge(r,d,{weight:s.weight},o),0===h&&n.graph().dummyChains.push(d),r=d;n.setEdge(r,i,{weight:s.weight},o)}}(n,e)})}(n)}),e("    parentDummyChains",function(){!function Mt(n){var e=function _t(n){var e={},r=0;return f.Z(n.children(),function t(i){var a=r;f.Z(n.children(i),t),e[i]={low:a,lim:r++}}),e}(n);f.Z(n.graph().dummyChains,function(r){for(var t=n.node(r),i=t.edgeObj,a=function kt(n,e,r,t){var u,d,i=[],a=[],o=Math.min(e[r].low,e[t].low),s=Math.max(e[r].lim,e[t].lim);u=r;do{u=n.parent(u),i.push(u)}while(u&&(e[u].low>o||s>e[u].lim));for(d=u,u=t;(u=n.parent(u))!==d;)a.push(u);return{path:i.concat(a.reverse()),lca:d}}(n,e,i.v,i.w),o=a.path,s=a.lca,u=0,d=o[u],c=!0;r!==i.w;){if(t=n.node(r),c){for(;(d=o[u])!==s&&n.node(d).maxRank<t.rank;)u++;d===s&&(c=!1)}if(!c){for(;u<o.length-1&&n.node(d=o[u+1]).minRank<=t.rank;)u++;d=o[u]}n.setParent(r,d),r=n.successors(r)[0]}})}(n)}),e("    addBorderSegments",function(){!function xe(n){f.Z(n.children(),function e(r){var t=n.children(r),i=n.node(r);if(t.length&&f.Z(t,e),m.Z(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,o=i.maxRank+1;a<o;++a)kn(n,"borderLeft","_bl",r,i,a),kn(n,"borderRight","_br",r,i,a)}})}(n)}),e("    order",function(){!function Ot(n){var e=Mn(n),r=ie(n,y.Z(1,e+1),"inEdges"),t=ie(n,y.Z(e-1,-1,-1),"outEdges"),i=function Et(n){var e={},r=an.Z(n.nodes(),function(s){return!n.children(s).length}),t=j(w.Z(r,function(s){return n.node(s).rank})),i=w.Z(y.Z(t+1),function(){return[]}),o=on(r,function(s){return n.node(s).rank});return f.Z(o,function a(s){if(!m.Z(e,s)){e[s]=!0;var u=n.node(s);i[u.rank].push(s),f.Z(n.successors(s),a)}}),i}(n);ae(n,i);for(var o,a=Number.POSITIVE_INFINITY,s=0,u=0;u<4;++s,++u){Pt(s%2?r:t,s%4>=2);var d=bt(n,i=fn(n));d<a&&(u=0,o=Jr(i),a=d)}ae(n,o)}(n)}),e("    insertSelfEdges",function(){!function Ii(n){var e=fn(n);f.Z(e,function(r){var t=0;f.Z(r,function(i,a){var o=n.node(i);o.order=a+t,f.Z(o.selfEdges,function(s){q(n,"selfedge",{width:s.label.width,height:s.label.height,rank:o.rank,order:a+ ++t,e:s.e,label:s.label},"_se")}),delete o.selfEdges})})}(n)}),e("    adjustCoordinateSystem",function(){!function ye(n){var e=n.graph().rankdir.toLowerCase();("lr"===e||"rl"===e)&&_n(n)}(n)}),e("    position",function(){ni(n)}),e("    positionSelfEdges",function(){!function Li(n){f.Z(n.nodes(),function(e){var r=n.node(e);if("selfedge"===r.dummy){var t=n.node(r.e.v),i=t.x+t.width/2,a=t.y,o=r.x-i,s=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:i+2*o/3,y:a-s},{x:i+5*o/6,y:a-s},{x:i+o,y:a},{x:i+5*o/6,y:a+s},{x:i+2*o/3,y:a+s}],r.label.x=r.x,r.label.y=r.y}})}(n)}),e("    removeBorderNodes",function(){!function xi(n){f.Z(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),i=n.node(r.borderBottom),a=n.node(un(r.borderLeft)),o=n.node(un(r.borderRight));r.width=Math.abs(o.x-a.x),r.height=Math.abs(i.y-t.y),r.x=a.x+r.width/2,r.y=t.y+r.height/2}}),f.Z(n.nodes(),function(e){"border"===n.node(e).dummy&&n.removeNode(e)})}(n)}),e("    normalize.undo",function(){!function Re(n){f.Z(n.graph().dummyChains,function(e){var i,r=n.node(e),t=r.edgeLabel;for(n.setEdge(r.edgeObj,t);r.dummy;)i=n.successors(e)[0],n.removeNode(e),t.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),r=n.node(e=i)})}(n)}),e("    fixupEdgeLabelCoords",function(){!function gi(n){f.Z(n.edges(),function(e){var r=n.edge(e);if(m.Z(r,"x"))switch(("l"===r.labelpos||"r"===r.labelpos)&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}})}(n)}),e("    undoCoordinateSystem",function(){!function Ie(n){var e=n.graph().rankdir.toLowerCase();("bt"===e||"rl"===e)&&function Le(n){f.Z(n.nodes(),function(e){hn(n.node(e))}),f.Z(n.edges(),function(e){var r=n.edge(e);f.Z(r.points,hn),m.Z(r,"y")&&hn(r)})}(n),("lr"===e||"rl"===e)&&(function Ne(n){f.Z(n.nodes(),function(e){ln(n.node(e))}),f.Z(n.edges(),function(e){var r=n.edge(e);f.Z(r.points,ln),m.Z(r,"x")&&ln(r)})}(n),_n(n))}(n)}),e("    translateGraph",function(){!function wi(n){var e=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=n.graph(),o=a.marginx||0,s=a.marginy||0;function u(d){var c=d.x,h=d.y,l=d.width,p=d.height;e=Math.min(e,c-l/2),r=Math.max(r,c+l/2),t=Math.min(t,h-p/2),i=Math.max(i,h+p/2)}f.Z(n.nodes(),function(d){u(n.node(d))}),f.Z(n.edges(),function(d){var c=n.edge(d);m.Z(c,"x")&&u(c)}),e-=o,t-=s,f.Z(n.nodes(),function(d){var c=n.node(d);c.x-=e,c.y-=t}),f.Z(n.edges(),function(d){var c=n.edge(d);f.Z(c.points,function(h){h.x-=e,h.y-=t}),m.Z(c,"x")&&(c.x-=e),m.Z(c,"y")&&(c.y-=t)}),a.width=r-e+o,a.height=i-t+s}(n)}),e("    assignNodeIntersects",function(){!function bi(n){f.Z(n.edges(),function(e){var a,o,r=n.edge(e),t=n.node(e.v),i=n.node(e.w);r.points?(a=r.points[0],o=r.points[r.points.length-1]):(r.points=[],a=i,o=t),r.points.unshift(On(t,a)),r.points.push(On(i,o))})}(n)}),e("    reversePoints",function(){!function Ei(n){f.Z(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}(n)}),e("    acyclic.undo",function(){!function Z(n){f.Z(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}})}(n)})}(t,r)}),r("  updateInputGraph",function(){!function ii(n,e){f.Z(n.nodes(),function(r){var t=n.node(r),i=e.node(r);t&&(t.x=i.x,t.y=i.y,e.children(r).length&&(t.width=i.width,t.height=i.height))}),f.Z(n.edges(),function(r){var t=n.edge(r),i=e.edge(r);t.points=i.points,m.Z(i,"x")&&(t.x=i.x,t.y=i.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height}(n,t)})})}var ai=["nodesep","edgesep","ranksep","marginx","marginy"],oi={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},si=["acyclicer","ranker","rankdir","align"],ui=["width","height"],di={width:0,height:0},fi=["minlen","weight","width","height","labeloffset"],ci={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},vi=["labelpos"];function In(n,e){return dn(N.Z(n,e),Number)}function Ln(n){var e={};return f.Z(n,function(r,t){e[t.toLowerCase()]=r}),e}},1177:(Y,P,v)=>{v.d(P,{Z:()=>x});var f=v(1082),C=v(8706);const x=function m(E,w){var y=-1,I=(0,C.Z)(E)?Array(E.length):[];return(0,f.Z)(E,function(T,k,S){I[++y]=w(T,k,S)}),I}},3233:(Y,P,v)=>{v.d(P,{Z:()=>I});var f=v(7965),C=v(3093),m=v(4810),x=v(571),E=Object.prototype,w=E.hasOwnProperty;const I=(0,f.Z)(function(T,k){T=Object(T);var S=-1,R=k.length,L=R>2?k[2]:void 0;for(L&&(0,m.Z)(k[0],k[1],L)&&(R=1);++S<R;)for(var O=k[S],F=(0,x.Z)(O),A=-1,B=F.length;++A<B;){var z=F[A],K=T[z];(void 0===K||(0,C.Z)(K,E[z])&&!w.call(T,z))&&(T[z]=O[z])}return T})},6224:(Y,P,v)=>{v.d(P,{Z:()=>m});var f=v(113);const m=function C(x){return null!=x&&x.length?(0,f.Z)(x,1):[]}},2957:(Y,P,v)=>{v.d(P,{Z:()=>w});var f=v(7988),C=v(4380),m=v(1177),x=v(4177);const w=function E(y,I){return((0,x.Z)(y)?f.Z:m.Z)(y,(0,C.Z)(I,3))}},6264:(Y,P,v)=>{v.d(P,{Z:()=>Z});var f=v(7298),C=v(1481),m=v(7894),x=v(6667),E=v(1999),w=v(2168);const I=function y(b,N,$,D){if(!(0,E.Z)(b))return b;for(var X=-1,G=(N=(0,m.Z)(N,b)).length,H=G-1,W=b;null!=W&&++X<G;){var U=(0,w.Z)(N[X]),Q=$;if("__proto__"===U||"constructor"===U||"prototype"===U)return b;if(X!=H){var j=W[U];void 0===(Q=D?D(j,U,W):void 0)&&(Q=(0,E.Z)(j)?j:(0,x.Z)(N[X+1])?[]:{})}(0,C.Z)(W,U,Q),W=W[U]}return b};var S=v(9080);const L=function R(b,N){return function T(b,N,$){for(var D=-1,X=N.length,G={};++D<X;){var H=N[D],W=(0,f.Z)(b,H);$(W,H)&&I(G,(0,m.Z)(H,b),W)}return G}(b,N,function($,D){return(0,S.Z)(b,D)})};var O=v(6224),F=v(5604),A=v(8959);const Z=function B(b){return(0,A.Z)((0,F.Z)(b,void 0,O.Z),b+"")}(function(b,N){return null==b?{}:L(b,N)})},1256:(Y,P,v)=>{v.d(P,{Z:()=>k});var f=Math.ceil,C=Math.max;var E=v(4810),w=v(1605);const k=function y(S){return function(R,L,O){return O&&"number"!=typeof O&&(0,E.Z)(R,L,O)&&(L=O=void 0),R=(0,w.Z)(R),void 0===L?(L=R,R=0):L=(0,w.Z)(L),function m(S,R,L,O){for(var F=-1,A=C(f((R-S)/(L||1)),0),B=Array(A);A--;)B[O?A:++F]=S,S+=L;return B}(R,L,O=void 0===O?R<L?1:-1:(0,w.Z)(O),S)}}()},1605:(Y,P,v)=>{v.d(P,{Z:()=>K});var f=/\s/;var x=/^\s+/;const w=function E(Z){return Z&&Z.slice(0,function C(Z){for(var b=Z.length;b--&&f.test(Z.charAt(b)););return b}(Z)+1).replace(x,"")};var y=v(1999),I=v(6460),k=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,R=/^0o[0-7]+$/i,L=parseInt;var A=1/0;const K=function z(Z){return Z?(Z=function O(Z){if("number"==typeof Z)return Z;if((0,I.Z)(Z))return NaN;if((0,y.Z)(Z)){var b="function"==typeof Z.valueOf?Z.valueOf():Z;Z=(0,y.Z)(b)?b+"":b}if("string"!=typeof Z)return 0===Z?Z:+Z;Z=w(Z);var N=S.test(Z);return N||R.test(Z)?L(Z.slice(2),N?2:8):k.test(Z)?NaN:+Z}(Z))===A||Z===-A?17976931348623157e292*(Z<0?-1:1):Z==Z?Z:0:0===Z?Z:0}},8917:(Y,P,v)=>{v.d(P,{Z:()=>x});var f=v(6506),C=0;const x=function m(E){var w=++C;return(0,f.Z)(E)+w}}}]);