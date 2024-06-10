(self.webpackChunkreport=self.webpackChunkreport||[]).push([[831],{1861:function(_t){_t.exports=function(){"use strict";return function(J,O){var at=O.prototype,x=at.format;at.format=function(X){var E=this,ut=this.$locale();if(!this.isValid())return x.bind(this)(X);var h=this.$utils(),k=(X||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(V){switch(V){case"Q":return Math.ceil((E.$M+1)/3);case"Do":return ut.ordinal(E.$D);case"gggg":return E.weekYear();case"GGGG":return E.isoWeekYear();case"wo":return ut.ordinal(E.week(),"W");case"w":case"ww":return h.s(E.week(),"w"===V?1:2,"0");case"W":case"WW":return h.s(E.isoWeek(),"W"===V?1:2,"0");case"k":case"kk":return h.s(String(0===E.$H?24:E.$H),"k"===V?1:2,"0");case"X":return Math.floor(E.$d.getTime()/1e3);case"x":return E.$d.getTime();case"z":return"["+E.offsetName()+"]";case"zzz":return"["+E.offsetName("long")+"]";default:return V}});return x.bind(this)(k)}}}()},274:function(_t){_t.exports=function(){"use strict";var J={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},O=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,at=/\d\d/,x=/\d\d?/,X=/\d*[^-_:/,()\s\d]+/,E={},ut=function(y){return(y=+y)+(y>68?1900:2e3)},h=function(y){return function(_){this[y]=+_}},k=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(_){if(!_||"Z"===_)return 0;var I=_.match(/([+-]|\d\d)/g),A=60*I[1]+(+I[2]||0);return 0===A?0:"+"===I[0]?-A:A}(y)}],V=function(y){var _=E[y];return _&&(_.indexOf?_:_.s.concat(_.f))},H=function(y,_){var I,A=E.meridiem;if(A){for(var z=1;z<=24;z+=1)if(y.indexOf(A(z,0,_))>-1){I=z>12;break}}else I=y===(_?"pm":"PM");return I},vt={A:[X,function(y){this.afternoon=H(y,!1)}],a:[X,function(y){this.afternoon=H(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[at,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[x,h("seconds")],ss:[x,h("seconds")],m:[x,h("minutes")],mm:[x,h("minutes")],H:[x,h("hours")],h:[x,h("hours")],HH:[x,h("hours")],hh:[x,h("hours")],D:[x,h("day")],DD:[at,h("day")],Do:[X,function(y){var _=E.ordinal,I=y.match(/\d+/);if(this.day=I[0],_)for(var A=1;A<=31;A+=1)_(A).replace(/\[|\]/g,"")===y&&(this.day=A)}],M:[x,h("month")],MM:[at,h("month")],MMM:[X,function(y){var _=V("months"),I=(V("monthsShort")||_.map(function(A){return A.slice(0,3)})).indexOf(y)+1;if(I<1)throw new Error;this.month=I%12||I}],MMMM:[X,function(y){var _=V("months").indexOf(y)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,h("year")],YY:[at,function(y){this.year=ut(y)}],YYYY:[/\d{4}/,h("year")],Z:k,ZZ:k};return function(y,_,I){I.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(ut=y.parseTwoDigitYear);var A=_.prototype,z=A.parse;A.parse=function(G){var dt=G.date,$=G.utc,B=G.args;this.$u=$;var K=B[1];if("string"==typeof K){var lt=!0===B[2],tt=!0===B[3],R=lt||tt,N=B[2];tt&&(N=B[2]),E=this.$locale(),!lt&&N&&(E=I.Ls[N]),this.$d=function(wt,pt,ht){try{if(["x","X"].indexOf(pt)>-1)return new Date(("X"===pt?1e3:1)*wt);var Q=function Z(y){var I;I=E&&E.formats;for(var A=(y=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(lt,tt,R){var N=R&&R.toUpperCase();return tt||I[R]||J[R]||I[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(et,st,ft){return st||ft.slice(1)})})).match(O),z=A.length,G=0;G<z;G+=1){var dt=A[G],$=vt[dt],K=$&&$[1];A[G]=K?{regex:$&&$[0],parser:K}:dt.replace(/^\[|\]$/g,"")}return function(lt){for(var tt={},R=0,N=0;R<z;R+=1){var et=A[R];if("string"==typeof et)N+=et.length;else{var st=et.regex,ft=et.parser,wt=lt.slice(N),pt=st.exec(wt)[0];ft.call(tt,pt),lt=lt.replace(pt,"")}}return function(ht){var Q=ht.afternoon;if(void 0!==Q){var Tt=ht.hours;Q?Tt<12&&(ht.hours+=12):12===Tt&&(ht.hours=0),delete ht.afternoon}}(tt),tt}}(pt)(wt),Tt=Q.year,Dt=Q.month,qt=Q.day,Jt=Q.hours,$t=Q.minutes,te=Q.seconds,ee=Q.milliseconds,Vt=Q.zone,Mt=new Date,Lt=qt||(Tt||Dt?1:Mt.getDate()),At=Tt||Mt.getFullYear(),Et=0;Tt&&!Dt||(Et=Dt>0?Dt-1:Mt.getMonth());var It=Jt||0,Yt=$t||0,Ot=te||0,Wt=ee||0;return Vt?new Date(Date.UTC(At,Et,Lt,It,Yt,Ot,Wt+60*Vt.offset*1e3)):ht?new Date(Date.UTC(At,Et,Lt,It,Yt,Ot,Wt)):new Date(At,Et,Lt,It,Yt,Ot,Wt)}catch{return new Date("")}}(dt,K,$),this.init(),N&&!0!==N&&(this.$L=this.locale(N).$L),R&&dt!=this.format(K)&&(this.$d=new Date("")),E={}}else if(K instanceof Array)for(var et=K.length,st=1;st<=et;st+=1){B[1]=K[st-1];var ft=I.apply(this,B);if(ft.isValid()){this.$d=ft.$d,this.$L=ft.$L,this.init();break}st===et&&(this.$d=new Date(""))}else z.call(this,G)}}}()},7517:function(_t){_t.exports=function(){"use strict";var J="day";return function(O,at,x){var X=function(h){return h.add(4-h.isoWeekday(),J)},E=at.prototype;E.isoWeekYear=function(){return X(this).year()},E.isoWeek=function(h){if(!this.$utils().u(h))return this.add(7*(h-this.isoWeek()),J);var k,H,vt,Z=X(this),y=(k=this.isoWeekYear(),vt=4-(H=(this.$u?x.utc:x)().year(k).startOf("year")).isoWeekday(),H.isoWeekday()>4&&(vt+=7),H.add(vt,J));return Z.diff(y,"week")+1},E.isoWeekday=function(h){return this.$utils().u(h)?this.day()||7:this.day(this.day()%7?h:h-7)};var ut=E.startOf;E.startOf=function(h,k){var V=this.$utils(),H=!!V.u(k)||k;return"isoweek"===V.p(h)?H?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):ut.bind(this)(h,k)}}}()},6831:(_t,J,O)=>{"use strict";O.r(J),O.d(J,{diagram:()=>Ye});var at=O(6780),x=O(1764),X=O(7517),E=O(274),ut=O(1861),h=O(9037),k=O(8586),H=(O(2735),function(){var t=function(v,n,u,d){for(u=u||{},d=v.length;d--;u[v[d]]=n);return u},s=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],i=[1,25],r=[1,26],a=[1,27],m=[1,28],f=[1,29],q=[1,30],ct=[1,31],ot=[1,9],W=[1,10],U=[1,11],kt=[1,12],nt=[1,13],it=[1,14],S=[1,15],zt=[1,16],Nt=[1,18],Ut=[1,19],Zt=[1,20],jt=[1,21],Xt=[1,22],Ht=[1,24],Gt=[1,32],g={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(n,u,d,c,p,e,P){var l=e.length-1;switch(p){case 1:return e[l-1];case 2:case 6:case 7:this.$=[];break;case 3:e[l-1].push(e[l]),this.$=e[l-1];break;case 4:case 5:this.$=e[l];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setDateFormat(e[l].substr(11)),this.$=e[l].substr(11);break;case 16:c.enableInclusiveEndDates(),this.$=e[l].substr(18);break;case 17:c.TopAxis(),this.$=e[l].substr(8);break;case 18:c.setAxisFormat(e[l].substr(11)),this.$=e[l].substr(11);break;case 19:c.setTickInterval(e[l].substr(13)),this.$=e[l].substr(13);break;case 20:c.setExcludes(e[l].substr(9)),this.$=e[l].substr(9);break;case 21:c.setIncludes(e[l].substr(9)),this.$=e[l].substr(9);break;case 22:c.setTodayMarker(e[l].substr(12)),this.$=e[l].substr(12);break;case 24:c.setDiagramTitle(e[l].substr(6)),this.$=e[l].substr(6);break;case 25:this.$=e[l].trim(),c.setAccTitle(this.$);break;case 26:case 27:this.$=e[l].trim(),c.setAccDescription(this.$);break;case 28:c.addSection(e[l].substr(8)),this.$=e[l].substr(8);break;case 30:c.addTask(e[l-1],e[l]),this.$="task";break;case 31:this.$=e[l-1],c.setClickEvent(e[l-1],e[l],null);break;case 32:this.$=e[l-2],c.setClickEvent(e[l-2],e[l-1],e[l]);break;case 33:this.$=e[l-2],c.setClickEvent(e[l-2],e[l-1],null),c.setLink(e[l-2],e[l]);break;case 34:this.$=e[l-3],c.setClickEvent(e[l-3],e[l-2],e[l-1]),c.setLink(e[l-3],e[l]);break;case 35:this.$=e[l-2],c.setClickEvent(e[l-2],e[l],null),c.setLink(e[l-2],e[l-1]);break;case 36:this.$=e[l-3],c.setClickEvent(e[l-3],e[l-1],e[l]),c.setLink(e[l-3],e[l-2]);break;case 37:this.$=e[l-1],c.setLink(e[l-1],e[l]);break;case 38:case 44:this.$=e[l-1]+" "+e[l];break;case 39:case 40:case 42:this.$=e[l-2]+" "+e[l-1]+" "+e[l];break;case 41:case 43:this.$=e[l-3]+" "+e[l-2]+" "+e[l-1]+" "+e[l]}},table:[{3:1,4:[1,2]},{1:[3]},t(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:r,14:a,15:m,16:f,17:q,18:ct,19:ot,20:W,21:U,22:kt,23:nt,24:it,25:S,26:zt,27:Nt,28:Ut,30:Zt,32:jt,33:Xt,34:23,35:Ht,37:Gt},t(s,[2,7],{1:[2,1]}),t(s,[2,3]),{9:33,11:17,12:i,13:r,14:a,15:m,16:f,17:q,18:ct,19:ot,20:W,21:U,22:kt,23:nt,24:it,25:S,26:zt,27:Nt,28:Ut,30:Zt,32:jt,33:Xt,34:23,35:Ht,37:Gt},t(s,[2,5]),t(s,[2,6]),t(s,[2,15]),t(s,[2,16]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),{29:[1,34]},{31:[1,35]},t(s,[2,27]),t(s,[2,28]),t(s,[2,29]),{36:[1,36]},t(s,[2,8]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),{38:[1,37],40:[1,38]},t(s,[2,4]),t(s,[2,25]),t(s,[2,26]),t(s,[2,30]),t(s,[2,31],{39:[1,39],40:[1,40]}),t(s,[2,37],{38:[1,41]}),t(s,[2,32],{40:[1,42]}),t(s,[2,33]),t(s,[2,35],{39:[1,43]}),t(s,[2,34]),t(s,[2,36])],defaultActions:{},parseError:function(n,u){if(!u.recoverable){var d=new Error(n);throw d.hash=u,d}this.trace(n)},parse:function(n){var u=this,d=[0],c=[],p=[null],e=[],P=this.table,l="",o=0,T=0,Y=2,C=1,M=e.slice.call(arguments,1),D=Object.create(this.lexer),L={yy:{}};for(var Ft in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Ft)&&(L.yy[Ft]=this.yy[Ft]);D.setInput(n,L.yy),L.yy.lexer=D,L.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var Pt=D.yylloc;e.push(Pt);var Oe=D.options&&D.options.ranges;function We(){var gt;return"number"!=typeof(gt=c.pop()||D.lex()||C)&&(gt instanceof Array&&(gt=(c=gt).pop()),gt=u.symbols_[gt]||gt),gt}this.parseError="function"==typeof L.yy.parseError?L.yy.parseError:Object.getPrototypeOf(this).parseError;for(var j,xt,rt,ie,Kt,yt,Qt,St={};;){if(this.defaultActions[xt=d[d.length-1]]?rt=this.defaultActions[xt]:((null===j||typeof j>"u")&&(j=We()),rt=P[xt]&&P[xt][j]),typeof rt>"u"||!rt.length||!rt[0]){var re="";for(Kt in Qt=[],P[xt])this.terminals_[Kt]&&Kt>Y&&Qt.push("'"+this.terminals_[Kt]+"'");re=D.showPosition?"Parse error on line "+(o+1)+":\n"+D.showPosition()+"\nExpecting "+Qt.join(", ")+", got '"+(this.terminals_[j]||j)+"'":"Parse error on line "+(o+1)+": Unexpected "+(j==C?"end of input":"'"+(this.terminals_[j]||j)+"'"),this.parseError(re,{text:D.match,token:this.terminals_[j]||j,line:D.yylineno,loc:Pt,expected:Qt})}if(rt[0]instanceof Array&&rt.length>1)throw new Error("Parse Error: multiple actions possible at state: "+xt+", token: "+j);switch(rt[0]){case 1:d.push(j),p.push(D.yytext),e.push(D.yylloc),d.push(rt[1]),j=null,T=D.yyleng,l=D.yytext,o=D.yylineno,Pt=D.yylloc;break;case 2:if(St.$=p[p.length-(yt=this.productions_[rt[1]][1])],St._$={first_line:e[e.length-(yt||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(yt||1)].first_column,last_column:e[e.length-1].last_column},Oe&&(St._$.range=[e[e.length-(yt||1)].range[0],e[e.length-1].range[1]]),typeof(ie=this.performAction.apply(St,[l,T,o,L.yy,rt[1],p,e].concat(M)))<"u")return ie;yt&&(d=d.slice(0,-1*yt*2),p=p.slice(0,-1*yt),e=e.slice(0,-1*yt)),d.push(this.productions_[rt[1]][0]),p.push(St.$),e.push(St._$),d.push(P[d[d.length-2]][d[d.length-1]]);break;case 3:return!0}}return!0}};function b(){this.yy={}}return g.lexer={EOF:1,parseError:function(u,d){if(!this.yy.parser)throw new Error(u);this.yy.parser.parseError(u,d)},setInput:function(n,u){return this.yy=u||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];return this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n,n.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var u=n.length,d=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===c.length?this.yylloc.first_column:0)+c[c.length-d.length].length-d[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),u=new Array(n.length+1).join("-");return n+this.upcomingInput()+"\n"+u+"^"},test_match:function(n,u){var d,c,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),(c=n[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],d=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var e in p)this[e]=p[e];return!1}return!1},next:function(){if(this.done)return this.EOF;var n,u,d,c;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),e=0;e<p.length;e++)if((d=this._input.match(this.rules[p[e]]))&&(!u||d[0].length>u[0].length)){if(u=d,c=e,this.options.backtrack_lexer){if(!1!==(n=this.test_match(d,p[e])))return n;if(this._backtrack){u=!1;continue}return!1}if(!this.options.flex)break}return u?!1!==(n=this.test_match(u,p[c]))&&n:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return(u=this.conditionStack.length-1-Math.abs(u||0))>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,d,c,p){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 40;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 22:return 39;case 23:this.begin("click");break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}},b.prototype=g,g.Parser=b,new b}());H.parser=H;const vt=H;x.extend(X),x.extend(E),x.extend(ut);let _,Z="",y="",I="",A=[],z=[],G={},dt=[],$=[],B="",K="";const lt=["active","done","crit","milestone"];let tt=[],R=!1,N=!1,et="sunday",st=0;const ce=function(t,s,i,r){return!r.includes(t.format(s.trim()))&&(!!(t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(s.trim())))},oe=function(t,s,i,r){if(!i.length||t.manualEndTime)return;let a,m;a=t.startTime instanceof Date?x(t.startTime):x(t.startTime,s,!0),a=a.add(1,"d"),m=t.endTime instanceof Date?x(t.endTime):x(t.endTime,s,!0);const[f,q]=be(a,m,s,i,r);t.endTime=f.toDate(),t.renderEndTime=q},be=function(t,s,i,r,a){let m=!1,f=null;for(;t<=s;)m||(f=s.toDate()),m=ce(t,i,r,a),m&&(s=s.add(1,"d")),t=t.add(1,"d");return[s,f]},se=function(t,s,i){i=i.trim();const a=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==a){let f=null;for(const ct of a.groups.ids.split(" ")){let ot=bt(ct);void 0!==ot&&(!f||ot.endTime>f.endTime)&&(f=ot)}if(f)return f.endTime;const q=new Date;return q.setHours(0,0,0,0),q}let m=x(i,s.trim(),!0);if(m.isValid())return m.toDate();{h.l.debug("Invalid date:"+i),h.l.debug("With date format:"+s.trim());const f=new Date(i);if(void 0===f||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+i);return f}},le=function(t){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==s?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},ue=function(t,s,i,r=!1){i=i.trim();const m=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==m){let W=null;for(const kt of m.groups.ids.split(" ")){let nt=bt(kt);void 0!==nt&&(!W||nt.startTime<W.startTime)&&(W=nt)}if(W)return W.startTime;const U=new Date;return U.setHours(0,0,0,0),U}let f=x(i,s.trim(),!0);if(f.isValid())return r&&(f=f.add(1,"d")),f.toDate();let q=x(t);const[ct,ot]=le(i);if(!Number.isNaN(ct)){const W=q.add(ct,ot);W.isValid()&&(q=W)}return q.toDate()};let Bt=0;const Ct=function(t){return void 0===t?(Bt+=1,"task"+Bt):t};let ne,Rt,F=[];const de={},bt=function(t){return F[de[t]]},fe=function(){const t=function(i){const r=F[i];let a="";switch(F[i].raw.startTime.type){case"prevTaskEnd":{const m=bt(r.prevTaskId);r.startTime=m.endTime;break}case"getStartDate":a=se(0,Z,F[i].raw.startTime.startData),a&&(F[i].startTime=a)}return F[i].startTime&&(F[i].endTime=ue(F[i].startTime,Z,F[i].raw.endTime.data,R),F[i].endTime&&(F[i].processed=!0,F[i].manualEndTime=x(F[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),oe(F[i],Z,z,A))),F[i].processed};let s=!0;for(const[i,r]of F.entries())t(i),s=s&&r.processed;return s},he=function(t,s){t.split(",").forEach(function(i){let r=bt(i);void 0!==r&&r.classes.push(s)})},me=function(t,s){tt.push(function(){const i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){s()})},function(){const i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){s()})})};function ke(t,s,i){let r=!0;for(;r;)r=!1,i.forEach(function(a){const f=new RegExp("^\\s*"+a+"\\s*$");t[0].match(f)&&(s[a]=!0,t.shift(1),r=!0)})}const ye={monday:k.Ox9,tuesday:k.YDX,wednesday:k.EFj,thursday:k.Igq,friday:k.y2j,saturday:k.LqH,sunday:k.Zyz},Ie=(t,s)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((m,f)=>m.startTime-f.startTime||m.order-f.order),a=0;for(const m of r)for(let f=0;f<i.length;f++)if(m.startTime>=i[f]){i[f]=m.endTime,m.order=f+s,f>a&&(a=f);break}return a};let mt;const Ye={parser:vt,db:{getConfig:()=>(0,h.c)().gantt,clear:function(){dt=[],$=[],B="",tt=[],Bt=0,ne=void 0,Rt=void 0,F=[],Z="",y="",K="",_=void 0,I="",A=[],z=[],R=!1,N=!1,st=0,G={},(0,h.v)(),et="sunday"},setDateFormat:function(t){Z=t},getDateFormat:function(){return Z},enableInclusiveEndDates:function(){R=!0},endDatesAreInclusive:function(){return R},enableTopAxis:function(){N=!0},topAxisEnabled:function(){return N},setAxisFormat:function(t){y=t},getAxisFormat:function(){return y},setTickInterval:function(t){_=t},getTickInterval:function(){return _},setTodayMarker:function(t){I=t},getTodayMarker:function(){return I},setAccTitle:h.s,getAccTitle:h.g,setDiagramTitle:h.q,getDiagramTitle:h.t,setDisplayMode:function(t){K=t},getDisplayMode:function(){return K},setAccDescription:h.b,getAccDescription:h.a,addSection:function(t){B=t,dt.push(t)},getSections:function(){return dt},getTasks:function(){let t=fe(),i=0;for(;!t&&i<10;)t=fe(),i++;return $=F,$},addTask:function(t,s){const i={section:B,type:B,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},r=function(t,s){let i;i=":"===s.substr(0,1)?s.substr(1,s.length):s;const r=i.split(","),a={};ke(r,a,lt);for(let m=0;m<r.length;m++)r[m]=r[m].trim();switch(r.length){case 1:a.id=Ct(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:r[0]};break;case 2:a.id=Ct(),a.startTime={type:"getStartDate",startData:r[0]},a.endTime={data:r[1]};break;case 3:a.id=Ct(r[0]),a.startTime={type:"getStartDate",startData:r[1]},a.endTime={data:r[2]}}return a}(Rt,s);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=Rt,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=st,st++;const a=F.push(i);Rt=i.id,de[i.id]=a-1},findTaskById:bt,addTaskOrg:function(t,s){const i={section:B,type:B,description:t,task:t,classes:[]},r=function(t,s){let i;i=":"===s.substr(0,1)?s.substr(1,s.length):s;const r=i.split(","),a={};ke(r,a,lt);for(let f=0;f<r.length;f++)r[f]=r[f].trim();let m="";switch(r.length){case 1:a.id=Ct(),a.startTime=t.endTime,m=r[0];break;case 2:a.id=Ct(),a.startTime=se(0,Z,r[0]),m=r[1];break;case 3:a.id=Ct(r[0]),a.startTime=se(0,Z,r[1]),m=r[2]}return m&&(a.endTime=ue(a.startTime,Z,m,R),a.manualEndTime=x(m,"YYYY-MM-DD",!0).isValid(),oe(a,Z,z,A)),a}(ne,s);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,ne=i,$.push(i)},setIncludes:function(t){A=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return A},setExcludes:function(t){z=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return z},setClickEvent:function(t,s,i){t.split(",").forEach(function(r){!function(t,s,i){if("loose"!==(0,h.c)().securityLevel||void 0===s)return;let r=[];if("string"==typeof i){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<r.length;m++){let f=r[m].trim();'"'===f.charAt(0)&&'"'===f.charAt(f.length-1)&&(f=f.substr(1,f.length-2)),r[m]=f}}0===r.length&&r.push(t),void 0!==bt(t)&&me(t,()=>{h.u.runFunc(s,...r)})}(r,s,i)}),he(t,"clickable")},setLink:function(t,s){let i=s;"loose"!==(0,h.c)().securityLevel&&(i=(0,at.Nm)(s)),t.split(",").forEach(function(r){void 0!==bt(r)&&(me(r,()=>{window.open(i,"_self")}),G[r]=i)}),he(t,"clickable")},getLinks:function(){return G},bindFunctions:function(t){tt.forEach(function(s){s(t)})},parseDuration:le,isInvalidDate:ce,setWeekday:function(t){et=t},getWeekday:function(){return et}},renderer:{setConf:function(){h.l.debug("Something is calling, setConf, remove the call")},draw:function(t,s,i,r){const a=(0,h.c)().gantt,m=(0,h.c)().securityLevel;let f;"sandbox"===m&&(f=(0,k.Ys)("#i"+s));const q=(0,k.Ys)("sandbox"===m?f.nodes()[0].contentDocument.body:"body"),ct="sandbox"===m?f.nodes()[0].contentDocument:document,ot=ct.getElementById(s);mt=ot.parentElement.offsetWidth,void 0===mt&&(mt=1200),void 0!==a.useWidth&&(mt=a.useWidth);const W=r.db.getTasks();let U=[];for(const g of W)U.push(g.type);U=function Gt(g){const w={},b=[];for(let v=0,n=g.length;v<n;++v)Object.prototype.hasOwnProperty.call(w,g[v])||(w[g[v]]=!0,b.push(g[v]));return b}(U);const kt={};let nt=2*a.topPadding;if("compact"===r.db.getDisplayMode()||"compact"===a.displayMode){const g={};for(const b of W)void 0===g[b.section]?g[b.section]=[b]:g[b.section].push(b);let w=0;for(const b of Object.keys(g)){const v=Ie(g[b],w)+1;w+=v,nt+=v*(a.barHeight+a.barGap),kt[b]=v}}else{nt+=W.length*(a.barHeight+a.barGap);for(const g of U)kt[g]=W.filter(w=>w.type===g).length}ot.setAttribute("viewBox","0 0 "+mt+" "+nt);const it=q.select(`[id="${s}"]`),S=(0,k.Xf)().domain([(0,k.VV$)(W,function(g){return g.startTime}),(0,k.Fp7)(W,function(g){return g.endTime})]).rangeRound([0,mt-a.leftPadding-a.rightPadding]);W.sort(function zt(g,w){const b=g.startTime,v=w.startTime;let n=0;return b>v?n=1:b<v&&(n=-1),n}),function Nt(g,w,b){const v=a.barHeight,n=v+a.barGap,u=a.topPadding,d=a.leftPadding;(0,k.BYU)().domain([0,U.length]).range(["#00B9FA","#F95002"]).interpolate(k.JHv),function Zt(g,w,b,v,n,u,d,c){if(0===d.length&&0===c.length)return;let p,e;for(const{startTime:C,endTime:M}of u)(void 0===p||C<p)&&(p=C),(void 0===e||M>e)&&(e=M);if(!p||!e)return;if(x(e).diff(x(p),"year")>5)return void h.l.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");const P=r.db.getDateFormat(),l=[];let o=null,T=x(p);for(;T.valueOf()<=e;)r.db.isInvalidDate(T,P,d,c)?o?o.end=T:o={start:T,end:T}:o&&(l.push(o),o=null),T=T.add(1,"d");it.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",function(C){return"exclude-"+C.start.format("YYYY-MM-DD")}).attr("x",function(C){return S(C.start)+b}).attr("y",a.gridLineStartPadding).attr("width",function(C){const M=C.end.add(1,"day");return S(M)-S(C.start)}).attr("height",n-w-a.gridLineStartPadding).attr("transform-origin",function(C,M){return(S(C.start)+b+.5*(S(C.end)-S(C.start))).toString()+"px "+(M*g+.5*n).toString()+"px"}).attr("class","exclude-range")}(n,u,d,0,b,g,r.db.getExcludes(),r.db.getIncludes()),function jt(g,w,b,v){let n=(0,k.LLu)(S).tickSize(-v+w+a.gridLineStartPadding).tickFormat((0,k.i$Z)(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));const d=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||a.tickInterval);if(null!==d){const c=d[1],p=d[2],e=r.db.getWeekday()||a.weekday;switch(p){case"millisecond":n.ticks(k.U8T.every(c));break;case"second":n.ticks(k.S1K.every(c));break;case"minute":n.ticks(k.Z_i.every(c));break;case"hour":n.ticks(k.WQD.every(c));break;case"day":n.ticks(k.rr1.every(c));break;case"week":n.ticks(ye[e].every(c));break;case"month":n.ticks(k.F0B.every(c))}}if(it.append("g").attr("class","grid").attr("transform","translate("+g+", "+(v-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||a.topAxis){let c=(0,k.F5q)(S).tickSize(-v+w+a.gridLineStartPadding).tickFormat((0,k.i$Z)(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(null!==d){const p=d[1],e=d[2],P=r.db.getWeekday()||a.weekday;switch(e){case"millisecond":c.ticks(k.U8T.every(p));break;case"second":c.ticks(k.S1K.every(p));break;case"minute":c.ticks(k.Z_i.every(p));break;case"hour":c.ticks(k.WQD.every(p));break;case"day":c.ticks(k.rr1.every(p));break;case"week":c.ticks(ye[P].every(p));break;case"month":c.ticks(k.F0B.every(p))}}it.append("g").attr("class","grid").attr("transform","translate("+g+", "+w+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(d,u,0,b),function Ut(g,w,b,v,n,u,d){const p=[...new Set(g.map(o=>o.order))].map(o=>g.find(T=>T.order===o));it.append("g").selectAll("rect").data(p).enter().append("rect").attr("x",0).attr("y",function(o,T){return o.order*w+b-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",w).attr("class",function(o){for(const[T,Y]of U.entries())if(o.type===Y)return"section section"+T%a.numberSectionStyles;return"section section0"});const e=it.append("g").selectAll("rect").data(g).enter(),P=r.db.getLinks();if(e.append("rect").attr("id",function(o){return o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?S(o.startTime)+v+.5*(S(o.endTime)-S(o.startTime))-.5*n:S(o.startTime)+v}).attr("y",function(o,T){return o.order*w+b}).attr("width",function(o){return o.milestone?n:S(o.renderEndTime||o.endTime)-S(o.startTime)}).attr("height",n).attr("transform-origin",function(o,T){return T=o.order,(S(o.startTime)+v+.5*(S(o.endTime)-S(o.startTime))).toString()+"px "+(T*w+b+.5*n).toString()+"px"}).attr("class",function(o){let Y="";o.classes.length>0&&(Y=o.classes.join(" "));let C=0;for(const[D,L]of U.entries())o.type===L&&(C=D%a.numberSectionStyles);let M="";return o.active?o.crit?M+=" activeCrit":M=" active":o.done?M=o.crit?" doneCrit":" done":o.crit&&(M+=" crit"),0===M.length&&(M=" task"),o.milestone&&(M=" milestone "+M),M+=C,M+=" "+Y,"task"+M}),e.append("text").attr("id",function(o){return o.id+"-text"}).text(function(o){return o.task}).attr("font-size",a.fontSize).attr("x",function(o){let T=S(o.startTime),Y=S(o.renderEndTime||o.endTime);o.milestone&&(T+=.5*(S(o.endTime)-S(o.startTime))-.5*n),o.milestone&&(Y=T+n);const C=this.getBBox().width;return C>Y-T?Y+C+1.5*a.leftPadding>d?T+v-5:Y+v+5:(Y-T)/2+T+v}).attr("y",function(o,T){return o.order*w+a.barHeight/2+(a.fontSize/2-2)+b}).attr("text-height",n).attr("class",function(o){const T=S(o.startTime);let Y=S(o.endTime);o.milestone&&(Y=T+n);const C=this.getBBox().width;let M="";o.classes.length>0&&(M=o.classes.join(" "));let D=0;for(const[Ft,Pt]of U.entries())o.type===Pt&&(D=Ft%a.numberSectionStyles);let L="";return o.active&&(L=o.crit?"activeCritText"+D:"activeText"+D),o.done?L=o.crit?L+" doneCritText"+D:L+" doneText"+D:o.crit&&(L=L+" critText"+D),o.milestone&&(L+=" milestoneText"),C>Y-T?Y+C+1.5*a.leftPadding>d?M+" taskTextOutsideLeft taskTextOutside"+D+" "+L:M+" taskTextOutsideRight taskTextOutside"+D+" "+L+" width-"+C:M+" taskText taskText"+D+" "+L+" width-"+C}),"sandbox"===(0,h.c)().securityLevel){let o;o=(0,k.Ys)("#i"+s);const T=o.nodes()[0].contentDocument;e.filter(function(Y){return void 0!==P[Y.id]}).each(function(Y){var C=T.querySelector("#"+Y.id),M=T.querySelector("#"+Y.id+"-text");const D=C.parentNode;var L=T.createElement("a");L.setAttribute("xlink:href",P[Y.id]),L.setAttribute("target","_top"),D.appendChild(L),L.appendChild(C),L.appendChild(M)})}}(g,n,u,d,v,0,w),function Xt(g,w){let b=0;const v=Object.keys(kt).map(n=>[n,kt[n]]);it.append("g").selectAll("text").data(v).enter().append(function(n){const u=n[0].split(h.e.lineBreakRegex),d=-(u.length-1)/2,c=ct.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("dy",d+"em");for(const[p,e]of u.entries()){const P=ct.createElementNS("http://www.w3.org/2000/svg","tspan");P.setAttribute("alignment-baseline","central"),P.setAttribute("x","10"),p>0&&P.setAttribute("dy","1em"),P.textContent=e,c.appendChild(P)}return c}).attr("x",10).attr("y",function(n,u){if(!(u>0))return n[1]*g/2+w;for(let d=0;d<u;d++)return b+=v[u-1][1],n[1]*g/2+b*g+w}).attr("font-size",a.sectionFontSize).attr("class",function(n){for(const[u,d]of U.entries())if(n[0]===d)return"sectionTitle sectionTitle"+u%a.numberSectionStyles;return"sectionTitle"})}(n,u),function Ht(g,w,b,v){const n=r.db.getTodayMarker();if("off"===n)return;const u=it.append("g").attr("class","today"),d=new Date,c=u.append("line");c.attr("x1",S(d)+g).attr("x2",S(d)+g).attr("y1",a.titleTopMargin).attr("y2",v-a.titleTopMargin).attr("class","today"),""!==n&&c.attr("style",n.replace(/,/g,";"))}(d,0,0,b)}(W,mt,nt),(0,h.i)(it,nt,mt,a.useMaxWidth),it.append("text").text(r.db.getDiagramTitle()).attr("x",mt/2).attr("y",a.titleTopMargin).attr("class","titleText")}},styles:t=>`\n  .mermaid-main-font {\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n  }\n\n  .grid .tick text {\n    font-family: ${t.fontFamily};\n    fill: ${t.textColor};\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n  }\n\n\n  /* Special case clickable */\n\n  .task.clickable {\n    cursor: pointer;\n  }\n\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.titleColor||t.textColor};\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n`}}}]);