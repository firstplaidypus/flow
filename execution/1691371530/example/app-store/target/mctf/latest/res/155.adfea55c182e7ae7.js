"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[155],{4155:(Xt,qt,J)=>{J.r(qt),J.d(qt,{diagram:()=>Ut});var x=J(5615),it=J(1074),dt=(J(1764),J(6780),J(2735),function(){var e=function(Z,n,r,d){for(r=r||{},d=Z.length;d--;r[Z[d]]=n);return r},a=[1,3],c=[1,5],g=[1,6],p=[1,7],f=[1,8],h=[1,10],y=[1,5,14,16,18,20,21,26,28,29,30,31,32,38,39,40,41,47,48,50,51,52,53,54,55,56,57,58,59,60],s=[1,5,7,14,16,18,20,21,26,28,29,30,31,32,38,39,40,41,47,48,50,51,52,53,54,55,56,57,58,59,60],l=[38,39,40],_=[2,8],R=[1,19],w=[1,23],L=[1,24],C=[1,25],U=[1,26],Q=[1,27],H=[1,29],E=[1,30],nt=[1,31],rt=[1,32],st=[1,33],lt=[1,34],N=[1,37],M=[1,38],m=[1,39],T=[1,40],t=[1,41],b=[1,42],A=[1,43],v=[1,44],S=[1,45],k=[1,46],P=[1,47],F=[1,48],D=[1,49],Tt=[1,52],Y=[1,67],j=[1,68],z=[5,23,27,38,39,40,50,51,52,53,54,55,56,57,58,59,60,61],ut=[5,7,38,39,40,41],xt={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,directive:6,QUADRANT:7,document:8,line:9,statement:10,axisDetails:11,quadrantDetails:12,points:13,title:14,title_value:15,acc_title:16,acc_title_value:17,acc_descr:18,acc_descr_value:19,acc_descr_multiline_value:20,section:21,text:22,point_start:23,point_x:24,point_y:25,"X-AXIS":26,"AXIS-TEXT-DELIMITER":27,"Y-AXIS":28,QUADRANT_1:29,QUADRANT_2:30,QUADRANT_3:31,QUADRANT_4:32,openDirective:33,typeDirective:34,closeDirective:35,":":36,argDirective:37,NEWLINE:38,SEMI:39,EOF:40,open_directive:41,type_directive:42,arg_directive:43,close_directive:44,alphaNumToken:45,textNoTagsToken:46,STR:47,MD_STR:48,alphaNum:49,PUNCTUATION:50,AMP:51,NUM:52,ALPHA:53,COMMA:54,PLUS:55,EQUALS:56,MULT:57,DOT:58,BRKT:59,UNDERSCORE:60,MINUS:61,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",7:"QUADRANT",14:"title",15:"title_value",16:"acc_title",17:"acc_title_value",18:"acc_descr",19:"acc_descr_value",20:"acc_descr_multiline_value",21:"section",23:"point_start",24:"point_x",25:"point_y",26:"X-AXIS",27:"AXIS-TEXT-DELIMITER",28:"Y-AXIS",29:"QUADRANT_1",30:"QUADRANT_2",31:"QUADRANT_3",32:"QUADRANT_4",36:":",38:"NEWLINE",39:"SEMI",40:"EOF",41:"open_directive",42:"type_directive",43:"arg_directive",44:"close_directive",47:"STR",48:"MD_STR",50:"PUNCTUATION",51:"AMP",52:"NUM",53:"ALPHA",54:"COMMA",55:"PLUS",56:"EQUALS",57:"MULT",58:"DOT",59:"BRKT",60:"UNDERSCORE",61:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[10,0],[10,2],[10,1],[10,1],[10,1],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[13,4],[11,4],[11,3],[11,2],[11,4],[11,3],[11,2],[12,2],[12,2],[12,2],[12,2],[6,3],[6,5],[4,1],[4,1],[4,1],[33,1],[34,1],[37,1],[35,1],[22,1],[22,2],[22,1],[22,1],[49,1],[49,2],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[46,1],[46,1],[46,1]],performAction:function(n,r,d,o,q,i,at){var u=i.length-1;switch(q){case 13:this.$=i[u].trim(),o.setDiagramTitle(this.$);break;case 14:this.$=i[u].trim(),o.setAccTitle(this.$);break;case 15:case 16:this.$=i[u].trim(),o.setAccDescription(this.$);break;case 17:o.addSection(i[u].substr(8)),this.$=i[u].substr(8);break;case 19:o.addPoint(i[u-3],i[u-1],i[u]);break;case 20:o.setXAxisLeftText(i[u-2]),o.setXAxisRightText(i[u]);break;case 21:i[u-1].text+=" \u27f6 ",o.setXAxisLeftText(i[u-1]);break;case 22:o.setXAxisLeftText(i[u]);break;case 23:o.setYAxisBottomText(i[u-2]),o.setYAxisTopText(i[u]);break;case 24:i[u-1].text+=" \u27f6 ",o.setYAxisBottomText(i[u-1]);break;case 25:o.setYAxisBottomText(i[u]);break;case 26:o.setQuadrant1Text(i[u]);break;case 27:o.setQuadrant2Text(i[u]);break;case 28:o.setQuadrant3Text(i[u]);break;case 29:o.setQuadrant4Text(i[u]);break;case 35:o.parseDirective("%%{","open_directive");break;case 36:o.parseDirective(i[u],"type_directive");break;case 37:i[u]=i[u].trim().replace(/'/g,'"'),o.parseDirective(i[u],"arg_directive");break;case 38:o.parseDirective("}%%","close_directive","quadrantChart");break;case 39:case 41:this.$={text:i[u],type:"text"};break;case 40:this.$={text:i[u-1].text+""+i[u],type:i[u-1].type};break;case 42:this.$={text:i[u],type:"markdown"};break;case 43:this.$=i[u];break;case 44:this.$=i[u-1]+""+i[u]}},table:[{3:1,4:2,5:a,6:4,7:c,33:9,38:g,39:p,40:f,41:h},{1:[3]},{3:11,4:2,5:a,6:4,7:c,33:9,38:g,39:p,40:f,41:h},{3:12,4:2,5:a,6:4,7:c,33:9,38:g,39:p,40:f,41:h},{3:13,4:2,5:a,6:4,7:c,33:9,38:g,39:p,40:f,41:h},e(y,[2,5],{8:14}),e(s,[2,32]),e(s,[2,33]),e(s,[2,34]),{34:15,42:[1,16]},{42:[2,35]},{1:[2,1]},{1:[2,2]},{1:[2,3]},e(l,_,{33:9,9:17,10:18,11:20,12:21,13:22,6:28,22:35,45:36,1:[2,4],5:R,14:w,16:L,18:C,20:U,21:Q,26:H,28:E,29:nt,30:rt,31:st,32:lt,41:h,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D}),{35:50,36:[1,51],44:Tt},e([36,44],[2,36]),e(y,[2,6]),{4:53,38:g,39:p,40:f},e(l,_,{33:9,11:20,12:21,13:22,6:28,22:35,45:36,10:54,5:R,14:w,16:L,18:C,20:U,21:Q,26:H,28:E,29:nt,30:rt,31:st,32:lt,41:h,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D}),e(l,[2,10]),e(l,[2,11]),e(l,[2,12]),{15:[1,55]},{17:[1,56]},{19:[1,57]},e(l,[2,16]),e(l,[2,17]),e(l,[2,18]),{22:58,45:36,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D},{22:59,45:36,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D},{22:60,45:36,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D},{22:61,45:36,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D},{22:62,45:36,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D},{22:63,45:36,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D},{5:Y,23:[1,64],45:66,46:65,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j},e(z,[2,39]),e(z,[2,41]),e(z,[2,42]),e(z,[2,45]),e(z,[2,46]),e(z,[2,47]),e(z,[2,48]),e(z,[2,49]),e(z,[2,50]),e(z,[2,51]),e(z,[2,52]),e(z,[2,53]),e(z,[2,54]),e(z,[2,55]),e(ut,[2,30]),{37:69,43:[1,70]},e(ut,[2,38]),e(y,[2,7]),e(l,[2,9]),e(l,[2,13]),e(l,[2,14]),e(l,[2,15]),e(l,[2,22],{46:65,45:66,5:Y,27:[1,71],50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,25],{46:65,45:66,5:Y,27:[1,72],50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,26],{46:65,45:66,5:Y,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,27],{46:65,45:66,5:Y,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,28],{46:65,45:66,5:Y,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,29],{46:65,45:66,5:Y,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),{24:[1,73]},e(z,[2,40]),e(z,[2,56]),e(z,[2,57]),e(z,[2,58]),{35:74,44:Tt},{44:[2,37]},e(l,[2,21],{45:36,22:75,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D}),e(l,[2,24],{45:36,22:76,47:N,48:M,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D}),{25:[1,77]},e(ut,[2,31]),e(l,[2,20],{46:65,45:66,5:Y,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,23],{46:65,45:66,5:Y,50:m,51:T,52:t,53:b,54:A,55:v,56:S,57:k,58:P,59:F,60:D,61:j}),e(l,[2,19])],defaultActions:{10:[2,35],11:[2,1],12:[2,2],13:[2,3],70:[2,37]},parseError:function(n,r){if(!r.recoverable){var d=new Error(n);throw d.hash=r,d}this.trace(n)},parse:function(n){var r=this,d=[0],o=[],q=[null],i=[],at=this.table,u="",ot=0,mt=0,Nt=2,bt=1,Ot=i.slice.call(arguments,1),I=Object.create(this.lexer),$={yy:{}};for(var gt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,gt)&&($.yy[gt]=this.yy[gt]);I.setInput(n,$.yy),$.yy.lexer=I,$.yy.parser=this,typeof I.yylloc>"u"&&(I.yylloc={});var pt=I.yylloc;i.push(pt);var Qt=I.options&&I.options.ranges;function Ht(){var G;return"number"!=typeof(G=o.pop()||I.lex()||bt)&&(G instanceof Array&&(G=(o=G).pop()),G=r.symbols_[G]||G),G}this.parseError="function"==typeof $.yy.parseError?$.yy.parseError:Object.getPrototypeOf(this).parseError;for(var V,tt,O,yt,ct,K,ht,et={};;){if(this.defaultActions[tt=d[d.length-1]]?O=this.defaultActions[tt]:((null===V||typeof V>"u")&&(V=Ht()),O=at[tt]&&at[tt][V]),typeof O>"u"||!O.length||!O[0]){var _t="";for(ct in ht=[],at[tt])this.terminals_[ct]&&ct>Nt&&ht.push("'"+this.terminals_[ct]+"'");_t=I.showPosition?"Parse error on line "+(ot+1)+":\n"+I.showPosition()+"\nExpecting "+ht.join(", ")+", got '"+(this.terminals_[V]||V)+"'":"Parse error on line "+(ot+1)+": Unexpected "+(V==bt?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(_t,{text:I.match,token:this.terminals_[V]||V,line:I.yylineno,loc:pt,expected:ht})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+tt+", token: "+V);switch(O[0]){case 1:d.push(V),q.push(I.yytext),i.push(I.yylloc),d.push(O[1]),V=null,mt=I.yyleng,u=I.yytext,ot=I.yylineno,pt=I.yylloc;break;case 2:if(et.$=q[q.length-(K=this.productions_[O[1]][1])],et._$={first_line:i[i.length-(K||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(K||1)].first_column,last_column:i[i.length-1].last_column},Qt&&(et._$.range=[i[i.length-(K||1)].range[0],i[i.length-1].range[1]]),typeof(yt=this.performAction.apply(et,[u,mt,ot,$.yy,O[1],q,i].concat(Ot)))<"u")return yt;K&&(d=d.slice(0,-1*K*2),q=q.slice(0,-1*K),i=i.slice(0,-1*K)),d.push(this.productions_[O[1]][0]),q.push(et.$),i.push(et._$),d.push(at[d[d.length-2]][d[d.length-1]]);break;case 3:return!0}}return!0}};function ft(){this.yy={}}return xt.lexer={EOF:1,parseError:function(r,d){if(!this.yy.parser)throw new Error(r);this.yy.parser.parseError(r,d)},setInput:function(n,r){return this.yy=r||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];return this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n,n.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var r=n.length,d=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var q=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===o.length?this.yylloc.first_column:0)+o[o.length-d.length].length-d[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[q[0],q[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),r=new Array(n.length+1).join("-");return n+this.upcomingInput()+"\n"+r+"^"},test_match:function(n,r){var d,o,q;if(this.options.backtrack_lexer&&(q={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(q.yylloc.range=this.yylloc.range.slice(0))),(o=n[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],d=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var i in q)this[i]=q[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var n,r,d,o;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var q=this._currentRules(),i=0;i<q.length;i++)if((d=this._input.match(this.rules[q[i]]))&&(!r||d[0].length>r[0].length)){if(r=d,o=i,this.options.backtrack_lexer){if(!1!==(n=this.test_match(d,q[i])))return n;if(this._backtrack){r=!1;continue}return!1}if(!this.options.flex)break}return r?!1!==(n=this.test_match(r,q[o]))&&n:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return(r=this.conditionStack.length-1-Math.abs(r||0))>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,d,o,q){switch(o){case 0:return this.begin("open_directive"),41;case 1:return this.begin("type_directive"),42;case 2:return this.popState(),this.begin("arg_directive"),36;case 3:return this.popState(),this.popState(),44;case 4:return 43;case 5:case 6:case 8:break;case 7:return 38;case 9:return this.begin("title"),14;case 10:return this.popState(),"title_value";case 11:return this.begin("acc_title"),16;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),18;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:case 27:case 29:case 33:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:return 26;case 19:return 28;case 20:return 27;case 21:return 29;case 22:return 30;case 23:return 31;case 24:return 32;case 25:this.begin("md_string");break;case 26:return"MD_STR";case 28:this.begin("string");break;case 30:return"STR";case 31:return this.begin("point_start"),23;case 32:return this.begin("point_x"),24;case 34:this.popState(),this.begin("point_y");break;case 35:return this.popState(),25;case 36:return 7;case 37:return 53;case 38:return"COLON";case 39:return 55;case 40:return 54;case 41:case 42:return 56;case 43:return 57;case 44:return 59;case 45:return 60;case 46:return 58;case 47:return 51;case 48:return 61;case 49:return 52;case 50:return 5;case 51:return 39;case 52:return 50;case 53:return 40}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[35],inclusive:!1},point_x:{rules:[34],inclusive:!1},point_start:{rules:[32,33],inclusive:!1},acc_descr_multiline:{rules:[16,17],inclusive:!1},acc_descr:{rules:[14],inclusive:!1},acc_title:{rules:[12],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[10],inclusive:!1},md_string:{rules:[26,27],inclusive:!1},string:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,11,13,15,18,19,20,21,22,23,24,25,28,31,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],inclusive:!0}}},ft.prototype=xt,xt.Parser=ft,new ft}());dt.parser=dt;const vt=dt,W=(0,x.C)(),kt=(0,x.c)();function X(e){return(0,x.d)(e.trim(),kt)}const B=new class St{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var a,c,g,p,f,h,y,s,l,_,R,w,L,C,U,Q,H,E;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(a=x.D.quadrantChart)?void 0:a.chartWidth)||500,chartWidth:(null==(c=x.D.quadrantChart)?void 0:c.chartHeight)||500,titlePadding:(null==(g=x.D.quadrantChart)?void 0:g.titlePadding)||10,titleFontSize:(null==(p=x.D.quadrantChart)?void 0:p.titleFontSize)||20,quadrantPadding:(null==(f=x.D.quadrantChart)?void 0:f.quadrantPadding)||5,xAxisLabelPadding:(null==(h=x.D.quadrantChart)?void 0:h.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(y=x.D.quadrantChart)?void 0:y.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(s=x.D.quadrantChart)?void 0:s.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(l=x.D.quadrantChart)?void 0:l.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(_=x.D.quadrantChart)?void 0:_.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(R=x.D.quadrantChart)?void 0:R.quadrantTextTopPadding)||5,pointTextPadding:(null==(w=x.D.quadrantChart)?void 0:w.pointTextPadding)||5,pointLabelFontSize:(null==(L=x.D.quadrantChart)?void 0:L.pointLabelFontSize)||12,pointRadius:(null==(C=x.D.quadrantChart)?void 0:C.pointRadius)||5,xAxisPosition:(null==(U=x.D.quadrantChart)?void 0:U.xAxisPosition)||"top",yAxisPosition:(null==(Q=x.D.quadrantChart)?void 0:Q.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(H=x.D.quadrantChart)?void 0:H.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(E=x.D.quadrantChart)?void 0:E.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:W.quadrant1Fill,quadrant2Fill:W.quadrant2Fill,quadrant3Fill:W.quadrant3Fill,quadrant4Fill:W.quadrant4Fill,quadrant1TextFill:W.quadrant1TextFill,quadrant2TextFill:W.quadrant2TextFill,quadrant3TextFill:W.quadrant3TextFill,quadrant4TextFill:W.quadrant4TextFill,quadrantPointFill:W.quadrantPointFill,quadrantPointTextFill:W.quadrantPointTextFill,quadrantXAxisTextFill:W.quadrantXAxisTextFill,quadrantYAxisTextFill:W.quadrantYAxisTextFill,quadrantTitleFill:W.quadrantTitleFill,quadrantInternalBorderStrokeFill:W.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:W.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),x.l.info("clear called")}setData(a){this.data={...this.data,...a}}addPoints(a){this.data.points=[...a,...this.data.points]}setConfig(a){x.l.trace("setConfig called with: ",a),this.config={...this.config,...a}}setThemeConfig(a){x.l.trace("setThemeConfig called with: ",a),this.themeConfig={...this.themeConfig,...a}}calculateSpace(a,c,g,p){const f=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,h={top:"top"===a&&c?f:0,bottom:"bottom"===a&&c?f:0},y=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,s={left:"left"===this.config.yAxisPosition&&g?y:0,right:"right"===this.config.yAxisPosition&&g?y:0},_={top:p?this.config.titleFontSize+2*this.config.titlePadding:0},L=this.config.chartWidth-2*this.config.quadrantPadding-s.left-s.right,C=this.config.chartHeight-2*this.config.quadrantPadding-h.top-h.bottom-_.top;return{xAxisSpace:h,yAxisSpace:s,titleSpace:_,quadrantSpace:{quadrantLeft:this.config.quadrantPadding+s.left,quadrantTop:this.config.quadrantPadding+h.top+_.top,quadrantWidth:L,quadrantHalfWidth:L/2,quadrantHeight:C,quadrantHalfHeight:C/2}}}getAxisLabels(a,c,g,p){const{quadrantSpace:f,titleSpace:h}=p,{quadrantHalfHeight:y,quadrantHeight:s,quadrantLeft:l,quadrantHalfWidth:_,quadrantTop:R,quadrantWidth:w}=f,L=0===this.data.points.length,C=[];return this.data.xAxisLeftText&&c&&C.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+(L?_/2:0),y:"top"===a?this.config.xAxisLabelPadding+h.top:this.config.xAxisLabelPadding+R+s+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&c&&C.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+_+(L?_/2:0),y:"top"===a?this.config.xAxisLabelPadding+h.top:this.config.xAxisLabelPadding+R+s+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&g&&C.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+w+this.config.quadrantPadding,y:R+s-(L?y/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&g&&C.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+w+this.config.quadrantPadding,y:R+y-(L?y/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:-90}),C}getQuadrants(a){const{quadrantSpace:c}=a,{quadrantHalfHeight:g,quadrantLeft:p,quadrantHalfWidth:f,quadrantTop:h}=c,y=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:p+f,y:h,width:f,height:g,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:p,y:h,width:f,height:g,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:p,y:h+g,width:f,height:g,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:p+f,y:h+g,width:f,height:g,fill:this.themeConfig.quadrant4Fill}];for(const s of y)s.text.x=s.x+s.width/2,0===this.data.points.length?(s.text.y=s.y+s.height/2,s.text.horizontalPos="middle"):(s.text.y=s.y+this.config.quadrantTextTopPadding,s.text.horizontalPos="top");return y}getQuadrantPoints(a){const{quadrantSpace:c}=a,{quadrantHeight:g,quadrantLeft:p,quadrantTop:f,quadrantWidth:h}=c,y=(0,it.BYU)().domain([0,1]).range([p,h+p]),s=(0,it.BYU)().domain([0,1]).range([g+f,f]);return this.data.points.map(_=>({x:y(_.x),y:s(_.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:_.text,fill:this.themeConfig.quadrantPointTextFill,x:y(_.x),y:s(_.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}}))}getBorders(a){const c=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:g}=a,{quadrantHalfHeight:p,quadrantHeight:f,quadrantLeft:h,quadrantHalfWidth:y,quadrantTop:s,quadrantWidth:l}=g;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h-c,y1:s,x2:h+l+c,y2:s},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h+l,y1:s+c,x2:h+l,y2:s+f-c},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h-c,y1:s+f,x2:h+l+c,y2:s+f},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h,y1:s+c,x2:h,y2:s+f-c},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:h+y,y1:s+c,x2:h+y,y2:s+f-c},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:h+c,y1:s+p,x2:h+l-c,y2:s+p}]}getTitle(a){if(a)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const a=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),c=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),g=this.config.showTitle&&!!this.data.titleText,p=this.data.points.length>0?"bottom":this.config.xAxisPosition,f=this.calculateSpace(p,a,c,g);return{points:this.getQuadrantPoints(f),quadrants:this.getQuadrants(f),axisLabels:this.getAxisLabels(p,a,c,f),borderLines:this.getBorders(f),title:this.getTitle(g)}}},Ut={parser:vt,db:{setWidth:function Rt(e){B.setConfig({chartWidth:e})},setHeight:function Wt(e){B.setConfig({chartHeight:e})},setQuadrant1Text:function Pt(e){B.setData({quadrant1Text:X(e.text)})},setQuadrant2Text:function Ft(e){B.setData({quadrant2Text:X(e.text)})},setQuadrant3Text:function Dt(e){B.setData({quadrant3Text:X(e.text)})},setQuadrant4Text:function Lt(e){B.setData({quadrant4Text:X(e.text)})},setXAxisLeftText:function Ct(e){B.setData({xAxisLeftText:X(e.text)})},setXAxisRightText:function Et(e){B.setData({xAxisRightText:X(e.text)})},setYAxisTopText:function zt(e){B.setData({yAxisTopText:X(e.text)})},setYAxisBottomText:function It(e){B.setData({yAxisBottomText:X(e.text)})},addPoint:function Bt(e,a,c){B.addPoints([{x:a,y:c,text:X(e.text)}])},getQuadrantData:function Vt(){const e=(0,x.c)(),{themeVariables:a,quadrantChart:c}=e;return c&&B.setConfig(c),B.setThemeConfig({quadrant1Fill:a.quadrant1Fill,quadrant2Fill:a.quadrant2Fill,quadrant3Fill:a.quadrant3Fill,quadrant4Fill:a.quadrant4Fill,quadrant1TextFill:a.quadrant1TextFill,quadrant2TextFill:a.quadrant2TextFill,quadrant3TextFill:a.quadrant3TextFill,quadrant4TextFill:a.quadrant4TextFill,quadrantPointFill:a.quadrantPointFill,quadrantPointTextFill:a.quadrantPointTextFill,quadrantXAxisTextFill:a.quadrantXAxisTextFill,quadrantYAxisTextFill:a.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:a.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:a.quadrantInternalBorderStrokeFill,quadrantTitleFill:a.quadrantTitleFill}),B.setData({titleText:(0,x.t)()}),B.build()},parseDirective:function(e,a,c){x.m.parseDirective(this,e,a,c)},clear:function(){B.clear(),(0,x.v)()},setAccTitle:x.s,getAccTitle:x.g,setDiagramTitle:x.r,getDiagramTitle:x.t,getAccDescription:x.a,setAccDescription:x.b},renderer:{draw:(e,a,c,g)=>{var p,f,h;function y(t){return"top"===t?"hanging":"middle"}function s(t){return"left"===t?"start":"middle"}function l(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const _=(0,x.c)();x.l.debug("Rendering quadrant chart\n"+e);const R=_.securityLevel;let w;"sandbox"===R&&(w=(0,it.Ys)("#i"+a));const C=(0,it.Ys)("sandbox"===R?w.nodes()[0].contentDocument.body:"body").select(`[id="${a}"]`),U=C.append("g").attr("class","main"),Q=(null==(p=_.quadrantChart)?void 0:p.chartWidth)||500,H=(null==(f=_.quadrantChart)?void 0:f.chartHeight)||500;(0,x.i)(C,H,Q,(null==(h=_.quadrantChart)?void 0:h.useMaxWidth)||!0),C.attr("viewBox","0 0 "+Q+" "+H),g.db.setHeight(H),g.db.setWidth(Q);const E=g.db.getQuadrantData(),nt=U.append("g").attr("class","quadrants"),rt=U.append("g").attr("class","border"),st=U.append("g").attr("class","data-points"),lt=U.append("g").attr("class","labels"),N=U.append("g").attr("class","title");E.title&&N.append("text").attr("x",0).attr("y",0).attr("fill",E.title.fill).attr("font-size",E.title.fontSize).attr("dominant-baseline",y(E.title.horizontalPos)).attr("text-anchor",s(E.title.verticalPos)).attr("transform",l(E.title)).text(E.title.text),E.borderLines&&rt.selectAll("line").data(E.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);const M=nt.selectAll("g.quadrant").data(E.quadrants).enter().append("g").attr("class","quadrant");M.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),M.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>y(t.text.horizontalPos)).attr("text-anchor",t=>s(t.text.verticalPos)).attr("transform",t=>l(t.text)).text(t=>t.text.text),lt.selectAll("g.label").data(E.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>y(t.horizontalPos)).attr("text-anchor",t=>s(t.verticalPos)).attr("transform",t=>l(t));const T=st.selectAll("g.data-point").data(E.points).enter().append("g").attr("class","data-point");T.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill),T.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>y(t.text.horizontalPos)).attr("text-anchor",t=>s(t.text.verticalPos)).attr("transform",t=>l(t.text))}},styles:()=>""}}}]);