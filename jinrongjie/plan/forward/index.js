(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control146_VMHbdf: function (elem) {},
    doAction_uiControl124_5rlz54: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl124_5rlz54: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u6D41\u8F6C\u6B65\u9AA4\"}} \n       backIsShow = {true}\n        editIsShow={true}\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'save1'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "\u6D41\u8F6C\u6B65\u9AA4" },\n        backIsShow: true,\n        editIsShow: true,\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'save1\'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control151_CNE0nw: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        return [].map.call(elem.querySelectorAll('a'), function (item) {
          return item.textContent.trim();
        });
      }
    },
    doAction_uiControl125_Ti8rgT: function (data, elem) {
      if (data.eventType == 'click') {
        var _data = data.customData;debugger;switch (_data) {case 'delete':
            var _btn = elem.querySelectorAll('a')[1];_btn && _btn.click();break;case 'add':
            var _btn = elem.querySelectorAll('a')[0];_btn && _btn.click();break;}
      }
    },
    getTemplate_uiControl125_Ti8rgT: function () {
      var selfTemplate = 'export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      isShow:true\n    }\n  }\n  onClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:e.target.dataset.key\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    return(\n    \t<div className=\'ysp_freeflow_button_container\'>\n      \t<AMUI.Button\tstyle={{width:\'44%\'}}\thollow className=\'ysp_freeflow_submit\' onClick={this.onClick.bind(this)}\tdata-key=\'add\'>\n        \t{data[0]}\n        </AMUI.Button>\n        <AMUI.Button\tstyle={{width:\'44%\'}}\t className=\'ysp_freeflow_preservation\' onClick={this.onClick.bind(this)}\tdata-key=\'delete\'>\n        \t{data[1]}\n        </AMUI.Button>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.onClick = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          data: e.target.dataset.key\n        });\n      }\n    };\n\n    _this.state = {\n      isShow: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp_freeflow_button_container\' },\n        React.createElement(\n          AMUI.Button,\n          { style: { width: \'44%\' }, hollow: true, className: \'ysp_freeflow_submit\', onClick: this.onClick.bind(this), \'data-key\': \'add\' },\n          data[0]\n        ),\n        React.createElement(\n          AMUI.Button,\n          { style: { width: \'44%\' }, className: \'ysp_freeflow_preservation\', onClick: this.onClick.bind(this), \'data-key\': \'delete\' },\n          data[1]\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control152_TloxG6: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {}
    },
    doAction_uiControl130_CRhxBG: function (data, elem) {},
    getTemplate_uiControl130_CRhxBG: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7528\u6765\u9002\u914D\u57FA\u672C\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D\u7684\u9875\u9762\u5143\u7D20\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u53F3\u952E\u6253\u5F00\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7F16\u8F91\u5668\u8FDB\u884C\u7F16\u8F91\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    return React.createElement(\n      "div",\n      null,\n      "\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7528\\u6765\\u9002\\u914D\\u57FA\\u672C\\u7EC4\\u4EF6\\u65E0\\u6CD5\\u9002\\u914D\\u7684\\u9875\\u9762\\u5143\\u7D20\\uFF0C\\u60A8\\u53EF\\u4EE5\\u901A\\u8FC7\\u53F3\\u952E\\u6253\\u5F00\\u8BE5\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6\\u7F16\\u8F91\\u5668\\u8FDB\\u884C\\u7F16\\u8F91"\n    );\n  }\n});';
    }
  });
})(window, ysp);