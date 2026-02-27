const t="hatimer-card",e=[1,5,10];function s(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new a(s,t,o)},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,_=globalThis,g=_.trustedTypes,$=g?g.emptyScript:"",y=_.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:A};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),...m(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??A)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,S=t=>t,C=E.trustedTypes,k=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+T,O=`<${U}>`,H=document,M=()=>H.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,D="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,I=/>/g,L=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,q=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),J=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Z=new WeakMap,F=H.createTreeWalker(H,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=j;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,l=0;for(;l<s.length&&(n.lastIndex=l,c=n.exec(s),null!==c);)l=n.lastIndex,n===j?"!--"===c[1]?n=z:void 0!==c[1]?n=I:void 0!==c[2]?(W.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=L):void 0!==c[3]&&(n=L):n===L?">"===c[0]?(n=r??j,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?L:'"'===c[3]?q:B):n===q||n===B?n=L:n===z||n===I?n=j:(n=L,r=void 0);const d=n===L&&t[e+1].startsWith("/>")?" ":"";o+=n===j?s+O:h>=0?(i.push(a),s.slice(0,h)+P+s.slice(h)+T+d):s+T+(-2===h?e:d)}return[G(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,h]=Y(t,e);if(this.el=Q.createElement(c,s),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(P)){const e=h[o++],s=i.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?it:"?"===n[1]?rt:"@"===n[1]?ot:st}),i.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:r}),t+=T.length-1}r++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===J)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=N(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=F.nextNode(),o++)}return F.currentNode=H,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),N(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new tt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Q(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new et(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===J&&(a=this._$AH[n]),o||=!N(a)||a!==this._$AH[n],a===K?t=K:t!==K&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class rt extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ot extends st{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??K)===J)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=E.litHtmlPolyfillSupport;at?.(Q,et),(E.litHtmlVersions??=[]).push("3.3.2");const ct=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new et(e.insertBefore(M(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ht._$litElement$=!0,ht.finalized=!0,ct.litElementHydrateSupport?.({LitElement:ht});const lt=ct.litElementPolyfillSupport;lt?.({LitElement:ht}),(ct.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:A},ut=(t=pt,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return(e,s)=>"object"==typeof s?ut(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ft=c`
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
`,_t=c`
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
`;let gt=class extends ht{constructor(){super(...arguments),this._start=()=>{this._hass.callService("timer","start",{entity_id:this._config.entity})},this._resume=()=>{this._hass.callService("timer","start",{entity_id:this._config.entity})},this._pause=()=>{this._hass.callService("timer","pause",{entity_id:this._config.entity})},this._cancel=()=>{this._hass.callService("timer","cancel",{entity_id:this._config.entity})}}static async getConfigElement(){return await Promise.resolve().then(function(){return At}),document.createElement("hatimer-card-editor")}static getStubConfig(e){const s=Object.keys(e.states).find(t=>t.startsWith("timer."));return{type:`custom:${t}`,entity:s??"timer.my_timer"}}setConfig(t){if(!t.entity)throw new Error("You must define an entity (timer.*) in your card config.");if(!t.entity.startsWith("timer."))throw new Error(`Entity must be in the timer domain (e.g. timer.my_timer). Got: ${t.entity}`);this._config=t,this.requestUpdate()}set hass(t){const e=this._hass?.states[this._config?.entity??""],s=t.states[this._config?.entity??""];this._hass=t,e!==s&&(this._syncTicker(s?.state),this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this._stopTicker()}render(){if(!this._config||!this._hass)return K;const t=this._config.entity,s=this._hass.states[t];if(!s)return V`
        <ha-card>
          <div class="error">Entity not found: <strong>${t}</strong></div>
        </ha-card>
      `;const i=s.attributes,r=s.state,o=this._config.name??i.friendly_name??t,n=this._config.increments??e,a=!1!==this._config.show_controls,c=this._computeDisplayTime(r,i);return V`
      <ha-card>
        <div class="card-header">${o}</div>

        <div class="timer-display">
          <div class="timer-time state-${r}">${c}</div>
          <div class="state-badge state-${r}">${r}</div>
        </div>

        ${n.length>0?V`
              <div class="increments">
                ${n.map(t=>V`
                    <button
                      class="increment-btn"
                      @click=${()=>this._addTime(t,r,i)}
                    >
                      +${t}m
                    </button>
                  `)}
              </div>
            `:K}

        ${a?this._renderControls(r):K}
      </ha-card>
    `}_renderControls(t){return V`
      <div class="controls">
        ${"idle"===t?V`<button class="control-btn btn-start" @click=${this._start}>Start</button>`:K}
        ${"active"===t?V`<button class="control-btn btn-pause" @click=${this._pause}>Pause</button>`:K}
        ${"paused"===t?V`<button class="control-btn btn-start" @click=${this._resume}>Resume</button>`:K}
        ${"idle"!==t?V`<button class="control-btn btn-cancel" @click=${this._cancel}>Cancel</button>`:K}
      </div>
    `}_computeDisplayTime(t,e){if("active"===t&&e.finishes_at){const t=new Date(e.finishes_at).getTime()-Date.now();return t>0?this._secondsToHms(Math.ceil(t/1e3)):"0:00:00"}return"paused"===t&&e.remaining?this._formatHms(e.remaining):this._formatHms(e.duration??"0:00:00")}_formatHms(t){const e=t.split(":").map(Number);for(;e.length<3;)e.unshift(0);const[s,i,r]=e;return`${s}:${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`}_secondsToHms(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=t%60;return`${e}:${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`}_addTime(t,e,s){let i;if("active"===e&&s.finishes_at){const t=new Date(s.finishes_at).getTime()-Date.now();i=Math.max(0,Math.ceil(t/1e3))}else i="paused"===e&&s.remaining?this._hmsToSeconds(s.remaining):this._hmsToSeconds(s.duration??"0:00:00");const r=i+60*t,o=this._secondsToHms(r);this._hass.callService("timer","start",{entity_id:this._config.entity,duration:o})}_hmsToSeconds(t){const e=t.split(":").map(Number);for(;e.length<3;)e.unshift(0);return 3600*e[0]+60*e[1]+e[2]}_syncTicker(t){"active"===t?this._startTicker():this._stopTicker()}_startTicker(){void 0===this._ticker&&(this._ticker=setInterval(()=>this.requestUpdate(),500))}_stopTicker(){void 0!==this._ticker&&(clearInterval(this._ticker),this._ticker=void 0)}};var $t,yt;gt.styles=ft,gt=s([dt(t)],gt),window.customCards=window.customCards??[],window.customCards.push({type:t,name:"HA Timer Card",description:"A Lovelace card for controlling Home Assistant timer entities",preview:!0}),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}($t||($t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(yt||(yt={}));var vt=function(t,e,s,i){i=i||{},s=null==s?{}:s;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=s,t.dispatchEvent(r),r};let bt=class extends ht{setConfig(t){this._config=t}render(){if(!this._config)return K;const t=this._config.increments??e,s=!1!==this._config.show_controls;return V`
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

        <!-- Show controls toggle -->
        <div class="toggle-row">
          <div class="row-label">Show Start / Pause / Cancel controls</div>
          <ha-switch
            .checked=${s}
            @change=${this._showControlsChanged}
          ></ha-switch>
        </div>

      </div>
    `}_entityChanged(t){this._updateConfig({entity:t.detail.value})}_nameChanged(t){const e=t.target.value.trim(),s={};if(!e){const{name:t,...e}=this._config;return void vt(this,"config-changed",{config:e})}s.name=e,this._updateConfig(s)}_incrementsChanged(t){const e=t.target.value.split(",").map(t=>parseInt(t.trim(),10)).filter(t=>!isNaN(t)&&t>0);this._updateConfig({increments:e})}_showControlsChanged(t){this._updateConfig({show_controls:t.target.checked})}_updateConfig(t){const e={...this._config,...t};vt(this,"config-changed",{config:e})}};bt.styles=_t,s([mt({attribute:!1})],bt.prototype,"hass",void 0),s([mt({attribute:!1})],bt.prototype,"_config",void 0),bt=s([dt("hatimer-card-editor")],bt);var At=Object.freeze({__proto__:null,get HaTimerCardEditor(){return bt}});
