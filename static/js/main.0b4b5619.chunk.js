(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(19),o=n.n(r),i=(n(26),n(6)),l=n.n(i),h=n(8),u=n(4),j=n(20),d=n(2),m=(n(28),function(e){var t=e.id,n=e.nominate,a=e.remove,s=e.nominee,r=e.maxNomsReached,o=e.poster,i=e.title,l=e.year;return Object(c.jsxs)("div",{className:"search-item",children:[Object(c.jsxs)("div",{className:"search-item-text",children:[Object(c.jsx)("span",{children:s?"\ud83c\udfc6 ":""}),"".concat(i," (").concat(l,")")]}),Object(c.jsx)("img",{className:"search-poster",src:o.includes("jpg")?o:"https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png",alt:i}),r&&!s?Object(c.jsx)("button",{className:"search-nom-disabled",children:Object(c.jsx)("span",{className:"disabled-text",children:"Nominate"})}):Object(c.jsx)("button",{className:s?"search-remove-button":"search-nom-button",onClick:function(){s?a(t):n(i,l,t,o)},disabled:!s&&r,children:s?"Remove":"Nominate"})]})});var b=function(e){var t,n=e.nominate,s=e.remove,r=e.movies,o=e.maxNomsReached,i=e.lastSearchTerm,l=e.getMovies,h=e.handlePageChange,u=e.searchPage,j=e.setInSearchArea,d=e.setShowSearchResults,b=!1,v=0;function f(){b=!0,t&&clearInterval(t),t=setInterval((function(){if(b){b=!1;var e=document.getElementById("root").scrollHeight-window.innerHeight-window.scrollY;v=e,e<10&&e<=v&&(l(i+"*",u+1),h(u+1))}}),250)}Object(a.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f),clearInterval(t)}}));for(var O=[],p=0;p<r.length;p++)r[p]&&O.push(Object(c.jsx)(m,{id:r[p].imdbID,title:r[p].Title,year:r[p].Year,poster:r[p].Poster,nominate:n,remove:s,nominee:r[p].nominee,maxNomsReached:o},p));return Object(c.jsxs)("div",{className:"search-container",onMouseEnter:function(){j(!0)},onMouseLeave:function(){j(!1)},children:[Object(c.jsx)("div",{className:"close-control",onClick:function(){d(!1)},children:"\u2716"}),O]})},v=function(e){var t=e.poster,n=e.remove,a=e.imdbID,s=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"nom-item",children:[Object(c.jsx)("img",{className:"poster",src:t.includes("jpg")?t:"https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png",alt:s}),Object(c.jsx)("img",{className:"nom-remove-control",onClick:function(){n(a)},src:"https://cdn1.iconfinder.com/data/icons/bold-purple-part1/32/84_Close_Remove_Circle_Cross_Delete-512.png",height:"20",width:"20",alt:"delete"})]})})};var f=function(e){for(var t=e.remove,n=e.nominees,a=[],s=0;s<n.length;s++)a.push(Object(c.jsx)(v,{imdbID:n[s].imdbID,title:n[s].Title,year:n[s].Year,poster:n[s].Poster,remove:t},s));return Object(c.jsx)("div",{className:"nom-container",children:a})},O=n(10),p=n.n(O),x=function(e){var t=e.title,n=e.setSearchText,a=e.getMovies,s=e.setShowTypeAhead;return Object(c.jsx)("div",{className:"searchbar-result-item",onClick:function(){t.startsWith("no results for ")||n(t),window.scrollTo(0,0),a(t,1),s(!1)},children:t})},g=function(e,t){var n,c=e,a=Object(u.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value,r=new RegExp("".concat(s),"g");c=c.replace(r,"")}}catch(o){a.e(o)}finally{a.f()}return c=function(e){return e.replace(/ {2,}/g," ")}(c)};var S=function(e){var t=e.searchText,n=e.setSearchText,s=e.setShowTypeAhead,r=e.getMovies,o=e.setInTypeAhead,i=Object(a.useState)([]),j=Object(d.a)(i,2),m=j[0],b=j[1];function v(){return(v=Object(h.a)(l.a.mark((function e(n){var c,a,s,r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(n,["&","-"]),e.next=3,p.a.get("https://www.omdbapi.com/?s=".concat(n,"*&type=movie&page=1&apikey=bbde90f3"));case 3:if(c=e.sent,a=c.data.Search){s=[],r=Object(u.a)(a);try{for(r.s();!(o=r.n()).done;)i=o.value,s.push(i.Title)}catch(l){r.e(l)}finally{r.f()}b(s)}else b(['no results for "'.concat(t,'"')]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f,O=!1;Object(a.useEffect)((function(){var e;return e=t,O=!0,f&&clearTimeout(f),f=setTimeout((function(){O&&(O=!1,function(e){v.apply(this,arguments)}(e))}),200),function(){clearTimeout(f)}}),[t,f]);var S=m.map((function(e,t){return Object(c.jsx)(x,{title:e,setSearchText:n,setInTypeAhead:o,setShowTypeAhead:s,getMovies:r},t)}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"searchbar-results",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[Object(c.jsx)("div",{className:"close-control-typeahead",onClick:function(){s(!1)},children:"\u2716"}),S]})})},w=function(e){var t=e.getMovies,n=e.setInSearchArea,s=Object(a.useState)(""),r=Object(d.a)(s,2),o=r[0],i=r[1],l=Object(a.useState)(!1),h=Object(d.a)(l,2),u=h[0],j=h[1],m=Object(a.useState)(!1),b=Object(d.a)(m,2),v=b[0],f=b[1];return Object(c.jsxs)("div",{className:"searchbar",onMouseEnter:function(){n(!0)},onMouseLeave:function(){n(!1)},children:[Object(c.jsxs)("div",{className:"input-search-results-container",onBlur:function(){v||j(!1)},onFocus:function(){j(!0)},children:[Object(c.jsx)("form",{action:".",onSubmit:function(e){e.preventDefault()},children:Object(c.jsx)("input",{placeholder:"Search for a movie to nominate...",id:"search-text",type:"search",name:"search-text",value:o,onKeyUp:function(e){"Enter"===e.key&&o.trim().length&&(document.getElementById("search-text").blur(),window.scrollTo(0,0),t(o+"*",1))},onChange:function(){i(document.getElementById("search-text").value)}})}),o.trim().length>2&&u?Object(c.jsx)(S,{setSearchText:i,searchText:o.trim(),setShowTypeAhead:j,getMovies:t,setInTypeAhead:f}):null]}),Object(c.jsx)("button",{id:"btn-search",onClick:function(){o.trim().length&&(window.scrollTo(0,0),t(o.trim()+"*",1))},children:"Search"})]})},y=function(e){var t=e.setShowMessage;return Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("h4",{children:"Hello, Shopify hiring team!"}),Object(c.jsx)("span",{className:"close-control-banner",onClick:function(){return t(!1)},children:"\u2716"}),Object(c.jsx)("p",{children:"This site fulfills the base requirements of the Shopify front-end take-home assignment. It also has the following features:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"nominations are saved in local storage"}),Object(c.jsx)("li",{children:"clickable type-ahead search results"}),Object(c.jsx)("li",{children:"infinite scroll of main search results"}),Object(c.jsx)("li",{children:"starts-with search (default behaviour)"}),Object(c.jsx)("li",{children:"responsive site (OK to view on mobile device)"})]}),Object(c.jsx)("h4",{children:"Thank you for your consideration."}),Object(c.jsx)("p",{children:Object(c.jsx)("em",{children:"Ed Smith"})})]})},N=n(10);var T=function(){for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t),s=localStorage[n];n.match(/tt\d{7}/g)&&(s=JSON.parse(s),e.push(s))}var r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],m=o[1],v=Object(a.useState)(!1),O=Object(d.a)(v,2),p=O[0],x=O[1],S=Object(a.useState)(""),T=Object(d.a)(S,2),k=T[0],I=T[1],M=Object(a.useState)(e.length?e:[]),C=Object(d.a)(M,2),E=C[0],D=C[1],A=Object(a.useState)(1),P=Object(d.a)(A,2),R=P[0],F=P[1],L=Object(a.useState)(!1),B=Object(d.a)(L,2),Y=B[0],_=B[1],J=Object(a.useState)(!1),H=Object(d.a)(J,2),K=H[0],q=H[1],U=Object(a.useState)(navigator.maxTouchPoints),W=Object(d.a)(U,2),z=(W[0],W[1],Object(a.useState)(!0)),G=Object(d.a)(z,2),Q=G[0],V=G[1],X=function(e){for(var t=0;t<localStorage.length;t++){var n=localStorage.key(t);if(localStorage[n].includes(e)){localStorage.removeItem(n);break}}var c,a=[],s=Object(u.a)(E);try{for(s.s();!(c=s.n()).done;){var r=c.value;r.imdbID!==e&&a.push(r)}}catch(j){s.e(j)}finally{s.f()}if(i.length){var o,l=Object(u.a)(i);try{for(l.s();!(o=l.n()).done;){var h=o.value;if(h.imdbID===e){h.nominee=!1;break}}}catch(j){l.e(j)}finally{l.f()}}D(a)};function Z(e,t){return $.apply(this,arguments)}function $(){return($=Object(h.a)(l.a.mark((function e(t,n){var c,a,s,r,o,h,j,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(t,["&","-"]),q(!0),1===n&&F(1),e.prev=3,e.next=6,N.get("https://www.omdbapi.com/?s=".concat(t,"&type=movie&page=").concat(n,"&apikey=bbde90f3"));case 6:c=e.sent,a=c.data.Search,s=Object(u.a)(a);try{for(s.s();!(r=s.n()).done;)if(o=r.value){o.nominee=!1,h=Object(u.a)(E);try{for(h.s();!(j=h.n()).done;)d=j.value,o.imdbID===d.imdbID&&(o.nominee=!0)}catch(l){h.e(l)}finally{h.f()}}}catch(l){s.e(l)}finally{s.f()}I(t.replace("*","").trim()),1===n||(a=i.concat(a)),m(a),x(!a.length),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"App",onClick:function(){!Y&&K&&(window.scrollTo(0,0),q(!1))},children:[Object(c.jsx)("div",{className:"left-curtains"}),Object(c.jsx)("div",{className:"right-curtains"}),Q?Object(c.jsx)(y,{setShowMessage:V}):null,Object(c.jsxs)("div",{className:"noms-title-search-container",children:[Object(c.jsx)("h1",{className:"title",children:"Shoppies"}),Object(c.jsx)(w,{setInSearchArea:_,getMovies:Z,setMovies:m,searchPage:R,setSearchPage:F})]}),K?Object(c.jsx)("div",{}):5===E.length?Object(c.jsx)("div",{className:"instructions-container",children:Object(c.jsxs)("div",{className:"instructions",children:[Object(c.jsx)("h3",{children:"Your nominees!"}),Object(c.jsx)("p",{children:"To choose a different movie, first remove one below."})]})}):Object(c.jsx)("div",{className:"instructions-container",children:Object(c.jsxs)("div",{className:"instructions",children:[Object(c.jsxs)("p",{children:["Search above to find ",Object(c.jsx)("strong",{children:"nominees"})," for a Shoppie award."]}),Object(c.jsxs)("h3",{children:["You have ",Object(c.jsx)("span",{children:5-E.length})," ",5-E.length===1?"nomination":"nominations"," left."]})]})}),i.length&&K?Object(c.jsx)(b,{nominate:function(e,t,n,c){var a={Title:e,Year:t,imdbID:n,Poster:c};D([].concat(Object(j.a)(E),[a])),localStorage.setItem(n,JSON.stringify(a));var s,r=Object(u.a)(i);try{for(r.s();!(s=r.n()).done;){var o=s.value;if(o.imdbID===n){o.nominee=!0;break}}}catch(l){r.e(l)}finally{r.f()}},remove:X,movies:i,maxNomsReached:5===E.length,lastSearchTerm:k,getMovies:Z,setInSearchArea:_,setShowSearchResults:q,handlePageChange:function(e){F(e)},searchPage:R}):p?Object(c.jsxs)("div",{className:"search-container",children:["Sorry, we could not find '",k,"'"]}):Object(c.jsx)("div",{className:"search-container"}),E.length?Object(c.jsx)(f,{className:"nom-container",remove:X,nominees:E}):Object(c.jsx)("div",{className:"nom-container"})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.0b4b5619.chunk.js.map