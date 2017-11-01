"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control175_N2PNWg: function (elem) {},
    doAction_uiControl172_rHIQIG: function (data, elem) {
      if (data.eventType == "back") {
        setTimeout(function () {
          ysp.customHelper.backHome();
        }, 50);
      }
    },
    getTemplate_uiControl172_rHIQIG: function getTemplate_uiControl172_rHIQIG() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u4FE1\u606F\u5F55\u5165\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u4FE1\u606F\u5F55\u5165\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control176_SZ1KRK: function (elem) {
      if (!elem) {
        return;
      }return { checkedTitle: ysp.customHelper.secondMenu.getCurrentMenuName(), titles: ysp.customHelper.secondMenu.getMenuNames('customerIn') };
    },
    doAction_uiControl173_uCWh6y: function (data, elem) {
      if (data.eventType === 'click') {
        var as = elem.querySelectorAll('a');var operation = data.dataCustom.value;var win = elem.ownerDocument.defaultView;var planName = ysp.customHelper.secondMenu.getPlanNameByMenuName(operation);ysp.customHelper.secondMenu.toPlanByMenuName(operation, planName);
      }
    },
    getTemplate_uiControl173_uCWh6y: function getTemplate_uiControl173_uCWh6y() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {SecondMenu} from 'ysp-custom-components';\nexport default class extends Component {\n    handlerClick(value,e) {\n      const handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n    render () {\n      let data = this.props.customData;\n      return (\n         <SecondMenu \n          data={data && data.titles}\n          className=\"ysp-vistPlan\"\n          clickItemCb={this.handlerClick.bind(this)}\n          checkedTitle={data && data.checkedTitle ? data.checkedTitle : '\u8BE5\u6743\u9650\u65E0\u6B64\u529F\u80FD'}\n          />\n      )\n    }\n}\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick(value, e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(_yspCustomComponents.SecondMenu, {\n        data: data && data.titles,\n        className: 'ysp-vistPlan',\n        clickItemCb: this.handlerClick.bind(this),\n        checkedTitle: data && data.checkedTitle ? data.checkedTitle : '\u8BE5\u6743\u9650\u65E0\u6B64\u529F\u80FD'\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control179_zxz2Sq: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var table = ysp.customHelper.getTableData(elem, ["客户名称", "客户简称", "日别PSI", "周别PSI", "预测PSI", "其他信息采集"]);
      }return table;
    },
    doAction_uiControl176_cUGqtJ: function (data, elem) {
      if (data.eventType == "click") {
        console.log(data.dataCustom);ysp.customHelper.pageId();var i = data.dataCustom.i;var val = data.dataCustom.val;elem.querySelector("tbody").querySelectorAll("tr")[i].querySelectorAll("td")[val].querySelector("a").click();
      } // {d[4] == ''? <i style={{color:'#cccccc'}}>预测PSI：</i> :<i>预测PSI：</i>}{d[4]=="未采集"? <b onClick={_this.onClick.bind(_this)} data-index="4" data-i={i} style={{color:"#e8350d"}}>{d[4]}</b> : <b  onClick={_this.onClick.bind(_this)} data-index="4" data-i={i} style={{color:"#4796ed"}}>{d[4]}</b>}
    },
    getTemplate_uiControl176_cUGqtJ: function getTemplate_uiControl176_cUGqtJ() {
      var selfTemplate = "import {Component} from 'react'\nexport default class extends Component{\n  onClick(e){\n    var handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        data:{i:target.dataset.i,val:target.getAttribute(\"data-index\")},\n        eventType:\"click\"\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData;\n    var _this = this;\n    return(\n    \t<ul className=\"ysp_newInfomationFill_list\">\n        {data&&data.content.length ? data.content.map((d,i)=>{\n          return(\n            <li>\n              <div className=\"ysp_newInfomationFill_client\">{d[1]}</div>\n              <div className=\"ysp_newInfomationFill_up\">\n                <span className=\"ysp_newInfomationFill_dayPSI\">{d[2] == \"\" ? <i style={{color:'#cccccc'}}>\u65E5\u522BPSI\uFF1A</i> : <i>\u65E5\u522BPSI\uFF1A</i>}{d[2]==\"\u672A\u91C7\u96C6\"? <b onClick={_this.onClick.bind(_this)} data-index=\"2\" data-i={i} style={{color:\"#e8350d\"}}>{d[2]}</b> : <b onClick={_this.onClick.bind(_this)} data-index=\"2\" data-i={i} style={{color:\"#4796ed\"}}>{d[2]}</b>}</span>\n                <span className=\"ysp_newInfomationFill_weekPSI\">{d[3] == \"\" ? <i style={{color:'#cccccc'}}>\u5468\u522BPSI\uFF1A</i> : <i>\u5468\u522BPSI\uFF1A</i>}{d[3]==\"\u672A\u91C7\u96C6\"? <b onClick={_this.onClick.bind(_this)} data-index=\"3\" data-i={i} style={{color:\"#e8350d\"}}>{d[3]}</b> : <b onClick={_this.onClick.bind(_this)} data-index=\"3\" data-i={i} style={{color:\"#4796ed\"}}>{d[3]}</b>}</span>\n              </div>\n              <div className=\"ysp_newInfomationFill_down\">\n                <span className=\"ysp_newInfomationFill_predictPSI\">\n                    {<i style={{color:'#cccccc'}}>\u9884\u6D4BPSI\uFF1A</i> }\n                  </span>\n                <span className=\"ysp_newInfomationFill_otherInfo\">{d[5] == \"\" ? <i style={{color:'#cccccc'}}>\u5176\u5B83\u4FE1\u606F\u91C7\u96C6\uFF1A</i> : <i>\u5176\u5B83\u4FE1\u606F\u91C7\u96C6\uFF1A</i>}{d[5] == \"\u672A\u91C7\u96C6\" ? <b onClick={_this.onClick.bind(_this)} data-index=\"5\" data-i={i} style={{color:\"#e8350d\"}}>{d[5]}</b> : <b onClick={_this.onClick.bind(_this)} data-index=\"5\" data-i={i} style={{color:\"#4796ed\"}}>{d[5]}</b>}</span>\n              </div>\n            </li>\n          )\n        }) : <li>\u6682\u65E0\u6570\u636E</li>}\n      </ul>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onClick\",\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { i: target.dataset.i, val: target.getAttribute(\"data-index\") },\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"ul\",\n        { className: \"ysp_newInfomationFill_list\" },\n        data && data.content.length ? data.content.map(function (d, i) {\n          return React.createElement(\n            \"li\",\n            null,\n            React.createElement(\n              \"div\",\n              { className: \"ysp_newInfomationFill_client\" },\n              d[1]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_newInfomationFill_up\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp_newInfomationFill_dayPSI\" },\n                d[2] == \"\" ? React.createElement(\n                  \"i\",\n                  { style: { color: '#cccccc' } },\n                  \"\\u65E5\\u522BPSI\\uFF1A\"\n                ) : React.createElement(\n                  \"i\",\n                  null,\n                  \"\\u65E5\\u522BPSI\\uFF1A\"\n                ),\n                d[2] == \"\u672A\u91C7\u96C6\" ? React.createElement(\n                  \"b\",\n                  { onClick: _this.onClick.bind(_this), \"data-index\": \"2\", \"data-i\": i, style: { color: \"#e8350d\" } },\n                  d[2]\n                ) : React.createElement(\n                  \"b\",\n                  { onClick: _this.onClick.bind(_this), \"data-index\": \"2\", \"data-i\": i, style: { color: \"#4796ed\" } },\n                  d[2]\n                )\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_newInfomationFill_weekPSI\" },\n                d[3] == \"\" ? React.createElement(\n                  \"i\",\n                  { style: { color: '#cccccc' } },\n                  \"\\u5468\\u522BPSI\\uFF1A\"\n                ) : React.createElement(\n                  \"i\",\n                  null,\n                  \"\\u5468\\u522BPSI\\uFF1A\"\n                ),\n                d[3] == \"\u672A\u91C7\u96C6\" ? React.createElement(\n                  \"b\",\n                  { onClick: _this.onClick.bind(_this), \"data-index\": \"3\", \"data-i\": i, style: { color: \"#e8350d\" } },\n                  d[3]\n                ) : React.createElement(\n                  \"b\",\n                  { onClick: _this.onClick.bind(_this), \"data-index\": \"3\", \"data-i\": i, style: { color: \"#4796ed\" } },\n                  d[3]\n                )\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_newInfomationFill_down\" },\n              React.createElement(\n                \"span\",\n                { className: \"ysp_newInfomationFill_predictPSI\" },\n                React.createElement(\n                  \"i\",\n                  { style: { color: '#cccccc' } },\n                  \"\\u9884\\u6D4BPSI\\uFF1A\"\n                )\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_newInfomationFill_otherInfo\" },\n                d[5] == \"\" ? React.createElement(\n                  \"i\",\n                  { style: { color: '#cccccc' } },\n                  \"\\u5176\\u5B83\\u4FE1\\u606F\\u91C7\\u96C6\\uFF1A\"\n                ) : React.createElement(\n                  \"i\",\n                  null,\n                  \"\\u5176\\u5B83\\u4FE1\\u606F\\u91C7\\u96C6\\uFF1A\"\n                ),\n                d[5] == \"\u672A\u91C7\u96C6\" ? React.createElement(\n                  \"b\",\n                  { onClick: _this.onClick.bind(_this), \"data-index\": \"5\", \"data-i\": i, style: { color: \"#e8350d\" } },\n                  d[5]\n                ) : React.createElement(\n                  \"b\",\n                  { onClick: _this.onClick.bind(_this), \"data-index\": \"5\", \"data-i\": i, style: { color: \"#4796ed\" } },\n                  d[5]\n                )\n              )\n            )\n          );\n        }) : React.createElement(\n          \"li\",\n          null,\n          \"\\u6682\\u65E0\\u6570\\u636E\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control180_iteyGr: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = "";var inputVal = elem.querySelector("#customerName_search").value;if (inputVal !== null) {
          data = inputVal;
        } else {
          data = "";
        }return data;
      }
    },
    doAction_uiControl177_TZ3hHT: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('#customerName_search').value = data.dataCustom;elem.querySelector('#search').click();setTimeout(function () {
          elem.querySelector('#customerName_search').value = '';
        }, 100);
      }if (data.eventType == 'ready') {
        elem.querySelector('#customerName_search').value = '';elem.querySelector('#search').click();
      }
    },
    getTemplate_uiControl177_TZ3hHT: function getTemplate_uiControl177_TZ3hHT() {
      var selfTemplate = "import {Component} from 'react';\nimport {CustomerSerch} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      buttonState : false,\n      commitState : false,\n      commitStateBtn : false,\n      width:false,\n      flag:true\n    }\n    this.reload = false;\n  }\n  componentDidUpdate(){\n    if(!this.reload){\n      this.reload = true;\n      var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType : 'ready'\n      })\n    }\n    }\n    \n  }\n  click(e){\n    let _this = this;\n    var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          data:e.target.previousSibling.value,\n          eventType:'click'\n        })\n      }\n      _this.setState({\n        buttonState : false,\n        commitState : false,\n        commitStateBtn : false,\n        width:false,\n        flag:true\n      })\n    e.target.previousSibling.value = '';\n  \t}\n  blur(e){\n     e.target.previousSibling.value = '';\n\n  }\n  render(){\n    let _this = this;\n    return(\n      <div className='fixed-serch'>\n    \t<CustomerSerch \n        placeholder='\u641C\u7D22'\n        commitStateBtn ={this.state.commitStateBtn}\n\t\t\t\tclick={_this.click.bind(_this)}\n        buttonState = {this.state.buttonState}\n        commitState = {this.state.commitState}\n        width = {this.state.width}\n        flag = {this.state.flag}\n        />\n        </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false,\n      flag: true\n    };\n    _this2.reload = false;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      if (!this.reload) {\n        this.reload = true;\n        var handler = this.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: 'ready'\n          });\n        }\n      }\n    }\n  }, {\n    key: 'click',\n    value: function click(e) {\n      var _this = this;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.previousSibling.value,\n          eventType: 'click'\n        });\n      }\n      _this.setState({\n        buttonState: false,\n        commitState: false,\n        commitStateBtn: false,\n        width: false,\n        flag: true\n      });\n      e.target.previousSibling.value = '';\n    }\n  }, {\n    key: 'blur',\n    value: function blur(e) {\n      e.target.previousSibling.value = '';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'fixed-serch' },\n        React.createElement(_yspCustomComponents.CustomerSerch, {\n          placeholder: '\\u641C\\u7D22',\n          commitStateBtn: this.state.commitStateBtn,\n          click: _this.click.bind(_this),\n          buttonState: this.state.buttonState,\n          commitState: this.state.commitState,\n          width: this.state.width,\n          flag: this.state.flag\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control181_T9ux95: function getData_control181_T9ux95(elem) {
      if (!elem) return;try {
        var data = {};var item = [];data.prev = false;data.next = false;data.numberTaotal = elem && elem.querySelector('.skip') && elem.querySelector('.skip').querySelectorAll('span')[0] && elem.querySelector('.skip').querySelectorAll('span')[0].textContent || 0;var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            switch (as[j].getAttribute('title')) {case 'Go to previous page':
                data.prev = true;break;case 'Go to next page':
                data.next = true;;break;}
          }
        }data.page = elem.ownerDocument.querySelector('#Page').textContent != '' ? true : false;
      } catch (e) {
        console.log(e.message);
      }return data;
    },
    doAction_uiControl178_kK1DGU: function doAction_uiControl178_kK1DGU(data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'change':
          change(data.dataCustom);break;}function change(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#Page').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl178_kK1DGU: function getTemplate_uiControl178_kK1DGU() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  Page\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    }\n  }\n  componentWillReceiveProps(props){\n    this.setState({\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"prev\",\n              eventType:'prev'\n            })\n          }\n             e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n        }}\n        \tpageNumber={this.props.customData && this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"next\",\n              eventType:\"next\"\n            })\n          }\n            e.target.previousSibling.querySelector('input').value = '';\n        }}\n        Change={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              data:e.target.value,\n              eventType:'change'\n            })\n          }\n        }}\n      />\n    </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(props) {\n      this.setState({\n        prevState: props.customData && props.customData.prev,\n        pageState: props.customData && props.customData.page,\n        nextState: props.customData && props.customData.next\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"prev\",\n                eventType: 'prev'\n              });\n            }\n            e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n          },\n          pageNumber: this.props.customData && this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"next\",\n                eventType: \"next\"\n              });\n            }\n            e.target.previousSibling.querySelector('input').value = '';\n          },\n          Change: function Change(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                data: e.target.value,\n                eventType: 'change'\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);