(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control17: function (elem) {},
    doAction_uiControl18: function (data, elem) {
      if (data.eventType === 'back') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl18: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u7535\u5B50\u94B1\u5305\",rightText:\"\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u7535\u5B50\u94B1\u5305\", rightText: \"\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control33: function (elem) {
      return ysp.customHelper.getTemplateData(elem, ['归属机构', '总额', '冻结金额', '可用余额']);;
    },
    doAction_uiControl30: function (data, elem) {},
    getTemplate_uiControl30: function () {
      var selfTemplate = "export default class extends React.Component {\n  renderList(){\n  \tvar data = this.props.data.customData;\n    if(data.length == 0){\n      localStorage.setItem(\"walletItem\",0);\n    \treturn (<div>\u65E0\u6570\u636E</div>);\n    }\n    localStorage.setItem(\"walletItem\",1);\n    return data.map((item,index) => {\n    \treturn (\n      \t<li>\n          <div className='itemLeft'>\n            <div className='itemLeftTop'><h3>{item[0]}</h3></div>\n            <div className='itemLeftBottom'>\n              <div>\n              \t<span>\u603B\u989D\uFF08\u5143\uFF09</span>\n            \t\t<i>{item[1]}</i>\n              </div>\n              <div>\n              \t<span>\u51BB\u7ED3\u91D1\u989D\uFF08\u5143\uFF09</span>\n            \t\t<i>{item[2]}</i>\n              </div>\n            </div>\n          </div>\n          <div className='itemRight'>\n            <h3>{item[3]}</h3>\n            <h4>\u53EF\u7528\u91D1\u989D\uFF08\u5143\uFF09</h4>\n          </div>\n        </li>\n      )\n    })\n  }\n\trender(){\n  \treturn (\n    \t<div className='ysp-electron-wallet'>\n        <ul>{this.renderList()}</ul>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"renderList\",\n    value: function renderList() {\n      var data = this.props.data.customData;\n      if (data.length == 0) {\n        localStorage.setItem(\"walletItem\", 0);\n        return React.createElement(\n          \"div\",\n          null,\n          \"\\u65E0\\u6570\\u636E\"\n        );\n      }\n      localStorage.setItem(\"walletItem\", 1);\n      return data.map(function (item, index) {\n        return React.createElement(\n          \"li\",\n          null,\n          React.createElement(\n            \"div\",\n            { className: \"itemLeft\" },\n            React.createElement(\n              \"div\",\n              { className: \"itemLeftTop\" },\n              React.createElement(\n                \"h3\",\n                null,\n                item[0]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"itemLeftBottom\" },\n              React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u603B\\u989D\\uFF08\\u5143\\uFF09\"\n                ),\n                React.createElement(\n                  \"i\",\n                  null,\n                  item[1]\n                )\n              ),\n              React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u51BB\\u7ED3\\u91D1\\u989D\\uFF08\\u5143\\uFF09\"\n                ),\n                React.createElement(\n                  \"i\",\n                  null,\n                  item[2]\n                )\n              )\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"itemRight\" },\n            React.createElement(\n              \"h3\",\n              null,\n              item[3]\n            ),\n            React.createElement(\n              \"h4\",\n              null,\n              \"\\u53EF\\u7528\\u91D1\\u989D\\uFF08\\u5143\\uFF09\"\n            )\n          )\n        );\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-electron-wallet\" },\n        React.createElement(\n          \"ul\",\n          null,\n          this.renderList()\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control197_ukuEPU: function (elem) {},
    doAction_uiControl195_mWI52g: function (data, elem) {
      if (data.eventType == 'prevpage') {
        var btn = elem.ownerDocument.querySelector('span[title="前一记录集"]') || elem.ownerDocument.querySelector('li[data-caption^="上几项记录"]');btn.focus();btn.click();
      }if (data.eventType == 'nextpage') {
        var btn = elem.ownerDocument.querySelector('span[title="下一记录集"]') || elem.ownerDocument.querySelector('li[data-caption^="下几项记录"]');btn.focus();btn.click();
      }
    },
    getTemplate_uiControl195_mWI52g: function () {
      var selfTemplate = "import { Pagination } from 'ysp-custom-components';\nexport default class extends React.Component {\n  render(){\n    var item = localStorage.getItem(\"walletItem\");\n    if(item == 0){\n    \treturn (<div></div>);\n    }else{\n    \treturn (\n      <div>\n        <Pagination \n          prev={()=>{\n            const handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType: 'prevpage'\n              });\n            }\n          }}\n          next={()=>{\n            const handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType: 'nextpage'\n              })\n            }\n          }}\n          />\n      </div>\n    \t)\n    }\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var item = localStorage.getItem(\"walletItem\");\n      if (item == 0) {\n        return React.createElement('div', null);\n      } else {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(_yspCustomComponents.Pagination, {\n            prev: function prev() {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'prevpage'\n                });\n              }\n            },\n            next: function next() {\n              var handler = _this2.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'nextpage'\n                });\n              }\n            }\n          })\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);