(this["webpackJsonpjson-to-react-form-example"]=this["webpackJsonpjson-to-react-form-example"]||[]).push([[0],{114:function(e,t){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);n(68);var r=n(0),a=n.n(r),o=n(63),i=n.n(o),l=n(36),u=n(1),c=n.n(u),s=n(64),p=n(65),m=n.n(p);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f,v,b=function(e,t){if(null==t)return{};var n=d({},t,{pattern:t.pattern&&d({},t.pattern,{value:new RegExp(t.pattern.value,"i")})});if(t.validate&&t.validate.sameAs){var r=t.validate.sameAs;n=d({},n,{validate:{sameAs:function(t){return e(r.value)===t||r.message}}})}return n},h=function(e){var t=e.children,n=e.formProps.classes;return a.a.createElement("span",{className:c()("jtrf-title",null===n||void 0===n?void 0:n.title)},t)},E=function(e){var t=e.children,n=e.input,r=e.form,o=e.onButtonClick,i=e.onInputChange,u=e.isSubmitLoading,c=e.classes,s=r.register,p=r.getValues,m=n.component,f=n.validation,v=n.hidden,E=n.placeholder,_=n.type,g=n.disabled,j=n.title,y=n.options,C=n.defaultValue,x=n.componentProps,N=n.customProps,P=n.text,w=n.name,O={placeholder:E,type:_,name:w,disabled:"true"===g},k=function(e){switch(m){case"SelectInput":return d({},O,e,{type:O.type||"select",options:y,onChange:function(t){e.onChange(t),null===i||void 0===i||i(function(e){return e.value?e.value:e.target.value}(t),w)}});case"DatePicker":return d({},O,e,{type:O.type||"date",onChange:function(t){e.onChange(t),null===i||void 0===i||i(t,w)}});default:return{}}},S=function(){if("Button"===m)return{title:j||"",isLoading:u,buttonProps:d({},O,{disabled:O.disabled||u,onClick:function(e){null===o||void 0===o||o(e,w)}})};var e=s(w,d({},b(p,f),{shouldUnregister:!0}));switch(m){case"TextInput":case"TextArea":return{inputProps:d({},e,{onChange:function(t){null===i||void 0===i||i(t.target.value,w),e.onChange(t)}})};case"Checkbox":return{inputProps:d({},e,{onChange:function(t){null===i||void 0===i||i(t.target.checked,w),e.onChange(t)}}),text:P};default:return{}}};return a.a.createElement("div",{style:{display:v?"none":"flex",flex:1}},function(){switch(m){case"Title":return a.a.createElement(h,{formProps:{classes:c,form:r,customProps:N}},j);case"DatePicker":case"SelectInput":var e="SelectInput"===m?function(e,t){var n=null;return null!==e&&void 0!==e&&e.length&&t&&(e[0].options?e.map((function(e){e.options.map((function(e){e.value===t&&(n=e)}))})):n=e.find((function(e){return e.value===t}))),n}(y,C):C;return a.a.createElement(l.a,{name:w,rules:b(p,f),defaultValue:e,control:r.control,render:function(n){var o=n.field;return a.a.cloneElement(t,d({},x,{formProps:{inputProps:d({},k(o),{defaultValue:e}),form:r,customProps:N}}))}});default:return a.a.cloneElement(t,d({},x,{formProps:d({form:r},S(),{customProps:N})}))}}())},_=a.a.memo((function(e){var t=e.layout,n=e.children,r=e.label,o=e.unit,i=e.labelPosition,l=void 0===i?"left":i;return a.a.createElement("div",{className:c()("jtrf-input-layout"),style:{flexDirection:function(e){switch(e){case"top":return"column";case"bottom":return"column-reverse";case"right":return"row-reverse";default:return""}}(l)}},a.a.createElement("div",{className:c()("jtrf-input-layout__label-container"),style:{"--label-flex":t[0],"--label-align":"left"===l?"flex-end":"flex-start","--label-margin":"left"===l?"0 16px 0 0":"0 0 0 16px"}},!!r&&a.a.createElement("span",{className:c()("jtrf-input-layout__label")},r)),a.a.createElement("div",{className:c()("jtrf-input-layout__input-container"),style:{"--input-flex":t[1]}},n,o&&a.a.createElement("span",{className:c()("jtrf-input-layout__unit")},o)))}));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e){return Object(r.createElement)("svg",g({width:16,height:16,viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),f||(f=Object(r.createElement)("circle",{cx:12.5,cy:12.5,r:10.5,fill:"#D22630"})),v||(v=Object(r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.657 8.756l-1.414-1.414-3.536 3.536-3.536-3.536-1.414 1.414 3.536 3.536-3.536 3.536 1.415 1.414 3.535-3.536 3.536 3.536 1.414-1.415-3.536-3.535 3.536-3.536z",fill:"#fff"})))}var y,C;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e){return Object(r.createElement)("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),y||(y=Object(r.createElement)("path",{d:"M508.177 245.995C503.607 240.897 393.682 121 256 121S8.394 240.897 3.823 245.995a15.002 15.002 0 000 20.01C8.394 271.103 118.32 391 256 391s247.606-119.897 252.177-124.995a15.004 15.004 0 000-20.01zM256 361c-57.891 0-105-47.109-105-105s47.109-105 105-105 105 47.109 105 105-47.109 105-105 105z"})),C||(C=Object(r.createElement)("path",{d:"M271 226c0-15.09 7.491-28.365 18.887-36.53C279.661 184.235 268.255 181 256 181c-41.353 0-75 33.647-75 75s33.647 75 75 75c37.024 0 67.668-27.034 73.722-62.358C299.516 278.367 271 255.522 271 226z"})))}var P=function(e){var t=e.html,n=e.style;if(null==t)return null;var r,o=m()((r=t)?r.replace(/(\s|^)(a|i|k|o|s|u|v|z)(\s(a|i|k|o|s|u|v|z))?(\s+)/gim,"$1$2$3\xa0"):"");return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:o},style:n})},w={TextInput:function(e){var t,n=e.formProps,o=Object(r.useState)(!1),i=o[0],l=o[1],u=n.inputProps,s=n.form,p=n.classes,m=u.type,d=u.name,f=s.formState.errors[d];return a.a.createElement("div",{className:"jtrf-input-container"},a.a.createElement("input",Object.assign({},u,{className:c()("jtrf-input-container__input","jtrf-input-container__input--text-input",null===p||void 0===p?void 0:p.input,(t={"jtrf-input-container__input--error":!!f},t[(null===p||void 0===p?void 0:p.inputError)||""]=!!f&&(null===p||void 0===p?void 0:p.inputError),t)),type:"password"===m?i?"text":"password":m})),"password"===m&&a.a.createElement("button",{className:c()("jtrf-input-container__pswd-button",null===p||void 0===p?void 0:p.pswdButton),type:"button",onClick:function(){return l((function(e){return!e}))}},a.a.createElement(N,null)),f&&a.a.createElement("div",{className:c()("jtrf-input-container__error-container",null===p||void 0===p?void 0:p.errorContainer)},a.a.createElement(j,{className:c()("jtrf-input-container__error-icon",null===p||void 0===p?void 0:p.errorIcon)}),a.a.createElement("span",{className:c()("jtrf-input-container__error-message",null===p||void 0===p?void 0:p.errorMessage)},f.message)))},SelectInput:function(e){var t,n=e.formProps,r=n.inputProps,o=n.form,i=n.classes,l=o.formState.errors[r.name];return a.a.createElement("div",{className:"jtrf-input-container"},a.a.createElement("select",Object.assign({},r,{className:c()("jtrf-input-container__input","jtrf-input-container__input--select",null===i||void 0===i?void 0:i.input,(t={"jtrf-input-container__input--error":!!l},t[(null===i||void 0===i?void 0:i.inputError)||""]=!!l&&(null===i||void 0===i?void 0:i.inputError),t))}),function(){var e=r.options;if(null!==e&&void 0!==e&&e[0].options){var t=null===e||void 0===e?void 0:e.map((function(e){return[].concat(e.options)}));return Object(s.a)(t)}return r.options}().map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.label)}))),l&&a.a.createElement("div",{className:c()("jtrf-input-container__error-container",null===i||void 0===i?void 0:i.errorContainer)},a.a.createElement(j,{className:c()("jtrf-input-container__error-icon",null===i||void 0===i?void 0:i.errorIcon)}),a.a.createElement("span",{className:c()("jtrf-input-container__error-message",null===i||void 0===i?void 0:i.errorMessage)},l.message)))},Checkbox:function(e){var t,n=e.formProps,r=n.inputProps,o=n.form,i=n.classes,l=n.text,u=r.name,s=o.formState.errors[u];return a.a.createElement("div",{className:"jtrf-input-container"},a.a.createElement("input",Object.assign({},r,{id:r.name,type:"checkbox",onChange:console.log,className:c()("jtrf-input-container__input","jtrf-input-container__input--checkbox",null===i||void 0===i?void 0:i.input,(t={"jtrf-input-container__input---error":!!s},t[(null===i||void 0===i?void 0:i.inputError)||""]=!!s&&(null===i||void 0===i?void 0:i.inputError),t))})),a.a.createElement("label",{htmlFor:r.name},a.a.createElement(P,{html:l,style:{marginLeft:"16px"}})),s&&a.a.createElement("div",{className:c()("jtrf-input-container__error-container",null===i||void 0===i?void 0:i.errorContainer)},a.a.createElement(j,{className:c()("jtrf-input-container__error-icon",null===i||void 0===i?void 0:i.errorIcon)}),a.a.createElement("span",{className:c()("jtrf-input-container__error-message",null===i||void 0===i?void 0:i.errorMessage)},s.message)))},Button:function(e){var t=e.formProps,n=t.buttonProps,r=t.title,o=t.classes;return a.a.createElement("button",Object.assign({},n,{className:c()("jtrf-button",null===o||void 0===o?void 0:o.button)}),r)},TextArea:function(e){var t,n=e.formProps,r=n.inputProps,o=n.form,i=n.classes,l=o.formState.errors[r.name];return a.a.createElement("div",{className:"jtrf-input-container"},a.a.createElement("textarea",Object.assign({},r,{className:c()("jtrf-input-container__input","jtrf-input-container__input--textarea",null===i||void 0===i?void 0:i.input,(t={"jtrf-input-container__input--error":!!l},t[(null===i||void 0===i?void 0:i.inputError)||""]=!!l&&(null===i||void 0===i?void 0:i.inputError),t)),style:{height:"150px"},rows:5})),l&&a.a.createElement("div",{className:c()("jtrf-input-container__error-container",null===i||void 0===i?void 0:i.errorContainer)},a.a.createElement(j,{className:c()("jtrf-input-container__error-icon",null===i||void 0===i?void 0:i.errorIcon)}),a.a.createElement("span",{className:c()("jtrf-input-container__error-message",null===i||void 0===i?void 0:i.errorMessage)},l.message)))},Title:h,DatePicker:function(e){var t,n=e.formProps,r=n.inputProps,o=n.form,i=n.classes,l=r.name,u=o.formState.errors[l];return a.a.createElement("div",{className:"jtrf-input-container"},a.a.createElement("input",Object.assign({},r,{className:c()("jtrf-input-container__input","jtrf-input-container__input--datepicker",null===i||void 0===i?void 0:i.input,(t={"jtrf-input-container__input--error":!!u},t[(null===i||void 0===i?void 0:i.inputError)||""]=!!u&&(null===i||void 0===i?void 0:i.inputError),t))})),u&&a.a.createElement("div",{className:c()("jtrf-input-container__error-container",null===i||void 0===i?void 0:i.errorContainer)},a.a.createElement(j,{className:c()("jtrf-input-container__error-icon",null===i||void 0===i?void 0:i.errorIcon)}),a.a.createElement("span",{className:c()("jtrf-input-container__error-message",null===i||void 0===i?void 0:i.errorMessage)},u.message)))}},O=a.a.memo((function(e){var t=e.inputs,n=e.onSubmit,r=e.layout,o=void 0===r?[3,7]:r,i=e.form,u=e.onInputChange,s=e.onButtonClick,p=e.layoutComponent,m=e.components,f=void 0===m?{}:m,v=e.formName,b=e.fields,h=e.classes,g=i||Object(l.b)({mode:"onBlur"}),j=g.watch,y=g.handleSubmit,C=function(e,t,n){return n?{name:v+"."+t+"."+e,defaultValue:n.value}:{}};if(null==t)return null;var x={},N=function(e){return p?a.a.createElement(p,d({},e)):a.a.createElement(_,Object.assign({},e))};t.map((function(e){e.conditionalChildrenRender&&e.name&&(x[e.name]=j(e.name))}));var P=function(e,t,n){var r=e.component?f[e.component]||w[e.component]:null;return a.a.createElement(N,{layout:o,label:e.label,unit:e.unit},a.a.createElement(E,{onInputChange:u,onButtonClick:s,classes:h,input:d({},e,C(e.name,t,n)),form:g},r?a.a.createElement(r):""))},O=function e(t,n,r){return t.sort((function(e,t){return(e.order||0)-(t.order||0)})).map((function(t,o){if(t.children&&t.conditionalChildrenRender)return a.a.createElement(a.a.Fragment,{key:""+t.name+t.label+"_"+o},P(t,n,r),x[t.name]?e(t.children,n,r):null);if(t.children){var i=t.children.sort((function(e,t){return(e.order||0)-(t.order||0)}));return a.a.createElement("div",{className:c()("jtrf-children-wrapper",null===h||void 0===h?void 0:h.childrenWrapper),key:"form-"+o,style:{justifyContent:t.align||"space-between"}},i.map((function(t){return a.a.createElement("div",{className:"jtrf-children-wrapper__child",key:"form-child-"+t.name+t.label},e([t],n,r))})))}return P(t,n,r)}))};return a.a.createElement("div",{className:"jtrf-form-container"},a.a.createElement("form",{onSubmit:n&&y(n)},b?b.map((function(e,n){return a.a.createElement("div",{key:e.id},O(t,n,e))})):O(t,0)))})),k=function(e){var t=e.layout,n=void 0===t?[3,7]:t,a=e.inputs,o=e.fields,i=e.onSubmit,l=e.components,u=e.onButtonClick,c=e.validationMode,s=e.onInputChange,p=e.layoutComponent,m=e.form,d=e.formName;return Object(r.createElement)(O,{layout:n,inputs:a,fields:o,onSubmit:i,components:l,onButtonClick:u,onInputChange:s,validationMode:c,layoutComponent:p,form:m,formName:d})},S=(n(119),n(66)),I=function(){return a.a.createElement(k,{layout:[3,7],inputs:S,onSubmit:console.log})};i.a.render(a.a.createElement(I,null),document.getElementById("root"))},29:function(e,t){},30:function(e,t){},51:function(e,t){},57:function(e,t){},66:function(e){e.exports=JSON.parse('[{"component":"TextInput","name":"email","order":0,"label":"E-mail:","labelPosition":"top","type":"email","validation":{"required":"This field is required"}},{"component":"SelectInput","name":"country","type":"select","order":1.01,"label":"Country","options":[{"label":"Czech Republic","value":"cz"},{"label":"Germany","value":"de"}],"defaultValue":"yes","componentProps":{},"customProps":{},"validation":{"required":"This field is required"}},{"component":"TextArea","name":"info","labelPosition":"top","order":1.02,"label":"More info"},{"component":"DatePicker","name":"dateFrom","order":0,"label":"Od:","validation":{"required":"This field is required"}},{"component":"Checkbox","name":"agreement","order":1.1,"text":"GDPR"},{"order":2,"align":"center","children":[{"component":"Button","name":"close","order":0,"title":"Close button"},{"component":"Button","name":"submit","order":1,"title":"Submit button"}]}]')},67:function(e,t,n){e.exports=n(120)},68:function(e,t,n){},95:function(e,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.6e8dd21b.chunk.js.map