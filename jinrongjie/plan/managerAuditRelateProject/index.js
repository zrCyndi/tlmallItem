(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control14_u7wiCb: function (elem) {},
    doAction_uiControl34_ngaVCa: function (data, elem) {},
    getTemplate_uiControl34_ngaVCa: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { CommonHeader } from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(){\n    super()\n  }\n  \n  render(){\n    return(\n    \t<div className=\"ysp-relate-project-wrapper\">\n        <div className=\"ysp-relate-project-left-content\">\n          <div>\n            <span>\u8BF7\u6C42\u6807\u9898</span>\n            <input type=\"text\" />\n          </div>\n          <div>\n            <span>\u9879\u76EE\u7C7B\u578B</span>\n            <input type=\"text\" />\n          </div>\n          <div>\n            <span>\u7ECF\u7406</span>\n            <input type=\"text\" />\n          </div>\n        </div>\n        <div className=\"ysp-relate-project-right-content\">\n          <div>\n            <span>\u5DE5\u4F5C\u72B6\u6001</span>\n            <input type=\"text\" />\n          </div>\n          <div>\n            <span>\u5DE5\u4F5C\u7C7B\u578B</span>\n            <input type=\"text\" />\n          </div>\n          <span className=\"ysp-relate-project-searchbutton\">\u641C\u7D22</span>\n        </div>\n      </div>\n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-relate-project-wrapper' },\n        React.createElement(\n          'div',\n          { className: 'ysp-relate-project-left-content' },\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u8BF7\\u6C42\\u6807\\u9898'\n            ),\n            React.createElement('input', { type: 'text' })\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u9879\\u76EE\\u7C7B\\u578B'\n            ),\n            React.createElement('input', { type: 'text' })\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u7ECF\\u7406'\n            ),\n            React.createElement('input', { type: 'text' })\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-relate-project-right-content' },\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u5DE5\\u4F5C\\u72B6\\u6001'\n            ),\n            React.createElement('input', { type: 'text' })\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u5DE5\\u4F5C\\u7C7B\\u578B'\n            ),\n            React.createElement('input', { type: 'text' })\n          ),\n          React.createElement(\n            'span',\n            { className: 'ysp-relate-project-searchbutton' },\n            '\\u641C\\u7D22'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control40_6aRiCC: function (elem) {},
    doAction_uiControl38_9shg21: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl38_9shg21: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u9879\u76EE\"}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u9879\u76EE\" },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control41_Te1ymf: function (elem) {
      if (!elem) {
        return;
      }var data = {};var titles = ['名字', '项目类型', '工作类型', '经理', '项目状态'];var content = [];data.titles = titles;data.content = content;return data;
    },
    doAction_uiControl39_OV7N7C: function (data, elem) {},
    getTemplate_uiControl39_OV7N7C: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    var _this = this;\n    var data = this.props.customData||{};\n    var titles = data.titles||[];\n    var content = data.content||[];\n    console.log(data);\n    return (\n      <div className=\"ysp-relate-project-tabledata\">\n      \t<table>\n        \t<thead>\n          \t{titles.map((item,index)=>{\n              return(<th>{item}</th>)\n            })}\n          </thead>\n          \t{content instanceof Array&&content.length>0?content.map((trItem, trIndex)=>{\n            \treturn(\n              \t<tr>\n                \t{trItem instanceof Array&&trItem.length>0?trItem.map((tdItem, tdIndex)=>{\n                    return(\n                    \t<td>{tdItem}</td>\n                    )\n                  }):'\u65E0\u6570\u636E'}\n                </tr>\n              );\n          \t}):'\u65E0\u6570\u636E'}\n        </table>\n      </div>\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || {};\n      var titles = data.titles || [];\n      var content = data.content || [];\n      console.log(data);\n      return React.createElement(\n        'div',\n        { className: 'ysp-relate-project-tabledata' },\n        React.createElement(\n          'table',\n          null,\n          React.createElement(\n            'thead',\n            null,\n            titles.map(function (item, index) {\n              return React.createElement(\n                'th',\n                null,\n                item\n              );\n            })\n          ),\n          content instanceof Array && content.length > 0 ? content.map(function (trItem, trIndex) {\n            return React.createElement(\n              'tr',\n              null,\n              trItem instanceof Array && trItem.length > 0 ? trItem.map(function (tdItem, tdIndex) {\n                return React.createElement(\n                  'td',\n                  null,\n                  tdItem\n                );\n              }) : '\u65E0\u6570\u636E'\n            );\n          }) : '\u65E0\u6570\u636E'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);