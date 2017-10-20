/*<ORACLECOPYRIGHT>
* Copyright (C) 1994-2015 Oracle and/or its affiliates. All rights reserved.
* Oracle and Java are registered trademarks of Oracle and/or its affiliates.
* Other names may be trademarks of their respective owners.
* UNIX is a registered trademark of The Open Group.
*
* This software and related documentation are provided under a license agreement
* containing restrictions on use and disclosure and are protected by intellectual property laws.
* Except as expressly permitted in your license agreement or allowed by law, you may not use, copy,
* reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish,
* or display any part, in any form, or by any means. Reverse engineering, disassembly,
* or decompilation of this software, unless required by law for interoperability, is prohibited.
*
* The information contained herein is subject to change without notice and is not warranted to be error-free.
* If you find any errors, please report them to us in writing.
*
* U.S. GOVERNMENT RIGHTS Programs, software, databases, and related documentation and technical data delivered to U.S.
* Government customers are "commercial computer software" or "commercial technical data" pursuant to the applicable
* Federal Acquisition Regulation and agency-specific supplemental regulations.
* As such, the use, duplication, disclosure, modification, and adaptation shall be subject to the restrictions and
* license terms set forth in the applicable Government contract, and, to the extent applicable by the terms of the
* Government contract, the additional rights set forth in FAR 52.227-19, Commercial Computer Software License
* (December 2007). Oracle America, Inc., 500 Oracle Parkway, Redwood City, CA 94065.
*
* This software or hardware is developed for general use in a variety of information management applications.
* It is not developed or intended for use in any inherently dangerous applications, including applications that
* may create a risk of personal injury. If you use this software or hardware in dangerous applications,
* then you shall be responsible to take all appropriate fail-safe, backup, redundancy,
* and other measures to ensure its safe use. Oracle Corporation and its affiliates disclaim any liability for any
* damages caused by use of this software or hardware in dangerous applications.
*
* This software or hardware and documentation may provide access to or information on content,
* products, and services from third parties. Oracle Corporation and its affiliates are not responsible for and
* expressly disclaim all warranties of any kind with respect to third-party content, products, and services.
* Oracle Corporation and its affiliates will not be responsible for any loss, costs,
* or damages incurred due to your access to or use of third-party content, products, or services.
</ORACLECOPYRIGHT>*/
/* 8.1.1.14SIA[23044]PATCHSET99 */
if(typeof(SiebelAppFacade.MsgBrdCstPresentationModel)==="undefined"){SiebelJS.Namespace("SiebelAppFacade.MsgBrdCstPresentationModel");SiebelAppFacade.MsgBrdCstPresentationModel=(function(){var D="";var v="";var y=false;var s="";var a="";var c="";var r="";var g="";var G="";var f="";var l="";var k=30;var t="";var b="";var q="";var x=[];var u=SiebelJS.Dependency("SiebelApp.Constants");var E=SiebelJS.Dependency("SiebelApp.Utils");var p=0;function A(H){SiebelAppFacade.MsgBrdCstPresentationModel.superclass.constructor.call(this,H)}SiebelJS.Extend(A,SiebelAppFacade.PresentationModel);function e(){this.AddProperty("MsgChanged",y);v=x.length;this.AddProperty("MsgCount",v);this.AddProperty("MsgObjArray",x);var J=0;var I=SiebelApp.S_App.GetService("Message Bar");var L=SiebelApp.S_App.NewPropertySet();L.SetProperty(u.get("SWE_BUSINESS_SERVICE"),u.get("SWE_NUMERIC_TRUE"));var H=SiebelApp.S_App.NewPropertySet();if(I){H=null;var K={};K.async=false;K.selfbusy=true;K.scope=this;K.cb=function(){H=arguments[2];if(H!==null){var M=H.GetChildCount();for(var O=0;O<M;O++){var N=H.GetChild(O);if(N!==null&&N.GetType()==="ResultSet"){J=N.GetProperty("IsMsgBarEnabled")}}}};I.InvokeMethod("IsMsgBarEnabled",L,K)}return J}function j(){var J=0;var I=SiebelApp.S_App.GetService("Message Bar");var L=SiebelApp.S_App.NewPropertySet();L.SetProperty(u.get("SWE_BUSINESS_SERVICE"),u.get("SWE_NUMERIC_TRUE"));var H=SiebelApp.S_App.NewPropertySet();if(I){H=null;var K={};K.async=false;K.selfbusy=true;K.scope=this;K.cb=function(){H=arguments[2];if(H!==null){var M=H.GetChildCount();for(var O=0;O<M;O++){var N=H.GetChild(O);if(N!==null&&N.GetType()==="ResultSet"){J=N.GetProperty("MsgBarInterval")}}}};I.InvokeMethod("GetMsgBarInterval",L,K)}return J}A.prototype.Init=function(){var H=e.call(this);if(H==="1"){this.AttachEventHandler("ShowMessageBar",function(K){h.call(this);var J=this;var I=j.call(this);k=parseInt(I,10)>k?parseInt(I,10):k;if(k!==0){setInterval(function(){J.ExecuteMethod("UpdateMessageBar")},k*1000)}});this.AddMethod("UpdateMessageBar",B);this.AddMethod("AddNotification",F);this.AddMethod("DeleteNotification",z);this.AddMethod("UpdateNotification",C);this.AddMethod("ReadNotification",o);this.AttachEventHandler("UpdateServer",function(N,M){var J=SiebelApp.S_App.GetService("Message Bar");var L=SiebelApp.S_App.NewPropertySet();var I=SiebelApp.S_App.NewPropertySet();L.SetProperty("User MsgId",N);L.SetProperty("User MsgStatus",M);L.SetProperty(u.get("SWE_BUSINESS_SERVICE"),u.get("SWE_NUMERIC_TRUE"));if(J){I=null;var K={};K.async=true;K.npr=false;K.selfbusy=true;K.scope=this;J.InvokeMethod("UpdateUserMsg",L,K);I=arguments[2]}});this.AttachEventHandler("DownLoadFileFromServer",function(P){var L=false;var O=SiebelApp.S_App.GetService("Message Bar");var I=SiebelApp.S_App.NewPropertySet();var S=SiebelApp.S_App.NewPropertySet();var K=P.split(";");for(var M=0;M<K.length;M++){var R=K[M].indexOf(":");if(R<0){continue}var N=$.trim(K[M].substr(0,R)).toLowerCase();var J=$.trim(K[M].substr(R+1));switch(N){case"bo":I.SetProperty("BO",J);break;case"bc":I.SetProperty("BC",J);break;case"view":I.SetProperty("View",J);L=true;break;case"field":I.SetProperty("Field",J);break;case"file ext":I.SetProperty("File Ext",J);break;case"id":I.SetProperty("Id",J);break;default:break}}if(O){S=null;var Q={};Q.async=true;Q.npr=false;Q.selfbusy=true;Q.scope=this;Q.cb=function(){if(L===true){this.GetRenderer().CloseMainDialog()}};O.InvokeMethod("DownLoadReport",I,Q)}})}};A.prototype.Show=function(){var H=this.GetRenderer();H.ShowUI();H.BindEvents()};A.prototype.Setup=function(H){SiebelAppFacade.MsgBrdCstPresentationModel.superclass.Setup.call(this,H)};function F(J){var I,K,Q,N;var O=SiebelApp.S_App.GetService("Message Bar");var H=SiebelApp.S_App.NewPropertySet();var R=SiebelApp.S_App.NewPropertySet();var M=true;if(J!==null){for(var L=0;L<J.GetChildCount();L++){H=J.GetChild(L);H.GetProperty("Type",I);H.GetProperty("Body",Q);if(Q===null||I===null){SiebelJS.Log("Type Body and Id are the required fields");M=false}N=H.GetType();if(N==="Local"){x.splice(0,0,this.MsgBarLocalMessage(H));H.SetProperty("Msg Id",x[0].id);R.AddChild(H);J.RemoveChild(L);L--}}if(R.GetChildCount()>0){this.SetProperty("MsgChanged",true);v=x.length;this.SetProperty("MsgCount",v);this.SetProperty("MsgObjArray",x);this.GetRenderer().UpdateMsgBar();return R}}if(M){if(O){var P={};P.async=false;P.selfbusy=true;P.npr=false;P.scope=this;return O.InvokeMethod("AddNotification",J,P)}}}A.prototype.MsgBarLocalMessage=function(J){var I;var K={};K.local="Y";K.id="LM"+p++;I=J.GetProperty("Callback");K.callback=(typeof(I)==="undefined"?"":I);I=J.GetProperty("Body");K.body=(typeof(I)==="undefined"?"":I);I=J.GetProperty("Type");K.type=(typeof(I)==="undefined"?"":I);I=J.GetProperty("Abstract");K.summary=(typeof(I)==="undefined"?"":I);I=J.GetProperty("Status");K.status=(typeof(I)==="undefined"?"":I);I=J.GetProperty("Dismess");K.dismiss=(typeof(I)==="undefined"?"":I);I=J.GetProperty("Created");if(typeof(I)==="undefined"){var H=new Date();K.created=((H.getMonth()+1)<10?"0"+(H.getMonth()+1):(H.getMonth()+1))+"/"+(H.getDate()<10?"0"+H.getDate():H.getDate())+"/"+H.getFullYear()+" "+(H.getHours()<10?"0"+H.getHours():H.getHours())+":"+(H.getMinutes()<10?"0"+H.getMinutes():H.getMinutes())+":"+(H.getSeconds()<10?"0"+H.getSeconds():H.getSeconds())}return K};function z(I){var N;var O=0;var J=true;var H=SiebelApp.S_App.GetService("Message Bar");var M=SiebelApp.S_App.NewPropertySet();if(I!==null){for(var K=0;K<I.GetChildCount();K++){M=I.GetChild(K);N=M.GetProperty("Msg Id");if(N===null){SiebelJS.Log("Row id is required");J=false}Local=M.GetType();if(Local==="Local"){for(i=0;i<x.length&&x[i].id!==N;i++){}if(i<x.length&&x[i].id===N){x.splice(i,1);this.SetProperty("MsgChanged",true);v=x.length;this.SetProperty("MsgCount",v);this.SetProperty("MsgObjArray",x);this.GetRenderer().UpdateMsgBar()}I.RemoveChild(K);K--;if(I.GetChildCount()===0){J=false}}}}if(J){if(H){var L={};L.async=false;L.selfbusy=true;L.npr=false;L.scope=this;return H.InvokeMethod("DeleteNotification",I,L)}}}function o(J){var K;var H=0;var M=true;var N=SiebelApp.S_App.GetService("Message Bar");var I=SiebelApp.S_App.NewPropertySet();if(J!==null){var O=J.GetChildCount();for(var L=0;L<O;L++){I=J.GetChild(L);I.GetProperty("Msg Id",K);if(K===null){SiebelJS.Log("Row Id is required");M=false}}}if(M){if(N){var P={};P.async=false;P.npr=false;P.selfbusy=true;P.scope=this;return N.InvokeMethod("ReadNotification",J,P)}}}function C(O){var I,M,K;var L=true;var N=SiebelApp.S_App.GetService("Message Bar");var H=SiebelApp.S_App.NewPropertySet();if(O!==null){for(var J=0;J<O.GetChildCount();J++){H=O.GetChild(J);I=H.GetProperty("Msg Id");if(I===null){SiebelJS.Log("Row Id is required");L=false}M=H.GetType();if(M==="Local"){for(K=0;K<x.length&&x[K].id!==I;K++){}if(K<x.length&&x[K].id===I){x[K]=this.MsgBarLocalMessage(H);x[K].id=I;this.SetProperty("MsgChanged",true);v=x.length;this.SetProperty("MsgCount",v);this.SetProperty("MsgObjArray",x);this.GetRenderer().UpdateMsgBar()
}O.RemoveChild(K);J--}}}if(L&&M!=="Local"){if(N){var P={};P.async=false;P.selfbusy=true;P.npr=false;P.scope=this;return N.InvokeMethod("UpdateNotification",O,P)}}}function B(){var L,J;var I=SiebelApp.S_App.GetService("Message Bar");var O=SiebelApp.S_App.NewPropertySet();O.SetProperty(u.get("SWE_BUSINESS_SERVICE"),u.get("SWE_NUMERIC_TRUE"));var H=SiebelApp.S_App.NewPropertySet();if(I){H=null;var M=this;var K="UpdatePrefMsg";var N={};N.async=true;N.scope=this;N.npr=false;N.selfbusy=true;N.cb=function(){H=arguments[2];if(H!==null){var P=H.GetChildCount();for(var R=0;R<P;R++){var Q=H.GetChild(R);if(Q!==null&&Q.GetType()==="ResultSet"){var S=Q.GetProperty("returnVal");n.call(M,S);M.GetRenderer().UpdateMsgBar()}}}};I.InvokeMethod(K,O,N)}}function h(){var L,J;var I=SiebelApp.S_App.GetService("Message Bar");var O=SiebelApp.S_App.NewPropertySet();O.SetProperty(u.get("SWE_BUSINESS_SERVICE"),u.get("SWE_NUMERIC_TRUE"));var H=SiebelApp.S_App.NewPropertySet();if(I){H=null;var M=this;var K="Init";var N={};N.async=true;N.selfbusy=true;N.scope=this;N.cb=function(){H=arguments[2];if(H!==null){var P=H.GetChildCount();for(var R=0;R<P;R++){var Q=H.GetChild(R);if(Q!==null&&Q.GetType()==="ResultSet"){var S=Q.GetProperty("returnVal");M.MsgInit(S)}}}M.MsgBrdCstInit(I)};I.InvokeMethod(K,O,N)}}A.prototype.MsgBrdCstInit=function(I){var M=SiebelApp.S_App.NewPropertySet();M.SetProperty(u.get("SWE_BUSINESS_SERVICE"),u.get("SWE_NUMERIC_TRUE"));var H=SiebelApp.S_App.NewPropertySet();if(I){var J="UpdatePrefMsg";var K=this;var L={};L.async=true;L.scope=this;L.selfbusy=true;L.cb=function(){H=arguments[2];if(H!==null){var O=H.GetChildCount();for(var Q=0;Q<O;Q++){var P=H.GetChild(Q);if(P!==null&&P.GetType()==="ResultSet"){var R=P.GetProperty("returnVal");n.call(K,R);K.AddProperty("MsgCount",v);K.AddProperty("MsgObjArray",x);var N=CCFMiscUtil_CreatePropSet();N.SetProperty("Normal",s);N.SetProperty("Automation",a);N.SetProperty("High",c);N.SetProperty("Urgent",r);N.SetProperty("UrgentWA",g);N.SetProperty("NormalColor",G);N.SetProperty("HighColor",f);N.SetProperty("UrgentColor",l);N.SetProperty("UpdateInterval",k);N.SetProperty("PrefixNormal",t);N.SetProperty("PrefixHigh",b);N.SetProperty("PrefixUrgent",q);K.AddProperty("MsgUserPrefPS",N);K.GetRenderer().CreateMsgBar()}}}};I.InvokeMethod(J,M,L)}};A.prototype.MsgInit=function(J){var I=new Array(1);I[0]=0;var H=m(J,I);H=m(J,I);s=m(J,I);a=m(J,I);c=m(J,I);r=m(J,I);g=m(J,I)};function n(H){y=false;var N=new Array(1);N[0]=0;N[0]=H.indexOf("-$$$-");if(N[0]>=0){if(N[0]>0){var R=H.substring(0,N[0])}N[0]+=5}else{N[0]=0}var Q,P,O,J=0,K=0;Q=H.indexOf("-|||-",N[0]);P=H.indexOf("--saMe--",N[0]);O=H.indexOf("--saMe--",Q);if((P===-1)||(P>Q)){var L=parseInt(m(H,N),10);var T=parseInt(m(H,N),10);var M=parseInt(m(H,N),10);var I=d(m(H,N));G=d(m(H,N));f=d(m(H,N));l=d(m(H,N));k=parseInt(m(H,N),10);t=m(H,N);b=m(H,N);q=m(H,N)}if(O===-1){while(K<x.length){if(x[K].local!=="Y"){x.splice(K,1)}else{K++}}N[0]=H.indexOf("Msg",Q);while(Q<N[0]&&N[0]<H.length){N[0]+=3;var S=this.MsgBarMessage(H,N);if(S!=null){x[K]=S;K++}}y=true}if(y){this.SetProperty("MsgChanged",y);v=x.length;this.SetProperty("MsgCount",v);this.SetProperty("MsgObjArray",x)}else{this.SetProperty("MsgChanged",y)}}A.prototype.MsgBarMessage=function(L,P,V,M){if(L===null){return}var S=m(L,P);var Q=m(L,P);var H=m(L,P);var N=m(L,P);var R=m(L,P);var I=m(L,P);var X=m(L,P);var K=m(L,P);var U=m(L,P);var Y="MESSAGEBROADCASTING_SYNCNODE=";var O=Q.indexOf(Y);var T={};if(V&&V==="Y"){T.id=p++;T.local="Y"}else{if(O>-1&&window.localStorage){var J=localStorage.getItem(u.get("SYNC_NODE_ID"));if(J&&Q.indexOf(J,O)>0){var W="PatternStart:";var Z=Q.indexOf(W);Q=Q.substring(0,Z)}else{return null}}T.id=S}if(M){T.callbcak=M}T.body=Q;T.type=H;T.summary=I;T.status=X;T.dismiss=K;T.created=U;return T};function d(L){var K=0;if(L.charAt(0)==="#"){return L}var H=L.split(",");var J="#",I;for(K=0;K<3;K++){I=w(H[K],16);if(I.length===1){I="0"+I}J+=I}return J}function w(L,J){var H="",K=Math.floor(Math.abs(L)),I;if(!K||typeof(K)==="undefined"){return"0"}while(true){I=K%J;H="0123456789abcdefghijklmnopqrstuvwxyz".charAt(I)+H;K=(K-I)/J;if(K===0){break}}return((L<0)?"-"+H:H)}function m(L,M){var I="*4*TRUE*";var J,K,H=null;if(L.charAt(M[0])==="*"){M[0]++;J=L.indexOf("*",M[0]);if(J>0){H=parseInt(L.substring(M[0],J),10);if(H===null){return""}}if(J<L.length&&L.charAt(J)==="*"){K=L.substring(J+1,H+J+1);M[0]=J+H+1;return K}}return""}return A}())};