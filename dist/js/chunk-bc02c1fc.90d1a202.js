(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc02c1fc"],{"859a":function(e,t,a){},"8de6":function(e,t,a){"use strict";var s=a("859a"),n=a.n(s);n.a},d630:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.createCLAClass,attrs:{id:"createCLA"}},[a("v-header"),a("div",{attrs:{id:"section"}},[a("el-col",{attrs:{offset:6,span:12}},[a("p",[e._v("Edit your metaData")]),a("div",e._l(e.metaTags,(function(t,s){return a("el-tag",{key:t,staticClass:"pointer",attrs:{closable:"","disable-transitions":!1},on:{click:function(t){return e.chooseMeta(s)},close:function(a){return e.closeMetaTag(t)}}},[e._v(" "+e._s(t)+" ")])})),1),e.isAddNewMetaFile?a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-col",{staticStyle:{"padding-right":"2rem"},attrs:{span:20}},[a("el-input",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{size:"small",placeholder:"please input file name"},model:{value:e.newMetaFileName,callback:function(t){e.newMetaFileName=t},expression:"newMetaFileName"}})],1),a("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.languageOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):a("div",[a("el-button",{staticClass:"pointer",attrs:{size:"mini"},on:{click:function(t){return e.clickAddNewMetaFile()}}},[e._v("+ add new file")])],1),a("el-input",{staticClass:"textAreaClass",attrs:{readonly:!e.isEditMeta,rows:"15",type:"textarea"},model:{value:e.metaData,callback:function(t){e.metaData=t},expression:"metaData"}}),a("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{size:"medium",disabled:!e.verifyNotNull(),type:"primary"},on:{click:function(e){}}},[e._v("create Metadata ")])],1)],1)],1),a("v-footer")],1)},n=[],i=(a("99af"),a("4160"),a("c975"),a("a434"),a("b0c0"),a("ac1f"),a("5319"),a("498a"),a("159b"),a("96cf"),a("1da1")),o=a("0418"),l=a("fd2d"),c=a("615a"),r=a("221d"),u={name:"CreateCLA",components:{"v-header":o["a"],"v-footer":l["a"]},data:function(){return{access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token,isAddNewMetaFile:!1,isEditMeta:!1,metaText:"",newMetaFileName:"",metaTags:["test","myMeta","test1","myTest","test2","test3","test4","test5","test6","test7","internationalMetadata","openLooKeng","test8"],addNewFile:!1,isEdit:!1,metaOptions:[{value:0,text:"{userName:{type:string,require:true},email:{type:string,require:true},}"}],fullscreenLoading:!1,metaName:"",value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],metaData:"",createCLAClass:{height:""},platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{clickAddNewMetaFile:function(){this.isAddNewMetaFile=!0,this.metaData="",this.isEditMeta=!0},chooseMeta:function(e){console.log("chooseMeta",e),this.metaData=this.metaOptions[0].text,this.isEditMeta=!1,this.isAddNewMetaFile=!1,this.newMetaFileName=""},closeMetaTag:function(e,t){var a=this;this.$axios({url:"/api".concat(r["b"],"/").concat(this.metaOptions[t].id),method:"delete",headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),a.metaTags.splice(a.metaTags.indexOf(e),1)})).catch((function(e){console.log(e),a.$message.error("已有绑定关系，无法删除")})),this.metaTags.splice(this.metaTags.indexOf(e),1)},getMeta:function(){var e=this;console.log("getMeta"),this.$axios({url:"/api"+r["h"],headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(t){console.log(t),t.data.length&&(e.metaOptions=[],e.metaTags=[],t.data.forEach((function(t,a){e.metaTags.push(t.name),e.metaOptions.push({value:a,label:t.name,id:t.id,text:t.text,language:t.language})})))})).catch((function(e){console.log(e)}))},claTextChange:function(e){console.log(e)},verifyNotNull:function(){return this.addNewFile?""!==this.newMetaFileName.trim()&&""!==this.metaText.trim():""!==this.metaText.trim()},uploadCla:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fullscreenLoading=!0,a={name:e.newMetaFileName,text:e.metaText,language:e.languageOptions[e.value].label,submitter:"".concat(e.platform,"/").concat(e.user.userName)},console.log(a),e.$axios({url:"/api"+r["p"],method:"post",data:a,headers:{"Access-Token":e.access_token,"Refresh-Token":e.refresh_token,User:"".concat(e.platform,"/").concat(e.user.userName)}}).then((function(t){console.log(t),e.fullscreenLoading=!1,e.$message.success("succeed"),setTimeout((function(){e.$router.replace("/home")}),2e3)})).catch((function(t){console.log(t),e.fullscreenLoading=!1,e.$message.error("failed")}));case 4:case"end":return t.stop()}}),t)})))()},setClientHeight:function(){var e=this;this.$nextTick((function(){console.log(c["a"]()),console.log(document.getElementById("createCLA").offsetHeight),c["a"]()>document.getElementById("createCLA").offsetHeight?e.createCLAClass.height=c["a"]()+"px":e.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var e=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(e),this.metaData=e}},created:function(){this.getMeta()},mounted:function(){this.setClientHeight()}};window.onresize=function(){c["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=c["a"]()+"px")};var d=u,m=(a("8de6"),a("2877")),h=Object(m["a"])(d,s,n,!1,null,"1c171af4",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-bc02c1fc.90d1a202.js.map