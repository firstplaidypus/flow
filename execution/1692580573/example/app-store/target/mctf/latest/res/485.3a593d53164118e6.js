"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[485],{7416:(K,R,m)=>{m.d(R,{c:()=>T});var D=m(9948),p=m(4258);var P=m(2957);function T(h){var g={options:{directed:h.isDirected(),multigraph:h.isMultigraph(),compound:h.isCompound()},nodes:d(h),edges:E(h)};return D.Z(h.graph())||(g.value=function v(h){return(0,p.Z)(h,4)}(h.graph())),g}function d(h){return P.Z(h.nodes(),function(g){var x=h.node(g),C=h.parent(g),S={v:g};return D.Z(x)||(S.value=x),D.Z(C)||(S.parent=C),S})}function E(h){return P.Z(h.edges(),function(g){var x=h.edge(g),C={v:g.v,w:g.w};return D.Z(g.name)||(C.name=g.name),D.Z(x)||(C.value=x),C})}m(1595)},9485:(K,R,m)=>{m.d(R,{r:()=>V});var D=m(5861),p=m(4688),N=m(7416),v=m(9027),i=m(9678),P=m(8814),A=m(693),T=m(1074);let d={},E={},M={};const g=(n,t)=>(i.l.trace("In isDecendant",t," ",n," = ",E[t].includes(n)),!!E[t].includes(n)),C=(n,t,e,l)=>{i.l.warn("Copying children of ",n,"root",l,"data",t.node(n),l);const s=t.children(n)||[];n!==l&&s.push(n),i.l.warn("Copying (nodes) clusterId",n,"nodes",s),s.forEach(r=>{if(t.children(r).length>0)C(r,t,e,l);else{const f=t.node(r);i.l.info("cp ",r," to ",l," with parent ",n),e.setNode(r,f),l!==t.parent(r)&&(i.l.warn("Setting parent",r,t.parent(r)),e.setParent(r,t.parent(r))),n!==l&&r!==n?(i.l.debug("Setting parent",r,n),e.setParent(r,n)):(i.l.info("In copy ",n,"root",l,"data",t.node(n),l),i.l.debug("Not Setting parent for node=",r,"cluster!==rootId",n!==l,"node!==clusterId",r!==n));const o=t.edges(r);i.l.debug("Copying Edges",o),o.forEach(u=>{i.l.info("Edge",u);const y=t.edge(u.v,u.w,u.name);i.l.info("Edge data",y,l);try{((n,t)=>(i.l.info("Decendants of ",t," is ",E[t]),i.l.info("Edge is ",n),n.v!==t&&n.w!==t&&(E[t]?E[t].includes(n.v)||g(n.v,t)||g(n.w,t)||E[t].includes(n.w):(i.l.debug("Tilt, ",t,",not in decendants"),!1))))(u,l)?(i.l.info("Copying as ",u.v,u.w,y,u.name),e.setEdge(u.v,u.w,y,u.name),i.l.info("newGraph edges ",e.edges(),e.edge(e.edges()[0]))):i.l.info("Skipping copy of edge ",u.v,"--\x3e",u.w," rootId: ",l," clusterId:",n)}catch(b){i.l.error(b)}})}i.l.debug("Removing node",r),t.removeNode(r)})},S=(n,t)=>{const e=t.children(n);let l=[...e];for(const s of e)M[s]=n,l=[...l,...S(s,t)];return l},X=(n,t)=>{i.l.trace("Searching",n);const e=t.children(n);if(i.l.trace("Searching children of id ",n,e),e.length<1)return i.l.trace("This is a valid node",n),n;for(const l of e){const s=X(l,t);if(s)return i.l.trace("Found replacement for",n," => ",s),s}},L=n=>d[n]&&d[n].externalConnections&&d[n]?d[n].id:n,Z=(n,t)=>{if(i.l.warn("extractor - ",t,N.c(n),n.children("D")),t>10)return void i.l.error("Bailing out");let e=n.nodes(),l=!1;for(const s of e){const r=n.children(s);l=l||r.length>0}if(l){i.l.debug("Nodes = ",e,t);for(const s of e)if(i.l.debug("Extracting node",s,d,d[s]&&!d[s].externalConnections,!n.parent(s),n.node(s),n.children("D")," Depth ",t),d[s])if(!d[s].externalConnections&&n.children(s)&&n.children(s).length>0){i.l.warn("Cluster without external connections, without a parent and with children",s,t);let f="TB"===n.graph().rankdir?"LR":"TB";d[s]&&d[s].clusterData&&d[s].clusterData.dir&&(f=d[s].clusterData.dir,i.l.warn("Fixing dir",d[s].clusterData.dir,f));const o=new P.k({multigraph:!0,compound:!0}).setGraph({rankdir:f,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.l.warn("Old graph before copy",N.c(n)),C(s,n,o,s),n.setNode(s,{clusterNode:!0,id:s,clusterData:d[s].clusterData,labelText:d[s].labelText,graph:o}),i.l.warn("New graph after copy node: (",s,")",N.c(o)),i.l.debug("Old graph after copy",N.c(n))}else i.l.warn("Cluster ** ",s," **not meeting the criteria !externalConnections:",!d[s].externalConnections," no parent: ",!n.parent(s)," children ",n.children(s)&&n.children(s).length>0,n.children("D"),t),i.l.debug(d);else i.l.debug("Not a cluster",s,t);e=n.nodes(),i.l.warn("New list of nodes",e);for(const s of e){const r=n.node(s);i.l.warn(" Now next level",s,r),r.clusterNode&&Z(r.graph,t+1)}}else i.l.debug("Done, no node has children",n.nodes())},W=(n,t)=>{if(0===t.length)return[];let e=Object.assign(t);return t.forEach(l=>{const s=n.children(l),r=W(n,s);e=[...e,...r]}),e},k={rect:(n,t)=>{i.l.info("Creating subgraph rect for ",t.id,t);const e=n.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),l=e.insert("rect",":first-child"),s=(0,i.n)((0,i.c)().flowchart.htmlLabels),r=e.insert("g").attr("class","cluster-label"),f="markdown"===t.labelType?(0,A.c)(r,t.labelText,{style:t.labelStyle,useHtmlLabels:s}):r.node().appendChild((0,v.c)(t.labelText,t.labelStyle,void 0,!0));let o=f.getBBox();if((0,i.n)((0,i.c)().flowchart.htmlLabels)){const a=f.children[0],c=(0,T.Ys)(f);o=a.getBoundingClientRect(),c.attr("width",o.width),c.attr("height",o.height)}const u=0*t.padding,y=u/2,b=t.width<=o.width+u?o.width+u:t.width;t.diff=t.width<=o.width+u?(o.width-t.width)/2-t.padding/2:-t.padding/2,i.l.trace("Data ",t,JSON.stringify(t)),l.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-b/2).attr("y",t.y-t.height/2-y).attr("width",b).attr("height",t.height+u),r.attr("transform",s?"translate("+(t.x-o.width/2)+", "+(t.y-t.height/2)+")":"translate("+t.x+", "+(t.y-t.height/2)+")");const O=l.node().getBBox();return t.width=O.width,t.height=O.height,t.intersect=function(a){return(0,v.i)(t,a)},e},roundedWithTitle:(n,t)=>{const e=n.insert("g").attr("class",t.classes).attr("id",t.id),l=e.insert("rect",":first-child"),s=e.insert("g").attr("class","cluster-label"),r=e.append("rect"),f=s.node().appendChild((0,v.c)(t.labelText,t.labelStyle,void 0,!0));let o=f.getBBox();if((0,i.n)((0,i.c)().flowchart.htmlLabels)){const a=f.children[0],c=(0,T.Ys)(f);o=a.getBoundingClientRect(),c.attr("width",o.width),c.attr("height",o.height)}o=f.getBBox();const u=0*t.padding,y=u/2,b=t.width<=o.width+t.padding?o.width+t.padding:t.width;t.diff=t.width<=o.width+t.padding?(o.width+0*t.padding-t.width)/2:-t.padding/2,l.attr("class","outer").attr("x",t.x-b/2-y).attr("y",t.y-t.height/2-y).attr("width",b+u).attr("height",t.height+u),r.attr("class","inner").attr("x",t.x-b/2-y).attr("y",t.y-t.height/2-y+o.height-1).attr("width",b+u).attr("height",t.height+u-o.height-3),s.attr("transform","translate("+(t.x-o.width/2)+", "+(t.y-t.height/2-t.padding/3+((0,i.n)((0,i.c)().flowchart.htmlLabels)?5:3))+")");const O=l.node().getBBox();return t.height=O.height,t.intersect=function(a){return(0,v.i)(t,a)},e},noteGroup:(n,t)=>{const e=n.insert("g").attr("class","note-cluster").attr("id",t.id),l=e.insert("rect",":first-child"),s=0*t.padding,r=s/2;l.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-r).attr("y",t.y-t.height/2-r).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const f=l.node().getBBox();return t.width=f.width,t.height=f.height,t.intersect=function(o){return(0,v.i)(t,o)},e},divider:(n,t)=>{const e=n.insert("g").attr("class",t.classes).attr("id",t.id),l=e.insert("rect",":first-child"),s=0*t.padding,r=s/2;l.attr("class","divider").attr("x",t.x-t.width/2-r).attr("y",t.y-t.height/2).attr("width",t.width+s).attr("height",t.height+s);const f=l.node().getBBox();return t.width=f.width,t.height=f.height,t.diff=-t.padding/2,t.intersect=function(o){return(0,v.i)(t,o)},e}};let j={};const F=function(){var n=(0,D.Z)(function*(t,e,l,s){i.l.info("Graph in recursive render: XXX",N.c(e),s);const r=e.graph().rankdir;i.l.trace("Dir in recursive render - dir:",r);const f=t.insert("g").attr("class","root");e.nodes()?i.l.info("Recursive render XXX",e.nodes()):i.l.info("No nodes found for",e),e.edges().length>0&&i.l.trace("Recursive edges",e.edge(e.edges()[0]));const o=f.insert("g").attr("class","clusters"),u=f.insert("g").attr("class","edgePaths"),y=f.insert("g").attr("class","edgeLabels"),b=f.insert("g").attr("class","nodes");yield Promise.all(e.nodes().map(function(){var a=(0,D.Z)(function*(c){const w=e.node(c);if(void 0!==s){const B=JSON.parse(JSON.stringify(s.clusterData));i.l.info("Setting data for cluster XXX (",c,") ",B,s),e.setNode(s.id,B),e.parent(c)||(i.l.trace("Setting parent",c,s.id),e.setParent(c,s.id,B))}if(i.l.info("(Insert) Node XXX"+c+": "+JSON.stringify(e.node(c))),w&&w.clusterNode){i.l.info("Cluster identified",c,w.width,e.node(c));const B=yield F(b,w.graph,l,e.node(c)),J=B.elem;(0,v.u)(w,J),w.diff=B.diff||0,i.l.info("Node bounds (abc123)",c,w,w.width,w.x,w.y),(0,v.s)(J,w),i.l.warn("Recursive render complete ",J,w)}else e.children(c).length>0?(i.l.info("Cluster - the non recursive path XXX",c,w.id,w,e),i.l.info(X(w.id,e)),d[w.id]={id:X(w.id,e),node:w}):(i.l.info("Node - the non recursive path",c,w.id,w),yield(0,v.e)(b,e.node(c),r))});return function(c){return a.apply(this,arguments)}}())),e.edges().forEach(function(a){const c=e.edge(a.v,a.w,a.name);i.l.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(a)),i.l.info("Edge "+a.v+" -> "+a.w+": ",a," ",JSON.stringify(e.edge(a))),i.l.info("Fix",d,"ids:",a.v,a.w,"Translateing: ",d[a.v],d[a.w]),(0,v.f)(y,c)}),e.edges().forEach(function(a){i.l.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(a))}),i.l.info("#############################################"),i.l.info("###                Layout                 ###"),i.l.info("#############################################"),i.l.info(e),(0,p.bK)(e),i.l.info("Graph after layout:",N.c(e));let O=0;return(n=>W(n,n.children()))(e).forEach(function(a){const c=e.node(a);i.l.info("Position "+a+": "+JSON.stringify(e.node(a))),i.l.info("Position "+a+": ("+c.x,","+c.y,") width: ",c.width," height: ",c.height),c&&c.clusterNode?(0,v.p)(c):e.children(a).length>0?(((n,t)=>{i.l.trace("Inserting cluster"),j[t.id]=k[t.shape||"rect"](n,t)})(o,c),d[c.id].node=c):(0,v.p)(c)}),e.edges().forEach(function(a){const c=e.edge(a);i.l.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(c),c);const w=(0,v.g)(u,a,c,d,l,e);(0,v.h)(c,w)}),e.nodes().forEach(function(a){const c=e.node(a);i.l.info(a,c.type,c.diff),"group"===c.type&&(O=c.diff)}),{elem:f,diff:O}});return function(e,l,s,r){return n.apply(this,arguments)}}(),V=function(){var n=(0,D.Z)(function*(t,e,l,s,r){(0,v.a)(t,l,s,r),(0,v.b)(),(0,v.d)(),j={},E={},M={},d={},i.l.warn("Graph at first:",N.c(e)),((n,t)=>{n?(i.l.debug("Opting in, graph "),n.nodes().forEach(function(e){n.children(e).length>0&&(i.l.warn("Cluster identified",e," Replacement id in edges: ",X(e,n)),E[e]=S(e,n),d[e]={id:X(e,n),clusterData:n.node(e)})}),n.nodes().forEach(function(e){const l=n.children(e),s=n.edges();l.length>0?(i.l.debug("Cluster identified",e,E),s.forEach(r=>{r.v!==e&&r.w!==e&&g(r.v,e)^g(r.w,e)&&(i.l.warn("Edge: ",r," leaves cluster ",e),i.l.warn("Decendants of XXX ",e,": ",E[e]),d[e].externalConnections=!0)})):i.l.debug("Not a cluster ",e,E)}),n.edges().forEach(function(e){const l=n.edge(e);i.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),i.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n.edge(e)));let s=e.v,r=e.w;if(i.l.warn("Fix XXX",d,"ids:",e.v,e.w,"Translating: ",d[e.v]," --- ",d[e.w]),d[e.v]&&d[e.w]&&d[e.v]===d[e.w]){i.l.warn("Fixing and trixing link to self - removing XXX",e.v,e.w,e.name),i.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),s=L(e.v),r=L(e.w),n.removeEdge(e.v,e.w,e.name);const f=e.w+"---"+e.v;n.setNode(f,{domId:f,id:f,labelStyle:"",labelText:l.label,padding:0,shape:"labelRect",style:""});const o=JSON.parse(JSON.stringify(l)),u=JSON.parse(JSON.stringify(l));o.label="",o.arrowTypeEnd="none",u.label="",o.fromCluster=e.v,u.toCluster=e.v,n.setEdge(s,f,o,e.name+"-cyclic-special"),n.setEdge(f,r,u,e.name+"-cyclic-special")}else(d[e.v]||d[e.w])&&(i.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),s=L(e.v),r=L(e.w),n.removeEdge(e.v,e.w,e.name),s!==e.v&&(l.fromCluster=e.v),r!==e.w&&(l.toCluster=e.w),i.l.warn("Fix Replacing with XXX",s,r,e.name),n.setEdge(s,r,l,e.name))}),i.l.warn("Adjusted Graph",N.c(n)),Z(n,0),i.l.trace(d)):i.l.debug("Opting out, no graph ")})(e),i.l.warn("Graph after:",N.c(e)),yield F(t,e,s)});return function(e,l,s,r,f){return n.apply(this,arguments)}}()}}]);