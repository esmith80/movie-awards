(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(19),o=n.n(s),i=(n(26),n(6)),l=n.n(i),u=n(8),h=n(4),m=n(20),d=n(2),j=(n(28),function(e){var t=e.id,n=e.nominate,c=e.remove,r=e.nominee,s=e.maxNomsReached,o=e.poster,i=e.title,l=e.year;return Object(a.jsxs)("div",{className:"search-item",children:[Object(a.jsx)("div",{className:"search-item-text",children:"".concat(i," (").concat(l,")")}),Object(a.jsxs)("div",{className:"search-nom-button-container",children:[Object(a.jsx)("img",{className:"search-poster",src:o.includes("jpg")?o:"https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png",alt:i}),Object(a.jsx)("span",{className:"nom-icon",children:r?"\ud83c\udfc6":""})]}),s&&!r?Object(a.jsx)("button",{className:"search-nom-disabled",children:Object(a.jsx)("span",{className:"disabled-text",children:"Nominate"})}):Object(a.jsx)("button",{className:r?"search-remove-button":"search-nom-button",onClick:function(){r?c(t):n(i,l,t,o)},disabled:!r&&s,children:r?"Remove":"Nominate"})]})});var b=function(e){var t,n=e.nominate,r=e.remove,s=e.movies,o=e.maxNomsReached,i=e.lastSearchTerm,l=e.getMovies,u=e.handlePageChange,h=e.searchPage,m=e.setInSearchArea,d=e.setShowSearchResults,b=!1,v=0;function f(){b=!0,t&&clearInterval(t),t=setInterval((function(){if(b){b=!1;var e=document.getElementById("root").scrollHeight-window.innerHeight-window.scrollY;v=e,e<10&&e<=v&&(l(i+"*",h+1),u(h+1))}}),250)}Object(c.useEffect)((function(){return window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f),clearInterval(t)}}));for(var p=[],O=0;O<s.length;O++)s[O]&&p.push(Object(a.jsx)(j,{id:s[O].imdbID,title:s[O].Title,year:s[O].Year,poster:s[O].Poster,nominate:n,remove:r,nominee:s[O].nominee,maxNomsReached:o},O));return Object(a.jsxs)("div",{className:"search-container",onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)},children:[Object(a.jsx)("div",{className:"close-control",onClick:function(){d(!1)},children:"\u2716"}),p]})},v=function(e){var t=e.poster,n=e.remove,c=e.imdbID,r=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"nom-item",children:[Object(a.jsx)("img",{className:"poster",src:t.includes("jpg")?t:"https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png",alt:r}),Object(a.jsx)("img",{className:"nom-remove-control",onClick:function(){n(c)},src:"https://cdn1.iconfinder.com/data/icons/bold-purple-part1/32/84_Close_Remove_Circle_Cross_Delete-512.png",height:"20",width:"20",alt:"delete"})]})})};var f=function(e){for(var t=e.remove,n=e.nominees,c=[],r=0;r<n.length;r++)c.push(Object(a.jsx)(v,{imdbID:n[r].imdbID,title:n[r].Title,year:n[r].Year,poster:n[r].Poster,remove:t},r));return Object(a.jsx)("div",{className:"nom-container",children:c})},p=n(10),O=n.n(p),g=function(e){var t=e.title,n=e.setSearchText,c=e.getMovies,r=e.setShowTypeAhead;return Object(a.jsx)("div",{className:"searchbar-result-item",onClick:function(){t.startsWith("no results for ")||n(t),window.scrollTo(0,0),c(t,1),r(!1)},children:t})},x=function(e,t){var n,a=e,c=Object(h.a)(t);try{for(c.s();!(n=c.n()).done;){var r=n.value,s=new RegExp("".concat(r),"g");a=a.replace(s,"")}}catch(o){c.e(o)}finally{c.f()}return a=function(e){return e.replace(/ {2,}/g," ")}(a)};var w=function(e){var t=e.searchText,n=e.setSearchText,r=e.setShowTypeAhead,s=e.getMovies,o=e.setInTypeAhead,i=Object(c.useState)([]),m=Object(d.a)(i,2),j=m[0],b=m[1];function v(){return(v=Object(u.a)(l.a.mark((function e(n){var a,c,r,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x(n,["&","-"]),e.next=3,O.a.get("https://www.omdbapi.com/?s=".concat(n,"*&type=movie&page=1&apikey=bbde90f3"));case 3:if(a=e.sent,c=a.data.Search){r=[],s=Object(h.a)(c);try{for(s.s();!(o=s.n()).done;)i=o.value,r.push(i.Title)}catch(l){s.e(l)}finally{s.f()}b(r)}else b(['no results for "'.concat(t,'"')]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f,p=!1;Object(c.useEffect)((function(){var e;return e=t,p=!0,f&&clearTimeout(f),f=setTimeout((function(){p&&(p=!1,function(e){v.apply(this,arguments)}(e))}),200),function(){clearTimeout(f)}}),[t,f]);var w=j.map((function(e,t){return Object(a.jsx)(g,{title:e,setSearchText:n,setInTypeAhead:o,setShowTypeAhead:r,getMovies:s},t)}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"searchbar-results",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[Object(a.jsx)("div",{className:"close-control-typeahead",onClick:function(){r(!1)},children:"\u2716"}),w]})})},S=function(e){var t=e.getMovies,n=e.setInSearchArea,r=Object(c.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],l=Object(c.useState)(!1),u=Object(d.a)(l,2),h=u[0],m=u[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),v=b[0],f=b[1];return Object(a.jsxs)("div",{className:"searchbar",onMouseEnter:function(){n(!0)},onMouseLeave:function(){n(!1)},children:[Object(a.jsxs)("div",{className:"input-search-results-container",onBlur:function(){v||m(!1)},onFocus:function(){m(!0)},children:[Object(a.jsx)("input",{placeholder:"Search for a movie to nominate...",id:"search-text",type:"search",name:"search-text",value:o,onKeyUp:function(e){"Enter"===e.key&&o.trim().length&&(m(!1),window.scrollTo(0,0),t(o+"*",1))},onChange:function(){i(document.getElementById("search-text").value)}}),o.trim().length>2&&h?Object(a.jsx)(w,{setSearchText:i,searchText:o.trim(),setShowTypeAhead:m,getMovies:t,setInTypeAhead:f}):null]}),Object(a.jsx)("button",{id:"btn-search",onClick:function(){o.trim().length&&(window.scrollTo(0,0),t(o.trim()+"*",1))},children:"Search"})]})},y=function(){return Object(a.jsx)("div",{className:"banner",children:Object(a.jsx)("h4",{children:"You have selected the maximum of 5 nominees. If you would like to change your nominations, use the 'Remove' button."})})},N=n(10);var T=function(){for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t),r=localStorage[n];n.match(/tt\d{7}/g)&&(r=JSON.parse(r),e.push(r))}var s=Object(c.useState)({}),o=Object(d.a)(s,2),i=o[0],j=o[1],v=Object(c.useState)(!1),p=Object(d.a)(v,2),O=p[0],g=p[1],w=Object(c.useState)(""),T=Object(d.a)(w,2),I=T[0],k=T[1],M=Object(c.useState)(e.length?e:[]),C=Object(d.a)(M,2),A=C[0],D=C[1],E=Object(c.useState)(1),P=Object(d.a)(E,2),R=P[0],F=P[1],L=Object(c.useState)(!1),B=Object(d.a)(L,2),Y=B[0],_=B[1],J=Object(c.useState)(!1),H=Object(d.a)(J,2),K=H[0],U=H[1],W=function(e){for(var t=0;t<localStorage.length;t++){var n=localStorage.key(t);if(localStorage[n].includes(e)){localStorage.removeItem(n);break}}var a,c=[],r=Object(h.a)(A);try{for(r.s();!(a=r.n()).done;){var s=a.value;s.imdbID!==e&&c.push(s)}}catch(m){r.e(m)}finally{r.f()}if(i.length){var o,l=Object(h.a)(i);try{for(l.s();!(o=l.n()).done;){var u=o.value;if(u.imdbID===e){u.nominee=!1;break}}}catch(m){l.e(m)}finally{l.f()}}D(c)};function q(e,t){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(l.a.mark((function e(t,n){var a,c,r,s,o,u,m,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x(t,["&","-"]),U(!0),1===n&&F(1),e.prev=3,e.next=6,N.get("https://www.omdbapi.com/?s=".concat(t,"&type=movie&page=").concat(n,"&apikey=bbde90f3"));case 6:a=e.sent,c=a.data.Search,r=Object(h.a)(c);try{for(r.s();!(s=r.n()).done;)if(o=s.value){o.nominee=!1,u=Object(h.a)(A);try{for(u.s();!(m=u.n()).done;)d=m.value,o.imdbID===d.imdbID&&(o.nominee=!0)}catch(l){u.e(l)}finally{u.f()}}}catch(l){r.e(l)}finally{r.f()}k(t.replace("*","").trim()),1===n||(c=i.concat(c)),j(c),g(!c.length),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}return Object(a.jsxs)("div",{className:"App",onClick:function(){!Y&&K&&(window.scrollTo(0,0),U(!1))},children:[Object(a.jsxs)("div",{className:"noms-title-search-container",children:[Object(a.jsx)("h1",{className:"title",children:"Movie Awards"}),Object(a.jsx)(S,{setInSearchArea:_,getMovies:q,setMovies:j,searchPage:R,setSearchPage:F})]}),A.length?Object(a.jsx)(f,{className:"nom-container",remove:W,nominees:A}):Object(a.jsx)("div",{className:"nom-container"}),5===A.length?Object(a.jsx)(y,{}):null,i.length&&K?Object(a.jsx)(b,{nominate:function(e,t,n,a){var c={Title:e,Year:t,imdbID:n,Poster:a};D([].concat(Object(m.a)(A),[c])),localStorage.setItem(n,JSON.stringify(c));var r,s=Object(h.a)(i);try{for(s.s();!(r=s.n()).done;){var o=r.value;if(o.imdbID===n){o.nominee=!0;break}}}catch(l){s.e(l)}finally{s.f()}},remove:W,movies:i,maxNomsReached:5===A.length,lastSearchTerm:I,getMovies:q,setInSearchArea:_,setShowSearchResults:U,handlePageChange:function(e){F(e)},searchPage:R}):O?Object(a.jsxs)("div",{className:"search-container",children:["Sorry, we could not find '",I,"'"]}):Object(a.jsx)("div",{className:"search-container"})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),I()}},[[47,1,2]]]);
//# sourceMappingURL=main.b6d2fdaf.chunk.js.map