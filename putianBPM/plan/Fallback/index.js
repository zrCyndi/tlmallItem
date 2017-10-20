(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control13_lpUVsd: function (elem) {
      if (elem) {
        var data = [];var signOne = elem.contentWindow.document.querySelectorAll('.form-label')[0];var signTwo = elem.contentWindow.document.querySelector('.mini-buttonedit-input');var signThree = elem.contentWindow.document.querySelectorAll('.form-label')[1];var signFour = elem.contentWindow.document.querySelectorAll('.mini-textbox-input')[0];console.log(signOne);data.push(signOne.innerHTML);data.push(signTwo.value);data.push(signThree.innerHTML);data.push(signFour.value);return data;
      }return '';
    },
    doAction_uiControl14_ON7Swu: function (data, elem) {
      if (data.eventType == 'change') {
        var d = data.dataCustom;var signFour = elem.contentWindow.document.querySelectorAll('.mini-textbox-input')[0];signFour.value = d;
      } else if (data.eventType == 'click') {
        var d = data.dataCustom;if (d == 'btn ysp-sure') {
          var signOne = elem.contentWindow.document.querySelectorAll('#save')[0];console.log(signOne);signOne.click();var url = 'http://192.168.0.189:8888/ptsoa/skins/default/index.jsp#';elem.ownerDocument.location.href = url;
        } else if (d == 'btn ysp-miss') {
          var url = 'http://192.168.0.189:8888/ptsoa/skins/default/index.jsp#';elem.ownerDocument.location.href = url;
        }
      }
    },
    getTemplate_uiControl14_ON7Swu: function () {
      var selfTemplate = 'export default class extends React.Component{\n  change(e){\n    var handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.value,\n         eventType:\'change\'                         \n       })\n     }\n  }\n  onClick(e){\n    var handler=this.props.customHandler\t;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render(){\n    var\tdata=this.props.customData\t|| [];\n    if(data && data.length>0){\n   \treturn(\n      <div className=\'ysp-fallbackStrategy\'>\n      \t<div className="ysp-fallbackStrategy-cont">\n          <div style={{textAlign:\'center\',width:\'100%\'}}>\u56DE\u9000\u7B56\u7565</div>\n        \t<div>\n          \t<span>{data[0]}</span>\n            <label>{data[1]}</label>\n          </div>\n          <div>\n          \t<span>{data[2]}</span>\n            <textarea defaultValue={data[3]} onChange={this.change.bind(this)}></textarea>\n          </div>\n          <div>\n          \t<AMUI.Button className="ysp-sure" onClick={this.onClick.bind(this)}>\u786E\u5B9A</AMUI.Button>\n            <AMUI.Button className="ysp-miss" onClick={this.onClick.bind(this)}>\u53D6\u6D88</AMUI.Button>\n          </div>\n        </div>\n      </div>\n    ) }else {\n      return(<div style={{display:\'none\'}}></div>)\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'change\',\n    value: function change(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.value,\n          eventType: \'change\'\n        });\n      }\n    }\n  }, {\n    key: \'onClick\',\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data.length > 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-fallbackStrategy\' },\n          React.createElement(\n            \'div\',\n            { className: \'ysp-fallbackStrategy-cont\' },\n            React.createElement(\n              \'div\',\n              { style: { textAlign: \'center\', width: \'100%\' } },\n              \'\\u56DE\\u9000\\u7B56\\u7565\'\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                data[0]\n              ),\n              React.createElement(\n                \'label\',\n                null,\n                data[1]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                data[2]\n              ),\n              React.createElement(\'textarea\', { defaultValue: data[3], onChange: this.change.bind(this) })\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                AMUI.Button,\n                { className: \'ysp-sure\', onClick: this.onClick.bind(this) },\n                \'\\u786E\\u5B9A\'\n              ),\n              React.createElement(\n                AMUI.Button,\n                { className: \'ysp-miss\', onClick: this.onClick.bind(this) },\n                \'\\u53D6\\u6D88\'\n              )\n            )\n          )\n        );\n      } else {\n        return React.createElement(\'div\', { style: { display: \'none\' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);