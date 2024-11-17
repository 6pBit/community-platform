import{j as ie}from"./jsx-runtime-CexXSJP5.js";import{_ as q}from"./extends-CF3RwP-h.js";import{_ as he}from"./objectWithoutPropertiesLoose-CAYKN5F1.js";import{r as W,a as me}from"./index-BP8_t0zE.js";import{c as Ke,b as We}from"./index.esm-D0u3ndg0.js";import{B as Ee}from"./Button-B7QBvkxh.js";import{F as Te}from"./FieldTextarea-msSeWkcr.js";import{F as Ve,h as He}from"./theme-ui-components.esm-DCiJ1mMX.js";var ge={},Ye=/[.[\]]+/,Pe=function(e){if(null==e||!e.length)return[];if("string"!=typeof e)throw new Error("toPath() expects a string");return null==ge[e]&&(ge[e]=e.split(Ye).filter(Boolean)),ge[e]},j=function(e,t){for(var i=Pe(t),r=e,n=0;n<i.length;n++){var a=i[n];if(null==r||"object"!=typeof r||Array.isArray(r)&&isNaN(a))return;r=r[a]}return r};function Ge(e){var t=Je(e,"string");return"symbol"==typeof t?t:String(t)}function Je(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Qe=function e(t,i,r,n,a){if(i>=r.length)return n;var u=r[i];if(isNaN(u)){var o;if(null==t){var s,l=e(void 0,i+1,r,n,a);return void 0===l?void 0:((s={})[u]=l,s)}if(Array.isArray(t))throw new Error("Cannot set a non-numeric property on an array");var d=e(t[u],i+1,r,n,a);if(void 0===d){var c=Object.keys(t).length;if(void 0===t[u]&&0===c)return;return void 0!==t[u]&&c<=1?isNaN(r[i-1])||a?void 0:{}:(t[u],he(t,[u].map(Ge)))}return q({},t,((o={})[u]=d,o))}var f=Number(u);if(null==t){var m=e(void 0,i+1,r,n,a);if(void 0===m)return;var v=[];return v[f]=m,v}if(!Array.isArray(t))throw new Error("Cannot set a numeric property on an object");var b=e(t[f],i+1,r,n,a),S=[].concat(t);if(a&&void 0===b){if(S.splice(f,1),0===S.length)return}else S[f]=b;return S},H=function(e,t,i,r){if(void 0===r&&(r=!1),null==e)throw new Error("Cannot call setIn() with "+String(e)+" state");if(null==t)throw new Error("Cannot call setIn() with "+String(t)+" key");return Qe(e,0,Pe(t),i,r)},Oe="FINAL_FORM/form-error",ve="FINAL_FORM/array-error";function we(e,t){var i=e.errors,r=e.initialValues,n=e.lastSubmittedValues,a=e.submitErrors,u=e.submitFailed,o=e.submitSucceeded,s=e.submitting,l=e.values,d=t.active,c=t.blur,f=t.change,m=t.data,v=t.focus,b=t.modified,S=t.modifiedSinceLastSubmit,h=t.name,p=t.touched,g=t.validating,y=t.visited,E=j(l,h),F=j(i,h);F&&F[ve]&&(F=F[ve]);var O=a&&j(a,h),V=r&&j(r,h),k=t.isEqual(V,E),w=!F&&!O;return{active:d,blur:c,change:f,data:m,dirty:!k,dirtySinceLastSubmit:!(!n||t.isEqual(j(n,h),E)),error:F,focus:v,initial:V,invalid:!w,length:Array.isArray(E)?E.length:void 0,modified:b,modifiedSinceLastSubmit:S,name:h,pristine:k,submitError:O,submitFailed:u,submitSucceeded:o,submitting:s,touched:p,valid:w,value:E,visited:y,validating:g}}var Ne=["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","value","visited","validating"],J=function(e,t){if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(var n=Object.prototype.hasOwnProperty.bind(t),a=0;a<i.length;a++){var u=i[a];if(!n(u)||e[u]!==t[u])return!1}return!0};function xe(e,t,i,r,n,a){var u=!1;return n.forEach((function(n){r[n]&&(e[n]=t[n],(!i||(~a.indexOf(n)?!J(t[n],i[n]):t[n]!==i[n]))&&(u=!0))})),u}var Xe=["data"],Ze=function(e,t,i,r){var n={blur:e.blur,change:e.change,focus:e.focus,name:e.name};return xe(n,e,t,i,Ne,Xe)||!t||r?n:void 0},Be=["active","dirty","dirtyFields","dirtyFieldsSinceLastSubmit","dirtySinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitting","submitError","submitErrors","submitFailed","submitSucceeded","touched","valid","validating","values","visited"],_e=["touched","visited"];function Le(e,t,i,r){var n={};return xe(n,e,t,i,Be,_e)||!t||r?n:void 0}var je=function(e){var t,i;return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(!t||n.length!==t.length||n.some((function(e,i){return!J(t[i],e)})))&&(t=n,i=e.apply(void 0,n)),i}},pe=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},et="4.20.2",tt=function(e,t){return e===t},ue=function e(t){return Object.keys(t).some((function(i){var r=t[i];return!r||"object"!=typeof r||r instanceof Error?typeof r<"u":e(r)}))};function it(e){var t=e.active,i=e.dirtySinceLastSubmit,r=e.modifiedSinceLastSubmit,n=e.error,a=e.errors,u=e.initialValues,o=e.pristine,s=e.submitting,l=e.submitFailed,d=e.submitSucceeded,c=e.submitError,f=e.submitErrors,m=e.valid,v=e.validating,b=e.values;return{active:t,dirty:!o,dirtySinceLastSubmit:i,modifiedSinceLastSubmit:r,error:n,errors:a,hasSubmitErrors:!!(c||f&&ue(f)),hasValidationErrors:!(!n&&!ue(a)),invalid:!m,initialValues:u,pristine:o,submitting:s,submitFailed:l,submitSucceeded:d,submitError:c,submitErrors:f,valid:m,validating:v>0,values:b}}function ze(e,t,i,r,n,a){var u=n(i,r,t,a);return!!u&&(e(u),!0)}function Re(e,t,i,r,n){var a=e.entries;Object.keys(a).forEach((function(e){var u=a[Number(e)];if(u){var o=u.subscription,s=u.subscriber,l=u.notified;ze(s,o,t,i,r,n||!l)&&(u.notified=!0)}}))}function rt(e){if(!e)throw new Error("No config specified");var t=e.debug,i=e.destroyOnUnregister,r=e.keepDirtyOnReinitialize,n=e.initialValues,a=e.mutators,u=e.onSubmit,o=e.validate,s=e.validateOnBlur;if(!u)throw new Error("No onSubmit function specified");var l={subscribers:{index:0,entries:{}},fieldSubscribers:{},fields:{},formState:{dirtySinceLastSubmit:!1,modifiedSinceLastSubmit:!1,errors:{},initialValues:n&&q({},n),invalid:!1,pristine:!0,submitting:!1,submitFailed:!1,submitSucceeded:!1,resetWhileSubmitting:!1,valid:!0,validating:0,values:n?q({},n):{}},lastFormState:void 0},d=0,c=!1,f=!1,m=!1,v=0,b={},S=function(e,t,i){var r=i(j(e.formState.values,t));e.formState.values=H(e.formState.values,t,r)||{}},h=function(e,t,i){if(e.fields[t]){var r,n;e.fields=q({},e.fields,((r={})[i]=q({},e.fields[t],{name:i,blur:function(){return L.blur(i)},change:function(e){return L.change(i,e)},focus:function(){return L.focus(i)},lastFieldState:void 0}),r)),delete e.fields[t],e.fieldSubscribers=q({},e.fieldSubscribers,((n={})[i]=e.fieldSubscribers[t],n)),delete e.fieldSubscribers[t];var a=j(e.formState.values,t);e.formState.values=H(e.formState.values,t,void 0)||{},e.formState.values=H(e.formState.values,i,a),delete e.lastFormState}},p=function(e){return function(){if(a){for(var t={formState:l.formState,fields:l.fields,fieldSubscribers:l.fieldSubscribers,lastFormState:l.lastFormState},i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var u=a[e](r,t,{changeValue:S,getIn:j,renameField:h,resetFieldState:L.resetFieldState,setIn:H,shallowEqual:J});return l.formState=t.formState,l.fields=t.fields,l.fieldSubscribers=t.fieldSubscribers,l.lastFormState=t.lastFormState,E(void 0,(function(){F(),x()})),u}}},g=a?Object.keys(a).reduce((function(e,t){return e[t]=p(t),e}),{}):{},y=function(e){return Object.keys(e.validators).reduce((function(t,i){var r=e.validators[Number(i)]();return r&&t.push(r),t}),[])},E=function(e,t){if(c)return f=!0,void t();var i=l.fields,r=l.formState,n=q({},i),a=Object.keys(n);if(o||a.some((function(e){return y(n[e]).length}))){var u=!1;if(e){var s=n[e];if(s){var d=s.validateFields;d&&(u=!0,a=d.length?d.concat(e):[e])}}var m={},S={},h=[].concat(function(e){var t=[];if(o){var i=o(q({},l.formState.values));pe(i)?t.push(i.then(e)):e(i)}return t}((function(e){m=e||{}})),a.reduce((function(e,t){return e.concat(function(e,t){var i,r=[],n=y(l.fields[e]);return n.length&&(n.forEach((function(n){var a=n(j(l.formState.values,e),l.formState.values,0===n.length||3===n.length?we(l.formState,l.fields[e]):void 0);if(a&&pe(a)){l.fields[e].validating=!0;var u=a.then((function(i){l.fields[e].validating=!1,t(i)}));r.push(u)}else i||(i=a)})),t(i)),r}(t,(function(e){S[t]=e})))}),[])),p=h.length>0,g=++v,E=Promise.all(h).then(function(e){return function(t){return delete b[e],t}}(g));p&&(b[g]=E);var F=function(){var e=q({},u?r.errors:{},m),t=function(t){a.forEach((function(r){if(i[r]){var a=j(m,r),s=j(e,r),l=y(n[r]).length,d=S[r];t(r,l&&d||o&&a||(a||u?void 0:s))}}))};t((function(t,i){e=H(e,t,i)||{}})),t((function(t,i){if(i&&i[ve]){var r=j(e,t),n=[].concat(r);n[ve]=i[ve],e=H(e,t,n)}})),J(r.errors,e)||(r.errors=e),r.error=m[Oe]};if(F(),t(),p){l.formState.validating++,t();var O=function(){l.formState.validating--,t()};E.then((function(){v>g||F()})).then(O,O)}}else t()},F=function(e){if(!d){var t=l.fields,i=l.fieldSubscribers,r=l.formState,n=q({},t),a=function(e){var t=n[e],a=we(r,t),u=t.lastFieldState;t.lastFieldState=a;var o=i[e];o&&Re(o,a,u,Ze,void 0===u)};e?a(e):Object.keys(n).forEach(a)}},O=function(){Object.keys(l.fields).forEach((function(e){l.fields[e].touched=!0}))},V=function(){var e=l.fields,t=l.formState,i=l.lastFormState,r=q({},e),n=Object.keys(r),a=!1,u=n.reduce((function(e,i){return!r[i].isEqual(j(t.values,i),j(t.initialValues||{},i))&&(a=!0,e[i]=!0),e}),{}),o=n.reduce((function(e,i){var n=t.lastSubmittedValues||{};return r[i].isEqual(j(t.values,i),j(n,i))||(e[i]=!0),e}),{});t.pristine=!a,t.dirtySinceLastSubmit=!(!t.lastSubmittedValues||!Object.values(o).some((function(e){return e}))),t.modifiedSinceLastSubmit=!(!t.lastSubmittedValues||!Object.keys(r).some((function(e){return r[e].modifiedSinceLastSubmit}))),t.valid=!(t.error||t.submitError||ue(t.errors)||t.submitErrors&&ue(t.submitErrors));var s=it(t),d=n.reduce((function(e,t){return e.modified[t]=r[t].modified,e.touched[t]=r[t].touched,e.visited[t]=r[t].visited,e}),{modified:{},touched:{},visited:{}}),c=d.modified,f=d.touched,m=d.visited;return s.dirtyFields=i&&J(i.dirtyFields,u)?i.dirtyFields:u,s.dirtyFieldsSinceLastSubmit=i&&J(i.dirtyFieldsSinceLastSubmit,o)?i.dirtyFieldsSinceLastSubmit:o,s.modified=i&&J(i.modified,c)?i.modified:c,s.touched=i&&J(i.touched,f)?i.touched:f,s.visited=i&&J(i.visited,m)?i.visited:m,i&&J(i,s)?i:s},k=!1,w=!1,x=function e(){if(k)w=!0;else{if(k=!0,t&&t(V(),Object.keys(l.fields).reduce((function(e,t){return e[t]=l.fields[t],e}),{})),!(d||c&&m)){var i=l.lastFormState,r=V();r!==i&&(l.lastFormState=r,Re(l.subscribers,r,i,Le))}k=!1,w&&(w=!1,e())}};E(void 0,(function(){x()}));var L={batch:function(e){d++,e(),d--,F(),x()},blur:function(e){var t=l.fields,i=l.formState,r=t[e];r&&(delete i.active,t[e]=q({},r,{active:!1,touched:!0}),s?E(e,(function(){F(),x()})):(F(),x()))},change:function(e,t){var i=l.fields,r=l.formState;if(j(r.values,e)!==t){S(l,e,(function(){return t}));var n=i[e];n&&(i[e]=q({},n,{modified:!0,modifiedSinceLastSubmit:!!r.lastSubmittedValues})),s?(F(),x()):E(e,(function(){F(),x()}))}},get destroyOnUnregister(){return!!i},set destroyOnUnregister(e){i=e},focus:function(e){var t=l.fields[e];t&&!t.active&&(l.formState.active=e,t.active=!0,t.visited=!0,F(),x())},mutators:g,getFieldState:function(e){var t=l.fields[e];return t&&t.lastFieldState},getRegisteredFields:function(){return Object.keys(l.fields)},getState:function(){return V()},initialize:function(e){var t=l.fields,i=l.formState,n=q({},t),a="function"==typeof e?e(i.values):e;r||(i.values=a);var u=r?Object.keys(n).reduce((function(e,t){return n[t].isEqual(j(i.values,t),j(i.initialValues||{},t))||(e[t]=j(i.values,t)),e}),{}):{};i.initialValues=a,i.values=a,Object.keys(u).forEach((function(e){i.values=H(i.values,e,u[e])})),E(void 0,(function(){F(),x()}))},isValidationPaused:function(){return c},pauseValidation:function(e){void 0===e&&(e=!0),c=!0,m=e},registerField:function(e,t,r,n){void 0===r&&(r={}),l.fieldSubscribers[e]||(l.fieldSubscribers[e]={index:0,entries:{}});var a=l.fieldSubscribers[e].index++;l.fieldSubscribers[e].entries[a]={subscriber:je(t),subscription:r,notified:!1},l.fields[e]||(l.fields[e]={active:!1,afterSubmit:n&&n.afterSubmit,beforeSubmit:n&&n.beforeSubmit,blur:function(){return L.blur(e)},change:function(t){return L.change(e,t)},data:n&&n.data||{},focus:function(){return L.focus(e)},isEqual:n&&n.isEqual||tt,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,name:e,touched:!1,valid:!0,validateFields:n&&n.validateFields,validators:{},validating:!1,visited:!1});var u=!1,o=n&&n.silent,s=function(){o?F(e):(x(),F())};if(n){u=!(!n.getValidator||!n.getValidator()),n.getValidator&&(l.fields[e].validators[a]=n.getValidator);var d=void 0===j(l.formState.values,e);void 0!==n.initialValue&&d&&(void 0===j(l.formState.values,e)||j(l.formState.values,e)===j(l.formState.initialValues,e))&&(l.formState.initialValues=H(l.formState.initialValues||{},e,n.initialValue),l.formState.values=H(l.formState.values,e,n.initialValue),E(void 0,s)),void 0!==n.defaultValue&&void 0===n.initialValue&&void 0===j(l.formState.initialValues,e)&&d&&(l.formState.values=H(l.formState.values,e,n.defaultValue))}return u?E(void 0,s):s(),function(){var t=!1;l.fields[e]&&(t=!(!l.fields[e].validators[a]||!l.fields[e].validators[a]()),delete l.fields[e].validators[a]);var r=!!l.fieldSubscribers[e];r&&delete l.fieldSubscribers[e].entries[a];var n=r&&!Object.keys(l.fieldSubscribers[e].entries).length;n&&(delete l.fieldSubscribers[e],delete l.fields[e],t&&(l.formState.errors=H(l.formState.errors,e,void 0)||{}),i&&(l.formState.values=H(l.formState.values,e,void 0,!0)||{})),o||(t?E(void 0,(function(){x(),F()})):n&&x())}},reset:function(e){void 0===e&&(e=l.formState.initialValues),l.formState.submitting&&(l.formState.resetWhileSubmitting=!0),l.formState.submitFailed=!1,l.formState.submitSucceeded=!1,delete l.formState.submitError,delete l.formState.submitErrors,delete l.formState.lastSubmittedValues,L.initialize(e||{})},resetFieldState:function(e){l.fields[e]=q({},l.fields[e],{active:!1,lastFieldState:void 0,modified:!1,touched:!1,valid:!0,validating:!1,visited:!1}),E(void 0,(function(){F(),x()}))},restart:function(e){void 0===e&&(e=l.formState.initialValues),L.batch((function(){for(var t in l.fields)L.resetFieldState(t),l.fields[t]=q({},l.fields[t],{active:!1,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,touched:!1,valid:!0,validating:!1,visited:!1});L.reset(e)}))},resumeValidation:function(){c=!1,m=!1,f&&E(void 0,(function(){F(),x()})),f=!1},setConfig:function(e,n){switch(e){case"debug":t=n;break;case"destroyOnUnregister":i=n;break;case"initialValues":L.initialize(n);break;case"keepDirtyOnReinitialize":r=n;break;case"mutators":a=n,n?(Object.keys(g).forEach((function(e){e in n||delete g[e]})),Object.keys(n).forEach((function(e){g[e]=p(e)}))):Object.keys(g).forEach((function(e){delete g[e]}));break;case"onSubmit":u=n;break;case"validate":o=n,E(void 0,(function(){F(),x()}));break;case"validateOnBlur":s=n;break;default:throw new Error("Unrecognised option "+e)}},submit:function(){var e=l.formState;if(!e.submitting){if(delete e.submitErrors,delete e.submitError,e.lastSubmittedValues=q({},e.values),l.formState.error||ue(l.formState.errors))return O(),l.formState.submitFailed=!0,x(),void F();var t=Object.keys(b);if(t.length)return void Promise.all(t.map((function(e){return b[Number(e)]}))).then(L.submit,console.error);var i=Object.keys(l.fields).some((function(e){return l.fields[e].beforeSubmit&&!1===l.fields[e].beforeSubmit()}));if(!i){var r,n=!1,a=function(t){e.submitting=!1;var i=e.resetWhileSubmitting;return i&&(e.resetWhileSubmitting=!1),t&&ue(t)?(e.submitFailed=!0,e.submitSucceeded=!1,e.submitErrors=t,e.submitError=t[Oe],O()):(i||(e.submitFailed=!1,e.submitSucceeded=!0),Object.keys(l.fields).forEach((function(e){return l.fields[e].afterSubmit&&l.fields[e].afterSubmit()}))),x(),F(),n=!0,r&&r(t),t};e.submitting=!0,e.submitFailed=!1,e.submitSucceeded=!1,e.lastSubmittedValues=q({},e.values),Object.keys(l.fields).forEach((function(e){return l.fields[e].modifiedSinceLastSubmit=!1}));var o=u(e.values,L,a);if(!n){if(o&&pe(o))return x(),F(),o.then(a,(function(e){throw a(),e}));if(u.length>=3)return x(),F(),new Promise((function(e){r=e}));a(o)}}}},subscribe:function(e,t){if(!e)throw new Error("No callback given.");if(!t)throw new Error("No subscription provided. What values do you want to listen to?");var i=je(e),r=l.subscribers,n=r.index++;r.entries[n]={subscriber:i,subscription:t,notified:!1};var a=V();return ze(i,t,a,a,Le,!0),function(){delete r.entries[n]}}};return L}function Ie(e,t,i){var r=e.render,n=e.children,a=e.component,u=he(e,["render","children","component"]);if(a)return W.createElement(a,Object.assign(t,u,{children:n,render:r}));if(r)return r(void 0===n?Object.assign(t,u):Object.assign(t,u,{children:n}));if("function"!=typeof n)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+i);return n(Object.assign(t,u))}function X(e,t,i){void 0===i&&(i=function(e,t){return e===t});var r=me.useRef(e);me.useEffect((function(){i(e,r.current)||(t(),r.current=e)}))}function at(e){var t=me.useRef();return t.current||(t.current=e()),t.current}var qe=function(e,t){if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(var n=Object.prototype.hasOwnProperty.bind(t),a=0;a<i.length;a++){var u=i[a];if(!n(u)||e[u]!==t[u])return!1}return!0},nt=function(e){return!(!e||"function"!=typeof e.stopPropagation)},$e=W.createContext();function ke(e){var t=me.useRef(e);return me.useEffect((function(){t.current=e})),t}var ut="6.5.3",De=function(e,t,i){i.forEach((function(i){Object.defineProperty(e,i,{get:function(){return t[i]},enumerable:!0})}))},st=function(e,t){return De(e,t,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},ot=function(e,t){return De(e,t,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])},lt={"final-form":et,"react-final-form":ut},dt=Be.reduce((function(e,t){return e[t]=!0,e}),{});function ft(e){var t=e.debug,i=e.decorators,r=e.destroyOnUnregister,n=e.form,a=e.initialValues,u=e.initialValuesEqual,o=e.keepDirtyOnReinitialize,s=e.mutators,l=e.onSubmit,d=e.subscription,c=void 0===d?dt:d,f=e.validate,m=e.validateOnBlur,v=he(e,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),b={debug:t,destroyOnUnregister:r,initialValues:a,keepDirtyOnReinitialize:o,mutators:s,onSubmit:l,validate:f,validateOnBlur:m},S=at((function(){var e=n||rt(b);return e.pauseValidation(),e})),h=W.useState((function(){var e={};return S.subscribe((function(t){e=t}),c)(),e})),p=h[0],g=h[1],y=ke(p);W.useEffect((function(){S.isValidationPaused()&&S.resumeValidation();var e=[S.subscribe((function(e){qe(e,y.current)||g(e)}),c)].concat(i?i.map((function(e){return e(S)})):[]);return function(){S.pauseValidation(),e.reverse().forEach((function(e){return e()}))}}),[i]),X(t,(function(){S.setConfig("debug",t)})),X(r,(function(){S.destroyOnUnregister=!!r})),X(o,(function(){S.setConfig("keepDirtyOnReinitialize",o)})),X(a,(function(){S.setConfig("initialValues",a)}),u||qe),X(s,(function(){S.setConfig("mutators",s)})),X(l,(function(){S.setConfig("onSubmit",l)})),X(f,(function(){S.setConfig("validate",f)})),X(m,(function(){S.setConfig("validateOnBlur",m)}));var E={form:q({},S,{reset:function(e){nt(e)?S.reset():S.reset(e)}}),handleSubmit:function(e){return e&&("function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation()),S.submit()}};return st(E,p),W.createElement($e.Provider,{value:S},Ie(q({},v,{__versions:lt}),E,"ReactFinalForm"))}function ct(e){var t=W.useContext($e);if(!t)throw new Error(e+" must be used inside of a <Form> component");return t}var vt=typeof window<"u"&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,mt=function(e){var t=[];if(e)for(var i=0;i<e.length;i++){var r=e[i];r.selected&&t.push(r.value)}return t},bt=function(e,t,i,r){if(!r&&e.nativeEvent&&void 0!==e.nativeEvent.text||r&&e.nativeEvent)return e.nativeEvent.text;var n=e.target,a=n.type,u=n.value,o=n.checked;switch(a){case"checkbox":if(void 0!==i){if(o)return Array.isArray(t)?t.concat(i):[i];if(!Array.isArray(t))return t;var s=t.indexOf(i);return s<0?t:t.slice(0,s).concat(t.slice(s+1))}return!!o;case"select-multiple":return mt(e.target.options);default:return u}},St=Ne.reduce((function(e,t){return e[t]=!0,e}),{}),ye=function(e,t){return void 0===e?"":e},ht=function(e,t){return""===e?void 0:e},gt=function(e,t){return e===t};function pt(e,t){void 0===t&&(t={});var i=t,r=i.afterSubmit,n=i.allowNull,a=i.component,u=i.data,o=i.defaultValue,s=i.format,l=void 0===s?ye:s,d=i.formatOnBlur,c=i.initialValue,f=i.multiple,m=i.parse,v=void 0===m?ht:m,b=i.subscription,S=void 0===b?St:b,h=i.type,p=i.validateFields,g=i.value,y=ct("useField"),E=ke(t),j=function(t,i){return y.registerField(e,t,S,{afterSubmit:r,beforeSubmit:function(){var t=E.current,i=t.beforeSubmit,r=t.formatOnBlur,n=t.format,a=void 0===n?ye:n;if(r){var u=y.getFieldState(e).value,o=a(u,e);o!==u&&y.change(e,o)}return i&&i()},data:u,defaultValue:o,getValidator:function(){return E.current.validate},initialValue:c,isEqual:function(e,t){return(E.current.isEqual||gt)(e,t)},silent:i,validateFields:p})},F=W.useRef(!0),O=W.useState((function(){var e={},t=y.destroyOnUnregister;return y.destroyOnUnregister=!1,j((function(t){e=t}),!0)(),y.destroyOnUnregister=t,e})),V=O[0],k=O[1];W.useEffect((function(){return j((function(e){F.current?F.current=!1:k(e)}),!1)}),[e,u,o,c]);var w={onBlur:W.useCallback((function(e){if(V.blur(),d){var t=y.getFieldState(V.name);V.change(l(t.value,V.name))}}),[V.blur,V.name,l,d]),onChange:W.useCallback((function(t){var i=t&&t.target?bt(t,V.value,g,vt):t;V.change(v(i,e))}),[g,e,v,V.change,V.value,h]),onFocus:W.useCallback((function(e){V.focus()}),[V.focus])},x={};ot(x,V);var L=q({name:e,get value(){var t=V.value;return d?"input"===a&&(t=ye(t)):t=l(t,e),null===t&&!n&&(t=""),"checkbox"===h||"radio"===h?g:"select"===a&&f?t||[]:t},get checked(){var t=V.value;return"checkbox"===h?(t=l(t,e),void 0===g?!!t:!(!Array.isArray(t)||!~t.indexOf(g))):"radio"===h?l(t,e)===g:void 0}},w);return f&&(L.multiple=f),void 0!==h&&(L.type=h),{input:L,meta:x}}var yt=W.forwardRef((function(e,t){var i=e.afterSubmit,r=e.allowNull,n=e.beforeSubmit,a=e.children,u=e.component,o=e.data,s=e.defaultValue,l=e.format,d=e.formatOnBlur,c=e.initialValue,f=e.isEqual,m=e.multiple,v=e.name,b=e.parse,S=e.subscription,h=e.type,p=e.validate,g=e.validateFields,y=e.value,E=he(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),j=pt(v,{afterSubmit:i,allowNull:r,beforeSubmit:n,children:a,component:u,data:o,defaultValue:s,format:l,formatOnBlur:d,initialValue:c,isEqual:f,multiple:m,parse:b,subscription:S,type:h,validate:p,validateFields:g,value:y});if("function"==typeof a)return a(q({},j,E));if("string"==typeof u)return W.createElement(u,q({},j.input,{children:a,ref:t},E));if(!v)throw new Error("prop name cannot be undefined in <Field> component");return Ie(q({children:a,component:u,ref:t},E),j,"Field("+v+")")}));const Ae=e=>{const{comment:t,isReply:i}=e,r=Ke({comment:We().required("Make sure this field is filled correctly")}),n=e=>null!=e&&e.trim()?void 0:"Comment cannot be blank";return ie.jsx(ft,{onSubmit:()=>{},initialValues:{comment:t},validate:async e=>{try{await r.validate(e,{abortEarly:!1})}catch(t){return t.inner.reduce(((e,t)=>({...e,[t.path]:t.message})),{})}},"data-cy":"EditCommentForm",render:({invalid:t,handleSubmit:r,values:a})=>{const u=t;return ie.jsxs(Ve,{as:"form",sx:{flexDirection:"column"},p:2,onSubmit:r,children:[ie.jsxs(He,{as:"label",htmlFor:"comment",sx:{marginBottom:"6px",fontSize:3},children:["Edit ",i?"Reply":"Comment"]}),ie.jsx(yt,{component:Te,"data-cy":"edit-comment",id:"comment",validate:n,name:"comment"}),ie.jsxs(Ve,{mt:4,ml:"auto",children:[ie.jsx(Ee,{type:"button",small:!0,mr:4,variant:"secondary",onClick:()=>null==e?void 0:e.handleCancel(),children:"Cancel"}),ie.jsx(Ee,{"data-cy":"edit-comment-submit","data-testid":"edit-comment-submit",type:"submit","aria-label":"Save changes",small:!0,disabled:u,onClick:()=>{(t=>{null!=t&&t.trim()&&(null==e||e.handleSubmit(t))})(a.comment)},children:"Save"})]})]})}})};try{Ae.displayName="EditComment",Ae.__docgenInfo={description:"",displayName:"EditComment",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"string"}},handleCancel:{defaultValue:null,description:"",name:"handleCancel",required:!0,type:{name:"() => void"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!0,type:{name:"(commentText: string) => void"}},isReply:{defaultValue:null,description:"",name:"isReply",required:!0,type:{name:"boolean"}}}}}catch{}export{Ae as E};