"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[637],{7416:(U,p,m)=>{m.d(p,{c:()=>L});var N=m(9948),M=m(4258);var T=m(2957);function L(h){var g={options:{directed:h.isDirected(),multigraph:h.isMultigraph(),compound:h.isCompound()},nodes:d(h),edges:E(h)};return N.Z(h.graph())||(g.value=function v(h){return(0,M.Z)(h,4)}(h.graph())),g}function d(h){return T.Z(h.nodes(),function(g){var x=h.node(g),O=h.parent(g),S={v:g};return N.Z(x)||(S.value=x),N.Z(O)||(S.parent=O),S})}function E(h){return T.Z(h.edges(),function(g){var x=h.edge(g),O={v:g.v,w:g.w};return N.Z(g.name)||(O.name=g.name),N.Z(x)||(O.value=x),O})}m(1595)},5637:(U,p,m)=>{m.d(p,{r:()=>$});var N=m(5861),M=m(1065),b=m(7416),v=m(2429),i=m(6144),T=m(8814),Z=m(3469),L=m(3210);let d={},E={},J={};const g=(n,t)=>(i.l.trace("In isDecendant",t," ",n," = ",E[t].includes(n)),!!E[t].includes(n)),O=(n,t,e,l)=>{i.l.warn("Copying children of ",n,"root",l,"data",t.node(n),l);const s=t.children(n)||[];n!==l&&s.push(n),i.l.warn("Copying (nodes) clusterId",n,"nodes",s),s.forEach(r=>{if(t.children(r).length>0)O(r,t,e,l);else{const f=t.node(r);i.l.info("cp ",r," to ",l," with parent ",n),e.setNode(r,f),l!==t.parent(r)&&(i.l.warn("Setting parent",r,t.parent(r)),e.setParent(r,t.parent(r))),n!==l&&r!==n?(i.l.debug("Setting parent",r,n),e.setParent(r,n)):(i.l.info("In copy ",n,"root",l,"data",t.node(n),l),i.l.debug("Not Setting parent for node=",r,"cluster!==rootId",n!==l,"node!==clusterId",r!==n));const c=t.edges(r);i.l.debug("Copying Edges",c),c.forEach(u=>{i.l.info("Edge",u);const y=t.edge(u.v,u.w,u.name);i.l.info("Edge data",y,l);try{((n,t)=>(i.l.info("Decendants of ",t," is ",E[t]),i.l.info("Edge is ",n),n.v!==t&&n.w!==t&&(E[t]?E[t].includes(n.v)||g(n.v,t)||g(n.w,t)||E[t].includes(n.w):(i.l.debug("Tilt, ",t,",not in decendants"),!1))))(u,l)?(i.l.info("Copying as ",u.v,u.w,y,u.name),e.setEdge(u.v,u.w,y,u.name),i.l.info("newGraph edges ",e.edges(),e.edge(e.edges()[0]))):i.l.info("Skipping copy of edge ",u.v,"--\x3e",u.w," rootId: ",l," clusterId:",n)}catch(C){i.l.error(C)}})}i.l.debug("Removing node",r),t.removeNode(r)})},S=(n,t)=>{const e=t.children(n);let l=[...e];for(const s of e)J[s]=n,l=[...l,...S(s,t)];return l},P=(n,t)=>{i.l.trace("Searching",n);const e=t.children(n);if(i.l.trace("Searching children of id ",n,e),e.length<1)return i.l.trace("This is a valid node",n),n;for(const l of e){const s=P(l,t);if(s)return i.l.trace("Found replacement for",n," => ",s),s}},R=n=>d[n]&&d[n].externalConnections&&d[n]?d[n].id:n,W=(n,t)=>{if(i.l.warn("extractor - ",t,b.c(n),n.children("D")),t>10)return void i.l.error("Bailing out");let e=n.nodes(),l=!1;for(const s of e){const r=n.children(s);l=l||r.length>0}if(l){i.l.debug("Nodes = ",e,t);for(const s of e)if(i.l.debug("Extracting node",s,d,d[s]&&!d[s].externalConnections,!n.parent(s),n.node(s),n.children("D")," Depth ",t),d[s])if(!d[s].externalConnections&&n.children(s)&&n.children(s).length>0){i.l.warn("Cluster without external connections, without a parent and with children",s,t);let f="TB"===n.graph().rankdir?"LR":"TB";d[s]&&d[s].clusterData&&d[s].clusterData.dir&&(f=d[s].clusterData.dir,i.l.warn("Fixing dir",d[s].clusterData.dir,f));const c=new T.k({multigraph:!0,compound:!0}).setGraph({rankdir:f,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.l.warn("Old graph before copy",b.c(n)),O(s,n,c,s),n.setNode(s,{clusterNode:!0,id:s,clusterData:d[s].clusterData,labelText:d[s].labelText,graph:c}),i.l.warn("New graph after copy node: (",s,")",b.c(c)),i.l.debug("Old graph after copy",b.c(n))}else i.l.warn("Cluster ** ",s," **not meeting the criteria !externalConnections:",!d[s].externalConnections," no parent: ",!n.parent(s)," children ",n.children(s)&&n.children(s).length>0,n.children("D"),t),i.l.debug(d);else i.l.debug("Not a cluster",s,t);e=n.nodes(),i.l.warn("New list of nodes",e);for(const s of e){const r=n.node(s);i.l.warn(" Now next level",s,r),r.clusterNode&&W(r.graph,t+1)}}else i.l.debug("Done, no node has children",n.nodes())},j=(n,t)=>{if(0===t.length)return[];let e=Object.assign(t);return t.forEach(l=>{const s=n.children(l),r=j(n,s);e=[...e,...r]}),e},Y={rect:(n,t)=>{i.l.info("Creating subgraph rect for ",t.id,t);const e=n.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),l=e.insert("rect",":first-child"),s=(0,i.m)((0,i.c)().flowchart.htmlLabels),r=e.insert("g").attr("class","cluster-label"),f="markdown"===t.labelType?(0,Z.c)(r,t.labelText,{style:t.labelStyle,useHtmlLabels:s}):r.node().appendChild((0,v.c)(t.labelText,t.labelStyle,void 0,!0));let c=f.getBBox();if((0,i.m)((0,i.c)().flowchart.htmlLabels)){const D=f.children[0],a=(0,L.Ys)(f);c=D.getBoundingClientRect(),a.attr("width",c.width),a.attr("height",c.height)}const u=0*t.padding,y=u/2,C=t.width<=c.width+u?c.width+u:t.width;t.diff=t.width<=c.width+u?(c.width-t.width)/2-t.padding/2:-t.padding/2,i.l.trace("Data ",t,JSON.stringify(t)),l.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-C/2).attr("y",t.y-t.height/2-y).attr("width",C).attr("height",t.height+u),r.attr("transform",s?"translate("+(t.x-c.width/2)+", "+(t.y-t.height/2)+")":"translate("+t.x+", "+(t.y-t.height/2)+")");const B=l.node().getBBox();return t.width=B.width,t.height=B.height,t.intersect=function(D){return(0,v.i)(t,D)},e},roundedWithTitle:(n,t)=>{const e=n.insert("g").attr("class",t.classes).attr("id",t.id),l=e.insert("rect",":first-child"),s=e.insert("g").attr("class","cluster-label"),r=e.append("rect"),f=s.node().appendChild((0,v.c)(t.labelText,t.labelStyle,void 0,!0));let c=f.getBBox();if((0,i.m)((0,i.c)().flowchart.htmlLabels)){const D=f.children[0],a=(0,L.Ys)(f);c=D.getBoundingClientRect(),a.attr("width",c.width),a.attr("height",c.height)}c=f.getBBox();const u=0*t.padding,y=u/2,C=t.width<=c.width+t.padding?c.width+t.padding:t.width;t.diff=t.width<=c.width+t.padding?(c.width+0*t.padding-t.width)/2:-t.padding/2,l.attr("class","outer").attr("x",t.x-C/2-y).attr("y",t.y-t.height/2-y).attr("width",C+u).attr("height",t.height+u),r.attr("class","inner").attr("x",t.x-C/2-y).attr("y",t.y-t.height/2-y+c.height-1).attr("width",C+u).attr("height",t.height+u-c.height-3),s.attr("transform","translate("+(t.x-c.width/2)+", "+(t.y-t.height/2-t.padding/3+((0,i.m)((0,i.c)().flowchart.htmlLabels)?5:3))+")");const B=l.node().getBBox();return t.height=B.height,t.intersect=function(D){return(0,v.i)(t,D)},e},noteGroup:(n,t)=>{const e=n.insert("g").attr("class","note-cluster").attr("id",t.id),l=e.insert("rect",":first-child"),s=0*t.padding,r=s/2;l.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-r).attr("y",t.y-t.height/2-r).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const f=l.node().getBBox();return t.width=f.width,t.height=f.height,t.intersect=function(c){return(0,v.i)(t,c)},e},divider:(n,t)=>{const e=n.insert("g").attr("class",t.classes).attr("id",t.id),l=e.insert("rect",":first-child"),s=0*t.padding,r=s/2;l.attr("class","divider").attr("x",t.x-t.width/2-r).attr("y",t.y-t.height/2).attr("width",t.width+s).attr("height",t.height+s);const f=l.node().getBBox();return t.width=f.width,t.height=f.height,t.diff=-t.padding/2,t.intersect=function(c){return(0,v.i)(t,c)},e}};let F={};const K=function(){var n=(0,N.Z)(function*(t,e,l,s,r){i.l.info("Graph in recursive render: XXX",b.c(e),r);const f=e.graph().rankdir;i.l.trace("Dir in recursive render - dir:",f);const c=t.insert("g").attr("class","root");e.nodes()?i.l.info("Recursive render XXX",e.nodes()):i.l.info("No nodes found for",e),e.edges().length>0&&i.l.trace("Recursive edges",e.edge(e.edges()[0]));const u=c.insert("g").attr("class","clusters"),y=c.insert("g").attr("class","edgePaths"),C=c.insert("g").attr("class","edgeLabels"),B=c.insert("g").attr("class","nodes");yield Promise.all(e.nodes().map(function(){var a=(0,N.Z)(function*(o){const w=e.node(o);if(void 0!==r){const X=JSON.parse(JSON.stringify(r.clusterData));i.l.info("Setting data for cluster XXX (",o,") ",X,r),e.setNode(r.id,X),e.parent(o)||(i.l.trace("Setting parent",o,r.id),e.setParent(o,r.id,X))}if(i.l.info("(Insert) Node XXX"+o+": "+JSON.stringify(e.node(o))),w&&w.clusterNode){i.l.info("Cluster identified",o,w.width,e.node(o));const X=yield K(B,w.graph,l,s,e.node(o)),A=X.elem;(0,v.u)(w,A),w.diff=X.diff||0,i.l.info("Node bounds (abc123)",o,w,w.width,w.x,w.y),(0,v.s)(A,w),i.l.warn("Recursive render complete ",A,w)}else e.children(o).length>0?(i.l.info("Cluster - the non recursive path XXX",o,w.id,w,e),i.l.info(P(w.id,e)),d[w.id]={id:P(w.id,e),node:w}):(i.l.info("Node - the non recursive path",o,w.id,w),yield(0,v.e)(B,e.node(o),f))});return function(o){return a.apply(this,arguments)}}())),e.edges().forEach(function(a){const o=e.edge(a.v,a.w,a.name);i.l.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(a)),i.l.info("Edge "+a.v+" -> "+a.w+": ",a," ",JSON.stringify(e.edge(a))),i.l.info("Fix",d,"ids:",a.v,a.w,"Translateing: ",d[a.v],d[a.w]),(0,v.f)(C,o)}),e.edges().forEach(function(a){i.l.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(a))}),i.l.info("#############################################"),i.l.info("###                Layout                 ###"),i.l.info("#############################################"),i.l.info(e),(0,M.bK)(e),i.l.info("Graph after layout:",b.c(e));let D=0;return(n=>j(n,n.children()))(e).forEach(function(a){const o=e.node(a);i.l.info("Position "+a+": "+JSON.stringify(e.node(a))),i.l.info("Position "+a+": ("+o.x,","+o.y,") width: ",o.width," height: ",o.height),o&&o.clusterNode?(0,v.p)(o):e.children(a).length>0?(((n,t)=>{i.l.trace("Inserting cluster"),F[t.id]=Y[t.shape||"rect"](n,t)})(u,o),d[o.id].node=o):(0,v.p)(o)}),e.edges().forEach(function(a){const o=e.edge(a);i.l.info("Edge "+a.v+" -> "+a.w+": "+JSON.stringify(o),o);const w=(0,v.g)(y,a,o,d,l,e,s);(0,v.h)(o,w)}),e.nodes().forEach(function(a){const o=e.node(a);i.l.info(a,o.type,o.diff),"group"===o.type&&(D=o.diff)}),{elem:c,diff:D}});return function(e,l,s,r,f){return n.apply(this,arguments)}}(),$=function(){var n=(0,N.Z)(function*(t,e,l,s,r){(0,v.a)(t,l,s,r),(0,v.b)(),(0,v.d)(),F={},E={},J={},d={},i.l.warn("Graph at first:",JSON.stringify(b.c(e))),((n,t)=>{n?(i.l.debug("Opting in, graph "),n.nodes().forEach(function(e){n.children(e).length>0&&(i.l.warn("Cluster identified",e," Replacement id in edges: ",P(e,n)),E[e]=S(e,n),d[e]={id:P(e,n),clusterData:n.node(e)})}),n.nodes().forEach(function(e){const l=n.children(e),s=n.edges();l.length>0?(i.l.debug("Cluster identified",e,E),s.forEach(r=>{r.v!==e&&r.w!==e&&g(r.v,e)^g(r.w,e)&&(i.l.warn("Edge: ",r," leaves cluster ",e),i.l.warn("Decendants of XXX ",e,": ",E[e]),d[e].externalConnections=!0)})):i.l.debug("Not a cluster ",e,E)}),n.edges().forEach(function(e){const l=n.edge(e);i.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),i.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n.edge(e)));let s=e.v,r=e.w;if(i.l.warn("Fix XXX",d,"ids:",e.v,e.w,"Translating: ",d[e.v]," --- ",d[e.w]),d[e.v]&&d[e.w]&&d[e.v]===d[e.w]){i.l.warn("Fixing and trixing link to self - removing XXX",e.v,e.w,e.name),i.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),s=R(e.v),r=R(e.w),n.removeEdge(e.v,e.w,e.name);const f=e.w+"---"+e.v;n.setNode(f,{domId:f,id:f,labelStyle:"",labelText:l.label,padding:0,shape:"labelRect",style:""});const c=structuredClone(l),u=structuredClone(l);c.label="",c.arrowTypeEnd="none",u.label="",c.fromCluster=e.v,u.toCluster=e.v,n.setEdge(s,f,c,e.name+"-cyclic-special"),n.setEdge(f,r,u,e.name+"-cyclic-special")}else(d[e.v]||d[e.w])&&(i.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name),s=R(e.v),r=R(e.w),n.removeEdge(e.v,e.w,e.name),s!==e.v&&(l.fromCluster=e.v),r!==e.w&&(l.toCluster=e.w),i.l.warn("Fix Replacing with XXX",s,r,e.name),n.setEdge(s,r,l,e.name))}),i.l.warn("Adjusted Graph",b.c(n)),W(n,0),i.l.trace(d)):i.l.debug("Opting out, no graph ")})(e),i.l.warn("Graph after:",JSON.stringify(b.c(e))),yield K(t,e,s,r)});return function(e,l,s,r,f){return n.apply(this,arguments)}}()}}]);