System.register("chunks:///_virtual/constant.ts",["cc"],(function(t){var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"f69fbiSzZdIGr7XKmH6H409","constant",void 0);t("BLOCK_SIZE",40),t("GameState",function(t){return t[t.GS_INIT=0]="GS_INIT",t[t.GS_PLAYING=1]="GS_PLAYING",t[t.GS_END=2]="GS_END",t}({}));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/events.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"edb35Wyp0VMH41QbTJdO6rH","events",void 0);e("Events",function(e){return e.JumpEnd="JumpEnd",e}({}));n._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./constant.ts","./PlayerController.ts","./events.ts"],(function(t){var e,n,r,i,a,o,s,l,u,c,p,h,f,d,y,b,g,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.Prefab,l=t.CCInteger,u=t.Node,c=t.Label,p=t.Vec3,h=t.randomRangeInt,f=t.instantiate,d=t.Component},function(t){y=t.GameState,b=t.BLOCK_SIZE},function(t){g=t.PlayerController},function(t){C=t.Events}],execute:function(){var S,m,v,I,L,P,G,N,M,_,w,B,k;a._RF.push({},"742d3Q4CnBKfo0YjVFaQBnI","GameManager",void 0);var E=o.ccclass,R=o.property,T=function(t){return t[t.None=0]="None",t[t.Stone=1]="Stone",t}(T||{});t("GameManager",(S=E("GameManager"),m=R({type:s}),v=R({type:l}),I=R({type:u}),L=R({type:g}),P=R({type:c}),S((M=e((N=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,r(e,"boxPrefab",M,i(e)),r(e,"roadLength",_,i(e)),r(e,"startMenu",w,i(e)),r(e,"playerCtrl",B,i(e)),r(e,"stepsLabel",k,i(e)),e.road=[],e}n(e,t);var a=e.prototype;return a.start=function(){var t;this.setCurState(y.GS_INIT),null==(t=this.playerCtrl)||t.node.on(C.JumpEnd,this.onPlayerJumpEnd,this)},a.update=function(t){},a.onPlayerJumpEnd=function(t){this.stepsLabel&&(this.stepsLabel.string=Math.min(t,this.roadLength).toString()),this.checkResult(t)},a.checkResult=function(t){t<this.roadLength?this.road[t]===T.None&&this.setCurState(y.GS_INIT):this.setCurState(y.GS_INIT)},a.init=function(){this.startMenu&&(this.startMenu.active=!0),this.generateRoad(),this.playerCtrl&&(this.playerCtrl.setInputActive(!1),this.playerCtrl.node.setPosition(p.ZERO),this.playerCtrl.reset())},a.generateRoad=function(){var t=this;this.node.removeAllChildren(),this.road.push(T.Stone);for(var e=1;e<this.roadLength;e++)this.road[e-1]===T.None?this.road.push(T.Stone):this.road.push(h(T.None,T.Stone+1));this.road.map((function(e){return t.spawnBlockByType(e)})).forEach((function(e,n){e&&(t.node.addChild(e),e.setPosition(n*b,0,0))}))},a.onStartButtonClicked=function(){this.setCurState(y.GS_PLAYING)},a.spawnBlockByType=function(t){return this.boxPrefab&&t!==T.None?f(this.boxPrefab):null},a.setCurState=function(t){var e=this;switch(t){case y.GS_INIT:this.init();break;case y.GS_PLAYING:this.startMenu&&(this.startMenu.active=!1),this.stepsLabel&&(this.stepsLabel.string="0"),setTimeout((function(){e.playerCtrl&&e.playerCtrl.setInputActive(!0)}),.1);break;case y.GS_END:}},e}(d)).prototype,"boxPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=e(N.prototype,"roadLength",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 50}}),w=e(N.prototype,"startMenu",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(N.prototype,"playerCtrl",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(N.prototype,"stepsLabel",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=N))||G));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameManager.ts","./PlayerController.ts","./constant.ts","./events.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./constant.ts","./events.ts"],(function(t){var e,i,n,o,s,u,r,p,h,c,a,l,m,T,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,u=t._decorator,r=t.Animation,p=t.Node,h=t.Input,c=t.input,a=t.EventMouse,l=t.Vec3,m=t.Component},function(t){T=t.BLOCK_SIZE},function(t){f=t.Events}],execute:function(){var d,y,S,v,P,g,B,E,J;s._RF.push({},"3b0b6nugvNCZp0F6dAPvDGQ","PlayerController",void 0);var j=u.ccclass,A=u.property;t("PlayerController",(d=j("PlayerController"),y=A(r),S=A(p),v=A(p),d((B=e((g=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))||this).startJump=!1,e.jumpStep=0,e.curJumpTime=0,e.jumpTime=.1,e.curJumpSpeed=0,e.curPos=new l,e.deltaPos=new l(0,0,0),e.targetPos=new l,n(e,"BodyAnim",B,o(e)),e.curMoveSteps=0,n(e,"leftTouch",E,o(e)),n(e,"rightTouch",J,o(e)),e}i(e,t);var s=e.prototype;return s.start=function(){},s.reset=function(){this.curMoveSteps=0},s.setInputActive=function(t){var e,i,n,o;t?(null==(e=this.leftTouch)||e.on(h.EventType.TOUCH_START,this.onTouchStart,this),null==(i=this.rightTouch)||i.on(h.EventType.TOUCH_START,this.onTouchStart,this),c.on(h.EventType.MOUSE_UP,this.onMouseUp,this)):(c.off(h.EventType.MOUSE_UP,this.onMouseUp,this),null==(n=this.leftTouch)||n.off(h.EventType.TOUCH_START,this.onTouchStart,this),null==(o=this.rightTouch)||o.off(h.EventType.TOUCH_START,this.onTouchStart,this))},s.onTouchStart=function(t){var e=t.target;"LeftTouch"==(null==e?void 0:e.name)?this.jumpByStep(1):this.jumpByStep(2)},s.onMouseUp=function(t){var e=t.getButton();e===a.BUTTON_LEFT?this.jumpByStep(1):e===a.BUTTON_RIGHT&&this.jumpByStep(2)},s.update=function(t){this.startJump&&(this.curJumpTime+=t,this.curJumpTime>this.jumpTime?(this.node.setPosition(this.targetPos),this.startJump=!1,this.onOnceJumpEnd()):(this.node.getPosition(this.curPos),this.deltaPos.x=this.curJumpSpeed*t,l.add(this.curPos,this.curPos,this.deltaPos),this.node.setPosition(this.curPos)))},s.jumpByStep=function(t){if(!this.startJump){if(this.BodyAnim){var e=1===t?"oneStep":"twoStep";this.jumpTime=this.BodyAnim.getState(e).duration,this.BodyAnim.play(e)}this.startJump=!0,this.jumpStep=t,this.curJumpTime=0,this.curJumpSpeed=this.jumpStep*T/this.jumpTime,this.node.getPosition(this.curPos),l.add(this.targetPos,this.curPos,new l(this.jumpStep*T,0,0)),this.curMoveSteps+=t}},s.onOnceJumpEnd=function(){this.node.emit(f.JumpEnd,this.curMoveSteps)},e}(m)).prototype,"BodyAnim",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(g.prototype,"leftTouch",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=e(g.prototype,"rightTouch",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=g))||P));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});