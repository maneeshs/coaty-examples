function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,o){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var n=_superPropBase(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(o):i.value}})(t,e,o||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{powV:function(t,e,o){"use strict";o.r(e);var n,i=o("PCNd"),a=o("tyNb"),r=o("zP0r"),l=o("lJxs"),c=o("GtPT"),g=o("2Vo4"),s=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),_createClass(e,[{key:"onInit",value:function(){_get(_getPrototypeOf(e.prototype),"onInit",this).call(this),this._light=this.createLight(),this._lightContext=this.createLightContext(this.options.building,this.options.floor,this.options.room),this._lightStatus=this.createLightStatus(this.options.lightOn,this.options.lightColor,this.options.lightLuminosity),this._lightColorChangeSubject=new g.a(this.convertLightStatusToColor()),this._lightColorChange$=this._lightColorChangeSubject.asObservable()}},{key:"onCommunicationManagerStarting",value:function(){_get(_getPrototypeOf(e.prototype),"onCommunicationManagerStarting",this).call(this),this.observeCallEvents()}},{key:"observeCallEvents",value:function(){var t=this;return this.communicationManager.observeCall(this.runtime.commonOptions.extra.lightControlOperation,this._lightContext).subscribe((function(e){var o=e.data.getParameterByName("on"),n=e.data.getParameterByName("color"),i=e.data.getParameterByName("luminosity"),a=e.data.getParameterByName("switchTime");t.validateSwitchOpParams(o,n,i,a)?setTimeout((function(){t.light.isDefect?e.returnEvent(c.ReturnEvent.withError(1,"Light is defect",{lightId:t._light.objectId,triggerTime:Date.now()})):(t.updateLightStatus(o,n,i),t._lightColorChangeSubject.next(t.convertLightStatusToColor()),e.returnEvent(c.ReturnEvent.withResult(t._lightStatus.on,{lightId:t._light.objectId,triggerTime:Date.now()})))}),Math.max(0,void 0===a?0:a)):e.returnEvent(c.ReturnEvent.withError(c.RemoteCallErrorCode.InvalidParameters,c.RemoteCallErrorMessage.InvalidParameters,{lightId:t._light.objectId,triggerTime:Date.now()}))}))}},{key:"createLight",value:function(){return{coreType:"CoatyObject",objectType:"coaty.examples.remoteops.Light",objectId:this.runtime.newUuid(),name:"Light",isDefect:!1}}},{key:"createLightStatus",value:function(t,e,o){return{coreType:"CoatyObject",objectType:"coaty.examples.remoteops.LightStatus",objectId:this.runtime.newUuid(),name:"LightStatus",parentObjectId:this._light.objectId,on:t,luminosity:o,color:e}}},{key:"createLightContext",value:function(t,e,o){return{coreType:"CoatyObject",objectType:"coaty.examples.remoteops.LightContext",objectId:this.runtime.newUuid(),name:"LightContext",parentObjectId:this._light.objectId,lightId:this._light.objectId,building:t,floor:e,room:o}}},{key:"validateSwitchOpParams",value:function(t,e,o,n){return!(void 0!==t&&"boolean"!=typeof t||!(void 0===o||"number"==typeof o&&o>=0&&o<=1)||void 0!==n&&"number"!=typeof n||!function(t){return Array.isArray(t)&&4===t.length&&t[0]>=0&&t[0]<=255&&t[1]>=0&&t[1]<=255&&t[2]>=0&&t[2]<=255&&t[3]>=0&&t[3]<=1}(e)||0===e[0]&&0===e[1]&&0===e[2])}},{key:"updateLightStatus",value:function(t,e,o){var n=this._lightStatus,i=n.on,a=n.color,r=n.luminosity;void 0===t||t===i?void 0===e||e===a?void 0===o||o===r||(this._lightStatus=this.createLightStatus(i,a,o)):this._lightStatus=this.createLightStatus(i,e,void 0===o||o===r?r:o):this._lightStatus=this.createLightStatus(t,void 0===e||e===a?a:e,void 0===o||o===r?r:o)}},{key:"convertLightStatusToColor",value:function(){var t=this._lightStatus,e=t.on,o=t.color,n=t.luminosity;return e&&0!==n?"rgba(".concat(o[0],", ").concat(o[1],", ").concat(o[2],", ").concat((n*o[3]).toFixed(2),")"):"transparent"}},{key:"light",get:function(){return this._light}},{key:"lightContext",get:function(){return this._lightContext}},{key:"lightColorChange$",get:function(){return this._lightColorChange$}}]),e}(c.Controller),h=o("fXoL"),u=o("/Uk7"),d=o("ofXK"),b=o("tXAj"),m=o("Wp6s"),p=o("f0Cb"),f=o("NFeN"),C=o("Qu3c"),v=o("1jcm"),y=o("3Pt+"),k=o("DoL9"),x=o("5RNC"),_=o("bTqV"),w=((n=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){if(null!=t)return new Date}}]),t}()).\u0275fac=function(t){return new(t||n)},n.\u0275pipe=h.Mb({name:"dateNow",type:n,pure:!0}),n);function O(t,e){if(1&t&&(h.Sb(0,"mat-icon",10),h.yc(1),h.Rb()),2&t){var o=e.ngIf;h.kc("matTooltip",o.isOnline?"Connected to "+o.brokerHost:"Not connected to "+o.brokerHost),h.Bb(1),h.Ac(" ",o.isOnline?"wifi":"wifi_off"," ")}}function S(t,e){if(1&t&&h.Ob(0,"img",11),2&t){var o=e.ngIf,n=h.ec();h.vc("background-color",n.light.isDefect?"transparent":o)}}function I(t,e){1&t&&(h.Sb(0,"mat-card-content"),h.yc(1,"Initializing..."),h.Rb())}function R(t,e){if(1&t){var o=h.Tb();h.Sb(0,"mat-card-content",12),h.Sb(1,"div",13),h.Sb(2,"mat-slide-toggle",14),h.ac("ngModelChange",(function(t){return h.qc(o),h.ec().light.isDefect=t})),h.yc(3," Defect "),h.Rb(),h.Rb(),h.Sb(4,"qrcode",15,16),h.ac("dragstart",(function(t){h.qc(o);var e=h.oc(5);return h.ec().onQrCodeDrag(t,e)}))("click",(function(t){return h.qc(o),h.ec().onQrCodeClick(t)})),h.Rb(),h.Sb(6,"h4",17),h.yc(7,"CONTEXT"),h.Rb(),h.Sb(8,"div",18),h.Sb(9,"div",19),h.yc(10,"Building"),h.Rb(),h.Sb(11,"mat-slider",20),h.ac("ngModelChange",(function(t){return h.qc(o),h.ec().lightContext.building=t})),h.Rb(),h.Rb(),h.Sb(12,"div",18),h.Sb(13,"div",19),h.yc(14,"Floor"),h.Rb(),h.Sb(15,"mat-slider",20),h.ac("ngModelChange",(function(t){return h.qc(o),h.ec().lightContext.floor=t})),h.Rb(),h.Rb(),h.Sb(16,"div",18),h.Sb(17,"div",19),h.yc(18,"Room"),h.Rb(),h.Sb(19,"mat-slider",20),h.ac("ngModelChange",(function(t){return h.qc(o),h.ec().lightContext.room=t})),h.Rb(),h.Rb(),h.Rb()}if(2&t){var n=h.ec();h.Bb(2),h.kc("color","warn")("ngModel",n.light.isDefect),h.Bb(2),h.kc("title","")("qrdata",n.qrCodeUrl)("usesvg",!0)("level","M"),h.Bb(7),h.kc("min",n.lightContextRanges.building.min)("max",n.lightContextRanges.building.max)("tickInterval",n.lightContextRanges.building.tickInterval)("step",1)("thumbLabel",!0)("ngModel",n.lightContext.building),h.Bb(4),h.kc("min",n.lightContextRanges.floor.min)("max",n.lightContextRanges.floor.max)("tickInterval",n.lightContextRanges.floor.tickInterval)("step",1)("thumbLabel",!0)("tickInterval",10)("ngModel",n.lightContext.floor),h.Bb(4),h.kc("min",n.lightContextRanges.room.min)("max",n.lightContextRanges.room.max)("tickInterval",n.lightContextRanges.room.tickInterval)("step",1)("thumbLabel",!0)("tickInterval",10)("ngModel",n.lightContext.room)}}function P(t,e){if(1&t&&(h.Sb(0,"mat-card-footer",3),h.Sb(1,"div"),h.yc(2),h.fc(3,"date"),h.fc(4,"dateNow"),h.fc(5,"async"),h.Rb(),h.Sb(6,"div",21),h.Sb(7,"a",22),h.Ob(8,"img",23),h.Rb(),h.Sb(9,"a",24),h.Ob(10,"img",25),h.Rb(),h.Rb(),h.Rb()),2&t){var o=e.ngIf,n=h.ec();h.Bb(2),h.Ac("Last switched: ",h.hc(3,2,h.gc(4,5,h.gc(5,7,n.lastSwitched$)),"HH:mm:ss.SSS"),""),h.Bb(5),h.kc("matTooltip",(null==o?null:o.packageInfo.name)+"@"+(null==o?null:o.packageInfo.version)+" on GitHub")}}var j,L,M=[{path:"",component:(j=function(){function t(e,o,n){_classCallCheck(this,t),this.appContext=e,this.location=o,this.appContext.setContext("Light"),this.initNgModelBindings(),this.connectLightController(n)}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.lightContainer&&this.lightContainer.shutdown()}},{key:"onQrCodeClick",value:function(t){window.open(this.qrCodeUrl,"_blank")}},{key:"onQrCodeDrag",value:function(t,e){e.hide(),t.dataTransfer.setData("text/plain",this.qrCodeUrl),t.dataTransfer.setData("text/qrcode",this.qrCodeUrl)}},{key:"getQrCodeUrl",value:function(){var t=this.location.prepareExternalUrl("/control?light_id=".concat(this.light?this.light.objectId:""));return window.location.protocol+"//"+window.location.host+t}},{key:"initNgModelBindings",value:function(){this.lightContext={building:0,floor:0,room:0},this.lightContextRanges={building:{min:0,max:0,tickInterval:1},floor:{min:0,max:0,tickInterval:1},room:{min:0,max:0,tickInterval:1}}}},{key:"connectLightController",value:function(t){var e=this;t.resolveContainer("LightAgent","LightController",s).then((function(t){e.lightContainer=t;var o=t.getController("LightController");e.lightContextRanges=t.runtime.commonOptions.extra.lightContextRanges,e.light=o.light,e.lightContext=o.lightContext,e.lightColor$=o.lightColorChange$,e.lastSwitched$=o.lightColorChange$.pipe(Object(r.a)(1)),e.qrCodeUrl=e.getQrCodeUrl(),e.initBrokerConnectionInfo(o.options),e.appContext.setContext("Light #".concat(e.light.objectId))})).catch((function(t){throw new Error("Agent container for LightComponent couldn't be resolved: ".concat(t))}))}},{key:"initBrokerConnectionInfo",value:function(t){var e=this;this.brokerConnectionInfo$=this.lightContainer.communicationManager.observeCommunicationState().pipe(Object(l.a)((function(t){return{state:t,isOnline:t===c.CommunicationState.Online,brokerHost:e.lightContainer.communicationManager.options.brokerUrl}})))}}]),t}(),j.\u0275fac=function(t){return new(t||j)(h.Nb(u.a),h.Nb(d.i),h.Nb(b.a))},j.\u0275cmp=h.Hb({type:j,selectors:[["app-light"]],decls:17,vars:15,consts:[[1,"app-card","light-card-dark"],["mat-card-avatar","",1,"light-card-header-avatar"],[1,"app-text-with-ellipsis"],[1,"light-card-subtitle-dark"],["class","light-card-title-icon",3,"matTooltip",4,"ngIf"],["mat-card-image","","class","app-map-card-image-centered light-card-image-mask","src","./assets/images/light-bulb-mask.png","alt","Photo of a light bulb",3,"background-color",4,"ngIf","ngIfElse"],["initializing",""],["class","light-card-content",4,"ngIf"],[1,"light-card-divider-dark"],["class","light-card-subtitle-dark",4,"ngIf"],[1,"light-card-title-icon",3,"matTooltip"],["mat-card-image","","src","./assets/images/light-bulb-mask.png","alt","Photo of a light bulb",1,"app-map-card-image-centered","light-card-image-mask"],[1,"light-card-content"],[1,"light-operation-param"],["aria-label","light defect switch",3,"color","ngModel","ngModelChange"],["draggable","true","matTooltip","Click or scan or drag QR Code onto context filter to switch this light","matTooltipPosition","above",1,"light-map-card-image-qrcode",3,"title","qrdata","usesvg","level","dragstart","click"],["qrCodeTooltip","matTooltip"],[1,"app-heading-no-top-margin"],[1,"light-card-context"],[1,"light-card-slider-label"],[3,"min","max","tickInterval","step","thumbLabel","ngModel","ngModelChange"],[1,"app-card-footer-link-group"],["mat-button","","href","https://github.com/coatyio/coaty-examples/tree/master/remote-operations/js","target","_blank",3,"matTooltip"],["src","./assets/images/github-icon.svg","alt","github-logo"],["mat-button","","href","https://coaty.io","target","_blank"],["src","./assets/images/coaty-logo-accent.svg","alt","coaty-logo"]],template:function(t,e){if(1&t&&(h.Sb(0,"mat-card",0),h.Sb(1,"mat-card-header"),h.Ob(2,"a",1),h.Sb(3,"mat-card-title",2),h.yc(4),h.fc(5,"async"),h.Rb(),h.Sb(6,"mat-card-subtitle",3),h.yc(7),h.Rb(),h.wc(8,O,2,2,"mat-icon",4),h.fc(9,"async"),h.Rb(),h.wc(10,S,1,2,"img",5),h.fc(11,"async"),h.wc(12,I,2,0,"ng-template",null,6,h.xc),h.wc(14,R,20,26,"mat-card-content",7),h.Ob(15,"mat-divider",8),h.wc(16,P,11,9,"mat-card-footer",9),h.Rb()),2&t){var o=h.oc(13);h.Bb(4),h.Ac("",h.gc(5,9,e.appContext.context$)," "),h.Bb(3),h.Cc("Building ",null==e.lightContext?null:e.lightContext.building," \u22c5 Floor ",null==e.lightContext?null:e.lightContext.floor," \u22c5 Room ",null==e.lightContext?null:e.lightContext.room," "),h.Bb(1),h.kc("ngIf",h.gc(9,11,e.brokerConnectionInfo$)),h.Bb(2),h.kc("ngIf",h.gc(11,13,e.lightColor$))("ngIfElse",o),h.Bb(4),h.kc("ngIf",e.lightContainer),h.Bb(2),h.kc("ngIf",null==e.lightContainer?null:e.lightContainer.runtime.commonOptions.agentInfo)}},directives:[m.a,m.f,m.c,m.j,m.i,d.m,p.a,f.a,C.a,m.g,m.d,v.a,y.g,y.i,k.a,x.a,m.e,_.a],pipes:[d.b,d.e,w],styles:[".light-card-dark[_ngcontent-%COMP%]{background:#37474f;color:#eceff1}.light-card-divider-dark[_ngcontent-%COMP%]{background:#607d8b}.light-card-subtitle-dark[_ngcontent-%COMP%]{color:#b0bec5}.light-card-header-avatar[_ngcontent-%COMP%]{background-image:url(/coaty-examples/remote-operations/assets/images/light-bulb-avatar.jpg);background-size:cover}.light-card-title-icon[_ngcontent-%COMP%]{margin-left:auto;margin-right:32px}.light-operation-param[_ngcontent-%COMP%]{color:#424242;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-flex:0;flex:0 0 auto;position:absolute!important;margin-top:calc(-65% + 8px)!important;left:12px;right:8px}.light-card-image-mask[_ngcontent-%COMP%]{background-image:url(/coaty-examples/remote-operations/assets/images/light-bulb.jpg);background-size:cover;background-color:transparent;background-blend-mode:overlay;-webkit-transition:background-color 1s linear;transition:background-color 1s linear}.light-map-card-image-qrcode[_ngcontent-%COMP%]{position:absolute!important;margin-top:calc(-30vw - 34px)!important;width:30vw;height:30vw;left:8px;right:8px;border:4px solid transparent;border-radius:4px;cursor:-webkit-grab;cursor:grab}.light-map-card-image-qrcode[_ngcontent-%COMP%]:hover{border-color:#ffd740}.light-card-content[_ngcontent-%COMP%]{margin-bottom:8px}.light-card-context[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.light-card-slider-label[_ngcontent-%COMP%]{align-self:baseline;min-width:4em}"],changeDetection:0}),j)}],T=((L=function t(){_classCallCheck(this,t)}).\u0275mod=h.Lb({type:L}),L.\u0275inj=h.Kb({factory:function(t){return new(t||L)},imports:[[a.c.forChild(M)],a.c]}),L);o.d(e,"LightModule",(function(){return q}));var B,q=((B=function t(){_classCallCheck(this,t)}).\u0275mod=h.Lb({type:B}),B.\u0275inj=h.Kb({factory:function(t){return new(t||B)},imports:[[i.a,T]]}),B)}}]);