"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[813],{8813:(Xt,st,P)=>{P.r(st),P.d(st,{diagram:()=>Ht});var g=P(7036),pt=P(8814),G=P(5066),_t=P(1065);const T=[];for(let t=0;t<256;++t)T.push((t+256).toString(16).slice(1));const Et=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,xt=function kt(t){if(!function mt(t){return"string"==typeof t&&Et.test(t)}(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function Tt(t,e,r,u){switch(t){case 0:return e&r^~e&u;case 1:case 3:return e^r^u;case 2:return e&r^e&u^r&u}}function $(t,e){return t<<e|t>>>32-e}const Mt=function Nt(t,e,r){function u(l,p,f,o){var h;if("string"==typeof l&&(l=function Rt(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(l)),"string"==typeof p&&(p=xt(p)),16!==(null===(h=p)||void 0===h?void 0:h.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let _=new Uint8Array(16+l.length);if(_.set(p),_.set(l,p.length),_=r(_),_[6]=15&_[6]|e,_[8]=63&_[8]|128,f){o=o||0;for(let m=0;m<16;++m)f[o+m]=_[m];return f}return function ot(t,e=0){return(T[t[e+0]]+T[t[e+1]]+T[t[e+2]]+T[t[e+3]]+"-"+T[t[e+4]]+T[t[e+5]]+"-"+T[t[e+6]]+T[t[e+7]]+"-"+T[t[e+8]]+T[t[e+9]]+"-"+T[t[e+10]]+T[t[e+11]]+T[t[e+12]]+T[t[e+13]]+T[t[e+14]]+T[t[e+15]]).toLowerCase()}(_)}try{u.name=t}catch{}return u.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",u.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",u}("v5",80,function At(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){const f=unescape(encodeURIComponent(t));t=[];for(let o=0;o<f.length;++o)t.push(f.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const l=Math.ceil((t.length/4+2)/16),p=new Array(l);for(let f=0;f<l;++f){const o=new Uint32Array(16);for(let h=0;h<16;++h)o[h]=t[64*f+4*h]<<24|t[64*f+4*h+1]<<16|t[64*f+4*h+2]<<8|t[64*f+4*h+3];p[f]=o}p[l-1][14]=8*(t.length-1)/Math.pow(2,32),p[l-1][14]=Math.floor(p[l-1][14]),p[l-1][15]=8*(t.length-1)&4294967295;for(let f=0;f<l;++f){const o=new Uint32Array(80);for(let y=0;y<16;++y)o[y]=p[f][y];for(let y=16;y<80;++y)o[y]=$(o[y-3]^o[y-8]^o[y-14]^o[y-16],1);let h=r[0],_=r[1],m=r[2],k=r[3],R=r[4];for(let y=0;y<80;++y){const A=Math.floor(y/20),I=$(h,5)+Tt(A,_,m,k)+R+e[A]+o[y]>>>0;R=k,k=m,m=$(_,30)>>>0,_=h,h=I}r[0]=r[0]+h>>>0,r[1]=r[1]+_>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+k>>>0,r[4]=r[4]+R>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]});P(1764),P(6780),P(2735);var tt=function(){var t=function(w,a,n,c){for(n=n||{},c=w.length;c--;n[w[c]]=a);return n},e=[6,8,10,20,22,24,26,27,28],r=[1,10],u=[1,11],l=[1,12],p=[1,13],f=[1,14],o=[1,15],h=[1,21],_=[1,22],m=[1,23],k=[1,24],R=[1,25],y=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],A=[1,34],I=[27,28,46,47],U=[41,42,43,44,45],H=[17,34],Y=[1,54],M=[1,53],v=[17,34,36,38],O={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:function(a,n,c,d,E,i,Q){var s=i.length-1;switch(E){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:i[s-1].push(i[s]),this.$=i[s-1];break;case 4:case 5:case 19:case 43:case 27:case 28:case 31:this.$=i[s];break;case 8:d.addEntity(i[s-4]),d.addEntity(i[s-2]),d.addRelationship(i[s-4],i[s],i[s-2],i[s-3]);break;case 9:d.addEntity(i[s-3]),d.addAttributes(i[s-3],i[s-1]);break;case 10:d.addEntity(i[s-2]);break;case 11:d.addEntity(i[s]);break;case 12:d.addEntity(i[s-6],i[s-4]),d.addAttributes(i[s-6],i[s-1]);break;case 13:d.addEntity(i[s-5],i[s-3]);break;case 14:d.addEntity(i[s-3],i[s-1]);break;case 15:case 16:this.$=i[s].trim(),d.setAccTitle(this.$);break;case 17:case 18:this.$=i[s].trim(),d.setAccDescription(this.$);break;case 20:case 41:case 42:case 32:this.$=i[s].replace(/"/g,"");break;case 21:case 29:this.$=[i[s]];break;case 22:i[s].push(i[s-1]),this.$=i[s];break;case 23:this.$={attributeType:i[s-1],attributeName:i[s]};break;case 24:this.$={attributeType:i[s-2],attributeName:i[s-1],attributeKeyTypeList:i[s]};break;case 25:this.$={attributeType:i[s-2],attributeName:i[s-1],attributeComment:i[s]};break;case 26:this.$={attributeType:i[s-3],attributeName:i[s-2],attributeKeyTypeList:i[s-1],attributeComment:i[s]};break;case 30:i[s-2].push(i[s]),this.$=i[s-2];break;case 33:this.$={cardA:i[s],relType:i[s-1],cardB:i[s-2]};break;case 34:this.$=d.Cardinality.ZERO_OR_ONE;break;case 35:this.$=d.Cardinality.ZERO_OR_MORE;break;case 36:this.$=d.Cardinality.ONE_OR_MORE;break;case 37:this.$=d.Cardinality.ONLY_ONE;break;case 38:this.$=d.Cardinality.MD_PARENT;break;case 39:this.$=d.Identification.NON_IDENTIFYING;break;case 40:this.$=d.Identification.IDENTIFYING}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:u,24:l,26:p,27:f,28:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:u,24:l,26:p,27:f,28:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:h,42:_,43:m,44:k,45:R}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(y,[2,19]),t(y,[2,20]),t(e,[2,4]),{11:29,27:f,28:o},{16:30,17:[1,31],29:32,30:33,34:A},{11:35,27:f,28:o},{40:36,46:[1,37],47:[1,38]},t(I,[2,34]),t(I,[2,35]),t(I,[2,36]),t(I,[2,37]),t(I,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:A},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:h,42:_,43:m,44:k,45:R},t(U,[2,39]),t(U,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(H,[2,23],{32:50,33:51,35:52,37:Y,38:M}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(H,[2,24],{33:56,36:[1,57],38:M}),t(H,[2,25]),t(v,[2,29]),t(H,[2,32]),t(v,[2,31]),{16:58,17:[1,59],29:32,30:33,34:A},t(H,[2,26]),{35:60,37:Y},{17:[1,61]},t(e,[2,13]),t(v,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:function(a,n){if(!n.recoverable){var c=new Error(a);throw c.hash=n,c}this.trace(a)},parse:function(a){var n=this,c=[0],d=[],E=[null],i=[],Q=this.table,s="",j=0,ut=0,Kt=2,ft=1,Vt=i.slice.call(arguments,1),N=Object.create(this.lexer),K={yy:{}};for(var rt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,rt)&&(K.yy[rt]=this.yy[rt]);N.setInput(a,K.yy),K.yy.lexer=N,K.yy.parser=this,typeof N.yylloc>"u"&&(N.yylloc={});var it=N.yylloc;i.push(it);var zt=N.options&&N.options.ranges;function Gt(){var F;return"number"!=typeof(F=d.pop()||N.lex()||ft)&&(F instanceof Array&&(F=(d=F).pop()),F=n.symbols_[F]||F),F}this.parseError="function"==typeof K.yy.parseError?K.yy.parseError:Object.getPrototypeOf(this).parseError;for(var S,V,D,at,J,Z,q,z={};;){if(this.defaultActions[V=c[c.length-1]]?D=this.defaultActions[V]:((null===S||typeof S>"u")&&(S=Gt()),D=Q[V]&&Q[V][S]),typeof D>"u"||!D.length||!D[0]){var nt="";for(J in q=[],Q[V])this.terminals_[J]&&J>Kt&&q.push("'"+this.terminals_[J]+"'");nt=N.showPosition?"Parse error on line "+(j+1)+":\n"+N.showPosition()+"\nExpecting "+q.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(j+1)+": Unexpected "+(S==ft?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(nt,{text:N.match,token:this.terminals_[S]||S,line:N.yylineno,loc:it,expected:q})}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+V+", token: "+S);switch(D[0]){case 1:c.push(S),E.push(N.yytext),i.push(N.yylloc),c.push(D[1]),S=null,ut=N.yyleng,s=N.yytext,j=N.yylineno,it=N.yylloc;break;case 2:if(z.$=E[E.length-(Z=this.productions_[D[1]][1])],z._$={first_line:i[i.length-(Z||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(Z||1)].first_column,last_column:i[i.length-1].last_column},zt&&(z._$.range=[i[i.length-(Z||1)].range[0],i[i.length-1].range[1]]),typeof(at=this.performAction.apply(z,[s,ut,j,K.yy,D[1],E,i].concat(Vt)))<"u")return at;Z&&(c=c.slice(0,-1*Z*2),E=E.slice(0,-1*Z),i=i.slice(0,-1*Z)),c.push(this.productions_[D[1]][0]),E.push(z.$),i.push(z._$),c.push(Q[c[c.length-2]][c[c.length-1]]);break;case 3:return!0}}return!0}};function C(){this.yy={}}return O.lexer={EOF:1,parseError:function(n,c){if(!this.yy.parser)throw new Error(n);this.yy.parser.parseError(n,c)},setInput:function(a,n){return this.yy=n||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];return this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a,a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var n=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),n=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+n+"^"},test_match:function(a,n){var c,d,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),(d=a[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var i in E)this[i]=E[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var a,n,c,d;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),i=0;i<E.length;i++)if((c=this._input.match(this.rules[E[i]]))&&(!n||c[0].length>n[0].length)){if(n=c,d=i,this.options.backtrack_lexer){if(!1!==(a=this.test_match(c,E[i])))return a;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(a=this.test_match(n,E[d]))&&a:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,c,d,E){switch(d){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:case 15:case 20:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 16:return 37;case 17:case 18:return 34;case 19:return 38;case 21:return this.popState(),17;case 22:case 54:return c.yytext[0];case 23:return 18;case 24:return 19;case 25:case 29:case 30:case 43:return 41;case 26:case 27:case 28:case 36:case 38:case 45:return 43;case 31:case 32:case 33:case 34:case 35:case 37:case 44:return 42;case 39:case 40:case 41:case 42:return 44;case 46:return 45;case 47:case 50:case 51:case 52:return 46;case 48:case 49:return 47;case 53:return 27;case 55:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}},C.prototype=O,O.Parser=C,new C}();tt.parser=tt;const vt=tt;let W={},et=[];const lt=function(t,e){return void 0===W[t]?(W[t]={attributes:[],alias:e},g.l.info("Added new entity :",t)):W[t]&&!W[t].alias&&e&&(W[t].alias=e,g.l.info(`Add alias '${e}' to entity '${t}'`)),W[t]},It={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},getConfig:()=>(0,g.c)().er,addEntity:lt,addAttributes:function(t,e){let u,r=lt(t);for(u=e.length-1;u>=0;u--)r.attributes.push(e[u]),g.l.debug("Added attribute ",e[u].attributeName)},getEntities:()=>W,addRelationship:function(t,e,r,u){let l={entityA:t,roleA:e,entityB:r,relSpec:u};et.push(l),g.l.debug("Added new relationship :",l)},getRelationships:()=>et,clear:function(){W={},et=[],(0,g.t)()},setAccTitle:g.s,getAccTitle:g.g,setAccDescription:g.b,getAccDescription:g.a,setDiagramTitle:g.q,getDiagramTitle:g.r},L={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},B_ERMarkers=L,Dt=/[^\dA-Za-z](\W)*/g;let x={},X=new Map;const ct=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")};let ht=0;const Wt="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function dt(t=""){return t.length>0?`${t}-`:""}const Ht={parser:vt,db:It,renderer:{setConf:function(t){const e=Object.keys(t);for(const r of e)x[r]=t[r]},draw:function(t,e,r,u){x=(0,g.c)().er,g.l.info("Drawing ER diagram");const l=(0,g.c)().securityLevel;let p;"sandbox"===l&&(p=(0,G.Ys)("#i"+e));const o=(0,G.Ys)("sandbox"===l?p.nodes()[0].contentDocument.body:"body").select(`[id='${e}']`);let h;(function(t,e){let r;t.append("defs").append("marker").attr("id",L.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",L.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",L.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",L.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",L.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",L.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",L.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")})(o,x),h=new pt.k({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:x.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const _=function(t,e,r){let l;return Object.keys(e).forEach(function(p){const f=function Ut(t="",e=""){const r=t.replace(Dt,"");return`${dt(e)}${dt(r)}${Mt(t,Wt)}`}(p,"entity");X.set(p,f);const o=t.append("g").attr("id",f);l=void 0===l?f:l;const h="text-"+f,_=o.append("text").classed("er entityLabel",!0).attr("id",h).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,g.c)().fontFamily).style("font-size",x.fontSize+"px").text(e[p].alias??p),{width:m,height:k}=((t,e,r)=>{const u=x.entityPadding/3,l=x.entityPadding/3,p=.85*x.fontSize,f=e.node().getBBox(),o=[];let h=!1,_=!1,m=0,k=0,R=0,y=0,A=f.height+2*u,I=1;r.forEach(M=>{void 0!==M.attributeKeyTypeList&&M.attributeKeyTypeList.length>0&&(h=!0),void 0!==M.attributeComment&&(_=!0)}),r.forEach(M=>{const v=`${e.node().id}-attr-${I}`;let O=0;const b=(0,g.v)(M.attributeType),C=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(b),w=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(M.attributeName),a={};a.tn=C,a.nn=w;const n=C.node().getBBox(),c=w.node().getBBox();if(m=Math.max(m,n.width),k=Math.max(k,c.width),O=Math.max(n.height,c.height),h){const d=void 0!==M.attributeKeyTypeList?M.attributeKeyTypeList.join(","):"",E=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(d);a.kn=E;const i=E.node().getBBox();R=Math.max(R,i.width),O=Math.max(O,i.height)}if(_){const d=t.append("text").classed("er entityLabel",!0).attr("id",`${v}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(M.attributeComment||"");a.cn=d;const E=d.node().getBBox();y=Math.max(y,E.width),O=Math.max(O,E.height)}a.height=O,o.push(a),A+=O+2*u,I+=1});let U=4;h&&(U+=2),_&&(U+=2);const H=m+k+R+y,Y={width:Math.max(x.minEntityWidth,Math.max(f.width+2*x.entityPadding,H+l*U)),height:r.length>0?A:Math.max(x.minEntityHeight,f.height+2*x.entityPadding)};if(r.length>0){const M=Math.max(0,(Y.width-H-l*U)/(U/2));e.attr("transform","translate("+Y.width/2+","+(u+f.height/2)+")");let v=f.height+2*u,O="attributeBoxOdd";o.forEach(b=>{const C=v+u+b.height/2;b.tn.attr("transform","translate("+l+","+C+")");const w=t.insert("rect","#"+b.tn.node().id).classed(`er ${O}`,!0).attr("x",0).attr("y",v).attr("width",m+2*l+M).attr("height",b.height+2*u),a=parseFloat(w.attr("x"))+parseFloat(w.attr("width"));b.nn.attr("transform","translate("+(a+l)+","+C+")");const n=t.insert("rect","#"+b.nn.node().id).classed(`er ${O}`,!0).attr("x",a).attr("y",v).attr("width",k+2*l+M).attr("height",b.height+2*u);let c=parseFloat(n.attr("x"))+parseFloat(n.attr("width"));if(h){b.kn.attr("transform","translate("+(c+l)+","+C+")");const d=t.insert("rect","#"+b.kn.node().id).classed(`er ${O}`,!0).attr("x",c).attr("y",v).attr("width",R+2*l+M).attr("height",b.height+2*u);c=parseFloat(d.attr("x"))+parseFloat(d.attr("width"))}_&&(b.cn.attr("transform","translate("+(c+l)+","+C+")"),t.insert("rect","#"+b.cn.node().id).classed(`er ${O}`,"true").attr("x",c).attr("y",v).attr("width",y+2*l+M).attr("height",b.height+2*u)),v+=b.height+2*u,O="attributeBoxOdd"===O?"attributeBoxEven":"attributeBoxOdd"})}else Y.height=Math.max(x.minEntityHeight,A),e.attr("transform","translate("+Y.width/2+","+Y.height/2+")");return Y})(o,_,e[p].attributes),y=o.insert("rect","#"+h).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",m).attr("height",k).node().getBBox();r.setNode(f,{width:y.width,height:y.height,shape:"rect",id:f})}),l}(o,u.db.getEntities(),h),m=function(t,e){return t.forEach(function(r){e.setEdge(X.get(r.entityA),X.get(r.entityB),{relationship:r},ct(r))}),t}(u.db.getRelationships(),h);(0,_t.bK)(h),function(t,e){e.nodes().forEach(function(r){void 0!==r&&void 0!==e.node(r)&&t.select("#"+r).attr("transform","translate("+(e.node(r).x-e.node(r).width/2)+","+(e.node(r).y-e.node(r).height/2)+" )")})}(o,h),m.forEach(function(I){!function(t,e,r,u,l){ht++;const p=r.edge(X.get(e.entityA),X.get(e.entityB),ct(e)),f=(0,G.jvg)().x(function(A){return A.x}).y(function(A){return A.y}).curve(G.$0Z),o=t.insert("path","#"+u).classed("er relationshipLine",!0).attr("d",f(p.points)).style("stroke",x.stroke).style("fill","none");e.relSpec.relType===l.db.Identification.NON_IDENTIFYING&&o.attr("stroke-dasharray","8,8");let h="";switch(x.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),e.relSpec.cardA){case l.db.Cardinality.ZERO_OR_ONE:o.attr("marker-end","url("+h+"#"+B_ERMarkers.ZERO_OR_ONE_END+")");break;case l.db.Cardinality.ZERO_OR_MORE:o.attr("marker-end","url("+h+"#"+B_ERMarkers.ZERO_OR_MORE_END+")");break;case l.db.Cardinality.ONE_OR_MORE:o.attr("marker-end","url("+h+"#"+B_ERMarkers.ONE_OR_MORE_END+")");break;case l.db.Cardinality.ONLY_ONE:o.attr("marker-end","url("+h+"#"+B_ERMarkers.ONLY_ONE_END+")");break;case l.db.Cardinality.MD_PARENT:o.attr("marker-end","url("+h+"#"+B_ERMarkers.MD_PARENT_END+")")}switch(e.relSpec.cardB){case l.db.Cardinality.ZERO_OR_ONE:o.attr("marker-start","url("+h+"#"+B_ERMarkers.ZERO_OR_ONE_START+")");break;case l.db.Cardinality.ZERO_OR_MORE:o.attr("marker-start","url("+h+"#"+B_ERMarkers.ZERO_OR_MORE_START+")");break;case l.db.Cardinality.ONE_OR_MORE:o.attr("marker-start","url("+h+"#"+B_ERMarkers.ONE_OR_MORE_START+")");break;case l.db.Cardinality.ONLY_ONE:o.attr("marker-start","url("+h+"#"+B_ERMarkers.ONLY_ONE_START+")");break;case l.db.Cardinality.MD_PARENT:o.attr("marker-start","url("+h+"#"+B_ERMarkers.MD_PARENT_START+")")}const _=o.node().getTotalLength(),m=o.node().getPointAtLength(.5*_),k="rel"+ht,y=t.append("text").classed("er relationshipLabel",!0).attr("id",k).attr("x",m.x).attr("y",m.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,g.c)().fontFamily).style("font-size",x.fontSize+"px").text(e.roleA).node().getBBox();t.insert("rect","#"+k).classed("er relationshipLabelBox",!0).attr("x",m.x-y.width/2).attr("y",m.y-y.height/2).attr("width",y.width).attr("height",y.height)}(o,I,h,_,u)});const k=x.diagramPadding;g.u.insertTitle(o,"entityTitleText",x.titleTopMargin,u.db.getDiagramTitle());const R=o.node().getBBox(),y=R.width+2*k,A=R.height+2*k;(0,g.i)(o,A,y,x.useMaxWidth),o.attr("viewBox",`${R.x-k} ${R.y-k} ${y} ${A}`)}},styles:t=>`\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxOdd {\n    fill: ${t.attributeBackgroundColorOdd};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxEven {\n    fill:  ${t.attributeBackgroundColorEven};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${t.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${t.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ${t.lineColor};\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  \n`}}}]);