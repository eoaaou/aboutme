(function(){"use strict";var t={228:function(t,n,e){var i=e(963),r=e(252);function o(t,n,e,i,o,a){const u=(0,r.up)("app-header"),c=(0,r.up)("skill-box"),s=(0,r.up)("app-footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u),(0,r.Wm)(c),(0,r.Wm)(s)],64)}var a=e.p+"img/earth_logo.21372df2.svg";const u=(0,r._)("img",{alt:"Earth_logo",src:a,height:"80"},null,-1),c=(0,r._)("p",null,"Hello! This is my website...",-1),s=(0,r.Uk)("Home"),l=(0,r.Uk)("About");function d(t,n){const e=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[u,c,(0,r._)("nav",null,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(e,{to:"/"},{default:(0,r.w5)((()=>[s])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(e,{to:"/about"},{default:(0,r.w5)((()=>[l])),_:1})])])])])}var p=e(744);const f={},h=(0,p.Z)(f,[["render",d]]);var g=h;const m=(0,r._)("meta",{charset:"utf-8"},null,-1),v=(0,r._)("div",{id:"body"},null,-1),x=(0,r._)("div",{id:"text"},null,-1);function _(t,n,e,i,o,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[m,v,x],64)}var F=e(429),w={name:"SkillBox",mounted:function(){var t=window.innerWidth,n=.75*window.innerHeight,e=[{x_axis:30,y_axis:30,radius:50,id:"pointer",image:"#FFF"},{x_axis:0,y_axis:0,radius:50,id:"SVG",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pY1IaNxquFTjtCw1I1iuMAHaHF%26pid%3DApi&f=1"},{x_axis:0,y_axis:0,radius:10,id:"Raspberri",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rPLFK4vv67mlFisWznyVpQHaHa%26pid%3DApi&f=1"},{x_axis:0,y_axis:0,radius:50,id:"GIMP",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Vwh7VjW3-KgaLdSewDRfOgHaHa%26pid%3DApi&f=1"},{x_axis:0,y_axis:0,radius:50,id:"Python",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lMY7IsCj1fDjEWWnNB26FwAAAA%26pid%3DApi&f=1"},{x_axis:0,y_axis:0,radius:52,id:"js",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hUWKZxe-0H19tRRpKNPN0AAAAA%26pid%3DApi&f=1"},{x_axis:100,y_axis:0,radius:50,id:"bash",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F20%2FBash_Logo_black_and_white_icon_only.svg%2F896px-Bash_Logo_black_and_white_icon_only.svg.png&f=1&nofb=1"}],i=e[0];i.radius=50,i.fixed=!0;const r=F.RUJ().strength(.01),o=F.Mrm().strength(.01);var a=F.Ys("#body").append("svg:svg").attr("width",t).attr("height",n),u=a.append("defs");u.selectAll(".nodes-pics").data(e).enter().append("pattern").attr("id",(function(t){return t.id})).attr("width","100%").attr("height","100%").append("image").attr("href",(function(t){const n=t.image;return n})).attr("width",100).attr("height",100),a.selectAll("circle").data(e).enter().append("circle").attr("r",(function(t){return t.radius})).attr("fill",(function(t){return"url(#"+t.id+")"})).attr("transform","translate("+2*t/3+", "+n/2+")");var c=F.A4v().velocityDecay(.2).force("x",r).force("y",o).force("collide",F.Hh().radius((function(t){return t===i?50*Math.random()+50:t.radius+.5})).iterations(5)).nodes(e).on("tick",s);function s(){a.selectAll("circle").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y}))}a.on("mousemove",(function(){var e=F.cx$(event);i.fx=e[0]-.7*t,i.fy=e[1]-n/2,c.alphaTarget(.2).restart()}))}};const b=(0,p.Z)(w,[["render",_]]);var y=b;const k=(0,r._)("p",null,"hello-world@yahoo.com ",-1),A=[k];function D(t,n){return(0,r.wg)(),(0,r.iD)("footer",null,A)}const O={},H=(0,p.Z)(O,[["render",D]]);var j=H,P={components:{AppHeader:g,SkillBox:y,AppFooter:j}};const W=(0,p.Z)(P,[["render",o]]);var I=W;(0,i.ri)(I).mount("#app")}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,o){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var u=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(u=!1,o<a&&(a=o));if(u){t.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/d3-vue/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,o,a=i[0],u=i[1],c=i[2],s=0;if(a.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(c)var l=c(e)}for(n&&n(i);s<a.length;s++)o=a[s],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},i=self["webpackChunkvue_starter_project"]=self["webpackChunkvue_starter_project"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(228)}));i=e.O(i)})();
//# sourceMappingURL=app.74508f91.js.map