(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fQdr:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),i=function(){return function(){}}(),a=t("yWMr"),o=t("NcP4"),u=t("pMnS"),r=t("Mr+X"),s=t("SMsm"),b=t("v9Dh"),d=t("eDkP"),c=t("qAlS"),g=t("dWZg"),h=t("lLAP"),m=t("Fzqc"),p=t("ZYjt"),f=t("FVSy"),C=t("oJZn"),v=t("kWGw"),B=t("wFw1"),x=t("gIcY"),k=t("QViY"),_=t("JJ7l"),y=t("uM4N"),w=t("w+lc"),I=t("Ip0R"),z=t("bujt"),M=t("UodH"),S=function(){function l(){}return l.prototype.transform=function(l,n){if(null!=l)return new Date},l}(),q=t("lzlj"),L=t("TtEo"),j=t("LC5p"),P=t("0mNj"),O=t("67Y/"),T=t("h+oQ"),D=t("tXAj"),E=t("/Uk7"),R=t("mrSG"),A=t("CkJm"),N=t("26FU"),F=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return R.__extends(n,l),n.prototype.onInit=function(){l.prototype.onInit.call(this),this._light=this.createLight(),this._lightContext=this.createLightContext(this.options.building,this.options.floor,this.options.room),this._lightStatus=this.createLightStatus(this.options.lightOn,this.options.lightColor,this.options.lightLuminosity),this._lightColorChangeSubject=new N.a(this.convertLightStatusToColor()),this._lightColorChange$=this._lightColorChangeSubject.asObservable(),this.observeCallEvents()},Object.defineProperty(n.prototype,"light",{get:function(){return this._light},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"lightContext",{get:function(){return this._lightContext},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"lightColorChange$",{get:function(){return this._lightColorChange$},enumerable:!0,configurable:!0}),n.prototype.observeCallEvents=function(){var l=this;return this.communicationManager.observeCall(this.identity,this.runtime.options.lightControlOperation,this._lightContext).subscribe(function(n){var t=n.eventData.getParameterByName("on"),e=n.eventData.getParameterByName("color"),i=n.eventData.getParameterByName("luminosity"),a=n.eventData.getParameterByName("switchTime");l.validateSwitchOpParams(t,e,i,a)?setTimeout(function(){l.light.isDefect?n.returnEvent(T.ReturnEvent.withError(l.identity,1,"Light is defect",{lightId:l._light.objectId,triggerTime:Date.now()})):(l.updateLightStatus(t,e,i),l._lightColorChangeSubject.next(l.convertLightStatusToColor()),n.returnEvent(T.ReturnEvent.withResult(l.identity,l._lightStatus.on,{lightId:l._light.objectId,triggerTime:Date.now()})))},Math.max(0,void 0===a?0:a)):n.returnEvent(T.ReturnEvent.withError(l.identity,T.RemoteCallErrorCode.InvalidParameters,T.RemoteCallErrorMessage.InvalidParameters,{lightId:l._light.objectId,triggerTime:Date.now()}))})},n.prototype.createLight=function(){return{coreType:"CoatyObject",objectType:"coaty.examples.remoteops.Light",objectId:this.runtime.newUuid(),name:"Light",isDefect:!1}},n.prototype.createLightStatus=function(l,n,t){return{coreType:"CoatyObject",objectType:"coaty.examples.remoteops.LightStatus",objectId:this.runtime.newUuid(),name:"LightStatus",parentObjectId:this._light.objectId,on:l,luminosity:t,color:n}},n.prototype.createLightContext=function(l,n,t){return{coreType:"CoatyObject",objectType:"coaty.examples.remoteops.LightContext",objectId:this.runtime.newUuid(),name:"LightContext",parentObjectId:this._light.objectId,lightId:this._light.objectId,building:l,floor:n,room:t}},n.prototype.validateSwitchOpParams=function(l,n,t,e){return!(void 0!==l&&"boolean"!=typeof l||!(void 0===t||"number"==typeof t&&t>=0&&t<=1)||void 0!==e&&"number"!=typeof e||!function(l){return Array.isArray(l)&&4===l.length&&l[0]>=0&&l[0]<=255&&l[1]>=0&&l[1]<=255&&l[2]>=0&&l[2]<=255&&l[3]>=0&&l[3]<=1}(n)||0===n[0]&&0===n[1]&&0===n[2])},n.prototype.updateLightStatus=function(l,n,t){var e=this._lightStatus,i=e.on,a=e.color,o=e.luminosity;void 0===l||l===i?void 0===n||n===a?void 0===t||t===o||(this._lightStatus=this.createLightStatus(i,a,t)):this._lightStatus=this.createLightStatus(i,n,void 0===t||t===o?o:t):this._lightStatus=this.createLightStatus(l,void 0===n||n===a?a:n,void 0===t||t===o?o:t)},n.prototype.convertLightStatusToColor=function(){var l=this._lightStatus,n=l.color,t=l.luminosity;return l.on&&0!==t?"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+(t*n[3]).toFixed(2)+")":"transparent"},n}(A.Controller),Q=function(){function l(l,n,t){this.appContext=l,this.location=n,this.appContext.setContext("Light"),this.initNgModelBindings(),this.connectLightController(t)}return l.prototype.ngOnDestroy=function(){this.lightContainer&&this.lightContainer.shutdown()},l.prototype.onQrCodeClick=function(l){window.open(this.qrCodeUrl,"_blank")},l.prototype.onQrCodeDrag=function(l,n){n.hide(),l.dataTransfer.setData("text/plain",this.qrCodeUrl),l.dataTransfer.setData("text/qrcode",this.qrCodeUrl)},l.prototype.getQrCodeUrl=function(){var l=this.location.prepareExternalUrl("/control?light_id="+(this.light?this.light.objectId:""));return window.location.protocol+"//"+window.location.host+l},l.prototype.initNgModelBindings=function(){this.lightContext={building:0,floor:0,room:0},this.lightContextRanges={building:{min:0,max:0,tickInterval:1},floor:{min:0,max:0,tickInterval:1},room:{min:0,max:0,tickInterval:1}}},l.prototype.connectLightController=function(l){var n=this;l.resolveContainer("LightAgent","LightController",F).then(function(l){n.lightContainer=l;var t=l.getController("LightController");n.lightContextRanges=l.runtime.options.lightContextRanges,n.light=t.light,n.lightContext=t.lightContext,n.lightColor$=t.lightColorChange$,n.lastSwitched$=t.lightColorChange$.pipe(Object(P.a)(1)),n.qrCodeUrl=n.getQrCodeUrl(),n.initBrokerConnectionInfo(t.options),n.appContext.setContext("Light #"+n.light.objectId)}).catch(function(l){throw new Error("Agent container for LightComponent couldn't be resolved: "+l)})},l.prototype.initBrokerConnectionInfo=function(l){var n=this;this.brokerConnectionInfo$=this.lightContainer.communicationManager.observeCommunicationState().pipe(Object(O.a)(function(l){return{state:l,isOnline:l===T.CommunicationState.Online,brokerHost:n.lightContainer.communicationManager.options.brokerUrl}}))},l}(),U=e.pb({encapsulation:0,styles:[[".light-card-dark[_ngcontent-%COMP%]{background:#37474f;color:#eceff1}.light-card-divider-dark[_ngcontent-%COMP%]{background:#607d8b}.light-card-subtitle-dark[_ngcontent-%COMP%]{color:#b0bec5}.light-card-header-avatar[_ngcontent-%COMP%]{background-image:url(/coaty-examples/remote-operations/assets/images/light-bulb-avatar.jpg);background-size:cover}.light-card-title-icon[_ngcontent-%COMP%]{margin-left:auto;margin-right:32px}.light-operation-param[_ngcontent-%COMP%]{color:#424242;display:flex;align-items:center;flex:0 0 auto;position:absolute!important;margin-top:calc(-65% + 8px)!important;left:12px;right:8px}.light-card-image-mask[_ngcontent-%COMP%]{background-image:url(/coaty-examples/remote-operations/assets/images/light-bulb.jpg);background-size:cover;background-color:transparent;background-blend-mode:overlay;transition:background-color 1s linear}.light-map-card-image-qrcode[_ngcontent-%COMP%]{position:absolute!important;margin-top:calc(-30vw - 34px)!important;width:30vw;height:30vw;left:8px;right:8px;border:4px solid transparent;border-radius:4px;cursor:-webkit-grab;cursor:grab}.light-map-card-image-qrcode[_ngcontent-%COMP%]:hover{border-color:#ffd740}.light-card-content[_ngcontent-%COMP%]{margin-bottom:8px}.light-card-context[_ngcontent-%COMP%]{display:flex;align-items:center}.light-card-slider-label[_ngcontent-%COMP%]{align-self:baseline;min-width:4em}"]],data:{}});function K(l){return e.Kb(0,[(l()(),e.rb(0,16777216,null,null,3,"mat-icon",[["class","light-card-title-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],[[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var i=!0;return"longpress"===n&&(i=!1!==e.Bb(l,2).show()&&i),"keydown"===n&&(i=!1!==e.Bb(l,2)._handleKeydown(t)&&i),"touchend"===n&&(i=!1!==e.Bb(l,2)._handleTouchend()&&i),i},r.b,r.a)),e.qb(1,9158656,null,0,s.b,[e.k,s.d,[8,null],[2,s.a]],null,null),e.qb(2,147456,null,0,b.d,[d.c,e.k,c.a,e.Q,e.A,g.a,h.c,h.e,b.b,[2,m.b],[2,b.a],[2,p.g]],{message:[0,"message"]},null),(l()(),e.Ib(3,0,[" "," "])),(l()(),e.ib(0,null,null,0))],function(l,n){l(n,1,0),l(n,2,0,n.context.ngIf.isOnline?"Connected to "+n.context.ngIf.brokerHost:"Not connected to "+n.context.ngIf.brokerHost)},function(l,n){l(n,0,0,e.Bb(n,1).inline,"primary"!==e.Bb(n,1).color&&"accent"!==e.Bb(n,1).color&&"warn"!==e.Bb(n,1).color),l(n,3,0,n.context.ngIf.isOnline?"wifi":"wifi_off")})}function J(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"img",[["alt","Photo of a light bulb"],["class","app-map-card-image-centered light-card-image-mask mat-card-image"],["mat-card-image",""],["src","./assets/images/light-bulb-mask.png"]],[[4,"background-color",null]],null,null,null,null)),e.qb(1,16384,null,0,f.g,[],null,null)],null,function(l,n){l(n,0,0,n.component.light.isDefect?"transparent":n.context.ngIf)})}function V(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,2,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),e.qb(1,16384,null,0,f.d,[],null,null),(l()(),e.Ib(-1,null,["Initializing..."]))],null,null)}function $(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,41,"mat-card-content",[["class","light-card-content mat-card-content"]],null,null,null,null,null)),e.qb(1,16384,null,0,f.d,[],null,null),(l()(),e.rb(2,0,null,null,7,"div",[["class","light-operation-param"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,6,"mat-slide-toggle",[["aria-label","light defect switch"],["class","mat-slide-toggle"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checked",null],[2,"mat-disabled",null],[2,"mat-slide-toggle-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"]],function(l,n,t){var i=!0,a=l.component;return"focus"===n&&(i=!1!==e.Bb(l,4)._inputElement.nativeElement.focus()&&i),"ngModelChange"===n&&(i=!1!==(a.light.isDefect=t)&&i),i},C.b,C.a)),e.qb(4,1228800,null,0,v.b,[e.k,g.a,h.e,e.h,[8,null],e.A,v.a,[2,B.a],[2,m.b]],{color:[0,"color"],ariaLabel:[1,"ariaLabel"]},null),e.Fb(1024,null,x.e,function(l){return[l]},[v.b]),e.qb(6,671744,null,0,x.i,[[8,null],[8,null],[8,null],[6,x.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,x.f,null,[x.i]),e.qb(8,16384,null,0,x.g,[[4,x.f]],null,null),(l()(),e.Ib(-1,0,[" Defect "])),(l()(),e.rb(10,16777216,null,null,2,"qrcode",[["class","light-map-card-image-qrcode"],["draggable","true"],["matTooltip","Click or scan or drag QR Code onto context filter to switch this light"],["matTooltipPosition","above"]],[[8,"title",0]],[[null,"dragstart"],[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var i=!0,a=l.component;return"longpress"===n&&(i=!1!==e.Bb(l,12).show()&&i),"keydown"===n&&(i=!1!==e.Bb(l,12)._handleKeydown(t)&&i),"touchend"===n&&(i=!1!==e.Bb(l,12)._handleTouchend()&&i),"dragstart"===n&&(i=!1!==a.onQrCodeDrag(t,e.Bb(l,12))&&i),"click"===n&&(i=!1!==a.onQrCodeClick(t)&&i),i},k.b,k.a)),e.qb(11,638976,null,0,_.a,[e.k],{level:[0,"level"],qrdata:[1,"qrdata"],usesvg:[2,"usesvg"]},null),e.qb(12,147456,[["qrCodeTooltip",4]],0,b.d,[d.c,e.k,c.a,e.Q,e.A,g.a,h.c,h.e,b.b,[2,m.b],[2,b.a],[2,p.g]],{position:[0,"position"],message:[1,"message"]},null),(l()(),e.rb(13,0,null,null,1,"h4",[["class","app-heading-no-top-margin"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["CONTEXT"])),(l()(),e.rb(15,0,null,null,8,"div",[["class","light-card-context"]],null,null,null,null,null)),(l()(),e.rb(16,0,null,null,1,"div",[["class","light-card-slider-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Building"])),(l()(),e.rb(18,0,null,null,5,"mat-slider",[["class","mat-slider"],["role","slider"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"mousedown"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,t){var i=!0,a=l.component;return"focus"===n&&(i=!1!==e.Bb(l,19)._onFocus()&&i),"blur"===n&&(i=!1!==e.Bb(l,19)._onBlur()&&i),"mousedown"===n&&(i=!1!==e.Bb(l,19)._onMousedown(t)&&i),"keydown"===n&&(i=!1!==e.Bb(l,19)._onKeydown(t)&&i),"keyup"===n&&(i=!1!==e.Bb(l,19)._onKeyup()&&i),"mouseenter"===n&&(i=!1!==e.Bb(l,19)._onMouseenter()&&i),"slide"===n&&(i=!1!==e.Bb(l,19)._onSlide(t)&&i),"slideend"===n&&(i=!1!==e.Bb(l,19)._onSlideEnd()&&i),"slidestart"===n&&(i=!1!==e.Bb(l,19)._onSlideStart(t)&&i),"ngModelChange"===n&&(i=!1!==(a.lightContext.building=t)&&i),i},y.b,y.a)),e.qb(19,245760,null,0,w.a,[e.k,h.e,e.h,[2,m.b],[8,null],[2,B.a]],{max:[0,"max"],min:[1,"min"],step:[2,"step"],thumbLabel:[3,"thumbLabel"],tickInterval:[4,"tickInterval"]},null),e.Fb(1024,null,x.e,function(l){return[l]},[w.a]),e.qb(21,671744,null,0,x.i,[[8,null],[8,null],[8,null],[6,x.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,x.f,null,[x.i]),e.qb(23,16384,null,0,x.g,[[4,x.f]],null,null),(l()(),e.rb(24,0,null,null,8,"div",[["class","light-card-context"]],null,null,null,null,null)),(l()(),e.rb(25,0,null,null,1,"div",[["class","light-card-slider-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Floor"])),(l()(),e.rb(27,0,null,null,5,"mat-slider",[["class","mat-slider"],["role","slider"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"mousedown"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,t){var i=!0,a=l.component;return"focus"===n&&(i=!1!==e.Bb(l,28)._onFocus()&&i),"blur"===n&&(i=!1!==e.Bb(l,28)._onBlur()&&i),"mousedown"===n&&(i=!1!==e.Bb(l,28)._onMousedown(t)&&i),"keydown"===n&&(i=!1!==e.Bb(l,28)._onKeydown(t)&&i),"keyup"===n&&(i=!1!==e.Bb(l,28)._onKeyup()&&i),"mouseenter"===n&&(i=!1!==e.Bb(l,28)._onMouseenter()&&i),"slide"===n&&(i=!1!==e.Bb(l,28)._onSlide(t)&&i),"slideend"===n&&(i=!1!==e.Bb(l,28)._onSlideEnd()&&i),"slidestart"===n&&(i=!1!==e.Bb(l,28)._onSlideStart(t)&&i),"ngModelChange"===n&&(i=!1!==(a.lightContext.floor=t)&&i),i},y.b,y.a)),e.qb(28,245760,null,0,w.a,[e.k,h.e,e.h,[2,m.b],[8,null],[2,B.a]],{max:[0,"max"],min:[1,"min"],step:[2,"step"],thumbLabel:[3,"thumbLabel"],tickInterval:[4,"tickInterval"]},null),e.Fb(1024,null,x.e,function(l){return[l]},[w.a]),e.qb(30,671744,null,0,x.i,[[8,null],[8,null],[8,null],[6,x.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,x.f,null,[x.i]),e.qb(32,16384,null,0,x.g,[[4,x.f]],null,null),(l()(),e.rb(33,0,null,null,8,"div",[["class","light-card-context"]],null,null,null,null,null)),(l()(),e.rb(34,0,null,null,1,"div",[["class","light-card-slider-label"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Room"])),(l()(),e.rb(36,0,null,null,5,"mat-slider",[["class","mat-slider"],["role","slider"]],[[8,"tabIndex",0],[1,"aria-disabled",0],[1,"aria-valuemax",0],[1,"aria-valuemin",0],[1,"aria-valuenow",0],[1,"aria-orientation",0],[2,"mat-slider-disabled",null],[2,"mat-slider-has-ticks",null],[2,"mat-slider-horizontal",null],[2,"mat-slider-axis-inverted",null],[2,"mat-slider-sliding",null],[2,"mat-slider-thumb-label-showing",null],[2,"mat-slider-vertical",null],[2,"mat-slider-min-value",null],[2,"mat-slider-hide-last-tick",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"mousedown"],[null,"keydown"],[null,"keyup"],[null,"mouseenter"],[null,"slide"],[null,"slideend"],[null,"slidestart"]],function(l,n,t){var i=!0,a=l.component;return"focus"===n&&(i=!1!==e.Bb(l,37)._onFocus()&&i),"blur"===n&&(i=!1!==e.Bb(l,37)._onBlur()&&i),"mousedown"===n&&(i=!1!==e.Bb(l,37)._onMousedown(t)&&i),"keydown"===n&&(i=!1!==e.Bb(l,37)._onKeydown(t)&&i),"keyup"===n&&(i=!1!==e.Bb(l,37)._onKeyup()&&i),"mouseenter"===n&&(i=!1!==e.Bb(l,37)._onMouseenter()&&i),"slide"===n&&(i=!1!==e.Bb(l,37)._onSlide(t)&&i),"slideend"===n&&(i=!1!==e.Bb(l,37)._onSlideEnd()&&i),"slidestart"===n&&(i=!1!==e.Bb(l,37)._onSlideStart(t)&&i),"ngModelChange"===n&&(i=!1!==(a.lightContext.room=t)&&i),i},y.b,y.a)),e.qb(37,245760,null,0,w.a,[e.k,h.e,e.h,[2,m.b],[8,null],[2,B.a]],{max:[0,"max"],min:[1,"min"],step:[2,"step"],thumbLabel:[3,"thumbLabel"],tickInterval:[4,"tickInterval"]},null),e.Fb(1024,null,x.e,function(l){return[l]},[w.a]),e.qb(39,671744,null,0,x.i,[[8,null],[8,null],[8,null],[6,x.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,x.f,null,[x.i]),e.qb(41,16384,null,0,x.g,[[4,x.f]],null,null)],function(l,n){var t=n.component;l(n,4,0,"warn","light defect switch"),l(n,6,0,t.light.isDefect),l(n,11,0,"M",t.qrCodeUrl,!0),l(n,12,0,"above","Click or scan or drag QR Code onto context filter to switch this light"),l(n,19,0,t.lightContextRanges.building.max,t.lightContextRanges.building.min,1,!0,t.lightContextRanges.building.tickInterval),l(n,21,0,t.lightContext.building),l(n,28,0,t.lightContextRanges.floor.max,t.lightContextRanges.floor.min,1,!0,t.lightContextRanges.floor.tickInterval),l(n,30,0,t.lightContext.floor),l(n,37,0,t.lightContextRanges.room.max,t.lightContextRanges.room.min,1,!0,t.lightContextRanges.room.tickInterval),l(n,39,0,t.lightContext.room)},function(l,n){l(n,3,1,[e.Bb(n,4).id,e.Bb(n,4).disabled?null:-1,e.Bb(n,4).checked,e.Bb(n,4).disabled,"before"==e.Bb(n,4).labelPosition,"NoopAnimations"===e.Bb(n,4)._animationMode,e.Bb(n,8).ngClassUntouched,e.Bb(n,8).ngClassTouched,e.Bb(n,8).ngClassPristine,e.Bb(n,8).ngClassDirty,e.Bb(n,8).ngClassValid,e.Bb(n,8).ngClassInvalid,e.Bb(n,8).ngClassPending]),l(n,10,0,""),l(n,18,1,[e.Bb(n,19).tabIndex,e.Bb(n,19).disabled,e.Bb(n,19).max,e.Bb(n,19).min,e.Bb(n,19).value,e.Bb(n,19).vertical?"vertical":"horizontal",e.Bb(n,19).disabled,e.Bb(n,19).tickInterval,!e.Bb(n,19).vertical,e.Bb(n,19)._invertAxis,e.Bb(n,19)._isSliding,e.Bb(n,19).thumbLabel,e.Bb(n,19).vertical,e.Bb(n,19)._isMinValue,e.Bb(n,19).disabled||e.Bb(n,19)._isMinValue&&e.Bb(n,19)._thumbGap&&e.Bb(n,19)._invertAxis,"NoopAnimations"===e.Bb(n,19)._animationMode,e.Bb(n,23).ngClassUntouched,e.Bb(n,23).ngClassTouched,e.Bb(n,23).ngClassPristine,e.Bb(n,23).ngClassDirty,e.Bb(n,23).ngClassValid,e.Bb(n,23).ngClassInvalid,e.Bb(n,23).ngClassPending]),l(n,27,1,[e.Bb(n,28).tabIndex,e.Bb(n,28).disabled,e.Bb(n,28).max,e.Bb(n,28).min,e.Bb(n,28).value,e.Bb(n,28).vertical?"vertical":"horizontal",e.Bb(n,28).disabled,e.Bb(n,28).tickInterval,!e.Bb(n,28).vertical,e.Bb(n,28)._invertAxis,e.Bb(n,28)._isSliding,e.Bb(n,28).thumbLabel,e.Bb(n,28).vertical,e.Bb(n,28)._isMinValue,e.Bb(n,28).disabled||e.Bb(n,28)._isMinValue&&e.Bb(n,28)._thumbGap&&e.Bb(n,28)._invertAxis,"NoopAnimations"===e.Bb(n,28)._animationMode,e.Bb(n,32).ngClassUntouched,e.Bb(n,32).ngClassTouched,e.Bb(n,32).ngClassPristine,e.Bb(n,32).ngClassDirty,e.Bb(n,32).ngClassValid,e.Bb(n,32).ngClassInvalid,e.Bb(n,32).ngClassPending]),l(n,36,1,[e.Bb(n,37).tabIndex,e.Bb(n,37).disabled,e.Bb(n,37).max,e.Bb(n,37).min,e.Bb(n,37).value,e.Bb(n,37).vertical?"vertical":"horizontal",e.Bb(n,37).disabled,e.Bb(n,37).tickInterval,!e.Bb(n,37).vertical,e.Bb(n,37)._invertAxis,e.Bb(n,37)._isSliding,e.Bb(n,37).thumbLabel,e.Bb(n,37).vertical,e.Bb(n,37)._isMinValue,e.Bb(n,37).disabled||e.Bb(n,37)._isMinValue&&e.Bb(n,37)._thumbGap&&e.Bb(n,37)._invertAxis,"NoopAnimations"===e.Bb(n,37)._animationMode,e.Bb(n,41).ngClassUntouched,e.Bb(n,41).ngClassTouched,e.Bb(n,41).ngClassPristine,e.Bb(n,41).ngClassDirty,e.Bb(n,41).ngClassValid,e.Bb(n,41).ngClassInvalid,e.Bb(n,41).ngClassPending])})}function G(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,14,"mat-card-footer",[["class","light-card-subtitle-dark mat-card-footer"]],null,null,null,null,null)),e.qb(1,16384,null,0,f.e,[],null,null),(l()(),e.rb(2,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.Ib(3,null,["Last switched: ",""])),e.Cb(131072,I.b,[e.h]),e.Eb(5,1),e.Eb(6,2),(l()(),e.rb(7,0,null,null,7,"div",[["class","app-card-footer-link-group"]],null,null,null,null,null)),(l()(),e.rb(8,16777216,null,null,3,"a",[["href","https://github.com/coatyio/coaty-examples/tree/master/remote-operations/js"],["mat-button",""],["target","_blank"]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,9)._haltDisabledEvents(t)&&i),"longpress"===n&&(i=!1!==e.Bb(l,10).show()&&i),"keydown"===n&&(i=!1!==e.Bb(l,10)._handleKeydown(t)&&i),"touchend"===n&&(i=!1!==e.Bb(l,10)._handleTouchend()&&i),i},z.c,z.a)),e.qb(9,180224,null,0,M.a,[g.a,h.e,e.k,[2,B.a]],null,null),e.qb(10,147456,null,0,b.d,[d.c,e.k,c.a,e.Q,e.A,g.a,h.c,h.e,b.b,[2,m.b],[2,b.a],[2,p.g]],{message:[0,"message"]},null),(l()(),e.rb(11,0,null,0,0,"img",[["alt","github-logo"],["src","./assets/images/github-icon.svg"]],null,null,null,null,null)),(l()(),e.rb(12,0,null,null,2,"a",[["href","https://coaty.io"],["mat-button",""],["target","_blank"]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,13)._haltDisabledEvents(t)&&i),i},z.c,z.a)),e.qb(13,180224,null,0,M.a,[g.a,h.e,e.k,[2,B.a]],null,null),(l()(),e.rb(14,0,null,0,0,"img",[["alt","coaty-logo"],["src","./assets/images/coaty-logo-accent.svg"]],null,null,null,null,null))],function(l,n){l(n,10,0,(null==n.context.ngIf?null:n.context.ngIf.packageInfo.name)+"@"+(null==n.context.ngIf?null:n.context.ngIf.packageInfo.version)+" on GitHub")},function(l,n){var t=n.component,i=e.Jb(n,3,0,l(n,6,0,e.Bb(n.parent,0),e.Jb(n,3,0,l(n,5,0,e.Bb(n.parent,1),e.Jb(n,3,0,e.Bb(n,4).transform(t.lastSwitched$)))),"HH:mm:ss.SSS"));l(n,3,0,i),l(n,8,0,e.Bb(n,9).disabled?-1:e.Bb(n,9).tabIndex||0,e.Bb(n,9).disabled||null,e.Bb(n,9).disabled.toString(),"NoopAnimations"===e.Bb(n,9)._animationMode),l(n,12,0,e.Bb(n,13).disabled?-1:e.Bb(n,13).tabIndex||0,e.Bb(n,13).disabled||null,e.Bb(n,13).disabled.toString(),"NoopAnimations"===e.Bb(n,13)._animationMode)})}function H(l){return e.Kb(2,[e.Cb(0,I.e,[e.v]),e.Cb(0,S,[]),(l()(),e.rb(2,0,null,null,25,"mat-card",[["class","app-card light-card-dark mat-card"],["id","contentHeightResolver"]],null,null,null,q.d,q.a)),e.qb(3,49152,null,0,f.a,[],null,null),(l()(),e.rb(4,0,null,0,13,"mat-card-header",[["class","mat-card-header"]],null,null,null,q.c,q.b)),e.qb(5,49152,null,0,f.f,[],null,null),(l()(),e.rb(6,0,null,0,1,"a",[["class","light-card-header-avatar mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),e.qb(7,16384,null,0,f.c,[],null,null),(l()(),e.rb(8,0,null,1,3,"mat-card-title",[["class","app-text-with-ellipsis mat-card-title"]],null,null,null,null,null)),e.qb(9,16384,null,0,f.j,[],null,null),(l()(),e.Ib(10,null,[""," "])),e.Cb(131072,I.b,[e.h]),(l()(),e.rb(12,0,null,1,2,"mat-card-subtitle",[["class","light-card-subtitle-dark mat-card-subtitle"]],null,null,null,null,null)),e.qb(13,16384,null,0,f.i,[],null,null),(l()(),e.Ib(14,null,["Building "," \u22c5 Floor "," \u22c5 Room "," "])),(l()(),e.ib(16777216,null,2,2,null,K)),e.qb(16,16384,null,0,I.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),e.Cb(131072,I.b,[e.h]),(l()(),e.ib(16777216,null,0,2,null,J)),e.qb(19,16384,null,0,I.m,[e.Q,e.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.Cb(131072,I.b,[e.h]),(l()(),e.ib(0,[["initializing",2]],0,0,null,V)),(l()(),e.ib(16777216,null,0,1,null,$)),e.qb(23,16384,null,0,I.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(24,0,null,0,1,"mat-divider",[["class","light-card-divider-dark mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,L.b,L.a)),e.qb(25,49152,null,0,j.a,[],null,null),(l()(),e.ib(16777216,null,1,1,null,G)),e.qb(27,16384,null,0,I.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,16,0,e.Jb(n,16,0,e.Bb(n,17).transform(t.brokerConnectionInfo$))),l(n,19,0,e.Jb(n,19,0,e.Bb(n,20).transform(t.lightColor$)),e.Bb(n,21)),l(n,23,0,t.lightContainer),l(n,27,0,null==t.lightContainer?null:t.lightContainer.runtime.options.agentInfo)},function(l,n){var t=n.component;l(n,10,0,e.Jb(n,10,0,e.Bb(n,11).transform(t.appContext.context$))),l(n,14,0,null==t.lightContext?null:t.lightContext.building,null==t.lightContext?null:t.lightContext.floor,null==t.lightContext?null:t.lightContext.room),l(n,24,0,e.Bb(n,25).vertical?"vertical":"horizontal",e.Bb(n,25).vertical,!e.Bb(n,25).vertical,e.Bb(n,25).inset)})}function Y(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-light",[],null,null,null,H,U)),e.qb(1,180224,null,0,Q,[E.a,I.i,D.a],null,null)],null,null)}var W=e.nb("app-light",Q,Y,{},{},[]),Z=t("M2Lx"),X=t("Wf4p"),ll=t("uGex"),nl=t("k2u+"),tl=t("4c35"),el=t("BgWK"),il=t("u7R8"),al=t("de3e"),ol=t("YhbO"),ul=t("jlZm"),rl=t("0/Q6"),sl=t("8mMr"),bl=t("seP3"),dl=t("PCNd"),cl=t("ZYCi"),gl=function(){return function(){}}();t.d(n,"LightModuleNgFactory",function(){return hl});var hl=e.ob(i,[],function(l){return e.yb([e.zb(512,e.j,e.db,[[8,[a.a,o.a,u.a,W]],[3,e.j],e.y]),e.zb(4608,I.o,I.n,[e.v,[2,I.z]]),e.zb(4608,x.k,x.k,[]),e.zb(4608,d.c,d.c,[d.i,d.e,e.j,d.h,d.f,e.r,e.A,I.d,m.b,[2,I.i]]),e.zb(5120,d.j,d.k,[d.c]),e.zb(4608,Z.c,Z.c,[]),e.zb(5120,b.b,b.c,[d.c]),e.zb(4608,p.f,X.e,[[2,X.i],[2,X.n]]),e.zb(5120,ll.a,ll.b,[d.c]),e.zb(1073742336,I.c,I.c,[]),e.zb(1073742336,x.j,x.j,[]),e.zb(1073742336,x.c,x.c,[]),e.zb(1073742336,nl.a,nl.a,[]),e.zb(1073742336,X.v,X.v,[]),e.zb(1073742336,m.a,m.a,[]),e.zb(1073742336,tl.f,tl.f,[]),e.zb(1073742336,g.b,g.b,[]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,d.g,d.g,[]),e.zb(1073742336,X.n,X.n,[[2,X.f],[2,p.g]]),e.zb(1073742336,el.e,el.e,[]),e.zb(1073742336,X.x,X.x,[]),e.zb(1073742336,M.c,M.c,[]),e.zb(1073742336,il.e,il.e,[]),e.zb(1073742336,f.h,f.h,[]),e.zb(1073742336,Z.d,Z.d,[]),e.zb(1073742336,al.c,al.c,[]),e.zb(1073742336,j.b,j.b,[]),e.zb(1073742336,ol.c,ol.c,[]),e.zb(1073742336,ul.c,ul.c,[]),e.zb(1073742336,s.c,s.c,[]),e.zb(1073742336,X.p,X.p,[]),e.zb(1073742336,rl.d,rl.d,[]),e.zb(1073742336,sl.b,sl.b,[]),e.zb(1073742336,h.a,h.a,[]),e.zb(1073742336,b.e,b.e,[]),e.zb(1073742336,X.t,X.t,[]),e.zb(1073742336,bl.d,bl.d,[]),e.zb(1073742336,ll.d,ll.d,[]),e.zb(1073742336,w.b,w.b,[]),e.zb(1073742336,v.c,v.c,[]),e.zb(1073742336,dl.a,dl.a,[]),e.zb(1073742336,cl.m,cl.m,[[2,cl.s],[2,cl.k]]),e.zb(1073742336,gl,gl,[]),e.zb(1073742336,i,i,[]),e.zb(1024,cl.i,function(){return[[{path:"",component:Q}]]},[])])})}}]);