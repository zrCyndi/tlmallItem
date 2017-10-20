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

var YSPCustom = YSPCustom || {};
YSPCustom.getTop = function() {
  var testedFrame = window;
  try {
    while (testedFrame.parent != null) {
      try {
        if (testedFrame.frameElement && testedFrame.frameElement.dataset.browser) {
          break;
        } else {
          testedFrame = testedFrame.parent;
        }
      } catch (ex1) {}
    }
  } catch (ex2) {}
  return testedFrame;
}


var SiebelApp = SiebelApp || {};
SiebelApp.EventManager = function() {
    var a = {};
    return {
        addListner: function(e, d, c) {
            a[e] = a[e] || [];
            var f = a[e];
            if (f && f.length) {
                for (var b = 0; b < f.length; b++) {
                    if ((f[b].fn === d) && (f[b].scope === c)) {
                        return
                    }
                }
            }
            a[e].push({
                fn: d,
                scope: c
            })
        },
        removeListner: function(e, d, c) {
            var f = a[e];
            if (f && f.length) {
                for (var b = 0; b < f.length; b++) {
                    if ((f[b].fn === d) && (f[b].scope === c)) {
                        f.splice(b, 1)
                    }
                }
            }
        },
        cleanListners: function(b) {
            a[b] = []
        },
        fireEvent: function(d, b) {
            var e = a[d] || {};
            for (var c in e) {
                if (e.hasOwnProperty(c)) {
                    if (typeof e[c] != "function") {
                        e[c].fn.call(e[c].scope || window, b)
                    }
                }
            }
        }
    }
}();
SiebelApp.contentUpdater = {
    loadContent: function(bSetFree, bSync) {
        var counter = $("div[src]").length;
        bSetFree = (bSetFree === undefined ? false : bSetFree);
        $("div[src]").each(function() {
            var that = this;
            var src = $(that).attr("src");
            $(that).removeAttr("src");
            if (!src) {
                counter--;
                return
            }
            if (src.indexOf("Javascript:") != -1 || src.indexOf("javascript:") != -1) {
                var script = src.split(":")[1];
                if (script.indexOf("<!") == -1) {
                    eval(script)
                }
                counter--
            } else {
                SiebelApp.AjaxRequestMgr.Get(src, function(data) {
                    if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
                        SiebelApp.S_App.GetTimer().TimeGoToView("", "Have Layout");
                        SiebelApp.S_App.GetTimer().TimePopupApplet("", "Have Layout")
                    }
                    var prevValue = $.ajaxSetup().cache;
                    try {
                        if (data.indexOf("SWEWriteObjectTag") != -1) {
                            data = data.replace(/SWEWriteObjectTag/g, "SiebelApp.contentUpdater.Nullify")
                        }
                        data = data.replace(/\<title\>[\w|<>='"|\s|\/]*\<\/title\>/i, "");
                        data = data.replace(/YSPCustom.getTop().document.title\w*\s*\w*;/i, "");
                        data = data.replace(/YSPCustom.getTop().document.title\W*\w*\s*\w*\W*;/i, "");
                        if ($(that).attr("id") === "_svf0") {
                            $("#_sweview").removeClass("siebui-view-sitemap")
                        }
                        $.ajaxSetup({
                            cache: true
                        });
                        $(that).html("<div style='height:100%;'>" + data + "</div>");
                        counter--
                    } catch (error) {
                        SiebelJS.Log("[ContentLoader]  Error -> " + error.message)
                    } finally {
                        $.ajaxSetup({
                            cache: prevValue
                        });
                        SiebelApp.contentUpdater.setAutoHeight($(that).find("table[data-siebel-form-table]").find("tr").children("td:first-child"));
                        that = data = null 
                    }
                    if (SiebelApp.S_App.GetEnablePerfHooks() && SiebelApp.S_App.GetTimer()) {
                        SiebelApp.S_App.GetTimer().TimeGoToView("", "Processed Layout");
                        SiebelApp.S_App.GetTimer().TimePopupApplet("", "Processed Layout")
                    }
                    var myChildrenSrc = SiebelApp.contentUpdater.loadContent(bSetFree, bSync);
                    if (SiebelApp.contentUpdater.callBackMap[src]) {
                        if (myChildrenSrc == 0) {
                            SiebelApp.contentUpdater.viewLoaded(src)
                        } else {
                            SiebelApp.contentUpdater.callBackMap.ViewLoadedDeferred = SiebelApp.contentUpdater.callBackMap[src];
                            delete SiebelApp.contentUpdater.callBackMap[src]
                        }
                    } else {
                        if (counter == 0) {
                            SiebelApp.contentUpdater.viewLoaded("ViewLoadedDeferred")
                        }
                    }
                }, bSync)
            }
        });
        return counter
    },
    setAutoHeight: function(b) {
        var d;
        for (var c = 0, a = b.length; c < a; c++) {
            d = b.eq(c);
            if (d.is(":empty") && d.siblings().length === d.siblings(":empty").length) {
                d.height("auto")
            }
        }
        d = null 
    },
    viewLoaded: function(b) {
        var a = SiebelApp.contentUpdater.callBackMap[b] ? SiebelApp.contentUpdater.callBackMap[b].pop() : {};
        if (a && a.handler) {
            a.handler.call(a.object)
        }
        if (SiebelApp.contentUpdater.callBackMap[b] && SiebelApp.contentUpdater.callBackMap[b].length === 0) {
            delete SiebelApp.contentUpdater.callBackMap[b]
        }
    },
    Nullify: function(a) {
        SiebelJS.Log("[ContentLoader] -> Nullifying ActiveX")
    },
    updateSrc: function(a, b) {
        $(a).attr("src", b);
        this.loadContent()
    },
    updateSrcForFrame: function(a, b) {
        var c = a.split(".");
        this.updateSrc("[name=" + c[c.length - 1] + "]", b)
    },
    AddCallBack: function(b, c, a) {
        this.callBackMap[b] = this.callBackMap[b] || [];
        this.callBackMap[b].push({
            handler: c,
            object: a
        })
    },
    InitializeiFrame: function(c, b) {
        var a = (b.match('src=["]{0,1}http[s]{0,1}://' + location.host)) !== null ;
        var f = $("#" + c);
        if (f.parent().parent("td").length) {
            f.parent().addClass("siebui-max-area").parent("td").height(f.parent().parent("td").height())
        }
        if (a) {
            b = b.replace(" src=", " data-src=");
            var d = f.html(b).find("iframe").eq(0).attr("data-siebel-cd", "false");
            var e = this.NavigationByHistory();
            if (e && d.attr("data-src") == e[0]) {
                d[0].contentWindow.location.replace(e[1]);
                this.iframeArr[location.href] = null 
            } else {
                d.attr("data-first", "true").attr("src", d.attr("data-src")).load(function() {
                    if ($(this).attr("data-first") === "true") {
                        $(this).removeAttr("data-first");
                        return
                    }
                    SiebelApp.EventManager.fireEvent("History_PushState", {
                        iframeOrig: $(this).attr("src"),
                        iframeNow: this.contentWindow.location.href
                    })
                })
            }
        } else {
            f.html(b).find("iframe").eq(0).attr("data-siebel-cd", "true")
        }
    },
    ProcessHistoryInfo: function(target, navurl, lastExecute) {
        var frame = $("#_svf0").find('iframe[data-src="' + target + '"]');
        if (frame[0]) {
            frame[0].contentWindow.location.replace(navurl)
        } else {
            this.iframeArr[location.href] = [target, navurl];
            eval(lastExecute)
        }
    },
    NavigationByHistory: function() {
        return this.iframeArr[location.href]
    },
    iframeArr: {},
    callBackMap: {}
};
$(function() {
    SiebelApp.contentUpdater.loadContent()
});
