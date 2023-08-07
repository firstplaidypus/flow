"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[279],{4279:(at,L,b)=>{b.r(L),b.d(L,{diagram:()=>et});var m=b(6254),P=b(1074),C=b(4688),W=b(8814),t=b(5615);b(1764),b(6780),b(2735);const N={},F=(e,i,r)=>{const o=(0,t.c)().state.padding,s=2*(0,t.c)().state.padding,g=e.node().getBBox(),p=g.width,a=g.x,d=e.append("text").attr("x",0).attr("y",(0,t.c)().state.titleShift).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(i.id),x=d.node().getBBox().width+s;let l,c=Math.max(x,p);c===p&&(c+=s);const w=e.node().getBBox();l=a-o,x>p&&(l=(p-c)/2+o),Math.abs(a-w.x)<o&&x>p&&(l=a-(x-p)/2);const B=1-(0,t.c)().state.textHeight;return e.insert("rect",":first-child").attr("x",l).attr("y",B).attr("class",r?"alt-composit":"composit").attr("width",c).attr("height",w.height+(0,t.c)().state.textHeight+(0,t.c)().state.titleShift+1).attr("rx","0"),d.attr("x",l+o),x<=p&&d.attr("x",a+(c-s)/2-x/2+o),e.insert("rect",":first-child").attr("x",l).attr("y",(0,t.c)().state.titleShift-(0,t.c)().state.textHeight-(0,t.c)().state.padding).attr("width",c).attr("height",3*(0,t.c)().state.textHeight).attr("rx",(0,t.c)().state.radius),e.insert("rect",":first-child").attr("x",l).attr("y",(0,t.c)().state.titleShift-(0,t.c)().state.textHeight-(0,t.c)().state.padding).attr("width",c).attr("height",w.height+3+2*(0,t.c)().state.textHeight).attr("rx",(0,t.c)().state.radius),e},H=function(e,i){const r=i.id,o={id:r,label:i.id,width:0,height:0},s=e.append("g").attr("id",r).attr("class","stateGroup");"start"===i.type&&(e=>{e.append("circle").attr("class","start-state").attr("r",(0,t.c)().state.sizeUnit).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit)})(s),"end"===i.type&&(e=>{e.append("circle").attr("class","end-state-outer").attr("r",(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",(0,t.c)().state.sizeUnit).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+2).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+2)})(s),("fork"===i.type||"join"===i.type)&&((e,i)=>{let r=(0,t.c)().state.forkWidth,o=(0,t.c)().state.forkHeight;if(i.parentId){let s=r;r=o,o=s}e.append("rect").style("stroke","black").style("fill","black").attr("width",r).attr("height",o).attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding)})(s,i),"note"===i.type&&((e,i)=>{i.attr("class","state-note");const r=i.append("rect").attr("x",0).attr("y",(0,t.c)().state.padding),o=i.append("g"),{textWidth:s,textHeight:g}=((e,i,r,o)=>{let s=0;const g=o.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");const a=p.split(t.e.lineBreakRegex);let d=1.25*(0,t.c)().state.noteMargin;for(const y of a){const x=y.trim();if(x.length>0){const c=g.append("tspan");c.text(x),0===d&&(d+=c.node().getBBox().height),s+=d,c.attr("x",0+(0,t.c)().state.noteMargin),c.attr("y",0+s+1.25*(0,t.c)().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:s}})(e,0,0,o);r.attr("height",g+2*(0,t.c)().state.noteMargin),r.attr("width",s+2*(0,t.c)().state.noteMargin)})(i.note.text,s),"divider"===i.type&&(e=>{e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,t.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,t.c)().state.textHeight).attr("y1",0).attr("y2",0)})(s),"default"===i.type&&0===i.descriptions.length&&((e,i)=>{const o=e.append("text").attr("x",2*(0,t.c)().state.padding).attr("y",(0,t.c)().state.textHeight+2*(0,t.c)().state.padding).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(i.id).node().getBBox();e.insert("rect",":first-child").attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding).attr("width",o.width+2*(0,t.c)().state.padding).attr("height",o.height+2*(0,t.c)().state.padding).attr("rx",(0,t.c)().state.radius)})(s,i),"default"===i.type&&i.descriptions.length>0&&((e,i)=>{const s=e.append("text").attr("x",2*(0,t.c)().state.padding).attr("y",(0,t.c)().state.textHeight+1.3*(0,t.c)().state.padding).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox(),g=s.height,p=e.append("text").attr("x",(0,t.c)().state.padding).attr("y",g+.4*(0,t.c)().state.padding+(0,t.c)().state.dividerMargin+(0,t.c)().state.textHeight).attr("class","state-description");let a=!0,d=!0;i.descriptions.forEach(function(l){a||(function(l,w,B){const _=l.append("tspan").attr("x",2*(0,t.c)().state.padding).text(w);B||_.attr("dy",(0,t.c)().state.textHeight)}(p,l,d),d=!1),a=!1});const y=e.append("line").attr("x1",(0,t.c)().state.padding).attr("y1",(0,t.c)().state.padding+g+(0,t.c)().state.dividerMargin/2).attr("y2",(0,t.c)().state.padding+g+(0,t.c)().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),c=Math.max(x.width,s.width);y.attr("x2",c+3*(0,t.c)().state.padding),e.insert("rect",":first-child").attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding).attr("width",c+2*(0,t.c)().state.padding).attr("height",x.height+g+2*(0,t.c)().state.padding).attr("rx",(0,t.c)().state.radius)})(s,i);const g=s.node().getBBox();return o.width=g.width+2*(0,t.c)().state.padding,o.height=g.height+2*(0,t.c)().state.padding,((e,i)=>{N[e]=i})(r,o),o};let E,z=0;const T={},q=e=>e?e.length*E.fontSizeFactor:1,A=(e,i,r,o,s,g,p)=>{const a=new W.k({compound:!0,multigraph:!0});let d,y=!0;for(d=0;d<e.length;d++)if("relation"===e[d].stmt){y=!1;break}a.setGraph(r?{rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:y?1:E.edgeLengthFactor,nodeSep:y?1:50,isMultiGraph:!0}:{rankdir:"TB",multigraph:!0,compound:!0,ranksep:y?1:E.edgeLengthFactor,nodeSep:y?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);const x=p.db.getStates(),c=p.db.getRelations(),l=Object.keys(x);for(const n of l){const u=x[n];let h;if(r&&(u.parentId=r),u.doc){let f=i.append("g").attr("id",u.id).attr("class","stateGroup");h=A(u.doc,f,u.id,!o,s,g,p);{f=F(f,u,o);let M=f.node().getBBox();h.width=M.width,h.height=M.height+E.padding/2,T[u.id]={y:E.compositTitleSize}}}else h=H(i,u);if(u.note){const M=H(i,{descriptions:[],id:u.id+"-note",note:u.note,type:"note"});"left of"===u.note.position?(a.setNode(h.id+"-note",M),a.setNode(h.id,h)):(a.setNode(h.id,h),a.setNode(h.id+"-note",M)),a.setParent(h.id,h.id+"-group"),a.setParent(h.id+"-note",h.id+"-group")}else a.setNode(h.id,h)}t.l.debug("Count=",a.nodeCount(),a);let w=0;c.forEach(function(n){w++,t.l.debug("Setting edge",n),a.setEdge(n.id1,n.id2,{relation:n,width:q(n.title),height:E.labelHeight*t.e.getRows(n.title).length,labelpos:"c"},"id"+w)}),(0,C.bK)(a),t.l.debug("Graph after layout",a.nodes());const B=i.node();a.nodes().forEach(function(n){void 0!==n&&void 0!==a.node(n)?(t.l.warn("Node "+n+": "+JSON.stringify(a.node(n))),s.select("#"+B.id+" #"+n).attr("transform","translate("+(a.node(n).x-a.node(n).width/2)+","+(a.node(n).y+(T[n]?T[n].y:0)-a.node(n).height/2)+" )"),s.select("#"+B.id+" #"+n).attr("data-x-shift",a.node(n).x-a.node(n).width/2),g.querySelectorAll("#"+B.id+" #"+n+" .divider").forEach(h=>{const f=h.parentElement;let M=0,k=0;f&&(f.parentElement&&(M=f.parentElement.getBBox().width),k=parseInt(f.getAttribute("data-x-shift"),10),Number.isNaN(k)&&(k=0)),h.setAttribute("x1",0-k+8),h.setAttribute("x2",M-k-8)})):t.l.debug("No Node "+n+": "+JSON.stringify(a.node(n)))});let _=B.getBBox();a.edges().forEach(function(n){void 0!==n&&void 0!==a.edge(n)&&(t.l.debug("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(a.edge(n))),function(e,i,r){i.points=i.points.filter(d=>!Number.isNaN(d.y));const s=i.points,g=(0,P.jvg)().x(function(d){return d.x}).y(function(d){return d.y}).curve(P.$0Z),p=e.append("path").attr("d",g(s)).attr("id","edge"+z).attr("class","transition");let a="";if((0,t.c)().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),p.attr("marker-end","url("+a+"#"+function(d){switch(d){case m.d.relationType.AGGREGATION:return"aggregation";case m.d.relationType.EXTENSION:return"extension";case m.d.relationType.COMPOSITION:return"composition";case m.d.relationType.DEPENDENCY:return"dependency"}}(m.d.relationType.DEPENDENCY)+"End)"),void 0!==r.title){const d=e.append("g").attr("class","stateLabel"),{x:y,y:x}=t.u.calcLabelPosition(i.points),c=t.e.getRows(r.title);let l=0;const w=[];let B=0,_=0;for(let u=0;u<=c.length;u++){const h=d.append("text").attr("text-anchor","middle").text(c[u]).attr("x",y).attr("y",x+l),f=h.node().getBBox();B=Math.max(B,f.width),_=Math.min(_,f.x),t.l.info(f.x,y,x+l),0===l&&(l=h.node().getBBox().height,t.l.info("Title height",l,x)),w.push(h)}let S=l*c.length;if(c.length>1){const u=(c.length-1)*l*.5;w.forEach((h,f)=>h.attr("y",x+f*l-u)),S=l*c.length}const n=d.node().getBBox();d.insert("rect",":first-child").attr("class","box").attr("x",y-B/2-(0,t.c)().state.padding/2).attr("y",x-S/2-(0,t.c)().state.padding/2-3.5).attr("width",B+(0,t.c)().state.padding).attr("height",S+(0,t.c)().state.padding),t.l.info(n)}z++}(i,a.edge(n),a.edge(n).relation))}),_=B.getBBox();const S={id:r||"root",label:r||"root",width:0,height:0};return S.width=_.width+2*E.padding,S.height=_.height+2*E.padding,t.l.debug("Doc rendered",S,a),S},et={parser:m.p,db:m.d,renderer:{setConf:function(){},draw:function(e,i,r,o){E=(0,t.c)().state;const s=(0,t.c)().securityLevel;let g;"sandbox"===s&&(g=(0,P.Ys)("#i"+i));const p=(0,P.Ys)("sandbox"===s?g.nodes()[0].contentDocument.body:"body"),a="sandbox"===s?g.nodes()[0].contentDocument:document;t.l.debug("Rendering diagram "+e);const d=p.select(`[id='${i}']`);!function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}(d);const y=o.db.getRootDoc();A(y,d,void 0,!1,p,a,o);const x=E.padding,c=d.node().getBBox(),l=c.width+2*x,w=c.height+2*x;(0,t.i)(d,w,1.75*l,E.useMaxWidth),d.attr("viewBox",`${c.x-E.padding}  ${c.y-E.padding} `+l+" "+w)}},styles:m.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,m.d.clear()}}}}]);