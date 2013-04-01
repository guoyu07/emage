define(["require","qpf","./fx","./pass"],function(e){var t=e("qpf"),n=t.use("core/clazz"),r=t.use("knockout"),i=e("./fx"),s=e("./pass"),o={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat},u=n.derive(function(){return{fxs:r.observableArray(),inputRT:new THREE.WebGLRenderTarget(1024,1024,o),outputRT:new THREE.WebGLRenderTarget(1024,1024,o),texture:null,outputPass:new s({fragmentShader:["uniform float opacity;","uniform sampler2D texture;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( texture, vUv );","gl_FragColor = opacity * texel;","}"].join("\n"),parameters:{opacity:{type:"f",value:1}},inputPin:{texture:null}}),provides:r.observableArray()}},function(){var e=_.clone(this.fxs());this.fxs.subscribe(function(t){var n=[],i=this.provides(),s=r.utils.compareArrays(e,t);_.each(s,function(t){if(t.status==="retained"){var s=e.indexOf(t.value);n[index]=i[s]}else if(t.status==="added"){var o=t.value;n[t.index]={title:o.name,parameters:r.utils.unwrapObservable(o.provides)}}},this),this.provides(n)},this)},{add:function(t,n){var r=this;e(["fxs/"+t],function(t){if(typeof t=="function"){var i=new t;r.fxs.push(i),n&&n(i)}else{var s=t.passes,o=0;_.each(s,function(i,s){i.shader&&(o++,e(["text!shaders/"+i.shader],function(e){i.shaderString=e,o--;if(o==0){var s=r.buildFx(t);n&&n(s)}}))})}})},buildFx:function(e){var t=new i(e);return this.fxs.push(t),t},render:function(e){var t=!0,n=this;_.each(this.fxs(),function(r){if(r instanceof i)r.eachPass(function(r){t?(r.setInputPin("texture",n.texture),t=!1):r.setInputPin("texture",n.inputRT),r.setOutputPin(n.outputRT),r.render(e),n._swap()});else{var s=r.render(e,t?n.texture:n.inputRT,n.outputRT);s===n.outputRT&&n._swap(),t=!1}}),this.outputPass.setInputPin("texture",t?n.texture:n.inputRT),this.outputPass.render(e)},_swap:function(){var e=this.inputRT;this.inputRT=this.outputRT,this.outputRT=e}});return u});