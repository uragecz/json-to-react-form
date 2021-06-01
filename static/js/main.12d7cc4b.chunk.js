(this["webpackJsonpjson-to-react-form-example"]=this["webpackJsonpjson-to-react-form-example"]||[]).push([[0],{128:function(e,t){},159:function(e,t){},164:function(e,t,r){"use strict";r.r(t);r(89);var o=r(0),n=r.n(o),l=r(20),a=r.n(l),u=r(1),i=r(5),c=r(51),s=r(6),m=r(8),d=r(9),p=r(87),f=r(85),b=r.n(f);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var g=Object(s.a)("div",{target:"e137tokr0"})("display:flex;",m.b,";",m.j,";",m.h,";",m.a,";",m.e,";",m.g,";"),h=function(e,t){if(null==t)return{};var r=v({},t,{pattern:t.pattern&&v({},t.pattern,{value:new RegExp(t.pattern.value,"i")})});if(t.validate&&t.validate.sameAs){var o=t.validate.sameAs;r=v({},r,{validate:{sameAs:function(t){return e(o.value)===t||o.message}}})}return r},y=Object(s.a)("span",{target:"e1e0jys40"})(m.h,";",m.a,";",m.f,";",m.c,";",m.d,";",m.i,";");y.displayName="Text";var C=function(e){var t=e.children;return n.a.createElement(S,null,t)},S=Object(s.a)(y,{target:"esshaic0"})({name:"1k66fwo",styles:"font-size:1.5rem;font-weight:700"}),x=function(e){var t=e.children,r=e.input,o=e.form,l=e.onButtonClick,a=e.onInputChange,u=e.customStyle,i=e.isSubmitLoading,s=o.register,m=o.getValues,d=r.type,p=r.disabled,f=r.component,b=r.validation,y=r.placeholder,S=r.hidden,x=r.title,E=r.options,j=r.defaultValue,O=r.componentProps,k=r.customProps,w=r.name,B=function(){var e={};if("Button"!==f){var t=s(w,h(m,b));e=v({placeholder:y,type:d,disabled:"true"===p,defaultValue:j},t,{onChange:function(e){null===a||void 0===a||a(e.target.value,w),t.onChange(e)}})}switch(f){case"Button":return{buttonProps:{type:d,disabled:"true"===p||i,title:x||"",isLoading:i,onClick:function(e){return null===l||void 0===l?void 0:l(e,w)}}};case"TextInput":case"TextArea":return{inputProps:v({},e,{onChange:function(e){return null===a||void 0===a?void 0:a(e.target.value,w)}})};case"Checkbox":return{inputProps:v({},e,{onChange:function(e){return null===a||void 0===a?void 0:a(e.target.checked,w)}})};case"SelectInput":return{inputProps:v({},e,{onChange:function(e){var t=e.value;return null===a||void 0===a?void 0:a(t,w)},options:E})};default:return{}}};return n.a.createElement(g,{display:S?"none":"flex",flex:1},function(){switch(f){case"Title":return n.a.createElement(C,null,x);case"SelectInput":var e=function(){var e=null;return null!==E&&void 0!==E&&E.length&&j&&(E[0].options?E.map((function(t){t.options.map((function(t){t.value===j&&(e=t)}))})):e=E.find((function(e){return e.value===j}))),e}();return n.a.createElement(c.a,{name:w,rules:h(m,b),defaultValue:e,control:o.control,render:function(r){var l=r.field;return n.a.cloneElement(t,v({},O,{formProps:{inputProps:v({defaultValue:e},B().inputProps,l),form:o,customStyle:u,customProps:k}}))}});default:return n.a.cloneElement(t,v({},O,{formProps:v({form:o,customStyle:u},B(),{customProps:k})}))}}())},E=n.a.memo((function(e){var t=e.layout,r=e.children,o=e.label,l=e.labelStyle,a=e.unit,u=e.labelPosition,i=void 0===u?"left":u;return n.a.createElement(g,{flex:1,mb:4,flexDirection:function(e){switch(e){case"top":return"column";case"bottom":return"column-reverse";case"right":return"row-reverse";default:return["column","row"]}}(i),alignItems:"center"},n.a.createElement(g,{flex:t[0],justifyContent:"left"===i?"flex-end":"flex-start",mr:"left"===i?3:0,ml:"right"===i?3:0},!!o&&n.a.createElement(y,{css:l,textAlign:"end"},o)),n.a.createElement(g,{flex:t[1]},r,a&&n.a.createElement(y,{css:l},a)))})),j=Object(s.a)("span",{target:"e18ib12z0"})("position:absolute;bottom:-14px;left:0;font-size:0.7rem;color:",(function(e){return e.customStyle.errorColor}),";");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var k=Object(o.createElement)("circle",{cx:12.5,cy:12.5,r:10.5,fill:"#D22630"}),w=Object(o.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.657 8.756l-1.414-1.414-3.536 3.536-3.536-3.536-1.414 1.414 3.536 3.536-3.536 3.536 1.415 1.414 3.535-3.536 3.536 3.536 1.414-1.415-3.536-3.535 3.536-3.536z",fill:"#fff"});function B(e){return Object(o.createElement)("svg",O({width:25,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),k,w)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var z=Object(o.createElement)("path",{d:"M508.177 245.995C503.607 240.897 393.682 121 256 121S8.394 240.897 3.823 245.995a15.002 15.002 0 000 20.01C8.394 271.103 118.32 391 256 391s247.606-119.897 252.177-124.995a15.004 15.004 0 000-20.01zM256 361c-57.891 0-105-47.109-105-105s47.109-105 105-105 105 47.109 105 105-47.109 105-105 105z"}),I=Object(o.createElement)("path",{d:"M271 226c0-15.09 7.491-28.365 18.887-36.53C279.661 184.235 268.255 181 256 181c-41.353 0-75 33.647-75 75s33.647 75 75 75c37.024 0 67.668-27.034 73.722-62.358C299.516 278.367 271 255.522 271 226z"});function T(e){return Object(o.createElement)("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),z,I)}var R=Object(s.a)("input",{target:"e1u0huvs3"})("padding:10.5px 14px;width:100%;border-width:1px;border-style:solid;border-color:",(function(e){var t=e.error,r=e.customStyle;return t?r.errorColor:r.inputBorderColor}),";&:hover{border-color:",(function(e){var t=e.error,r=e.customStyle;return t?r.errorColor:Object(d.a)(.1,r.inputBorderColor)}),";}&:focus{border-color:",(function(e){var t=e.customStyle;return Object(d.a)(.1,t.inputBorderColor)}),";}border-radius:",(function(e){return e.customStyle.borderRadius}),";background-color:",(function(e){return e.customStyle.inputBackgroundColor}),";outline:none;"),A=Object(s.a)("button",{target:"e1u0huvs2"})("position:absolute;top:0;right:0;bottom:0;width:3rem;display:flex;align-items:center;justify-content:center;background-color:transparent;border:none;svg{width:20px;height:20px;fill:",(function(e){var t=e.customStyle;return Object(d.a)(.5,t.inputBorderColor)}),";}"),V=Object(s.a)("span",{target:"e1u0huvs1"})("position:absolute;bottom:-14px;left:0;font-size:0.7rem;color:",(function(e){return e.customStyle.errorColor}),";"),M=Object(s.a)("div",{target:"e1u0huvs0"})({name:"1gl7ght",styles:"position:absolute;top:0.5rem;right:0.5rem"}),q=function(e){var t=e.html;if(null==t)return null;var r,o=b()((r=t)?r.replace(/(\s|^)(a|i|k|o|s|u|v|z)(\s(a|i|k|o|s|u|v|z))?(\s+)/gim,"$1$2$3\xa0"):"");return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})},D=Object(s.a)("span",{target:"e99vfgt2"})("position:absolute;top:50%;left:0;width:1.25rem;height:1.25rem;border:",(function(e){var t=e.error,r=e.customStyle;return"1px solid "+(t?r.errorColor:r.inputBorderColor)}),";border-radius:",(function(e){return e.customStyle.borderRadius}),";background-color:",(function(e){return e.customStyle.inputBackgroundColor}),";transform:translate(0, -50%);&:hover{border:",(function(e){var t=e.error,r=e.customStyle;return"1px solid "+(t?r.errorColor:Object(d.a)(.1,r.inputBorderColor))}),";}::after{content:'';position:absolute;display:none;}"),F=Object(s.a)("label",{target:"e99vfgt1"})("position:relative;display:block;padding-left:2rem;font-size:1rem;cursor:pointer;user-select:none;input{position:absolute;opacity:0;width:0;height:0;cursor:pointer;}input:checked~",D,"{border:none;background-color:",(function(e){return e.customStyle.checkboxActiveColor}),";}",D,"{::after{top:0.25rem;left:33%;width:0.25rem;height:0.5rem;border:solid white;border-width:0 0.125rem 0.125rem 0;transform:rotate(45deg);}}input:checked~",D,"{::after{display:block;}}"),J=Object(s.a)("span",{target:"e99vfgt0"})("position:absolute;top:42px;left:0;font-size:0.7rem;color:",(function(e){return e.customStyle.errorColor}),";"),L=Object(s.a)("button",{target:"e4qf9y0"})("display:flex;width:100%;padding:1rem 2rem;align-items:center;justify-content:center;font-weight:700;font-size:1rem;text-align:center;border-style:solid;border-width:1px;border-radius:",(function(e){return e.customStyle.borderRadius}),";border-color:",(function(e){return e.customStyle.buttonBorderColor}),";background-color:",(function(e){return e.customStyle.buttonBackgroundColor}),";color:",(function(e){return e.customStyle.buttonTextColor}),";&:hover{background-color:",(function(e){var t=e.customStyle;return Object(d.a)(.1,t.buttonBackgroundColor)}),";}cursor:pointer;"),N=Object(s.a)("textarea",{target:"eo0bavy1"})("width:100%;height:2.5rem;padding:1rem;line-height:1.5rem;border:1px solid ",(function(e){var t=e.error,r=e.customStyle;return t?r.errorColor:r.inputBorderColor}),";&:focus{border-color:",(function(e){var t=e.customStyle;return Object(d.a)(.1,t.inputBorderColor)}),";}&:hover{border-color:",(function(e){var t=e.error,r=e.customStyle;return t?r.errorColor:Object(d.a)(.1,r.inputBorderColor)}),";}border-radius:",(function(e){return e.customStyle.borderRadius}),";background-color:",(function(e){return e.customStyle.inputBackgroundColor}),";outline:none;&::placeholder{font-size:1rem;}"),$=Object(s.a)("span",{target:"eo0bavy0"})("position:absolute;bottom:-16px;left:0;font-size:0.7rem;color:",(function(e){return e.customStyle.errorColor}),";"),_="0.25rem",G="#E73C45",H="#000000",W="#033196",K="transparent",Q="#ffffff",U="#e1e5ed",X="#ffffff",Y="#E73C45",Z={TextInput:function(e){var t=e.formProps,r=Object(o.useState)(!1),l=r[0],a=r[1],i=t.inputProps,c=t.form,s=t.customStyle,m=i.type,d=i.name,p=c.formState.errors[d];return n.a.createElement(g,{flex:1,position:"relative"},n.a.createElement(R,Object.assign({},i,{customStyle:s,css:Object(u.b)("padding-right:","password"===m?5:0,";",""),type:"password"===m?l?"text":"password":m,error:Boolean(p)})),"password"===m&&n.a.createElement(A,{customStyle:s,type:"button",onClick:function(){return a((function(e){return!e}))}},n.a.createElement(T,null)),p&&n.a.createElement(n.a.Fragment,null,n.a.createElement(M,null,n.a.createElement(B,null)),n.a.createElement(V,{customStyle:s},p.message)))},SelectInput:function(e){var t=e.formProps,r=t.inputProps,o=t.customStyle,l=t.form.formState.errors[r.name],a={container:function(e){return v({},e,{flex:1})},menu:function(e){return v({},e,{zIndex:2,border:"1px solid "+Object(d.a)(.1,o.inputBorderColor)})},control:function(e,t){return v({},e,{borderWidth:1,borderStype:"solid",borderColor:l?o.errorColor:t.isFocused?Object(d.a)(.1,o.inputBorderColor):o.inputBorderColor,boxShadow:"none","&:hover":{boxShadow:"none",borderColor:l?o.errorColor:Object(d.a)(.1,o.inputBorderColor)}})},option:function(e,t){return v({},e,{backgroundColor:t.isSelected?o.buttonBackgroundColor:t.isFocused?Object(d.b)(.6,o.buttonBackgroundColor):o.inputBackgroundColor})}};return n.a.createElement(g,{flex:1,position:"relative"},n.a.createElement(p.a,Object.assign({},r,{styles:a})),l&&n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{customStyle:o},l.message)))},Checkbox:function(e){var t=e.formProps,r=t.inputProps,o=t.form,l=t.customStyle,a=r.label,u=r.name,i=o.formState.errors[u];return n.a.createElement(F,{customStyle:l},null!=a&&n.a.createElement(q,{html:a}),n.a.createElement("input",Object.assign({},r,{type:"checkbox"})),n.a.createElement(D,{error:Boolean(i),customStyle:l}),i&&n.a.createElement(J,{customStyle:l},i.message))},Button:function(e){var t=e.formProps,r=t.buttonProps,o=t.customStyle,l=r.title;return n.a.createElement(L,Object.assign({customStyle:o},r),n.a.createElement(y,null,l))},TextArea:function(e){var t=e.formProps,r=t.inputProps,o=t.form,l=t.customStyle,a=o.formState.errors[r.name];return n.a.createElement(g,{flex:1,alignSelf:"stretch",position:"relative"},n.a.createElement(N,Object.assign({style:{height:"150px"},rows:5,customStyle:l},r,{error:!!a})),a&&n.a.createElement($,{customStyle:l},a.message))},Title:C},ee=n.a.memo((function(e){var t=e.inputs,r=e.onSubmit,o=e.layout,l=void 0===o?[3,7]:o,a=e.form,u=e.onInputChange,s=e.onButtonClick,m=e.layoutComponent,d=e.components,p=void 0===d?{}:d,f=e.customStyle,b=e.desktopBreakpoint,h=e.formName,y=e.fields,C=a||Object(c.b)({mode:"onBlur"}),S=C.watch,j=C.handleSubmit,O={borderRadius:(null===f||void 0===f?void 0:f.borderRadius)||_,errorColor:(null===f||void 0===f?void 0:f.errorColor)||G,labelColor:(null===f||void 0===f?void 0:f.labelColor)||H,buttonBackgroundColor:(null===f||void 0===f?void 0:f.buttonBackgroundColor)||W,buttonBorderColor:(null===f||void 0===f?void 0:f.buttonBorderColor)||K,buttonTextColor:(null===f||void 0===f?void 0:f.buttonTextColor)||Q,inputBorderColor:(null===f||void 0===f?void 0:f.inputBorderColor)||U,inputBackgroundColor:(null===f||void 0===f?void 0:f.inputBackgroundColor)||X,checkboxActiveColor:(null===f||void 0===f?void 0:f.checkboxActiveColor)||Y},k=function(e,t,r){return r?{name:h+"."+t+"."+e,defaultValue:r.value}:{}};if(null==t)return null;var w={},B=function(e){return m?n.a.createElement(m,v({},e)):n.a.createElement(E,Object.assign({},e))};t.map((function(e){e.conditionalChildrenRender&&e.name&&(w[e.name]=S(e.name))}));var P=function(e,t,r){var o=e.component?p[e.component]||Z[e.component]:null;return n.a.createElement(B,{layout:l,label:e.label,unit:e.unit},n.a.createElement(x,{onInputChange:u,onButtonClick:s,input:v({},e,k(e.name,t,r)),form:C,customStyle:O},o?n.a.createElement(o):""))},z=function e(t,r,o){return t.sort((function(e,t){return(e.order||0)-(t.order||0)})).map((function(t,l){if(t.children&&t.conditionalChildrenRender)return n.a.createElement(n.a.Fragment,{key:""+t.name+t.label+"_"+l},P(t,r,o),w[t.name]?e(t.children,r,o):null);if(t.children){var a=t.children.sort((function(e,t){return(e.order||0)-(t.order||0)}));return n.a.createElement(g,{flexDirection:["column","row"],alignItems:"center",key:"form-"+l,justifyContent:t.align||"space-between"},a.map((function(t,l){return n.a.createElement(g,{mr:[0,l<a.length-1?4:0],mb:[l<a.length-1?3:0,0],key:"form-child-"+t.name+t.label},e([t],r,o))})))}return P(t,r,o)}))};return n.a.createElement(i.d,{theme:{breakpoints:[0,b||"52em"],space:[0,4,8,16,24,32]}},n.a.createElement(g,{flexDirection:"column",flex:1},n.a.createElement("form",{onSubmit:r&&j(r)},y?y.map((function(e,r){return n.a.createElement("div",{key:e.id},z(t,r,e))})):z(t,0))))})),te=function(e){var t=e.layout,r=void 0===t?[3,7]:t,n=e.inputs,l=e.customStyle,a=e.fields,u=e.onSubmit;return Object(o.createElement)(ee,{layout:r,inputs:n,customStyle:l,fields:a,onSubmit:u})},re=r(86),oe=function(){return n.a.createElement(te,{layout:[1,7],inputs:re,onSubmit:console.log})};a.a.render(n.a.createElement(oe,null),document.getElementById("root"))},67:function(e,t){},86:function(e){e.exports=JSON.parse('[{"component":"TextInput","name":"email","order":0,"label":"E-mail:","labelPosition":"top","type":"email","validation":{"required":"This field is required"}},{"component":"SelectInput","name":"country","type":"select","order":1.01,"label":"Country","options":[{"label":"Czech Republic","value":"cz"},{"label":"Germany","value":"de"}],"defaultValue":"yes","componentProps":{},"customProps":{},"validation":{"required":"This field is required"}},{"component":"TextArea","name":"info","labelPosition":"top","order":1.02,"label":"More info"},{"component":"Checkbox","name":"agreement","order":1.1,"label":"GDPR"},{"order":2,"align":"center","children":[{"component":"Button","name":"close","order":0,"title":"Close button"},{"component":"Button","name":"submit","order":1,"title":"Submit button"}]}]')},88:function(e,t,r){e.exports=r(164)},89:function(e,t,r){}},[[88,1,2]]]);
//# sourceMappingURL=main.12d7cc4b.chunk.js.map