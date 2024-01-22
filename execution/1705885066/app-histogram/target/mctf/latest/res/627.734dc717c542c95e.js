"use strict";(self.webpackChunkreport=self.webpackChunkreport||[]).push([[627],{4627:(Ft,lt,D)=>{D.d(lt,{a:()=>ht,b:()=>Wt,c:()=>C,d:()=>Nt,e:()=>Ot,f:()=>Xt,g:()=>zt,h:()=>jt,i:()=>G,j:()=>et,k:()=>st,l:()=>S,p:()=>Zt,s:()=>Ht,u:()=>w});var _=D(5861),f=D(6076),L=D(5066),K=D(6121);const ot={extension:(a,r,t)=>{f.l.trace("Making markers for ",t),a.append("defs").append("marker").attr("id",t+"_"+r+"-extensionStart").attr("class","marker extension "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-extensionEnd").attr("class","marker extension "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-compositionStart").attr("class","marker composition "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-compositionEnd").attr("class","marker composition "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-aggregationStart").attr("class","marker aggregation "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-aggregationEnd").attr("class","marker aggregation "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-dependencyStart").attr("class","marker dependency "+r).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-dependencyEnd").attr("class","marker dependency "+r).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-lollipopStart").attr("class","marker lollipop "+r).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),a.append("defs").append("marker").attr("id",t+"_"+r+"-lollipopEnd").attr("class","marker lollipop "+r).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(a,r,t)=>{a.append("marker").attr("id",t+"_"+r+"-pointEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",t+"_"+r+"-pointStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(a,r,t)=>{a.append("marker").attr("id",t+"_"+r+"-circleEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",t+"_"+r+"-circleStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(a,r,t)=>{a.append("marker").attr("id",t+"_"+r+"-crossEnd").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),a.append("marker").attr("id",t+"_"+r+"-crossStart").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},ht=(a,r,t,s)=>{r.forEach(n=>{ot[n](a,t,s)})},C=(a,r,t,s)=>{let n=a||"";if("object"==typeof n&&(n=n[0]),(0,f.m)((0,f.c)().flowchart.htmlLabels))return n=n.replace(/\\n|\n/g,"<br />"),f.l.info("vertexText"+n),function pt(a){const r=(0,L.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),t=r.append("xhtml:div");return t.html('<span class="'+(a.isNode?"nodeLabel":"edgeLabel")+'" '+(a.labelStyle?'style="'+a.labelStyle+'"':"")+">"+a.label+"</span>"),function ft(a,r){r&&a.attr("style",r)}(t,a.labelStyle),t.style("display","inline-block"),t.style("white-space","nowrap"),t.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}({isNode:s,label:(0,f.J)(n).replace(/fa[blrs]?:fa-[\w-]+/g,l=>`<i class='${l.replace(":"," ")}'></i>`),labelStyle:r.replace("fill:","color:")});{const i=document.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("style",r.replace("color:","fill:"));let e=[];e="string"==typeof n?n.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(n)?n:[];for(const l of e){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),c.setAttribute("class",t?"title-row":"row"),c.textContent=l.trim(),i.appendChild(c)}return i}},S=function(){var a=(0,_.Z)(function*(r,t,s,n){let i;const e=t.useHtmlLabels||(0,f.m)((0,f.c)().flowchart.htmlLabels);i=s||"node default";const l=r.insert("g").attr("class",i).attr("id",t.domId||t.id),c=l.insert("g").attr("class","label").attr("style",t.labelStyle);let h;h=void 0===t.labelText?"":"string"==typeof t.labelText?t.labelText:t.labelText[0];const o=c.node();let p;p="markdown"===t.labelType?(0,K.a)(c,(0,f.d)((0,f.J)(h),(0,f.c)()),{useHtmlLabels:e,width:t.width||(0,f.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):o.appendChild(C((0,f.d)((0,f.J)(h),(0,f.c)()),t.labelStyle,!1,n));let u=p.getBBox();const y=t.padding/2;if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const d=p.children[0],m=(0,L.Ys)(p),x=d.getElementsByTagName("img");if(x){const E=""===h.replace(/<img[^>]*>/g,"").trim();yield Promise.all([...x].map(g=>new Promise(B=>{function T(){if(g.style.display="flex",g.style.flexDirection="column",E){const H=(0,f.c)().fontSize?(0,f.c)().fontSize:window.getComputedStyle(document.body).fontSize,z=5,F=parseInt(H,10)*z+"px";g.style.minWidth=F,g.style.maxWidth=F}else g.style.width="100%";B(g)}setTimeout(()=>{g.complete&&T()}),g.addEventListener("error",T),g.addEventListener("load",T)})))}u=d.getBoundingClientRect(),m.attr("width",u.width),m.attr("height",u.height)}return c.attr("transform",e?"translate("+-u.width/2+", "+-u.height/2+")":"translate(0, "+-u.height/2+")"),t.centerLabel&&c.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:l,bbox:u,halfPadding:y,label:c}});return function(t,s,n,i){return a.apply(this,arguments)}}(),w=(a,r)=>{const t=r.node().getBBox();a.width=t.width,a.height=t.height};function $(a,r,t,s){return a.insert("polygon",":first-child").attr("points",s.map(function(n){return n.x+","+n.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-r/2+","+t/2+")")}function Q(a,r,t,s){var n=a.x,i=a.y,e=n-s.x,l=i-s.y,c=Math.sqrt(r*r*l*l+t*t*e*e),h=Math.abs(r*t*e/c);s.x<n&&(h=-h);var o=Math.abs(r*t*l/c);return s.y<i&&(o=-o),{x:n+h,y:i+o}}function yt(a,r,t,s){var n,i,e,l,c,h,o,p,u,y,d,m,x;if(y=(n=r.y-a.y)*s.x+(e=a.x-r.x)*s.y+(c=r.x*a.y-a.x*r.y),!(0!==(u=n*t.x+e*t.y+c)&&0!==y&&V(u,y)||(i=s.y-t.y,l=t.x-s.x,h=s.x*t.y-t.x*s.y,o=i*a.x+l*a.y+h,p=i*r.x+l*r.y+h,0!==o&&0!==p&&V(o,p)||(d=n*l-i*e,0===d))))return m=Math.abs(d/2),{x:(x=e*h-l*c)<0?(x-m)/d:(x+m)/d,y:(x=i*c-n*h)<0?(x-m)/d:(x+m)/d}}function V(a,r){return a*r>0}const G=(a,r)=>{var c,h,t=a.x,s=a.y,n=r.x-t,i=r.y-s,e=a.width/2,l=a.height/2;return Math.abs(i)*e>Math.abs(n)*l?(i<0&&(l=-l),c=0===i?0:l*n/i,h=l):(n<0&&(e=-e),c=e,h=0===n?0:e*i/n),{x:t+c,y:s+h}},b={node:function ut(a,r){return a.intersect(r)},circle:function dt(a,r,t){return Q(a,r,r,t)},ellipse:Q,polygon:function xt(a,r,t){var s=a.x,n=a.y,i=[],e=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof r.forEach?r.forEach(function(d){e=Math.min(e,d.x),l=Math.min(l,d.y)}):(e=Math.min(e,r.x),l=Math.min(l,r.y));for(var c=s-a.width/2-e,h=n-a.height/2-l,o=0;o<r.length;o++){var p=r[o],u=r[o<r.length-1?o+1:0],y=yt(a,t,{x:c+p.x,y:h+p.y},{x:c+u.x,y:h+u.y});y&&i.push(y)}return i.length?(i.length>1&&i.sort(function(d,m){var x=d.x-t.x,E=d.y-t.y,g=Math.sqrt(x*x+E*E),B=m.x-t.x,T=m.y-t.y,H=Math.sqrt(B*B+T*T);return g<H?-1:g===H?0:1}),i[0]):a},rect:G},gt=function(){var a=(0,_.Z)(function*(r,t){t.useHtmlLabels||(0,f.c)().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:n,bbox:i,halfPadding:e}=yield S(r,t,"node "+t.classes,!0);f.l.info("Classes = ",t.classes);const l=n.insert("rect",":first-child");return l.attr("rx",t.rx).attr("ry",t.ry).attr("x",-i.width/2-e).attr("y",-i.height/2-e).attr("width",i.width+t.padding).attr("height",i.height+t.padding),w(t,l),t.intersect=function(c){return b.rect(t,c)},n});return function(t,s){return a.apply(this,arguments)}}(),q=a=>a?" "+a:"",Y=(a,r)=>`${r||"node default"}${q(a.classes)} ${q(a.class)}`,P=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),l=n.width+t.padding+(n.height+t.padding),c=[{x:l/2,y:0},{x:l,y:-l/2},{x:l/2,y:-l},{x:0,y:-l/2}];f.l.info("Question main (Circle)");const h=$(s,l,l,c);return h.attr("style",t.style),w(t,h),t.intersect=function(o){return f.l.warn("Intersect called"),b.polygon(t,c,o)},s});return function(t,s){return a.apply(this,arguments)}}(),wt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),e=n.height+t.padding,l=e/4,c=n.width+2*l+t.padding,h=[{x:l,y:0},{x:c-l,y:0},{x:c,y:-e/2},{x:c-l,y:-e},{x:l,y:-e},{x:0,y:-e/2}],o=$(s,c,e,h);return o.attr("style",t.style),w(t,o),t.intersect=function(p){return b.polygon(t,h,p)},s});return function(t,s){return a.apply(this,arguments)}}(),mt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:-e/2,y:0},{x:i,y:0},{x:i,y:-e},{x:-e/2,y:-e},{x:0,y:-e/2}];return $(s,i,e,l).attr("style",t.style),t.width=i+e,t.height=e,t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),vt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:-2*e/6,y:0},{x:i-e/6,y:0},{x:i+2*e/6,y:-e},{x:e/6,y:-e}],c=$(s,i,e,l);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),kt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:2*e/6,y:0},{x:i+e/6,y:0},{x:i-2*e/6,y:-e},{x:-e/6,y:-e}],c=$(s,i,e,l);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),_t=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:-2*e/6,y:0},{x:i+2*e/6,y:0},{x:i-e/6,y:-e},{x:e/6,y:-e}],c=$(s,i,e,l);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),Lt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:e/6,y:0},{x:i-e/6,y:0},{x:i+2*e/6,y:-e},{x:-2*e/6,y:-e}],c=$(s,i,e,l);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),St=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:0,y:0},{x:i+e/2,y:0},{x:i,y:-e/2},{x:i+e/2,y:-e},{x:0,y:-e}],c=$(s,i,e,l);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),Mt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=i/2,l=e/(2.5+i/50),c=n.height+l+t.padding,h="M 0,"+l+" a "+e+","+l+" 0,0,0 "+i+" 0 a "+e+","+l+" 0,0,0 "+-i+" 0 l 0,"+c+" a "+e+","+l+" 0,0,0 "+i+" 0 l 0,"+-c,o=s.attr("label-offset-y",l).insert("path",":first-child").attr("style",t.style).attr("d",h).attr("transform","translate("+-i/2+","+-(c/2+l)+")");return w(t,o),t.intersect=function(p){const u=b.rect(t,p),y=u.x-t.x;if(0!=e&&(Math.abs(y)<t.width/2||Math.abs(y)==t.width/2&&Math.abs(u.y-t.y)>t.height/2-l)){let d=l*l*(1-y*y/(e*e));0!=d&&(d=Math.sqrt(d)),d=l-d,p.y-t.y>0&&(d=-d),u.y+=d}return u},s});return function(t,s){return a.apply(this,arguments)}}(),Et=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n,halfPadding:i}=yield S(r,t,"node "+t.classes+" "+t.class,!0),e=s.insert("rect",":first-child"),l=n.width+t.padding,c=n.height+t.padding;if(e.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",l).attr("height",c),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(tt(e,t.props.borders,l,c),h.delete("borders")),h.forEach(o=>{f.l.warn(`Unknown node property ${o}`)})}return w(t,e),t.intersect=function(h){return b.rect(t,h)},s});return function(t,s){return a.apply(this,arguments)}}(),Tt=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s}=yield S(r,t,"label",!0);f.l.trace("Classes = ",t.class);const n=s.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),s.attr("class","label edgeLabel"),t.props){const l=new Set(Object.keys(t.props));t.props.borders&&(tt(n,t.props.borders,0,0),l.delete("borders")),l.forEach(c=>{f.l.warn(`Unknown node property ${c}`)})}return w(t,n),t.intersect=function(l){return b.rect(t,l)},s});return function(t,s){return a.apply(this,arguments)}}();function tt(a,r,t,s){const n=[],i=l=>{n.push(l,0)},e=l=>{n.push(0,l)};r.includes("t")?(f.l.debug("add top border"),i(t)):e(t),r.includes("r")?(f.l.debug("add right border"),i(s)):e(s),r.includes("b")?(f.l.debug("add bottom border"),i(t)):e(t),r.includes("l")?(f.l.debug("add left border"),i(s)):e(s),a.attr("stroke-dasharray",n.join(" "))}const Ct=function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.height+t.padding,e=n.width+i/4+t.padding,l=s.insert("rect",":first-child").attr("style",t.style).attr("rx",i/2).attr("ry",i/2).attr("x",-e/2).attr("y",-i/2).attr("width",e).attr("height",i);return w(t,l),t.intersect=function(c){return b.rect(t,c)},s});return function(t,s){return a.apply(this,arguments)}}(),rt=(a,r,t)=>{const s=a.insert("g").attr("class","node default").attr("id",r.domId||r.id);let n=70,i=10;"LR"===t&&(n=10,i=70);const e=s.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return w(r,e),r.height=r.height+r.padding/2,r.width=r.width+r.padding/2,r.intersect=function(l){return b.rect(r,l)},s},at={rhombus:P,question:P,rect:Et,labelRect:Tt,rectWithTitle:(a,r)=>{let t;t=r.classes?"node "+r.classes:"node default";const s=a.insert("g").attr("class",t).attr("id",r.domId||r.id),n=s.insert("rect",":first-child"),i=s.insert("line"),e=s.insert("g").attr("class","label"),l=r.labelText.flat?r.labelText.flat():r.labelText;let c="";c="object"==typeof l?l[0]:l,f.l.info("Label text abc79",c,l,"object"==typeof l);const h=e.node().appendChild(C(c,r.labelStyle,!0,!0));let o={width:0,height:0};if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const m=h.children[0],x=(0,L.Ys)(h);o=m.getBoundingClientRect(),x.attr("width",o.width),x.attr("height",o.height)}f.l.info("Text 2",l);const p=l.slice(1,l.length);let u=h.getBBox();const y=e.node().appendChild(C(p.join?p.join("<br/>"):p,r.labelStyle,!0,!0));if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const m=y.children[0],x=(0,L.Ys)(y);o=m.getBoundingClientRect(),x.attr("width",o.width),x.attr("height",o.height)}const d=r.padding/2;return(0,L.Ys)(y).attr("transform","translate( "+(o.width>u.width?0:(u.width-o.width)/2)+", "+(u.height+d+5)+")"),(0,L.Ys)(h).attr("transform","translate( "+(o.width<u.width?0:-(u.width-o.width)/2)+", 0)"),o=e.node().getBBox(),e.attr("transform","translate("+-o.width/2+", "+(-o.height/2-d+3)+")"),n.attr("class","outer title-state").attr("x",-o.width/2-d).attr("y",-o.height/2-d).attr("width",o.width+r.padding).attr("height",o.height+r.padding),i.attr("class","divider").attr("x1",-o.width/2-d).attr("x2",o.width/2+d).attr("y1",-o.height/2-d+u.height+d).attr("y2",-o.height/2-d+u.height+d),w(r,n),r.intersect=function(m){return b.rect(r,m)},s},choice:(a,r)=>{const t=a.insert("g").attr("class","node default").attr("id",r.domId||r.id);return t.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(e){return e.x+","+e.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),r.width=28,r.height=28,r.intersect=function(e){return b.circle(r,14,e)},t},circle:function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n,halfPadding:i}=yield S(r,t,Y(t,void 0),!0),e=s.insert("circle",":first-child");return e.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",n.width/2+i).attr("width",n.width+t.padding).attr("height",n.height+t.padding),f.l.info("Circle main"),w(t,e),t.intersect=function(l){return f.l.info("Circle intersect",t,n.width/2+i,l),b.circle(t,n.width/2+i,l)},s});return function(t,s){return a.apply(this,arguments)}}(),doublecircle:function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n,halfPadding:i}=yield S(r,t,Y(t,void 0),!0),l=s.insert("g",":first-child"),c=l.insert("circle"),h=l.insert("circle");return l.attr("class",t.class),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",n.width/2+i+5).attr("width",n.width+t.padding+10).attr("height",n.height+t.padding+10),h.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",n.width/2+i).attr("width",n.width+t.padding).attr("height",n.height+t.padding),f.l.info("DoubleCircle main"),w(t,c),t.intersect=function(o){return f.l.info("DoubleCircle intersect",t,n.width/2+i+5,o),b.circle(t,n.width/2+i+5,o)},s});return function(t,s){return a.apply(this,arguments)}}(),stadium:Ct,hexagon:wt,rect_left_inv_arrow:mt,lean_right:vt,lean_left:kt,trapezoid:_t,inv_trapezoid:Lt,rect_right_inv_arrow:St,cylinder:Mt,start:(a,r)=>{const t=a.insert("g").attr("class","node default").attr("id",r.domId||r.id),s=t.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),w(r,s),r.intersect=function(n){return b.circle(r,7,n)},t},end:(a,r)=>{const t=a.insert("g").attr("class","node default").attr("id",r.domId||r.id),s=t.insert("circle",":first-child"),n=t.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),s.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),w(r,n),r.intersect=function(i){return b.circle(r,7,i)},t},note:gt,subroutine:function(){var a=(0,_.Z)(function*(r,t){const{shapeSvg:s,bbox:n}=yield S(r,t,Y(t,void 0),!0),i=n.width+t.padding,e=n.height+t.padding,l=[{x:0,y:0},{x:i,y:0},{x:i,y:-e},{x:0,y:-e},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-e},{x:-8,y:-e},{x:-8,y:0}],c=$(s,i,e,l);return c.attr("style",t.style),w(t,c),t.intersect=function(h){return b.polygon(t,l,h)},s});return function(t,s){return a.apply(this,arguments)}}(),fork:rt,join:rt,class_box:(a,r)=>{const t=r.padding/2;let i;i=r.classes?"node "+r.classes:"node default";const e=a.insert("g").attr("class",i).attr("id",r.domId||r.id),l=e.insert("rect",":first-child"),c=e.insert("line"),h=e.insert("line");let o=0,p=4;const u=e.insert("g").attr("class","label");let y=0;const d=r.classData.annotations&&r.classData.annotations[0],m=r.classData.annotations[0]?"\xab"+r.classData.annotations[0]+"\xbb":"",x=u.node().appendChild(C(m,r.labelStyle,!0,!0));let E=x.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const v=x.children[0],k=(0,L.Ys)(x);E=v.getBoundingClientRect(),k.attr("width",E.width),k.attr("height",E.height)}r.classData.annotations[0]&&(p+=E.height+4,o+=E.width);let g=r.classData.label;void 0!==r.classData.type&&""!==r.classData.type&&((0,f.c)().flowchart.htmlLabels?g+="&lt;"+r.classData.type+"&gt;":g+="<"+r.classData.type+">");const B=u.node().appendChild(C(g,r.labelStyle,!0,!0));(0,L.Ys)(B).attr("class","classTitle");let T=B.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const v=B.children[0],k=(0,L.Ys)(B);T=v.getBoundingClientRect(),k.attr("width",T.width),k.attr("height",T.height)}p+=T.height+4,T.width>o&&(o=T.width);const H=[];r.classData.members.forEach(v=>{const k=v.getDisplayDetails();let W=k.displayText;(0,f.c)().flowchart.htmlLabels&&(W=W.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const I=u.node().appendChild(C(W,k.cssStyle?k.cssStyle:r.labelStyle,!0,!0));let R=I.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const J=I.children[0],N=(0,L.Ys)(I);R=J.getBoundingClientRect(),N.attr("width",R.width),N.attr("height",R.height)}R.width>o&&(o=R.width),p+=R.height+4,H.push(I)}),p+=8;const z=[];if(r.classData.methods.forEach(v=>{const k=v.getDisplayDetails();let W=k.displayText;(0,f.c)().flowchart.htmlLabels&&(W=W.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const I=u.node().appendChild(C(W,k.cssStyle?k.cssStyle:r.labelStyle,!0,!0));let R=I.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const J=I.children[0],N=(0,L.Ys)(I);R=J.getBoundingClientRect(),N.attr("width",R.width),N.attr("height",R.height)}R.width>o&&(o=R.width),p+=R.height+4,z.push(I)}),p+=8,d){let v=(o-E.width)/2;(0,L.Ys)(x).attr("transform","translate( "+(-1*o/2+v)+", "+-1*p/2+")"),y=E.height+4}let F=(o-T.width)/2;return(0,L.Ys)(B).attr("transform","translate( "+(-1*o/2+F)+", "+(-1*p/2+y)+")"),y+=T.height+4,c.attr("class","divider").attr("x1",-o/2-t).attr("x2",o/2+t).attr("y1",-p/2-t+8+y).attr("y2",-p/2-t+8+y),y+=8,H.forEach(v=>{(0,L.Ys)(v).attr("transform","translate( "+-o/2+", "+(-1*p/2+y+4)+")");const k=v?.getBBox();y+=(k?.height??0)+4}),y+=8,h.attr("class","divider").attr("x1",-o/2-t).attr("x2",o/2+t).attr("y1",-p/2-t+8+y).attr("y2",-p/2-t+8+y),y+=8,z.forEach(v=>{(0,L.Ys)(v).attr("transform","translate( "+-o/2+", "+(-1*p/2+y)+")");const k=v?.getBBox();y+=(k?.height??0)+4}),l.attr("style",r.style).attr("class","outer title-state").attr("x",-o/2-t).attr("y",-p/2-t).attr("width",o+r.padding).attr("height",p+r.padding),w(r,l),r.intersect=function(v){return b.rect(r,v)},e}};let Z={};const Ot=function(){var a=(0,_.Z)(function*(r,t,s){let n,i;if(t.link){let e;"sandbox"===(0,f.c)().securityLevel?e="_top":t.linkTarget&&(e=t.linkTarget||"_blank"),n=r.insert("svg:a").attr("xlink:href",t.link).attr("target",e),i=yield at[t.shape](n,t,s)}else i=yield at[t.shape](r,t,s),n=i;return t.tooltip&&i.attr("title",t.tooltip),t.class&&i.attr("class","node default "+t.class),Z[t.id]=n,t.haveCallback&&Z[t.id].attr("class",Z[t.id].attr("class")+" clickable"),n});return function(t,s,n){return a.apply(this,arguments)}}(),Ht=(a,r)=>{Z[r.id]=a},Wt=()=>{Z={}},Zt=a=>{const r=Z[a.id];f.l.trace("Transforming node",a.diff,a,"translate("+(a.x-a.width/2-5)+", "+a.width/2+")");const s=a.diff||0;return r.attr("transform",a.clusterNode?"translate("+(a.x+s-a.width/2)+", "+(a.y-a.height/2-8)+")":"translate("+a.x+", "+a.y+")"),s},O={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function X(a,r){if(void 0===a||void 0===r)return{angle:0,deltaX:0,deltaY:0};a=j(a),r=j(r);const[t,s]=[a.x,a.y],[n,i]=[r.x,r.y],e=n-t,l=i-s;return{angle:Math.atan(l/e),deltaX:e,deltaY:l}}const j=a=>Array.isArray(a)?{x:a[0],y:a[1]}:a,et=a=>({x:function(r,t,s){let n=0;if(0===t&&Object.hasOwn(O,a.arrowTypeStart)){const{angle:i,deltaX:e}=X(s[0],s[1]);n=O[a.arrowTypeStart]*Math.cos(i)*(e>=0?1:-1)}else if(t===s.length-1&&Object.hasOwn(O,a.arrowTypeEnd)){const{angle:i,deltaX:e}=X(s[s.length-1],s[s.length-2]);n=O[a.arrowTypeEnd]*Math.cos(i)*(e>=0?1:-1)}return j(r).x+n},y:function(r,t,s){let n=0;if(0===t&&Object.hasOwn(O,a.arrowTypeStart)){const{angle:i,deltaY:e}=X(s[0],s[1]);n=O[a.arrowTypeStart]*Math.abs(Math.sin(i))*(e>=0?1:-1)}else if(t===s.length-1&&Object.hasOwn(O,a.arrowTypeEnd)){const{angle:i,deltaY:e}=X(s[s.length-1],s[s.length-2]);n=O[a.arrowTypeEnd]*Math.abs(Math.sin(i))*(e>=0?1:-1)}return j(r).y+n}}),st=(a,r,t,s,n)=>{r.arrowTypeStart&&nt(a,"start",r.arrowTypeStart,t,s,n),r.arrowTypeEnd&&nt(a,"end",r.arrowTypeEnd,t,s,n)},Dt={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},nt=(a,r,t,s,n,i)=>{const e=Dt[t];e?a.attr(`marker-${r}`,`url(${s}#${n}_${i}-${e}${"start"===r?"Start":"End"})`):f.l.warn(`Unknown arrow type: ${t}`)};let A={},M={};const Nt=()=>{A={},M={}},Xt=(a,r)=>{const t=(0,f.m)((0,f.c)().flowchart.htmlLabels),s="markdown"===r.labelType?(0,K.a)(a,r.label,{style:r.labelStyle,useHtmlLabels:t,addSvgBackground:!0}):C(r.label,r.labelStyle);f.l.info("abc82",r,r.labelType);const n=a.insert("g").attr("class","edgeLabel"),i=n.insert("g").attr("class","label");i.node().appendChild(s);let l,e=s.getBBox();if(t){const c=s.children[0],h=(0,L.Ys)(s);e=c.getBoundingClientRect(),h.attr("width",e.width),h.attr("height",e.height)}if(i.attr("transform","translate("+-e.width/2+", "+-e.height/2+")"),A[r.id]=n,r.width=e.width,r.height=e.height,r.startLabelLeft){const c=C(r.startLabelLeft,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startLeft=h,U(l,r.startLabelLeft)}if(r.startLabelRight){const c=C(r.startLabelRight,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=h.node().appendChild(c),o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startRight=h,U(l,r.startLabelRight)}if(r.endLabelLeft){const c=C(r.endLabelLeft,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),h.node().appendChild(c),M[r.id]||(M[r.id]={}),M[r.id].endLeft=h,U(l,r.endLabelLeft)}if(r.endLabelRight){const c=C(r.endLabelRight,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),h.node().appendChild(c),M[r.id]||(M[r.id]={}),M[r.id].endRight=h,U(l,r.endLabelRight)}return s};function U(a,r){(0,f.c)().flowchart.htmlLabels&&a&&(a.style.width=9*r.length+"px",a.style.height="12px")}const jt=(a,r)=>{f.l.info("Moving label abc78 ",a.id,a.label,A[a.id]);let t=r.updatedPath?r.updatedPath:r.originalPath;if(a.label){const s=A[a.id];let n=a.x,i=a.y;if(t){const e=f.u.calcLabelPosition(t);f.l.info("Moving label "+a.label+" from (",n,",",i,") to (",e.x,",",e.y,") abc78"),r.updatedPath&&(n=e.x,i=e.y)}s.attr("transform","translate("+n+", "+i+")")}if(a.startLabelLeft){const s=M[a.id].startLeft;let n=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_left",t);n=e.x,i=e.y}s.attr("transform","translate("+n+", "+i+")")}if(a.startLabelRight){const s=M[a.id].startRight;let n=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_right",t);n=e.x,i=e.y}s.attr("transform","translate("+n+", "+i+")")}if(a.endLabelLeft){const s=M[a.id].endLeft;let n=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_left",t);n=e.x,i=e.y}s.attr("transform","translate("+n+", "+i+")")}if(a.endLabelRight){const s=M[a.id].endRight;let n=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_right",t);n=e.x,i=e.y}s.attr("transform","translate("+n+", "+i+")")}},it=(a,r)=>{f.l.warn("abc88 cutPathAtIntersect",a,r);let t=[],s=a[0],n=!1;return a.forEach(i=>{if(f.l.info("abc88 checking point",i,r),((a,r)=>{const s=a.y,n=Math.abs(r.x-a.x),i=Math.abs(r.y-s);return n>=a.width/2||i>=a.height/2})(r,i)||n)f.l.warn("abc88 outside",i,s),s=i,n||t.push(i);else{const e=((a,r,t)=>{f.l.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(r)}\n  insidePoint : ${JSON.stringify(t)}\n  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);const s=a.x,n=a.y,i=Math.abs(s-t.x),e=a.width/2;let l=t.x<r.x?e-i:e+i;const c=a.height/2,h=Math.abs(r.y-t.y),o=Math.abs(r.x-t.x);if(Math.abs(n-r.y)*e>Math.abs(s-r.x)*c){let p=t.y<r.y?r.y-c-n:n-c-r.y;l=o*p/h;const u={x:t.x<r.x?t.x+l:t.x-o+l,y:t.y<r.y?t.y+h-p:t.y-h+p};return 0===l&&(u.x=r.x,u.y=r.y),0===o&&(u.x=r.x),0===h&&(u.y=r.y),f.l.warn(`abc89 topp/bott calc, Q ${h}, q ${p}, R ${o}, r ${l}`,u),u}{l=t.x<r.x?r.x-e-s:s-e-r.x;let p=h*l/o,u=t.x<r.x?t.x+o-l:t.x-o+l,y=t.y<r.y?t.y+p:t.y-p;return f.l.warn(`sides calc abc89, Q ${h}, q ${p}, R ${o}, r ${l}`,{_x:u,_y:y}),0===l&&(u=r.x,y=r.y),0===o&&(u=r.x),0===h&&(y=r.y),{x:u,y}}})(r,s,i);f.l.warn("abc88 inside",i,s,e),f.l.warn("abc88 intersection",e);let l=!1;t.forEach(c=>{l=l||c.x===e.x&&c.y===e.y}),t.some(c=>c.x===e.x&&c.y===e.y)?f.l.warn("abc88 no intersect",e,t):t.push(e),n=!0}}),f.l.warn("abc88 returning points",t),t},zt=function(a,r,t,s,n,i,e){let l=t.points,c=!1;const h=i.node(r.v);var o=i.node(r.w);f.l.info("abc88 InsertEdge: ",t),o.intersect&&h.intersect&&(l=l.slice(1,t.points.length-1),l.unshift(h.intersect(l[0])),f.l.info("Last point",l[l.length-1],o,o.intersect(l[l.length-1])),l.push(o.intersect(l[l.length-1]))),t.toCluster&&(f.l.info("to cluster abc88",s[t.toCluster]),l=it(t.points,s[t.toCluster].node),c=!0),t.fromCluster&&(f.l.info("from cluster abc88",s[t.fromCluster]),l=it(l.reverse(),s[t.fromCluster].node).reverse(),c=!0);const p=l.filter(T=>!Number.isNaN(T.y));let u=L.$0Z;t.curve&&("graph"===n||"flowchart"===n)&&(u=t.curve);const{x:y,y:d}=et(t),m=(0,L.jvg)().x(y).y(d).curve(u);let x;switch(t.thickness){case"normal":x="edge-thickness-normal";break;case"thick":case"invisible":x="edge-thickness-thick";break;default:x=""}switch(t.pattern){case"solid":x+=" edge-pattern-solid";break;case"dotted":x+=" edge-pattern-dotted";break;case"dashed":x+=" edge-pattern-dashed"}const E=a.append("path").attr("d",m(p)).attr("id",t.id).attr("class"," "+x+(t.classes?" "+t.classes:"")).attr("style",t.style);let g="";((0,f.c)().flowchart.arrowMarkerAbsolute||(0,f.c)().state.arrowMarkerAbsolute)&&(g=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,g=g.replace(/\(/g,"\\("),g=g.replace(/\)/g,"\\)")),f.l.info("arrowTypeStart",t.arrowTypeStart),f.l.info("arrowTypeEnd",t.arrowTypeEnd),st(E,t,g,e,n);let B={};return c&&(B.updatedPath=l),B.originalPath=t.points,B}}}]);