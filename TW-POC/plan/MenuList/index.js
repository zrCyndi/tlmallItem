(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control9_T1yJLX: function (elem) {},
    doAction_uiControl9_l3lMyz: function (data, elem) {
      if (data.eventType == 'click') {
        elem.ownerDocument.defaultView.open('http://192.168.220.27/WMS/Inventory/InventoryQuery.aspx?FunctionID=5010', '库存查询');
      }
    },
    getTemplate_uiControl9_l3lMyz: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div onClick={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}>\n        \u5E93\u5B58\u67E5\u8BE2\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      \'div\',\n      { onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        } },\n      \'\\u5E93\\u5B58\\u67E5\\u8BE2\'\n    );\n  }\n});';
    },
    getData_control19_2Z2TvW: function (elem) {},
    doAction_uiControl19_x5dIMr: function (data, elem) {
      if (data.eventType == 'click') {
        debugger;elem.querySelector('#5000库存管理_td').click();
      }
    },
    getTemplate_uiControl19_x5dIMr: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  constructor(){\n    super();\n  }\n  componentDidMount(){\n    var _this = this;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  }\n  render(){\n    return (\n    \t<div></div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      return React.createElement(\'div\', null);\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);