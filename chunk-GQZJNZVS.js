import{$ as ke,A as x,Aa as B,B as we,C as Te,D as he,E as G,F as w,H as _,I as s,K as L,M as v,N as P,O as fe,P as h,Q as pe,R as l,S as u,T as C,W as Pe,X as c,Y as p,Z as Be,a as g,b as D,ba as Re,ca as F,ea as xe,f as Oe,fa as Ge,g as T,h as Ie,ha as Le,ja as me,l as Ne,la as z,ma as je,na as $e,o as q,p as M,pa as Ue,q as de,r as V,s as N,t as Se,u as ce,ua as He,v as S,w as A,wa as X,x as E,y as d,za as ge}from"./chunk-PT34D2S2.js";var Je=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(G))},e.\u0275dir=d({type:e});let t=e;return t})(),kt=(()=>{let e=class e extends Je{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=he(e)))(o||e)}})(),e.\u0275dir=d({type:e,features:[v]});let t=e;return t})(),ie=new N("");var Rt={provide:ie,useExisting:M(()=>re),multi:!0};function xt(){let t=me()?me().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Gt=new N(""),re=(()=>{let e=class e extends Je{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!xt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(G),s(Gt,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(f){return o._handleInput(f.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(f){return o._compositionEnd(f.target.value)})},features:[F([Rt]),v]});let t=e;return t})();function O(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Qe(t){return t!=null&&typeof t.length=="number"}var oe=new N(""),se=new N(""),Lt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,U=class{static min(e){return jt(e)}static max(e){return $t(e)}static required(e){return Ut(e)}static requiredTrue(e){return Ht(e)}static email(e){return Kt(e)}static minLength(e){return Wt(e)}static maxLength(e){return qt(e)}static pattern(e){return zt(e)}static nullValidator(e){return et(e)}static compose(e){return st(e)}static composeAsync(e){return lt(e)}};function jt(t){return e=>{if(O(e.value)||O(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function $t(t){return e=>{if(O(e.value)||O(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Ut(t){return O(t.value)?{required:!0}:null}function Ht(t){return t.value===!0?null:{required:!0}}function Kt(t){return O(t.value)||Lt.test(t.value)?null:{email:!0}}function Wt(t){return e=>O(e.value)||!Qe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function qt(t){return e=>Qe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function zt(t){if(!t)return et;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(O(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function et(t){return null}function tt(t){return t!=null}function nt(t){return Le(t)?Oe(t):t}function it(t){let e={};return t.forEach(i=>{e=i!=null?g(g({},e),i):e}),Object.keys(e).length===0?null:e}function rt(t,e){return e.map(i=>i(t))}function Xt(t){return!t.validate}function ot(t){return t.map(e=>Xt(e)?e:i=>e.validate(i))}function st(t){if(!t)return null;let e=t.filter(tt);return e.length==0?null:function(i){return it(rt(i,e))}}function at(t){return t!=null?st(ot(t)):null}function lt(t){if(!t)return null;let e=t.filter(tt);return e.length==0?null:function(i){let n=rt(i,e).map(nt);return Ie(n).pipe(T(it))}}function ut(t){return t!=null?lt(ot(t)):null}function Ke(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function dt(t){return t._rawValidators}function ct(t){return t._rawAsyncValidators}function _e(t){return t?Array.isArray(t)?t:[t]:[]}function Z(t,e){return Array.isArray(t)?t.includes(e):t===e}function We(t,e){let i=_e(e);return _e(t).forEach(r=>{Z(i,r)||i.push(r)}),i}function qe(t,e){return _e(e).filter(i=>!Z(t,i))}var J=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=at(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},m=class extends J{get formDirective(){return null}get path(){return null}},H=class extends J{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Q=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Yt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Hn=D(g({},Yt),{"[class.ng-submitted]":"isSubmitted"}),ht=(()=>{let e=class e extends Q{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(H,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&pe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})(),ft=(()=>{let e=class e extends Q{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(s(m,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&pe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[v]});let t=e;return t})();var j="VALID",Y="INVALID",k="PENDING",$="DISABLED";function ve(t){return(ae(t)?t.validators:t)||null}function Zt(t){return Array.isArray(t)?at(t):t||null}function ye(t,e){return(ae(e)?e.asyncValidators:t)||null}function Jt(t){return Array.isArray(t)?ut(t):t||null}function ae(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function pt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new q(1e3,"");if(!n[i])throw new q(1001,"")}function mt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new q(1002,"")})}var K=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===j}get invalid(){return this.status===Y}get pending(){return this.status==k}get disabled(){return this.status===$}get enabled(){return this.status!==$}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(We(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(We(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(qe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}hasValidator(e){return Z(this._rawValidators,e)}hasAsyncValidator(e){return Z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=k,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=$,this.errors=null,this._forEachChild(n=>{n.disable(D(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(g({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=j,this._forEachChild(n=>{n.enable(D(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(g({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===j||this.status===k)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?$:j}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=k,this._hasOwnPendingAsyncValidator=!0;let i=nt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?$:this.errors?Y:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(k)?k:this._anyControlsHaveStatus(Y)?Y:j}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ae(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Zt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Jt(this._rawAsyncValidators)}},ee=class extends K{constructor(e,i,n){super(ve(i),ye(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){mt(this,!0,e),Object.keys(e).forEach(n=>{pt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var gt=new N("CallSetDisabledState",{providedIn:"root",factory:()=>Ce}),Ce="always";function be(t,e){return[...e.path,t]}function ze(t,e,i=Ce){De(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),en(t,e),nn(t,e),tn(t,e),Qt(t,e)}function Xe(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),ne(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function te(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Qt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function De(t,e){let i=dt(t);e.validator!==null?t.setValidators(Ke(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=ct(t);e.asyncValidator!==null?t.setAsyncValidators(Ke(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();te(e._rawValidators,r),te(e._rawAsyncValidators,r)}function ne(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=dt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(i=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=ct(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(i=!0,t.setAsyncValidators(o))}}}let n=()=>{};return te(e._rawValidators,n),te(e._rawAsyncValidators,n),i}function en(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&_t(t,e)})}function tn(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&_t(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function _t(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function nn(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function rn(t,e){t==null,De(t,e)}function on(t,e){return ne(t,e)}function sn(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function an(t){return Object.getPrototypeOf(t.constructor)===kt}function ln(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function un(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===re?i=o:an(o)?n=o:r=o}),r||n||i||null}function dn(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ye(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ze(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var y=class extends K{constructor(e=null,i,n){super(ve(i),ye(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ae(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var cn=t=>t instanceof y,hn=(()=>{let e=class e extends m{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return be(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=he(e)))(o||e)}})(),e.\u0275dir=d({type:e,features:[v]});let t=e;return t})();var vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var yt=new N("");var fn={provide:m,useExisting:M(()=>R)},R=(()=>{let e=class e extends m{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ne(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return ze(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){Xe(n.control||null,n,!1),dn(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this.submitted=!0,ln(this.form,this.directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,o=this.form.get(n.path);r!==o&&(Xe(r||null,n),cn(o)&&(ze(o,n,this.callSetDisabledState),n.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);rn(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&on(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){De(this.form,this),this._oldForm&&ne(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(s(oe,10),s(se,10),s(gt,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&p("submit",function(f){return o.onSubmit(f)})("reset",function(){return o.onReset()})},inputs:{form:[S.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[F([fn]),v,x]});let t=e;return t})(),pn={provide:m,useExisting:M(()=>Ct)},Ct=(()=>{let e=class e extends hn{constructor(n,r,o){super(),this.name=null,this._parent=n,this._setValidators(r),this._setAsyncValidators(o)}_checkParentType(){bt(this._parent)}};e.\u0275fac=function(r){return new(r||e)(s(m,13),s(oe,10),s(se,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""]],inputs:{name:[S.None,"formGroupName","name"]},features:[F([pn]),v]});let t=e;return t})(),mn={provide:m,useExisting:M(()=>le)},le=(()=>{let e=class e extends m{constructor(n,r,o){super(),this.name=null,this._parent=n,this._setValidators(r),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return be(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){bt(this._parent)}};e.\u0275fac=function(r){return new(r||e)(s(m,13),s(oe,10),s(se,10))},e.\u0275dir=d({type:e,selectors:[["","formArrayName",""]],inputs:{name:[S.None,"formArrayName","name"]},features:[F([mn]),v]});let t=e;return t})();function bt(t){return!(t instanceof Ct)&&!(t instanceof R)&&!(t instanceof le)}var gn={provide:H,useExisting:M(()=>Me)},Me=(()=>{let e=class e extends H{set isDisabled(n){}constructor(n,r,o,a,f){super(),this._ngModelWarningConfig=f,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=un(this,a)}ngOnChanges(n){this._added||this._setUpControl(),sn(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return be(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(m,13),s(oe,10),s(se,10),s(ie,10),s(yt,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[S.None,"formControlName","name"],isDisabled:[S.None,"disabled","isDisabled"],model:[S.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[F([gn]),v,x]});let t=e;return t})();var _n=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=V({});let t=e;return t})(),W=class extends K{constructor(e,i,n){super(ve(i),ye(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,i={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}insert(e,i,n={}){this.controls.splice(e,0,i),this._registerControl(i),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,i={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:i.emitEvent})}setControl(e,i,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),i&&(this.controls.splice(r,0,i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,i={}){mt(this,!1,e),e.forEach((n,r)=>{pt(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e=[],i={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(i=>i._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((i,n)=>n._syncPendingControls()?!0:i,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((i,n)=>{e(i,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(i=>i.enabled&&e(i))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var Dt=t=>t instanceof W;var Mt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:yt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:gt,useValue:n.callSetDisabledState??Ce}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=V({imports:[_n]});let t=e;return t})();var At=(()=>{class t{constructor(i,n){this.renderer=i,this.elementRef=n,this.onInput=r=>{let o=r?new Date(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()):null,a=o?o.toISOString():null;this.onChange(a)},this.onChange=()=>{},this.onTouched=()=>{}}writeValue(i){let n=i?new Date(i):null,r=n?new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())):null;this.renderer.setProperty(this.elementRef.nativeElement,"valueAsDate",r)}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",i)}}return t.\u0275fac=function(i){return new(i||t)(s(L),s(G))},t.\u0275dir=d({type:t,selectors:[["","useValueAsLocalIso",""]],hostBindings:function(i,n){i&1&&p("input",function(o){return n.onInput(o.target.valueAsDate)})("blur",function(){return n.onTouched()})},standalone:!0,features:[F([{provide:ie,useExisting:M(()=>t),multi:!0}])]}),t})();var Ft=(()=>{let e=class e{constructor(n){this.service=n}isbnExists(){return n=>this.service.check(n.value).pipe(T(r=>r?{isbnexists:!0}:null))}};e.\u0275fac=function(r){return new(r||e)(Se(B))},e.\u0275prov=de({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ot=function(t){if(!t.value||typeof t.value!="string")return null;let i=t.value.replace(/-/g,"").length;return i===10||i===13?null:{isbnformat:!0}},It=function(t){return!Dt(t)||t.controls.some(e=>!!e.value)?null:{atleastonevalue:!0}};function yn(t,e){if(t&1&&(l(0,"p",1),ke(1),u()),t&2){let i=e.$implicit;_(),Re(" ",i,`
`)}}var St=(()=>{let e=class e{constructor(n){this.form=n,this.messages={}}get errors(){if(!this.controlName)return[];let n=this.form.control.get(this.controlName);return!n||!n.errors||!n.touched?[]:Object.keys(n.errors).map(r=>this.messages[r])}};e.\u0275fac=function(r){return new(r||e)(s(R))},e.\u0275cmp=A({type:e,selectors:[["bm-form-errors"]],inputs:{controlName:"controlName",messages:"messages"},decls:1,vars:1,consts:[["class","error",4,"ngFor","ngForOf"],[1,"error"]],template:function(r,o){r&1&&P(0,yn,2,1,"p",0),r&2&&h("ngForOf",o.errors)},dependencies:[z]});let t=e;return t})();function bn(t,e){if(t&1&&C(0,"input",29),t&2){let i=e.index;h("formControlName",i),fe("aria-label","Author "+i)}}var ue=(()=>{let e=class e{constructor(){this.submitBook=new w,this.form=new ee({title:new y("",{nonNullable:!0,validators:U.required}),subtitle:new y("",{nonNullable:!0}),isbn:new y("",{nonNullable:!0,validators:[U.required,Ot],asyncValidators:ce(Ft).isbnExists()}),description:new y("",{nonNullable:!0}),published:new y("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new y("",{nonNullable:!0})})}ngOnChanges(){this.book?(this.setFormValues(this.book),this.setEditMode(!0)):this.setEditMode(!1)}setFormValues(n){this.form.patchValue(n),this.form.setControl("authors",this.buildAuthorsArray(n.authors))}setEditMode(n){let r=this.form.controls.isbn;n?r.disable():r.enable()}buildAuthorsArray(n){return new W(n.map(r=>new y(r,{nonNullable:!0})),It)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new y("",{nonNullable:!0}))}submitForm(){let n=this.form.getRawValue(),r=n.authors.filter(a=>!!a),o=D(g({},n),{authors:r});this.submitBook.emit(o)}errorsTranslated(n){return{title:{required:$localize`:title required error@@BookFormComponentErrorTitleRequired:Title is required`},isbn:{required:$localize`:isbn required error@@BookFormComponentErrorIsbnRequired:ISBN is required`,isbnformat:$localize`:isbn format error@@BookFormComponentErrorIsbnFormat:ISBN must have 10 or 13 characters`,isbnexists:$localize`:isbn exists error@@BookFormComponentErrorIsbnExists:ISBN already exists`},authors:{atleastonevalue:$localize`:at least one author error@@BookFormComponentErrorAtLeastOneAuthor:At least one author required`}}[n]||{}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["bm-book-form"]],inputs:{book:"book"},outputs:{submitBook:"submitBook"},features:[x],decls:30,vars:6,consts:()=>{let n;n=$localize`:label title|Label for the title input@@BookFormComponentLabelTitle:Title`;let r;r=$localize`:label subtitle|Label for the subtitle input@@BookFormComponentLabelSubtitle:Subtitle`;let o;o=$localize`:label isbn|Label for the ISBN input@@BookFormComponentLabelIsbn:ISBN`;let a;a=$localize`:label authors|Label for the authors inputs@@BookFormComponentLabelAuthors:Authors`;let f;f=$localize`:button add author|Text for the button to add an author input@@BookFormComponentAddAuthor: + Author `;let Ve;Ve=$localize`:label description|Label for the description text@@BookFormComponentLabelDescription:Description`;let Ae;Ae=$localize`:label published|Label for the published input@@BookFormComponentLabelPublished:Published`;let Ee;Ee=$localize`:label thumbnail|Label for the thumbnail input@@BookFormComponentLabelThumbnail:Thumbnail URL`;let Fe;return Fe=$localize`:button save|Text for save button@@BookFormComponentSave: Save `,[n,r,o,a,f,Ve,Ae,Ee,Fe,[3,"ngSubmit","formGroup"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName",4,"ngFor","ngForOf"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"],[3,"formControlName"]]},template:function(r,o){r&1&&(l(0,"form",9),p("ngSubmit",function(){return o.submitForm()}),l(1,"label",10),c(2,0),u(),C(3,"input",11)(4,"bm-form-errors",12),l(5,"label",13),c(6,1),u(),C(7,"input",14),l(8,"label",15),c(9,2),u(),C(10,"input",16)(11,"bm-form-errors",17),l(12,"label"),c(13,3),u(),l(14,"button",18),p("click",function(){return o.addAuthorControl()}),c(15,4),u(),l(16,"fieldset",19),P(17,bn,1,2,"input",20),u(),C(18,"bm-form-errors",21),l(19,"label",22),c(20,5),u(),C(21,"textarea",23),l(22,"label",24),c(23,6),u(),C(24,"input",25),l(25,"label",26),c(26,7),u(),C(27,"input",27),l(28,"button",28),c(29,8),u()()),r&2&&(h("formGroup",o.form),_(4),h("messages",o.errorsTranslated("title")),_(7),h("messages",o.errorsTranslated("isbn")),_(6),h("ngForOf",o.authors.controls),_(),h("messages",o.errorsTranslated("authors")),_(10),h("disabled",o.form.invalid))},dependencies:[z,vt,re,ht,ft,R,Me,le,At,St]});let t=e;return t})();var Tt=(()=>{let e=class e{constructor(n,r){this.service=n,this.router=r}create(n){this.service.create(n).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)(s(B),s(X))},e.\u0275cmp=A({type:e,selectors:[["bm-book-create"]],decls:3,vars:0,consts:()=>{let n;return n=$localize`:title create book|Title for the create book page@@BookCreateComponentTitle:Create Book`,[n,[3,"submitBook"]]},template:function(r,o){r&1&&(l(0,"h1"),c(1,0),u(),l(2,"bm-book-form",1),p("submitBook",function(f){return o.create(f)}),u())},dependencies:[ue]});let t=e;return t})();function Mn(t,e){if(t&1){let i=Pe();l(0,"bm-book-form",2),p("submitBook",function(r){we(i);let o=Be();return Te(o.update(r))}),u()}if(t&2){let i=e.ngIf;h("book",i)}}var Pt=(()=>{let e=class e{constructor(n,r,o){this.service=n,this.route=r,this.router=o,this.book$=this.route.paramMap.pipe(T(a=>a.get("isbn")),Ne(a=>this.service.getSingle(a)))}update(n){this.service.update(n).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)(s(B),s(He),s(X))},e.\u0275cmp=A({type:e,selectors:[["bm-book-edit"]],decls:4,vars:3,consts:()=>{let n;return n=$localize`:title edit book|Title for the edit book page@@BookEditComponentTitle:Edit Book`,[n,[3,"book","submitBook",4,"ngIf"],[3,"submitBook","book"]]},template:function(r,o){r&1&&(l(0,"h1"),c(1,0),u(),P(2,Mn,1,1,"bm-book-form",1),xe(3,"async")),r&2&&(_(2),h("ngIf",Ge(3,1,o.book$)))},dependencies:[je,ue,$e]});let t=e;return t})();var Vn=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Tt},{path:"edit/:isbn",component:Pt}],Bt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=V({imports:[ge.forChild(Vn),ge]});let t=e;return t})();var Oi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=V({imports:[Ue,Bt,Mt]});let t=e;return t})();export{Oi as AdminModule};
