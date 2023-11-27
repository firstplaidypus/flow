"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[347],{4347:(Vt,q,P)=>{P.r(q),P.d(q,{diagram:()=>Pt});var k=P(7036),L=P(5066),R=P(3904),z=(P(1764),P(6780),P(2735),function(){var t=function(p,s,r,a){for(r=r||{},a=p.length;a--;r[p[a]]=s);return r},e=[6,8,10,11,12,14,16,17,18],i=[1,9],o=[1,10],n=[1,11],h=[1,12],c=[1,13],d=[1,14],y={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:function(s,r,a,u,f,l,E){var _=l.length-1;switch(f){case 1:return l[_-1];case 2:case 6:case 7:this.$=[];break;case 3:l[_-1].push(l[_]),this.$=l[_-1];break;case 4:case 5:this.$=l[_];break;case 8:u.setDiagramTitle(l[_].substr(6)),this.$=l[_].substr(6);break;case 9:this.$=l[_].trim(),u.setAccTitle(this.$);break;case 10:case 11:this.$=l[_].trim(),u.setAccDescription(this.$);break;case 12:u.addSection(l[_].substr(8)),this.$=l[_].substr(8);break;case 13:u.addTask(l[_-1],l[_]),this.$="task"}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:i,12:o,14:n,16:h,17:c,18:d},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:i,12:o,14:n,16:h,17:c,18:d},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:function(s,r){if(!r.recoverable){var a=new Error(s);throw a.hash=r,a}this.trace(s)},parse:function(s){var r=this,a=[0],u=[],f=[null],l=[],E=this.table,_="",j=0,at=0,St=2,lt=1,Ct=l.slice.call(arguments,1),x=Object.create(this.lexer),C={yy:{}};for(var G in this.yy)Object.prototype.hasOwnProperty.call(this.yy,G)&&(C.yy[G]=this.yy[G]);x.setInput(s,C.yy),C.yy.lexer=x,C.yy.parser=this,typeof x.yylloc>"u"&&(x.yylloc={});var X=x.yylloc;l.push(X);var It=x.options&&x.options.ranges;function At(){var $;return"number"!=typeof($=u.pop()||x.lex()||lt)&&($ instanceof Array&&($=(u=$).pop()),$=r.symbols_[$]||$),$}this.parseError="function"==typeof C.yy.parseError?C.yy.parseError:Object.getPrototypeOf(this).parseError;for(var b,I,w,H,Y,T,W,V={};;){if(this.defaultActions[I=a[a.length-1]]?w=this.defaultActions[I]:((null===b||typeof b>"u")&&(b=At()),w=E[I]&&E[I][b]),typeof w>"u"||!w.length||!w[0]){var Z="";for(Y in W=[],E[I])this.terminals_[Y]&&Y>St&&W.push("'"+this.terminals_[Y]+"'");Z=x.showPosition?"Parse error on line "+(j+1)+":\n"+x.showPosition()+"\nExpecting "+W.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(j+1)+": Unexpected "+(b==lt?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(Z,{text:x.match,token:this.terminals_[b]||b,line:x.yylineno,loc:X,expected:W})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+b);switch(w[0]){case 1:a.push(b),f.push(x.yytext),l.push(x.yylloc),a.push(w[1]),b=null,at=x.yyleng,_=x.yytext,j=x.yylineno,X=x.yylloc;break;case 2:if(V.$=f[f.length-(T=this.productions_[w[1]][1])],V._$={first_line:l[l.length-(T||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(T||1)].first_column,last_column:l[l.length-1].last_column},It&&(V._$.range=[l[l.length-(T||1)].range[0],l[l.length-1].range[1]]),typeof(H=this.performAction.apply(V,[_,at,j,C.yy,w[1],f,l].concat(Ct)))<"u")return H;T&&(a=a.slice(0,-1*T*2),f=f.slice(0,-1*T),l=l.slice(0,-1*T)),a.push(this.productions_[w[1]][0]),f.push(V.$),l.push(V._$),a.push(E[a[a.length-2]][a[a.length-1]]);break;case 3:return!0}}return!0}};function g(){this.yy={}}return y.lexer={EOF:1,parseError:function(r,a){if(!this.yy.parser)throw new Error(r);this.yy.parser.parseError(r,a)},setInput:function(s,r){return this.yy=r||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];return this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s,s.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var r=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===u.length?this.yylloc.first_column:0)+u[u.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),r=new Array(s.length+1).join("-");return s+this.upcomingInput()+"\n"+r+"^"},test_match:function(s,r){var a,u,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),(u=s[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],a=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var l in f)this[l]=f[l];return!1}return!1},next:function(){if(this.done)return this.EOF;var s,r,a,u;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),l=0;l<f.length;l++)if((a=this._input.match(this.rules[f[l]]))&&(!r||a[0].length>r[0].length)){if(r=a,u=l,this.options.backtrack_lexer){if(!1!==(s=this.test_match(a,f[l])))return s;if(this._backtrack){r=!1;continue}return!1}if(!this.options.flex)break}return r?!1!==(s=this.test_match(r,f[u]))&&s:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return(r=this.conditionStack.length-1-Math.abs(r||0))>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,a,u,f){switch(u){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}},g.prototype=y,y.Parser=g,new g}());z.parser=z;const ct=z;let A="";const U=[],F=[],O=[],J=function(){const t=function(i){return O[i].processed};let e=!0;for(const[i,o]of O.entries())t(i),e=e&&o.processed;return e},Q={getConfig:()=>(0,k.c)().journey,clear:function(){U.length=0,F.length=0,A="",O.length=0,(0,k.t)()},setDiagramTitle:k.q,getDiagramTitle:k.r,setAccTitle:k.s,getAccTitle:k.g,setAccDescription:k.b,getAccDescription:k.a,addSection:function(t){A=t,U.push(t)},getSections:function(){return U},getTasks:function(){let t=J(),i=0;for(;!t&&i<100;)t=J(),i++;return F.push(...O),F},addTask:function(t,e){const i=e.substr(1).split(":");let o=0,n=[];1===i.length?(o=Number(i[0]),n=[]):(o=Number(i[0]),n=i[1].split(","));const h=n.map(d=>d.trim());O.push({section:A,type:A,people:h,task:t,score:o})},addTaskOrg:function(t){F.push({section:A,type:A,description:t,task:t,classes:[]})},getActors:function(){return function(){const t=[];return F.forEach(i=>{i.people&&t.push(...i.people)}),[...new Set(t)].sort()}()}},D=function(t,e){return(0,R.d)(t,e)},tt=function(t,e){const i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i};let st=-1;const nt=function(){function t(n,h,c,d,y,m,g,p){o(h.append("text").attr("x",c+y/2).attr("y",d+m/2+5).style("font-color",p).style("text-anchor","middle").text(n),g)}function e(n,h,c,d,y,m,g,p,s){const{taskFontSize:r,taskFontFamily:a}=p,u=n.split(/<br\s*\/?>/gi);for(let f=0;f<u.length;f++){const l=f*r-r*(u.length-1)/2,E=h.append("text").attr("x",c+y/2).attr("y",d).attr("fill",s).style("text-anchor","middle").style("font-size",r).style("font-family",a);E.append("tspan").attr("x",c+y/2).attr("dy",l).text(u[f]),E.attr("y",d+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),o(E,g)}}function i(n,h,c,d,y,m,g,p){const s=h.append("switch"),a=s.append("foreignObject").attr("x",c).attr("y",d).attr("width",y).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),e(n,s,c,d,y,m,g,p),o(a,g)}function o(n,h){for(const c in h)c in h&&n.attr(c,h[c])}return function(n){return"fo"===n.textPlacement?i:"old"===n.textPlacement?t:e}}(),B_drawCircle=tt,B_drawSection=function(t,e,i){const o=t.append("g"),n=(0,R.g)();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=i.width*e.taskCount+i.diagramMarginX*(e.taskCount-1),n.height=i.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,D(o,n),nt(i)(e.text,o,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},i,e.colour)},B_drawText=function(t,e){return(0,R.f)(t,e)},B_drawTask=function(t,e,i){const o=e.x+i.width/2,n=t.append("g");st++,n.append("line").attr("id","task"+st).attr("x1",o).attr("y1",e.y).attr("x2",o).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),function(t,e){t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible");const n=t.append("g");n.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),n.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),e.score>3?function h(y){const m=(0,L.Nb1)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}(n):e.score<3?function c(y){const m=(0,L.Nb1)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}(n):function d(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}(n)}(n,{cx:o,cy:300+30*(5-e.score),score:e.score});const c=(0,R.g)();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=i.width,c.height=i.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,D(n,c);let d=e.x+14;e.people.forEach(y=>{tt(n,{cx:d,cy:e.y,r:7,fill:e.actors[y].color,stroke:"#000",title:y,pos:e.actors[y].position}),d+=10}),nt(i)(e.task,n,c.x,c.y,c.width,c.height,{class:"task"},i,e.colour)},M={},N=(0,k.c)().journey,S=N.leftMargin,v={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,i,o){t[e]=void 0===t[e]?i:o(i,t[e])},updateBounds:function(t,e,i,o){const n=(0,k.c)().journey,h=this;let c=0;this.sequenceItems.forEach(function d(y){return function(g){c++;const p=h.sequenceItems.length-c+1;h.updateVal(g,"starty",e-p*n.boxMargin,Math.min),h.updateVal(g,"stopy",o+p*n.boxMargin,Math.max),h.updateVal(v.data,"startx",t-p*n.boxMargin,Math.min),h.updateVal(v.data,"stopx",i+p*n.boxMargin,Math.max),"activation"!==y&&(h.updateVal(g,"startx",t-p*n.boxMargin,Math.min),h.updateVal(g,"stopx",i+p*n.boxMargin,Math.max),h.updateVal(v.data,"starty",e-p*n.boxMargin,Math.min),h.updateVal(v.data,"stopy",o+p*n.boxMargin,Math.max))}}())},insert:function(t,e,i,o){const n=Math.min(t,i),h=Math.max(t,i),c=Math.min(e,o),d=Math.max(e,o);this.updateVal(v.data,"startx",n,Math.min),this.updateVal(v.data,"starty",c,Math.min),this.updateVal(v.data,"stopx",h,Math.max),this.updateVal(v.data,"stopy",d,Math.max),this.updateBounds(n,c,h,d)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},K=N.sectionFills,it=N.sectionColours,rt={setConf:function(t){Object.keys(t).forEach(function(i){N[i]=t[i]})},draw:function(t,e,i,o){const n=(0,k.c)().journey,h=(0,k.c)().securityLevel;let c;"sandbox"===h&&(c=(0,L.Ys)("#i"+e));const d=(0,L.Ys)("sandbox"===h?c.nodes()[0].contentDocument.body:"body");v.init();const y=d.select("#"+e);!function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}(y);const m=o.db.getTasks(),g=o.db.getDiagramTitle(),p=o.db.getActors();for(const l in M)delete M[l];let s=0;p.forEach(l=>{M[l]={color:n.actorColours[s%n.actorColours.length],position:s},s++}),function Et(t){const e=(0,k.c)().journey;let i=60;Object.keys(M).forEach(o=>{B_drawCircle(t,{cx:20,cy:i,r:7,fill:M[o].color,stroke:"#000",pos:M[o].position}),B_drawText(t,{x:40,y:i+7,fill:"#666",text:o,textMargin:5|e.boxTextMargin}),i+=20})}(y),v.insert(0,0,S,50*Object.keys(M).length),function(t,e,i){const o=(0,k.c)().journey;let n="";const c=i+(2*o.height+o.diagramMarginY);let d=0,y="#CCC",m="black",g=0;for(const[p,s]of e.entries()){if(n!==s.section){y=K[d%K.length],g=d%K.length,m=it[d%it.length];let a=0;const u=s.section;for(let l=p;l<e.length&&e[l].section==u;l++)a+=1;B_drawSection(t,{x:p*o.taskMargin+p*o.width+S,y:50,text:s.section,fill:y,num:g,colour:m,taskCount:a},o),n=s.section,d++}const r=s.people.reduce((a,u)=>(M[u]&&(a[u]=M[u]),a),{});s.x=p*o.taskMargin+p*o.width+S,s.y=c,s.width=o.diagramMarginX,s.height=o.diagramMarginY,s.colour=m,s.fill=y,s.num=g,s.actors=r,B_drawTask(t,s,o),v.insert(s.x,s.y,s.x+s.width+o.taskMargin,450)}}(y,m,0);const r=v.getBounds();g&&y.append("text").text(g).attr("x",S).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const a=r.stopy-r.starty+2*n.diagramMarginY,u=S+r.stopx+2*n.diagramMarginX;(0,k.i)(y,a,u,n.useMaxWidth),y.append("line").attr("x1",S).attr("y1",4*n.height).attr("x2",u-S-4).attr("y2",4*n.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const f=g?70:0;y.attr("viewBox",`${r.startx} -25 ${u} ${a+f}`),y.attr("preserveAspectRatio","xMinYMin meet"),y.attr("height",a+f+25)}},Pt={parser:ct,db:Q,renderer:rt,styles:t=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0?`fill: ${t.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0?`fill: ${t.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0?`fill: ${t.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0?`fill: ${t.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0?`fill: ${t.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0?`fill: ${t.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0?`fill: ${t.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0?`fill: ${t.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${t.actor0?`fill: ${t.actor0}`:""};\n  }\n  .actor-1 {\n    ${t.actor1?`fill: ${t.actor1}`:""};\n  }\n  .actor-2 {\n    ${t.actor2?`fill: ${t.actor2}`:""};\n  }\n  .actor-3 {\n    ${t.actor3?`fill: ${t.actor3}`:""};\n  }\n  .actor-4 {\n    ${t.actor4?`fill: ${t.actor4}`:""};\n  }\n  .actor-5 {\n    ${t.actor5?`fill: ${t.actor5}`:""};\n  }\n`,init:t=>{rt.setConf(t.journey),Q.clear()}}}}]);