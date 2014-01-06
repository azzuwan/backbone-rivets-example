(function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},r={},n=function(t,e){return{}.hasOwnProperty.call(t,e)},i=function(t,e){var r,n,i=[];r=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var o=0,s=r.length;s>o;o++)n=r[o],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},o=function(t){return t.split("/").slice(0,-1).join("/")},s=function(e){return function(r){var n=o(e),s=i(n,r);return t.require(s,e)}},a=function(t,e){var n={id:t,exports:{}};return r[t]=n,e(n.exports,s(t),n),n.exports},u=function(t,o){var s=i(t,".");if(null==o&&(o="/"),n(r,s))return r[s].exports;if(n(e,s))return a(s,e[s]);var u=i(s,"./index");if(n(r,u))return r[u].exports;if(n(e,u))return a(u,e[u]);throw Error('Cannot find module "'+t+'" from '+'"'+o+'"')},c=function(t,r){if("object"==typeof t)for(var i in t)n(t,i)&&(e[i]=t[i]);else e[t]=r},p=function(){var t=[];for(var r in e)n(e,r)&&t.push(r);return t};t.require=u,t.require.define=c,t.require.register=c,t.require.list=p,t.require.brunch=!0}})(),require.register("example",function(t,e){"The Rivets adaptor for Backbone models. \nSee docs on adaptors here: http://www.rivetsjs.com/docs/#adapters\nThis is a very simple Backbone adaptor. \nFor more advanced binding check out: \nhttps://github.com/azproduction/rivets-backbone-adapter";var r,n,i,o,s,a,u,c,p,h,l,d=function(t,e){return function(){return t.apply(e,arguments)}},f={}.hasOwnProperty,m=function(t,e){function r(){this.constructor=t}for(var n in e)f.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};rivets.adapters[":"]={subscribe:function(t,e,r){return t.on("change:"+e,r)},unsubscribe:function(t,e,r){return t.off("change:"+e,r)},read:function(t,e){return t.get(e)},publish:function(t,e,r){return t.set(e,r)}},i=function(t){function e(){return this.hasLinks=d(this.hasLinks,this),u=e.__super__.constructor.apply(this,arguments)}return m(e,t),e.prototype.url="contacts/",e.prototype.defaults=function(){return{first_name:"",last_name:"",short_bio:"",github:"",twitter:"",website:""}},e.prototype.getGravatar=function(){return this.get("email")?"http://www.gravatar.com/avatar/"+hex_md5(this.get("email")):""},e.prototype.getFullName=function(){return""+this.get("first_name")+" "+this.get("last_name")},e.prototype.hasLinks=function(){var t;return t=_.uniq(_.values(this.get("links"))),!(1===t.length&&""===t[0])},e}(Backbone.Model),a=e("sample-data"),r=function(t){function e(){return c=e.__super__.constructor.apply(this,arguments)}return m(e,t),e.prototype.render=function(){return e.__super__.render.call(this),this.bindingView=rivets.bind(this.el,{model:this.model,view:this}),this},e.prototype.remove=function(){return this.bindingView.unbind(),e.__super__.remove.call(this)},e}(Backbone.View),n=function(t){function e(){return p=e.__super__.constructor.apply(this,arguments)}return m(e,t),e.prototype.el="#contact-form-view",e}(r),o=function(t){function e(){return h=e.__super__.constructor.apply(this,arguments)}return m(e,t),e.prototype.el="#contact-view",e}(r),s=function(t){function r(){return l=r.__super__.constructor.apply(this,arguments)}return m(r,t),r.prototype.el="#model-json-view",r.prototype.sampleData=e("sample-data"),r.prototype.events={"click a":function(t){var e;return a=e=$(t.currentTarget).data().sample,this.watched.clear({silent:!0}),this.watched.set(this.sampleData[e])}},r.prototype.initialize=function(t){return null==this.model&&(this.model=new Backbone.Model),this.watched=t.watch,this._setWatchedModelJSON(),this.listenTo(this.watched,"change",this._setWatchedModelJSON)},r.prototype._setWatchedModelJSON=function(){var t;return t=JSON.stringify(this.watched.toJSON(),null,"  "),this.model.set("modelJSON",t)},r}(r),rivets.formatters.linebreaksbr=function(t){return t.replace(/\n/g,"<br>")},rivets.binders["live-value"]={publishes:!0,bind:function(t){return $(t).on("keyup",this.publish)},unbind:function(t){return $(t).off("keyup",this.publish)},routine:function(t,e){return rivets.binders.value.routine(t,e)}},$(function(){return window.contactModel=new i,new n({model:contactModel}).render(),new o({model:contactModel}).render(),new s({watch:contactModel}).render()})}),require.register("sample-data",function(t,e,r){r.exports={michael:{first_name:"Michael",last_name:"Richards",short_bio:"Ruby/JavaScript developer. Author of Rivets.js.",email:"mike22e@gmail.com",twitter:"https://github.com/mikeric",github:"http://github.com/wmdmark",website:""},mark:{first_name:"Mark",last_name:"Johnson",short_bio:"Web designer, developer and teacher. Co-founder of Pathwright",email:"wmdmark@gmail.com",twitter:"http://twitter.com/wmdmark",github:"http://github.com/wmdmark",website:"http://pathwright.com"},mason:{first_name:"Mason",last_name:"Stewart",short_bio:"Frontender, JavaScripter, & Lisper",email:"mason@theironyard.com",twitter:"http://twitter.com/masondesu",github:"https://github.com/masondesu",website:""}}});