(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{314:function(t,e,n){"use strict";var r,o,c,l=n(32);n(1);o=!1,r=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.args,r=e.callback,c=e.method,d=void 0===c?"debug":c;o||((t=console)[d].apply(t,Object(l.a)(n)),"function"==typeof r&&r());return n[n.length-1]},c=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r({args:e})},c.breakpoint=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r({args:e,callback:function(){}})},["log","warn","debug","error"].forEach((function(t){return c[t]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r({args:n,method:t})}})),c.disable=function(){return o=!0},e.a=c},323:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("3fb34596",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";(function(t){n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(33),o=n(0),c=(n(86),n(573)),l=n(315),d=n.n(l),y=n(314);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=function(){var e,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=o.polygonAPIurl,f=void 0===l?"https://ideality.app/api/polygon":l,h=o.templatesDatabaseId,v=void 0===h?"068baa7841324cc682aa3eb7cad4bd8c":h,w=o.upvotesDatabaseId,k=void 0===w?t.env.POLYGON_UPVOTES_DB_ID:w,O=o.openAIkey,x=void 0===O?t.env.OPENAI_KEY:O,j=o.defaultParameters,I=void 0===j?{}:j,A=o.spent,S=o.vm,P=o.vmKey;return e=c.a.create({baseURL:f}),console.log("Polygon client initialized",{polygonAPIurl:f,templatesDatabaseId:v,upvotesDatabaseId:k,openAIkey:x,defaultParameters:I}),{spent:A,run:function(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return console.log("Running",t,{variables:r,parameters:o}),e.post("/run",{databaseId:v,slug:t,openAIkey:x,variables:r,parameters:m(m({},I),o)}).then((function(t){var data=t.data;return Object(y.a)("USD spent",n.spent+=data.approximateCost),S&&(S[P]=n.spent),data}))},generate:(n=Object(r.a)(regeneratorRuntime.mark((function t(n,input){var data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Generating",n,input),d.a.isArray(n)||(n=[n]),t.next=4,e.post("/generate",{outputKeys:n,input:input,openAIkey:x});case 4:return r=t.sent,data=r.data,t.abrupt("return",Object(y.a)("Generated:",data));case 7:case"end":return t.stop()}}),t)}))),function(t,e){return n.apply(this,arguments)}),upvote:function(t){return console.log("Upvoting",t),e.post("/upvote",{databaseId:k,generationId:t}).then((function(t){return t.data}))}}}}).call(this,n(174))},569:function(t,e,n){"use strict";n(323)},570:function(t,e,n){var r=n(106)(!1);r.push([t.i,".strong{font-weight:400}",""]),t.exports=r},574:function(t,e,n){"use strict";n.r(e);n(4),n(72),n(2),n(1);var r=n(34),o=n(33),c=(n(86),n(52),n(11),n(21),n(14),n(20),n(17),n(39),n(73),n(114),n(69),n(49),n(326),n(328),n(335),n(337),n(338),n(339),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(15),n(362),n(40),n(0)),l=n(28),d=(n(3),n(27),n(5),n(6),n(7),n(365)),y=n(314),f=n(315),m=n.n(f);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O,x,j={data:function(){return{whilst:{}}},methods:{actionPromise:function(t){var e;return null!=(e=this.whilst[t])?e:Promise.resolve()},try:(O=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,o,c,l,track,d,y,f,m,h,v,w=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=w.length>2&&void 0!==w[2]?w[2]:{},o=r.errorMessage,c=r.except,l=r.track,track=void 0===l||l,d=r.mixpanelProps,track&&(f=this.mixpanel),this[e]=!0,h=null,m=null,this.whilst[e]=new Promise((function(t,e){return h=t,m=e})),t.prev=6,console.log("Started ".concat(e)),null!=f&&f.track("".concat(e," started"),d),t.t0=h,t.next=12,n.call(this);case 12:return t.t1=v=t.sent,(0,t.t0)(t.t1),null!=f&&f.track("".concat(e," succeeded"),d),t.abrupt("return",v);case 18:return t.prev=18,t.t2=t.catch(6),y=t.t2,console.error("Error while ".concat(e,": ").concat(y)),null!=f&&f.track("".concat(e," failed"),k({error:y.message},d)),"function"==typeof o&&(o=o(y)),this.alert(o),"function"==typeof c&&c(y),t.abrupt("return",m(y));case 27:return t.prev=27,this[e]=!1,console.log("Finished ".concat(e)),t.finish(27);case 31:case"end":return t.stop()}}),t,this,[[6,18,27,31]])}))),function(t,e){return O.apply(this,arguments)}),alert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong.";return this.$bvToast.toast("See console for error details.",{title:t,variant:"danger",solid:!0,autoHideDelay:5e3})}}},I=n(573),A=n(377),S=n.n(A),P=(n(367),n(369)),_=n.n(P),C=n(370);x=[{product:"Tweet scheduler",caption:"Tweet generator",description:"Imagine you’re building a tweet scheduler. You can get your user’s bio via the Twitter API, and use it to generate an engaging tweet for them.",outputKeys:["tweet","topicSuggestions"],input:{bio:"I’m an indie hacker who likes to build things and is passionate about cats, running, and the outdoors.",topic:"life philosophy",commentary:"topicSuggestions means other topics they can tweet about based on their bio"}},{product:"Blogging platform",caption:"Article title, intro & outline",description:"Imagine you’re building a blogging platform and you want to help your users overcome writer’s block. You give your users an input field to enter a topic, and then use this API to generate a title, intro and outline for their article.",outputKeys:["title","intro","outline"],input:{topic:"functional programming",commentary:"outline must be a nested bullet list in markdown format."}},{product:"Voice modulation app",caption:"Cheeky quotes",description:"Imagine you’re building a vocie modulation app that allows users to speak in celebrity voices. You can use this API to suggest them a celebrity and a quote based on a topic.",outputKeys:["quote","voiceActor"],input:{topic:"something stupid and funny",commentary:"voiceActor should be a celebrity with a recognizable voice."}}];var E,K={mixins:[function(){var t,e,n,o,f,h,w,k=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},O=k.prefix,x=k.keys,j=k.format,I=void 0===j?"json":j,A=k.mergeObjects,S=void 0===A||A;return Object(y.a)("Exporting syncLocal mixin with arguments: ".concat(JSON.stringify(arguments[0]))),"yaml"===I?(f=d.a.load,n=d.a.dump):(f=JSON.parse,n=JSON.stringify),w=null,t=function(t,e){return"object"===Object(l.a)(e)&&null!==e?f(t||null):"number"==typeof e?parseFloat(t||null):"boolean"==typeof e?"boolean"==typeof t?t:"true"===t:t||null},h=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(m.a.identity).join(".")},Object(y.a)("Using data paths:",e=x.reduce((function(t,e){var n;if(m.a.isArray(e)){var o=e,l=Object(r.a)(o,2);e=l[0],n=l[1].dataPath}return Object.assign(t,Object(c.a)({},e,h(n,e)))}),{})),Object(y.a)("Converted keys back to plain strings:",x=x.map((function(t){return m.a.isArray(t)?t[0]:t}))),Object(y.a)("Using local keys:",o=x.reduce((function(t,e){return Object.assign(t,Object(c.a)({},e,h(O,e)))}),{})),{data:function(){return{syncLocal:{promise:new Promise((function(t){return w=t})),values:null,loaded:!1,ignoreWatchers:[]}}},mounted:function(){var n=this;return x.forEach((function(r){var c,l,d;if(Object(y.a)("Syncing key ".concat(r," from local storage for component ").concat(n.$options.name)),Object(y.a)("Local value:",d=window.localStorage.getItem(o[r])),c=e[r],void 0===(l=m.a.get(n,c)))throw new Error("Default value for key `".concat(r,"` does not exist at `").concat(c,"`"));return console.log({key:r,localValue:d,defaultValue:l}),d=t(d,l),m.a.set(n,c,Object(y.a)("Setting ".concat(r," at ").concat(c," to:"),m.a.isObject(l)&&!m.a.isArray(l)&&S?v(v({},l),d):d||l))})),this.$nextTick((function(){return Object.assign(n.syncLocal,{values:m.a.mapValues(e,(function(t){return m.a.get(n,t)})),loaded:!0}),w(n.syncLocal.values)}))},watch:v({},x.reduce((function(t,e){return Object.assign(t,Object(c.a)({},e,{deep:!0,handler:function(t){var r;return this.syncLocal.loaded?(r=o[e],window.localStorage.setItem(r,"object"===Object(l.a)(t)?n(t):t),Object(y.a)("Saved ".concat(e," to local storage as ").concat(r)),this.syncLocal.ignoreWatchers=m.a.without(this.syncLocal.ignoreWatchers,e)):this.syncLocal.ignoreWatchers.push(e)}}))}),{}))}}({keys:["outputKeys","input","openAIkey","format","exampleProduct"],format:"yaml",prefix:"polygon",mergeObjects:!1}),j],data:function(){return{justCopied:!1,showExampleDescription:!0,showOpenAIkey:!1,showOpenAIkeyEntry:!1,generatingExample:!1,exampleProduct:"",examples:x,pickedExample:x[0],outputKeys:x[0].outputKeys,newOutputKey:"",input:x[0].input,openAIkey:"",generated:"",justGenerated:!1,formats:["js","js (axios)","js (fetch)","curl"],languageForFormat:{js:"javascript","js (fetch)":"javascript","js (axios)":"javascript",curl:"bash"},format:"js",generating:!1,oldFocused:null,newInputKey:"",mixpanelId:null}},created:function(){var t=this;return _.a.init("c8582487f9e7686276f47de40ab7a5a2",{loaded:function(e){return Object(y.a)("mixpanel loaded with distinct id",t.mixpanelId=e.get_distinct_id()),e.track("page view",{page:"demo"})}})},computed:{polygon:function(){return new C.a({openAIkey:this.openAIkey,vm:this})},inputValid:function(){return m.a.keys(this.input).length>0&&m.a.every(this.input,(function(t){return t.length>0}))},code:function(){var t;switch(t=function(s){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s.replace(/^( +)"([^"]+)":/gm,(function(e,n,r){return"".concat(n).concat(t).concat(r,":")})).replace(/^( *)}$/gm,(function(e,n){return"".concat(n).concat(t,"}")}))},this.format){case"js":return"// npm install almostmagic\n\nconst { Magic } = require('almostmagic') // <-- for node\n// import Magic from 'almostmagic' // <-- for es6\n\nMagic.generate(\n  ".concat(JSON.stringify(this.outputKeys),",\n  ").concat(t(JSON.stringify(this.input,null,2),"  "),",\n  { openaiKey: ").concat(JSON.stringify(this.openAIkey)," }\n).then(console.log)");case"js (fetch)":return"await(\n  await(\n    fetch('".concat("https://ideality.app/api/polygon","/generate', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        outputKeys: ").concat(JSON.stringify(this.outputKeys),",\n        input: ").concat(t(JSON.stringify(this.input,null,2),"        "),",\n        openAIkey: ").concat(JSON.stringify(this.openAIkey),"\n      })\n    })\n  )\n).json()");case"js (axios)":return"( await(axios.post('".concat("https://ideality.app/api/polygon","/generate', {\n  outputKeys: ").concat(JSON.stringify(this.outputKeys),",\n  input: ").concat(t(JSON.stringify(this.input,null,2),"  "),",\n  openAIkey: ").concat(JSON.stringify(this.openAIkey),"\n})) ).data");case"curl":return'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"outputKeys": '.concat(JSON.stringify(this.outputKeys),', "input": ').concat(JSON.stringify(this.input),', "openAIkey": ').concat(JSON.stringify(this.openAIkey),"}' \\\n  ").concat("https://ideality.app/api/polygon","/generate")}},obfuscatedCode:function(){var t;return null!=(t=this.code)?t.replace(/sk-\w+/g,"sk-<your key here>"):void 0}},methods:{generateExample:function(){return this.try("generatingExample",Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _.a.track("generate example"),n=(n=JSON.stringify(this.examples)).slice(0,n.length-1)+",",e='{"product":',this.exampleProduct&&(e+=JSON.stringify(this.exampleProduct)),t.next=7,this.polygon.run("generate-example",{prompt:n,feeder:e},{stop:"}}",temperature:.5,max_tokens:1e3});case 7:return o=t.sent,c=Object(r.a)(o.choices,1),this.pickedExample=c[0],t.abrupt("return",this.input=m.a.mapValues(this.input,(function(t){return m.a.isArray(t)?t.join(", "):t})));case 11:case"end":return t.stop()}}),t,this)}))))},deleteInput:function(t){if(window.confirm("Are you sure you want to delete '".concat(t,"'? THERE IS NO UNDO!")))return delete this.input[t],this.input=m.a.clone(this.input)},addInput:function(){if(this.newInputKey)return this.newInputKey=m.a.camelCase(this.newInputKey),this.input[this.newInputKey]="",this.newInputKey="",this.input=m.a.clone(this.input)},focusAndSelect:function(element){return this.oldFocused=document.activeElement,element.focus(),element.select()},returnFocus:function(){var t;return null!=(t=this.oldFocused)&&t.focus(),this.oldFocused=null},renameInput:function(t,e){if(e){if(!this.input[e])return this.input[e]=this.input[t],delete this.input[t],this.input=m.a.clone(this.input);this.$bvToast.toast("This key already exists",{title:"Error",variant:"danger",autoHideDelay:3e3,solid:!0})}},addOutputKey:function(){if(this.newOutputKey)return this.outputKeys.push(m.a.camelCase(this.newOutputKey)),this.newOutputKey=""},copyToClipboard:function(){var t=this;return window.navigator.clipboard.writeText(this.code),this.justCopied=!0,setTimeout((function(){return t.justCopied=!1}),1e3)},generate:function(t,input){return t&&(this.outputKeys=t),input&&(this.input=input),this.try("generating",Object(o.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.polygon.generate(this.outputKeys,this.input);case 2:return e=t.sent,this.generated=JSON.stringify(e,null,2),this.$nextTick((function(){return n.$refs.generated.activate()})),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t,this)}))))}},watch:{showOpenAIkey:function(t){var e=this;if(t)return setTimeout((function(){return e.showOpenAIkey=!1}),3e3)},pickedExample:function(){if(!this.syncLocal.ignoreWatchers.includes("pickedExample")){this.generated=null;var t=this.pickedExample;return this.outputKeys=t.outputKeys,this.input=t.input,_.a.track("picked example",this.pickedExample)}},generated:function(){var t=this;return this.justGenerated=!0,setTimeout((function(){return t.justGenerated=!1}),500),this.$nextTick((function(){return S.a.highlightAll()}))},code:function(){return this.$nextTick((function(){return S.a.highlightAll()}))},openAIkey:(E=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(new TextEncoder).encode(e),t.next=3,crypto.subtle.digest("SHA-256",o);case 3:return r=t.sent,n=Array.from(new Uint8Array(r)),t.abrupt("return",n.map((function(b){return b.toString(16).padStart(2,"0")})).join(""));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(e);case 2:if(n=t.sent,this.keyHash===this.mixpanelId){t.next=6;break}return _.a.track("key changed",{keyHash:n}),t.abrupt("return",_.a.identify(n));case 6:case"end":return t.stop()}}),t,this)}))),function(t){return E.apply(this,arguments)})},mounted:function(){return window.generate=this.generate.bind(this),window.axios=I.a}},D=K,z=(n(569),n(79)),component=Object(z.a)(D,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column justify-content-center align-items-center",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?(e.preventDefault(),t.generate()):null}}},[e("b-container",[t.$route.query.iframed?t._e():e("b-row",{staticClass:"justify-content-center align-items-center"},[e("img",{staticClass:"m-2",staticStyle:{width:"100px",height:"100px"},attrs:{src:"almostmagic.png",alt:"Magic. Almost!"}}),e("h1",{staticClass:"display-3 mt-3 text-center",staticStyle:{"font-size":"2em"}},[e("strong",[t._v("AlmostMagic.  ")]),t._v("Add AI 🪄 to your app with one line of code")])]),e("b-row",{staticClass:"lead pb-2 my-2 border-bottom justify-content-center align-items-center"},[t._l(t.examples,(function(n,r){return e("b-button",{key:n.caption,staticClass:"mx-1 text-muted",staticStyle:{cursor:"pointer"},attrs:{variant:t.pickedExample===n?"outline-secondary":"light",size:"sm",id:"example-"+r},on:{click:function(e){t.pickedExample=n,t.generated=!1}}},[e("span",[t._v(t._s(n.caption))])])})),e("b-button",{staticStyle:{cursor:"pointer"},attrs:{variant:"light",size:"sm",id:"example-random"},on:{click:t.generateExample}},[t.generatingExample?e("b-spinner",{attrs:{small:"",type:"grow",variant:"primary"}}):e("strong",[t._v("💡")])],1),e("b-popover",{attrs:{target:"example-random",triggers:"hover",placement:"bottom"}},[e("p",{staticClass:"lead"},[t._v("Let’s come up with something especially for you!")]),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.generateExample.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"What is your product?"}},[e("b-input",{staticStyle:{"font-size":"0.8em"},attrs:{placeholder:"an app for cats who love to code"},model:{value:t.exampleProduct,callback:function(e){t.exampleProduct=e},expression:"exampleProduct"}})],1),e("b-button",{attrs:{variant:t.generatingExample?"outline-secondary":"primary",disabled:t.generatingExample},on:{click:t.generateExample}},[t._v(t._s(t.generatingExample?"Generating...":t.exampleProduct?"Generate":"I’m feeling lucky"))])],1)],1)],2),e("b-row",{staticClass:"justify-content-center align-items-center",staticStyle:{"font-size":"0.8em"}},[e("b-alert",{attrs:{show:t.showExampleDescription,dismissible:""},on:{dismissed:function(e){t.showExampleDescription=!1}}},[t._v(t._s(t.pickedExample.description))])],1),e("b-row",{staticClass:"justify-content-between mt-2"},[e("b-col",{staticClass:"mt-2 col-12 col-md-7"},[e("h2",{staticClass:"lead strong mb-3",staticStyle:{"font-size":"1.5em"}},[e("strong",[t._v(t._s(t.pickedExample.caption)+"  ")]),t._v("for a  "),e("strong",[t._v(t._s(t.pickedExample.product&&t.pickedExample.product.toLowerCase()))])]),e("h3",{staticClass:"lead strong"},[t._v("Inputs")]),e("small",{staticClass:"form-text text-muted mb-2",staticStyle:{"font-size":"0.8em"}},[t._v("What do you want the user to enter, or what data will you obtain programmatically?")]),e("div",{staticClass:"d-flex flex-wrap align-items-center",staticStyle:{"font-size":"0.8em"}},[t._l(t.input,(function(n,r){return e("b-input-group",{key:r,staticClass:"my-1"},[e("b-input-group-prepend",{attrs:{id:"for-"+r}},[e("b-input-group-text",[e("strong",[t._v(t._s(r))])])],1),e("b-popover",{attrs:{target:"for-"+r,triggers:"hover",placement:"bottom"},on:{shown:function(e){return t.focusAndSelect(t.$refs["newKey-"+r][0])},hidden:t.returnFocus}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.renameInput(r,t.$refs["newKey-"+r][0].vModelValue)}}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-input",{ref:"newKey-"+r,refInFor:!0,attrs:{value:r}}),e("b-input-group-append",[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[e("b-icon-check")],1)],1)],1)],1)],1),e("b-input",{staticClass:"pt-1",attrs:{placeholder:"Input value to test the API"},model:{value:t.input[r],callback:function(e){t.$set(t.input,r,e)},expression:"input[key]"}}),e("b-input-group-append",[e("b-button",{staticClass:"rounded-right",staticStyle:{"font-size":"1em","border-color":"#ced4da","border-left":"0"},attrs:{variant:"outline-secondary"},on:{click:function(e){return t.deleteInput(r)}}},[e("b-icon-trash",{staticStyle:{width:"0.6em"}})],1)],1),e("b-form-invalid-feedback",{attrs:{state:!!t.input[r]}},[t._v("Please add a value")])],1)})),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.addInput.apply(null,arguments)}}},[e("b-input-group",{staticClass:"mt-1",staticStyle:{width:"150px"}},[e("b-input",{attrs:{placeholder:"What else?"},model:{value:t.newInputKey,callback:function(e){t.newInputKey=e},expression:"newInputKey"}}),e("b-input-group-append",[e("b-button",{attrs:{type:"submit",variant:"outline-secondary",disabled:!t.newInputKey}},[e("b-icon-plus")],1)],1)],1)],1)],2),e("h3",{staticClass:"lead strong mt-3"},[t._v("Outputs")]),e("small",{staticClass:"form-text text-muted mb-2",staticStyle:{"font-size":"0.8em"}},[t._v("What keys do you want the API to return? Make them as self-explanatory as possible.")]),e("div",{staticClass:"d-flex flex-wrap align-items-center"},[t._l(t.outputKeys,(function(n){return e("div",{key:n,staticClass:"input-group-text my-1 mr-2"},[e("strong",[t._v(t._s(n))]),e("b-button",{staticClass:"text-muted px-1",staticStyle:{background:"transparent",border:"none"},attrs:{size:"sm",variant:"light"},on:{click:function(e){t.outputKeys=t.outputKeys.filter((function(t){return t!==n}))}}},[e("b-icon-x-circle",{staticStyle:{width:"0.6em"}})],1)],1)})),e("b-input",{staticStyle:{width:"120px"},attrs:{placeholder:"What else?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addOutputKey.apply(null,arguments))},blur:t.addOutputKey},model:{value:t.newOutputKey,callback:function(e){t.newOutputKey=e},expression:"newOutputKey"}})],2),e("b-form-invalid-feedback",{attrs:{state:t.outputKeys.length>0}},[t._v("Please add at least one thing to generate")]),!t.openAIkey||t.showOpenAIkeyEntry?e("b-alert",{staticClass:"m-3",attrs:{variant:t.openAIkey?"info":"warning",show:"",dismissible:!!t.openAIkey},on:{dismissed:function(e){t.showOpenAIkeyEntry=!1}}},[e("b-form-group",{staticClass:"text-muted",staticStyle:{"font-size":"0.8em"},attrs:{label:"OpenAI API key"},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("We don’t store "),e("a",{attrs:{href:"https://beta.openai.com/account/api-keys",target:"_blank"}},[t._v("your key")]),t._v(", it’s only used to make requests to OpenAI’s API."),e("b-form-invalid-feedback",{attrs:{state:!!t.openAIkey}},[t._v("Please add your OpenAI API key")])]},proxy:!0}],null,!1,3405356672)},[e("b-input-group",[e("b-input",{staticStyle:{"font-size":"1em"},attrs:{type:t.showOpenAIkey?"text":"password",placeholder:"sk-..."},model:{value:t.openAIkey,callback:function(e){t.openAIkey=e},expression:"openAIkey"}}),e("b-input-group-append",[e("b-button",{staticStyle:{"font-size":"0.8em"},attrs:{variant:"outline-secondary",size:"sm"},on:{click:function(e){t.showOpenAIkey=!t.showOpenAIkey}}},[e("b-icon",{staticStyle:{width:"0.8em"},attrs:{icon:t.showOpenAIkey?"eye-slash":"eye"}})],1)],1)],1)],1)],1):e("b-button",{staticClass:"position-fixed",staticStyle:{bottom:"1em",right:"1em","font-size":"0.8em"},attrs:{variant:"outline-secondary",size:"sm"},on:{click:function(e){t.showOpenAIkeyEntry=!0}}},[e("b-icon-key",{staticStyle:{width:"0.8em"}})],1),e("div",{staticClass:"mb-5"},[e("b-button",{ref:"generateButton",staticClass:"mt-2",attrs:{block:"",type:"submit",variant:t.generating?"light":"primary",disabled:t.generating||!t.openAIkey||!t.outputKeys.length||!t.inputValid,size:"lg"},on:{click:function(e){return t.generate()}}},[t.generating?e("span",[e("b-spinner",{staticClass:"mr-2",attrs:{small:""}}),t._v("Generating...")],1):e("span",[e("b-icon",{attrs:{icon:t.generated?"arrow-clockwise":"play"}}),t._v(t._s(t.generated?"Try again":"Try it!"))],1)]),e("span",{staticClass:"text-muted text-center small d-none d-lg-block"},[t._v("( Shift+Enter )")])],1)],1),e("b-col",{staticClass:"mt-2 mb-5 col-md-5"},[e("b-tabs",{attrs:{"no-fade":""}},[e("b-tab",{attrs:{title:"Request"}},[e("div",{staticClass:"rounded-top"},[e("pre",{staticClass:"mb-0"},[e("code",{class:"language-".concat(t.languageForFormat[t.format]),staticStyle:{"font-size":"0.8em","white-space":"pre-wrap"},domProps:{textContent:t._s(t.obfuscatedCode)}})])]),e("div",{staticClass:"d-flex justify-content-between"},[e("b-button-group",t._l(t.formats,(function(n){return e("b-button",{key:n,staticStyle:{"border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{size:"sm",variant:n===t.format?"secondary":"outline-secondary"},on:{click:function(e){t.format=n}}},[t._v(t._s(n))])})),1),e("b-button",{staticClass:"text-muted",staticStyle:{"border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{variant:"light",size:"sm"},on:{click:t.copyToClipboard}},[t._v(t._s(t.justCopied?"Copied!":"Copy to clipboard"))])],1)]),t.generated?e("b-tab",{ref:"generated",attrs:{title:"Response"}},[e("div",[e("pre",[e("code",{staticClass:"language-json",staticStyle:{"white-space":"pre-wrap","font-size":"0.9em","overflow-y":"auto"},domProps:{textContent:t._s(t.generated)}})])])]):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);