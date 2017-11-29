'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control55_pqOP4L: function (elem) {
      if (!elem) {
        return;
      }
      if (elem) {
        if (elem.textContent.indexOf("未考勤申报审批流程") != -1) {
          return "未考勤申报审批流程(新)";
        } else {
          return "请假/公出流程（新）";
        }
      }
    },
    doAction_uiControl45_w9wCSy: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
      if (data.eventType == 'save1') {
        elem.ownerDocument.defaultView.parent.document.querySelector('#toolbarmenudiv').querySelector('.btn_wfSave').click();
      }
    },
    getTemplate_uiControl45_w9wCSy: function getTemplate_uiControl45_w9wCSy() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:this.props.customData}} \n       backIsShow = {true}\n        editIsShow={true}\n        rightText = '\u4FDD\u5B58'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'save1'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: this.props.customData },\n        backIsShow: true,\n        editIsShow: true,\n        rightText: '\\u4FDD\\u5B58',\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'save1'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control58_TraKH5: function (elem) {
      if (!elem) {
        return;
      }
      if (elem) {
        var obj = { data: [], currentVal: '', workVal: '' };
        var trs = $(elem).children("tr");
        trs.each(function (i, d) {
          var rows = [[[], []], []]; //获取所有tr里奇数行的title
          if ($(d).children("td").length == 1) {
            //里面含有table的
            var table = [[], [], [], [], [], [], []];
            table[3].push("reciewInfo");
            var detailtableTD = $(d).children("td").find("table[id*='table'] tbody tr").eq(2).find(".detailtableTD");
            var detail1 = detailtableTD.eq(0).find("span[name='detailIndexSpan0']");
            var detail2 = detailtableTD.eq(1).find("input[temptitle='未打卡日期']");
            var detail3 = detailtableTD.eq(2).find("select");
            var detail4 = detailtableTD.eq(3).find("textarea");
            for (var i = 0; i < detail1.length; i++) {
              table[0].push(detail1[i].textContent);
              table[1].push(detail2[i].value);
              var options = detail3[i].querySelectorAll("option");
              for (var n = 0; n < options.length; n++) {
                if (options[n].selected) {
                  table[2].push(options[n].textContent);
                }
              }
              if (detail4[i].disable) {
                //textarea是否是禁用的
                table[5].push("disable");
              } else if (detail4[i].style.display == "none") {
                table[5].push("cannot");
              } else {
                table[5].push("able");
              }
              if (detail4[i].nextElementSibling && detail4[i].nextElementSibling.querySelector("img")) {
                //是否未填写
                table[6].push("unwrite");
              } else {
                table[6].push("write");
              }
              table[4].push(detail4[i].value);
            }
            rows[1].push(table);
          }
          $(d).children("td:nth-child(odd)").each(function (idx, dt) {
            rows[0][0].push(dt.textContent.trim());
            if (dt.querySelector("table[id*='table']")) {
              rows[0][0] = [""];
            }
            if ($(dt).next().find('img').length > 0 && dt.textContent != "附件") {
              rows[0][1].push("unwrite");
            } else {
              rows[0][1].push("");
            }
          }); //获取所有tr偶数行的内容
          $(d).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelectorAll("select").length > 0) {
              //td重含有select的
              var select = [[], [], [], [], [], []];
              if (dt.querySelector("select").textContent.indexOf("否") != -1) {
                select[4].push("YorN");
              }
              if (dt.querySelector("select").nextElementSibling.querySelector("img")) {
                //是否未填写
                select[5].push("unwrite");
              }
              $(dt).find("select").children("option").each(function (i, d) {
                select[0].push(d.textContent); //选项
                if (d.selected) {
                  select[1].push(d.textContent); //选中项
                }
              });
              if (dt.querySelectorAll("select")[0].disabled) {
                select[2].push("disabled"); //select是否为disabled
              }
              select[3].push("select");
              rows[1].push(select);
            } else if (dt.querySelectorAll("input[type='button']").length > 0) {
              //td中含有计算时长
              var days = [];
              if (dt.textContent == "") {
                days.push(dt.querySelector("input[type='hidden']").value);
              } else {
                days.push(dt.textContent);
              }
              days.push(dt.querySelectorAll("input[type='button']")[0].value);
              rows[1].push(days);
            } else if (dt.querySelectorAll("button").length > 0) {
              //td中含有button
              var button = [[], [], [], [], []];
              button[1].push("button"); //有button的标识
              if (dt.querySelector("input[temptitle*='日期']")) {
                button[3].push("date"); //有日期的标识 
                if (dt.querySelector("button").nextElementSibling.querySelector("img")) {
                  button[4].push("unwrite");
                }
                button[2].push(dt.textContent.replace(/\s/g, "").trim());
              } else if (dt.querySelectorAll(".btnFlowd").length > 0) {
                button[3].push("download"); //附件下载
                var a = dt.querySelectorAll("a");
                var url = dt.querySelectorAll(".btnFlowd");
                for (var i = 0; i < a.length; i++) {
                  button[4].push(url[i].getAttribute("onclick").match(/\/.*[0-9]/g));
                  button[0].push(a[i].textContent);
                }
                button[2].push(dt.textContent.replace(/\s/g, "").trim());
              } else {
                button[3].push("search"); //查询人员、部门
                var aArr = dt.querySelectorAll("a");
                for (var i = 0; i < aArr.length; i++) {
                  button[2].push(aArr[i].textContent);
                }
              }
              rows[1].push(button);
            } else if (dt.querySelectorAll("form").length > 0) {
              var upload = [[], [], [], [], []];
              upload[3].push("upload");
              upload[0].push("附件");
              if (dt.querySelector(".fieldset")) {
                var progressName = dt.querySelector(".fieldset").querySelectorAll(".progressName");
                for (var i = 0; i < progressName.length; i++) {
                  upload[2].push(progressName[i].textContent);
                }
              }
              rows[1].push(upload);
            } else if (dt.querySelectorAll("textarea").length > 0) {
              //td中含有textarea
              var textarea = [[], [], [], [], []];
              textarea[3].push("textarea"); //有textarea的标识
              textarea[1].push(dt.textContent.replace(/\s/g, "").trim()); //textarea内容
              rows[1].push(textarea);
            } else {
              rows[1].push(dt.textContent.replace(/\s/g, "").trim());
            }
          });
          obj.data.push(rows);
        });
        obj.data.pop();
        if (elem.querySelector('input[temptitle="申请人岗位"]')) {
          obj.currentVal = elem.querySelector('input[temptitle="申请人岗位"]').value;
        }
        if (elem.querySelector('input[temptitle="工作交接人"]')) {
          obj.workVal = obj && elem.querySelector('input[temptitle="工作交接人"]').value;
        }
        return obj;
      }
    },
    doAction_uiControl54_GI48cc: function (data, elem) {
      var d = data.dataCustom;
      var row = d.row;
      var column = d.column;
      var classname = d.classname;
      var i = d.i;
      var url = d.url;
      var card = d.card;
      var check = d.check;
      var val = d.val;
      if (data.eventType == "click") {
        if (classname == "caculate") {
          $(elem).children("tr").eq(row).children(".zdn").eq(column).find("input[type='button']").click();
        } else if (classname == "searchBtn") {
          debugger;
          $(elem).children("tr").eq(row).children(".zdn").eq(column).find("button").click();
        } else if (classname == "recieveInfo") {
          $(elem).children("tr").eq(row).children(".zdn").eq(column).find("input").click();
        } else if (classname == "word") {
          console.log(d); //文档下载   
          // $(elem).children("tr").eq(row).children(".zdn").eq(column).find("a").click();
          var _url = 'http://192.168.200.63' + url;
          if (ysp.appMain.isIOS()) {
            top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
          } else if (ysp.appMain.isAndroid()) {
            top.location.href = _url;
          }
        } else if (classname == "delete") {
          var input = $($(elem).children("tr").eq(row).children("td").eq(column).find("input[type='checkbox']").eq(card))[0];
          $(elem).children("tr").eq(row).children("td").eq(column).find("input[type='checkbox']").eq(card).click();
          if (input.checked) {
            $(elem).find("#div0button").find("button").click();
          }
        } else if (classname == "loadIcon") {
          $(elem).children("tr").eq(row).children("td").eq(1).find("#Filedata").click();
        } else if (classname.indexOf("YorN")) {
          $(elem).children("tr").eq(row).children(".zdn").eq(column).find("select").children("option").eq(i).prop('selected', true);
          $(elem).children("tr").eq(row).children(".zdn").eq(column).find("select").blur();
        } else if (classname == "deleteFile") {
          console.log("12131313");
        }
      } else if (data.eventType == "select") {
        $(elem).children("tr").eq(row).children(".zdn").eq(column).find("select").children("option").eq(i).prop('selected', true);
        $(elem).children("tr").eq(row).children(".zdn").eq(column).find("select").blur();
      } else if (data.eventType == "change") {
        var textarea = $(elem).children("tr").eq(row).children(".zdn").eq(column).find("textarea");
        textarea.val(d.val);
        $(textarea)[0].dispatchEvent(new Event("change"));
        textarea.blur();
      } else if (data.eventType == "changeTime") {
        var time = $(elem).children("tr").eq(row).children(".zdn").eq(column).find("span");
        time.html(d.val);
        $(elem).children("tr").eq(row).children(".zdn").eq(column).find("input").val(d.val);
      } else if (data.eventType == "blur") {
        var card = $(elem).children("tr").eq(row).children("td").eq(column).find(".form").children("tbody").children("tr").children("td").eq(3).find("textarea").eq(card);
        card.val(val);
        $(card)[0].dispatchEvent(new Event("change"));
        card.blur();
      } else if (data.eventType == "deleteFile") {
        var input1 = elem.querySelectorAll("input[temptitle='附件']")[0];
        var arr = input1.value.split(',');
        if (arr.length !== 1) {
          arr.splice(i, 1);
          var v = parseInt(arr);
          input1.value = v;
        } else {
          input1.value = "";
        }
      }
    },
    getTemplate_uiControl54_GI48cc: function getTemplate_uiControl54_GI48cc() {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      showBtn:'\u663E\u793A\u66F4\u591A\u5185\u5BB9',\n      arrFlag:\"\",\n      addFlag: true,\n      workVal:props.customData && props.customData.workVal !== null ? props.customData.workVal : ''\n    }\n    this.flag = 0;\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      workVal:nextProps.customData.workVal\n    })\n  }\n  click(e){\n    \n    var _this=this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        data:{row:e.target.dataset.row,column:e.target.dataset.column,val:e.target.value,classname:e.target.className,url:e.target.dataset.url,i:e.target.dataset.i,card:e.target.dataset.card},\n        eventType:\"click\"\n      })\n    }\n  }\n  deleteFile(e){\n    var _this=this;\n    var handler=_this.props.customHandler;\n    e.target.parentElement.style.display=\"none\";\n    if(handler){\n      handler({\n        data:{row:e.target.dataset.row,column:e.target.dataset.column,val:e.target.value,classname:e.target.className,url:e.target.dataset.url,i:e.target.dataset.i,card:e.target.dataset.card},\n        eventType:\"deleteFile\"\n      })\n    }\n  }\n  select(e){\n    var _this=this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        data:{row:e.target.dataset.row,column:e.target.dataset.column,val:e.target.value,classname:e.target.className,i:e.target.selectedIndex},\n        eventType:\"select\"\n      })\n    }\n  }\n  change(e){\n    var _this=this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        data:{row:e.target.dataset.row,column:e.target.dataset.column,val:e.target.value,classname:e.target.className,card:e.target.dataset.card},\n        eventType:\"change\"\n      })\n    }\n  }\n  blur(e){\n    var _this=this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        data:{row:e.target.dataset.row,column:e.target.dataset.column,val:e.target.value,classname:e.target.className,card:e.target.dataset.card},\n        eventType:\"blur\"\n      })\n    }\n  }\n\n  render(){\n    var obj=this.props.customData||[];\n    var data=obj.data||[];\n    var _this=this;\n    \n    if(_this.state.workVal == ''){\n      _this.flag = 1;\n    }else{\n      _this.flag = 0;\n    }\n    var list=data.map(function(d1,i1){\n\n      \n      return(\n      \t<div className=\"ysp_detail\" ref=\"detailInfo\">\n        \t{\n            d1[0][0].map(function(d2,i2){\n              return(\n              \t<div className={i1<1 ? \"ysp_detail_row\":(i1>1&&_this.flag==0? \"ysp_detail_row\":(i1==1&&_this.flag==0? \"ysp_detail_row\":\"none\"))}>\n                  <span className=\"row_title\">{d2}{d1[0][1][i2]==\"unwrite\"? <span className=\"unwrite\"></span>:\"\"}</span>\n                  {d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"select\"&&d1[1][i2][4]==\"\"?  (<select className={d1[1][i2][2]==\"disabled\"? \"unSelect\":\"actSelect\"} disabled={d1[1][i2][2]==\"disabled\"} data-row={i1} data-column={i2} onChange={_this.select.bind(_this)}>{\n                    d1[1][i2][0]instanceof Array? d1[1][i2][0].map(function(d3,i3){\n                      return (\n                      \t<option selected={d1[1][i2][1]==d3}>{d3}</option>\n                      )\n                    }):\"\"\n                  }</select>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"select\"&&d1[1][i2][4]==\"YorN\"?  (d1[1][i2][2]==\"disabled\"? <span className=\"unchoose\">{d1[1][i2][1]}</span>:<div className=\"choose\"><span className={d1[1][i2][1]==\"\u662F\"? \"check YorN\" :\"yorn YorN\"} data-row={i1} data-column={i2} data-i=\"1\" onClick={_this.click.bind(_this)}>\u662F</span><span className={d1[1][i2][1]==\"\u5426\"? \"check YorN\" :\"yorn YorN\"} data-row={i1} data-column={i2} data-i=\"2\" onClick={_this.click.bind(_this)}>\u5426</span></div>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][1]==\"\u8BA1\u7B97\u65F6\u957F\"? (<div className=\"totalTime\"><span>{d1[1][i2][0]}</span><span className=\"caculate\" data-row={i1} data-column={i2} onClick={_this.click.bind(_this)}>{d1[1][i2][1]}</span></div>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][1]==\"\u83B7\u53D6\u672A\u6253\u5361\u4FE1\u606F\"? (<div className=\"recieveInfo\" data-row={i1} data-column={i2} onClick={_this.click.bind(_this)}>{d1[1][i2][1]}</div>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"date\"? (<input type=\"date\" className='time' value={d1[1][i2][2]} onChange={(e)=>{\n                        var handler=_this.props.customHandler;\n                        if(handler){\n                          handler({\n                            data:{row:i1,column:i2,val:e.target.value},\n                            eventType:\"changeTime\"\n                          })\n                        }\n                      }}/>): \n                  d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"search\"&&d1[1][i2][1]==\"button\"? (<div className=\"searchRow\" data-row={i1} data-column={i2} onClick={_this.click.bind(_this)}>\n                      \n                      <div className=\"nameleft\">\n                        {d1[1][i2][2].map(function(d6,i6){\n                          return(\n                            <span className=\"name\">{d6}</span>\n                          )\n                        })}\n                      </div>\n                      <span className=\"searchBtn\" data-row={i1} data-column={i2}></span>\n                    </div>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"textarea\"? (<textarea className=\"editArea\" data-row={i1} data-column={i2} onChange={_this.change.bind(_this)}>{d1[1][i2][1]}</textarea>) :\n                   d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"download\"&&d1[1][i2][1]==\"button\"? (<div className=\"upLoading\">{d1[1][i2][0].map(function(d4,i4){\n                        return(\n                        \t<div className=\"word\" data-url={d1[1][i2][4][i4]} data-row={i1} data-column={i2} data-i={i4} onClick={_this.click.bind(_this)}>\n                            <span className={d4.indexOf(\"doc\")!=-1? \"doc\":(d4.indexOf(\"txt\")!=-1? \"txt\":(d4.indexOf(\"xl\")!=-1? \"xls\":(d4.indexOf(\"pdf\")!=-1? \"pdf\":\"else\")))}></span>\n                          \t{d4}\n                            <span className=\"download\"></span>\n                          </div>\n                        )\n                      })}</div>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][1]!=\"\u8BA1\u7B97\u65F6\u957F\"&&d1[1][i2][3]==\"upload\"? ( \n                    <div className=\"Loading\">\n                      {d1[1][i2][3]==\"upload\"? <span className=\"loadIcon\" onClick={_this.click.bind(_this)} data-row={i1} data-column={i2}></span>:\"\"}\n                    \t{d1[1][i2][2].map(function(d6,i6){\n                        return(\n                        \t<div onClick={_this.deleteFile.bind(_this)} data-row={i1} data-column={i2} data-i={i6}><span className={d6.indexOf(\"doc\")!=-1? \"doc\":(d6.indexOf(\"txt\")!=-1? \"txt\":(d6.indexOf(\"xl\")!=-1? \"xls\":(d6.indexOf(\"pdf\")!=-1? \"pdf\":\"else\")))}></span>{d6}<span className=\"deleteFile\"></span></div>\n                        )\n                      })}\n      \t\t\t\t\t\t\t</div>):\n                  d1[1][i2] instanceof Array&&d1[1][i2][3]==\"reciewInfo\"? (<div className=\"tableCard\">{d1[1][i2][0].map(function(d5,i5){\n                        return(\n                        \t<div className=\"tableCardDetail\">\n                          \t<div className=\"num\"><span>\u5E8F\u53F7{d5}</span><span className={d1[1][i2][5][i5]==\"able\"? 'delete':\"\"} onClick={_this.click.bind(_this)} data-row={i1} data-column={i2} data-card={i5}></span></div>\n                            <div><span>\u672A\u6253\u5361\u65E5\u671F</span><span>{d1[1][i2][1][i5]}</span></div>\n                            <div><span>\u6253\u5361\u7C7B\u578B</span><span>{d1[1][i2][2][i5]}</span></div>\n                            <div><span className={d1[1][i2][6][i5]==\"unwrite\"? 'unwrite':\"write\"}>\u7533\u8BF7\u8BF4\u660E</span>{d1[1][i2][5][i5]==\"able\"?  <textarea onBlur={_this.blur.bind(_this)} data-row={i1} data-column={i2} data-card={i5} defaultValue={d1[1][i2][4][i5]}></textarea>:<span>{d1[1][i2][4][i5]}</span>}</div>\n                          </div>\n                        )\n                      })}</div>):<div className=\"row_content\">{d1[1][i2]}</div>}\n                </div>\n              )\n            })\n          }\n        </div>\n      )\n    })\n    return(\n    \t<div className=\"ysp_detail_wrapper\" ref=\"detail\">\n        <div className=\"ysp_askForLeave_title\">\u57FA\u672C\u4FE1\u606F</div>\n        {list}\n        <span className=\"ysp_showMore\" onClick={(e)=>{\n            var detail=e.target.parentNode.querySelectorAll(\".ysp_detail_row\");\n            if(detail.length>5){\n              this.setState({\n                showBtn:\"\u663E\u793A\u66F4\u591A\u5185\u5BB9\"\n              });\n              for(var i=4;i<detail.length;i++){\n                detail[i].className=\"none\";\n              }\n              e.target.className=\"ysp_showMore\"\n            }else{\n              var disDetail=e.target.parentNode.querySelectorAll(\".none\");\n              if(disDetail.length>0){\n                this.setState({\n                  showBtn:\"\u6536\u9F50\u5168\u90E8\u5185\u5BB9\"\n                });\n                e.target.className=\"close\"\n                for(var i=0;i<disDetail.length;i++){\n                  disDetail[i].className=\"ysp_detail_row\";\n                }\n              }\n            }\n            \n             \n          }}>{this.state.showBtn}</span>\n        \n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      showBtn: '\u663E\u793A\u66F4\u591A\u5185\u5BB9',\n      arrFlag: \"\",\n      addFlag: true,\n      workVal: props.customData && props.customData.workVal !== null ? props.customData.workVal : ''\n    };\n    _this2.flag = 0;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        workVal: nextProps.customData.workVal\n      });\n    }\n  }, {\n    key: \"click\",\n    value: function click(e) {\n\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { row: e.target.dataset.row, column: e.target.dataset.column, val: e.target.value, classname: e.target.className, url: e.target.dataset.url, i: e.target.dataset.i, card: e.target.dataset.card },\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"deleteFile\",\n    value: function deleteFile(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      e.target.parentElement.style.display = \"none\";\n      if (handler) {\n        handler({\n          data: { row: e.target.dataset.row, column: e.target.dataset.column, val: e.target.value, classname: e.target.className, url: e.target.dataset.url, i: e.target.dataset.i, card: e.target.dataset.card },\n          eventType: \"deleteFile\"\n        });\n      }\n    }\n  }, {\n    key: \"select\",\n    value: function select(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { row: e.target.dataset.row, column: e.target.dataset.column, val: e.target.value, classname: e.target.className, i: e.target.selectedIndex },\n          eventType: \"select\"\n        });\n      }\n    }\n  }, {\n    key: \"change\",\n    value: function change(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { row: e.target.dataset.row, column: e.target.dataset.column, val: e.target.value, classname: e.target.className, card: e.target.dataset.card },\n          eventType: \"change\"\n        });\n      }\n    }\n  }, {\n    key: \"blur\",\n    value: function blur(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { row: e.target.dataset.row, column: e.target.dataset.column, val: e.target.value, classname: e.target.className, card: e.target.dataset.card },\n          eventType: \"blur\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var obj = this.props.customData || [];\n      var data = obj.data || [];\n      var _this = this;\n\n      if (_this.state.workVal == '') {\n        _this.flag = 1;\n      } else {\n        _this.flag = 0;\n      }\n      var list = data.map(function (d1, i1) {\n\n        return React.createElement(\n          \"div\",\n          { className: \"ysp_detail\", ref: \"detailInfo\" },\n          d1[0][0].map(function (d2, i2) {\n            return React.createElement(\n              \"div\",\n              { className: i1 < 1 ? \"ysp_detail_row\" : i1 > 1 && _this.flag == 0 ? \"ysp_detail_row\" : i1 == 1 && _this.flag == 0 ? \"ysp_detail_row\" : \"none\" },\n              React.createElement(\n                \"span\",\n                { className: \"row_title\" },\n                d2,\n                d1[0][1][i2] == \"unwrite\" ? React.createElement(\"span\", { className: \"unwrite\" }) : \"\"\n              ),\n              d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"select\" && d1[1][i2][4] == \"\" ? React.createElement(\n                \"select\",\n                { className: d1[1][i2][2] == \"disabled\" ? \"unSelect\" : \"actSelect\", disabled: d1[1][i2][2] == \"disabled\", \"data-row\": i1, \"data-column\": i2, onChange: _this.select.bind(_this) },\n                d1[1][i2][0] instanceof Array ? d1[1][i2][0].map(function (d3, i3) {\n                  return React.createElement(\n                    \"option\",\n                    { selected: d1[1][i2][1] == d3 },\n                    d3\n                  );\n                }) : \"\"\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"select\" && d1[1][i2][4] == \"YorN\" ? d1[1][i2][2] == \"disabled\" ? React.createElement(\n                \"span\",\n                { className: \"unchoose\" },\n                d1[1][i2][1]\n              ) : React.createElement(\n                \"div\",\n                { className: \"choose\" },\n                React.createElement(\n                  \"span\",\n                  { className: d1[1][i2][1] == \"\u662F\" ? \"check YorN\" : \"yorn YorN\", \"data-row\": i1, \"data-column\": i2, \"data-i\": \"1\", onClick: _this.click.bind(_this) },\n                  \"\\u662F\"\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: d1[1][i2][1] == \"\u5426\" ? \"check YorN\" : \"yorn YorN\", \"data-row\": i1, \"data-column\": i2, \"data-i\": \"2\", onClick: _this.click.bind(_this) },\n                  \"\\u5426\"\n                )\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] == \"\u8BA1\u7B97\u65F6\u957F\" ? React.createElement(\n                \"div\",\n                { className: \"totalTime\" },\n                React.createElement(\n                  \"span\",\n                  null,\n                  d1[1][i2][0]\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: \"caculate\", \"data-row\": i1, \"data-column\": i2, onClick: _this.click.bind(_this) },\n                  d1[1][i2][1]\n                )\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] == \"\u83B7\u53D6\u672A\u6253\u5361\u4FE1\u606F\" ? React.createElement(\n                \"div\",\n                { className: \"recieveInfo\", \"data-row\": i1, \"data-column\": i2, onClick: _this.click.bind(_this) },\n                d1[1][i2][1]\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"date\" ? React.createElement(\"input\", { type: \"date\", className: \"time\", value: d1[1][i2][2], onChange: function onChange(e) {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: { row: i1, column: i2, val: e.target.value },\n                      eventType: \"changeTime\"\n                    });\n                  }\n                } }) : d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"search\" && d1[1][i2][1] == \"button\" ? React.createElement(\n                \"div\",\n                { className: \"searchRow\", \"data-row\": i1, \"data-column\": i2, onClick: _this.click.bind(_this) },\n                React.createElement(\n                  \"div\",\n                  { className: \"nameleft\" },\n                  d1[1][i2][2].map(function (d6, i6) {\n                    return React.createElement(\n                      \"span\",\n                      { className: \"name\" },\n                      d6\n                    );\n                  })\n                ),\n                React.createElement(\"span\", { className: \"searchBtn\", \"data-row\": i1, \"data-column\": i2 })\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"textarea\" ? React.createElement(\n                \"textarea\",\n                { className: \"editArea\", \"data-row\": i1, \"data-column\": i2, onChange: _this.change.bind(_this) },\n                d1[1][i2][1]\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"download\" && d1[1][i2][1] == \"button\" ? React.createElement(\n                \"div\",\n                { className: \"upLoading\" },\n                d1[1][i2][0].map(function (d4, i4) {\n                  return React.createElement(\n                    \"div\",\n                    { className: \"word\", \"data-url\": d1[1][i2][4][i4], \"data-row\": i1, \"data-column\": i2, \"data-i\": i4, onClick: _this.click.bind(_this) },\n                    React.createElement(\"span\", { className: d4.indexOf(\"doc\") != -1 ? \"doc\" : d4.indexOf(\"txt\") != -1 ? \"txt\" : d4.indexOf(\"xl\") != -1 ? \"xls\" : d4.indexOf(\"pdf\") != -1 ? \"pdf\" : \"else\" }),\n                    d4,\n                    React.createElement(\"span\", { className: \"download\" })\n                  );\n                })\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] != \"\u8BA1\u7B97\u65F6\u957F\" && d1[1][i2][3] == \"upload\" ? React.createElement(\n                \"div\",\n                { className: \"Loading\" },\n                d1[1][i2][3] == \"upload\" ? React.createElement(\"span\", { className: \"loadIcon\", onClick: _this.click.bind(_this), \"data-row\": i1, \"data-column\": i2 }) : \"\",\n                d1[1][i2][2].map(function (d6, i6) {\n                  return React.createElement(\n                    \"div\",\n                    { onClick: _this.deleteFile.bind(_this), \"data-row\": i1, \"data-column\": i2, \"data-i\": i6 },\n                    React.createElement(\"span\", { className: d6.indexOf(\"doc\") != -1 ? \"doc\" : d6.indexOf(\"txt\") != -1 ? \"txt\" : d6.indexOf(\"xl\") != -1 ? \"xls\" : d6.indexOf(\"pdf\") != -1 ? \"pdf\" : \"else\" }),\n                    d6,\n                    React.createElement(\"span\", { className: \"deleteFile\" })\n                  );\n                })\n              ) : d1[1][i2] instanceof Array && d1[1][i2][3] == \"reciewInfo\" ? React.createElement(\n                \"div\",\n                { className: \"tableCard\" },\n                d1[1][i2][0].map(function (d5, i5) {\n                  return React.createElement(\n                    \"div\",\n                    { className: \"tableCardDetail\" },\n                    React.createElement(\n                      \"div\",\n                      { className: \"num\" },\n                      React.createElement(\n                        \"span\",\n                        null,\n                        \"\\u5E8F\\u53F7\",\n                        d5\n                      ),\n                      React.createElement(\"span\", { className: d1[1][i2][5][i5] == \"able\" ? 'delete' : \"\", onClick: _this.click.bind(_this), \"data-row\": i1, \"data-column\": i2, \"data-card\": i5 })\n                    ),\n                    React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        null,\n                        \"\\u672A\\u6253\\u5361\\u65E5\\u671F\"\n                      ),\n                      React.createElement(\n                        \"span\",\n                        null,\n                        d1[1][i2][1][i5]\n                      )\n                    ),\n                    React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        null,\n                        \"\\u6253\\u5361\\u7C7B\\u578B\"\n                      ),\n                      React.createElement(\n                        \"span\",\n                        null,\n                        d1[1][i2][2][i5]\n                      )\n                    ),\n                    React.createElement(\n                      \"div\",\n                      null,\n                      React.createElement(\n                        \"span\",\n                        { className: d1[1][i2][6][i5] == \"unwrite\" ? 'unwrite' : \"write\" },\n                        \"\\u7533\\u8BF7\\u8BF4\\u660E\"\n                      ),\n                      d1[1][i2][5][i5] == \"able\" ? React.createElement(\"textarea\", { onBlur: _this.blur.bind(_this), \"data-row\": i1, \"data-column\": i2, \"data-card\": i5, defaultValue: d1[1][i2][4][i5] }) : React.createElement(\n                        \"span\",\n                        null,\n                        d1[1][i2][4][i5]\n                      )\n                    )\n                  );\n                })\n              ) : React.createElement(\n                \"div\",\n                { className: \"row_content\" },\n                d1[1][i2]\n              )\n            );\n          })\n        );\n      });\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_detail_wrapper\", ref: \"detail\" },\n        React.createElement(\n          \"div\",\n          { className: \"ysp_askForLeave_title\" },\n          \"\\u57FA\\u672C\\u4FE1\\u606F\"\n        ),\n        list,\n        React.createElement(\n          \"span\",\n          { className: \"ysp_showMore\", onClick: function onClick(e) {\n              var detail = e.target.parentNode.querySelectorAll(\".ysp_detail_row\");\n              if (detail.length > 5) {\n                _this3.setState({\n                  showBtn: \"\u663E\u793A\u66F4\u591A\u5185\u5BB9\"\n                });\n                for (var i = 4; i < detail.length; i++) {\n                  detail[i].className = \"none\";\n                }\n                e.target.className = \"ysp_showMore\";\n              } else {\n                var disDetail = e.target.parentNode.querySelectorAll(\".none\");\n                if (disDetail.length > 0) {\n                  _this3.setState({\n                    showBtn: \"\u6536\u9F50\u5168\u90E8\u5185\u5BB9\"\n                  });\n                  e.target.className = \"close\";\n                  for (var i = 0; i < disDetail.length; i++) {\n                    disDetail[i].className = \"ysp_detail_row\";\n                  }\n                }\n              }\n            } },\n          this.state.showBtn\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control72_kANAED: function getData_control72_kANAED(elem) {
      if (!elem) {
        return;
      }
      if (elem) {
        var data = [];
        var trs = $(elem).children("tr[class*='data']");
        for (var i = 0; i < trs.length; i++) {
          var tds = $(trs[i]).children("td");
          var tdText = [];
          for (var n = 0; n < tds.length; n++) {
            if (tds[n].querySelector("iframe") && tds[n].querySelector("iframe").contentDocument.querySelector("p")) {
              tdText.push(tds[n].querySelector("iframe").contentDocument.querySelector("p").textContent.trim()); // tdText.push('11');
            } else if (n == 3) {
              tdText.push(tds[3].textContent);
            } else if (n == 5) {
              if (tds[5].textContent.replace(/\s/g, "").length > 25) {
                tdText.push(tds[5].textContent.replace(/\s/g, "").slice(25));
              } else {
                tdText.push(tds[5].textContent.replace(/\s/g, ""));
              }
            } else {
              tdText.push(tds[n].textContent.replace(/\s/g, ""));
            }
          }
          data.push(tdText);
        }
        return data;
      }
    },
    doAction_uiControl62_0AZpsK: function doAction_uiControl62_0AZpsK(data, elem) {
      if (data.eventType == "click") {
        console.log(data.dataCustom);
        $(elem).children("tr").eq(data.dataCustom + 1).children("td").eq(5).find("span").click();
      }
    },
    getTemplate_uiControl62_0AZpsK: function getTemplate_uiControl62_0AZpsK() {
      var selfTemplate = 'import {Component} from "react";\nexport default class extends Component{\n  render(){\n    var data=this.props.customData||[];\n    var _this=this;\n    var list=data.map(function(d,i){\n      return(\n      \t<div className="ysp_advice_card">\n        \t<div className="ysp_card_left">\n          \t<div className="node">\u8282\u70B9</div>\n            <div className="nodePerson">{d[0]}</div>\n          </div>\n          <div className="ysp_card_right">\n          \t<div className="ysp_card_detail">\n            \t<span className="title">\u64CD\u4F5C\u4EBA\uFF1A</span>\n              <span>{d[2]}</span>\n            </div>\n            <div className="ysp_card_detail">\n            \t<span className="title">\u64CD\u4F5C\u65F6\u95F4\uFF1A</span>\n              <span>{d[3]}</span>\n            </div>\n            <div className="ysp_card_detail">\n            \t<span className="title">\u64CD\u4F5C\uFF1A</span>\n              <span>{d[4]}</span>\n            </div>\n            <div className="ysp_card_detail">\n            \t<span className="title">\u63A5\u6536\u4EBA\uFF1A</span>\n              <span className="show" onClick={(e)=>{\n                  var handler=_this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:i,\n                      eventType:"click"\n                    })\n                  }\n                }}>{d[5]}</span>\n            </div>\n            <div className="ysp_card_detail">\n            \t<span className="title">\u610F\u89C1\uFF1A</span>\n              <span>{d[1]}</span>\n            </div>\n          </div>\n        </div>\n      )\n    });\n    return (\n    \t<div className="ysp_advice_wrapper">\n        {list}\n      </div>\n    )\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      var list = data.map(function (d, i) {\n        return React.createElement(\n          "div",\n          { className: "ysp_advice_card" },\n          React.createElement(\n            "div",\n            { className: "ysp_card_left" },\n            React.createElement(\n              "div",\n              { className: "node" },\n              "\\u8282\\u70B9"\n            ),\n            React.createElement(\n              "div",\n              { className: "nodePerson" },\n              d[0]\n            )\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp_card_right" },\n            React.createElement(\n              "div",\n              { className: "ysp_card_detail" },\n              React.createElement(\n                "span",\n                { className: "title" },\n                "\\u64CD\\u4F5C\\u4EBA\\uFF1A"\n              ),\n              React.createElement(\n                "span",\n                null,\n                d[2]\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp_card_detail" },\n              React.createElement(\n                "span",\n                { className: "title" },\n                "\\u64CD\\u4F5C\\u65F6\\u95F4\\uFF1A"\n              ),\n              React.createElement(\n                "span",\n                null,\n                d[3]\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp_card_detail" },\n              React.createElement(\n                "span",\n                { className: "title" },\n                "\\u64CD\\u4F5C\\uFF1A"\n              ),\n              React.createElement(\n                "span",\n                null,\n                d[4]\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp_card_detail" },\n              React.createElement(\n                "span",\n                { className: "title" },\n                "\\u63A5\\u6536\\u4EBA\\uFF1A"\n              ),\n              React.createElement(\n                "span",\n                { className: "show", onClick: function onClick(e) {\n                    var handler = _this.props.customHandler;\n                    if (handler) {\n                      handler({\n                        data: i,\n                        eventType: "click"\n                      });\n                    }\n                  } },\n                d[5]\n              )\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp_card_detail" },\n              React.createElement(\n                "span",\n                { className: "title" },\n                "\\u610F\\u89C1\\uFF1A"\n              ),\n              React.createElement(\n                "span",\n                null,\n                d[1]\n              )\n            )\n          )\n        );\n      });\n      return React.createElement(\n        "div",\n        { className: "ysp_advice_wrapper" },\n        list\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control63_xKq6K5: function (elem) {
      if (!elem) {
        return;
      }
      var data = [];
      var showData = [];
      var moreData = [];
      var doc = elem.querySelector('#toolbarmenu');
      if (doc) {
        //   showData.push(doc.querySelector('.btn_subnobackName').textContent.trim()); //批准
        //   showData.push(doc.querySelector('.btn_subbackName').textContent.trim()); //提交
        //   [].forEach.call(doc.querySelectorAll('.btn_edit'), function (item, index) {//前插 后插
        //     moreData.push(item.textContent.trim());
        //   });
        //   moreData.push(doc.querySelector('.btn_rejectName').textContent.trim()); //退回
        //   moreData.push(doc.querySelector('.btn_forward').textContent.trim()); //送阅
        //   moreData.push(doc.querySelector('.btn_back').textContent.trim()); //返回
        [].forEach.call(doc.querySelectorAll('button'), function (btnItem, tdIndex) {
          data.push(btnItem.textContent.trim());
        });
      } // data.showData = showData;
      // data.moreData = moreData;
      return data;
    },
    doAction_uiControl65_ILA94I: function (data, elem) {
      var eventType = data.eventType;
      var btnIndex = data.dataCustom.num;
      if (eventType == 'click') {
        elem.querySelectorAll('button')[btnIndex].click();
      }
    },
    getTemplate_uiControl65_ILA94I: function getTemplate_uiControl65_ILA94I() {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      isMoreOpen: false,\n      isShowBottom: true\n    }\n  }\n  \n  btnClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{num:e.target.dataset.num},\n        eventType:'click'\n      })\n    }\n    var evt = new Event('ysp-file-upload');\n    evt.value = '\u4E0A\u4F20\u6587\u4EF6';\n    window.dispatchEvent(evt);\n  }\n  \n  showMoreButton=(e)=>{\n    this.setState((prevState) => {\n  \t\treturn {\n        isMoreOpen: !prevState.isMoreOpen,\n      \tisShowBottom: !prevState.isShowBottom\n      };\n\t\t});\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    if(data == null || data == undefined){\n      return null;\n    }\n    return (\n    \t<div className=\"ysp-process-form-wrapper\">\n        {data.length>2? \n        \t<div>\n          \t{_this.state.isShowBottom&&\n            <div className=\"ysp-process-form-bottom-button\">\n              <div>\n                <span data-num=\"2\" onClick={_this.btnClick.bind(_this)}>{data[2]}</span>\n                <span data-num=\"0\" onClick={_this.btnClick.bind(_this)}>{data[0]}</span>\n                <span onClick={_this.showMoreButton.bind(_this)}></span>\n              </div>\n\n            </div>\n            }\n            {_this.state.isMoreOpen &&\n              <div className=\"load-more-coverlayer\">\n                <div className=\"load-more-data\">\n                  <section>\n                    <div data-num=\"3\" onClick={_this.btnClick.bind(_this)}>{data[3]}</div>\n                  </section>\n              \t\t<div data-num=\"4\" onClick={_this.btnClick.bind(_this)}>{data[4]}</div>\n                </div>\n              </div>\n            }\n          </div>:<div data-num='0' className={data[0]==\"\u6253\u5370\"? \"ysp_none\":\"ysp_submit\"} onClick={_this.btnClick.bind(_this)}>{data[0]}</div>\n        }\n      </div>\n      \n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.btnClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { num: e.target.dataset.num },\n          eventType: 'click'\n        });\n      }\n      var evt = new Event('ysp-file-upload');\n      evt.value = '\u4E0A\u4F20\u6587\u4EF6';\n      window.dispatchEvent(evt);\n    };\n\n    _this2.showMoreButton = function (e) {\n      _this2.setState(function (prevState) {\n        return {\n          isMoreOpen: !prevState.isMoreOpen,\n          isShowBottom: !prevState.isShowBottom\n        };\n      });\n    };\n\n    _this2.state = {\n      isMoreOpen: false,\n      isShowBottom: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data == null || data == undefined) {\n        return null;\n      }\n      return React.createElement(\n        'div',\n        { className: 'ysp-process-form-wrapper' },\n        data.length > 2 ? React.createElement(\n          'div',\n          null,\n          _this.state.isShowBottom && React.createElement(\n            'div',\n            { className: 'ysp-process-form-bottom-button' },\n            React.createElement(\n              'div',\n              null,\n              React.createElement(\n                'span',\n                { 'data-num': '2', onClick: _this.btnClick.bind(_this) },\n                data[2]\n              ),\n              React.createElement(\n                'span',\n                { 'data-num': '0', onClick: _this.btnClick.bind(_this) },\n                data[0]\n              ),\n              React.createElement('span', { onClick: _this.showMoreButton.bind(_this) })\n            )\n          ),\n          _this.state.isMoreOpen && React.createElement(\n            'div',\n            { className: 'load-more-coverlayer' },\n            React.createElement(\n              'div',\n              { className: 'load-more-data' },\n              React.createElement(\n                'section',\n                null,\n                React.createElement(\n                  'div',\n                  { 'data-num': '3', onClick: _this.btnClick.bind(_this) },\n                  data[3]\n                )\n              ),\n              React.createElement(\n                'div',\n                { 'data-num': '4', onClick: _this.btnClick.bind(_this) },\n                data[4]\n              )\n            )\n          )\n        ) : React.createElement(\n          'div',\n          { 'data-num': '0', className: data[0] == \"\u6253\u5370\" ? \"ysp_none\" : \"ysp_submit\", onClick: _this.btnClick.bind(_this) },\n          data[0]\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control82_Oe1sOv: function getData_control82_Oe1sOv(elem) {
      if (!elem) {
        return;
      }
      if (elem) {
        return elem.textContent;
      }
    },
    doAction_uiControl69_kfEJEA: function doAction_uiControl69_kfEJEA(data, elem) {},
    getTemplate_uiControl69_kfEJEA: function getTemplate_uiControl69_kfEJEA() {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className="topTitle">\n        {this.props.customData}\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      { className: "topTitle" },\n      this.props.customData\n    );\n  }\n});';
    },

    getData_control84_nadrbI: function (elem) {
      if (!elem) {
        return;
      }
      if (elem && elem.querySelector("iframe")) {
        return elem.querySelector("iframe").contentDocument.body.innerHTML;
      } else {
        return "空td";
      }
    },
    doAction_uiControl73_hrdinf: function (data, elem) {
      if (data.eventType == "change") {
        console.log(data.dataCustom);
        elem.querySelector("iframe").contentDocument.body.innerHTML = data.dataCustom;
      }
    },
    getTemplate_uiControl73_hrdinf: function getTemplate_uiControl73_hrdinf() {
      var selfTemplate = "module.exports = React.createClass({\n  textarea:function(e){\n    console.log(this.props.customData)\n    var _this=this;\n    var handler=_this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.innerHTML,\n        eventType:\"change\"\n      })\n    }\n  },\n  render: function() {\n    var _this=this;\n    return (\n       <div className=\"ysp_sign_wrapper\">\n          <div className=\"ysp_askForLeave_title\">\u7B7E\u5B57\u610F\u89C1</div>\n          {this.props.customData==\"\u7A7Atd\"? <div style={{border:\"none\"}}><textarea disabled></textarea></div>:<div contentEditable='true' dangerouslySetInnerHTML = {{__html: _this.props.customData}} onBlur = {_this.textarea} style={{height:\"100px\"}}></div>}\n      </div>\n\n    )\n  }\n});\n";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  textarea: function textarea(e) {\n    console.log(this.props.customData);\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.innerHTML,\n        eventType: \"change\"\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp_sign_wrapper\" },\n      React.createElement(\n        \"div\",\n        { className: \"ysp_askForLeave_title\" },\n        \"\\u7B7E\\u5B57\\u610F\\u89C1\"\n      ),\n      this.props.customData == \"\u7A7Atd\" ? React.createElement(\n        \"div\",\n        { style: { border: \"none\" } },\n        React.createElement(\"textarea\", { disabled: true })\n      ) : React.createElement(\"div\", { contentEditable: \"true\", dangerouslySetInnerHTML: { __html: _this.props.customData }, onBlur: _this.textarea, style: { height: \"100px\" } })\n    );\n  }\n});";
    },
    getData_control253_CceTIQ: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { basicInfo: { actEmergency: "", actMsgAlert: "" }, content: '' }; /************************流程基本信息***********************/ //选中的紧急程度
        var egyArrInput = elem.querySelectorAll("tr")[1].querySelectorAll("td")[1].querySelectorAll("input");if (egyArrInput.length > 0) {
          for (var n = 0; n < egyArrInput.length; n++) {
            if (egyArrInput[n].checked) {
              data.basicInfo.actEmergency = n + 2;
            }
          } //选中的短信提醒
        } else {
          data.content = elem.querySelectorAll("tr")[1].querySelectorAll("td")[1].textContent.trim();
        }var msgArrInput = elem.querySelectorAll("tr")[1].querySelectorAll("td")[3].querySelectorAll("input");for (var n = 0; n < msgArrInput.length; n++) {
          if (msgArrInput[n].checked) {
            data.basicInfo.actMsgAlert = n + 2;
          }
        }return data;
      }
    },
    doAction_uiControl238_znz6Fh: function (data, elem) {
      if (data.eventType == "click") {
        var i = data.dataCustom.i;var classname = data.dataCustom.classname;if (classname == "emergencyCheck") {
          elem.querySelectorAll("tr")[1].querySelectorAll("td")[1].querySelectorAll("input")[i].click();
        } else if (classname == "msgCheck") {
          elem.querySelectorAll("tr")[1].querySelectorAll("td")[3].querySelectorAll("input")[i].click();
        }
      }
    },
    getTemplate_uiControl238_znz6Fh: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  // constructor(props){\n  //   super(props);\n  //   this.state={\n  //     val:props.customData.basicInfo.actEmergency||[]\n  //   }\n  // }\n  // componentWillReceiveProps(nextProps){\n  //   this.setState({\n  //     val:this.nextProps.customData.basicInfo.actEmergency||[]\n  //   })\n  // }\n  onclick(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{classname:e.target.parentNode.className,i:e.target.dataset.index},\n        eventType:\"click\"\n      })\n    }\n  }\n  render(){\n    var egyArr=[\"\u6B63\u5E38\",\"\u91CD\u8981\",\"\u7D27\u6025\"];\n    var msgArr=[\"\u4E0D\u77ED\u4FE1\u63D0\u9192\",\"\u79BB\u7EBF\u77ED\u4FE1\u63D0\u9192\",\"\u5728\u7EBF\u77ED\u4FE1\u63D0\u9192\"];\n    var data=this.props.customData||[];\n    var _this=this;\n    return(\n    \t<div>\n      \t{data.content==\"\"? \n          (<div className=\"ysp_askForLeave_wrapper\">\n            <div className=\"ysp_askForLeave_title\">\u6D41\u7A0B\u57FA\u672C\u4FE1\u606F</div>\n            {data&&data.basicInfo&&data.basicInfo.actEmergency? <div className=\"ysp_askForLeave_content\">\n              <div className=\"ysp_emergency\">\n                <span className=\"contentTitle\">\u7D27\u6025\u7A0B\u5EA6</span>\n                <div className=\"emergencyCheck\">\n                  {egyArr.map(function(d,i){\n                    return(\n                      <span className={i==data.basicInfo.actEmergency-2? \"egyactive\":\"\"} onClick={_this.onclick.bind(_this)} data-index={i}>{d}</span>\n                    )\n                  })}\n                </div>\n              </div>\n\n            </div>:<div></div>}\n      </div>):\n        <div className=\"ysp_askForLeave_wrapper\">\n            <div className=\"ysp_askForLeave_title\">\u6D41\u7A0B\u57FA\u672C\u4FE1\u606F</div>\n          \t<span style={{paddingLeft:\"15px\",fontSize:\"13px\"}}>{data.content}</span>\n        </div>\n          \n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onclick\",\n\n    // constructor(props){\n    //   super(props);\n    //   this.state={\n    //     val:props.customData.basicInfo.actEmergency||[]\n    //   }\n    // }\n    // componentWillReceiveProps(nextProps){\n    //   this.setState({\n    //     val:this.nextProps.customData.basicInfo.actEmergency||[]\n    //   })\n    // }\n    value: function onclick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { classname: e.target.parentNode.className, i: e.target.dataset.index },\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var egyArr = [\"\u6B63\u5E38\", \"\u91CD\u8981\", \"\u7D27\u6025\"];\n      var msgArr = [\"\u4E0D\u77ED\u4FE1\u63D0\u9192\", \"\u79BB\u7EBF\u77ED\u4FE1\u63D0\u9192\", \"\u5728\u7EBF\u77ED\u4FE1\u63D0\u9192\"];\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data.content == \"\" ? React.createElement(\n          \"div\",\n          { className: \"ysp_askForLeave_wrapper\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp_askForLeave_title\" },\n            \"\\u6D41\\u7A0B\\u57FA\\u672C\\u4FE1\\u606F\"\n          ),\n          data && data.basicInfo && data.basicInfo.actEmergency ? React.createElement(\n            \"div\",\n            { className: \"ysp_askForLeave_content\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_emergency\" },\n              React.createElement(\n                \"span\",\n                { className: \"contentTitle\" },\n                \"\\u7D27\\u6025\\u7A0B\\u5EA6\"\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"emergencyCheck\" },\n                egyArr.map(function (d, i) {\n                  return React.createElement(\n                    \"span\",\n                    { className: i == data.basicInfo.actEmergency - 2 ? \"egyactive\" : \"\", onClick: _this.onclick.bind(_this), \"data-index\": i },\n                    d\n                  );\n                })\n              )\n            )\n          ) : React.createElement(\"div\", null)\n        ) : React.createElement(\n          \"div\",\n          { className: \"ysp_askForLeave_wrapper\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp_askForLeave_title\" },\n            \"\\u6D41\\u7A0B\\u57FA\\u672C\\u4FE1\\u606F\"\n          ),\n          React.createElement(\n            \"span\",\n            { style: { paddingLeft: \"15px\", fontSize: \"13px\" } },\n            data.content\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);