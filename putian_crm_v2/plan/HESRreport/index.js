"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control141_hMt91z: function getData_control141_hMt91z(elem) {},
    doAction_uiControl128_dEbMc0: function doAction_uiControl128_dEbMc0(data, elem) {
      if (data.eventType === 'back') {
        //ysp.appMain.back();
        history.go(-1);
      }
    },
    getTemplate_uiControl128_dEbMc0: function getTemplate_uiControl128_dEbMc0() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u62DC\u8BBF\u7BA1\u7406\u7B54\u9898\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u62DC\u8BBF\u7BA1\u7406\u7B54\u9898\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control142_u7Hv9U: function getData_control142_u7Hv9U(elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = []; //可以提交的HES
        if (elem) {
          var contentPanels = elem.querySelectorAll(".content-panel");for (var i = 0; i < contentPanels.length; i++) {
            var obj = { title: "", //每个版块的大标题
              panelPart: [] //每个版块里的题目信息
            };obj.title = contentPanels[i].querySelector(".content-panel-title").textContent;var partList = contentPanels[i].querySelectorAll(".content-panel-part_list"); //每个版块的题目
            for (var j = 0; j < partList.length; j++) {
              var panelObj = { isRequired: "", subject: { num: "", title: "", type: "", option: [], text: "", fileList: [], upLoadBtn: "", picUpLoad: [] }, upLoad: "" };if (partList[j].className.indexOf("required") == -1) {
                //判断是否是必填项
                panelObj.isRequired = "unRequired";
              } else {
                panelObj.isRequired = "required";
              }panelObj.subject.title = partList[j].querySelector(".sortNum").nextSibling.textContent; //题目标题
              panelObj.subject.num = partList[j].querySelector(".sortNum").textContent; //题目号
              if (partList[j].querySelectorAll("input[type='checkbox']").length > 0) {
                //题目类型是选择题并且是CheckBox类型
                panelObj.subject.type = "checkbox";var optionsArr = partList[j].querySelector(".answer").querySelectorAll("label");for (var s = 0; s < optionsArr.length; s++) {
                  var optionObj = {};optionObj.isChecked = optionsArr[s].querySelector("input").checked;optionObj.content = optionsArr[s].querySelector("span").textContent;if (optionsArr[s].querySelector(".mustFill")) {
                    optionObj.itemRemark = optionsArr[s].querySelector(".mustFill").querySelector("input").value;
                  }panelObj.subject.option.push(optionObj);
                }
              } else if (partList[j].querySelectorAll("input[type='radio']").length > 0) {
                //题目类型是选择题并且是radio类型
                var optionsArr = partList[j].querySelector(".answer").querySelectorAll("label");panelObj.subject.type = "radio";for (var s = 0; s < optionsArr.length; s++) {
                  var optionObj = {};optionObj.isChecked = optionsArr[s].querySelector("input").checked;optionObj.content = optionsArr[s].querySelector("span").textContent;optionObj.nameId = optionsArr[s].querySelector("input").getAttribute("name");if (optionsArr[s].querySelector(".mustFill")) {
                    optionObj.itemRemark = optionsArr[s].querySelector(".mustFill").querySelector("input").value;
                  }panelObj.subject.option.push(optionObj);
                }
              } else if (partList[j].querySelectorAll("textarea").length > 0) {
                //题目类型是填空题并且是textarea类型
                panelObj.subject.type = "textarea";panelObj.subject.text = partList[j].querySelector("textarea").value;
              } //上传图片展示
              if (partList[j].querySelector("#fileList")) {
                var pics = partList[j].querySelector("#fileList").querySelectorAll("img");if (window.reportSrc) {
                  if (window.reportSrc.length > pics.length) {
                    window.reportSrc.splice(0, window.reportSrc.length - pics.length);
                  }
                } else {
                  window.reportSrc = [];
                }for (var k = 0; k < pics.length; k++) {
                  var imgCanvas = ysp.customHelper.convertImageToCanvas(pics[k]);var scrC = ysp.customHelper.convertCanvasToImage(imgCanvas);panelObj.subject.fileList.push(scrC);
                }
              } //上传图片并且展示
              if (partList[j].querySelector(".uploadBtn")) {
                panelObj.subject.upLoadBtn = "ok";var pics = partList[j].querySelector(".images").querySelectorAll("img");if (window.reportSrc) {
                  if (window.reportSrc.length > pics.length) {
                    window.reportSrc.splice(0, window.reportSrc.length - pics.length);
                  }
                } else {
                  window.reportSrc = [];
                }
                for (var k = 0; k < pics.length; k++) {
                  var imgCanvas = ysp.customHelper.convertImageToCanvas(pics[k]);
                  var scrC = ysp.customHelper.convertCanvasToImage(imgCanvas);panelObj.subject.picUpLoad.push(scrC);
                }
              }if (elem.querySelector("#saveQuestion")) {
                panelObj.upLoad = "ok";
              }obj.panelPart.push(panelObj);
            }
            data.push(obj);
          }
        }return data;
      }
    },
    doAction_uiControl140_qy95ei: function doAction_uiControl140_qy95ei(data, elem) {
      if (data.eventType == "checkboxClick") {
        var index = data.dataCustom.index;var i = data.dataCustom.i;var t = data.dataCustom.t;elem.querySelectorAll(".content-panel")[i].querySelectorAll(".content-panel-part_list")[t].querySelectorAll("label")[index].querySelectorAll("input")[0].click();
      } else if (data.eventType == "inputChange") {
        var index = data.dataCustom.index;var i = data.dataCustom.i;var t = data.dataCustom.t;var val = data.dataCustom.val;elem.querySelectorAll(".content-panel")[i].querySelectorAll(".content-panel-part_list")[t].querySelectorAll("label")[index].querySelectorAll("input")[1].focus();elem.querySelectorAll(".content-panel")[i].querySelectorAll(".content-panel-part_list")[t].querySelectorAll("label")[index].querySelectorAll("input")[1].value = val;
      } else if (data.eventType == "textareaChange") {
        var i = data.dataCustom.i;var t = data.dataCustom.t;var val = data.dataCustom.val;elem.querySelectorAll(".content-panel")[i].querySelectorAll(".content-panel-part_list")[t].querySelector(".fill-box").querySelector("textarea").value = val;
      } else if (data.eventType == "btnClick") {
        elem.querySelector(".buttons-tool").querySelector("button").click();
      } else if (data.eventType == "click") {
        elem.querySelector(".uploadBtn").querySelector("input").click();
      } else if (data.eventType == "delect") {
        elem.querySelectorAll('.file-panel')[data.dataCustom].querySelector('.cancel').click();
      }
    },
    getTemplate_uiControl140_qy95ei: function getTemplate_uiControl140_qy95ei() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  checkboxClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{index:target.getAttribute(\"data-index\"),i:target.dataset.i,t:target.dataset.t},\n        eventType:\"checkboxClick\"\n      })\n    }\n  }\n  inputChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{index:target.getAttribute(\"data-index\"),i:target.dataset.i,t:target.dataset.t,val:target.value},\n        eventType:\"inputChange\"\n      })\n    }\n  }\n  textareaChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{i:target.dataset.i,t:target.dataset.t,val:target.value},\n        eventType:\"textareaChange\"\n      })\n    }\n  }\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnClick\"\n      })\n    }\n  }\n  render(){\n    var _this=this;\n    var data=this.props.customData;\n    return(\n    \t<div className=\"ysp_testPaper_wrapper\">\n      \t{data.length>0? data.map((d,i)=>{\n          return(\n            <div className=\"ysp_content_panel\">\n              <div className=\"ysp_content_title\">{d.title}</div>\n              <div className=\"ysp_content_part\">\n              \t{d.panelPart.length>0? d.panelPart.map((dd,ii)=>{\n                   return(\n                      <div className=\"ysp_content_lists\">\n                        {dd.subject.type==\"checkbox\"? \n                         <div className=\"ysp_content_checkbox\">\n                          <div className=\"topic\"><span style={{color:\"red\"}}>{dd.isRequired==\"required\"? \"*\":\"\"}</span>{dd.subject.num}{dd.subject.title}</div>\n                          <div calssName=\"ysp_answer_checkbox\">\n                          \t{dd.subject.option.length>0? dd.subject.option.map((subdd,subii)=>{\n                              return(\n                                <label>\n                                  <input type=\"checkbox\" checked={subdd.isChecked} name={subdd.nameId} data-index={subii} data-i={i} data-t={ii} onClick={_this.checkboxClick.bind(_this)}/>{subdd.content}\n                                  <input value={subdd.itemRemark} type=\"text\" data-index={subii} data-i={i} data-t={ii} onChange={_this.inputChange.bind(_this)} className={subdd.itemRemark? \"ysp_input_display\":\"ysp_input_none\"}/>\n                                  <span style={{color:\"red\"}} className={subdd.itemRemark? \"ysp_star_display\":\"ysp_star_none\"}>*</span>\n                                </label>    \n                              )\n                            }) : <div>\u6682\u65E0\u6570\u636E</div>}\n                          </div>\n                          <div className=\"ysp_report_fileList\">\n                           {dd.subject.fileList.length>0? dd.subject.fileList.map((pic,amount)=>{\n                             return(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src={pic}/>\n                             )                                                    \n                          }) :  \"\"}      \n                          </div>  \n                          \n                         </div> : (dd.subject.type==\"radio\"? \n                         <div className=\"ysp_content_radio\">\n                          <div className=\"topic\"><span style={{color:\"red\"}}>{dd.isRequired==\"required\"? \"*\":\"\"}</span>{dd.subject.num}{dd.subject.title}</div>\n                          <div calssName=\"ysp_answer_radio\">\n                          \t{dd.subject.option.length>0? dd.subject.option.map((subdd,subii)=>{\n                              return(\n                                <label>\n                                  <input type=\"radio\" checked={subdd.isChecked} name={subdd.nameId} data-index={subii} data-i={i} data-t={ii} onClick={_this.checkboxClick.bind(_this)}/>{subdd.content}\n                                  <input value={subdd.itemRemark} type=\"text\" data-index={subii} data-i={i} data-t={ii} onChange={_this.inputChange.bind(_this)} className={subdd.itemRemark||subdd.itemRemark==\"\"? \"ysp_input_display\":\"ysp_input_none\"}/>\n                                  <span style={{color:\"red\"}} className={subdd.itemRemark||subdd.itemRemark==\"\"? \"ysp_star_display\":\"ysp_star_none\"}>*</span>\n                                </label>    \n                              )\n                            }) : <div>\u6682\u65E0\u6570\u636E</div>}\n                            <div className=\"ysp_report_upPic\">\n                            \t{dd.subject.upLoadBtn==\"ok\"? \n                              <div>\n                                <div className='updata-image' onClick={(e)=>{\n                                  let _this = this\n                       \t\t\t\t\t\tvar handler = _this.props.customHandler;\n                                  if(handler){\n                                    handler({\n                                      eventType:'click'\n                                    })\n                                  }\n                                }}>\u4E0A\u4F20\u7167\u7247</div>\n                              {dd.subject.picUpLoad.map((pp,aa)=>{\n                                return(\n                                  <div className='file-images'>\n                                      <div className='file-images-rows' data-index={aa}>\n                                        <img src={pp}/>\n                                        <span>{pp.content}</span><i onClick={(e)=>{\n                                           var handler = this.props.customHandler;\n                                           if(handler){\n                                             handler({\n                                               data:e.target.parentElement.dataset.index,\n                                               eventType:'delect'\n                                             })\n                                           }\n                                         }}></i>\n                                     </div>\n                                  </div>\n                               \t)\n                              })}\n                              </div>: \"\"}\n                            </div>\n                            <div className=\"ysp_report_fileList\">\n                             {dd.subject.fileList.length>0? dd.subject.fileList.map((pic,amount)=>{\n                               return(\n                                <img src={pic}/>\n                               )                                                    \n                            }) :  \"\"}      \n                          </div>  \n                          </div>\n                         </div> : \n                         <div className=\"ysp_content_textarea\">\n                          <div className=\"topic\"><span style={{color:\"red\"}}>{dd.isRequired==\"required\"? \"*\":\"\"}</span>{dd.subject.num}{dd.subject.title}</div>\n                          <div calssName=\"ysp_answer_textarea\"><textarea  data-i={i} data-t={ii} onClick={_this.textareaChange.bind(_this)}>{dd.subject.text}</textarea></div>\n                          <div className=\"ysp_report_fileList\">\n                           {dd.subject.fileList.length>0? dd.subject.fileList.map((pic,amount)=>{\n                             return(\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src={pic}/>\n                             )                                                    \n                          }) :  \"\"}      \n                          </div>  \n                         </div>)\n                        }\n                      </div>                     \n                    )              \n                 }) : <div>\u6682\u65E0\u6570\u636E</div>\n                }\n              </div>\n            </div>\n          )\n        }) : <div>\u6682\u65E0\u6570\u636E</div> }\n        <div className=\"ysp_HESreport_btns\">\n          {data[0].panelPart[0].upLoad== \"\"? <button onClick={_this.btnClick.bind(_this)}>\u8FD4\u56DE</button> : <button onClick={_this.btnClick.bind(_this)}>\u63D0\u4EA4</button>}\n        \t\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'checkboxClick',\n    value: function checkboxClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { index: target.getAttribute(\"data-index\"), i: target.dataset.i, t: target.dataset.t },\n          eventType: \"checkboxClick\"\n        });\n      }\n    }\n  }, {\n    key: 'inputChange',\n    value: function inputChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { index: target.getAttribute(\"data-index\"), i: target.dataset.i, t: target.dataset.t, val: target.value },\n          eventType: \"inputChange\"\n        });\n      }\n    }\n  }, {\n    key: 'textareaChange',\n    value: function textareaChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { i: target.dataset.i, t: target.dataset.t, val: target.value },\n          eventType: \"textareaChange\"\n        });\n      }\n    }\n  }, {\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnClick\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp_testPaper_wrapper' },\n        data.length > 0 ? data.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp_content_panel' },\n            React.createElement(\n              'div',\n              { className: 'ysp_content_title' },\n              d.title\n            ),\n            React.createElement(\n              'div',\n              { className: 'ysp_content_part' },\n              d.panelPart.length > 0 ? d.panelPart.map(function (dd, ii) {\n                return React.createElement(\n                  'div',\n                  { className: 'ysp_content_lists' },\n                  dd.subject.type == \"checkbox\" ? React.createElement(\n                    'div',\n                    { className: 'ysp_content_checkbox' },\n                    React.createElement(\n                      'div',\n                      { className: 'topic' },\n                      React.createElement(\n                        'span',\n                        { style: { color: \"red\" } },\n                        dd.isRequired == \"required\" ? \"*\" : \"\"\n                      ),\n                      dd.subject.num,\n                      dd.subject.title\n                    ),\n                    React.createElement(\n                      'div',\n                      { calssName: 'ysp_answer_checkbox' },\n                      dd.subject.option.length > 0 ? dd.subject.option.map(function (subdd, subii) {\n                        return React.createElement(\n                          'label',\n                          null,\n                          React.createElement('input', { type: 'checkbox', checked: subdd.isChecked, name: subdd.nameId, 'data-index': subii, 'data-i': i, 'data-t': ii, onClick: _this.checkboxClick.bind(_this) }),\n                          subdd.content,\n                          React.createElement('input', { value: subdd.itemRemark, type: 'text', 'data-index': subii, 'data-i': i, 'data-t': ii, onChange: _this.inputChange.bind(_this), className: subdd.itemRemark ? \"ysp_input_display\" : \"ysp_input_none\" }),\n                          React.createElement(\n                            'span',\n                            { style: { color: \"red\" }, className: subdd.itemRemark ? \"ysp_star_display\" : \"ysp_star_none\" },\n                            '*'\n                          )\n                        );\n                      }) : React.createElement(\n                        'div',\n                        null,\n                        '\\u6682\\u65E0\\u6570\\u636E'\n                      )\n                    ),\n                    React.createElement(\n                      'div',\n                      { className: 'ysp_report_fileList' },\n                      dd.subject.fileList.length > 0 ? dd.subject.fileList.map(function (pic, amount) {\n                        return React.createElement('img', { src: pic });\n                      }) : \"\"\n                    )\n                  ) : dd.subject.type == \"radio\" ? React.createElement(\n                    'div',\n                    { className: 'ysp_content_radio' },\n                    React.createElement(\n                      'div',\n                      { className: 'topic' },\n                      React.createElement(\n                        'span',\n                        { style: { color: \"red\" } },\n                        dd.isRequired == \"required\" ? \"*\" : \"\"\n                      ),\n                      dd.subject.num,\n                      dd.subject.title\n                    ),\n                    React.createElement(\n                      'div',\n                      { calssName: 'ysp_answer_radio' },\n                      dd.subject.option.length > 0 ? dd.subject.option.map(function (subdd, subii) {\n                        return React.createElement(\n                          'label',\n                          null,\n                          React.createElement('input', { type: 'radio', checked: subdd.isChecked, name: subdd.nameId, 'data-index': subii, 'data-i': i, 'data-t': ii, onClick: _this.checkboxClick.bind(_this) }),\n                          subdd.content,\n                          React.createElement('input', { value: subdd.itemRemark, type: 'text', 'data-index': subii, 'data-i': i, 'data-t': ii, onChange: _this.inputChange.bind(_this), className: subdd.itemRemark || subdd.itemRemark == \"\" ? \"ysp_input_display\" : \"ysp_input_none\" }),\n                          React.createElement(\n                            'span',\n                            { style: { color: \"red\" }, className: subdd.itemRemark || subdd.itemRemark == \"\" ? \"ysp_star_display\" : \"ysp_star_none\" },\n                            '*'\n                          )\n                        );\n                      }) : React.createElement(\n                        'div',\n                        null,\n                        '\\u6682\\u65E0\\u6570\\u636E'\n                      ),\n                      React.createElement(\n                        'div',\n                        { className: 'ysp_report_upPic' },\n                        dd.subject.upLoadBtn == \"ok\" ? React.createElement(\n                          'div',\n                          null,\n                          React.createElement(\n                            'div',\n                            { className: 'updata-image', onClick: function onClick(e) {\n                                var _this = _this3;\n                                var handler = _this.props.customHandler;\n                                if (handler) {\n                                  handler({\n                                    eventType: 'click'\n                                  });\n                                }\n                              } },\n                            '\\u4E0A\\u4F20\\u7167\\u7247'\n                          ),\n                          dd.subject.picUpLoad.map(function (pp, aa) {\n                            return React.createElement(\n                              'div',\n                              { className: 'file-images' },\n                              React.createElement(\n                                'div',\n                                { className: 'file-images-rows', 'data-index': aa },\n                                React.createElement('img', { src: pp }),\n                                React.createElement(\n                                  'span',\n                                  null,\n                                  pp.content\n                                ),\n                                React.createElement('i', { onClick: function onClick(e) {\n                                    var handler = _this3.props.customHandler;\n                                    if (handler) {\n                                      handler({\n                                        data: e.target.parentElement.dataset.index,\n                                        eventType: 'delect'\n                                      });\n                                    }\n                                  } })\n                              )\n                            );\n                          })\n                        ) : \"\"\n                      ),\n                      React.createElement(\n                        'div',\n                        { className: 'ysp_report_fileList' },\n                        dd.subject.fileList.length > 0 ? dd.subject.fileList.map(function (pic, amount) {\n                          return React.createElement('img', { src: pic });\n                        }) : \"\"\n                      )\n                    )\n                  ) : React.createElement(\n                    'div',\n                    { className: 'ysp_content_textarea' },\n                    React.createElement(\n                      'div',\n                      { className: 'topic' },\n                      React.createElement(\n                        'span',\n                        { style: { color: \"red\" } },\n                        dd.isRequired == \"required\" ? \"*\" : \"\"\n                      ),\n                      dd.subject.num,\n                      dd.subject.title\n                    ),\n                    React.createElement(\n                      'div',\n                      { calssName: 'ysp_answer_textarea' },\n                      React.createElement(\n                        'textarea',\n                        { 'data-i': i, 'data-t': ii, onClick: _this.textareaChange.bind(_this) },\n                        dd.subject.text\n                      )\n                    ),\n                    React.createElement(\n                      'div',\n                      { className: 'ysp_report_fileList' },\n                      dd.subject.fileList.length > 0 ? dd.subject.fileList.map(function (pic, amount) {\n                        return React.createElement('img', { src: pic });\n                      }) : \"\"\n                    )\n                  )\n                );\n              }) : React.createElement(\n                'div',\n                null,\n                '\\u6682\\u65E0\\u6570\\u636E'\n              )\n            )\n          );\n        }) : React.createElement(\n          'div',\n          null,\n          '\\u6682\\u65E0\\u6570\\u636E'\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp_HESreport_btns' },\n          data[0].panelPart[0].upLoad == \"\" ? React.createElement(\n            'button',\n            { onClick: _this.btnClick.bind(_this) },\n            '\\u8FD4\\u56DE'\n          ) : React.createElement(\n            'button',\n            { onClick: _this.btnClick.bind(_this) },\n            '\\u63D0\\u4EA4'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control261_cs6uCd: function (elem) {
      if (!elem) {
        return [];
      }var el = elem.querySelectorAll("span")[1].textContent;return el;
    },
    doAction_uiControl255_hCXsqn: function (data, elem) {},
    getTemplate_uiControl255_hCXsqn: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\"ysp-client-store-name\">\n        <span>\u95E8\u5E97\u540D\u79F0\uFF1A</span>\n        <span>{data}</span>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      \"div\",\n      { className: \"ysp-client-store-name\" },\n      React.createElement(\n        \"span\",\n        null,\n        \"\\u95E8\\u5E97\\u540D\\u79F0\\uFF1A\"\n      ),\n      React.createElement(\n        \"span\",\n        null,\n        data\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);