(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{309:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("c7204cde",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(309)},508:function(t,e,n){var r=n(106)(!1);r.push([t.i,".strong{font-weight:400}",""]),t.exports=r},511:function(t,e,n){"use strict";n.r(e);n(4),n(63),n(2),n(1);var r,o,c,l=n(33),h=n(34),d=(n(84),n(13),n(11),n(21),n(19),n(17),n(38),n(0)),f=n(28),m=(n(52),n(15),n(3),n(27),n(5),n(6),n(7),n(311)),y=n(32);o=!1,r=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.args,r=e.callback,c=e.method,l=void 0===c?"debug":c;o||((t=console)[l].apply(t,Object(y.a)(n)),"function"==typeof r&&r());return n[n.length-1]},c=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r({args:e})},c.breakpoint=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r({args:e,callback:function(){}})},["log","warn","debug","error"].forEach((function(t){return c[t]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r({args:n,method:t})}})),c.disable=function(){return o=!0};var w=c,v=n(308),k=n.n(v);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function W(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S,C,_={data:function(){return{whilst:{}}},methods:{actionPromise:function(t){var e;return null!=(e=this.whilst[t])?e:Promise.resolve()},try:(S=Object(h.a)(regeneratorRuntime.mark((function t(e,n){var r,o,c,l,track,h,d,f,m,y,w,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=v.length>2&&void 0!==v[2]?v[2]:{},o=r.errorMessage,c=r.except,l=r.track,track=void 0===l||l,h=r.mixpanelProps,track&&(f=this.mixpanel),this[e]=!0,y=null,m=null,this.whilst[e]=new Promise((function(t,e){return y=t,m=e})),t.prev=6,console.log("Started ".concat(e)),null!=f&&f.track("".concat(e," started"),h),t.t0=y,t.next=12,n.call(this);case 12:return t.t1=w=t.sent,(0,t.t0)(t.t1),null!=f&&f.track("".concat(e," succeeded"),h),t.abrupt("return",w);case 18:return t.prev=18,t.t2=t.catch(6),d=t.t2,console.error("Error while ".concat(e,": ").concat(d)),null!=f&&f.track("".concat(e," failed"),W({error:d.message},h)),"function"==typeof o&&(o=o(d)),this.alert(o),"function"==typeof c&&c(d),t.abrupt("return",m(d));case 27:return t.prev=27,this[e]=!1,console.log("Finished ".concat(e)),t.finish(27);case 31:case"end":return t.stop()}}),t,this,[[6,18,27,31]])}))),function(t,e){return S.apply(this,arguments)}),alert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong.";return this.$bvToast.toast("See console for error details.",{title:t,variant:"danger",solid:!0,autoHideDelay:5e3})}}},P=n(315),A=n.n(P);n(313);C=[{product:"Tweet scheduler",caption:"Tweet generator",description:"Imagine you’re building a tweet scheduler. You can get your user’s bio via the Twitter API, and use it to generate an engaging tweet for them.",whats:["tweet","hashtags"],forWhat:{bio:"I’m an indie hacker who likes to build things and is passionate about cats, running, and the outdoors.",topic:"life philosophy"}},{product:"Blogging platform",caption:"Article title, intro & outline",description:"Imagine you’re building a blogging platform and you want to help your users overcome writer’s block. You give your users an input field to enter a topic, and then use this API to generate a title, intro and outline for their article.",whats:["title","intro","outline"],forWhat:{topic:"functional programming",generationComments:"The outline must be a nested bullet list in markdown format."}},{product:"Voice modulation app",caption:"Cheeky quotes",description:"Imagine you’re building a vocie modulation app that allows users to speak in celebrity voices. You can use this API to generate a cheeky (or not so cheeky) quote in the style of the celebrity of their choice.",whats:["quote","explanationForUser"],forWhat:{celebrity:"Arnold Schwarzenegger",tone:"cheeky"}}];var E={mixins:[function(){var t,e,n,r,o,c,h,y=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=y.prefix,x=y.keys,j=y.format,W=void 0===j?"json":j,S=y.mergeObjects,C=void 0===S||S;return w("Exporting syncLocal mixin with arguments: ".concat(JSON.stringify(arguments[0]))),"yaml"===W?(o=m.a.load,n=m.a.dump):(o=JSON.parse,n=JSON.stringify),h=null,t=function(t,e){return"object"===Object(f.a)(e)&&null!==e?o(t||null):"number"==typeof e?parseFloat(t||null):"boolean"==typeof e?"boolean"==typeof t?t:"true"===t:t||null},c=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(k.a.identity).join(".")},w("Using data paths:",e=x.reduce((function(t,e){var n;if(k.a.isArray(e)){var r=e,o=Object(l.a)(r,2);e=o[0],n=o[1].dataPath}return Object.assign(t,Object(d.a)({},e,c(n,e)))}),{})),w("Converted keys back to plain strings:",x=x.map((function(t){return k.a.isArray(t)?t[0]:t}))),w("Using local keys:",r=x.reduce((function(t,e){return Object.assign(t,Object(d.a)({},e,c(v,e)))}),{})),{data:function(){return{syncLocal:{promise:new Promise((function(t){return h=t})),values:null,loaded:!1,ignoreWatchers:[]}}},mounted:function(){var n=this;return x.forEach((function(o){var c,l,h;if(w("Syncing key ".concat(o," from local storage for component ").concat(n.$options.name)),w("Local value:",h=window.localStorage.getItem(r[o])),c=e[o],void 0===(l=k.a.get(n,c)))throw new Error("Default value for key `".concat(o,"` does not exist at `").concat(c,"`"));return console.log({key:o,localValue:h,defaultValue:l}),h=t(h,l),k.a.set(n,c,w("Setting ".concat(o," at ").concat(c," to:"),k.a.isObject(l)&&!k.a.isArray(l)&&C?O(O({},l),h):h||l))})),this.$nextTick((function(){return Object.assign(n.syncLocal,{values:k.a.mapValues(e,(function(t){return k.a.get(n,t)})),loaded:!0}),h(n.syncLocal.values)}))},watch:O({},x.reduce((function(t,e){return Object.assign(t,Object(d.a)({},e,{deep:!0,handler:function(t){var o;return this.syncLocal.loaded?(o=r[e],window.localStorage.setItem(o,"object"===Object(f.a)(t)?n(t):t),w("Saved ".concat(e," to local storage as ").concat(o)),this.syncLocal.ignoreWatchers=k.a.without(this.syncLocal.ignoreWatchers,e)):this.syncLocal.ignoreWatchers.push(e)}}))}),{}))}}({keys:["whats","forWhat","openAIkey","format","examples","exampleProduct"],format:"yaml",prefix:"polygon",mergeObjects:!1}),_],data:function(){return{generatingExample:!1,exampleProduct:"",examples:C,pickedExample:null,hoveredExample:null,whats:["name","tagline"],newWhat:"",forWhat:{company:"A startup for people who would like to have a startup"},openAIkey:"",generated:"",justGenerated:!1,formats:["js","js (fetch)","curl"],languageForFormat:{js:"javascript","js (fetch)":"javascript",curl:"bash"},format:"fetch",generating:!1,oldFocused:null,newForWhatKey:""}},computed:{forWhatValid:function(){return k.a.every(this.forWhat,(function(t){return t.length>0}))},code:function(){switch(this.format){case"js (fetch)":return"await(\n  await(\n    fetch('".concat("https://ideality.app/api/polygon","/generate', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        what: ").concat(JSON.stringify(this.whats),",\n        for: ").concat(JSON.stringify(this.forWhat),",\n        openAIkey: ").concat(JSON.stringify(this.openAIkey),"\n      })\n    })\n  )\n).json()");case"curl":return'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"what": '.concat(JSON.stringify(this.whats),', "for": ').concat(JSON.stringify(this.forWhat),', "openAIkey": ').concat(JSON.stringify(this.openAIkey),"}' \\\n  ").concat("https://ideality.app/api/polygon","/generate");case"js":return"// import Generate from 'polygon-ai'\n// \n// const generate = new Generate({\n//   openAIkey: ".concat(JSON.stringify(this.openAIkey),"\n// })\n// \n// ☝️ This part doesn’t work yet, but it will soon!\n\n// 👇 This part works in the browser console on this page\n\nawait generate(\n    ").concat(JSON.stringify(this.whats),", {\n    for: ").concat(JSON.stringify(this.forWhat),"\n  }\n)\n\n// Pro tip: change args in the console, and they will automatically update here!")}},obfuscatedCode:function(){var t;return null!=(t=this.code)?t.replace(/sk-\w+/g,"sk-<your key here>"):void 0}},methods:{generateExample:function(){return this.try("generatingExample",Object(h.a)(regeneratorRuntime.mark((function t(){var e,n,r,text,o,c,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(n=JSON.stringify(this.examples)).slice(0,n.length-1)+",",e='{"product":',this.exampleProduct&&(e+=JSON.stringify(this.exampleProduct)),n+=e,r="}}",t.next=8,fetch("https://api.openai.com/v1/engines/text-davinci-003/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.openAIkey)},body:JSON.stringify({prompt:n,stop:r,temperature:.5,max_tokens:300})});case 8:return t.next=10,t.sent.json();case 10:return o=t.sent,c=Object(l.a)(o.choices,1),text=c[0].text,text=e+text+r,this.pickedExample=JSON.parse(text),h=this.pickedExample,this.whats=h.whats,this.forWhat=h.forWhat,t.abrupt("return",this.forWhat=k.a.mapValues(this.forWhat,(function(t){return k.a.isArray(t)?t.join(", "):t})));case 19:case"end":return t.stop()}}),t,this)}))))},deleteForWhat:function(t){if(window.confirm("Are you sure you want to delete '".concat(t,"'? THERE IS NO UNDO!")))return delete this.forWhat[t],this.forWhat=k.a.clone(this.forWhat)},addForWhat:function(){if(this.newForWhatKey)return this.newForWhatKey=k.a.camelCase(this.newForWhatKey),this.forWhat[this.newForWhatKey]="",this.newForWhatKey="",this.forWhat=k.a.clone(this.forWhat)},focusAndSelect:function(element){return this.oldFocused=document.activeElement,element.focus(),element.select()},returnFocus:function(){var t;return null!=(t=this.oldFocused)&&t.focus(),this.oldFocused=null},renameForWhat:function(t,e){if(e){if(!this.forWhat[e])return this.forWhat[e]=this.forWhat[t],delete this.forWhat[t],this.forWhat=k.a.clone(this.forWhat);this.$bvToast.toast("This key already exists",{title:"Error",variant:"danger",autoHideDelay:3e3,solid:!0})}},addWhat:function(){if(this.newWhat)return this.whats.push(k.a.camelCase(this.newWhat)),this.newWhat=""},copyToClipboard:function(){return window.navigator.clipboard.writeText(this.code),this.$bvToast.toast("Copied ".concat(this.format," code to clipboard"),{title:"Copied!",variant:"success",autoHideDelay:1e3})},generate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.for;return t&&(this.whats=t),n&&(this.forWhat=n),k.a.isArray(this.whats)||(this.whats=[t]),w("whats",this.whats),this.$refs.generateButton.scrollIntoView(),this.try("generating",Object(h.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://ideality.app/api/polygon","/generate"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({what:this.whats,for:this.forWhat,openAIkey:this.openAIkey})});case 2:return t.next=4,t.sent.json();case 4:return e=t.sent,this.generated=JSON.stringify(e,null,2),this.$nextTick((function(){return n.$refs.generated.scrollIntoView()})),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t,this)}))))}},watch:{pickedExample:function(){return this.generate()},generated:function(){var t=this;return this.justGenerated=!0,setTimeout((function(){return t.justGenerated=!1}),500),this.$nextTick((function(){return window.hljs.highlightAll()}))},code:function(){return this.$nextTick((function(){return window.hljs.highlightAll()}))}},mounted:function(){return window.generate=this.generate.bind(this),window.hljs=A.a}},I=E,F=(n(507),n(79)),component=Object(F.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column justify-content-center align-items-center",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?(e.preventDefault(),t.generate()):null}}},[e("b-container",[e("b-row",{staticClass:"justify-content-center align-items-center"},[e("img",{staticClass:"m-2",staticStyle:{width:"100px",height:"100px"},attrs:{src:"polygon.png",alt:"Polygon"}}),e("h1",{staticClass:"display-3 mt-3 text-center",staticStyle:{"font-size":"2em"}},[e("strong",[t._v("Polygon.  ")]),t._v("Add AI to your app with a few lines of code")])]),e("b-row",{staticClass:"lead pb-2 mb-2 border-bottom justify-content-center align-items-center",staticStyle:{"font-size":"0.8em"}},[e("span",{staticClass:"mx-1"},[t._v("Examples:")]),t._l(t.examples,(function(n,r){return e("div",{key:n.caption,staticClass:"mx-1"},[e("span",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:n.description,expression:"example.description",modifiers:{hover:!0,bottom:!0}}],class:t.hoveredExample===r?"text-primary":"",staticStyle:{cursor:"pointer"},attrs:{variant:"light",id:"example-"+r},on:{click:function(e){t.whats=n.whats,t.forWhat=n.forWhat,t.pickedExample=n,t.generated=!1},mouseover:function(e){t.hoveredExample=r},mouseout:function(e){t.hoveredExample=null}}},[e("span",[t._v(t._s(n.caption))])])])})),e("div",{staticClass:"mx-1"},[e("span",{staticClass:"strong",class:-1===t.hoveredExample?"text-primary":"",staticStyle:{cursor:"pointer"},attrs:{variant:"light",id:"example-random"},on:{click:t.generateExample,mouseover:function(e){t.hoveredExample=-1},mouseout:function(e){t.hoveredExample=null}}},[t.generatingExample?e("b-spinner",{attrs:{small:"",type:"grow",variant:"primary"}}):e("strong",[t._v("🪄 Example for your product")])],1),e("b-popover",{attrs:{target:"example-random",triggers:"hover",placement:"bottom"}},[e("p",{staticClass:"lead"},[t._v("Let’s come up with something especially for you!")]),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.generateExample.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"What is your product?"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-input",{attrs:{placeholder:"Or click 👉 for random example"},model:{value:t.exampleProduct,callback:function(e){t.exampleProduct=e},expression:"exampleProduct"}}),e("b-input-group-append",[e("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.generateExample}},[e("b-icon-arrow-right-circle",{staticStyle:{width:"1em"}})],1)],1)],1)],1)],1)],1)],1)],2),e("b-row",{staticClass:"justify-content-center align-items-center",staticStyle:{"font-size":"0.8em"}},[t.pickedExample?e("b-alert",{attrs:{show:"",dismissible:""},on:{dismissed:function(e){t.pickedExample=null}}},[e("strong",[t._v(t._s(t.pickedExample.caption)+"  ")]),t._v("for  "),e("strong",[t._v(t._s(t.pickedExample.product))]),t._v(": "+t._s(t.pickedExample.description))]):t._e()],1),e("b-row",{staticClass:"justify-content-between mt-2"},[e("b-col",{staticClass:"mt-2 col-12",class:t.generated?"col-lg-4":"col-lg-6"},[e("h2",{staticClass:"lead strong"},[t._v("What do you want to generate?")]),e("div",{staticClass:"d-flex flex-wrap align-items-center",staticStyle:{"font-size":"0.8em"}},[t._l(t.whats,(function(n){return e("div",{key:n,staticClass:"input-group-text m-1 p-1",staticStyle:{"font-size":"1em",height:"2.5em"}},[e("strong",[t._v(t._s(n))]),e("b-button",{staticClass:"text-muted p-0 px-1",staticStyle:{background:"transparent",border:"none","font-size":"0.8em"},attrs:{size:"sm",variant:"light"},on:{click:function(e){t.whats=t.whats.filter((function(t){return t!==n}))}}},[e("b-icon-x-circle",{staticStyle:{width:"0.6em"}})],1)],1)})),e("b-input",{staticClass:"m-1",staticStyle:{width:"120px","font-size":"1em",height:"2em"},attrs:{placeholder:"What else?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addWhat.apply(null,arguments))},blur:t.addWhat},model:{value:t.newWhat,callback:function(e){t.newWhat=e},expression:"newWhat"}})],2),e("b-form-invalid-feedback",{attrs:{state:t.whats.length>0}},[t._v("Please add at least one thing to generate")]),e("p",{staticClass:"lead strong mt-2 mb-1"},[t._v("For what?")]),e("div",{staticClass:"d-flex flex-wrap align-items-center",staticStyle:{"font-size":"0.8em"}},t._l(t.forWhat,(function(n,r){return e("b-input-group",{key:r,staticClass:"m-1",attrs:{size:"sm"}},[e("b-input-group-prepend",{attrs:{id:"for-"+r}},[e("b-input-group-text",{staticStyle:{"font-size":"1em"}},[e("strong",[t._v(t._s(r))])])],1),e("b-popover",{attrs:{target:"for-"+r,triggers:"hover",placement:"bottom"},on:{shown:function(e){return t.focusAndSelect(t.$refs["newKey-"+r][0])},hidden:t.returnFocus}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.renameForWhat(r,t.$refs["newKey-"+r][0].vModelValue)}}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-input",{ref:"newKey-"+r,refInFor:!0,attrs:{value:r}}),e("b-input-group-append",[e("b-button",{attrs:{type:"submit",variant:"outline-secondary"}},[e("b-icon-check")],1)],1)],1)],1)],1),e("b-input",{staticClass:"pt-1",staticStyle:{"font-size":"1em"},attrs:{placeholder:"For what?"},model:{value:t.forWhat[r],callback:function(e){t.$set(t.forWhat,r,e)},expression:"forWhat[key]"}}),e("b-input-group-append",[e("b-button",{staticStyle:{"font-size":"1em"},attrs:{variant:"outline-secondary"},on:{click:function(e){return t.deleteForWhat(r)}}},[e("b-icon-x-circle",{staticStyle:{width:"0.6em"}})],1)],1),e("b-form-invalid-feedback",{attrs:{state:!!t.forWhat[r]}},[t._v("Please add a value")])],1)})),1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.addForWhat.apply(null,arguments)}}},[e("b-input-group",{staticClass:"mt-2",staticStyle:{width:"150px","font-size":"0.8em"},attrs:{size:"sm"}},[e("b-input",{staticStyle:{"font-size":"1em"},attrs:{placeholder:"E.g. tone of voice"},model:{value:t.newForWhatKey,callback:function(e){t.newForWhatKey=e},expression:"newForWhatKey"}}),e("b-input-group-append",[e("b-button",{staticStyle:{"font-size":"1em"},attrs:{type:"submit",variant:"outline-secondary",disabled:!t.newForWhatKey}},[e("b-icon-plus")],1)],1)],1)],1),e("div",{staticClass:"mt-3"},[e("b-form-group",{staticClass:"text-muted",staticStyle:{"font-size":"0.7em"},attrs:{label:"OpenAI API key"},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("We don’t store "),e("a",{attrs:{href:"https://beta.openai.com/account/api-keys",target:"_blank"}},[t._v("your key")]),t._v(", it’s only used to make requests to OpenAI’s API."),e("b-form-invalid-feedback",{attrs:{state:!!t.openAIkey}},[t._v("Please add your OpenAI API key")])]},proxy:!0}])},[e("b-input",{staticStyle:{"font-size":"1em"},attrs:{type:"password",placeholder:"sk-..."},model:{value:t.openAIkey,callback:function(e){t.openAIkey=e},expression:"openAIkey"}})],1)],1)],1),e("b-col",{staticClass:"mt-2 col-12",class:t.generated?"col-lg-4":"col-lg-6"},[e("h2",{staticClass:"lead strong"},[t._v("Here’s your code:")]),e("div",{staticClass:"rounded-top"},[e("pre",{staticClass:"mb-0"},[e("code",{class:"language-".concat(t.languageForFormat[t.format]),staticStyle:{"font-size":"0.6em","white-space":"pre-wrap"},domProps:{textContent:t._s(t.obfuscatedCode)}})])]),e("div",{staticClass:"d-flex justify-content-between"},[e("b-button-group",t._l(t.formats,(function(n){return e("b-button",{key:n,staticStyle:{"border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{size:"sm",variant:n===t.format?"secondary":"outline-secondary"},on:{click:function(e){t.format=n}}},[t._v(t._s(n))])})),1),e("b-button",{staticStyle:{"border-top-left-radius":"0","border-top-right-radius":"0"},attrs:{variant:"outline-secondary",size:"sm"},on:{click:t.copyToClipboard}},[e("b-icon-clipboard",{staticStyle:{width:"0.6em"}})],1)],1),e("b-button",{ref:"generateButton",staticClass:"mt-2",attrs:{block:"",type:"submit",variant:t.generating?"light":"primary",disabled:t.generating||!t.openAIkey||!t.whats.length||!t.forWhatValid,size:"lg"},on:{click:function(e){return t.generate()}}},[t.generating?e("span",[e("b-spinner",{staticClass:"mr-2",attrs:{small:""}}),t._v("Generating...")],1):e("span",[e("b-icon",{attrs:{icon:t.generated?"arrow-clockwise":"play"}}),t._v(t._s(t.generated?"Try again":"Try it!"))],1)]),e("span",{staticClass:"text-muted text-center small d-none d-lg-block"},[t._v("( Shift+Enter )")])],1),t.generated?e("b-col",{ref:"generated",staticClass:"mt-2 col-12 col-lg-4 pb-5 pb-lg-0"},[e("h2",{staticClass:"lead strong"},[t._v("Here’s the response JSON:")]),e("div",{class:t.justGenerated?"bg-success":"bg-dark"},[e("pre",[e("code",{staticClass:"language-json",staticStyle:{"white-space":"pre-wrap","font-size":"0.9em",height:"300px","overflow-y":"auto"},domProps:{textContent:t._s(t.generated)}})])])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);