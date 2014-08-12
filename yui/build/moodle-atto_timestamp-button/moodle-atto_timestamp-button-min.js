YUI.add("moodle-atto_timestamp-button",function(e,t){var n="atto_timestamp",r="timestamp_flavor",i="atto_timestamp",s={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",FLAVORCONTROL:"flavorcontrol"},o={FLAVORCONTROL:".flavorcontrol"},u='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-left"><label for="{{elementid}}_{{FLAVORCONTROL}}">{{get_string "enterflavor" component}}</label><input type="radio" name="format" value="date1">{{date1}}<br><input type="radio" name="format" value="date2">{{date2}}<br><input type="radio" name="format" value="date3">{{date3}}<br><input type="radio" name="format" value="date4">{{date4}}<br><input type="radio" name="format" value="date5">{{date5}}<br><input type="radio" name="format" value="date6">{{date6}}<br><br><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></div></form>';e.namespace("M.atto_timestamp").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;this.addButton({icon:"clock",iconComponent:"atto_timestamp",buttonName:"clock",callback:this._displayDialogue,callbackArgs:"clock"})},_getFlavorControlName:function(){return this.get("host").get("elementid")+"_"+r},_displayDialogue:function(t,r,i){t.preventDefault();var s=250,o=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:s+"px",focusAfterHide:r});o.width!==s+"px"&&o.set("width",s+"px");var u=this._getFormContent(r,i),a=e.Node.create("<div></div>");a.append(u),o.set("bodyContent",a),o.show(),this.markUpdated()},_getFormContent:function(t,i){var o=e.Handlebars.compile(u),a=e.Node.create(o({elementid:this.get("host").get("elementid"),CSS:s,FLAVORCONTROL:r,component:n,defaultflavor:this.get("defaultflavor"),clickedicon:t,date1:e.Date.format(new Date,{format:"%m/%d/%y %l:%m:%S %p"}),date2:e.Date.format(new Date,{format:"%m/%d/%y"}),date3:e.Date.format(new Date,{format:"%Y/%m/%d"}),date4:e.Date.format(new Date,{format:"%l:%M:%S %p"}),date5:e.Date.format(new Date,{format:"%H:%M:%S"}),date6:e.Date.format(new Date,{format:"%x %X"})}));return this._form=a,this._form.one("."+s.INPUTSUBMIT).on("click",this._doInsert,this),a},_doInsert:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=this._form.one(o.FLAVORCONTROL),r=e.one("input[name=format]:checked").get("value");console.log(r);switch(r){case"date1":format=e.Date.format(new Date,{format:"%m/%d/%y %l:%m:%S %p"});break;case"date2":format=e.Date.format(new Date,{format:"%m/%d/%y"});break;case"date3":format=e.Date.format(new Date,{format:"%Y/%m/%d"});break;case"date4":format=e.Date.format(new Date,{format:"%l:%M:%S %p"});break;case"date5":format=e.Date.format(new Date,{format:"%H:%M:%S"});break;case"date6":format=e.Date.format(new Date,{format:"%x %X"})}this.editor.focus(),this.get("host").insertContentAtFocusPoint(format),this.markUpdated()}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},defaultflavor:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","datatype-date"]});