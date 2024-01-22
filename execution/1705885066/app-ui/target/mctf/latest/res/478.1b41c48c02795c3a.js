"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[478],{2478:(te,ut,j)=>{j.r(ut),j.d(ut,{diagram:()=>Jt});var f=j(6076),wt=j(5066),nt=(j(1764),j(6780),j(2735),function(){var r=function(z,u,d,y){for(d=d||{},y=z.length;y--;d[z[y]]=u);return d},n=[1,3],o=[1,6],m=[1,4],a=[1,5],c=[2,5],l=[1,12],h=[5,7,13,19,21,23,24,26,28,31,37,40,47],_=[7,13,19,21,23,24,26,28,31,37,40],x=[7,12,13,19,21,23,24,26,28,31,37,40],i=[7,13,47],g=[1,42],p=[1,41],E=[7,13,29,32,35,38,47],b=[1,55],k=[1,56],T=[1,57],N=[7,13,32,35,42,47],w={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,PARENT_COMMIT:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,ID:46,";":47,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"PARENT_COMMIT",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",46:"ID",47:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,7],[18,7],[18,5],[18,5],[18,5],[18,7],[18,7],[18,7],[18,7],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[41,0],[41,1],[39,1],[39,1],[39,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(u,d,y,s,R,t,tt){var e=t.length-1;switch(R){case 2:return t[e];case 3:return t[e-1];case 4:return s.setDirection(t[e-3]),t[e-1];case 6:s.setOptions(t[e-1]),this.$=t[e];break;case 7:t[e-1]+=t[e],this.$=t[e-1];break;case 9:this.$=[];break;case 10:t[e-1].push(t[e]),this.$=t[e-1];break;case 11:this.$=t[e-1];break;case 16:this.$=t[e].trim(),s.setAccTitle(this.$);break;case 17:case 18:this.$=t[e].trim(),s.setAccDescription(this.$);break;case 19:s.addSection(t[e].substr(8)),this.$=t[e].substr(8);break;case 21:s.checkout(t[e]);break;case 22:s.branch(t[e]);break;case 23:s.branch(t[e-2],t[e]);break;case 24:s.cherryPick(t[e],"",void 0);break;case 25:s.cherryPick(t[e-2],"",void 0,t[e]);break;case 26:s.cherryPick(t[e-2],"",t[e]);break;case 27:s.cherryPick(t[e-4],"",t[e],t[e-2]);break;case 28:s.cherryPick(t[e-4],"",t[e-2],t[e]);break;case 29:s.cherryPick(t[e],"",t[e-2]);break;case 30:s.cherryPick(t[e],"","");break;case 31:s.cherryPick(t[e-2],"","");break;case 32:s.cherryPick(t[e-4],"","",t[e-2]);break;case 33:s.cherryPick(t[e-4],"","",t[e]);break;case 34:s.cherryPick(t[e-2],"",t[e-4],t[e]);break;case 35:s.cherryPick(t[e-2],"","",t[e]);break;case 36:s.merge(t[e],"","","");break;case 37:s.merge(t[e-2],t[e],"","");break;case 38:s.merge(t[e-2],"",t[e],"");break;case 39:s.merge(t[e-2],"","",t[e]);break;case 40:s.merge(t[e-4],t[e],"",t[e-2]);break;case 41:s.merge(t[e-4],"",t[e],t[e-2]);break;case 42:s.merge(t[e-4],"",t[e-2],t[e]);break;case 43:s.merge(t[e-4],t[e-2],t[e],"");break;case 44:s.merge(t[e-4],t[e-2],"",t[e]);break;case 45:s.merge(t[e-4],t[e],t[e-2],"");break;case 46:s.merge(t[e-6],t[e-4],t[e-2],t[e]);break;case 47:s.merge(t[e-6],t[e],t[e-4],t[e-2]);break;case 48:s.merge(t[e-6],t[e-4],t[e],t[e-2]);break;case 49:s.merge(t[e-6],t[e-2],t[e-4],t[e]);break;case 50:s.merge(t[e-6],t[e],t[e-2],t[e-4]);break;case 51:s.merge(t[e-6],t[e-2],t[e],t[e-4]);break;case 52:s.commit(t[e]);break;case 53:s.commit("","",s.commitType.NORMAL,t[e]);break;case 54:s.commit("","",t[e],"");break;case 55:s.commit("","",t[e],t[e-2]);break;case 56:s.commit("","",t[e-2],t[e]);break;case 57:s.commit("",t[e],s.commitType.NORMAL,"");break;case 58:s.commit("",t[e-2],s.commitType.NORMAL,t[e]);break;case 59:s.commit("",t[e],s.commitType.NORMAL,t[e-2]);break;case 60:s.commit("",t[e-2],t[e],"");break;case 61:s.commit("",t[e],t[e-2],"");break;case 62:s.commit("",t[e-4],t[e-2],t[e]);break;case 63:s.commit("",t[e-4],t[e],t[e-2]);break;case 64:s.commit("",t[e-2],t[e-4],t[e]);break;case 65:s.commit("",t[e],t[e-4],t[e-2]);break;case 66:s.commit("",t[e],t[e-2],t[e-4]);break;case 67:s.commit("",t[e-2],t[e],t[e-4]);break;case 68:s.commit(t[e],"",s.commitType.NORMAL,"");break;case 69:s.commit(t[e],"",s.commitType.NORMAL,t[e-2]);break;case 70:s.commit(t[e-2],"",s.commitType.NORMAL,t[e]);break;case 71:s.commit(t[e-2],"",t[e],"");break;case 72:s.commit(t[e],"",t[e-2],"");break;case 73:s.commit(t[e],t[e-2],s.commitType.NORMAL,"");break;case 74:s.commit(t[e-2],t[e],s.commitType.NORMAL,"");break;case 75:s.commit(t[e-4],"",t[e-2],t[e]);break;case 76:s.commit(t[e-4],"",t[e],t[e-2]);break;case 77:s.commit(t[e-2],"",t[e-4],t[e]);break;case 78:s.commit(t[e],"",t[e-4],t[e-2]);break;case 79:s.commit(t[e],"",t[e-2],t[e-4]);break;case 80:s.commit(t[e-2],"",t[e],t[e-4]);break;case 81:s.commit(t[e-4],t[e],t[e-2],"");break;case 82:s.commit(t[e-4],t[e-2],t[e],"");break;case 83:s.commit(t[e-2],t[e],t[e-4],"");break;case 84:s.commit(t[e],t[e-2],t[e-4],"");break;case 85:s.commit(t[e],t[e-4],t[e-2],"");break;case 86:s.commit(t[e-2],t[e-4],t[e],"");break;case 87:s.commit(t[e-4],t[e],s.commitType.NORMAL,t[e-2]);break;case 88:s.commit(t[e-4],t[e-2],s.commitType.NORMAL,t[e]);break;case 89:s.commit(t[e-2],t[e],s.commitType.NORMAL,t[e-4]);break;case 90:s.commit(t[e],t[e-2],s.commitType.NORMAL,t[e-4]);break;case 91:s.commit(t[e],t[e-4],s.commitType.NORMAL,t[e-2]);break;case 92:s.commit(t[e-2],t[e-4],s.commitType.NORMAL,t[e]);break;case 93:s.commit(t[e-6],t[e-4],t[e-2],t[e]);break;case 94:s.commit(t[e-6],t[e-4],t[e],t[e-2]);break;case 95:s.commit(t[e-6],t[e-2],t[e-4],t[e]);break;case 96:s.commit(t[e-6],t[e],t[e-4],t[e-2]);break;case 97:s.commit(t[e-6],t[e-2],t[e],t[e-4]);break;case 98:s.commit(t[e-6],t[e],t[e-2],t[e-4]);break;case 99:s.commit(t[e-4],t[e-6],t[e-2],t[e]);break;case 100:s.commit(t[e-4],t[e-6],t[e],t[e-2]);break;case 101:s.commit(t[e-2],t[e-6],t[e-4],t[e]);break;case 102:s.commit(t[e],t[e-6],t[e-4],t[e-2]);break;case 103:s.commit(t[e-2],t[e-6],t[e],t[e-4]);break;case 104:s.commit(t[e],t[e-6],t[e-2],t[e-4]);break;case 105:s.commit(t[e],t[e-4],t[e-2],t[e-6]);break;case 106:s.commit(t[e-2],t[e-4],t[e],t[e-6]);break;case 107:s.commit(t[e],t[e-2],t[e-4],t[e-6]);break;case 108:s.commit(t[e-2],t[e],t[e-4],t[e-6]);break;case 109:s.commit(t[e-4],t[e-2],t[e],t[e-6]);break;case 110:s.commit(t[e-4],t[e],t[e-2],t[e-6]);break;case 111:s.commit(t[e-2],t[e-4],t[e-6],t[e]);break;case 112:s.commit(t[e],t[e-4],t[e-6],t[e-2]);break;case 113:s.commit(t[e-2],t[e],t[e-6],t[e-4]);break;case 114:s.commit(t[e],t[e-2],t[e-6],t[e-4]);break;case 115:s.commit(t[e-4],t[e-2],t[e-6],t[e]);break;case 116:s.commit(t[e-4],t[e],t[e-6],t[e-2]);break;case 117:this.$="";break;case 118:this.$=t[e];break;case 119:this.$=s.commitType.NORMAL;break;case 120:this.$=s.commitType.REVERSE;break;case 121:this.$=s.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:n,7:o,13:m,47:a},{1:[3]},{3:7,4:2,5:n,7:o,13:m,47:a},{6:8,7:c,8:[1,9],9:[1,10],10:11,13:l},r(h,[2,124]),r(h,[2,125]),r(h,[2,126]),{1:[2,1]},{7:[1,13]},{6:14,7:c,10:11,13:l},{8:[1,15]},r(_,[2,9],{11:16,12:[1,17]}),r(x,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:c,10:11,13:l},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],37:[1,33],40:[1,32]},r(x,[2,7]),{1:[2,3]},{7:[1,36]},r(_,[2,10]),{4:37,7:o,13:m,47:a},r(_,[2,12]),r(i,[2,13]),r(i,[2,14]),r(i,[2,15]),{20:[1,38]},{22:[1,39]},r(i,[2,18]),r(i,[2,19]),r(i,[2,20]),{27:40,33:g,46:p},r(i,[2,117],{41:43,32:[1,46],33:[1,48],35:[1,44],38:[1,45],42:[1,47]}),{27:49,33:g,46:p},{32:[1,50],35:[1,51]},{27:52,33:g,46:p},{1:[2,4]},r(_,[2,11]),r(i,[2,16]),r(i,[2,17]),r(i,[2,21]),r(E,[2,122]),r(E,[2,123]),r(i,[2,52]),{33:[1,53]},{39:54,43:b,44:k,45:T},{33:[1,58]},{33:[1,59]},r(i,[2,118]),r(i,[2,36],{32:[1,60],35:[1,62],38:[1,61]}),{33:[1,63]},{33:[1,64],36:[1,65]},r(i,[2,22],{29:[1,66]}),r(i,[2,53],{32:[1,68],38:[1,67],42:[1,69]}),r(i,[2,54],{32:[1,71],35:[1,70],42:[1,72]}),r(N,[2,119]),r(N,[2,120]),r(N,[2,121]),r(i,[2,57],{35:[1,73],38:[1,74],42:[1,75]}),r(i,[2,68],{32:[1,78],35:[1,76],38:[1,77]}),{33:[1,79]},{39:80,43:b,44:k,45:T},{33:[1,81]},r(i,[2,24],{34:[1,82],35:[1,83]}),{32:[1,84]},{32:[1,85]},{30:[1,86]},{39:87,43:b,44:k,45:T},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{33:[1,93]},{39:94,43:b,44:k,45:T},{33:[1,95]},{33:[1,96]},{39:97,43:b,44:k,45:T},{33:[1,98]},r(i,[2,37],{35:[1,100],38:[1,99]}),r(i,[2,38],{32:[1,102],35:[1,101]}),r(i,[2,39],{32:[1,103],38:[1,104]}),{33:[1,105]},{33:[1,106],36:[1,107]},{33:[1,108]},{33:[1,109]},r(i,[2,23]),r(i,[2,55],{32:[1,110],42:[1,111]}),r(i,[2,59],{38:[1,112],42:[1,113]}),r(i,[2,69],{32:[1,115],38:[1,114]}),r(i,[2,56],{32:[1,116],42:[1,117]}),r(i,[2,61],{35:[1,118],42:[1,119]}),r(i,[2,72],{32:[1,121],35:[1,120]}),r(i,[2,58],{38:[1,122],42:[1,123]}),r(i,[2,60],{35:[1,124],42:[1,125]}),r(i,[2,73],{35:[1,127],38:[1,126]}),r(i,[2,70],{32:[1,129],38:[1,128]}),r(i,[2,71],{32:[1,131],35:[1,130]}),r(i,[2,74],{35:[1,133],38:[1,132]}),{39:134,43:b,44:k,45:T},{33:[1,135]},{33:[1,136]},{33:[1,137]},{33:[1,138]},{39:139,43:b,44:k,45:T},r(i,[2,25],{35:[1,140]}),r(i,[2,26],{34:[1,141]}),r(i,[2,31],{34:[1,142]}),r(i,[2,29],{34:[1,143]}),r(i,[2,30],{34:[1,144]}),{33:[1,145]},{33:[1,146]},{39:147,43:b,44:k,45:T},{33:[1,148]},{39:149,43:b,44:k,45:T},{33:[1,150]},{33:[1,151]},{33:[1,152]},{33:[1,153]},{33:[1,154]},{33:[1,155]},{33:[1,156]},{39:157,43:b,44:k,45:T},{33:[1,158]},{33:[1,159]},{33:[1,160]},{39:161,43:b,44:k,45:T},{33:[1,162]},{39:163,43:b,44:k,45:T},{33:[1,164]},{33:[1,165]},{33:[1,166]},{39:167,43:b,44:k,45:T},{33:[1,168]},r(i,[2,43],{35:[1,169]}),r(i,[2,44],{38:[1,170]}),r(i,[2,42],{32:[1,171]}),r(i,[2,45],{35:[1,172]}),r(i,[2,40],{38:[1,173]}),r(i,[2,41],{32:[1,174]}),{33:[1,175],36:[1,176]},{33:[1,177]},{33:[1,178]},{33:[1,179]},{33:[1,180]},r(i,[2,66],{42:[1,181]}),r(i,[2,79],{32:[1,182]}),r(i,[2,67],{42:[1,183]}),r(i,[2,90],{38:[1,184]}),r(i,[2,80],{32:[1,185]}),r(i,[2,89],{38:[1,186]}),r(i,[2,65],{42:[1,187]}),r(i,[2,78],{32:[1,188]}),r(i,[2,64],{42:[1,189]}),r(i,[2,84],{35:[1,190]}),r(i,[2,77],{32:[1,191]}),r(i,[2,83],{35:[1,192]}),r(i,[2,63],{42:[1,193]}),r(i,[2,91],{38:[1,194]}),r(i,[2,62],{42:[1,195]}),r(i,[2,85],{35:[1,196]}),r(i,[2,86],{35:[1,197]}),r(i,[2,92],{38:[1,198]}),r(i,[2,76],{32:[1,199]}),r(i,[2,87],{38:[1,200]}),r(i,[2,75],{32:[1,201]}),r(i,[2,81],{35:[1,202]}),r(i,[2,82],{35:[1,203]}),r(i,[2,88],{38:[1,204]}),{33:[1,205]},{39:206,43:b,44:k,45:T},{33:[1,207]},{33:[1,208]},{39:209,43:b,44:k,45:T},{33:[1,210]},r(i,[2,27]),r(i,[2,32]),r(i,[2,28]),r(i,[2,33]),r(i,[2,34]),r(i,[2,35]),{33:[1,211]},{33:[1,212]},{33:[1,213]},{39:214,43:b,44:k,45:T},{33:[1,215]},{39:216,43:b,44:k,45:T},{33:[1,217]},{33:[1,218]},{33:[1,219]},{33:[1,220]},{33:[1,221]},{33:[1,222]},{33:[1,223]},{39:224,43:b,44:k,45:T},{33:[1,225]},{33:[1,226]},{33:[1,227]},{39:228,43:b,44:k,45:T},{33:[1,229]},{39:230,43:b,44:k,45:T},{33:[1,231]},{33:[1,232]},{33:[1,233]},{39:234,43:b,44:k,45:T},r(i,[2,46]),r(i,[2,48]),r(i,[2,47]),r(i,[2,49]),r(i,[2,51]),r(i,[2,50]),r(i,[2,107]),r(i,[2,108]),r(i,[2,105]),r(i,[2,106]),r(i,[2,110]),r(i,[2,109]),r(i,[2,114]),r(i,[2,113]),r(i,[2,112]),r(i,[2,111]),r(i,[2,116]),r(i,[2,115]),r(i,[2,104]),r(i,[2,103]),r(i,[2,102]),r(i,[2,101]),r(i,[2,99]),r(i,[2,100]),r(i,[2,98]),r(i,[2,97]),r(i,[2,96]),r(i,[2,95]),r(i,[2,93]),r(i,[2,94])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(u,d){if(!d.recoverable){var y=new Error(u);throw y.hash=d,y}this.trace(u)},parse:function(u){var d=this,y=[0],s=[],R=[null],t=[],tt=this.table,e="",it=0,_t=0,Qt=2,Et=1,Xt=t.slice.call(arguments,1),O=Object.create(this.lexer),F={yy:{}};for(var ot in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ot)&&(F.yy[ot]=this.yy[ot]);O.setInput(u,F.yy),F.yy.lexer=O,F.yy.parser=this,typeof O.yylloc>"u"&&(O.yylloc={});var lt=O.yylloc;t.push(lt);var Zt=O.options&&O.options.ranges;function $t(){var V;return"number"!=typeof(V=s.pop()||O.lex()||Et)&&(V instanceof Array&&(V=(s=V).pop()),V=d.symbols_[V]||V),V}this.parseError="function"==typeof F.yy.parseError?F.yy.parseError:Object.getPrototypeOf(this).parseError;for(var I,U,B,ht,st,D,at,W={};;){if(this.defaultActions[U=y[y.length-1]]?B=this.defaultActions[U]:((null===I||typeof I>"u")&&(I=$t()),B=tt[U]&&tt[U][I]),typeof B>"u"||!B.length||!B[0]){var mt="";for(st in at=[],tt[U])this.terminals_[st]&&st>Qt&&at.push("'"+this.terminals_[st]+"'");mt=O.showPosition?"Parse error on line "+(it+1)+":\n"+O.showPosition()+"\nExpecting "+at.join(", ")+", got '"+(this.terminals_[I]||I)+"'":"Parse error on line "+(it+1)+": Unexpected "+(I==Et?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(mt,{text:O.match,token:this.terminals_[I]||I,line:O.yylineno,loc:lt,expected:at})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+I);switch(B[0]){case 1:y.push(I),R.push(O.yytext),t.push(O.yylloc),y.push(B[1]),I=null,_t=O.yyleng,e=O.yytext,it=O.yylineno,lt=O.yylloc;break;case 2:if(W.$=R[R.length-(D=this.productions_[B[1]][1])],W._$={first_line:t[t.length-(D||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(D||1)].first_column,last_column:t[t.length-1].last_column},Zt&&(W._$.range=[t[t.length-(D||1)].range[0],t[t.length-1].range[1]]),typeof(ht=this.performAction.apply(W,[e,_t,it,F.yy,B[1],R,t].concat(Xt)))<"u")return ht;D&&(y=y.slice(0,-1*D*2),R=R.slice(0,-1*D),t=t.slice(0,-1*D)),y.push(this.productions_[B[1]][0]),R.push(W.$),t.push(W._$),y.push(tt[y[y.length-2]][y[y.length-1]]);break;case 3:return!0}}return!0}};function G(){this.yy={}}return w.lexer={EOF:1,parseError:function(d,y){if(!this.yy.parser)throw new Error(d);this.yy.parser.parseError(d,y)},setInput:function(u,d){return this.yy=d||this.yy||{},this._input=u,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var u=this._input[0];return this.yytext+=u,this.yyleng++,this.offset++,this.match+=u,this.matched+=u,u.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),u},unput:function(u){var d=u.length,y=u.split(/(?:\r\n?|\n)/g);this._input=u+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),y.length-1&&(this.yylineno-=y.length-1);var R=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===s.length?this.yylloc.first_column:0)+s[s.length-y.length].length-y[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[R[0],R[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(u){this.unput(this.match.slice(u))},pastInput:function(){var u=this.matched.substr(0,this.matched.length-this.match.length);return(u.length>20?"...":"")+u.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var u=this.match;return u.length<20&&(u+=this._input.substr(0,20-u.length)),(u.substr(0,20)+(u.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var u=this.pastInput(),d=new Array(u.length+1).join("-");return u+this.upcomingInput()+"\n"+d+"^"},test_match:function(u,d){var y,s,R;if(this.options.backtrack_lexer&&(R={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(R.yylloc.range=this.yylloc.range.slice(0))),(s=u[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+u[0].length},this.yytext+=u[0],this.match+=u[0],this.matches=u,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(u[0].length),this.matched+=u[0],y=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),y)return y;if(this._backtrack){for(var t in R)this[t]=R[t];return!1}return!1},next:function(){if(this.done)return this.EOF;var u,d,y,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var R=this._currentRules(),t=0;t<R.length;t++)if((y=this._input.match(this.rules[R[t]]))&&(!d||y[0].length>d[0].length)){if(d=y,s=t,this.options.backtrack_lexer){if(!1!==(u=this.test_match(y,R[t])))return u;if(this._backtrack){d=!1;continue}return!1}if(!this.options.flex)break}return d?!1!==(u=this.test_match(d,R[s]))&&u:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(d){this.conditionStack.push(d)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(d){return(d=this.conditionStack.length-1-Math.abs(d||0))>=0?this.conditionStack[d]:"INITIAL"},pushState:function(d){this.begin(d)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(d,y,s,R){switch(s){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 30:case 34:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 40;case 12:return 32;case 13:return 38;case 14:return 42;case 15:return 43;case 16:return 44;case 17:return 45;case 18:return 35;case 19:return 28;case 20:return 29;case 21:return 37;case 22:return 31;case 23:return 34;case 24:return 26;case 25:case 26:return 9;case 27:return 8;case 28:return"CARET";case 29:this.begin("options");break;case 31:return 12;case 32:return 36;case 33:this.begin("string");break;case 35:return 33;case 36:return 30;case 37:return 46;case 38:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:parent:)/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[30,31],inclusive:!1},string:{rules:[34,35],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32,33,36,37,38,39],inclusive:!0}}},G.prototype=w,w.Parser=G,new G}());nt.parser=nt;const Rt=nt;let et=(0,f.c)().gitGraph.mainBranchName,Lt=(0,f.c)().gitGraph.mainBranchOrder,v={},A=null,J={};J[et]={name:et,order:Lt};let M={};M[et]=A;let C=et,ft="LR",K=0;function ct(){return(0,f.x)({length:7})}let pt={};const bt=function(r){if(r=f.e.sanitizeText(r,(0,f.c)()),void 0===M[r]){let n=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+r+'")');throw n.hash={text:"checkout "+r,token:"checkout "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+r+'"']},n}C=r,A=v[M[C]]};function gt(r,n,o){const m=r.indexOf(n);-1===m?r.push(o):r.splice(m,1,o)}function dt(r){const n=r.reduce((a,c)=>a.seq>c.seq?a:c,r[0]);let o="";r.forEach(function(a){o+=a===n?"\t*":"\t|"});const m=[o,n.id,n.seq];for(let a in M)M[a]===n.id&&m.push(a);if(f.l.debug(m.join(" ")),n.parents&&2==n.parents.length)gt(r,n,v[n.parents[0]]),r.push(v[n.parents[1]]);else{if(0==n.parents.length)return;gt(r,n,v[n.parents])}r=function Mt(r,n){const o=Object.create(null);return r.reduce((m,a)=>{const c=n(a);return o[c]||(o[c]=!0,m.push(a)),m},[])}(r,a=>a.id),dt(r)}const kt=function(){const r=Object.keys(v).map(function(n){return v[n]});return r.forEach(function(n){f.l.debug(n.id)}),r.sort((n,o)=>n.seq-o.seq),r},q={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4};let Q={};let L={},X={},rt=[],Z=0,P="LR";const xt=r=>{const n=document.createElementNS("http://www.w3.org/2000/svg","text");let o=[];o="string"==typeof r?r.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(r)?r:[];for(const m of o){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),a.setAttribute("class","row"),a.textContent=m.trim(),n.appendChild(a)}return n},yt=(r,n,o)=>{const m=(0,f.c)().gitGraph,a=r.append("g").attr("class","commit-bullets"),c=r.append("g").attr("class","commit-labels");let l=0;"TB"===P&&(l=30),Object.keys(n).sort((x,i)=>n[x].seq-n[i].seq).forEach(x=>{const i=n[x],g="TB"===P?l+10:L[i.branch].pos,p="TB"===P?L[i.branch].pos:l+10;if(o){let E,b=void 0!==i.customType&&""!==i.customType?i.customType:i.type;switch(b){case 0:default:E="commit-normal";break;case 1:E="commit-reverse";break;case 2:E="commit-highlight";break;case 3:E="commit-merge";break;case 4:E="commit-cherry-pick"}if(2===b){const k=a.append("rect");k.attr("x",p-10),k.attr("y",g-10),k.attr("height",20),k.attr("width",20),k.attr("class",`commit ${i.id} commit-highlight${L[i.branch].index%8} ${E}-outer`),a.append("rect").attr("x",p-6).attr("y",g-6).attr("height",12).attr("width",12).attr("class",`commit ${i.id} commit${L[i.branch].index%8} ${E}-inner`)}else if(4===b)a.append("circle").attr("cx",p).attr("cy",g).attr("r",10).attr("class",`commit ${i.id} ${E}`),a.append("circle").attr("cx",p-3).attr("cy",g+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${E}`),a.append("circle").attr("cx",p+3).attr("cy",g+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${E}`),a.append("line").attr("x1",p+3).attr("y1",g+1).attr("x2",p).attr("y2",g-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${E}`),a.append("line").attr("x1",p-3).attr("y1",g+1).attr("x2",p).attr("y2",g-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${E}`);else{const k=a.append("circle");if(k.attr("cx",p),k.attr("cy",g),k.attr("r",3===i.type?9:10),k.attr("class",`commit ${i.id} commit${L[i.branch].index%8}`),3===b){const T=a.append("circle");T.attr("cx",p),T.attr("cy",g),T.attr("r",6),T.attr("class",`commit ${E} ${i.id} commit${L[i.branch].index%8}`)}1===b&&a.append("path").attr("d",`M ${p-5},${g-5}L${p+5},${g+5}M${p-5},${g+5}L${p+5},${g-5}`).attr("class",`commit ${E} ${i.id} commit${L[i.branch].index%8}`)}}if(X[i.id]="TB"===P?{x:p,y:l+10}:{x:l+10,y:g},o){if(4!==i.type&&(i.customId&&3===i.type||3!==i.type)&&m.showCommitLabel){const k=c.append("g"),T=k.insert("rect").attr("class","commit-label-bkg"),N=k.append("text").attr("x",l).attr("y",g+25).attr("class","commit-label").text(i.id);let w=N.node().getBBox();T.attr("x",l+10-w.width/2-2).attr("y",g+13.5).attr("width",w.width+4).attr("height",w.height+4),"TB"===P&&(T.attr("x",p-(w.width+16+5)).attr("y",g-12),N.attr("x",p-(w.width+16)).attr("y",g+w.height-12)),"TB"!==P&&N.attr("x",l+10-w.width/2),m.rotateCommitLabel&&("TB"===P?(N.attr("transform","rotate(-45, "+p+", "+g+")"),T.attr("transform","rotate(-45, "+p+", "+g+")")):k.attr("transform","translate("+(-7.5-(w.width+10)/25*9.5)+", "+(10+w.width/25*8.5)+") rotate(-45, "+l+", "+g+")"))}if(i.tag){const k=c.insert("polygon"),T=c.append("circle"),N=c.append("text").attr("y",g-16).attr("class","tag-label").text(i.tag);let w=N.node().getBBox();N.attr("x",l+10-w.width/2);const H=w.height/2,G=g-19.2;k.attr("class","tag-label-bkg").attr("points",`\n          ${l-w.width/2-2},${G+2}\n          ${l-w.width/2-2},${G-2}\n          ${l+10-w.width/2-4},${G-H-2}\n          ${l+10+w.width/2+4},${G-H-2}\n          ${l+10+w.width/2+4},${G+H+2}\n          ${l+10-w.width/2-4},${G+H+2}`),T.attr("cx",l-w.width/2+2).attr("cy",G).attr("r",1.5).attr("class","tag-hole"),"TB"===P&&(k.attr("class","tag-label-bkg").attr("points",`\n            ${p},${l+2}\n            ${p},${l-2}\n            ${p+10},${l-H-2}\n            ${p+10+w.width+4},${l-H-2}\n            ${p+10+w.width+4},${l+H+2}\n            ${p+10},${l+H+2}`).attr("transform","translate(12,12) rotate(45, "+p+","+l+")"),T.attr("cx",p+2).attr("cy",l).attr("transform","translate(12,12) rotate(45, "+p+","+l+")"),N.attr("x",p+5).attr("y",l+3).attr("transform","translate(14,14) rotate(45, "+p+","+l+")"))}}l+=50,l>Z&&(Z=l)})},$=(r,n,o=0)=>{const m=r+Math.abs(r-n)/2;if(o>5)return m;if(rt.every(l=>Math.abs(l-m)>=10))return rt.push(m),m;const c=Math.abs(r-n);return $(r,n-c/5,o+1)},qt=(r,n)=>{const o=r.append("g").attr("class","commit-arrows");Object.keys(n).forEach(m=>{const a=n[m];a.parents&&a.parents.length>0&&a.parents.forEach(c=>{((r,n,o,m)=>{const a=X[n.id],c=X[o.id],l=((r,n,o,m,a)=>{const l=("TB"===P?o.x<m.x:o.y<m.y)?n.branch:r.branch;return Object.values(a).some(x=>(x=>x.seq>r.seq&&x.seq<n.seq)(x)&&(x=>x.branch===l)(x))})(n,o,a,c,m);let p,h="",_="",x=0,i=0,g=L[o.branch].index;if(l){h="A 10 10, 0, 0, 0,",_="A 10 10, 0, 0, 1,",x=10,i=10;const E=a.y<c.y?$(a.y,c.y):$(c.y,a.y),b=a.x<c.x?$(a.x,c.x):$(c.x,a.x);"TB"===P?a.x<c.x?(g=L[o.branch].index,p=`M ${a.x} ${a.y} L ${b-x} ${a.y} ${_} ${b} ${a.y+i} L ${b} ${c.y-x} ${h} ${b+i} ${c.y} L ${c.x} ${c.y}`):(g=L[n.branch].index,p=`M ${a.x} ${a.y} L ${b+x} ${a.y} ${h} ${b} ${a.y+i} L ${b} ${c.y-x} ${_} ${b-i} ${c.y} L ${c.x} ${c.y}`):a.y<c.y?(g=L[o.branch].index,p=`M ${a.x} ${a.y} L ${a.x} ${E-x} ${h} ${a.x+i} ${E} L ${c.x-x} ${E} ${_} ${c.x} ${E+i} L ${c.x} ${c.y}`):(g=L[n.branch].index,p=`M ${a.x} ${a.y} L ${a.x} ${E+x} ${_} ${a.x+i} ${E} L ${c.x-x} ${E} ${h} ${c.x} ${E-i} L ${c.x} ${c.y}`)}else"TB"===P?(a.x<c.x&&(h="A 20 20, 0, 0, 0,",_="A 20 20, 0, 0, 1,",x=20,i=20,g=L[o.branch].index,p=`M ${a.x} ${a.y} L ${c.x-x} ${a.y} ${_} ${c.x} ${a.y+i} L ${c.x} ${c.y}`),a.x>c.x&&(h="A 20 20, 0, 0, 0,",_="A 20 20, 0, 0, 1,",x=20,i=20,g=L[n.branch].index,p=`M ${a.x} ${a.y} L ${a.x} ${c.y-x} ${_} ${a.x-i} ${c.y} L ${c.x} ${c.y}`),a.x===c.x&&(g=L[n.branch].index,p=`M ${a.x} ${a.y} L ${a.x+x} ${a.y} ${h} ${a.x+i} ${c.y+x} L ${c.x} ${c.y}`)):(a.y<c.y&&(h="A 20 20, 0, 0, 0,",x=20,i=20,g=L[o.branch].index,p=`M ${a.x} ${a.y} L ${a.x} ${c.y-x} ${h} ${a.x+i} ${c.y} L ${c.x} ${c.y}`),a.y>c.y&&(h="A 20 20, 0, 0, 0,",x=20,i=20,g=L[n.branch].index,p=`M ${a.x} ${a.y} L ${c.x-x} ${a.y} ${h} ${c.x} ${a.y-i} L ${c.x} ${c.y}`),a.y===c.y&&(g=L[n.branch].index,p=`M ${a.x} ${a.y} L ${a.x} ${c.y-x} ${h} ${a.x+i} ${c.y} L ${c.x} ${c.y}`));r.append("path").attr("d",p).attr("class","arrow arrow"+g%8)})(o,n[c],a,n)})})},Jt={parser:Rt,db:{getConfig:()=>(0,f.c)().gitGraph,setDirection:function(r){ft=r},setOptions:function(r){f.l.debug("options str",r),r=(r=r&&r.trim())||"{}";try{pt=JSON.parse(r)}catch(n){f.l.error("error while parsing gitGraph options",n.message)}},getOptions:function(){return pt},commit:function(r,n,o,m){f.l.debug("Entering commit:",r,n,o,m),n=f.e.sanitizeText(n,(0,f.c)()),r=f.e.sanitizeText(r,(0,f.c)()),m=f.e.sanitizeText(m,(0,f.c)());const a={id:n||K+"-"+ct(),message:r,seq:K++,type:o||q.NORMAL,tag:m||"",parents:null==A?[]:[A.id],branch:C};A=a,v[a.id]=a,M[C]=a.id,f.l.debug("in pushCommit "+a.id)},branch:function(r,n){if(r=f.e.sanitizeText(r,(0,f.c)()),void 0!==M[r]){let o=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+r+'")');throw o.hash={text:"branch "+r,token:"branch "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+r+'"']},o}M[r]=null!=A?A.id:null,J[r]={name:r,order:n?parseInt(n,10):null},bt(r),f.l.debug("in createBranch")},merge:function(r,n,o,m){r=f.e.sanitizeText(r,(0,f.c)()),n=f.e.sanitizeText(n,(0,f.c)());const a=v[M[C]],c=v[M[r]];if(C===r){let h=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},h}if(void 0===a||!a){let h=new Error('Incorrect usage of "merge". Current branch ('+C+")has no commits");throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},h}if(void 0===M[r]){let h=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+r]},h}if(void 0===c||!c){let h=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},h}if(a===c){let h=new Error('Incorrect usage of "merge". Both branches have same head');throw h.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},h}if(n&&void 0!==v[n]){let h=new Error('Incorrect usage of "merge". Commit with id:'+n+" already exists, use different custom Id");throw h.hash={text:"merge "+r+n+o+m,token:"merge "+r+n+o+m,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+r+" "+n+"_UNIQUE "+o+" "+m]},h}const l={id:n||K+"-"+ct(),message:"merged branch "+r+" into "+C,seq:K++,parents:[null==A?null:A.id,M[r]],branch:C,type:q.MERGE,customType:o,customId:!!n,tag:m||""};A=l,v[l.id]=l,M[C]=l.id,f.l.debug(M),f.l.debug("in mergeBranch")},cherryPick:function(r,n,o,m){if(f.l.debug("Entering cherryPick:",r,n,o),r=f.e.sanitizeText(r,(0,f.c)()),n=f.e.sanitizeText(n,(0,f.c)()),o=f.e.sanitizeText(o,(0,f.c)()),m=f.e.sanitizeText(m,(0,f.c)()),!r||void 0===v[r]){let l=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw l.hash={text:"cherryPick "+r+" "+n,token:"cherryPick "+r+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},l}let a=v[r],c=a.branch;if(m&&(!Array.isArray(a.parents)||!a.parents.includes(m)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");if(a.type===q.MERGE&&!m)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!n||void 0===v[n]){if(c===C){let _=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw _.hash={text:"cherryPick "+r+" "+n,token:"cherryPick "+r+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},_}const l=v[M[C]];if(void 0===l||!l){let _=new Error('Incorrect usage of "cherry-pick". Current branch ('+C+")has no commits");throw _.hash={text:"cherryPick "+r+" "+n,token:"cherryPick "+r+" "+n,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},_}const h={id:K+"-"+ct(),message:"cherry-picked "+a+" into "+C,seq:K++,parents:[null==A?null:A.id,a.id],branch:C,type:q.CHERRY_PICK,tag:o??`cherry-pick:${a.id}${a.type===q.MERGE?`|parent:${m}`:""}`};A=h,v[h.id]=h,M[C]=h.id,f.l.debug(M),f.l.debug("in cherryPick")}},checkout:bt,prettyPrint:function(){f.l.debug(v),dt([kt()[0]])},clear:function(){v={},A=null;let r=(0,f.c)().gitGraph.mainBranchName,n=(0,f.c)().gitGraph.mainBranchOrder;M={},M[r]=null,J={},J[r]={name:r,order:n},C=r,K=0,(0,f.t)()},getBranchesAsObjArray:function(){return Object.values(J).map((n,o)=>null!==n.order?n:{...n,order:parseFloat(`0.${o}`,10)}).sort((n,o)=>n.order-o.order).map(({name:n})=>({name:n}))},getBranches:function(){return M},getCommits:function(){return v},getCommitsArray:kt,getCurrentBranch:function(){return C},getDirection:function(){return ft},getHead:function(){return A},setAccTitle:f.s,getAccTitle:f.g,getAccDescription:f.a,setAccDescription:f.b,setDiagramTitle:f.q,getDiagramTitle:f.r,commitType:q},renderer:{draw:function(r,n,o,m){L={},X={},Q={},Z=0,rt=[],P="LR";const a=(0,f.c)(),c=a.gitGraph;f.l.debug("in gitgraph renderer",r+"\n","id:",n,o),Q=m.db.getCommits();const l=m.db.getBranchesAsObjArray();P=m.db.getDirection();const h=(0,wt.Ys)(`[id="${n}"]`);let _=0;l.forEach((x,i)=>{const g=xt(x.name),p=h.append("g"),E=p.insert("g").attr("class","branchLabel"),b=E.insert("g").attr("class","label branch-label");b.node().appendChild(g);let k=g.getBBox();L[x.name]={pos:_,index:i},_+=50+(c.rotateCommitLabel?40:0)+("TB"===P?k.width/2:0),b.remove(),E.remove(),p.remove()}),yt(h,Q,!1),c.showBranches&&((r,n)=>{const o=(0,f.c)().gitGraph,m=r.append("g");n.forEach((a,c)=>{const l=c%8,h=L[a.name].pos,_=m.append("line");_.attr("x1",0),_.attr("y1",h),_.attr("x2",Z),_.attr("y2",h),_.attr("class","branch branch"+l),"TB"===P&&(_.attr("y1",30),_.attr("x1",h),_.attr("y2",Z),_.attr("x2",h)),rt.push(h);const i=xt(a.name),g=m.insert("rect"),E=m.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+l);E.node().appendChild(i);let b=i.getBBox();g.attr("class","branchLabelBkg label"+l).attr("rx",4).attr("ry",4).attr("x",-b.width-4-(!0===o.rotateCommitLabel?30:0)).attr("y",-b.height/2+8).attr("width",b.width+18).attr("height",b.height+4),E.attr("transform","translate("+(-b.width-14-(!0===o.rotateCommitLabel?30:0))+", "+(h-b.height/2-1)+")"),"TB"===P&&(g.attr("x",h-b.width/2-10).attr("y",0),E.attr("transform","translate("+(h-b.width/2-5)+", 0)")),"TB"!==P&&g.attr("transform","translate(-19, "+(h-b.height/2)+")")})})(h,l),qt(h,Q),yt(h,Q,!0),f.u.insertTitle(h,"gitTitleText",c.titleTopMargin,m.db.getDiagramTitle()),(0,f.y)(void 0,h,c.diagramPadding,c.useMaxWidth??a.useMaxWidth)}},styles:r=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map(n=>`\n        .branch-label${n} { fill: ${r["gitBranchLabel"+n]}; }\n        .commit${n} { stroke: ${r["git"+n]}; fill: ${r["git"+n]}; }\n        .commit-highlight${n} { stroke: ${r["gitInv"+n]}; fill: ${r["gitInv"+n]}; }\n        .label${n}  { fill: ${r["git"+n]}; }\n        .arrow${n} { stroke: ${r["git"+n]}; }\n        `).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${r.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}\n  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}\n  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }\n  .tag-hole { fill: ${r.textColor}; }\n\n  .commit-merge {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${r.textColor};\n  }\n`}}}]);