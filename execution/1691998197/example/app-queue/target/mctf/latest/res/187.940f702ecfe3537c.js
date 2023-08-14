"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[187],{2187:(st,fe,j)=>{j.r(fe),j.d(fe,{diagram:()=>Ze});var f=j(5615),Le=j(1074),ne=(j(1764),j(6780),j(2735),function(){var r=function(z,m,g,x){for(g=g||{},x=z.length;x--;g[z[x]]=m);return g},a=[1,4],o=[1,7],p=[1,5],n=[1,9],c=[1,6],u=[2,6],h=[1,16],T=[6,8,14,20,22,24,25,27,29,32,37,40,50,55],_=[8,14,20,22,24,25,27,29,32,37,40],l=[8,13,14,20,22,24,25,27,29,32,37,40],d=[1,26],b=[6,8,14,50,55],s=[8,14,55],y=[1,53],w=[1,52],I=[8,14,30,33,35,38,55],v=[1,67],k=[1,68],E=[1,69],N=[8,14,33,35,42,55],oe={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,GG:6,document:7,EOF:8,":":9,DIR:10,options:11,body:12,OPT:13,NL:14,line:15,statement:16,commitStatement:17,mergeStatement:18,cherryPickStatement:19,acc_title:20,acc_title_value:21,acc_descr:22,acc_descr_value:23,acc_descr_multiline_value:24,section:25,branchStatement:26,CHECKOUT:27,ref:28,BRANCH:29,ORDER:30,NUM:31,CHERRY_PICK:32,COMMIT_ID:33,STR:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,openDirective:46,typeDirective:47,closeDirective:48,argDirective:49,open_directive:50,type_directive:51,arg_directive:52,close_directive:53,ID:54,";":55,$accept:0,$end:1},terminals_:{2:"error",6:"GG",8:"EOF",9:":",10:"DIR",13:"OPT",14:"NL",20:"acc_title",21:"acc_title_value",22:"acc_descr",23:"acc_descr_value",24:"acc_descr_multiline_value",25:"section",27:"CHECKOUT",29:"BRANCH",30:"ORDER",31:"NUM",32:"CHERRY_PICK",33:"COMMIT_ID",34:"STR",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",50:"open_directive",51:"type_directive",52:"arg_directive",53:"close_directive",54:"ID",55:";"},productions_:[0,[3,2],[3,2],[3,3],[3,4],[3,5],[7,0],[7,2],[11,2],[11,1],[12,0],[12,2],[15,2],[15,1],[16,1],[16,1],[16,1],[16,2],[16,2],[16,1],[16,1],[16,1],[16,2],[26,2],[26,4],[19,3],[19,5],[19,5],[19,5],[19,5],[18,2],[18,4],[18,4],[18,4],[18,6],[18,6],[18,6],[18,6],[18,6],[18,6],[18,8],[18,8],[18,8],[18,8],[18,8],[18,8],[17,2],[17,3],[17,3],[17,5],[17,5],[17,3],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,3],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[41,0],[41,1],[39,1],[39,1],[39,1],[5,3],[5,5],[46,1],[47,1],[49,1],[48,1],[28,1],[28,1],[4,1],[4,1],[4,1]],performAction:function(m,g,x,i,L,e,ee){var t=e.length-1;switch(L){case 3:return e[t];case 4:return e[t-1];case 5:return i.setDirection(e[t-3]),e[t-1];case 7:i.setOptions(e[t-1]),this.$=e[t];break;case 8:e[t-1]+=e[t],this.$=e[t-1];break;case 10:this.$=[];break;case 11:e[t-1].push(e[t]),this.$=e[t-1];break;case 12:this.$=e[t-1];break;case 17:this.$=e[t].trim(),i.setAccTitle(this.$);break;case 18:case 19:this.$=e[t].trim(),i.setAccDescription(this.$);break;case 20:i.addSection(e[t].substr(8)),this.$=e[t].substr(8);break;case 22:i.checkout(e[t]);break;case 23:i.branch(e[t]);break;case 24:i.branch(e[t-2],e[t]);break;case 25:i.cherryPick(e[t],"",void 0);break;case 26:i.cherryPick(e[t-2],"",e[t]);break;case 27:case 29:i.cherryPick(e[t-2],"","");break;case 28:i.cherryPick(e[t],"",e[t-2]);break;case 30:i.merge(e[t],"","","");break;case 31:i.merge(e[t-2],e[t],"","");break;case 32:i.merge(e[t-2],"",e[t],"");break;case 33:i.merge(e[t-2],"","",e[t]);break;case 34:i.merge(e[t-4],e[t],"",e[t-2]);break;case 35:i.merge(e[t-4],"",e[t],e[t-2]);break;case 36:i.merge(e[t-4],"",e[t-2],e[t]);break;case 37:i.merge(e[t-4],e[t-2],e[t],"");break;case 38:i.merge(e[t-4],e[t-2],"",e[t]);break;case 39:i.merge(e[t-4],e[t],e[t-2],"");break;case 40:i.merge(e[t-6],e[t-4],e[t-2],e[t]);break;case 41:i.merge(e[t-6],e[t],e[t-4],e[t-2]);break;case 42:i.merge(e[t-6],e[t-4],e[t],e[t-2]);break;case 43:i.merge(e[t-6],e[t-2],e[t-4],e[t]);break;case 44:i.merge(e[t-6],e[t],e[t-2],e[t-4]);break;case 45:i.merge(e[t-6],e[t-2],e[t],e[t-4]);break;case 46:i.commit(e[t]);break;case 47:i.commit("","",i.commitType.NORMAL,e[t]);break;case 48:i.commit("","",e[t],"");break;case 49:i.commit("","",e[t],e[t-2]);break;case 50:i.commit("","",e[t-2],e[t]);break;case 51:i.commit("",e[t],i.commitType.NORMAL,"");break;case 52:i.commit("",e[t-2],i.commitType.NORMAL,e[t]);break;case 53:i.commit("",e[t],i.commitType.NORMAL,e[t-2]);break;case 54:i.commit("",e[t-2],e[t],"");break;case 55:i.commit("",e[t],e[t-2],"");break;case 56:i.commit("",e[t-4],e[t-2],e[t]);break;case 57:i.commit("",e[t-4],e[t],e[t-2]);break;case 58:i.commit("",e[t-2],e[t-4],e[t]);break;case 59:i.commit("",e[t],e[t-4],e[t-2]);break;case 60:i.commit("",e[t],e[t-2],e[t-4]);break;case 61:i.commit("",e[t-2],e[t],e[t-4]);break;case 62:i.commit(e[t],"",i.commitType.NORMAL,"");break;case 63:i.commit(e[t],"",i.commitType.NORMAL,e[t-2]);break;case 64:i.commit(e[t-2],"",i.commitType.NORMAL,e[t]);break;case 65:i.commit(e[t-2],"",e[t],"");break;case 66:i.commit(e[t],"",e[t-2],"");break;case 67:i.commit(e[t],e[t-2],i.commitType.NORMAL,"");break;case 68:i.commit(e[t-2],e[t],i.commitType.NORMAL,"");break;case 69:i.commit(e[t-4],"",e[t-2],e[t]);break;case 70:i.commit(e[t-4],"",e[t],e[t-2]);break;case 71:i.commit(e[t-2],"",e[t-4],e[t]);break;case 72:i.commit(e[t],"",e[t-4],e[t-2]);break;case 73:i.commit(e[t],"",e[t-2],e[t-4]);break;case 74:i.commit(e[t-2],"",e[t],e[t-4]);break;case 75:i.commit(e[t-4],e[t],e[t-2],"");break;case 76:i.commit(e[t-4],e[t-2],e[t],"");break;case 77:i.commit(e[t-2],e[t],e[t-4],"");break;case 78:i.commit(e[t],e[t-2],e[t-4],"");break;case 79:i.commit(e[t],e[t-4],e[t-2],"");break;case 80:i.commit(e[t-2],e[t-4],e[t],"");break;case 81:i.commit(e[t-4],e[t],i.commitType.NORMAL,e[t-2]);break;case 82:i.commit(e[t-4],e[t-2],i.commitType.NORMAL,e[t]);break;case 83:i.commit(e[t-2],e[t],i.commitType.NORMAL,e[t-4]);break;case 84:i.commit(e[t],e[t-2],i.commitType.NORMAL,e[t-4]);break;case 85:i.commit(e[t],e[t-4],i.commitType.NORMAL,e[t-2]);break;case 86:i.commit(e[t-2],e[t-4],i.commitType.NORMAL,e[t]);break;case 87:i.commit(e[t-6],e[t-4],e[t-2],e[t]);break;case 88:i.commit(e[t-6],e[t-4],e[t],e[t-2]);break;case 89:i.commit(e[t-6],e[t-2],e[t-4],e[t]);break;case 90:i.commit(e[t-6],e[t],e[t-4],e[t-2]);break;case 91:i.commit(e[t-6],e[t-2],e[t],e[t-4]);break;case 92:i.commit(e[t-6],e[t],e[t-2],e[t-4]);break;case 93:i.commit(e[t-4],e[t-6],e[t-2],e[t]);break;case 94:i.commit(e[t-4],e[t-6],e[t],e[t-2]);break;case 95:i.commit(e[t-2],e[t-6],e[t-4],e[t]);break;case 96:i.commit(e[t],e[t-6],e[t-4],e[t-2]);break;case 97:i.commit(e[t-2],e[t-6],e[t],e[t-4]);break;case 98:i.commit(e[t],e[t-6],e[t-2],e[t-4]);break;case 99:i.commit(e[t],e[t-4],e[t-2],e[t-6]);break;case 100:i.commit(e[t-2],e[t-4],e[t],e[t-6]);break;case 101:i.commit(e[t],e[t-2],e[t-4],e[t-6]);break;case 102:i.commit(e[t-2],e[t],e[t-4],e[t-6]);break;case 103:i.commit(e[t-4],e[t-2],e[t],e[t-6]);break;case 104:i.commit(e[t-4],e[t],e[t-2],e[t-6]);break;case 105:i.commit(e[t-2],e[t-4],e[t-6],e[t]);break;case 106:i.commit(e[t],e[t-4],e[t-6],e[t-2]);break;case 107:i.commit(e[t-2],e[t],e[t-6],e[t-4]);break;case 108:i.commit(e[t],e[t-2],e[t-6],e[t-4]);break;case 109:i.commit(e[t-4],e[t-2],e[t-6],e[t]);break;case 110:i.commit(e[t-4],e[t],e[t-6],e[t-2]);break;case 111:this.$="";break;case 112:this.$=e[t];break;case 113:this.$=i.commitType.NORMAL;break;case 114:this.$=i.commitType.REVERSE;break;case 115:this.$=i.commitType.HIGHLIGHT;break;case 118:i.parseDirective("%%{","open_directive");break;case 119:i.parseDirective(e[t],"type_directive");break;case 120:e[t]=e[t].trim().replace(/'/g,'"'),i.parseDirective(e[t],"arg_directive");break;case 121:i.parseDirective("}%%","close_directive","gitGraph")}},table:[{3:1,4:2,5:3,6:a,8:o,14:p,46:8,50:n,55:c},{1:[3]},{3:10,4:2,5:3,6:a,8:o,14:p,46:8,50:n,55:c},{3:11,4:2,5:3,6:a,8:o,14:p,46:8,50:n,55:c},{7:12,8:u,9:[1,13],10:[1,14],11:15,14:h},r(T,[2,124]),r(T,[2,125]),r(T,[2,126]),{47:17,51:[1,18]},{51:[2,118]},{1:[2,1]},{1:[2,2]},{8:[1,19]},{7:20,8:u,11:15,14:h},{9:[1,21]},r(_,[2,10],{12:22,13:[1,23]}),r(l,[2,9]),{9:[1,25],48:24,53:d},r([9,53],[2,119]),{1:[2,3]},{8:[1,27]},{7:28,8:u,11:15,14:h},{8:[2,7],14:[1,31],15:29,16:30,17:32,18:33,19:34,20:[1,35],22:[1,36],24:[1,37],25:[1,38],26:39,27:[1,40],29:[1,44],32:[1,43],37:[1,42],40:[1,41]},r(l,[2,8]),r(b,[2,116]),{49:45,52:[1,46]},r(b,[2,121]),{1:[2,4]},{8:[1,47]},r(_,[2,11]),{4:48,8:o,14:p,55:c},r(_,[2,13]),r(s,[2,14]),r(s,[2,15]),r(s,[2,16]),{21:[1,49]},{23:[1,50]},r(s,[2,19]),r(s,[2,20]),r(s,[2,21]),{28:51,34:y,54:w},r(s,[2,111],{41:54,33:[1,57],34:[1,59],35:[1,55],38:[1,56],42:[1,58]}),{28:60,34:y,54:w},{33:[1,61],35:[1,62]},{28:63,34:y,54:w},{48:64,53:d},{53:[2,120]},{1:[2,5]},r(_,[2,12]),r(s,[2,17]),r(s,[2,18]),r(s,[2,22]),r(I,[2,122]),r(I,[2,123]),r(s,[2,46]),{34:[1,65]},{39:66,43:v,44:k,45:E},{34:[1,70]},{34:[1,71]},r(s,[2,112]),r(s,[2,30],{33:[1,72],35:[1,74],38:[1,73]}),{34:[1,75]},{34:[1,76],36:[1,77]},r(s,[2,23],{30:[1,78]}),r(b,[2,117]),r(s,[2,47],{33:[1,80],38:[1,79],42:[1,81]}),r(s,[2,48],{33:[1,83],35:[1,82],42:[1,84]}),r(N,[2,113]),r(N,[2,114]),r(N,[2,115]),r(s,[2,51],{35:[1,85],38:[1,86],42:[1,87]}),r(s,[2,62],{33:[1,90],35:[1,88],38:[1,89]}),{34:[1,91]},{39:92,43:v,44:k,45:E},{34:[1,93]},r(s,[2,25],{35:[1,94]}),{33:[1,95]},{33:[1,96]},{31:[1,97]},{39:98,43:v,44:k,45:E},{34:[1,99]},{34:[1,100]},{34:[1,101]},{34:[1,102]},{34:[1,103]},{34:[1,104]},{39:105,43:v,44:k,45:E},{34:[1,106]},{34:[1,107]},{39:108,43:v,44:k,45:E},{34:[1,109]},r(s,[2,31],{35:[1,111],38:[1,110]}),r(s,[2,32],{33:[1,113],35:[1,112]}),r(s,[2,33],{33:[1,114],38:[1,115]}),{34:[1,116],36:[1,117]},{34:[1,118]},{34:[1,119]},r(s,[2,24]),r(s,[2,49],{33:[1,120],42:[1,121]}),r(s,[2,53],{38:[1,122],42:[1,123]}),r(s,[2,63],{33:[1,125],38:[1,124]}),r(s,[2,50],{33:[1,126],42:[1,127]}),r(s,[2,55],{35:[1,128],42:[1,129]}),r(s,[2,66],{33:[1,131],35:[1,130]}),r(s,[2,52],{38:[1,132],42:[1,133]}),r(s,[2,54],{35:[1,134],42:[1,135]}),r(s,[2,67],{35:[1,137],38:[1,136]}),r(s,[2,64],{33:[1,139],38:[1,138]}),r(s,[2,65],{33:[1,141],35:[1,140]}),r(s,[2,68],{35:[1,143],38:[1,142]}),{39:144,43:v,44:k,45:E},{34:[1,145]},{34:[1,146]},{34:[1,147]},{34:[1,148]},{39:149,43:v,44:k,45:E},r(s,[2,26]),r(s,[2,27]),r(s,[2,28]),r(s,[2,29]),{34:[1,150]},{34:[1,151]},{39:152,43:v,44:k,45:E},{34:[1,153]},{39:154,43:v,44:k,45:E},{34:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{39:162,43:v,44:k,45:E},{34:[1,163]},{34:[1,164]},{34:[1,165]},{39:166,43:v,44:k,45:E},{34:[1,167]},{39:168,43:v,44:k,45:E},{34:[1,169]},{34:[1,170]},{34:[1,171]},{39:172,43:v,44:k,45:E},{34:[1,173]},r(s,[2,37],{35:[1,174]}),r(s,[2,38],{38:[1,175]}),r(s,[2,36],{33:[1,176]}),r(s,[2,39],{35:[1,177]}),r(s,[2,34],{38:[1,178]}),r(s,[2,35],{33:[1,179]}),r(s,[2,60],{42:[1,180]}),r(s,[2,73],{33:[1,181]}),r(s,[2,61],{42:[1,182]}),r(s,[2,84],{38:[1,183]}),r(s,[2,74],{33:[1,184]}),r(s,[2,83],{38:[1,185]}),r(s,[2,59],{42:[1,186]}),r(s,[2,72],{33:[1,187]}),r(s,[2,58],{42:[1,188]}),r(s,[2,78],{35:[1,189]}),r(s,[2,71],{33:[1,190]}),r(s,[2,77],{35:[1,191]}),r(s,[2,57],{42:[1,192]}),r(s,[2,85],{38:[1,193]}),r(s,[2,56],{42:[1,194]}),r(s,[2,79],{35:[1,195]}),r(s,[2,80],{35:[1,196]}),r(s,[2,86],{38:[1,197]}),r(s,[2,70],{33:[1,198]}),r(s,[2,81],{38:[1,199]}),r(s,[2,69],{33:[1,200]}),r(s,[2,75],{35:[1,201]}),r(s,[2,76],{35:[1,202]}),r(s,[2,82],{38:[1,203]}),{34:[1,204]},{39:205,43:v,44:k,45:E},{34:[1,206]},{34:[1,207]},{39:208,43:v,44:k,45:E},{34:[1,209]},{34:[1,210]},{34:[1,211]},{34:[1,212]},{39:213,43:v,44:k,45:E},{34:[1,214]},{39:215,43:v,44:k,45:E},{34:[1,216]},{34:[1,217]},{34:[1,218]},{34:[1,219]},{34:[1,220]},{34:[1,221]},{34:[1,222]},{39:223,43:v,44:k,45:E},{34:[1,224]},{34:[1,225]},{34:[1,226]},{39:227,43:v,44:k,45:E},{34:[1,228]},{39:229,43:v,44:k,45:E},{34:[1,230]},{34:[1,231]},{34:[1,232]},{39:233,43:v,44:k,45:E},r(s,[2,40]),r(s,[2,42]),r(s,[2,41]),r(s,[2,43]),r(s,[2,45]),r(s,[2,44]),r(s,[2,101]),r(s,[2,102]),r(s,[2,99]),r(s,[2,100]),r(s,[2,104]),r(s,[2,103]),r(s,[2,108]),r(s,[2,107]),r(s,[2,106]),r(s,[2,105]),r(s,[2,110]),r(s,[2,109]),r(s,[2,98]),r(s,[2,97]),r(s,[2,96]),r(s,[2,95]),r(s,[2,93]),r(s,[2,94]),r(s,[2,92]),r(s,[2,91]),r(s,[2,90]),r(s,[2,89]),r(s,[2,87]),r(s,[2,88])],defaultActions:{9:[2,118],10:[2,1],11:[2,2],19:[2,3],27:[2,4],46:[2,120],47:[2,5]},parseError:function(m,g){if(!g.recoverable){var x=new Error(m);throw x.hash=g,x}this.trace(m)},parse:function(m){var g=this,x=[0],i=[],L=[null],e=[],ee=this.table,t="",ie=0,ve=0,et=2,Te=1,tt=e.slice.call(arguments,1),O=Object.create(this.lexer),U={yy:{}};for(var he in this.yy)Object.prototype.hasOwnProperty.call(this.yy,he)&&(U.yy[he]=this.yy[he]);O.setInput(m,U.yy),U.yy.lexer=O,U.yy.parser=this,typeof O.yylloc>"u"&&(O.yylloc={});var me=O.yylloc;e.push(me);var rt=O.options&&O.options.ranges;function it(){var V;return"number"!=typeof(V=i.pop()||O.lex()||Te)&&(V instanceof Array&&(V=(i=V).pop()),V=g.symbols_[V]||V),V}this.parseError="function"==typeof U.yy.parseError?U.yy.parseError:Object.getPrototypeOf(this).parseError;for(var G,F,H,ue,se,B,ae,q={};;){if(this.defaultActions[F=x[x.length-1]]?H=this.defaultActions[F]:((null===G||typeof G>"u")&&(G=it()),H=ee[F]&&ee[F][G]),typeof H>"u"||!H.length||!H[0]){var pe="";for(se in ae=[],ee[F])this.terminals_[se]&&se>et&&ae.push("'"+this.terminals_[se]+"'");pe=O.showPosition?"Parse error on line "+(ie+1)+":\n"+O.showPosition()+"\nExpecting "+ae.join(", ")+", got '"+(this.terminals_[G]||G)+"'":"Parse error on line "+(ie+1)+": Unexpected "+(G==Te?"end of input":"'"+(this.terminals_[G]||G)+"'"),this.parseError(pe,{text:O.match,token:this.terminals_[G]||G,line:O.yylineno,loc:me,expected:ae})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+F+", token: "+G);switch(H[0]){case 1:x.push(G),L.push(O.yytext),e.push(O.yylloc),x.push(H[1]),G=null,ve=O.yyleng,t=O.yytext,ie=O.yylineno,me=O.yylloc;break;case 2:if(q.$=L[L.length-(B=this.productions_[H[1]][1])],q._$={first_line:e[e.length-(B||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(B||1)].first_column,last_column:e[e.length-1].last_column},rt&&(q._$.range=[e[e.length-(B||1)].range[0],e[e.length-1].range[1]]),typeof(ue=this.performAction.apply(q,[t,ve,ie,U.yy,H[1],L,e].concat(tt)))<"u")return ue;B&&(x=x.slice(0,-1*B*2),L=L.slice(0,-1*B),e=e.slice(0,-1*B)),x.push(this.productions_[H[1]][0]),L.push(q.$),e.push(q._$),x.push(ee[x[x.length-2]][x[x.length-1]]);break;case 3:return!0}}return!0}};function le(){this.yy={}}return oe.lexer={EOF:1,parseError:function(g,x){if(!this.yy.parser)throw new Error(g);this.yy.parser.parseError(g,x)},setInput:function(m,g){return this.yy=g||this.yy||{},this._input=m,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var m=this._input[0];return this.yytext+=m,this.yyleng++,this.offset++,this.match+=m,this.matched+=m,m.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),m},unput:function(m){var g=m.length,x=m.split(/(?:\r\n?|\n)/g);this._input=m+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-g),this.offset-=g;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),x.length-1&&(this.yylineno-=x.length-1);var L=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:x?(x.length===i.length?this.yylloc.first_column:0)+i[i.length-x.length].length-x[0].length:this.yylloc.first_column-g},this.options.ranges&&(this.yylloc.range=[L[0],L[0]+this.yyleng-g]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(m){this.unput(this.match.slice(m))},pastInput:function(){var m=this.matched.substr(0,this.matched.length-this.match.length);return(m.length>20?"...":"")+m.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var m=this.match;return m.length<20&&(m+=this._input.substr(0,20-m.length)),(m.substr(0,20)+(m.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var m=this.pastInput(),g=new Array(m.length+1).join("-");return m+this.upcomingInput()+"\n"+g+"^"},test_match:function(m,g){var x,i,L;if(this.options.backtrack_lexer&&(L={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(L.yylloc.range=this.yylloc.range.slice(0))),(i=m[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+m[0].length},this.yytext+=m[0],this.match+=m[0],this.matches=m,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(m[0].length),this.matched+=m[0],x=this.performAction.call(this,this.yy,this,g,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),x)return x;if(this._backtrack){for(var e in L)this[e]=L[e];return!1}return!1},next:function(){if(this.done)return this.EOF;var m,g,x,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var L=this._currentRules(),e=0;e<L.length;e++)if((x=this._input.match(this.rules[L[e]]))&&(!g||x[0].length>g[0].length)){if(g=x,i=e,this.options.backtrack_lexer){if(!1!==(m=this.test_match(x,L[e])))return m;if(this._backtrack){g=!1;continue}return!1}if(!this.options.flex)break}return g?!1!==(m=this.test_match(g,L[i]))&&m:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(g){this.conditionStack.push(g)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(g){return(g=this.conditionStack.length-1-Math.abs(g||0))>=0?this.conditionStack[g]:"INITIAL"},pushState:function(g){this.begin(g)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(g,x,i,L){switch(i){case 0:return this.begin("open_directive"),50;case 1:return this.begin("type_directive"),51;case 2:return this.popState(),this.begin("arg_directive"),9;case 3:return this.popState(),this.popState(),53;case 4:return 52;case 5:return this.begin("acc_title"),20;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),22;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 34:case 38:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:return 14;case 13:case 14:break;case 15:return 6;case 16:return 40;case 17:return 33;case 18:return 38;case 19:return 42;case 20:return 43;case 21:return 44;case 22:return 45;case 23:return 35;case 24:return 29;case 25:return 30;case 26:return 37;case 27:return 32;case 28:return 27;case 29:case 30:return 10;case 31:return 9;case 32:return"CARET";case 33:this.begin("options");break;case 35:return 13;case 36:return 36;case 37:this.begin("string");break;case 39:return 34;case 40:return 31;case 41:return 54;case 42:return 8}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},options:{rules:[34,35],inclusive:!1},string:{rules:[38,39],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,40,41,42,43],inclusive:!0}}},le.prototype=oe,oe.Parser=le,new le}());ne.parser=ne;const Re=ne;let te=(0,f.c)().gitGraph.mainBranchName,Me=(0,f.c)().gitGraph.mainBranchOrder,M={},P=null,W={};W[te]={name:te,order:Me};let R={};R[te]=P;let C=te,be="LR",K=0;function ce(){return(0,f.y)({length:7})}let ge={};const de=function(r){if(r=f.e.sanitizeText(r,(0,f.c)()),void 0===R[r]){let a=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+r+'")');throw a.hash={text:"checkout "+r,token:"checkout "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+r+'"']},a}C=r,P=M[R[C]]};function ke(r,a,o){const p=r.indexOf(a);-1===p?r.push(o):r.splice(p,1,o)}function xe(r){const a=r.reduce((n,c)=>n.seq>c.seq?n:c,r[0]);let o="";r.forEach(function(n){o+=n===a?"\t*":"\t|"});const p=[o,a.id,a.seq];for(let n in R)R[n]===a.id&&p.push(n);if(f.l.debug(p.join(" ")),a.parents&&2==a.parents.length)ke(r,a,M[a.parents[0]]),r.push(M[a.parents[1]]);else{if(0==a.parents.length)return;ke(r,a,M[a.parents])}r=function Ae(r,a){const o=Object.create(null);return r.reduce((p,n)=>{const c=a(n);return o[c]||(o[c]=!0,p.push(n)),p},[])}(r,n=>n.id),xe(r)}const _e=function(){const r=Object.keys(M).map(function(a){return M[a]});return r.forEach(function(a){f.l.debug(a.id)}),r.sort((a,o)=>a.seq-o.seq),r},X={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4};let J={};let A={},Q={},re=[],Z=0,S="LR";const ye=r=>{const a=document.createElementNS("http://www.w3.org/2000/svg","text");let o=[];o="string"==typeof r?r.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(r)?r:[];for(const p of o){const n=document.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.setAttribute("dy","1em"),n.setAttribute("x","0"),n.setAttribute("class","row"),n.textContent=p.trim(),a.appendChild(n)}return a},Ee=(r,a,o)=>{const p=(0,f.z)().gitGraph,n=r.append("g").attr("class","commit-bullets"),c=r.append("g").attr("class","commit-labels");let u=0;"TB"===S&&(u=30),Object.keys(a).sort((_,l)=>a[_].seq-a[l].seq).forEach(_=>{const l=a[_],d="TB"===S?u+10:A[l.branch].pos,b="TB"===S?A[l.branch].pos:u+10;if(o){let s,y=void 0!==l.customType&&""!==l.customType?l.customType:l.type;switch(y){case 0:default:s="commit-normal";break;case 1:s="commit-reverse";break;case 2:s="commit-highlight";break;case 3:s="commit-merge";break;case 4:s="commit-cherry-pick"}if(2===y){const w=n.append("rect");w.attr("x",b-10),w.attr("y",d-10),w.attr("height",20),w.attr("width",20),w.attr("class",`commit ${l.id} commit-highlight${A[l.branch].index%8} ${s}-outer`),n.append("rect").attr("x",b-6).attr("y",d-6).attr("height",12).attr("width",12).attr("class",`commit ${l.id} commit${A[l.branch].index%8} ${s}-inner`)}else if(4===y)n.append("circle").attr("cx",b).attr("cy",d).attr("r",10).attr("class",`commit ${l.id} ${s}`),n.append("circle").attr("cx",b-3).attr("cy",d+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${l.id} ${s}`),n.append("circle").attr("cx",b+3).attr("cy",d+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${l.id} ${s}`),n.append("line").attr("x1",b+3).attr("y1",d+1).attr("x2",b).attr("y2",d-5).attr("stroke","#fff").attr("class",`commit ${l.id} ${s}`),n.append("line").attr("x1",b-3).attr("y1",d+1).attr("x2",b).attr("y2",d-5).attr("stroke","#fff").attr("class",`commit ${l.id} ${s}`);else{const w=n.append("circle");if(w.attr("cx",b),w.attr("cy",d),w.attr("r",3===l.type?9:10),w.attr("class",`commit ${l.id} commit${A[l.branch].index%8}`),3===y){const I=n.append("circle");I.attr("cx",b),I.attr("cy",d),I.attr("r",6),I.attr("class",`commit ${s} ${l.id} commit${A[l.branch].index%8}`)}1===y&&n.append("path").attr("d",`M ${b-5},${d-5}L${b+5},${d+5}M${b-5},${d+5}L${b+5},${d-5}`).attr("class",`commit ${s} ${l.id} commit${A[l.branch].index%8}`)}}if(Q[l.id]="TB"===S?{x:b,y:u+10}:{x:u+10,y:d},o){if(4!==l.type&&(l.customId&&3===l.type||3!==l.type)&&p.showCommitLabel){const w=c.append("g"),I=w.insert("rect").attr("class","commit-label-bkg"),v=w.append("text").attr("x",u).attr("y",d+25).attr("class","commit-label").text(l.id);let k=v.node().getBBox();I.attr("x",u+10-k.width/2-2).attr("y",d+13.5).attr("width",k.width+4).attr("height",k.height+4),"TB"===S&&(I.attr("x",b-(k.width+16+5)).attr("y",d-12),v.attr("x",b-(k.width+16)).attr("y",d+k.height-12)),"TB"!==S&&v.attr("x",u+10-k.width/2),p.rotateCommitLabel&&("TB"===S?(v.attr("transform","rotate(-45, "+b+", "+d+")"),I.attr("transform","rotate(-45, "+b+", "+d+")")):w.attr("transform","translate("+(-7.5-(k.width+10)/25*9.5)+", "+(10+k.width/25*8.5)+") rotate(-45, "+u+", "+d+")"))}if(l.tag){const w=c.insert("polygon"),I=c.append("circle"),v=c.append("text").attr("y",d-16).attr("class","tag-label").text(l.tag);let k=v.node().getBBox();v.attr("x",u+10-k.width/2);const E=k.height/2,N=d-19.2;w.attr("class","tag-label-bkg").attr("points",`\n          ${u-k.width/2-2},${N+2}\n          ${u-k.width/2-2},${N-2}\n          ${u+10-k.width/2-4},${N-E-2}\n          ${u+10+k.width/2+4},${N-E-2}\n          ${u+10+k.width/2+4},${N+E+2}\n          ${u+10-k.width/2-4},${N+E+2}`),I.attr("cx",u-k.width/2+2).attr("cy",N).attr("r",1.5).attr("class","tag-hole"),"TB"===S&&(w.attr("class","tag-label-bkg").attr("points",`\n            ${b},${u+2}\n            ${b},${u-2}\n            ${b+10},${u-E-2}\n            ${b+10+k.width+4},${u-E-2}\n            ${b+10+k.width+4},${u+E+2}\n            ${b+10},${u+E+2}`).attr("transform","translate(12,12) rotate(45, "+b+","+u+")"),I.attr("cx",b+2).attr("cy",u).attr("transform","translate(12,12) rotate(45, "+b+","+u+")"),v.attr("x",b+5).attr("y",u+3).attr("transform","translate(14,14) rotate(45, "+b+","+u+")"))}}u+=50,u>Z&&(Z=u)})},$=(r,a,o=0)=>{const p=r+Math.abs(r-a)/2;if(o>5)return p;if(re.every(u=>Math.abs(u-p)>=10))return re.push(p),p;const c=Math.abs(r-a);return $(r,a-c/5,o+1)},Ze={parser:Re,db:{parseDirective:function(r,a,o){f.m.parseDirective(this,r,a,o)},getConfig:()=>(0,f.c)().gitGraph,setDirection:function(r){be=r},setOptions:function(r){f.l.debug("options str",r),r=(r=r&&r.trim())||"{}";try{ge=JSON.parse(r)}catch(a){f.l.error("error while parsing gitGraph options",a.message)}},getOptions:function(){return ge},commit:function(r,a,o,p){f.l.debug("Entering commit:",r,a,o,p),a=f.e.sanitizeText(a,(0,f.c)()),r=f.e.sanitizeText(r,(0,f.c)()),p=f.e.sanitizeText(p,(0,f.c)());const n={id:a||K+"-"+ce(),message:r,seq:K++,type:o||X.NORMAL,tag:p||"",parents:null==P?[]:[P.id],branch:C};P=n,M[n.id]=n,R[C]=n.id,f.l.debug("in pushCommit "+n.id)},branch:function(r,a){if(r=f.e.sanitizeText(r,(0,f.c)()),void 0!==R[r]){let o=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+r+'")');throw o.hash={text:"branch "+r,token:"branch "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+r+'"']},o}R[r]=null!=P?P.id:null,W[r]={name:r,order:a?parseInt(a,10):null},de(r),f.l.debug("in createBranch")},merge:function(r,a,o,p){r=f.e.sanitizeText(r,(0,f.c)()),a=f.e.sanitizeText(a,(0,f.c)());const n=M[R[C]],c=M[R[r]];if(C===r){let h=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},h}if(void 0===n||!n){let h=new Error('Incorrect usage of "merge". Current branch ('+C+")has no commits");throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},h}if(void 0===R[r]){let h=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+r]},h}if(void 0===c||!c){let h=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},h}if(n===c){let h=new Error('Incorrect usage of "merge". Both branches have same head');throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},h}if(a&&void 0!==M[a]){let h=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw h.hash={text:"merge "+r+a+o+p,token:"merge "+r+a+o+p,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+r+" "+a+"_UNIQUE "+o+" "+p]},h}const u={id:a||K+"-"+ce(),message:"merged branch "+r+" into "+C,seq:K++,parents:[null==P?null:P.id,R[r]],branch:C,type:X.MERGE,customType:o,customId:!!a,tag:p||""};P=u,M[u.id]=u,R[C]=u.id,f.l.debug(R),f.l.debug("in mergeBranch")},cherryPick:function(r,a,o){if(f.l.debug("Entering cherryPick:",r,a,o),r=f.e.sanitizeText(r,(0,f.c)()),a=f.e.sanitizeText(a,(0,f.c)()),o=f.e.sanitizeText(o,(0,f.c)()),!r||void 0===M[r]){let c=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw c.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}let p=M[r],n=p.branch;if(p.type===X.MERGE){let c=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw c.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}if(!a||void 0===M[a]){if(n===C){let h=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw h.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},h}const c=M[R[C]];if(void 0===c||!c){let h=new Error('Incorrect usage of "cherry-pick". Current branch ('+C+")has no commits");throw h.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},h}const u={id:K+"-"+ce(),message:"cherry-picked "+p+" into "+C,seq:K++,parents:[null==P?null:P.id,p.id],branch:C,type:X.CHERRY_PICK,tag:o??"cherry-pick:"+p.id};P=u,M[u.id]=u,R[C]=u.id,f.l.debug(R),f.l.debug("in cherryPick")}},checkout:de,prettyPrint:function(){f.l.debug(M),xe([_e()[0]])},clear:function(){M={},P=null;let r=(0,f.c)().gitGraph.mainBranchName,a=(0,f.c)().gitGraph.mainBranchOrder;R={},R[r]=null,W={},W[r]={name:r,order:a},C=r,K=0,(0,f.v)()},getBranchesAsObjArray:function(){return Object.values(W).map((a,o)=>null!==a.order?a:{...a,order:parseFloat(`0.${o}`,10)}).sort((a,o)=>a.order-o.order).map(({name:a})=>({name:a}))},getBranches:function(){return R},getCommits:function(){return M},getCommitsArray:_e,getCurrentBranch:function(){return C},getDirection:function(){return be},getHead:function(){return P},setAccTitle:f.s,getAccTitle:f.g,getAccDescription:f.a,setAccDescription:f.b,setDiagramTitle:f.r,getDiagramTitle:f.t,commitType:X},renderer:{draw:function(r,a,o,p){A={},Q={},J={},Z=0,re=[],S="LR";const n=(0,f.z)(),c=n.gitGraph;f.l.debug("in gitgraph renderer",r+"\n","id:",a,o),J=p.db.getCommits();const u=p.db.getBranchesAsObjArray();S=p.db.getDirection();const h=(0,Le.Ys)(`[id="${a}"]`);let T=0;u.forEach((_,l)=>{const d=ye(_.name),b=h.append("g"),s=b.insert("g").attr("class","branchLabel"),y=s.insert("g").attr("class","label branch-label");y.node().appendChild(d);let w=d.getBBox();A[_.name]={pos:T,index:l},T+=50+(c.rotateCommitLabel?40:0)+("TB"===S?w.width/2:0),y.remove(),s.remove(),b.remove()}),Ee(h,J,!1),c.showBranches&&((r,a)=>{const o=(0,f.z)().gitGraph,p=r.append("g");a.forEach((n,c)=>{const u=c%8,h=A[n.name].pos,T=p.append("line");T.attr("x1",0),T.attr("y1",h),T.attr("x2",Z),T.attr("y2",h),T.attr("class","branch branch"+u),"TB"===S&&(T.attr("y1",30),T.attr("x1",h),T.attr("y2",Z),T.attr("x2",h)),re.push(h);const l=ye(n.name),d=p.insert("rect"),s=p.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+u);s.node().appendChild(l);let y=l.getBBox();d.attr("class","branchLabelBkg label"+u).attr("rx",4).attr("ry",4).attr("x",-y.width-4-(!0===o.rotateCommitLabel?30:0)).attr("y",-y.height/2+8).attr("width",y.width+18).attr("height",y.height+4),s.attr("transform","translate("+(-y.width-14-(!0===o.rotateCommitLabel?30:0))+", "+(h-y.height/2-1)+")"),"TB"===S&&(d.attr("x",h-y.width/2-10).attr("y",0),s.attr("transform","translate("+(h-y.width/2-5)+", 0)")),"TB"!==S&&d.attr("transform","translate(-19, "+(h-y.height/2)+")")})})(h,u),((r,a)=>{const o=r.append("g").attr("class","commit-arrows");Object.keys(a).forEach(p=>{const n=a[p];n.parents&&n.parents.length>0&&n.parents.forEach(c=>{((r,a,o,p)=>{const n=Q[a.id],c=Q[o.id],u=((r,a,o)=>Object.keys(o).filter(c=>o[c].branch===a.branch&&o[c].seq>r.seq&&o[c].seq<a.seq).length>0)(a,o,p);let b,h="",T="",_=0,l=0,d=A[o.branch].index;if(u){h="A 10 10, 0, 0, 0,",T="A 10 10, 0, 0, 1,",_=10,l=10,d=A[o.branch].index;const s=n.y<c.y?$(n.y,c.y):$(c.y,n.y),y=n.x<c.x?$(n.x,c.x):$(c.x,n.x);b="TB"===S?n.x<c.x?`M ${n.x} ${n.y} L ${y-_} ${n.y} ${T} ${y} ${n.y+l} L ${y} ${c.y-_} ${h} ${y+l} ${c.y} L ${c.x} ${c.y}`:`M ${n.x} ${n.y} L ${y+_} ${n.y} ${h} ${y} ${n.y+l} L ${y} ${c.y-_} ${T} ${y-l} ${c.y} L ${c.x} ${c.y}`:n.y<c.y?`M ${n.x} ${n.y} L ${n.x} ${s-_} ${h} ${n.x+l} ${s} L ${c.x-_} ${s} ${T} ${c.x} ${s+l} L ${c.x} ${c.y}`:`M ${n.x} ${n.y} L ${n.x} ${s+_} ${T} ${n.x+l} ${s} L ${c.x-_} ${s} ${h} ${c.x} ${s-l} L ${c.x} ${c.y}`}else"TB"===S?(n.x<c.x&&(h="A 20 20, 0, 0, 0,",T="A 20 20, 0, 0, 1,",_=20,l=20,d=A[o.branch].index,b=`M ${n.x} ${n.y} L ${c.x-_} ${n.y} ${T} ${c.x} ${n.y+l} L ${c.x} ${c.y}`),n.x>c.x&&(h="A 20 20, 0, 0, 0,",T="A 20 20, 0, 0, 1,",_=20,l=20,d=A[a.branch].index,b=`M ${n.x} ${n.y} L ${n.x} ${c.y-_} ${T} ${n.x-l} ${c.y} L ${c.x} ${c.y}`),n.x===c.x&&(d=A[a.branch].index,b=`M ${n.x} ${n.y} L ${n.x+_} ${n.y} ${h} ${n.x+l} ${c.y+_} L ${c.x} ${c.y}`)):(n.y<c.y&&(h="A 20 20, 0, 0, 0,",_=20,l=20,d=A[o.branch].index,b=`M ${n.x} ${n.y} L ${n.x} ${c.y-_} ${h} ${n.x+l} ${c.y} L ${c.x} ${c.y}`),n.y>c.y&&(h="A 20 20, 0, 0, 0,",_=20,l=20,d=A[a.branch].index,b=`M ${n.x} ${n.y} L ${c.x-_} ${n.y} ${h} ${c.x} ${n.y-l} L ${c.x} ${c.y}`),n.y===c.y&&(d=A[a.branch].index,b=`M ${n.x} ${n.y} L ${n.x} ${c.y-_} ${h} ${n.x+l} ${c.y} L ${c.x} ${c.y}`));r.append("path").attr("d",b).attr("class","arrow arrow"+d%8)})(o,a[c],n,a)})})})(h,J),Ee(h,J,!0),f.u.insertTitle(h,"gitTitleText",c.titleTopMargin,p.db.getDiagramTitle()),(0,f.A)(void 0,h,c.diagramPadding,c.useMaxWidth??n.useMaxWidth)}},styles:r=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map(a=>`\n        .branch-label${a} { fill: ${r["gitBranchLabel"+a]}; }\n        .commit${a} { stroke: ${r["git"+a]}; fill: ${r["git"+a]}; }\n        .commit-highlight${a} { stroke: ${r["gitInv"+a]}; fill: ${r["gitInv"+a]}; }\n        .label${a}  { fill: ${r["git"+a]}; }\n        .arrow${a} { stroke: ${r["git"+a]}; }\n        `).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${r.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}\n  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}\n  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }\n  .tag-hole { fill: ${r.textColor}; }\n\n  .commit-merge {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${r.textColor};\n  }\n`}}}]);