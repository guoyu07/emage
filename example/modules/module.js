define(["require","qpf"],function(e){var t=e("qpf"),n=t.use("components/base"),r=t.use("knockout"),i=t.use("core/xmlparser"),s=t.use("core/mixin/derive"),o=t.use("core/mixin/event"),u=new Function;_.extend(u,s),_.extend(u.prototype,o);var a=u.derive(function(){return{name:"",$el:$("<div style='position:relative'></div>"),xml:"",context:{}}},{start:function(){return this.xml&&this.applyXML(this.xml),this._$mask=$("<div class='mask'></div>"),this.$el.append(this._$mask),this.trigger("start"),this.$el},enable:function(e){this.$el.show(),this.trigger("enable"),e&&e()},disable:function(e){this.$el.hide(),this.trigger("disable"),e&&e()},setContext:function(e){this._defaultContext||(this._defaultContext={},_.each(this.context,function(e,t){this._defaultContext[t]=e()},this));for(var t in this.context)typeof e[t]!="undefined"?this.context[t](e[t]):this.context[t](this._defaultContext[t]);n.prototype._mappingAttributes.call(this.context,e,!0)},dispose:function(){n.disposeByDom(this.$el[0]),this.$el.remove()},loadingStart:function(){this._$mask&&this._$mask.addClass("loading").show()},loadingEnd:function(){this._$mask&&this._$mask.removeClass("loading").hide()},applyXML:function(e){i.parse(e,this.$el[0]),r.applyBindings(this,this.$el[0]);var t=this.$el[0].firstChild;t&&(this.mainComponent=n.getByDom(t))}});return a});