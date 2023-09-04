"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[66],{5066:(xt,et,w)=>{w.r(et),w.d(et,{diagram:()=>mt});var l=w(4147),W=w(1074),Y=(w(1764),w(6780),w(2735),function(){var e=function(f,t,s,n){for(s=s||{},n=f.length;n--;s[f[n]]=t);return s},p=[1,4],S=[1,5],_=[1,6],A=[1,7],E=[1,9],m=[1,11,13,15,17,19,20,26,27,28,29],M=[2,5],T=[1,6,11,13,15,17,19,20,26,27,28,29],u=[26,27,28],$=[2,8],P=[1,18],B=[1,19],v=[1,20],C=[1,21],b=[1,22],h=[1,23],V=[1,28],L=[6,26,27,28,29],D={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(t,s,n,r,a,i,g){var c=i.length-1;switch(a){case 4:r.setShowData(!0);break;case 7:this.$=i[c-1];break;case 9:r.addSection(i[c-1],r.cleanupValue(i[c]));break;case 10:this.$=i[c].trim(),r.setDiagramTitle(this.$);break;case 11:this.$=i[c].trim(),r.setAccTitle(this.$);break;case 12:case 13:this.$=i[c].trim(),r.setAccDescription(this.$);break;case 14:r.addSection(i[c].substr(8)),this.$=i[c].substr(8);break;case 21:r.parseDirective("%%{","open_directive");break;case 22:r.parseDirective(i[c],"type_directive");break;case 23:i[c]=i[c].trim().replace(/'/g,'"'),r.parseDirective(i[c],"arg_directive");break;case 24:r.parseDirective("}%%","close_directive","pie")}},table:[{3:1,4:2,5:3,6:p,21:8,26:S,27:_,28:A,29:E},{1:[3]},{3:10,4:2,5:3,6:p,21:8,26:S,27:_,28:A,29:E},{3:11,4:2,5:3,6:p,21:8,26:S,27:_,28:A,29:E},e(m,M,{7:12,8:[1,13]}),e(T,[2,18]),e(T,[2,19]),e(T,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},e(u,$,{21:8,9:16,10:17,5:24,1:[2,3],11:P,13:B,15:v,17:C,19:b,20:h,29:E}),e(m,M,{7:25}),{23:26,24:[1,27],32:V},e([24,32],[2,22]),e(m,[2,6]),{4:29,26:S,27:_,28:A},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},e(u,[2,13]),e(u,[2,14]),e(u,[2,15]),e(u,$,{21:8,9:16,10:17,5:24,1:[2,4],11:P,13:B,15:v,17:C,19:b,20:h,29:E}),e(L,[2,16]),{25:34,31:[1,35]},e(L,[2,24]),e(m,[2,7]),e(u,[2,9]),e(u,[2,10]),e(u,[2,11]),e(u,[2,12]),{23:36,32:V},{32:[2,23]},e(L,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(t,s){if(!s.recoverable){var n=new Error(t);throw n.hash=s,n}this.trace(t)},parse:function(t){var s=this,n=[0],r=[],a=[null],i=[],g=this.table,c="",R=0,U=0,J=2,st=1,vt=i.slice.call(arguments,1),o=Object.create(this.lexer),I={yy:{}};for(var Q in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Q)&&(I.yy[Q]=this.yy[Q]);o.setInput(t,I.yy),I.yy.lexer=o,I.yy.parser=this,typeof o.yylloc>"u"&&(o.yylloc={});var X=o.yylloc;i.push(X);var bt=o.options&&o.options.ranges;function kt(){var x;return"number"!=typeof(x=r.pop()||o.lex()||st)&&(x instanceof Array&&(x=(r=x).pop()),x=s.symbols_[x]||x),x}this.parseError="function"==typeof I.yy.parseError?I.yy.parseError:Object.getPrototypeOf(this).parseError;for(var y,O,d,q,G,k,K,N={};;){if(this.defaultActions[O=n[n.length-1]]?d=this.defaultActions[O]:((null===y||typeof y>"u")&&(y=kt()),d=g[O]&&g[O][y]),typeof d>"u"||!d.length||!d[0]){var tt="";for(G in K=[],g[O])this.terminals_[G]&&G>J&&K.push("'"+this.terminals_[G]+"'");tt=o.showPosition?"Parse error on line "+(R+1)+":\n"+o.showPosition()+"\nExpecting "+K.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(R+1)+": Unexpected "+(y==st?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(tt,{text:o.match,token:this.terminals_[y]||y,line:o.yylineno,loc:X,expected:K})}if(d[0]instanceof Array&&d.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+y);switch(d[0]){case 1:n.push(y),a.push(o.yytext),i.push(o.yylloc),n.push(d[1]),y=null,U=o.yyleng,c=o.yytext,R=o.yylineno,X=o.yylloc;break;case 2:if(N.$=a[a.length-(k=this.productions_[d[1]][1])],N._$={first_line:i[i.length-(k||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(k||1)].first_column,last_column:i[i.length-1].last_column},bt&&(N._$.range=[i[i.length-(k||1)].range[0],i[i.length-1].range[1]]),typeof(q=this.performAction.apply(N,[c,U,R,I.yy,d[1],a,i].concat(vt)))<"u")return q;k&&(n=n.slice(0,-1*k*2),a=a.slice(0,-1*k),i=i.slice(0,-1*k)),n.push(this.productions_[d[1]][0]),a.push(N.$),i.push(N._$),n.push(g[n[n.length-2]][n[n.length-1]]);break;case 3:return!0}}return!0}};function F(){this.yy={}}return D.lexer={EOF:1,parseError:function(s,n){if(!this.yy.parser)throw new Error(s);this.yy.parser.parseError(s,n)},setInput:function(t,s){return this.yy=s||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var s=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),s=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+s+"^"},test_match:function(t,s){var n,r,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in a)this[i]=a[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,s,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),i=0;i<a.length;i++)if((n=this._input.match(this.rules[a[i]]))&&(!s||n[0].length>s[0].length)){if(s=n,r=i,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,a[i])))return t;if(this._backtrack){s=!1;continue}return!1}if(!this.options.flex)break}return s?!1!==(t=this.test_match(s,a[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return(s=this.conditionStack.length-1-Math.abs(s||0))>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(s,n,r,a){switch(r){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:case 6:case 8:case 9:break;case 7:return 26;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:case 20:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}},F.prototype=D,D.Parser=F,new F}());Y.parser=Y;const rt=Y,j_sections={};let z=j_sections,Z=false;const at=structuredClone(l.C.pie),mt={parser:rt,db:{getConfig:()=>structuredClone(at),parseDirective:(e,p,S)=>{(0,l.D)(void 0,e,p,S)},clear:()=>{z=structuredClone(j_sections),Z=false,(0,l.v)()},setDiagramTitle:l.r,getDiagramTitle:l.t,setAccTitle:l.s,getAccTitle:l.g,setAccDescription:l.b,getAccDescription:l.a,addSection:(e,p)=>{e=(0,l.d)(e,(0,l.c)()),void 0===z[e]&&(z[e]=p,l.l.debug(`added new section: ${e}, with value: ${p}`))},getSections:()=>z,cleanupValue:e=>(":"===e.substring(0,1)&&(e=e.substring(1).trim()),Number(e.trim())),setShowData:e=>{Z=e},getShowData:()=>Z},renderer:{draw:(e,p,S,_)=>{var A,E;l.l.debug("rendering pie chart\n"+e);const m=_.db,M=(0,l.c)(),T=(0,l.E)(m.getConfig(),M.pie),$=(null==(E=null==(A=document.getElementById(p))?void 0:A.parentElement)?void 0:E.offsetWidth)??T.useWidth,P=(0,l.B)(p);P.attr("viewBox",`0 0 ${$} 450`),(0,l.i)(P,450,$,T.useMaxWidth);const b=P.append("g");b.attr("transform","translate("+$/2+",225)");const{themeVariables:h}=M;let[V]=(0,l.F)(h.pieOuterStrokeWidth);V??(V=2);const L=T.textPosition,D=Math.min($,450)/2-40,H=(0,W.Nb1)().innerRadius(0).outerRadius(D),F=(0,W.Nb1)().innerRadius(D*L).outerRadius(D*L);b.append("circle").attr("cx",0).attr("cy",0).attr("r",D+V/2).attr("class","pieOuterCircle");const f=m.getSections(),t=(e=>{const p=Object.entries(e).map(_=>({label:_[0],value:_[1]}));return(0,W.ve8)().value(_=>_.value)(p)})(f),n=(0,W.PKp)([h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12]);b.selectAll("mySlices").data(t).enter().append("path").attr("d",H).attr("fill",i=>n(i.data.label)).attr("class","pieCircle");let r=0;Object.keys(f).forEach(i=>{r+=f[i]}),b.selectAll("mySlices").data(t).enter().append("text").text(i=>(i.data.value/r*100).toFixed(0)+"%").attr("transform",i=>"translate("+F.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),b.append("text").text(m.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const a=b.selectAll(".legend").data(n.domain()).enter().append("g").attr("class","legend").attr("transform",(i,g)=>"translate(216,"+(22*g-22*n.domain().length/2)+")");a.append("rect").attr("width",18).attr("height",18).style("fill",n).style("stroke",n),a.data(t).append("text").attr("x",22).attr("y",14).text(i=>{const{label:g,value:c}=i.data;return m.getShowData()?`${g} [${c}]`:g})}},styles:e=>`\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`}}}]);