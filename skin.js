// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: force one.ggsk
// Generated 2026-09-01T11:05:55

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/webp;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.webp';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_4);
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
		});
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4wIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._chevron_black__img.setAttribute('src',basePath + 'images/chevron_black.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._chevron_white__img.setAttribute('src',basePath + 'images/chevron_white.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._chevron_white__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._chevron_white__imgo.setAttribute('src',basePath + 'images/chevron_white__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		ela=me._chevron_white__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me._chevron_white__imga.setAttribute('src',basePath + 'images/chevron_white__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggSubElementActive = ela;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.onmouseenter=function (e) {
			me._chevron_white__img.style.visibility='hidden';
			me._chevron_white__imgo.style.visibility='inherit';
			me.elementMouseOver['chevron_white']=true;
		}
		me._chevron_white.onmousedown=function (e) {
			me._chevron_white__imga.style.visibility='inherit';
			me._chevron_white__imgo.style.visibility='hidden';
		}
		me._chevron_white.onmouseup=function (e) {
			me._chevron_white__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._chevron_white__img.style.visibility='inherit';
			} else {
				me._chevron_white__imgo.style.visibility='inherit';
			}
		}
		me._chevron_white.onmouseleave=function (e) {
			me._chevron_white__img.style.visibility='inherit';
			me._chevron_white__imgo.style.visibility='hidden';
			me._chevron_white__imga.style.visibility='hidden';
			me.elementMouseOver['chevron_white']=false;
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me.elementMouseOver['chevron_white']=false;
		el = me.__3d_code;
		javascript:"";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};