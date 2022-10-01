(()=>{"use strict";let t=()=>{};let e,i,s={};function n(t,...e){(s[t]||[]).map((t=>t(...e)))}let a={get:(e,i)=>"_proxy"==i||t};function r(){return i}class h{constructor({spriteSheet:t,frames:e,frameRate:i,loop:s=!0}){this.spriteSheet=t,this.frames=e,this.frameRate=i,this.loop=s;let{width:n,height:a,margin:r=0}=t.frame;this.width=n,this.height=a,this.margin=r,this._f=0,this._a=0}clone(){return new h(this)}reset(){this._f=0,this._a=0}update(t=1/60){if(this.loop||this._f!=this.frames.length-1)for(this._a+=t;this._a*this.frameRate>=1;)this._f=++this._f%this.frames.length,this._a-=1/this.frameRate}render({x:t,y:e,width:i=this.width,height:s=this.height,context:n=r()}){let a=this.frames[this._f]/this.spriteSheet._f|0,h=this.frames[this._f]%this.spriteSheet._f|0;n.drawImage(this.spriteSheet.image,h*this.width+(2*h+1)*this.margin,a*this.height+(2*a+1)*this.margin,this.width,this.height,t,e,i,s)}}function o(){return new h(...arguments)}let c=/^\//,l=/\/$/,d=new WeakMap,u="";function p(t,e){return new URL(t,e).href}let g={},f={};function m(t){return window.__k||(window.__k={dm:d,u:p,d:f,i:g}),new Promise(((e,i)=>{let s,a,r;if(s=function(t,e){return[t.replace(l,""),t?e.replace(c,""):e].filter((t=>t)).join("/")}(u,t),g[s])return e(g[s]);a=new Image,a.onload=function(){r=p(s,window.location.href),g[function(t){let e=t.replace("."+function(t){return t.split(".").pop()}(t),"");return 2==e.split("/").length?e.replace(c,""):e}(t)]=g[s]=g[r]=this,n("assetLoaded",this,t),e(this)},a.onerror=function(){i("Unable to load image "+s)},a.src=s}))}function w(t,e,i){return Math.min(Math.max(t,i),e)}class x{constructor(t=0,e=0,i={}){this.x=t,this.y=e,i._c&&(this.clamp(i._a,i._b,i._d,i._e),this.x=t,this.y=e)}add(t){return new x(this.x+t.x,this.y+t.y,this)}subtract(t){return new x(this.x-t.x,this.y-t.y,this)}scale(t){return new x(this.x*t,this.y*t)}normalize(t=this.length()){return new x(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}clamp(t,e,i,s){this._c=!0,this._a=t,this._b=e,this._d=i,this._e=s}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?w(this._a,this._d,t):t}set y(t){this._y=this._c?w(this._b,this._e,t):t}}function y(){return new x(...arguments)}class _ extends class extends class{constructor(t){return this.init(t)}init(t={}){this.position=y(),this.velocity=y(),this.acceleration=y(),this.ttl=1/0,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let e=this.acceleration;t&&(e=e.scale(t)),this.velocity=this.velocity.add(e);let i=this.velocity;t&&(i=i.scale(t)),this.position=this.position.add(i),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}}{init({width:t=0,height:e=0,context:i=r(),render:s=this.draw,update:n=this.advance,children:a=[],anchor:h={x:0,y:0},opacity:o=1,rotation:c=0,scaleX:l=1,scaleY:d=1,...u}={}){this._c=[],super.init({width:t,height:e,context:i,anchor:h,opacity:o,rotation:c,scaleX:l,scaleY:d,...u}),this._di=!0,this._uw(),this.addChild(a),this._rf=s,this._uf=n}update(t){this._uf(t),this.children.map((e=>e.update&&e.update(t)))}render(){let t=this.context;t.save(),(this.x||this.y)&&t.translate(this.x,this.y),this.rotation&&t.rotate(this.rotation),1==this.scaleX&&1==this.scaleY||t.scale(this.scaleX,this.scaleY);let e=-this.width*this.anchor.x,i=-this.height*this.anchor.y;(e||i)&&t.translate(e,i),this.context.globalAlpha=this.opacity,this._rf(),(e||i)&&t.translate(-e,-i),this.children.map((t=>t.render&&t.render())),t.restore()}draw(){}_pc(){this._uw(),this.children.map((t=>t._pc()))}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:e=0,_wo:i=1,_wr:s=0,_wsx:n=1,_wsy:a=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=i*this.opacity,this._wsx=n*this.scaleX,this._wsy=a*this.scaleY,this._wx=this._wx*n,this._wy=this._wy*a,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wr=s+this.rotation;let{x:r,y:h}=function(t,e){let i=Math.sin(e),s=Math.cos(e);return{x:t.x*s-t.y*i,y:t.x*i+t.y*s}}({x:this._wx,y:this._wy},s);this._wx=r,this._wy=h,this._wx+=t,this._wy+=e}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}set children(t){this.removeChild(this._c),this.addChild(t)}get children(){return this._c}addChild(...e){e.flat().map((e=>{this.children.push(e),e.parent=this,e._pc=e._pc||t,e._pc()}))}removeChild(...t){t.flat().map((t=>{(function(t,e){let i=t.indexOf(e);if(-1!=i)return t.splice(i,1),!0})(this.children,t)&&(t.parent=null,t._pc())}))}get opacity(){return this._opa}set opacity(t){this._opa=t,this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,e=t){this.scaleX=t,this.scaleY=e}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}}{init({image:t,width:e=(t?t.width:void 0),height:i=(t?t.height:void 0),...s}={}){super.init({image:t,width:e,height:i,...s})}get animations(){return this._a}set animations(t){let e,i;for(e in this._a={},t)this._a[e]=t[e].clone(),i=i||this._a[e];this.currentAnimation=i,this.width=this.width||i.width,this.height=this.height||i.height}playAnimation(t){this.currentAnimation=this.animations[t],this.currentAnimation.loop||this.currentAnimation.reset()}advance(t){super.advance(t),this.currentAnimation&&this.currentAnimation.update(t)}draw(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.currentAnimation&&this.currentAnimation.render({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}}function v(){return new _(...arguments)}function M(t){let e=t.canvas;t.clearRect(0,0,e.width,e.height)}new WeakMap;let b=[],E={},S={},A={0:"south",1:"east",2:"west",3:"north",4:"leftshoulder",5:"rightshoulder",6:"lefttrigger",7:"righttrigger",8:"select",9:"start",10:"leftstick",11:"rightstick",12:"dpadup",13:"dpaddown",14:"dpadleft",15:"dpadright"};function k(t){b[t.gamepad.index]={pressedButtons:{},axes:{}}}function R(t){delete b[t.gamepad.index]}function T(){b.map((t=>{t.pressedButtons={},t.axes={}}))}function P(){let t=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:[];for(let e=0;e<t.length;e++){let i=t[e];if(!i)continue;i.buttons.map(((t,e)=>{let s=A[e],{pressed:n}=t,{pressedButtons:a}=b[i.index],r=a[s];!r&&n?[E[i.index],E].map((e=>{e?.[s]?.(i,t)})):r&&!n&&[S[i.index],S].map((e=>{e?.[s]?.(i,t)})),a[s]=n}));let{axes:s}=b[i.index];s.leftstickx=i.axes[0],s.leftsticky=i.axes[1],s.rightstickx=i.axes[2],s.rightsticky=i.axes[3]}}function C(t,{gamepad:e}={}){return isNaN(e)?b.some((e=>e.pressedButtons[t])):!!b[e]&&!!b[e].pressedButtons[t]}let I={},L={},Y={},B={Enter:"enter",Escape:"esc",Space:"space",ArrowLeft:"arrowleft",ArrowUp:"arrowup",ArrowRight:"arrowright",ArrowDown:"arrowdown"};function z(e=t,i){e._pd&&i.preventDefault(),e(i)}function D(t){let e=B[t.code],i=I[e];Y[e]=!0,z(i,t)}function G(t){let e=B[t.code],i=L[e];Y[e]=!1,z(i,t)}function W(){Y={}}function H(t){return!!Y[t]}function O(t){if(+t==t)return t;let e=[],i=t.split(".."),s=+i[0],n=+i[1],a=s;if(s<n)for(;a<=n;a++)e.push(a);else for(;a>=n;a--)e.push(a);return e}class X{constructor({image:t,frameWidth:e,frameHeight:i,frameMargin:s,animations:n}={}){if(!t)throw Error("You must provide an Image for the SpriteSheet");this.animations={},this.image=t,this.frame={width:e,height:i,margin:s},this._f=t.width/e|0,this.createAnimations(n)}createAnimations(t){let e,i;for(i in t){let{frames:s,frameRate:n,loop:a}=t[i];if(e=[],null==s)throw Error("Animation "+i+" must provide a frames property");[].concat(s).map((t=>{e=e.concat(O(t))})),this.animations[i]=o({spriteSheet:this,frames:e,frameRate:n,loop:a})}}}function F(){return new X(...arguments)}const N=[[0,64,[[[-1,27,65,10]]],[5,32],[62,32],10,[],[[32,32]],0],["1-1",64,[[[0,31,27,10],[17,31,10,30],[3,51,49,10],[51,14,10,47],[27,31,21,10],[38,14,10,27],[-1,14,49,10]],[[0,31,27,10],[17,31,10,30],[3,51,48,10],[51,14,10,47],[27,31,21,10],[-1,14,52,10]]],[5,36],[5,19],10,[[38,31],[51,14]],[[8,56]],0],[1,60,[[[0,0,10,10],[10,10,10,10],[20,20,10,10],[30,30,10,10],[40,40,10,10],[50,50,10,10]],[[0,0,10,10],[10,10,10,10],[20,20,10,10],[30,30,10,10],[40,40,10,10],[50,50,10,10],[10,0,10,10],[20,30,10,10],[50,40,10,10]],[[0,0,10,10],[10,10,10,10],[20,20,10,10],[30,30,10,10],[40,40,10,10],[50,50,10,10],[0,0,10,10],[10,10,10,10],[20,20,10,10],[30,30,10,10],[40,40,10,10],[50,50,10,10]],[[0,0,10,10],[10,10,10,10],[20,20,10,10],[30,30,10,10],[40,40,10,10],[50,50,10,10],[10,20,10,10],[30,40,10,10]]],[5,5],[55,55],10,[],[],5],[1,64,[[[0,5,58,10],[48,5,10,54],[4,49,44,10],[4,18,10,31],[4,18,40,10],[35,18,10,28],[17,36,18,10],[17,31,10,10]]],[5,10],[25,38],20,[],[],3],[2,128,[[[0,59,48,10],[98,59,48,10]],[[80,59,48,10],[38,25,10,44],[10,25,29,10],[10,5,10,20],[10,5,80,10],[80,5,10,54]],[[98,59,30,10],[80,5,10,54],[57,49,23,10],[57,49,10,74],[57,113,51,10],[98,69,10,44]]],[5,64],[128,64],13,[[38,59],[80,49]],[],0],[3,64,[[[0,27,18,10],[8,7,22,10],[8,49,22,10],[30,28,34,10],[40,7,20,10]],[[0,27,18,10],[8,49,22,10],[49,28,15,10],[8,27,10,32],[24,7,25,10],[30,7,10,31],[8,7,10,30]]],[4,32],[63,32],10,[],[[55,12]],15],[4,256,[[[0,231,24,10],[19,16,10,225],[19,16,207,10],[221,16,10,218],[53,229,178,10],[53,46,10,193],[53,46,136,10],[184,46,10,153],[88,194,106,10],[88,77,10,127],[88,77,67,10],[150,77,10,86],[119,158,41,10],[119,106,10,62]]],[5,236],[124,111],12,[],[[130,21],[130,234],[189,123]]],[5,128,[[[0,6,114,10],[108,6,10,33],[9,32,109,10],[9,38,10,30],[9,58,103,10],[108,58,10,32],[9,84,109,10],[9,91,10,26],[9,110,120,10],[9,21,10,24],[9,19,96,10],[19,45,99,10],[9,71,100,10],[19,97,99,10]],[[0,6,114,10],[108,6,10,36],[108,55,10,55],[9,84,96,10],[9,110,120,10],[9,19,10,23],[62,19,31,10],[9,71,96,10],[19,97,86,10],[95,19,10,26],[95,71,10,23],[95,45,23,10],[9,58,10,23],[19,32,15,10],[29,32,10,18],[29,45,26,10],[50,32,10,23],[50,32,24,10],[69,32,10,18],[19,58,71,10],[80,45,10,23],[69,45,21,10],[18,19,46,10],[83,19,10,18],[83,32,12,10]]],[5,11],[127,115],11,[[95,19],[19,84]],[[24,89]]],[6,256,[[[0,6,114,10],[108,6,10,36],[108,55,10,55],[9,84,96,10],[9,110,120,10],[9,19,10,23],[62,19,31,10],[9,71,96,10],[19,97,86,10],[95,19,10,26],[95,71,10,23],[95,45,23,10],[9,58,10,23],[19,32,15,10],[29,32,10,18],[29,45,26,10],[50,32,10,23],[50,32,24,10],[69,32,10,18],[19,58,71,10],[80,45,10,23],[69,45,21,10],[18,19,46,10],[83,19,10,18],[83,32,12,10],[118,110,51,10],[159,110,10,23],[159,128,26,10],[180,128,10,25],[180,148,28,10],[203,148,10,27],[180,170,33,10],[180,170,10,26],[180,191,28,10],[203,191,10,31],[149,218,64,10],[149,205,10,22],[149,205,37,10],[159,138,10,15],[135,148,34,10],[135,148,10,89],[135,232,65,10],[159,157,10,44],[190,128,34,10],[218,128,10,58],[218,181,19,10],[232,128,10,64],[232,191,10,13],[217,199,25,10],[217,199,10,38],[197,232,30,10],[190,205,18,10],[19,71,10,17]],[[0,6,114,10],[108,6,10,36],[108,55,10,55],[9,84,96,10],[9,110,96,10],[9,19,10,23],[62,19,31,10],[9,71,96,10],[19,97,86,10],[95,19,10,26],[95,71,10,23],[95,45,23,10],[9,58,10,23],[19,32,15,10],[29,32,10,18],[29,45,26,10],[50,32,10,23],[50,32,24,10],[69,32,10,18],[19,58,71,10],[80,45,10,23],[69,45,21,10],[18,19,46,10],[83,19,10,18],[83,32,12,10],[108,110,51,10],[159,110,10,23],[159,128,31,10],[180,148,28,10],[203,148,10,27],[180,170,33,10],[180,170,10,26],[180,191,28,10],[203,191,10,31],[149,218,64,10],[149,205,10,22],[149,205,44,10],[159,138,10,15],[135,148,34,10],[135,148,10,66],[135,232,65,10],[159,157,10,44],[190,128,34,10],[218,128,10,58],[218,181,19,10],[232,128,10,64],[232,191,10,13],[217,199,25,10],[217,199,10,38],[197,232,30,10],[190,205,18,10],[19,71,10,17],[19,94,10,37],[19,126,22,10],[36,126,10,23],[18,144,28,10],[18,144,10,25],[18,164,40,10],[53,164,10,28],[53,187,26,10],[74,187,10,21],[33,203,51,10],[33,203,10,21],[33,218,116,10]]],[118,115],[195,210],12,[[159,120],[19,84]],[[19,84]]],[7,128,[[[0,63,128,10],[28,28,10,35],[28,28,68,10],[91,28,10,70],[28,98,73,10],[28,68,10,40]],[[28,28,10,35],[28,28,68,10],[91,28,10,70],[28,98,73,10],[28,68,10,40],[-1,63,39,10],[91,63,36,10]]],[4,68],[127,68],10,[[60,63]],[]],[8,128,[[[0,55,27,10],[6,88,10,30],[6,112,30,10],[6,6,10,30],[6,6,30,10],[90,112,30,10],[112,86,10,36],[97,55,31,10],[112,8,10,30],[90,6,32,10],[46,55,34,10],[58,35,10,50]],[[0,55,27,10],[97,55,31,10],[46,55,34,10],[6,65,10,28],[26,112,36,10],[58,75,10,47],[58,16,10,30],[25,6,76,10],[112,28,10,27]]],[6,60],[125,60],7,[],[[6,6]],10]];class U{constructor(t){this.canvas=t,this.context=t.getContext("2d")}clear(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}draw(t,e,i,s,n){this.context.drawImage(t,e,i,s,n)}drawText(t){this.context.font=t.font,this.context.fillStyle=t.color;let e=t.x;if(!t.left){let i=this.context.measureText(t.text).width;e=t.x-i/2}this.context.fillText(t.text,e,t.y)}drawFadingText(t){this.drawText({text:t.text,font:`${t.size}px Arial`,color:`rgba(255, 255, 255, ${t.opacity})`,x:t.position[0],y:t.position[1],left:t.left})}drawPlayerLight(t,e,i,s){let n=1.5*this.canvas.width*(1-s)<=3*i?3*i:1.5*this.canvas.width*(1-s),a=i+.1*this.canvas.width*(1-s),r=this.context.createRadialGradient(t,e,a,t,e,n);r.addColorStop(0,"rgba(0, 0, 0, 0)"),r.addColorStop(1,"rgba(0, 0, 0, 1)"),this.context.fillStyle=r,this.context.arc(t,e,2*this.canvas.width,0,2*Math.PI),this.context.fill()}drawEndPoint(t,e,i){let s=this.context.createRadialGradient(t,e,0,t,e,2*i);s.addColorStop(0,"rgba(1, 1, 1, 0)"),s.addColorStop(1,"rgba(1, 1, 1, 1)"),this.context.fillStyle=s,this.context.arc(t,e,i,0,2*Math.PI),this.context.fill()}drawYouLooseText(){let t=this.canvas.height/12+"px Arial",e=this.canvas.width/2,i=this.canvas.height/2;this.drawText({text:'"We lost him"',font:t,color:"white",x:e,y:i})}drawYouWinText(){let t=this.canvas.width/2,e=this.canvas.height/2;this.drawText({text:'\n\n        "They will take care off you now my boy!"\n\n        \n        ',font:"20px Arial",color:"white",x:t,y:e})}drawImage(t,e,i,s,n){this.context.drawImage(t,e,i,s,n)}drawButton(t){let e=t.x,i=t.y,s=t.text;this.context.strokeStyle="#c8cdcc",this.context.font="24px Arial";let n=this.context.measureText(s).width+20,a=Math.floor(e-n/2)-10,r=Math.floor(i-17)-2;return t.active&&this.context.strokeRect(Math.floor(e-n/2)-10,Math.floor(i-17)-2,n,34),this.context.fillStyle="#c8cdcc",this.context.fillText(s,Math.floor(e-n/2),Math.floor(i+6)),{x:a,y:r,width:n,height:34}}setSize(t){this.canvas.width=t,this.canvas.height=t}}function q(){return H(B.Space)||C("start")}function $(t,e){return H(B.ArrowLeft)||H("a")||C("dpadleft")?[t-1<0?e.length-1:t-1,!0]:H(B.ArrowRight)||H("d")||C("dpadright")?[t+1>e.length-1?0:t+1,!0]:[t,!1]}class V{constructor(){this.timeElapsed=0,this.isRunning=!1,this.frames=0}tick(){return!(!this.isRunning||(this.frames++,6!=this.frames)||(this.timeElapsed+=.1,this.frames=0,0))}start(){this.isRunning=!0}reset(){this.timeElapsed=0,this.frames=0,this.isRunning=!1}}class j{constructor(t,e,i,s=!1){this.position=t,this.text=e,this.size=i,this.opacity=1,this.left=s}reduceOpacity(t=1){this.opacity-=.01/t}reset(){this.opacity=1}}const K=[new j([256,200],'"Stay with us!"',20),new j([75,100],'"Make room"',20),new j([315,64],'"We\'re loosing him"',20),new j([75,412],'"Go faster!"',20),new j([356,378],'"Hes looking pale"',20)],J=['"Almost there"','"Not that far now"','"Hang in there"','"Stay awake!"','"Its gonna be okey"'];function Q(...t){return Z.play(...t)}const Z={volume:.3,sampleRate:44100,x:new(window.AudioContext||webkitAudioContext),play:function(...t){return this.playSamples(this.buildSamples(...t))},playSamples:function(...t){const e=this.x.createBuffer(t.length,t[0].length,this.sampleRate),i=this.x.createBufferSource();return t.map(((t,i)=>e.getChannelData(i).set(t))),i.buffer=e,i.connect(this.x.destination),i.start(),i},buildSamples:function(t=1,e=.05,i=220,s=0,n=0,a=.1,r=0,h=1,o=0,c=0,l=0,d=0,u=0,p=0,g=0,f=0,m=0,w=1,x=0,y=0){const _=2*Math.PI;let v,M,b=this.sampleRate,E=o*=500*_/b/b,S=i*=(1+2*e*Math.random()-e)*_/b,A=[],k=0,R=0,T=0,P=1,C=0,I=0,L=0;for(c*=500*_/b**3,g*=_/b,l*=_/b,d*=b,u=u*b|0,M=(s=s*b+9)+(x*=b)+(n*=b)+(a*=b)+(m*=b)|0;T<M;A[T++]=L)++I%(100*f|0)||(L=r?r>1?r>2?r>3?Math.sin((k%_)**3):Math.max(Math.min(Math.tan(k),1),-1):1-(2*k/_%2+2)%2:1-4*Math.abs(Math.round(k/_)-k/_):Math.sin(k),L=(u?1-y+y*Math.sin(_*T/u):1)*(L>0?1:-1)*Math.abs(L)**h*t*this.volume*(T<s?T/s:T<s+x?1-(T-s)/x*(1-w):T<s+x+n?w:T<M-m?(M-T-m)/a*w:0),L=m?L/2+(m>T?0:(T<M-m?1:(M-T)/m)*A[T-m|0]/2):L),v=(i+=o+=c)*Math.cos(g*R++),k+=v-v*p*(1-1e9*(Math.sin(T)+1)%2),P&&++P>d&&(i+=l,S+=l,P=0),!u||++C%u||(i=S,o=E,P=P||1);return A},getNote:function(t=0,e=440){return e*2**(t/12)}},tt=[[[,0,400,.12,.16,,,,,,,,,.4,,,.26,,,.3],[.3,0,91,,.06,,4,2.4,,1.3,,,,5.3,,,.07,.3],[.3,0,44,,.8,,4,3.1,,1.3,,,,5.3,,,.07,.3],[.3,0,44,,.1,,4,3.1,,1.3,,,,5.3,,,.07,.3]],[[[,-.7,6,,,,,,,,6,,,,,,,,6,,,,,,17,,8,,,,13,,,,6,,,,,,,,6,,,,,,5,,6,,,,,,17,,8,,,,13,,,,],[1,.6,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,,,32,,,,,,],[2,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,18,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[3,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,18,,]]],[0],90,{title:"song",instruments:["Lead","Perc 1","Perc 2","Perc 3"],patterns:["Pattern 0"]}],et=(t=1,e=.05,i=220,s=0,n=0,a=.1,r=0,h=1,o=0,c=0,l=0,d=0,u=0,p=0,g=0,f=0,m=0,w=1,x=0,y=0)=>{let _,v,M=2*Math.PI,b=o*=500*M/st**2,E=(0<g?1:-1)*M/4,S=i*=(1+2*e*Math.random()-e)*M/st,A=[],k=0,R=0,T=0,P=1,C=0,I=0,L=0;for(c*=500*M/st**3,g*=M/st,l*=M/st,d*=st,u=st*u|0,v=(s=99+st*s)+(x*=st)+(n*=st)+(a*=st)+(m*=st)|0;T<v;A[T++]=L)++I%(100*f|0)||(L=r?1<r?2<r?3<r?Math.sin((k%M)**3):Math.max(Math.min(Math.tan(k),1),-1):1-(2*k/M%2+2)%2:1-4*Math.abs(Math.round(k/M)-k/M):Math.sin(k),L=(u?1-y+y*Math.sin(2*Math.PI*T/u):1)*(0<L?1:-1)*Math.abs(L)**h*t*it*(T<s?T/s:T<s+x?1-(T-s)/x*(1-w):T<s+x+n?w:T<v-m?(v-T-m)/a*w:0),L=m?L/2+(m>T?0:(T<v-m?1:(v-T)/m)*A[T-m|0]/2):L),_=(i+=o+=c)*Math.sin(R*g-E),k+=_-_*p*(1-1e9*(Math.sin(T)+1)%2),R+=_-_*p*(1-1e9*(Math.sin(T)**2+1)%2),P&&++P>d&&(i+=l,S+=l,P=0),!u||++C%u||(i=S,o=b,P=P||1);return A},it=.3,st=44100,nt=new(top.AudioContext||webkitAudioContext);function at(){const t=((...t)=>{let e=nt.createBufferSource(),i=nt.createBuffer(t.length,t[0].length,st);return t.map(((t,e)=>i.getChannelData(e).set(t))),e.buffer=i,e.connect(nt.destination),e})(...((t,e,i,s=125)=>{let n,a,r,h,o,c,l,d,u,p,g,f,m,w,x,y,_=[],v=[],M=[],b=0,E=1,S={},A=st/s*60>>2;for(;E;b++)_=[E=d=g=m=0],i.map(((s,g)=>{for(l=e[s][b]||[0,0,0],E|=!!e[s][b],x=m+(e[s][0].length-2-!d)*A,a=2,h=m;a<l.length+(g==i.length-1);d=++a){for(o=l[a],u=p!=(l[0]||0)|o|0,r=0;r<A&&d;r++>A-99&&u?f+=(f<1)/99:0)c=(1-f)*_[w++]/2||0,v[h]=(v[h]||0)+c*y-c,M[h]=(M[h++]||0)+c*y+c;o&&(f=o%1,y=l[1]||0,(o|=0)&&(_=S[[p=l[w=0]||0,o]]=S[[p,o]]||(n=[...t[p]],n[2]*=2**((o-12)/12),et(...n))))}m=x}));return[v,M]})(...tt));return t.loop=!0,t.start(),t}class rt{constructor(t){this.spriteSheet=new F({image:t,frameWidth:16,frameHeight:16,animations:{idle:{frames:"0..3",frameRate:5},death:{frames:"3..7",frameRate:5,loop:!1},gem:{frames:"8",frameRate:5},gemDeath:{frames:"9..12",frameRate:20,loop:!1}}})}getPlayer(){const t=v({x:0,y:0,rad:4,animations:this.spriteSheet.animations,speed:1,getPosition:function(){return{x:this.x+8,y:this.y+8}},setPosition:function(t,e){this.x=t-8,this.y=e-8}});return t.playAnimation("idle"),t}getGem(t){const e=new v({x:t[0]-8,y:t[1]-8,animations:this.spriteSheet.animations});return e.playAnimation("gem"),e}getExplodingGem(t){const e=new v({x:t[0]-8,y:t[1]-8,animations:this.spriteSheet.animations,startTime:(new Date).getTime(),animationOver:function(){return(new Date).getTime()-this.startTime>200}});return e.playAnimation("gemDeath"),e}}class ht{constructor(t,e,i){this.x=t,this.y=e,this.text=i,this.active=!1}toggle(){this.active=!this.active}}const ot=[{dialog:[{text:"5 October 1984",color:"white"}],time:.1},{dialog:[{text:'Captian: \n"Flight 815 requsting permission to land"',color:"#db6136"}],time:3},{dialog:[{text:'"Control tower here. Can you see the runway?"',color:"#4a8cbd"},{text:'"No. I have no view."',color:"#db6136"},{text:'"Drop 2,000 feet and keep contact."',color:"#4a8cbd"},{text:'"Roger."',color:"#db6136"}],time:7},{dialog:[{text:'"Can you see the runway?"',color:"#4a8cbd"},{text:'"No. Still no sight."',color:"#db6136"},{text:'"Wind is changing. Approach runway 5 from west instead."',color:"#4a8cbd"},{text:'"Roger."',color:"#db6136"}],time:11},{dialog:[{text:'Co-pilot: "Captain! We need to pull up and abort the landing."',color:"#edc06d"},{text:'"Wait one moment."',color:"#db6136"},{text:"\"Don't see, don't see, captian! Turn back!\"",color:"#edc06d"}],time:15},{dialog:[{text:"*crash*",color:"white"}],time:19},{dialog:[{text:"Later...",color:"white"}],time:21},{dialog:[{text:"*burning sound*",color:"white"}],time:23},{dialog:[{text:'Ly Yen: "Help! There is a boy here. HE IS ALIVE!"',color:"#aa4d8d"}],time:25},{dialog:[{text:'We need to get him to the hospital"',color:"#aa4d8d"},{text:'Sim Viklay: "Hold on! I\'ll get my bike"',color:"#729d3f"},{text:'"HURRY!!!"',color:"#aa4d8d"}],time:29},{dialog:[{text:'"Hold on to him. Let\'s go!"',color:"#729d3f"}],time:33},{dialog:[{text:"",color:"#729d3f"}],time:37}],ct=[{dialog:[{text:"Kossamak Hospital",color:"white"}],time:.1},{dialog:[{text:'Sim Viklay: "They will take care off you now my boy!""',color:"#729d3f"}],time:2},{dialog:[{text:'Ly Yen: "Lets go home..."',color:"#aa4d8d"}],time:5},{dialog:[{text:"",color:"#aa4d8d"}],time:8}];class lt{constructor(t,e,i,s){this.x1=t,this.x2=t+i,this.y1=e,this.y2=e+s,this.width=i,this.height=s}}class dt{constructor(t,e,i,s,n,a,r=[],h=[],o=0){this.name=t,this.size=e,this.startPoint=s,this.endPoint=n,this.time=a,this.switches=r,this.gems=h,this.map=this.setUpMap(i),this.timer=o,this.previosTime=0}setUpMap(t){const e=[];return t.forEach((t=>{const i=[];t.forEach((t=>{i.push(new lt(t[0],t[1],t[2],t[3]))})),e.push(i)})),e}draw(t,e,i){t.clear(),t.width=this.size,t.height=this.size;const s=t.context;this.map[i].forEach((t=>{if(t.width>=t.height){for(let i=0;i<Math.floor(t.width/10);i++)s.drawImage(e,t.x1+10*i,t.y1,10,10);t.width%10!=0&&s.drawImage(e,t.x1+10*Math.floor(t.width/10),t.y1,t.width%10,10)}else{for(let i=0;i<Math.floor(t.height/10);i++)s.drawImage(e,t.x1,t.y1+10*i,10,10);t.height%10!=0&&s.drawImage(e,t.x1,t.y1+10*Math.floor(t.height/10),10,t.height%10)}})),s.fillStyle="grey",s.fill()}startTimer(){this.timerRunning=!0,this.previosTime=(new Date).getTime()}checkTimer(){if(this.timerRunning){const t=(new Date).getTime();if(Math.floor((t-this.previosTime)/100)==this.timer)return this.previosTime=t,!0}return!1}delete(t,e){"switches"===t&&this.switches.splice(e,1),"gems"===t&&this.gems.splice(e,1)}}class ut{constructor(t,e,i,s,n){this.text=t,this.x=e,this.y=i,this.size=s,this.color=n,this.font=`${s}px Arial`}}let{canvas:pt,context:gt}=function(t,{contextless:s=!1}={}){if(e=document.getElementById(t)||t||document.querySelector("canvas"),s&&(e=e||new Proxy({},a)),!e)throw Error("You must provide a canvas element for the game");return i=e.getContext("2d")||new Proxy({},a),i.imageSmoothingEnabled=!1,n("init"),{canvas:e,context:i}}(document.getElementById("kontra"));pt.style.backgroundColor="rgba(0, 0, 0, 0)",xt(pt);const ft=new U(document.getElementById("background"));xt(ft.canvas);const mt=new U(document.getElementById("text-layer"));xt(mt.canvas);const wt=new U(document.getElementById("light-layer"));function xt(t){let e=(window.innerWidth-document.getElementById("text-layer").offsetWidth)/2;t.style.left=e+"px"}var yt,_t;xt(wt.canvas),u="./assets/",function(){let t;for(t=0;t<26;t++)B["Key"+String.fromCharCode(t+65)]=String.fromCharCode(t+97);for(t=0;t<10;t++)B["Digit"+t]=B["Numpad"+t]=""+t;window.addEventListener("keydown",D),window.addEventListener("keyup",G),window.addEventListener("blur",W)}(),window.addEventListener("gamepadconnected",k),window.addEventListener("gamepaddisconnected",R),window.addEventListener("blur",T),_t=P,s[yt="tick"]=s[yt]||[],s[yt].push(_t),function(){const t=[m("full-sheet.png"),m("floor-export.png"),m("splash.png")];return Promise.all(t)}().then((e=>{let i,s,a=0,h=0,o=1,c=0,l=N.length,d=[],u=[];const p=[];let g=0,f=new rt(e[0]);const m=f.getPlayer(),w=e[1],x=e[2],y=[];let _,v=0;const b=new V,E=new V,S=new V;let A=[...ot];const k=[],R=[];let T=0,P=!1,I=0,L=!1,Y=!1,z=!1,D=function({fps:e=60,clearCanvas:i=!0,update:s=t,render:a,context:h=r(),blur:o=!1}={}){if(!a)throw Error("You must provide a render() function");let c,l,d,u,p,g=0,f=1e3/e,m=1/e,w=i?M:t,x=!0;function y(){if(l=requestAnimationFrame(y),x&&(d=performance.now(),u=d-c,c=d,!(u>1e3))){for(n("tick"),g+=u;g>=f;)p.update(m),g-=f;w(h),p.render()}}return o||(window.addEventListener("focus",(()=>{x=!0})),window.addEventListener("blur",(()=>{x=!1}))),p={update:s,render:a,isStopped:!0,start(){c=performance.now(),this.isStopped=!1,requestAnimationFrame(y)},stop(){this.isStopped=!0,cancelAnimationFrame(l)},_frame:y,set _last(t){c=t}},p}({update:function(){if(0==a&&(o=1,Y?Y=q():(Y=q(),q()&&(a=1,S.reset(),k.splice(0,k.length)))),1==a){if(z){const[t,e]=$(v,y);z=e}else{const[t,e]=$(v,y);v=t,z=e}Y?Y=q():(Y=q(),q()&&(G(),a=2,y.forEach(((t,e)=>{t.active&&(h=e)})),U(m),Z(w),v=0))}if(2==a){if(b.tick()){let t=Math.round(10*b.timeElapsed)/10;t>=g-5&&t<g&&(P=!0,E.start()),t>=g&&(a=3,m.playAnimation("death"))}s.checkTimer()&&(c++,c>=s.map.length&&(c=0),Z(w)),function(t,e){const i=t.getPosition(),s=t.rad;return i.x+s>=e[0]-3&&i.x-s<=e[0]+3&&i.y+s>=e[1]-3&&i.y-s<=e[1]+3}(m,s.endPoint)&&(o++,o>=l?(o=0,c=0,L=!0,a=5,b.reset()):(Q(...[.5,,632,.02,.09,.54,3,1.43,,.2,,,,1.8,,.9,,.34,.02]),U(m),Z(w))),u.forEach(((t,e)=>{(function(t,e){const i=t.getPosition();return i.x>e[0]&&i.x<e[0]+12&&i.y>e[1]&&i.y<e[1]+12})(m,t)&&(u.splice(e,1),c<s.map.length-1?c++:c=0,Z(w))})),d.forEach(((t,e)=>{(function(t,e){const i=[e[0]+8,e[1]+8],s=t.getPosition();return s.x+t.rad>=i[0]-2&&s.x-t.rad<=i[0]+2&&s.y+t.rad>=i[1]-2&&s.y-t.rad<=i[1]+2})(m,[t.x,t.y])&&(d.splice(e,1),p.push(f.getExplodingGem([t.x+2,t.y+2])),b.reset(),b.start(),P=!1,E.reset(),F(),Q(...[.4,,1842,,.03,.2,,.27,2.7,,,,,.1,,,,.52,.04,.19]),tt(),R.push(new j([m.x/tt(),(m.y-10)/tt()],J[Math.floor(Math.random()*J.length)],20)))})),p.length>0&&p.forEach(((t,e)=>{t.update(),t.animationOver()&&p.splice(e,1)})),function(t,e){const i=[0,0];(H(B.ArrowDown)||H("s")||C("dpaddown"))&&(i[1]+=1),(H(B.ArrowUp)||H("w")||C("dpadup"))&&(i[1]-=1),(H(B.ArrowLeft)||H("a")||C("dpadleft"))&&(i[0]-=1),(H(B.ArrowRight)||H("d")||C("dpadright"))&&(i[0]+=1);const s=function(t,e,i){const s=t.getPosition();let n=!1,a=!1;const r=s.x+e[0],h=s.y+e[1];for(let t=0;t<i.length;t++)n||r>i[t].x1&&r<=i[t].x1+i[t].width&&h>i[t].y1&&h<=i[t].y1+i[t].height&&(n=!0),a||s.x>i[t].x1-1&&s.x<i[t].x1+i[t].width+1&&s.y>i[t].y1-1&&s.y<i[t].y1+i[t].height+1&&(a=!0);return[n,a]}(t,i,e);return s[0]&&function(t,e){t.x+=e[0],t.y+=e[1]}(t,i),s[1]}(m,s.map[c])||L||(a=3,m.playAnimation("death")),m.update()}if(3==a&&(T++,60==T&&(T=0,a=4),m.update()),4==a){if(W(),z){const[t,e]=$(v,y);z=e}else{const[t,e]=$(v,y);v=t,z=e}q()&&(0==v?(2==h&&(o=1),G(),a=2,U(m),m.playAnimation("idle"),Z(w)):(a=0,v=0,m.playAnimation("idle"),A=[...ot],S.reset()))}},render:function(){0==a&&(ft.setSize(128),mt.clear(),S.isRunning||S.start(),function(){S.tick();let t=Math.round(10*S.timeElapsed)/10;A[0].time==t&&(k.splice(0,k.length),A[0].dialog.forEach((t=>{k.push(new ut(t.text,256,240+26*k.length,16,t.color))})),A.splice(0,1)),O(),0==A.length&&(a=1,t.reset(),k.splice(0,k.length))}()),1==a&&(mt.clear(),ft.setSize(128),ft.clear(),ft.context.rect(0,0,128,128),ft.context.fillStyle="#000",ft.context.fill(),ft.context.drawImage(x,14,16),y.splice(0,y.length),y.push(new ht(156,350,"Easy")),y.push(new ht(256,350,"Normal")),y.push(new ht(356,350,"Cruel ")),X()),2==a&&(function(t,e){let i=t.createRadialGradient(e[0],e[1],0,e[0],e[1],10);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.beginPath(),t.arc(e[0],e[1],10,0,2*Math.PI),t.fillStyle=i,t.fill()}(gt,s.endPoint),mt.clear(),wt.clear(),function(){let t=I*(b.timeElapsed+1)<=1?I*(b.timeElapsed+1):1;wt.drawPlayerLight(m.x+2*m.rad,m.y+2*m.rad,m.rad,t)}(),d.forEach((t=>{t.render()})),p.length>0&&p.forEach((t=>{t.render()})),m.render(),R.length>0&&R.forEach((t=>{t.opacity>0&&(mt.drawFadingText(t),t.reduceOpacity())})),_.opacity&&(mt.drawFadingText(_),_.reduceOpacity()),P&&(E.tick(),K.forEach(((t,e)=>{e<=E.timeElapsed&&t.opacity>0&&(mt.drawFadingText(t),t.reduceOpacity())})))),3==a&&(m.render(),wt.clear(),ft.clear()),4==a&&(ft.clear(),mt.clear(),mt.drawYouLooseText(),y.splice(0,y.length),y.push(new ht(206,350,"Retry")),y.push(new ht(306,350,"Exit")),X()),5==a&&(ft.clear(),mt.clear(),W(),mt.clear(),S.isRunning||S.start(),function(){S.tick();let t=Math.round(10*S.timeElapsed)/10;ct.length>0&&ct[0].time==t&&(k.splice(0,k.length),ct[0].dialog.forEach((t=>{k.push(new ut(t.text,256,240+26*k.length,16,t.color))})),ct.splice(0,1)),ct.length>0&&O(),0==ct.length&&(k.splice(0,k.length),mt.drawText({text:"Thank you for playing our game!",x:256,y:236,font:"20px Arial",color:"white"}))}())}});function G(){i||(i=new at)}function W(){i&&(i.stop(),i=null)}function O(){k.forEach(((t,e)=>{mt.drawText(t)}))}function X(){y.length>0&&y.forEach(((t,e)=>{e==v&&(t.active=!0),mt.drawButton(t)}))}function F(){K.forEach((t=>{t.reset()}))}function U(t){s=new dt(...N[o]),s.timer>0&&s.startTimer(),g=function(t){return 0==h?1.5*t:1==h?1.25*t:2==h?t:void 0}(s.time),I=1/(g-3),t.setPosition(s.startPoint[0],s.startPoint[1]),ft.setSize(s.size),wt.setSize(s.size),pt.width=s.size,pt.height=s.size,u=[],d=[],s.gems.forEach((t=>{d.push(f.getGem(t))})),s.switches.forEach((t=>{u.push(t)})),c=0,b.reset(),b.start(),E.reset(),P=!1,F(),_=new j([256,256],"Level "+s.name,50)}function Z(t){o<=l&&s.draw(ft,t,c)}function tt(){return pt.width/mt.canvas.width}D.start()}))})();