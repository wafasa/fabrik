window.FbRadio=new Class({Extends:FbElementList,options:{btnGroup:true},type:"radio",initialize:function(b,a){this.plugin="fabrikradiobutton";this.parent(b,a);this.btnGroup()},btnGroup:function(){if(!this.options.btnGroup){return}var a=this.getContainer();a.getElements(".radio.btn-group label").addClass("btn");a.addEvent("mouseup:relay(.btn-group label)",function(f,d){var g=d.get("for",""),c;if(g!==""){c=document.id(g)}if(typeOf(c)==="null"){c=d.getElement("input")}var b=c.get("value");if(!c.get("checked")){d.getParent(".btn-group").getElements("label").removeClass("active").removeClass("btn-success").removeClass("btn-danger").removeClass("btn-primary");if(b===""){d.addClass("active btn-primary")}else{if(b.toInt()===0){d.addClass("active btn-danger")}else{d.addClass("active btn-success")}}c.set("checked",true)}});a.getElements(".btn-group input[checked=checked]").each(function(b){var c=b.getParent("label");v=b.get("value");if(v===""){c.addClass("active btn-primary")}else{if(v==="0"){c.addClass("active btn-danger")}else{c.addClass("active btn-success")}}})},watchAddToggle:function(){var h=this.getContainer();var f=h.getElement("div.addoption");var b=h.getElement(".toggle-addoption");if(this.mySlider){var g=f.clone();var e=h.getElement(".fabrikElement");f.getParent().destroy();e.adopt(g);f=h.getElement("div.addoption");f.setStyle("margin",0)}this.mySlider=new Fx.Slide(f,{duration:500});this.mySlider.hide();b.addEvent("click",function(a){a.stop();this.mySlider.toggle()}.bind(this))},getValue:function(){if(!this.options.editable){return this.options.value}var a="";this._getSubElements().each(function(b){if(b.checked){a=b.get("value");return a}return null});return a},setValue:function(a){if(!this.options.editable){return}this._getSubElements().each(function(b){if(b.value===a){b.checked="checked"}})},update:function(b){if(!this.options.editable){if(b===""){this.element.innerHTML="";return}this.element.innerHTML=$H(this.options.data).get(b);return}else{var a=this._getSubElements();if(typeOf(b)==="array"){a.each(function(c){if(b.contains(c.value)){c.setProperty("checked","checked")}})}else{a.each(function(c){if(c.value===b){c.setProperty("checked","checked")}})}}},cloned:function(a){if(this.options.allowadd===true&&this.options.editable!==false){this.watchAddToggle();this.watchAdd()}this.parent(a)}});