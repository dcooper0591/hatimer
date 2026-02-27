const t="hatimer-card",e=[1,5,10];function i(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,o)},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:f,getPrototypeOf:_}=Object,g=globalThis,m=g.trustedTypes,$=m?m.emptyScript:"",y=g.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},A=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:A};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const o=this.constructor;if(!1===s&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??A)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,C=t=>t,E=S.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+P,O=`<${U}>`,N=document,H=()=>N.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,j="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,I=/>/g,L=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,q=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),J=new WeakMap,K=N.createTreeWalker(N,129);function Z(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=D;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===D?"!--"===c[1]?n=z:void 0!==c[1]?n=I:void 0!==c[2]?(W.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=L):void 0!==c[3]&&(n=L):n===L?">"===c[0]?(n=r??D,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?L:'"'===c[3]?q:B):n===q||n===B?n=L:n===z||n===I?n=D:(n=L,r=void 0);const d=n===L&&t[e+1].startsWith("/>")?" ":"";o+=n===D?i+O:h>=0?(s.push(a),i.slice(0,h)+T+i.slice(h)+P+d):i+P+(-2===h?e:d)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,h]=Y(t,e);if(this.el=Q.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(T)){const e=h[o++],i=s.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?st:"?"===n[1]?rt:"@"===n[1]?ot:it}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),K.nextNode(),a.push({type:2,index:++r});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===U)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===F)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);K.currentNode=s;let r=K.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=K.nextNode(),o++)}return K.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),M(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Q(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=C(t).nextSibling;C(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),o||=!M(a)||a!==this._$AH[n],a===G?t=G:t!==G&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class ot extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??G)===F)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=S.litHtmlPolyfillSupport;at?.(Q,et),(S.litHtmlVersions??=[]).push("3.3.2");const ct=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(H(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ht._$litElement$=!0,ht.finalized=!0,ct.litElementHydrateSupport?.({LitElement:ht});const lt=ct.litElementPolyfillSupport;lt?.({LitElement:ht}),(ct.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:A},ut=(t=pt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const _t=c`
  :host {
    display: block;
  }

  ha-card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }

  .card-header {
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }

  /* ── Timer display ── */

  .timer-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .timer-time {
    font-size: 3rem;
    font-weight: 300;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.04em;
    line-height: 1;
    color: var(--primary-text-color);
    transition: color 0.3s ease;
  }

  .timer-time.state-active {
    color: var(--primary-color);
  }

  .timer-time.state-paused {
    color: var(--secondary-text-color);
  }

  .timer-time.state-idle {
    color: var(--disabled-text-color, var(--secondary-text-color));
  }

  .state-badge {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    transition: background 0.3s ease, color 0.3s ease;
  }

  .state-badge.state-active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .state-badge.state-paused {
    background: var(--warning-color, #ff9800);
    color: var(--text-primary-color, #fff);
  }

  /* ── Increment buttons ── */

  .increments {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .increment-btn {
    flex: 1;
    min-width: 56px;
    padding: 6px 4px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    line-height: 1.2;
  }

  .increment-btn:hover {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
  }

  .increment-btn:active {
    transform: scale(0.96);
  }

  /* ── Control buttons ── */

  .controls {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .control-btn {
    flex: 1;
    padding: 10px 8px;
    border: none;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease;
    line-height: 1;
  }

  .control-btn:active {
    transform: scale(0.96);
  }

  .btn-start {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .btn-start:hover {
    filter: brightness(1.1);
  }

  .btn-pause {
    background: var(--warning-color, #ff9800);
    color: var(--text-primary-color, #fff);
  }

  .btn-pause:hover {
    filter: brightness(1.1);
  }

  .btn-cancel {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .btn-cancel:hover {
    background: var(--error-color, #db4437);
    color: var(--text-primary-color, #fff);
    border-color: var(--error-color, #db4437);
  }

  /* ── Error state ── */

  .error {
    padding: 16px;
    color: var(--error-color, #db4437);
    font-size: 0.9rem;
  }
`,gt=c`
  .editor-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .row-label {
    font-size: 0.85rem;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .increments-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 4px;
    background: var(--primary-background-color);
    color: var(--primary-text-color);
    font-size: 1rem;
    box-sizing: border-box;
  }

  .helper-text {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;let mt=class extends ht{constructor(){super(...arguments),this._userCancelled=!1,this._start=()=>{this._hass.callService("timer","start",{entity_id:this._config.entity})},this._resume=()=>{this._hass.callService("timer","start",{entity_id:this._config.entity})},this._pause=()=>{this._hass.callService("timer","pause",{entity_id:this._config.entity})},this._cancel=()=>{this._userCancelled=!0,this._hass.callService("timer","cancel",{entity_id:this._config.entity})}}static getGridOptions(){return{min_columns:6}}static async getConfigElement(){return await Promise.resolve().then(function(){return At}),document.createElement("hatimer-card-editor")}static getStubConfig(e){const i=Object.keys(e.states).find(t=>t.startsWith("timer."));return{type:`custom:${t}`,entity:i??"timer.my_timer"}}setConfig(t){if(!t.entity)throw new Error("You must define an entity (timer.*) in your card config.");if(!t.entity.startsWith("timer."))throw new Error(`Entity must be in the timer domain (e.g. timer.my_timer). Got: ${t.entity}`);this._config=t,this.requestUpdate()}set hass(t){const e=this._config?.entity??"",i=this._hass?.states[e],s=t.states[e];this._hass=t,i!==s&&(this._syncTicker(s?.state),"active"===i?.state&&"idle"===s?.state&&(this._userCancelled?this._userCancelled=!1:this._sendNotification(s.attributes)),this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this._stopTicker()}render(){if(!this._config||!this._hass)return G;const t=this._config.entity,i=this._hass.states[t];if(!i)return V`
        <ha-card>
          <div class="error">Entity not found: <strong>${t}</strong></div>
        </ha-card>
      `;const s=i.attributes,r=i.state,o=this._config.name??s.friendly_name??t,n=this._config.increments??e,a=!1!==this._config.show_controls,c=!1!==this._config.show_name,h=!1!==this._config.show_state,l=this._computeDisplayTime(r,s);return V`
      <ha-card>
        ${c?V`<div class="card-header">${o}</div>`:G}

        <div class="timer-display">
          <div class="timer-time state-${r}">${l}</div>
          ${h?V`<div class="state-badge state-${r}">${r}</div>`:G}
        </div>

        ${n.length>0?V`
              <div class="increments">
                ${n.map(t=>V`
                    <button
                      class="increment-btn"
                      @click=${()=>this._addTime(t,r,s)}
                    >
                      +${t}m
                    </button>
                  `)}
              </div>
            `:G}

        ${a?this._renderControls(r):G}
      </ha-card>
    `}_renderControls(t){return V`
      <div class="controls">
        ${"idle"===t?V`<button class="control-btn btn-start" @click=${this._start}>Start</button>`:G}
        ${"active"===t?V`<button class="control-btn btn-pause" @click=${this._pause}>Pause</button>`:G}
        ${"paused"===t?V`<button class="control-btn btn-start" @click=${this._resume}>Resume</button>`:G}
        ${"idle"!==t?V`<button class="control-btn btn-cancel" @click=${this._cancel}>Cancel</button>`:G}
      </div>
    `}_computeDisplayTime(t,e){if("active"===t&&e.finishes_at){const t=new Date(e.finishes_at).getTime()-Date.now();return t>0?this._secondsToHms(Math.ceil(t/1e3)):"0:00:00"}return"paused"===t&&e.remaining?this._formatHms(e.remaining):this._formatHms(e.duration??"0:00:00")}_formatHms(t){const e=t.split(":").map(Number);for(;e.length<3;)e.unshift(0);const[i,s,r]=e;return`${i}:${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`}_secondsToHms(t){const e=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%60;return`${e}:${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`}_addTime(t,e,i){let s;if("active"===e&&i.finishes_at){const t=new Date(i.finishes_at).getTime()-Date.now();s=Math.max(0,Math.ceil(t/1e3))}else s="paused"===e&&i.remaining?this._hmsToSeconds(i.remaining):this._hmsToSeconds(i.duration??"0:00:00");const r=s+60*t,o=this._secondsToHms(r),n=!1!==this._config.auto_start,a="idle"!==e||n?"start":"change";this._hass.callService("timer",a,{entity_id:this._config.entity,duration:o})}_hmsToSeconds(t){const e=t.split(":").map(Number);for(;e.length<3;)e.unshift(0);return 3600*e[0]+60*e[1]+e[2]}_sendNotification(t){const e=this._config.notify_service;if(!e)return;const[i,...s]=e.split("."),r=s.join("."),o=this._config.name??t.friendly_name??this._config.entity,n=this._config.notify_title??"Timer Finished",a=this._config.notify_message??`${o} has finished.`;this._hass.callService(i,r,{title:n,message:a})}_syncTicker(t){"active"===t?this._startTicker():this._stopTicker()}_startTicker(){void 0===this._ticker&&(this._ticker=setInterval(()=>this.requestUpdate(),500))}_stopTicker(){void 0!==this._ticker&&(clearInterval(this._ticker),this._ticker=void 0)}};var $t,yt;mt.styles=_t,mt=i([dt(t)],mt),window.customCards=window.customCards??[],window.customCards.push({type:t,name:"HA Timer Card",description:"A Lovelace card for controlling Home Assistant timer entities",preview:!0}),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}($t||($t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(yt||(yt={}));var vt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,t.dispatchEvent(r),r};let bt=class extends ht{setConfig(t){this._config=t}render(){if(!this._config)return G;const t=this._config.increments??e,i=!1!==this._config.show_controls,s=!1!==this._config.show_name,r=!1!==this._config.show_state,o=!1!==this._config.auto_start;return V`
      <div class="editor-row">

        <!-- Entity picker (timer domain only) -->
        <ha-entity-picker
          label="Timer Entity"
          .hass=${this.hass}
          .value=${this._config.entity??""}
          .includeDomains=${["timer"]}
          allow-custom-entity
          @value-changed=${this._entityChanged}
        ></ha-entity-picker>

        <!-- Display name override -->
        <ha-textfield
          label="Display Name (optional)"
          .value=${this._config.name??""}
          placeholder="Uses entity friendly_name by default"
          @change=${this._nameChanged}
        ></ha-textfield>

        <!-- Increment buttons -->
        <div>
          <div class="row-label">Time Increment Buttons (minutes)</div>
          <input
            class="increments-input"
            type="text"
            .value=${t.join(", ")}
            placeholder="1, 5, 10"
            @change=${this._incrementsChanged}
          />
          <div class="helper-text">
            Comma-separated list of minute values. Leave empty to hide increment buttons.
          </div>
        </div>

        <!-- Notify service -->
        <ha-textfield
          label="Notify Service (optional)"
          .value=${this._config.notify_service??""}
          placeholder="e.g. notify.mobile_app_my_phone"
          @change=${this._notifyServiceChanged}
        ></ha-textfield>

        ${this._config.notify_service?V`
              <ha-textfield
                label="Notification Title (optional)"
                .value=${this._config.notify_title??""}
                placeholder="Timer Finished"
                @change=${this._notifyTitleChanged}
              ></ha-textfield>

              <ha-textfield
                label="Notification Message (optional)"
                .value=${this._config.notify_message??""}
                placeholder="Uses entity name by default"
                @change=${this._notifyMessageChanged}
              ></ha-textfield>
            `:G}

        <!-- Show name toggle -->
        <div class="toggle-row">
          <div class="row-label">Show name</div>
          <ha-switch
            .checked=${s}
            @change=${this._showNameChanged}
          ></ha-switch>
        </div>

        <!-- Show state badge toggle -->
        <div class="toggle-row">
          <div class="row-label">Show state (Idle / Active / Paused)</div>
          <ha-switch
            .checked=${r}
            @change=${this._showStateChanged}
          ></ha-switch>
        </div>

        <!-- Auto start toggle -->
        <div class="toggle-row">
          <div class="row-label">Auto-start timer when adding time from idle</div>
          <ha-switch
            .checked=${o}
            @change=${this._autoStartChanged}
          ></ha-switch>
        </div>

        <!-- Show controls toggle -->
        <div class="toggle-row">
          <div class="row-label">Show Start / Pause / Cancel controls</div>
          <ha-switch
            .checked=${i}
            @change=${this._showControlsChanged}
          ></ha-switch>
        </div>

      </div>
    `}_entityChanged(t){this._updateConfig({entity:t.detail.value})}_nameChanged(t){const e=t.target.value.trim(),i={};if(!e){const{name:t,...e}=this._config;return void vt(this,"config-changed",{config:e})}i.name=e,this._updateConfig(i)}_incrementsChanged(t){const e=t.target.value.split(",").map(t=>parseInt(t.trim(),10)).filter(t=>!isNaN(t)&&t>0);this._updateConfig({increments:e})}_notifyServiceChanged(t){const e=t.target.value.trim();if(e)this._updateConfig({notify_service:e});else{const{notify_service:t,notify_title:e,notify_message:i,...s}=this._config;vt(this,"config-changed",{config:s})}}_notifyTitleChanged(t){const e=t.target.value.trim();if(e)this._updateConfig({notify_title:e});else{const{notify_title:t,...e}=this._config;vt(this,"config-changed",{config:e})}}_notifyMessageChanged(t){const e=t.target.value.trim();if(e)this._updateConfig({notify_message:e});else{const{notify_message:t,...e}=this._config;vt(this,"config-changed",{config:e})}}_showNameChanged(t){this._updateConfig({show_name:t.target.checked})}_showStateChanged(t){this._updateConfig({show_state:t.target.checked})}_autoStartChanged(t){this._updateConfig({auto_start:t.target.checked})}_showControlsChanged(t){this._updateConfig({show_controls:t.target.checked})}_updateConfig(t){const e={...this._config,...t};vt(this,"config-changed",{config:e})}};bt.styles=gt,i([ft({attribute:!1})],bt.prototype,"hass",void 0),i([ft({attribute:!1})],bt.prototype,"_config",void 0),bt=i([dt("hatimer-card-editor")],bt);var At=Object.freeze({__proto__:null,get HaTimerCardEditor(){return bt}});
