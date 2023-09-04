"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[537],{6537:(qt,ht,Z)=>{Z.r(ht),Z.d(ht,{diagram:()=>Xt});var g=Z(4147),mt=Z(8814),Q=Z(1074),kt=Z(1065);const T=[];for(let t=0;t<256;++t)T.push((t+256).toString(16).slice(1));const xt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Nt=function bt(t){if(!function Rt(t){return"string"==typeof t&&xt.test(t)}(t))throw TypeError("Invalid UUID");let r;const e=new Uint8Array(16);return e[0]=(r=parseInt(t.slice(0,8),16))>>>24,e[1]=r>>>16&255,e[2]=r>>>8&255,e[3]=255&r,e[4]=(r=parseInt(t.slice(9,13),16))>>>8,e[5]=255&r,e[6]=(r=parseInt(t.slice(14,18),16))>>>8,e[7]=255&r,e[8]=(r=parseInt(t.slice(19,23),16))>>>8,e[9]=255&r,e[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,e[11]=r/4294967296&255,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=255&r,e};function Dt(t,r,e,n){switch(t){case 0:return r&e^~r&n;case 1:case 3:return r^e^n;case 2:return r&e^r&n^e&n}}function it(t,r){return t<<r|t>>>32-r}const It=function Mt(t,r,e){function n(s,p,f,o){var c;if("string"==typeof s&&(s=function Tt(t){t=unescape(encodeURIComponent(t));const r=[];for(let e=0;e<t.length;++e)r.push(t.charCodeAt(e));return r}(s)),"string"==typeof p&&(p=Nt(p)),16!==(null===(c=p)||void 0===c?void 0:c.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let _=new Uint8Array(16+s.length);if(_.set(p),_.set(s,p.length),_=e(_),_[6]=15&_[6]|r,_[8]=63&_[8]|128,f){o=o||0;for(let E=0;E<16;++E)f[o+E]=_[E];return f}return function dt(t,r=0){return(T[t[r+0]]+T[t[r+1]]+T[t[r+2]]+T[t[r+3]]+"-"+T[t[r+4]]+T[t[r+5]]+"-"+T[t[r+6]]+T[t[r+7]]+"-"+T[t[r+8]]+T[t[r+9]]+"-"+T[t[r+10]]+T[t[r+11]]+T[t[r+12]]+T[t[r+13]]+T[t[r+14]]+T[t[r+15]]).toLowerCase()}(_)}try{n.name=t}catch{}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}("v5",80,function wt(t){const r=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){const f=unescape(encodeURIComponent(t));t=[];for(let o=0;o<f.length;++o)t.push(f.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const s=Math.ceil((t.length/4+2)/16),p=new Array(s);for(let f=0;f<s;++f){const o=new Uint32Array(16);for(let c=0;c<16;++c)o[c]=t[64*f+4*c]<<24|t[64*f+4*c+1]<<16|t[64*f+4*c+2]<<8|t[64*f+4*c+3];p[f]=o}p[s-1][14]=8*(t.length-1)/Math.pow(2,32),p[s-1][14]=Math.floor(p[s-1][14]),p[s-1][15]=8*(t.length-1)&4294967295;for(let f=0;f<s;++f){const o=new Uint32Array(80);for(let y=0;y<16;++y)o[y]=p[f][y];for(let y=16;y<80;++y)o[y]=it(o[y-3]^o[y-8]^o[y-14]^o[y-16],1);let c=e[0],_=e[1],E=e[2],k=e[3],b=e[4];for(let y=0;y<80;++y){const A=Math.floor(y/20),F=it(c,5)+Dt(A,_,E,k)+b+r[A]+o[y]>>>0;b=k,k=E,E=it(_,30)>>>0,_=c,c=F}e[0]=e[0]+c>>>0,e[1]=e[1]+_>>>0,e[2]=e[2]+E>>>0,e[3]=e[3]+k>>>0,e[4]=e[4]+b>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,255&e[0],e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,255&e[1],e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,255&e[2],e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,255&e[3],e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,255&e[4]]});Z(1764),Z(6780),Z(2735);var at=function(){var t=function(M,a,l,d){for(l=l||{},d=M.length;d--;l[M[d]]=a);return l},r=[1,2],e=[1,5],n=[6,9,11,23,25,27,29,30,31,52],s=[1,17],p=[1,18],f=[1,19],o=[1,20],c=[1,21],_=[1,22],E=[1,25],k=[1,30],b=[1,31],y=[1,32],A=[1,33],F=[1,34],H=[6,9,11,15,20,23,25,27,29,30,31,44,45,46,47,48,52],$=[1,46],S=[30,31,49,50],v=[4,6,9,11,23,25,27,29,30,31,52],D=[44,45,46,47,48],x=[22,37],O=[1,66],Y=[1,65],W=[22,37,39,41],I={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,entityName:17,relSpec:18,role:19,BLOCK_START:20,attributes:21,BLOCK_STOP:22,title:23,title_value:24,acc_title:25,acc_title_value:26,acc_descr:27,acc_descr_value:28,acc_descr_multiline_value:29,ALPHANUM:30,ENTITY_NAME:31,attribute:32,attributeType:33,attributeName:34,attributeKeyTypeList:35,attributeComment:36,ATTRIBUTE_WORD:37,attributeKeyType:38,COMMA:39,ATTRIBUTE_KEY:40,COMMENT:41,cardinality:42,relType:43,ZERO_OR_ONE:44,ZERO_OR_MORE:45,ONE_OR_MORE:46,ONLY_ONE:47,MD_PARENT:48,NON_IDENTIFYING:49,IDENTIFYING:50,WORD:51,open_directive:52,type_directive:53,arg_directive:54,close_directive:55,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",20:"BLOCK_START",22:"BLOCK_STOP",23:"title",24:"title_value",25:"acc_title",26:"acc_title_value",27:"acc_descr",28:"acc_descr_value",29:"acc_descr_multiline_value",30:"ALPHANUM",31:"ENTITY_NAME",37:"ATTRIBUTE_WORD",39:"COMMA",40:"ATTRIBUTE_KEY",41:"COMMENT",44:"ZERO_OR_ONE",45:"ZERO_OR_MORE",46:"ONE_OR_MORE",47:"ONLY_ONE",48:"MD_PARENT",49:"NON_IDENTIFYING",50:"IDENTIFYING",51:"WORD",52:"open_directive",53:"type_directive",54:"arg_directive",55:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,5],[10,4],[10,3],[10,1],[10,2],[10,2],[10,2],[10,1],[17,1],[17,1],[21,1],[21,2],[32,2],[32,3],[32,3],[32,4],[33,1],[34,1],[35,1],[35,3],[38,1],[36,1],[18,3],[42,1],[42,1],[42,1],[42,1],[42,1],[43,1],[43,1],[19,1],[19,1],[19,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(a,l,d,u,m,i,q){var h=i.length-1;switch(m){case 1:break;case 3:case 7:case 8:this.$=[];break;case 4:i[h-1].push(i[h]),this.$=i[h-1];break;case 5:case 6:case 20:case 44:case 28:case 29:case 32:this.$=i[h];break;case 12:u.addEntity(i[h-4]),u.addEntity(i[h-2]),u.addRelationship(i[h-4],i[h],i[h-2],i[h-3]);break;case 13:u.addEntity(i[h-3]),u.addAttributes(i[h-3],i[h-1]);break;case 14:u.addEntity(i[h-2]);break;case 15:u.addEntity(i[h]);break;case 16:case 17:this.$=i[h].trim(),u.setAccTitle(this.$);break;case 18:case 19:this.$=i[h].trim(),u.setAccDescription(this.$);break;case 21:case 42:case 43:case 33:this.$=i[h].replace(/"/g,"");break;case 22:case 30:this.$=[i[h]];break;case 23:i[h].push(i[h-1]),this.$=i[h];break;case 24:this.$={attributeType:i[h-1],attributeName:i[h]};break;case 25:this.$={attributeType:i[h-2],attributeName:i[h-1],attributeKeyTypeList:i[h]};break;case 26:this.$={attributeType:i[h-2],attributeName:i[h-1],attributeComment:i[h]};break;case 27:this.$={attributeType:i[h-3],attributeName:i[h-2],attributeKeyTypeList:i[h-1],attributeComment:i[h]};break;case 31:i[h-2].push(i[h]),this.$=i[h-2];break;case 34:this.$={cardA:i[h],relType:i[h-1],cardB:i[h-2]};break;case 35:this.$=u.Cardinality.ZERO_OR_ONE;break;case 36:this.$=u.Cardinality.ZERO_OR_MORE;break;case 37:this.$=u.Cardinality.ONE_OR_MORE;break;case 38:this.$=u.Cardinality.ONLY_ONE;break;case 39:this.$=u.Cardinality.MD_PARENT;break;case 40:this.$=u.Identification.NON_IDENTIFYING;break;case 41:this.$=u.Identification.IDENTIFYING;break;case 45:u.parseDirective("%%{","open_directive");break;case 46:u.parseDirective(i[h],"type_directive");break;case 47:i[h]=i[h].trim().replace(/'/g,'"'),u.parseDirective(i[h],"arg_directive");break;case 48:u.parseDirective("}%%","close_directive","er")}},table:[{3:1,4:r,7:3,12:4,52:e},{1:[3]},t(n,[2,3],{5:6}),{3:7,4:r,7:3,12:4,52:e},{13:8,53:[1,9]},{53:[2,45]},{6:[1,10],7:15,8:11,9:[1,12],10:13,11:[1,14],12:4,17:16,23:s,25:p,27:f,29:o,30:c,31:_,52:e},{1:[2,2]},{14:23,15:[1,24],55:E},t([15,55],[2,46]),t(n,[2,8],{1:[2,1]}),t(n,[2,4]),{7:15,10:26,12:4,17:16,23:s,25:p,27:f,29:o,30:c,31:_,52:e},t(n,[2,6]),t(n,[2,7]),t(n,[2,11]),t(n,[2,15],{18:27,42:29,20:[1,28],44:k,45:b,46:y,47:A,48:F}),{24:[1,35]},{26:[1,36]},{28:[1,37]},t(n,[2,19]),t(H,[2,20]),t(H,[2,21]),{11:[1,38]},{16:39,54:[1,40]},{11:[2,48]},t(n,[2,5]),{17:41,30:c,31:_},{21:42,22:[1,43],32:44,33:45,37:$},{43:47,49:[1,48],50:[1,49]},t(S,[2,35]),t(S,[2,36]),t(S,[2,37]),t(S,[2,38]),t(S,[2,39]),t(n,[2,16]),t(n,[2,17]),t(n,[2,18]),t(v,[2,9]),{14:50,55:E},{55:[2,47]},{15:[1,51]},{22:[1,52]},t(n,[2,14]),{21:53,22:[2,22],32:44,33:45,37:$},{34:54,37:[1,55]},{37:[2,28]},{42:56,44:k,45:b,46:y,47:A,48:F},t(D,[2,40]),t(D,[2,41]),{11:[1,57]},{19:58,30:[1,61],31:[1,60],51:[1,59]},t(n,[2,13]),{22:[2,23]},t(x,[2,24],{35:62,36:63,38:64,40:O,41:Y}),t([22,37,40,41],[2,29]),t([30,31],[2,34]),t(v,[2,10]),t(n,[2,12]),t(n,[2,42]),t(n,[2,43]),t(n,[2,44]),t(x,[2,25],{36:67,39:[1,68],41:Y}),t(x,[2,26]),t(W,[2,30]),t(x,[2,33]),t(W,[2,32]),t(x,[2,27]),{38:69,40:O},t(W,[2,31])],defaultActions:{5:[2,45],7:[2,2],25:[2,48],40:[2,47],46:[2,28],53:[2,23]},parseError:function(a,l){if(!l.recoverable){var d=new Error(a);throw d.hash=l,d}this.trace(a)},parse:function(a){var l=this,d=[0],u=[],m=[null],i=[],q=this.table,h="",tt=0,_t=0,Qt=2,Et=1,jt=i.slice.call(arguments,1),N=Object.create(this.lexer),z={yy:{}};for(var st in this.yy)Object.prototype.hasOwnProperty.call(this.yy,st)&&(z.yy[st]=this.yy[st]);N.setInput(a,z.yy),z.yy.lexer=N,z.yy.parser=this,typeof N.yylloc>"u"&&(N.yylloc={});var ot=N.yylloc;i.push(ot);var Jt=N.options&&N.options.ranges;function $t(){var V;return"number"!=typeof(V=u.pop()||N.lex()||Et)&&(V instanceof Array&&(V=(u=V).pop()),V=l.symbols_[V]||V),V}this.parseError="function"==typeof z.yy.parseError?z.yy.parseError:Object.getPrototypeOf(this).parseError;for(var w,G,B,ct,et,U,rt,X={};;){if(this.defaultActions[G=d[d.length-1]]?B=this.defaultActions[G]:((null===w||typeof w>"u")&&(w=$t()),B=q[G]&&q[G][w]),typeof B>"u"||!B.length||!B[0]){var lt="";for(et in rt=[],q[G])this.terminals_[et]&&et>Qt&&rt.push("'"+this.terminals_[et]+"'");lt=N.showPosition?"Parse error on line "+(tt+1)+":\n"+N.showPosition()+"\nExpecting "+rt.join(", ")+", got '"+(this.terminals_[w]||w)+"'":"Parse error on line "+(tt+1)+": Unexpected "+(w==Et?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(lt,{text:N.match,token:this.terminals_[w]||w,line:N.yylineno,loc:ot,expected:rt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+G+", token: "+w);switch(B[0]){case 1:d.push(w),m.push(N.yytext),i.push(N.yylloc),d.push(B[1]),w=null,_t=N.yyleng,h=N.yytext,tt=N.yylineno,ot=N.yylloc;break;case 2:if(X.$=m[m.length-(U=this.productions_[B[1]][1])],X._$={first_line:i[i.length-(U||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(U||1)].first_column,last_column:i[i.length-1].last_column},Jt&&(X._$.range=[i[i.length-(U||1)].range[0],i[i.length-1].range[1]]),typeof(ct=this.performAction.apply(X,[h,_t,tt,z.yy,B[1],m,i].concat(jt)))<"u")return ct;U&&(d=d.slice(0,-1*U*2),m=m.slice(0,-1*U),i=i.slice(0,-1*U)),d.push(this.productions_[B[1]][0]),m.push(X.$),i.push(X._$),d.push(q[d[d.length-2]][d[d.length-1]]);break;case 3:return!0}}return!0}};function L(){this.yy={}}return I.lexer={EOF:1,parseError:function(l,d){if(!this.yy.parser)throw new Error(l);this.yy.parser.parseError(l,d)},setInput:function(a,l){return this.yy=l||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];return this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a,a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var l=a.length,d=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===u.length?this.yylloc.first_column:0)+u[u.length-d.length].length-d[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),l=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+l+"^"},test_match:function(a,l){var d,u,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),(u=a[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],d=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var i in m)this[i]=m[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var a,l,d,u;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),i=0;i<m.length;i++)if((d=this._input.match(this.rules[m[i]]))&&(!l||d[0].length>l[0].length)){if(l=d,u=i,this.options.backtrack_lexer){if(!1!==(a=this.test_match(d,m[i])))return a;if(this._backtrack){l=!1;continue}return!1}if(!this.options.flex)break}return l?!1!==(a=this.test_match(l,m[u]))&&a:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(l){return(l=this.conditionStack.length-1-Math.abs(l||0))>=0?this.conditionStack[l]:"INITIAL"},pushState:function(l){this.begin(l)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(l,d,u,m){switch(u){case 0:return this.begin("acc_title"),25;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),27;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return this.begin("open_directive"),52;case 8:return this.begin("type_directive"),53;case 9:return this.popState(),this.begin("arg_directive"),15;case 10:return this.popState(),this.popState(),55;case 11:return 54;case 12:return 11;case 13:case 20:case 25:break;case 14:return 9;case 15:return 31;case 16:return 51;case 17:return 4;case 18:return this.begin("block"),20;case 19:return 39;case 21:return 40;case 22:case 23:return 37;case 24:return 41;case 26:return this.popState(),22;case 27:case 57:return d.yytext[0];case 28:case 32:case 33:case 46:return 44;case 29:case 30:case 31:case 39:case 41:case 48:return 46;case 34:case 35:case 36:case 37:case 38:case 40:case 47:return 45;case 42:case 43:case 44:case 45:return 47;case 49:return 48;case 50:case 53:case 54:case 55:return 49;case 51:case 52:return 50;case 56:return 30;case 58:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},open_directive:{rules:[8],inclusive:!1},type_directive:{rules:[9,10],inclusive:!1},arg_directive:{rules:[10,11],inclusive:!1},block:{rules:[19,20,21,22,23,24,25,26,27],inclusive:!1},INITIAL:{rules:[0,2,4,7,12,13,14,15,16,17,18,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],inclusive:!0}}},L.prototype=I,I.Parser=L,new L}();at.parser=at;const St=at;let j={},nt=[];const ut=function(t){return void 0===j[t]&&(j[t]={attributes:[]},g.l.info("Added new entity :",t)),j[t]},Pt={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},parseDirective:function(t,r,e){g.m.parseDirective(this,t,r,e)},getConfig:()=>(0,g.c)().er,addEntity:ut,addAttributes:function(t,r){let n,e=ut(t);for(n=r.length-1;n>=0;n--)e.attributes.push(r[n]),g.l.debug("Added attribute ",r[n].attributeName)},getEntities:()=>j,addRelationship:function(t,r,e,n){let s={entityA:t,roleA:r,entityB:e,relSpec:n};nt.push(s),g.l.debug("Added new relationship :",s)},getRelationships:()=>nt,clear:function(){j={},nt=[],(0,g.v)()},setAccTitle:g.s,getAccTitle:g.g,setAccDescription:g.b,getAccDescription:g.a,setDiagramTitle:g.r,getDiagramTitle:g.t},C={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},P_ERMarkers=C,Yt=/[^\dA-Za-z](\W)*/g;let R={},J=new Map;const ft=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")};let yt=0;const zt="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function pt(t=""){return t.length>0?`${t}-`:""}const Xt={parser:St,db:Pt,renderer:{setConf:function(t){const r=Object.keys(t);for(const e of r)R[e]=t[e]},draw:function(t,r,e,n){R=(0,g.c)().er,g.l.info("Drawing ER diagram");const s=(0,g.c)().securityLevel;let p;"sandbox"===s&&(p=(0,Q.Ys)("#i"+r));const o=(0,Q.Ys)("sandbox"===s?p.nodes()[0].contentDocument.body:"body").select(`[id='${r}']`);let c;(function(t,r){let e;t.append("defs").append("marker").attr("id",C.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",C.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",C.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",C.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),e=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),e=t.append("defs").append("marker").attr("id",C.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")})(o,R),c=new mt.k({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:R.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const _=function(t,r,e){let s;return Object.keys(r).forEach(function(p){const f=function Gt(t="",r=""){const e=t.replace(Yt,"");return`${pt(r)}${pt(e)}${It(t,zt)}`}(p,"entity");J.set(p,f);const o=t.append("g").attr("id",f);s=void 0===s?f:s;const c="text-"+f,_=o.append("text").classed("er entityLabel",!0).attr("id",c).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,g.c)().fontFamily).style("font-size",R.fontSize+"px").text(p),{width:E,height:k}=((t,r,e)=>{const n=R.entityPadding/3,s=R.entityPadding/3,p=.85*R.fontSize,f=r.node().getBBox(),o=[];let c=!1,_=!1,E=0,k=0,b=0,y=0,A=f.height+2*n,F=1;e.forEach(v=>{void 0!==v.attributeKeyTypeList&&v.attributeKeyTypeList.length>0&&(c=!0),void 0!==v.attributeComment&&(_=!0)}),e.forEach(v=>{const D=`${r.node().id}-attr-${F}`;let x=0;const O=(0,g.x)(v.attributeType),Y=t.append("text").classed("er entityLabel",!0).attr("id",`${D}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(O),W=t.append("text").classed("er entityLabel",!0).attr("id",`${D}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(v.attributeName),I={};I.tn=Y,I.nn=W;const K=Y.node().getBBox(),L=W.node().getBBox();if(E=Math.max(E,K.width),k=Math.max(k,L.width),x=Math.max(K.height,L.height),c){const M=void 0!==v.attributeKeyTypeList?v.attributeKeyTypeList.join(","):"",a=t.append("text").classed("er entityLabel",!0).attr("id",`${D}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(M);I.kn=a;const l=a.node().getBBox();b=Math.max(b,l.width),x=Math.max(x,l.height)}if(_){const M=t.append("text").classed("er entityLabel",!0).attr("id",`${D}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,g.c)().fontFamily).style("font-size",p+"px").text(v.attributeComment||"");I.cn=M;const a=M.node().getBBox();y=Math.max(y,a.width),x=Math.max(x,a.height)}I.height=x,o.push(I),A+=x+2*n,F+=1});let H=4;c&&(H+=2),_&&(H+=2);const $=E+k+b+y,S={width:Math.max(R.minEntityWidth,Math.max(f.width+2*R.entityPadding,$+s*H)),height:e.length>0?A:Math.max(R.minEntityHeight,f.height+2*R.entityPadding)};if(e.length>0){const v=Math.max(0,(S.width-$-s*H)/(H/2));r.attr("transform","translate("+S.width/2+","+(n+f.height/2)+")");let D=f.height+2*n,x="attributeBoxOdd";o.forEach(O=>{const Y=D+n+O.height/2;O.tn.attr("transform","translate("+s+","+Y+")");const W=t.insert("rect","#"+O.tn.node().id).classed(`er ${x}`,!0).attr("x",0).attr("y",D).attr("width",E+2*s+v).attr("height",O.height+2*n),I=parseFloat(W.attr("x"))+parseFloat(W.attr("width"));O.nn.attr("transform","translate("+(I+s)+","+Y+")");const K=t.insert("rect","#"+O.nn.node().id).classed(`er ${x}`,!0).attr("x",I).attr("y",D).attr("width",k+2*s+v).attr("height",O.height+2*n);let L=parseFloat(K.attr("x"))+parseFloat(K.attr("width"));if(c){O.kn.attr("transform","translate("+(L+s)+","+Y+")");const M=t.insert("rect","#"+O.kn.node().id).classed(`er ${x}`,!0).attr("x",L).attr("y",D).attr("width",b+2*s+v).attr("height",O.height+2*n);L=parseFloat(M.attr("x"))+parseFloat(M.attr("width"))}_&&(O.cn.attr("transform","translate("+(L+s)+","+Y+")"),t.insert("rect","#"+O.cn.node().id).classed(`er ${x}`,"true").attr("x",L).attr("y",D).attr("width",y+2*s+v).attr("height",O.height+2*n)),D+=O.height+2*n,x="attributeBoxOdd"===x?"attributeBoxEven":"attributeBoxOdd"})}else S.height=Math.max(R.minEntityHeight,A),r.attr("transform","translate("+S.width/2+","+S.height/2+")");return S})(o,_,r[p].attributes),y=o.insert("rect","#"+c).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",E).attr("height",k).node().getBBox();e.setNode(f,{width:y.width,height:y.height,shape:"rect",id:f})}),s}(o,n.db.getEntities(),c),E=function(t,r){return t.forEach(function(e){r.setEdge(J.get(e.entityA),J.get(e.entityB),{relationship:e},ft(e))}),t}(n.db.getRelationships(),c);(0,kt.bK)(c),function(t,r){r.nodes().forEach(function(e){void 0!==e&&void 0!==r.node(e)&&t.select("#"+e).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )")})}(o,c),E.forEach(function(F){!function(t,r,e,n,s){yt++;const p=e.edge(J.get(r.entityA),J.get(r.entityB),ft(r)),f=(0,Q.jvg)().x(function(A){return A.x}).y(function(A){return A.y}).curve(Q.$0Z),o=t.insert("path","#"+n).classed("er relationshipLine",!0).attr("d",f(p.points)).style("stroke",R.stroke).style("fill","none");r.relSpec.relType===s.db.Identification.NON_IDENTIFYING&&o.attr("stroke-dasharray","8,8");let c="";switch(R.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),r.relSpec.cardA){case s.db.Cardinality.ZERO_OR_ONE:o.attr("marker-end","url("+c+"#"+P_ERMarkers.ZERO_OR_ONE_END+")");break;case s.db.Cardinality.ZERO_OR_MORE:o.attr("marker-end","url("+c+"#"+P_ERMarkers.ZERO_OR_MORE_END+")");break;case s.db.Cardinality.ONE_OR_MORE:o.attr("marker-end","url("+c+"#"+P_ERMarkers.ONE_OR_MORE_END+")");break;case s.db.Cardinality.ONLY_ONE:o.attr("marker-end","url("+c+"#"+P_ERMarkers.ONLY_ONE_END+")");break;case s.db.Cardinality.MD_PARENT:o.attr("marker-end","url("+c+"#"+P_ERMarkers.MD_PARENT_END+")")}switch(r.relSpec.cardB){case s.db.Cardinality.ZERO_OR_ONE:o.attr("marker-start","url("+c+"#"+P_ERMarkers.ZERO_OR_ONE_START+")");break;case s.db.Cardinality.ZERO_OR_MORE:o.attr("marker-start","url("+c+"#"+P_ERMarkers.ZERO_OR_MORE_START+")");break;case s.db.Cardinality.ONE_OR_MORE:o.attr("marker-start","url("+c+"#"+P_ERMarkers.ONE_OR_MORE_START+")");break;case s.db.Cardinality.ONLY_ONE:o.attr("marker-start","url("+c+"#"+P_ERMarkers.ONLY_ONE_START+")");break;case s.db.Cardinality.MD_PARENT:o.attr("marker-start","url("+c+"#"+P_ERMarkers.MD_PARENT_START+")")}const _=o.node().getTotalLength(),E=o.node().getPointAtLength(.5*_),k="rel"+yt,y=t.append("text").classed("er relationshipLabel",!0).attr("id",k).attr("x",E.x).attr("y",E.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,g.c)().fontFamily).style("font-size",R.fontSize+"px").text(r.roleA).node().getBBox();t.insert("rect","#"+k).classed("er relationshipLabelBox",!0).attr("x",E.x-y.width/2).attr("y",E.y-y.height/2).attr("width",y.width).attr("height",y.height)}(o,F,c,_,n)});const k=R.diagramPadding;g.u.insertTitle(o,"entityTitleText",R.titleTopMargin,n.db.getDiagramTitle());const b=o.node().getBBox(),y=b.width+2*k,A=b.height+2*k;(0,g.i)(o,A,y,R.useMaxWidth),o.attr("viewBox",`${b.x-k} ${b.y-k} ${y} ${A}`)}},styles:t=>`\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxOdd {\n    fill: ${t.attributeBackgroundColorOdd};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxEven {\n    fill:  ${t.attributeBackgroundColorEven};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${t.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${t.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ${t.lineColor};\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  \n`}}}]);