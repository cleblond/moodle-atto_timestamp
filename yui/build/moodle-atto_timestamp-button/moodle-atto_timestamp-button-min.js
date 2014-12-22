YUI.add("moodle-atto_timestamp-button",function(e,t){var n="atto_timestamp",r="timestamp_flavor",i={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",FLAVORCONTROL:"flavorcontrol"},s='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-left"><label for="{{elementid}}_{{FLAVORCONTROL}}"><strong>{{get_string "enterflavor" component}}</strong></label><input type="radio" name="format" value="date1" checked>{{date1}}<br><input type="radio" name="format" value="date6">{{date6}}<br><p><strong>Time</strong></p><input type="radio" name="format" value="date4">{{date4}}<br><input type="radio" name="format" value="date5">{{date5}}<br><p><strong>Date</strong></p><input type="radio" name="format" value="date2">{{date2}}<br><input type="radio" name="format" value="date3">{{date3}}<br><br><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></div></form>';e.namespace("M.atto_timestamp").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;this.addButton({icon:"clock",iconComponent:"atto_timestamp",buttonName:"clock",callback:this._displayDialogue,callbackArgs:"clock"})},_getFlavorControlName:function(){return this.get("host").get("elementid")+"_"+r},_displayDialogue:function(t,r,i){t.preventDefault();var s=300,o=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:s+"px",focusAfterHide:r});o.width!==s+"px"&&o.set("width",s+"px");var u=this._getFormContent(r,i),a=e.Node.create("<div></div>");a.append(u),o.set("bodyContent",a),o.show(),this.markUpdated()},_getFormContent:function(t){var o=e.Handlebars.compile(s),u=e.Node.create(o({elementid:this.get("host").get("elementid"),CSS:i,FLAVORCONTROL:r,component:n,defaultflavor:this.get("defaultflavor"),clickedicon:t,date1:e.Date.format(new Date,{format:"%x %X"}),date2:e.Date.format(new Date,{format:"%m/%d/%y"}),date3:e.Date.format(new Date,{format:"%Y/%m/%d"}),date4:e.Date.format(new Date,{format:"%l:%M:%S %p"}),date5:e.Date.format(new Date,{format:"%H:%M:%S"}),date6:e.Date.format(new Date,{format:"%Y/%m/%d %X"})}));return this._form=u,this._form.one("."+i.INPUTSUBMIT).on("click",this._doInsert,this),u},_doInsert:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=e.one("input[name=format]:checked").get("value");console.log(n);switch(n){case"date1":format=e.Date.format(new Date,{format:"%x %l:%M:%S %p"});break;case"date2":format=e.Date.format(new Date,{format:"%m/%d/%y"});break;case"date3":format=e.Date.format(new Date,{format:"%Y/%m/%d"});break;case"date4":format=e.Date.format(new Date,{format:"%l:%M:%S %p"});break;case"date5":format=e.Date.format(new Date,{format:"%H:%M:%S"});break;case"date6":format=e.Date.format(new Date,{format:"%Y/%m/%d %X"})}this.editor.focus(),this.get("host").insertContentAtFocusPoint(format),this.markUpdated()}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},defaultflavor:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","datatype-date"]});
