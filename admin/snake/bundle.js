(()=>{var t={670:(t,e,n)=>{var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},318:(t,e,n)=>{var r=n(656),o=n(466),i=n(400),a=function(t){return function(e,n,a){var s,c=r(e),u=o(c.length),f=i(a,u);if(t&&n!=n){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},920:(t,e,n)=>{var r=n(871),o=n(887),i=n(236),a=n(70);t.exports=function(t,e){for(var n=o(e),s=a.f,c=i.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||s(t,f,c(e,f))}}},880:(t,e,n)=>{var r=n(781),o=n(70),i=n(114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},781:(t,e,n)=>{var r=n(293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,n)=>{var r=n(854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},113:(t,e,n)=>{var r=n(5);t.exports=r("navigator","userAgent")||""},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},109:(t,e,n)=>{var r=n(854),o=n(236).f,i=n(880),a=n(320),s=n(505),c=n(920),u=n(705);t.exports=function(t,e){var n,f,l,h,p,v=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[v]||s(v,{}):(r[v]||{}).prototype)for(f in e){if(h=e[f],l=t.noTargetGet?(p=o(n,f))&&p.value:n[f],!u(d?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;c(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),a(n,f,h,t)}}},293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},5:(t,e,n)=>{var r=n(857),o=n(854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},854:(t,e,n)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},871:(t,e,n)=>{var r=n(908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},501:t=>{t.exports={}},664:(t,e,n)=>{var r=n(781),o=n(293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},361:(t,e,n)=>{var r=n(293),o=n(326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},788:(t,e,n)=>{var r=n(465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},909:(t,e,n)=>{var r,o,i,a=n(536),s=n(854),c=n(111),u=n(880),f=n(871),l=n(465),h=n(200),p=n(501),v="Object already initialized",d=s.WeakMap;if(a||l.state){var y=l.state||(l.state=new d),b=y.get,g=y.has,m=y.set;r=function(t,e){if(g.call(y,t))throw new TypeError(v);return e.facade=t,m.call(y,t,e),e},o=function(t){return b.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var w=h("state");p[w]=!0,r=function(t,e){if(f(t,w))throw new TypeError(v);return e.facade=t,u(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},705:(t,e,n)=>{var r=n(293),o=/#|\.prototype\./,i=function(t,e){var n=s[a(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},913:t=>{t.exports=!1},536:(t,e,n)=>{var r=n(854),o=n(788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},70:(t,e,n)=>{var r=n(781),o=n(664),i=n(670),a=n(593),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},236:(t,e,n)=>{var r=n(781),o=n(296),i=n(114),a=n(656),s=n(593),c=n(871),u=n(664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=s(e,!0),u)try{return f(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},6:(t,e,n)=>{var r=n(324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},181:(t,e)=>{e.f=Object.getOwnPropertySymbols},324:(t,e,n)=>{var r=n(871),o=n(656),i=n(318).indexOf,a=n(501);t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)!r(a,n)&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},887:(t,e,n)=>{var r=n(5),o=n(6),i=n(181),a=n(670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},857:(t,e,n)=>{var r=n(854);t.exports=r},320:(t,e,n)=>{var r=n(854),o=n(880),i=n(871),a=n(505),s=n(788),c=n(909),u=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,s){var c,u=!!s&&!!s.unsafe,h=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(c=f(n)).source||(c.source=l.join("string"==typeof e?e:""))),t!==r?(u?!p&&t[e]&&(h=!0):delete t[e],h?t[e]=n:o(t,e,n)):h?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},505:(t,e,n)=>{var r=n(854),o=n(880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},200:(t,e,n)=>{var r=n(309),o=n(711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},465:(t,e,n)=>{var r=n(854),o=n(505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},309:(t,e,n)=>{var r=n(913),o=n(465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.13.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},400:(t,e,n)=>{var r=n(958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},656:(t,e,n)=>{var r=n(361),o=n(488);t.exports=function(t){return r(o(t))}},958:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},466:(t,e,n)=>{var r=n(958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},908:(t,e,n)=>{var r=n(488);t.exports=function(t){return Object(r(t))}},593:(t,e,n)=>{var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},711:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},564:(t,e,n)=>{var r=n(109),o=n(854),i=n(113),a=[].slice,s=function(t){return function(e,n){var r=arguments.length>2,o=r?a.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(564);const e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("food")}var n,r;return n=e,(r=[{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"change",value:function(){var t=10*Math.round(29*Math.random()),e=10*Math.round(29*Math.random());this.element.style.left=t+"px",this.element.style.top=e+"px"}},{key:"initFood",value:function(){for(var t=this.element.getElementsByTagName("div"),e=0;e<t.length;e++)t[e].style.backgroundColor="black"}}])&&t(n.prototype,r),e}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;r(this,t),this.score=0,this.level=1,this.scoreElement=document.getElementById("score"),this.levelElement=document.getElementById("level"),this.maxLevel=e,this.levelUp=n}var e,n;return e=t,(n=[{key:"addScore",value:function(){this.scoreElement.innerHTML=++this.score+"",this.score%this.levelUp==0&&this.addLevel()}},{key:"addLevel",value:function(){this.level<=this.maxLevel&&(this.levelElement.innerHTML=++this.level+"")}}])&&o(e.prototype,n),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=document.querySelector("#snake > div"),this.element=document.getElementById("snake"),this.body=this.element.getElementsByTagName("div")}var e,n;return e=t,(n=[{key:"X",get:function(){return this.head.offsetLeft},set:function(t){if(this.X!==t){if(t<0||t>290)throw new Error("Hit the wall!");this.body[1]&&this.body[1].offsetLeft===t&&(t=t>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=t+"px",this.checkCollision()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(t){if(this.Y!==t){if(t<0||t>290)throw new Error("Hit the wall!");this.body[1]&&this.body[1].offsetTop===t&&(t=t>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=t+"px",this.checkCollision()}}},{key:"addBody",value:function(){this.element.insertAdjacentHTML("beforeend",'<div style="background:black"></div>')}},{key:"initBody",value:function(){for(var t=this.body.length-1;t>0;t--)this.element.removeChild(this.body[t]);this.head.style.backgroundColor="black"}},{key:"moveBody",value:function(){for(var t=this.body.length-1;t>0;t--){var e=this.body[t-1].offsetLeft,n=this.body[t-1].offsetTop;this.body[t].style.left=e+"px",this.body[t].style.top=n+"px"}}},{key:"checkCollision",value:function(){for(var t=1;t<this.body.length;t++){var e=this.body[t];if(this.X===e.offsetLeft&&this.Y===e.offsetTop)throw new Error("Collision!")}}}])&&a(e.prototype,n),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.direction="",this.snake=new s,this.food=new e,this.scorePanel=new i,this.button=document.querySelector("button"),document.addEventListener("keydown",(function(t){return n.keydownHandler(t)})),document.getElementById("start").addEventListener("click",(function(){return n.start()}))}var n,r;return n=t,(r=[{key:"keydownHandler",value:function(t){this.direction=t.key}},{key:"start",value:function(){this.snake.initBody(),this.food.initFood(),this.snake.X=0,this.snake.Y=0,this.food.change(),this.direction="ArrowRight",this.button.disabled=!0,this.run()}},{key:"run",value:function(){var t=this,e=this.snake.X,n=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":n-=10;break;case"ArrowDown":case"Down":n+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,n);try{this.snake.X=e,this.snake.Y=n}catch(t){this.button.disabled=!1,alert(t+"  Game Over")}this.button.disabled&&setTimeout((function(){return t.run()}),250-10*(this.scorePanel.level-1))}},{key:"checkEat",value:function(t,e){t===this.food.X&&e===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())}}])&&c(n.prototype,r),t}())})()})();