!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self).EmblaCarousel=e()}(this,(function(){"use strict";function n(){return(n=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function e(n){var e=n.viewSize,t=n.align,r={start:function(){return 0},center:function(n){return(e-n)/2},end:function(n){return e-n}};return{measure:function(n){return"number"==typeof t?e*Number(t):r[t](n)}}}function t(n){var e=n.start,r=n.limit,o=n.loop,i=r.min,a=r.max,u=r[o?"loop":"constrain"],c=u(e);function s(){return c}function l(n){return c=u(n),d}var d={add:function n(e){if(0!==e){var t=e/Math.abs(e);return l(s()+t),n(e+-1*t)}return d},clone:function(){return t({start:s(),limit:r,loop:o})},get:s,max:a,min:i,set:l};return d}function r(n){var e=n;function t(n){return e/=n,o}function r(n){return"number"==typeof n?n:n.get()}var o={add:function(n){return e+=r(n),o},divide:t,get:function(){return e},multiply:function(n){return e*=n,o},normalize:function(){return 0!==e&&t(e),o},set:function(n){return e=r(n),o},subtract:function(n){return e-=r(n),o}};return o}function o(n){var e=r(t(n));function t(n){return 0===n?0:n/Math.abs(n)}var o={get:e.get,set:function(n){var r=t(n.get());return 0!==r&&e.set(r),o}};return o}function i(){var n=[];var e={add:function(t,r,o,i){return void 0===i&&(i=!1),t.addEventListener(r,o,i),n.push((function(){return t.removeEventListener(r,o,i)})),e},removeAll:function(){return n=n.filter((function(n){return n()})),e}};return e}function a(n){var e=n.min,t=n.max,r={min:t,max:e},o={min:e,max:t},i=Math.abs(e-t);function a(n){return n<e}function u(n){return n>t}function c(n){return a(n)?"min":u(n)?"max":""}return{constrain:function(n){var e=c(n);return e?o[e]:n},length:i,loop:function(n){var e=c(n);return e?r[e]:n},max:t,min:e,reachedAny:function(n){return a(n)||u(n)},reachedMax:u,reachedMin:a,removeOffset:function(n){if(e===t)return n;for(;a(n);)n+=i;for(;u(n);)n-=i;return n}}}function u(n){var e=n.target,t=n.scrollBody,u=n.dragFree,c=n.animation,s=n.axis,l=n.element,d=n.dragTracker,f=n.location,m=n.events,v=n.limit,p=s.scroll,g=s.cross,x=["INPUT","SELECT","TEXTAREA"],h=r(0),S=r(0),y=r(0),w=i(),b=i(),M=w.removeAll,T=b.removeAll,z={mouse:2.5,touch:3.5},D={mouse:5,touch:7},E=u?5:12,P=a({min:v.min-70,max:v.max+70}),A=!1,I=!1,B=!1,L=!1;function C(n){if(!(L="mousedown"===n.type)||0===n.button){var r,o,i=N(e.get(),f.get())>=2,a=L||!i,u=(r=n.target,o=r.nodeName||"",!(x.indexOf(o)>-1)),c=i||L&&u;A=!0,d.pointerDown(n),y.set(e),e.set(f),t.useDefaultMass().useSpeed(80),function(){var n=L?document:l;b.add(n,"touchmove",O).add(n,"touchend",k).add(n,"mousemove",O).add(n,"mouseup",k)}(),h.set(d.readPoint(n,p)),S.set(d.readPoint(n,g)),m.emit("pointerDown"),a&&(B=!1),c&&n.preventDefault()}}function O(t){if(!I&&!L){var r=d.readPoint(t,p).get(),o=d.readPoint(t,g).get(),i=N(r,h.get()),a=N(o,S.get());if(!(I=i>a)&&!B)return k()}var u=d.pointerMove(t),s=v.reachedAny(f.get()),l=!n.loop&&s?2:1;!B&&u&&(B=!0),c.start(),e.add(u/l),t.preventDefault()}function k(){var r,i,a,c=n.scrollTo,s=d.pointerUp()*(u?D:z)[L?"mouse":"touch"],l=function(t){var r=n.scrollTarget,i=n.index,a=!(r.byDistance(0,!1).index!==i.get())&&Math.abs(t)>4,c=t+f.get();if(a&&!u&&!v.reachedAny(c)){var s=i.clone().add(-1*o(t).get());return r.byIndex(s.get(),0).distance}if(!n.loop&&P.reachedAny(c)){var l=P.reachedMax(c)?"max":"min";return P[l]-e.get()}return r.byDistance(t,!u).distance}(s),p=(r=s,i=l,a=N(Math.abs(r),Math.abs(i)),Math.abs(r)<=Math.abs(i)||0===r||0===i?0:Math.abs(a/r));N(e.get(),y.get())>=.5&&!L&&(B=!0),I=!1,A=!1,b.removeAll(),t.useSpeed(E+E*p),c.distance(l,!u),L=!1,m.emit("pointerUp")}function N(n,e){return Math.abs(n-e)}function U(n){B&&n.preventDefault()}return{addActivationEvents:function(){var n=l;w.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",C).add(n,"mousedown",C).add(n,"touchcancel",k).add(n,"contextmenu",k).add(n,"click",U)},clickAllowed:function(){return!B},pointerDown:function(){return A},removeActivationEvents:M,removeInteractionEvents:T}}function c(n){var e=n.axis,t=n.pxToPercent,o=e.scroll,i={x:"clientX",y:"clientY"},a=r(0),u=r(0),c=r(0),s=r(0),l=[],d=(new Date).getTime(),f=!1;function m(n,e){f=!n.touches;var t=i[e],r=f?n[t]:n.touches[0][t];return s.set(r)}return{pointerDown:function(n){var e=m(n,o);return a.set(e),c.set(e),t.measure(a.get())},pointerMove:function(n){var e=m(n,o),r=(new Date).getTime(),i=r-d;return i>=10&&(i>=100&&(l=[]),l.push(e.get()),d=r),u.set(e).subtract(c),c.set(e),t.measure(u.get())},pointerUp:function(){var n=(new Date).getTime()-d,e=c.get(),r=l.slice(-5).map((function(n){return e-n})).sort((function(n,e){return Math.abs(n)<Math.abs(e)?1:-1}))[0];return c.set(n>100||!r?0:r),l=[],t.measure(c.get())},readPoint:m}}function s(n){var e=Math.pow(10,n);return function(n){return Math.round(n*e)/e}}function l(n){return Object.keys(n).map(Number)}function d(n,e){var t=n.classList;t.contains(e)&&t.remove(e)}function f(n,e){var t=n.classList;t.contains(e)||t.add(e)}function m(n){var e=n.location,t=n.speed,i=n.mass,a=s(2),u=r(0),c=r(0),l=r(0),d=o(0),f={speed:t,mass:i};function m(n){return f.speed=n,p}function v(n){return f.mass=n,p}var p={direction:d,location:e,seek:function(n){l.set(n).subtract(e);var t,r,o,i,a,s=l.get(),m=(t=s,r=0,o=100,i=0,a=f.speed,i+(t-r)/(o-r)*(a-i));return d.set(l),l.normalize().multiply(m).subtract(u),function(n){n.divide(f.mass),c.add(n)}(l),p},settle:function(n){var t=n.get()-e.get(),r=!a(t);return r&&e.set(n),r},update:function(){u.add(c),e.add(u),c.multiply(0)},useDefaultMass:function(){return v(i),p},useDefaultSpeed:function(){return m(t),p},useMass:v,useSpeed:m};return p}function v(n){var e=n.limit,t=n.location,r=n.scrollBody,o=n.animation,i=e.min,a=e.max,u=e.reachedMin,c=e.reachedMax,s=!1,l=0;return{constrain:function(n){(function(n){return!s&&!l&&(u(t.get())?n.get()!==i:!!c(t.get())&&n.get()!==a)})(n)&&(l=window.setTimeout((function(){var t=e.constrain(n.get());n.set(t),r.useSpeed(10).useMass(3),o.start(),l=0}),50))},toggleActive:function(n){s=!n}}}function p(n){var e=n.alignment,t=n.contentSize,r=n.viewSize,o=a({min:-t+r,max:0}),i=[e.measure(t)],u=t>r;return{measure:function(n,e){var t=n.map(o.constrain),r=function(n){var e=n[0],t=n[n.length-1];return a({min:n.lastIndexOf(e)+1,max:n.indexOf(t)})}(t),c=r.min,s=r.max;return u?e?t.slice(c-1,s+1):t:i}}}function g(n){var e=n.contentSize,t=n.location,r=n.limit,o=n.pxToPercent,i=a({min:r.min+o.measure(.1),max:r.max+o.measure(.1)}),u=i.reachedMin,c=i.reachedMax;return{loop:function(n,r){if(function(n){return 1===n?c(t.get()):-1===n&&u(t.get())}(r)){var o=e*(-1*r);n.forEach((function(n){return n.add(o)}))}}}}function x(n){var e=n.loop,t=n.limit,r=n.scrollSnaps,o=n.contentSize,i=t.reachedMax,a=t.reachedAny,u=t.removeOffset;function c(n,e){return Math.abs(n)<Math.abs(e)?n:e}function s(n,t){var r=n,i=n+o,a=n-o;if(!e)return r;if(!t)return c(c(r,i),a);var u=c(r,1===t?i:a);return Math.abs(u)*t}return{byDistance:function(t,o){var c=n.target.get()+t,l=function(n){var e=u(n);return{index:r.map((function(n){return n-e})).map((function(n){return s(n,0)})).map((function(n,e){return{diff:n,index:e}})).sort((function(n,e){return Math.abs(n.diff)-Math.abs(e.diff)}))[0].index,distance:e}}(c),d=function(t,r){if(!(!e&&a(t)))return r;var o=n.index,u=o.min,c=o.max;return i(t)?u:c}(c,l.index),f=!e&&a(c);return!o||f?{index:d,distance:t}:{index:d,distance:t+s(r[d]-l.distance,0)}},byIndex:function(e,t){return{index:e,distance:s(r[e]-n.target.get(),t)}},shortcut:s}}function h(n){var e,t,r,o=n.axis,i=n.location,a=n.contentSize,u=n.viewSize,c=n.slideSizes,s=n.scrollSnaps,d=l(c),f=l(c).reverse(),m=(e=s[0]-1,t=g(e,f),r=x(e,t,0),h(t,r,1)).concat(function(){var n=g(u-s[0]-1,d),e=x(a,d,-u);return h(n,-e,0)}()),v="x"===o.scroll?"left":"top";function p(n,e){return n.reduce((function(n,e){return n-c[e]}),e)}function g(n,e){return e.reduce((function(e,t){return p(e,n)>0?e.concat([t]):e}),[])}function x(n,e,t){return e.reduce((function(e,t){var r=e+c[t];return r<n?r:e}),t)}function h(n,e,t){var r=n.slice().sort((function(n,e){return n-e}));return r.map((function(n,o){var i=a*(t?-1:0),u=a*(t?0:1),c=function(n,e,t){var r=d.length-1;return p(n.map((function(n){return(n+t)%r})),e)}(r.slice(0,o),e,t);return{point:c,getTarget:function(n){return n>c?i:u},index:n,location:-1}}))}return{canLoop:function(){return m.every((function(n){var e=n.index;return p(d.filter((function(n){return n!==e})),u)<=0}))},clear:function(n){m.forEach((function(e){var t=e.index;n[t].style[v]=""}))},loop:function(n){m.forEach((function(e){var t=e.getTarget,r=e.location,o=e.index,a=t(i.get());a!==r&&(n[o].style[v]=a+"%",e.location=a)}))},loopPoints:m}}function S(n){var e=n.contentSize,t=n.slideSizes,r=n.viewSize,o=n.inViewThreshold,i=n.loop,a=t.map((function(n){return n*o})),u=l(t).map((function(n){return t.slice(0,n).reduce((function(n,e){return n-e}),0)})),c=(i?[0,e,-e]:[0]).map(s).reduce((function(n,e){return n.concat(e)}),[]);function s(n){return u.map((function(e,o){return{start:e-t[o]+a[o]+n,end:e+r-a[o]+n,index:o}}))}return{check:function(n){return c.reduce((function(e,t){var r=t.index,o=t.start,i=t.end;return!(-1!==e.indexOf(r))&&(o<n&&i>n)?e.concat([r]):e}),[])}}}function y(n){var e=n.axis,t=n.container,r={x:function(n){return"translate3d("+n+"%,0px,0px)"},y:function(n){return"translate3d(0px,"+n+"%,0px)"}}[e.scroll],o=s(2),i=t.style,a=!1,u=0;return{clear:function(){i.transform="",u=0},to:function(n){if(!a){var e=o(n.get());u!==e&&(getComputedStyle(t).transform,i.transform=r(e),u=e)}},toggleActive:function(n){a=!n}}}function w(n,o,i,s,d){var f,w,b,M,T,z=s.align,D=s.axis,E=s.startIndex,P=s.inViewThreshold,A=s.loop,I=s.speed,B=s.dragFree,L=s.slidesToScroll,C=s.containScroll,O=function(n){var e="y"===n?"y":"x";return{cross:"y"===n?"x":"y",measure:function(n){var t=n.getBoundingClientRect(),r=t.width,o=t.height;return"x"===e?r:o},scroll:e}}(D),k=(f=O.measure(o),{measure:function(n){return n/f*100},totalPercent:100}),N=k.totalPercent,U=i.map(O.measure).map(k.measure),V=function(n,e){for(var t=[],r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t}(U,L).map((function(n){return n.reduce((function(n,e){return n+e}))})),F=l(V),H=U.reduce((function(n,e){return n+e}),0),j=e({align:z,viewSize:N}),q=function(n){var e,r=n.snapSizes,o=n.alignment,i=n.loop,u=r.map(o.measure),c=(e=t({limit:a({min:0,max:r.length-1}),start:0,loop:i}),r.map((function(n,t){var r=e.set(t+1).get();return n+u[t]-u[r]})));return{measure:function(n){return c.slice(0,n).reduce((function(n,e){return n-e}),u[0])}}}({snapSizes:V,alignment:j,loop:A}),R=F.map(q.measure),X=p({alignment:j,contentSize:H,viewSize:N}),G=!A&&""!==C,Y="trimSnaps"===C,J=X.measure(R,Y),K=G?J:R,Q=t({limit:a({min:0,max:Math.max(0,K.length-1)}),start:E,loop:A}),W=Q.clone(),Z=function(n){var e=n.contentSize,t=n.loop;return{measure:function(n){var r=n[0],o=n[n.length-1];return a({min:t?r-e:o,max:r})}}}({loop:A,contentSize:H}).measure(K),$=function(n){var e=requestAnimationFrame.bind(window),t=cancelAnimationFrame.bind(window),r=0;function o(n,e){return function(){n===!!r&&e()}}function i(){r=e(n)}return{proceed:o(!0,i),start:o(!1,i),stop:o(!0,(function(){t(r),r=0}))}}((function(){cn.scrollBody.seek(en).update();var n=cn.scrollBody.settle(en);if(un.pointerDown()||(A||cn.scrollBounds.constrain(en),n&&(cn.animation.stop(),d.emit("settle"))),A){var e=cn.scrollBody.direction.get();cn.scrollLooper.loop(tn,e),cn.slideLooper.loop(i)}n||d.emit("scroll"),cn.translate.to(cn.scrollBody.location),cn.animation.proceed()})),_=K[Q.get()],nn=r(_),en=r(_),tn=[nn,en],rn=m({location:nn,speed:I,mass:1}),on=x({contentSize:H,index:Q,limit:Z,loop:A,scrollSnaps:K,target:en}),an=function(n){var e=n.index,t=n.scrollTarget,r=n.animation,o=n.indexPrevious,i=n.events,a=n.target;function u(n){var t=n.distance,u=n.index!==e.get();t&&(r.start(),a.add(t)),u&&(o.set(e.get()),e.set(n.index),i.emit("select"))}return{distance:function(n,e){u(t.byDistance(n,e))},index:function(n,r){var o=e.clone().set(n);u(t.byIndex(o.get(),r))}}}({animation:$,events:d,index:Q,indexPrevious:W,scrollTarget:on,target:en}),un=u({animation:$,axis:O,dragFree:B,dragTracker:c({axis:O,pxToPercent:k}),element:n,events:d,index:Q,limit:Z,location:nn,loop:A,scrollBody:rn,scrollTo:an,scrollTarget:on,target:en}),cn={animation:$,axis:O,dragHandler:un,pxToPercent:k,index:Q,indexPrevious:W,limit:Z,location:nn,options:s,scrollBody:rn,scrollBounds:v({animation:$,limit:Z,location:nn,scrollBody:rn}),scrollLooper:g({contentSize:H,limit:Z,location:nn,pxToPercent:k}),scrollProgress:(w={limit:Z},b=w.limit,M=b.max,T=b.length,{get:function(n){return(n-M)/-T}}),scrollSnaps:K,scrollTarget:on,scrollTo:an,slideLooper:h({axis:O,contentSize:H,location:nn,scrollSnaps:K,slideSizes:U,viewSize:N}),slidesInView:S({contentSize:H,inViewThreshold:P,loop:A,slideSizes:U,viewSize:N}),snapIndexes:F,target:en,translate:y({axis:O,container:o})};return cn}var b={align:"center",axis:"x",containScroll:"",containerSelector:"*",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",inViewThreshold:0,loop:!1,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0};return function(e,t){void 0===t&&(t={});var r,o,a,u,c,s,l=function(){var n={destroy:[],pointerDown:[],pointerUp:[],init:[],reInit:[],resize:[],scroll:[],select:[],settle:[]},e={emit:function(t){return n[t].forEach((function(n){return n(t)})),e},off:function(t,r){return n[t]=n[t].filter((function(n){return n!==r})),e},on:function(t,r){return n[t]=n[t].concat([r]),e}};return e}(),m=i(),v=(r=function(){var n=u.axis.measure(e);y!==n&&P(),l.emit("resize")},o=500,a={id:0},function(){window.clearTimeout(a.id),a.id=window.setTimeout(r,o)||0}),p=P,g=l.on,x=l.off,h=!1,S=n({},b),y=0;function M(){if(!e)throw new Error("Missing root node 😢");var n,t=S.containerSelector,r=e.querySelector(t);if(!r)throw new Error("Missing container node 😢");n=(c=r).children,s=Array.prototype.slice.call(n)}function T(t){void 0===t&&(t={}),M(),S=n(S,t);var r=(u=w(e,c,s,S,l)).axis,o=u.scrollBody,i=u.translate,a=u.dragHandler,d=u.slideLooper,p=S.loop,g=S.draggable,x=S.draggableClass,b=S.selectedClass,T=S.draggingClass;if(y=r.measure(e),m.add(window,"resize",v),i.to(o.location),s.forEach(E),a.addActivationEvents(),p){if(!d.canLoop())return P({loop:!1});d.loop(s)}g&&s.length?(x&&f(e,x),T&&(l.on("pointerDown",z),l.on("pointerUp",z))):l.on("pointerDown",a.removeInteractionEvents),b&&(D(),l.on("select",D),l.on("pointerUp",D)),h||(setTimeout((function(){return l.emit("init")}),0),h=!0)}function z(n){var t=S.draggingClass;"pointerDown"===n?f(e,t):d(e,t)}function D(){var n=S.selectedClass,e=I(!0);B(!0).forEach((function(e){return d(s[e],n)})),e.forEach((function(e){return f(s[e],n)}))}function E(n,t){m.add(n,"focus",(function(){var n=Math.floor(t/S.slidesToScroll),r=t?n:t;e.scrollLeft=0,L(r)}),!0)}function P(e){void 0===e&&(e={});var t=n({startIndex:C()},e);A(),T(t),l.emit("reInit")}function A(){u.dragHandler.removeActivationEvents(),u.dragHandler.removeInteractionEvents(),u.animation.stop(),m.removeAll(),u.translate.clear(),u.slideLooper.clear(s),d(e,S.draggableClass),s.forEach((function(n){return d(n,S.selectedClass)})),l.off("select",D),l.off("pointerUp",D),l.off("pointerDown",z),l.off("pointerUp",z)}function I(n){void 0===n&&(n=!1);var e=u[n?"target":"location"].get(),t=S.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[t](e))}function B(n){void 0===n&&(n=!1);var e=I(n);return u.snapIndexes.filter((function(n){return-1===e.indexOf(n)}))}function L(n){u.scrollBody.useDefaultMass().useDefaultSpeed(),u.scrollTo.index(n,0)}function C(){return u.index.get()}return T(t),{canScrollNext:function(){return u.index.clone().add(1).get()!==C()},canScrollPrev:function(){return u.index.clone().add(-1).get()!==C()},clickAllowed:function(){return u.dragHandler.clickAllowed()},containerNode:function(){return c},dangerouslyGetEngine:function(){return u},destroy:function(){h&&(A(),h=!1,u={},l.emit("destroy"))},off:x,on:g,previousScrollSnap:function(){return u.indexPrevious.get()},reInit:p,scrollNext:function(){var n=u.index.clone().add(1);u.scrollBody.useDefaultMass().useDefaultSpeed(),u.scrollTo.index(n.get(),-1)},scrollPrev:function(){var n=u.index.clone().add(-1);u.scrollBody.useDefaultMass().useDefaultSpeed(),u.scrollTo.index(n.get(),1)},scrollProgress:function(){return u.scrollProgress.get(u.location.get())},scrollSnapList:function(){return u.scrollSnaps.map(u.scrollProgress.get)},scrollTo:L,selectedScrollSnap:C,slideNodes:function(){return s},slidesInView:I,slidesNotInView:B}}}));