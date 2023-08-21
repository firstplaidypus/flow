"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[974],{2974:(Zt,ct,z)=>{z.r(ct),z.d(ct,{diagram:()=>Qt});var M=z(9678),R=z(1074);function ut(t,n){let i;if(void 0===n)for(const l of t)null!=l&&(i>l||void 0===i&&l>=l)&&(i=l);else{let l=-1;for(let a of t)null!=(a=n(a,++l,t))&&(i>a||void 0===i&&a>=a)&&(i=a)}return i}function _t(t){return t.target.depth}function ht(t,n){return t.sourceLinks.length?t.depth:n-1}function q(t,n){let i=0;if(void 0===n)for(let l of t)(l=+l)&&(i+=l);else{let l=-1;for(let a of t)(a=+n(a,++l,t))&&(i+=a)}return i}function ft(t,n){let i;if(void 0===n)for(const l of t)null!=l&&(i<l||void 0===i&&l>=l)&&(i=l);else{let l=-1;for(let a of t)null!=(a=n(a,++l,t))&&(i<a||void 0===i&&a>=a)&&(i=a)}return i}function G(t){return function(){return t}}function yt(t,n){return H(t.source,n.source)||t.index-n.index}function dt(t,n){return H(t.target,n.target)||t.index-n.index}function H(t,n){return t.y0-n.y0}function tt(t){return t.value}function wt(t){return t.index}function St(t){return t.nodes}function Lt(t){return t.links}function gt(t,n){const i=t.get(n);if(!i)throw new Error("missing: "+n);return i}function pt({nodes:t}){for(const n of t){let i=n.y0,l=i;for(const a of n.sourceLinks)a.y0=i+a.width/2,i+=a.width;for(const a of n.targetLinks)a.y1=l+a.width/2,l+=a.width}}var et=Math.PI,nt=2*et,j=1e-6,At=nt-j;function it(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function mt(){return new it}it.prototype=mt.prototype={constructor:it,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,l){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+l)},bezierCurveTo:function(t,n,i,l,a,x){this._+="C"+ +t+","+ +n+","+ +i+","+ +l+","+(this._x1=+a)+","+(this._y1=+x)},arcTo:function(t,n,i,l,a){var x=this._x1,p=this._y1,g=(i=+i)-(t=+t),s=(l=+l)-(n=+n),o=x-t,u=p-n,m=o*o+u*u;if((a=+a)<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(m>j)if(Math.abs(u*g-s*o)>j&&a){var b=i-x,d=l-p,_=g*g+s*s,E=b*b+d*d,N=Math.sqrt(_),P=Math.sqrt(m),A=a*Math.tan((et-Math.acos((_+m-E)/(2*N*P)))/2),C=A/P,I=A/N;Math.abs(C-1)>j&&(this._+="L"+(t+C*o)+","+(n+C*u)),this._+="A"+a+","+a+",0,0,"+ +(u*b>o*d)+","+(this._x1=t+I*g)+","+(this._y1=n+I*s)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,i,l,a,x){t=+t,n=+n,x=!!x;var p=(i=+i)*Math.cos(l),g=i*Math.sin(l),s=t+p,o=n+g,u=1^x,m=x?l-a:a-l;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+s+","+o:(Math.abs(this._x1-s)>j||Math.abs(this._y1-o)>j)&&(this._+="L"+s+","+o),i&&(m<0&&(m=m%nt+nt),m>At?this._+="A"+i+","+i+",0,1,"+u+","+(t-p)+","+(n-g)+"A"+i+","+i+",0,1,"+u+","+(this._x1=s)+","+(this._y1=o):m>j&&(this._+="A"+i+","+i+",0,"+ +(m>=et)+","+u+","+(this._x1=t+i*Math.cos(a))+","+(this._y1=n+i*Math.sin(a))))},rect:function(t,n,i,l){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +l+"h"+-i+"Z"},toString:function(){return this._}};const Tt=mt;var Mt=Array.prototype.slice;function kt(t){return function(){return t}}function Nt(t){return t[0]}function Ct(t){return t[1]}function Pt(t){return t.source}function It(t){return t.target}function Ot(t,n,i,l,a){t.moveTo(n,i),t.bezierCurveTo(n=(n+l)/2,i,n,a,l,a)}function Rt(t){return[t.source.x1,t.y0]}function $t(t){return[t.target.x0,t.y1]}function Bt(){return function Dt(){return function st(t){var n=Pt,i=It,l=Nt,a=Ct,x=null;function p(){var g,s=Mt.call(arguments),o=n.apply(this,s),u=i.apply(this,s);if(x||(x=g=Tt()),t(x,+l.apply(this,(s[0]=o,s)),+a.apply(this,s),+l.apply(this,(s[0]=u,s)),+a.apply(this,s)),g)return x=null,g+""||null}return p.source=function(g){return arguments.length?(n=g,p):n},p.target=function(g){return arguments.length?(i=g,p):i},p.x=function(g){return arguments.length?(l="function"==typeof g?g:kt(+g),p):l},p.y=function(g){return arguments.length?(a="function"==typeof g?g:kt(+g),p):a},p.context=function(g){return arguments.length?(x=g??null,p):x},p}(Ot)}().source(Rt).target($t)}z(1764),z(6780),z(2735);var rt=function(){var t=function(g,s,o,u){for(o=o||{},u=g.length;u--;o[g[u]]=s);return o},n=[1,9],i=[1,10],l=[1,5,10,12],a={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(s,o,u,m,b,d,_){var E=d.length-1;switch(b){case 7:const N=m.findOrCreateNode(d[E-4].trim().replaceAll('""','"')),P=m.findOrCreateNode(d[E-2].trim().replaceAll('""','"')),A=parseFloat(d[E].trim());m.addLink(N,P,A);break;case 8:case 9:case 11:this.$=d[E];break;case 10:this.$=d[E-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:i},{1:[2,6],7:11,10:[1,12]},t(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(l,[2,8]),t(l,[2,9]),{19:[1,16]},t(l,[2,11]),{1:[2,1]},{1:[2,5]},t(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:i},{15:18,16:7,17:8,18:n,20:i},{18:[1,19]},t(i,[2,3]),{12:[1,20]},t(l,[2,10]),{15:21,16:7,17:8,18:n,20:i},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(s,o){if(!o.recoverable){var u=new Error(s);throw u.hash=o,u}this.trace(s)},parse:function(s){var o=this,u=[0],m=[],b=[null],d=[],_=this.table,E="",N=0,P=0,A=2,C=1,I=d.slice.call(arguments,1),w=Object.create(this.lexer),y={yy:{}};for(var L in this.yy)Object.prototype.hasOwnProperty.call(this.yy,L)&&(y.yy[L]=this.yy[L]);w.setInput(s,y.yy),y.yy.lexer=w,y.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var B=w.yylloc;d.push(B);var Z=w.options&&w.options.ranges;function J(){var v;return"number"!=typeof(v=m.pop()||w.lex()||C)&&(v instanceof Array&&(v=(m=v).pop()),v=o.symbols_[v]||v),v}this.parseError="function"==typeof y.yy.parseError?y.yy.parseError:Object.getPrototypeOf(this).parseError;for(var S,O,T,Y,f,c,r,e={};;){if(this.defaultActions[O=u[u.length-1]]?T=this.defaultActions[O]:((null===S||typeof S>"u")&&(S=J()),T=_[O]&&_[O][S]),typeof T>"u"||!T.length||!T[0]){var k="";for(f in r=[],_[O])this.terminals_[f]&&f>A&&r.push("'"+this.terminals_[f]+"'");k=w.showPosition?"Parse error on line "+(N+1)+":\n"+w.showPosition()+"\nExpecting "+r.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(N+1)+": Unexpected "+(S==C?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(k,{text:w.match,token:this.terminals_[S]||S,line:w.yylineno,loc:B,expected:r})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+S);switch(T[0]){case 1:u.push(S),b.push(w.yytext),d.push(w.yylloc),u.push(T[1]),S=null,P=w.yyleng,E=w.yytext,N=w.yylineno,B=w.yylloc;break;case 2:if(e.$=b[b.length-(c=this.productions_[T[1]][1])],e._$={first_line:d[d.length-(c||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(c||1)].first_column,last_column:d[d.length-1].last_column},Z&&(e._$.range=[d[d.length-(c||1)].range[0],d[d.length-1].range[1]]),typeof(Y=this.performAction.apply(e,[E,P,N,y.yy,T[1],b,d].concat(I)))<"u")return Y;c&&(u=u.slice(0,-1*c*2),b=b.slice(0,-1*c),d=d.slice(0,-1*c)),u.push(this.productions_[T[1]][0]),b.push(e.$),d.push(e._$),u.push(_[u[u.length-2]][u[u.length-1]]);break;case 3:return!0}}return!0}};function p(){this.yy={}}return a.lexer={EOF:1,parseError:function(o,u){if(!this.yy.parser)throw new Error(o);this.yy.parser.parseError(o,u)},setInput:function(s,o){return this.yy=o||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];return this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s,s.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var o=s.length,u=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===m.length?this.yylloc.first_column:0)+m[m.length-u.length].length-u[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),o=new Array(s.length+1).join("-");return s+this.upcomingInput()+"\n"+o+"^"},test_match:function(s,o){var u,m,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),(m=s[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],u=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var d in b)this[d]=b[d];return!1}return!1},next:function(){if(this.done)return this.EOF;var s,o,u,m;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),d=0;d<b.length;d++)if((u=this._input.match(this.rules[b[d]]))&&(!o||u[0].length>o[0].length)){if(o=u,m=d,this.options.backtrack_lexer){if(!1!==(s=this.test_match(u,b[d])))return s;if(this._backtrack){o=!1;continue}return!1}if(!this.options.flex)break}return o?!1!==(s=this.test_match(o,b[m]))&&s:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return(o=this.conditionStack.length-1-Math.abs(o||0))>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{easy_keword_rules:!0},performAction:function(o,u,m,b){switch(m){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/,/^(?:$)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:(\u002C))/,/^(?:(\u0022))/,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/,/^(?:(\u0022)(?!(\u0022)))/,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}},p.prototype=a,a.Parser=p,new p}();rt.parser=rt;const K=rt;let X=[],Q=[],$={};class Ft{constructor(n,i,l=0){this.source=n,this.target=i,this.value=l}}class Vt{constructor(n){this.ID=n}}const Wt={nodesMap:$,getConfig:()=>(0,M.c)().sankey,getNodes:()=>Q,getLinks:()=>X,getGraph:()=>({nodes:Q.map(t=>({id:t.ID})),links:X.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),addLink:(t,n,i)=>{X.push(new Ft(t,n,i))},findOrCreateNode:t=>(t=M.e.sanitizeText(t,(0,M.c)()),$[t]||($[t]=new Vt(t),Q.push($[t])),$[t]),getAccTitle:M.g,setAccTitle:M.s,getAccDescription:M.a,setAccDescription:M.b,getDiagramTitle:M.t,setDiagramTitle:M.r,clear:()=>{X=[],Q=[],$={},(0,M.v)()}},ot=class{static next(t){return new ot(t+ ++ot.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}};let lt=ot;lt.count=0;const Gt={left:function xt(t){return t.depth},right:function vt(t,n){return n-1-t.height},center:function bt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?ut(t.sourceLinks,_t)-1:0},justify:ht},Ht={draw:function(t,n,i,l){const{securityLevel:a,sankey:x}=(0,M.c)(),p=M.H.sankey;let g;"sandbox"===a&&(g=(0,R.Ys)("#i"+n));const s=(0,R.Ys)("sandbox"===a?g.nodes()[0].contentDocument.body:"body"),o="sandbox"===a?s.select(`[id="${n}"]`):(0,R.Ys)(`[id="${n}"]`),u=x?.width||p.width,m=x?.height||p.width,d=x?.nodeAlignment||p.nodeAlignment;(0,M.i)(o,m,u,x?.useMaxWidth||p.useMaxWidth);const _=l.db.getGraph(),E=Gt[d];(function Et(){let p,o,u,t=0,n=0,i=1,l=1,a=24,x=8,g=wt,s=ht,m=St,b=Lt,d=6;function _(){const e={nodes:m.apply(null,arguments),links:b.apply(null,arguments)};return E(e),N(e),P(e),A(e),w(e),pt(e),e}function E({nodes:e,links:f}){for(const[h,r]of e.entries())r.index=h,r.sourceLinks=[],r.targetLinks=[];const c=new Map(e.map((h,r)=>[g(h,r,e),h]));for(const[h,r]of f.entries()){r.index=h;let{source:k,target:v}=r;"object"!=typeof k&&(k=r.source=gt(c,k)),"object"!=typeof v&&(v=r.target=gt(c,v)),k.sourceLinks.push(r),v.targetLinks.push(r)}if(null!=u)for(const{sourceLinks:h,targetLinks:r}of e)h.sort(u),r.sort(u)}function N({nodes:e}){for(const f of e)f.value=void 0===f.fixedValue?Math.max(q(f.sourceLinks,tt),q(f.targetLinks,tt)):f.fixedValue}function P({nodes:e}){const f=e.length;let c=new Set(e),h=new Set,r=0;for(;c.size;){for(const k of c){k.depth=r;for(const{target:v}of k.sourceLinks)h.add(v)}if(++r>f)throw new Error("circular link");c=h,h=new Set}}function A({nodes:e}){const f=e.length;let c=new Set(e),h=new Set,r=0;for(;c.size;){for(const k of c){k.height=r;for(const{source:v}of k.targetLinks)h.add(v)}if(++r>f)throw new Error("circular link");c=h,h=new Set}}function w(e){const f=function C({nodes:e}){const f=ft(e,r=>r.depth)+1,c=(i-t-a)/(f-1),h=new Array(f);for(const r of e){const k=Math.max(0,Math.min(f-1,Math.floor(s.call(null,r,f))));r.layer=k,r.x0=t+k*c,r.x1=r.x0+a,h[k]?h[k].push(r):h[k]=[r]}if(o)for(const r of h)r.sort(o);return h}(e);p=Math.min(x,(l-n)/(ft(f,c=>c.length)-1)),function I(e){const f=ut(e,c=>(l-n-(c.length-1)*p)/q(c,tt));for(const c of e){let h=n;for(const r of c){r.y0=h,r.y1=h+r.value*f,h=r.y1+p;for(const k of r.sourceLinks)k.width=k.value*f}h=(l-h+p)/(c.length+1);for(let r=0;r<c.length;++r){const k=c[r];k.y0+=h*(r+1),k.y1+=h*(r+1)}O(c)}}(f);for(let c=0;c<d;++c){const h=Math.pow(.99,c),r=Math.max(1-h,(c+1)/d);L(f,h,r),y(f,h,r)}}function y(e,f,c){for(let h=1,r=e.length;h<r;++h){const k=e[h];for(const v of k){let F=0,D=0;for(const{source:V,value:at}of v.targetLinks){let W=at*(v.layer-V.layer);F+=T(V,v)*W,D+=W}if(!(D>0))continue;let U=(F/D-v.y0)*f;v.y0+=U,v.y1+=U,S(v)}void 0===o&&k.sort(H),B(k,c)}}function L(e,f,c){for(let r=e.length-2;r>=0;--r){const k=e[r];for(const v of k){let F=0,D=0;for(const{target:V,value:at}of v.sourceLinks){let W=at*(V.layer-v.layer);F+=Y(v,V)*W,D+=W}if(!(D>0))continue;let U=(F/D-v.y0)*f;v.y0+=U,v.y1+=U,S(v)}void 0===o&&k.sort(H),B(k,c)}}function B(e,f){const c=e.length>>1,h=e[c];J(e,h.y0-p,c-1,f),Z(e,h.y1+p,c+1,f),J(e,l,e.length-1,f),Z(e,n,0,f)}function Z(e,f,c,h){for(;c<e.length;++c){const r=e[c],k=(f-r.y0)*h;k>1e-6&&(r.y0+=k,r.y1+=k),f=r.y1+p}}function J(e,f,c,h){for(;c>=0;--c){const r=e[c],k=(r.y1-f)*h;k>1e-6&&(r.y0-=k,r.y1-=k),f=r.y0-p}}function S({sourceLinks:e,targetLinks:f}){if(void 0===u){for(const{source:{sourceLinks:c}}of f)c.sort(dt);for(const{target:{targetLinks:c}}of e)c.sort(yt)}}function O(e){if(void 0===u)for(const{sourceLinks:f,targetLinks:c}of e)f.sort(dt),c.sort(yt)}function T(e,f){let c=e.y0-(e.sourceLinks.length-1)*p/2;for(const{target:h,width:r}of e.sourceLinks){if(h===f)break;c+=r+p}for(const{source:h,width:r}of f.targetLinks){if(h===e)break;c-=r}return c}function Y(e,f){let c=f.y0-(f.targetLinks.length-1)*p/2;for(const{source:h,width:r}of f.targetLinks){if(h===e)break;c+=r+p}for(const{target:h,width:r}of e.sourceLinks){if(h===f)break;c-=r}return c}return _.update=function(e){return pt(e),e},_.nodeId=function(e){return arguments.length?(g="function"==typeof e?e:G(e),_):g},_.nodeAlign=function(e){return arguments.length?(s="function"==typeof e?e:G(e),_):s},_.nodeSort=function(e){return arguments.length?(o=e,_):o},_.nodeWidth=function(e){return arguments.length?(a=+e,_):a},_.nodePadding=function(e){return arguments.length?(x=p=+e,_):x},_.nodes=function(e){return arguments.length?(m="function"==typeof e?e:G(e),_):m},_.links=function(e){return arguments.length?(b="function"==typeof e?e:G(e),_):b},_.linkSort=function(e){return arguments.length?(u=e,_):u},_.size=function(e){return arguments.length?(t=n=0,i=+e[0],l=+e[1],_):[i-t,l-n]},_.extent=function(e){return arguments.length?(t=+e[0][0],i=+e[1][0],n=+e[0][1],l=+e[1][1],_):[[t,n],[i,l]]},_.iterations=function(e){return arguments.length?(d=+e,_):d},_})().nodeId(y=>y.id).nodeWidth(10).nodePadding(10).nodeAlign(E).extent([[0,0],[u,m]])(_);const A=(0,R.PKp)(R.K2I);o.append("g").attr("class","nodes").selectAll(".node").data(_.nodes).join("g").attr("class","node").attr("id",y=>(y.uid=lt.next("node-")).id).attr("transform",function(y){return"translate("+y.x0+","+y.y0+")"}).attr("x",y=>y.x0).attr("y",y=>y.y0).append("rect").attr("height",y=>y.y1-y.y0).attr("width",y=>y.x1-y.x0).attr("fill",y=>A(y.id)),o.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(_.nodes).join("text").attr("x",y=>y.x0<u/2?y.x1+6:y.x0-6).attr("y",y=>(y.y1+y.y0)/2).attr("dy","0.35em").attr("text-anchor",y=>y.x0<u/2?"start":"end").text(y=>y.id);const C=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(_.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),I=x?.linkColor||"gradient";if("gradient"===I){const y=C.append("linearGradient").attr("id",L=>(L.uid=lt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",L=>L.source.x1).attr("x2",L=>L.target.x0);y.append("stop").attr("offset","0%").attr("stop-color",L=>A(L.source.id)),y.append("stop").attr("offset","100%").attr("stop-color",L=>A(L.target.id))}let w;switch(I){case"gradient":w=y=>y.uid;break;case"source":w=y=>A(y.source.id);break;case"target":w=y=>A(y.target.id);break;default:w=I}C.append("path").attr("d",Bt()).attr("stroke",w).attr("stroke-width",y=>Math.max(1,y.width))}},Xt=K.parse.bind(K);K.parse=t=>Xt((t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim())(t));const Qt={parser:K,db:Wt,renderer:Ht}}}]);