"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[890],{8890:(R,N,y)=>{y.r(N),y.d(N,{diagram:()=>p});var T=y(2884),u=y(1074),S=y(4688),W=y(8814),m=y(9678),k=y(373);y(1764),y(6780),y(2735);let w={};const e=function(i){const l=Object.entries(w).find(h=>h[1].label===i);if(l)return l[0]},p={parser:T.p,db:T.d,renderer:{draw:function(i,l,h,n){const c=(0,m.c)().class;w={},m.l.info("Rendering diagram "+i);const _=(0,m.c)().securityLevel;let s;"sandbox"===_&&(s=(0,u.Ys)("#i"+l));const x=(0,u.Ys)("sandbox"===_?s.nodes()[0].contentDocument.body:"body"),f=x.select(`[id='${l}']`);!function(i){i.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),i.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),i.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")}(f);const d=new W.k({multigraph:!0});d.setGraph({isMultiGraph:!0}),d.setDefaultEdgeLabel(function(){return{}});const M=n.db.getClasses(),O=Object.keys(M);for(const r of O){const P=k.s.drawClass(f,M[r],c,n);w[P.id]=P,d.setNode(P.id,P),m.l.info("Org height: "+P.height)}n.db.getRelations().forEach(function(r){m.l.info("tjoho"+e(r.id1)+e(r.id2)+JSON.stringify(r)),d.setEdge(e(r.id1),e(r.id2),{relation:r},r.title||"DEFAULT")}),n.db.getNotes().forEach(function(r){m.l.debug(`Adding note: ${JSON.stringify(r)}`);const C=k.s.drawNote(f,r,c,n);w[C.id]=C,d.setNode(C.id,C),r.class&&r.class in M&&d.setEdge(r.id,e(r.class),{relation:{id1:r.id,id2:r.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,S.bK)(d),d.nodes().forEach(function(r){void 0!==r&&void 0!==d.node(r)&&(m.l.debug("Node "+r+": "+JSON.stringify(d.node(r))),x.select("#"+(n.db.lookUpDomId(r)||r)).attr("transform","translate("+(d.node(r).x-d.node(r).width/2)+","+(d.node(r).y-d.node(r).height/2)+" )"))}),d.edges().forEach(function(r){void 0!==r&&void 0!==d.edge(r)&&(m.l.debug("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(d.edge(r))),k.s.drawEdge(f,d.edge(r),d.edge(r).relation,c,n))});const E=f.node().getBBox(),b=E.width+40,L=E.height+40;(0,m.i)(f,L,b,c.useMaxWidth);const I=`${E.x-20} ${E.y-20} ${b} ${L}`;m.l.debug(`viewBox ${I}`),f.attr("viewBox",I)}},styles:T.s,init:i=>{i.class||(i.class={}),i.class.arrowMarkerAbsolute=i.arrowMarkerAbsolute,T.d.clear()}}},373:(R,N,y)=>{y.d(N,{p:()=>A,s:()=>v});var T=y(1074),u=y(9678);let S=0;const k=function(e){let a=e.id;return e.type&&(a+="<"+e.type+">"),a},A=function(e){let a="",t="",o="",p="",i=e.substring(0,1),l=e.substring(e.length-1,e.length);i.match(/[#+~-]/)&&(p=i);let h=/[\s\w)~]/;l.match(h)||(t=w(l));const _=(e=e.substring(""===p?0:1,""===t?e.length:e.length-1)).indexOf("("),s=e.indexOf(")");if(_>1&&s>_&&s<=e.length){let f=e.substring(0,_).trim();const d=e.substring(_+1,s);if(a=p+f+"("+(0,u.x)(d.trim())+")",s<e.length){let M=e.substring(s+1,s+2);""!==t||M.match(h)?o=e.substring(s+1).trim():(t=w(M),o=e.substring(s+2).trim()),""!==o&&(":"===o.charAt(0)&&(o=o.substring(1).trim()),o=" : "+(0,u.x)(o),a+=o)}}else a=p+(0,u.x)(e);return{displayText:a,cssStyle:t}},H=function(e,a,t,o){let p=A(a);const i=e.append("tspan").attr("x",o.padding).text(p.displayText);""!==p.cssStyle&&i.attr("style",p.cssStyle),t||i.attr("dy",o.textHeight)},w=function(e){switch(e){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},v={getClassTitleString:k,drawClass:function(e,a,t,o){u.l.debug("Rendering class ",a,t);const p=a.id,i={id:p,label:a.id,width:0,height:0},l=e.append("g").attr("id",o.db.lookUpDomId(p)).attr("class","classGroup");let h;h=a.link?l.append("svg:a").attr("xlink:href",a.link).attr("target",a.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):l.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let n=!0;a.annotations.forEach(function(L){const I=h.append("tspan").text("\xab"+L+"\xbb");n||I.attr("dy",t.textHeight),n=!1});let c=k(a);const _=h.append("tspan").text(c).attr("class","title");n||_.attr("dy",t.textHeight);const s=h.node().getBBox().height,x=l.append("line").attr("x1",0).attr("y1",t.padding+s+t.dividerMargin/2).attr("y2",t.padding+s+t.dividerMargin/2),f=l.append("text").attr("x",t.padding).attr("y",s+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");n=!0,a.members.forEach(function(L){H(f,L,n,t),n=!1});const d=f.node().getBBox(),M=l.append("line").attr("x1",0).attr("y1",t.padding+s+t.dividerMargin+d.height).attr("y2",t.padding+s+t.dividerMargin+d.height),O=l.append("text").attr("x",t.padding).attr("y",s+2*t.dividerMargin+d.height+t.textHeight).attr("fill","white").attr("class","classText");n=!0,a.methods.forEach(function(L){H(O,L,n,t),n=!1});const B=l.node().getBBox();var g=" ";a.cssClasses.length>0&&(g+=a.cssClasses.join(" "));const b=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",B.width+2*t.padding).attr("height",B.height+t.padding+.5*t.dividerMargin).attr("class",g).node().getBBox().width;return h.node().childNodes.forEach(function(L){L.setAttribute("x",(b-L.getBBox().width)/2)}),a.tooltip&&h.insert("title").text(a.tooltip),x.attr("x2",b),M.attr("x2",b),i.width=b,i.height=B.height+t.padding+.5*t.dividerMargin,i},drawEdge:function(e,a,t,o,p){const i=function(g){switch(g){case p.db.relationType.AGGREGATION:return"aggregation";case p.db.relationType.EXTENSION:return"extension";case p.db.relationType.COMPOSITION:return"composition";case p.db.relationType.DEPENDENCY:return"dependency";case p.db.relationType.LOLLIPOP:return"lollipop"}};a.points=a.points.filter(g=>!Number.isNaN(g.y));const l=a.points,h=(0,T.jvg)().x(function(g){return g.x}).y(function(g){return g.y}).curve(T.$0Z),n=e.append("path").attr("d",h(l)).attr("id","edge"+S).attr("class","relation");let _,s,c="";o.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),1==t.relation.lineType&&n.attr("class","relation dashed-line"),10==t.relation.lineType&&n.attr("class","relation dotted-line"),"none"!==t.relation.type1&&n.attr("marker-start","url("+c+"#"+i(t.relation.type1)+"Start)"),"none"!==t.relation.type2&&n.attr("marker-end","url("+c+"#"+i(t.relation.type2)+"End)");const x=a.points.length;let d,M,O,B,f=u.u.calcLabelPosition(a.points);if(_=f.x,s=f.y,x%2!=0&&x>1){let g=u.u.calcCardinalityPosition("none"!==t.relation.type1,a.points,a.points[0]),E=u.u.calcCardinalityPosition("none"!==t.relation.type2,a.points,a.points[x-1]);u.l.debug("cardinality_1_point "+JSON.stringify(g)),u.l.debug("cardinality_2_point "+JSON.stringify(E)),d=g.x,M=g.y,O=E.x,B=E.y}if(void 0!==t.title){const g=e.append("g").attr("class","classLabel"),E=g.append("text").attr("class","label").attr("x",_).attr("y",s).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=E;const b=E.node().getBBox();g.insert("rect",":first-child").attr("class","box").attr("x",b.x-o.padding/2).attr("y",b.y-o.padding/2).attr("width",b.width+o.padding).attr("height",b.height+o.padding)}u.l.info("Rendering relation "+JSON.stringify(t)),void 0!==t.relationTitle1&&"none"!==t.relationTitle1&&e.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",d).attr("y",M).attr("fill","black").attr("font-size","6").text(t.relationTitle1),void 0!==t.relationTitle2&&"none"!==t.relationTitle2&&e.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",O).attr("y",B).attr("fill","black").attr("font-size","6").text(t.relationTitle2),S++},drawNote:function(e,a,t,o){u.l.debug("Rendering note ",a,t);const p=a.id,i={id:p,text:a.text,width:0,height:0},l=e.append("g").attr("id",p).attr("class","classGroup");let h=l.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const n=JSON.parse(`"${a.text}"`).split("\n");n.forEach(function(x){u.l.debug(`Adding line: ${x}`),h.append("tspan").text(x).attr("class","title").attr("dy",t.textHeight)});const c=l.node().getBBox(),s=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*t.padding).attr("height",c.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return h.node().childNodes.forEach(function(x){x.setAttribute("x",(s-x.getBBox().width)/2)}),i.width=s,i.height=c.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin,i},parseMember:A}}}]);