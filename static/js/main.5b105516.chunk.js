(this["webpackJsonpshopify-front"]=this["webpackJsonpshopify-front"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(17),s=n.n(o),i=(n(25),n(8)),l=n.n(i),h=n(18),d=n(5),j=n(19),m=n(3),b=(n(27),function(e){var t=e.id,n=e.nominate,c=e.nominee,r=e.maxNomsReached,o=e.poster,s=e.title,i=e.year;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:s}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){n(s,i,t,o)},disabled:c||r,children:c?"\ud83c\udfc6":"Nominate"})})]})})});var u=function(e){var t,n=e.nominate,r=e.movies,o=e.maxNomsReached,s=e.lastSearchTerm,i=e.getMovies,l=e.handlePageChange,h=e.searchPage,d=!1,j=0;function m(){d=!0,t&&clearInterval(t),t=setInterval((function(){if(console.log("inside setInterval - scrolling is: ",d),d){d=!1;var e=document.getElementById("root").scrollHeight-window.innerHeight-window.scrollY;j=e,e<10&&e<=j&&(i(s+"*",h+1),l(h+1))}}),250)}Object(c.useEffect)((function(){return window.addEventListener("scroll",m),console.log("ADD scroll listener"),function(){window.removeEventListener("scroll",m),clearInterval(t),console.log("REMOVE Scroll listener")}}));for(var u=[],v=0;v<r.length;v++)r[v]&&u.push(Object(a.jsx)(b,{id:r[v].imdbID,title:r[v].Title,year:r[v].Year,poster:r[v].Poster,nominate:n,nominee:r[v].nominee,maxNomsReached:o},v));return console.log("SEARCH LIST RENDER"),Object(a.jsx)("div",{className:"search-container",children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("thead",{children:[Object(a.jsx)("tr",{children:Object(a.jsxs)("th",{children:["Search Results (",u.length,")"]})}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Title"}),Object(a.jsx)("th",{children:"Year"})]})]}),Object(a.jsx)("tbody",{children:u})]})})},v=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"nom-item",children:[Object(a.jsx)("img",{className:"poster",src:e.poster.includes("jpg")?e.poster:"https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png",alt:e.title}),Object(a.jsx)("button",{className:"nom-button",onClick:function(){e.remove(e.imdbID)},children:"Remove"})]})})};var f=function(e){for(var t=e.remove,n=e.nominees,c=[],r=0;r<n.length;r++)c.push(Object(a.jsx)(v,{imdbID:n[r].imdbID,title:n[r].Title,year:n[r].Year,poster:n[r].Poster,remove:t},r));return Object(a.jsx)("div",{className:"nom-container",children:c})},g=function(e){var t=e.getMovies,n=Object(c.useState)(""),r=Object(m.a)(n,2),o=r[0],s=r[1];return Object(a.jsxs)("div",{className:"searchbar",children:[Object(a.jsx)("label",{className:"searchlabel",children:"Find movies to nominate"}),Object(a.jsx)("div",{className:"input-search-results-container",children:Object(a.jsx)("input",{placeholder:"Type a movie title...",id:"search-text",type:"search",name:"search-text",value:o,onKeyUp:function(e){"Enter"===e.key&&o.trim().length&&t(o+"*",1)},onChange:function(){s(document.getElementById("search-text").value)}})}),Object(a.jsx)("button",{onClick:function(){o.trim().length&&t(o+"*",1)},children:"Search"})]})},O=function(){return Object(a.jsx)("div",{className:"banner",children:Object(a.jsx)("h4",{children:"You have selected the maximum of 5 nominees. If you would like to change your nominations, use the 'Remove' button."})})},p=n(28);var x=function(){for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t),r=localStorage[n];n.match(/tt\d{7}/g)&&(r=JSON.parse(r),e.push(r))}var o=Object(c.useState)({}),s=Object(m.a)(o,2),i=s[0],b=s[1],v=Object(c.useState)(!1),x=Object(m.a)(v,2),y=x[0],S=x[1],N=Object(c.useState)(""),w=Object(m.a)(N,2),I=w[0],k=w[1],D=Object(c.useState)(e.length?e:[]),E=Object(m.a)(D,2),R=E[0],P=E[1],C=Object(c.useState)(1),T=Object(m.a)(C,2),M=T[0],F=T[1];function Y(e,t){return A.apply(this,arguments)}function A(){return(A=Object(h.a)(l.a.mark((function e(t,n){var a,c,r,o,s,h,j,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1===n&&F(1),e.prev=1,e.next=4,p.get("https://www.omdbapi.com/?s=".concat(t,"&type=movie&page=").concat(n,"&apikey=bbde90f3"));case 4:a=e.sent,c=a.data.Search,a.data.totalResults,r=Object(d.a)(c);try{for(r.s();!(o=r.n()).done;)if(s=o.value){s.nominee=!1,h=Object(d.a)(R);try{for(h.s();!(j=h.n()).done;)m=j.value,s.imdbID===m.imdbID&&(s.nominee=!0)}catch(l){h.e(l)}finally{h.f()}}}catch(l){r.e(l)}finally{r.f()}k(t.replace("*","").trim()),1===n||(c=i.concat(c)),b(c),S(!c.length),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return console.log("APP RENDER"),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("h1",{children:"Movie Awards"}),Object(a.jsx)("img",{className:"shoppies-logo",src:"https://image.freepik.com/free-vector/popcorn-open-clapper-board-movie-reel-3d-glasses-tickets-illustration_185417-5.jpg",alt:"movie-awards-logo"}),Object(a.jsx)(g,{getMovies:Y,setMovies:b,searchPage:M,setSearchPage:F}),5===R.length?Object(a.jsx)(O,{}):null]}),R.length?Object(a.jsx)(f,{className:"nom-container",remove:function(e){for(var t=0;t<localStorage.length;t++){var n=localStorage.key(t);if(localStorage[n].includes(e)){localStorage.removeItem(n);break}}var a,c=[],r=Object(d.a)(R);try{for(r.s();!(a=r.n()).done;){var o=a.value;o.imdbID!==e&&c.push(o)}}catch(j){r.e(j)}finally{r.f()}if(i.length){var s,l=Object(d.a)(i);try{for(l.s();!(s=l.n()).done;){var h=s.value;if(h.imdbID===e){h.nominee=!1;break}}}catch(j){l.e(j)}finally{l.f()}}P(c)},nominees:R}):Object(a.jsx)("div",{className:"nom-container",children:"Your nominations will appear here."}),i.length?Object(a.jsx)(u,{className:"search-container",nominate:function(e,t,n,a){var c={Title:e,Year:t,imdbID:n,Poster:a};P([].concat(Object(j.a)(R),[c])),localStorage.setItem(n,JSON.stringify(c));var r,o=Object(d.a)(i);try{for(o.s();!(r=o.n()).done;){var s=r.value;if(s.imdbID===n){s.nominee=!0;break}}}catch(l){o.e(l)}finally{o.f()}},movies:i,maxNomsReached:5===R.length,lastSearchTerm:I,getMovies:Y,handlePageChange:function(e){F(e)},searchPage:M}):y?Object(a.jsxs)("div",{className:"search-container",children:["Sorry, we could not find '",I,"'"]}):Object(a.jsx)("div",{className:"search-container",children:"Search above to find movies!"})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.5b105516.chunk.js.map