(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control26_dIWtPL: function (elem) {
      if (!elem) {
        return;
      }if (elem && elem.contentWindow && elem.contentWindow.document) {
        var data = { tabs: [], tabsNum: [], key: {}, twoIframe: { twoPartTitle: [], twoPartCont: [], pages: {} }, threeIframe: { onePartTitle: [], onePartCont: [], twoPartTitle: [], pages: {} }, btn: [] };var _tabs = elem.contentWindow.document.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');if (_tabs && _tabs.length > 0) {
          [].map.call(_tabs, function (item, i) {
            var key = item.parentElement.classList.contains('mini-tab-active');var num = item.parentElement.getAttribute("index");if (item.innerHTML != '流程监控' && item.innerHTML != '流程图  ') {
              if (key == true) {
                data.tabs.push(item.innerHTML);data.tabsNum.push(num);data.key = i;
              } else {
                data.tabs.push(item.innerHTML);data.tabsNum.push(num);
              }
            }
          });
        }
        var signOne = elem.contentWindow.document.querySelectorAll('.mini-tabs-bodys>.mini-tabs-body');if (typeof signOne != 'undefined' && signOne.length > 0) {
          var signTwo = elem.contentWindow.document.querySelectorAll('.mini-tabs-bodys>.mini-tabs-body')[1].querySelectorAll('#form1');if (typeof signTwo != 'undefined' && signTwo.length > 0) {
            var sheep = elem.contentWindow.document.querySelectorAll('#form1>table	tr td');if (sheep && sheep.length > 0) {
              [].forEach.call(sheep, function (item, i) {
                if (i % 2 == 0) {
                  if (typeof item.childNodes[1] != 'undefined' && item.childNodes[1].nodeName == 'LABEL') {
                    data.twoIframe.twoPartTitle.push(item.childNodes[1].textContent.replace(/:/ig, ""));
                  } else {
                    data.twoIframe.twoPartTitle.push(item.textContent.replace(/:/ig, ''));
                  }
                } else if (i % 2 == 1) {
                  var Lamb = item.querySelectorAll('span span');if (Lamb) {
                    var Lambs = item.querySelectorAll('span span')[0].childNodes[0];if (Lambs.nodeName == 'INPUT') {
                      data.twoIframe.twoPartCont.push(Lambs.value);
                    }
                  }
                }
              });
            }
          }
        }var btns = elem.contentWindow.document.querySelectorAll('.bottomBtnDiv');if (btns && btns.length > 0) {
          var signOne = elem.contentWindow.document.querySelectorAll('#closeButton')[0];data.btn.push(signOne.textContent);var signTwo = elem.contentWindow.document.querySelectorAll('#executeButton')[0];if (signTwo && signTwo.style.display != 'none') {
            data.btn.push(signTwo.textContent);
          }
        }return data;
      }
    }, doAction_uiControl25_h5n78M: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;
        if (d[0] == 'ysp-tabs') {
          var _tab = elem.contentWindow.document.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span');_tab[d[1]].click();
        } else if (d[0] == '1') {
          var _tab = elem.contentWindow.document.querySelectorAll('.mini-tabs-scrollCt .mini-tabs-header span')[1];_tab.click();
        }
      }
    },
    getTemplate_uiControl25_h5n78M: function () {
      var selfTemplate = 'import {Tabs} from \'ysp-custom-components\';\nimport {Component} from \'react\';\nexport\tdefault\tclass\textends\tReact.Component{\n\tconstructor(props){\n    super(props);\n    this.state={\n show:parseInt(this.props.customData.key),\n      flag:\'AW\'\n    }\n  }\n  componentDidUpdate(){\n    let _this = this;\n    _this.tab();\n  }\n   \n  componentDidMount(){\n    let _this = this;\n    var outer=this.refs.click.ownerDocument.querySelector(\'.view-wrapper\');\n    setTimeout(function(){\n      outer.scrollTop=0\n    },500);\n    var timer = setInterval(function(){\n    if(_this.refs.click){\n   _this.refs.click.querySelector(\'.ysp-Tabs-container\').querySelectorAll(\'span\')[0].click()\n      clearInterval(timer);\n      }\n    },100)\n  }\n  tab(){\n    let _this=this;\n    if(_this.state.flag =="AW"){\n      _this.setState\t({\n        flag:\'OLD\'\n      })\n    \tvar handler=this.props.customHandler;\n     if(handler) {                        \n       handler({\n         data:[1],\n         eventType:\'click\'                 \n       })\n     \t}\n    }\n  }\n  tabsClick(e){\n  \tvar handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:[e.className,parseInt(e.dataset.id)],\n         eventType:\'click\'                         \n       })\n     }\n    this.setState({\n      show: parseInt(e.dataset.id)\n    })\n  }\n  render(){\n    var data = this.props.customData || [];\n    var containers=[];   \n    switch (this.state.show) {\n    \tcase 1:\n      containers.push(\n      \t<TwoIframe\tPassedCustomData={data}\t/>\n      )\n      break;\n      case 2:\n      containers.push(\n      \t<ThreeIframe\tPassedCustomData={data}\t/>\n      )\n      break;\n      case 3:\n      containers.push(\n      \t<FourIframe\tPassedCustomData={data}\t/>\n      )\n      break;\n      case 4:\n      containers.push(\n      \t<FiveIframe\tPassedCustomData={data}\t/>\n      )\n    }\n \t\treturn(\n      <div ref=\'click\'>\n      \t<Tabs\tPassedCustomData={data}\ttabsClick={this.tabsClick.bind(this)}\tstateShow={this.state.show}\t/>\n      \t{containers}\n      </div>\n    )   \n  }\n}\nclass TwoIframe extends React.Component{\n  render(){\n    var data=this.props.PassedCustomData\t||\t[];\n    var _this=this;\n    return(\n      <div className=\'ysp-detailedInformation\'>\n      \t{\t\n          data\t&&\tdata.twoIframe.twoPartCont.length>0\t?\tdata.twoIframe.twoPartCont.map(function(item,i){\n            return(\n              <div>\n            \t\t<span>{data.twoIframe.twoPartTitle[i]}</span>\n              \t<label>{item}</label>\n            \t</div>)\n          })\t:\t<div style={{display:\'none\'}}></div>\n        }\n      </div>\n    )\n  }\n}\nclass ThreeIframe extends React.Component{\n  render(){\n    var data=this.props.PassedCustomData\t||\t[];\n    var _this=this;\n    return(\n      <div>\n        \u6682\u65E0\u6570\u636E!\n      </div>\n    )\n  }\n}\nclass FourIframe extends React.Component{\n  render(){\n    var data=this.props.PassedCustomData\t||\t[];\n    var _this=this;\n    return(\n      <div>\n        \u6682\u65E0\u6570\u636E!\n      </div>\n    )\n  }\n}\nclass FiveIframe extends React.Component{\n  render(){\n    var data=this.props.PassedCustomData\t||\t[];\n    var _this=this;\n    return(\n      <div>\n        \u6682\u65E0\u6570\u636E!\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      show: parseInt(_this2.props.customData.key),\n      flag: \'AW\'\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      var _this = this;\n      _this.tab();\n    }\n  }, {\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var outer = this.refs.click.ownerDocument.querySelector(\'.view-wrapper\');\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n      var timer = setInterval(function () {\n        if (_this.refs.click) {\n          _this.refs.click.querySelector(\'.ysp-Tabs-container\').querySelectorAll(\'span\')[0].click();\n          clearInterval(timer);\n        }\n      }, 100);\n    }\n  }, {\n    key: \'tab\',\n    value: function tab() {\n      var _this = this;\n      if (_this.state.flag == "AW") {\n        _this.setState({\n          flag: \'OLD\'\n        });\n        var handler = this.props.customHandler;\n        if (handler) {\n          handler({\n            data: [1],\n            eventType: \'click\'\n          });\n        }\n      }\n    }\n  }, {\n    key: \'tabsClick\',\n    value: function tabsClick(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: [e.className, parseInt(e.dataset.id)],\n          eventType: \'click\'\n        });\n      }\n      this.setState({\n        show: parseInt(e.dataset.id)\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData || [];\n      var containers = [];\n      switch (this.state.show) {\n        case 1:\n          containers.push(React.createElement(TwoIframe, { PassedCustomData: data }));\n          break;\n        case 2:\n          containers.push(React.createElement(ThreeIframe, { PassedCustomData: data }));\n          break;\n        case 3:\n          containers.push(React.createElement(FourIframe, { PassedCustomData: data }));\n          break;\n        case 4:\n          containers.push(React.createElement(FiveIframe, { PassedCustomData: data }));\n      }\n      return React.createElement(\n        \'div\',\n        { ref: \'click\' },\n        React.createElement(_yspCustomComponents.Tabs, { PassedCustomData: data, tabsClick: this.tabsClick.bind(this), stateShow: this.state.show }),\n        containers\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar TwoIframe = function (_React$Component2) {\n  _inherits(TwoIframe, _React$Component2);\n\n  function TwoIframe() {\n    _classCallCheck(this, TwoIframe);\n\n    return _possibleConstructorReturn(this, (TwoIframe.__proto__ || Object.getPrototypeOf(TwoIframe)).apply(this, arguments));\n  }\n\n  _createClass(TwoIframe, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-detailedInformation\' },\n        data && data.twoIframe.twoPartCont.length > 0 ? data.twoIframe.twoPartCont.map(function (item, i) {\n          return React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              null,\n              data.twoIframe.twoPartTitle[i]\n            ),\n            React.createElement(\n              \'label\',\n              null,\n              item\n            )\n          );\n        }) : React.createElement(\'div\', { style: { display: \'none\' } })\n      );\n    }\n  }]);\n\n  return TwoIframe;\n}(React.Component);\n\nvar ThreeIframe = function (_React$Component3) {\n  _inherits(ThreeIframe, _React$Component3);\n\n  function ThreeIframe() {\n    _classCallCheck(this, ThreeIframe);\n\n    return _possibleConstructorReturn(this, (ThreeIframe.__proto__ || Object.getPrototypeOf(ThreeIframe)).apply(this, arguments));\n  }\n\n  _createClass(ThreeIframe, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        \'\\u6682\\u65E0\\u6570\\u636E!\'\n      );\n    }\n  }]);\n\n  return ThreeIframe;\n}(React.Component);\n\nvar FourIframe = function (_React$Component4) {\n  _inherits(FourIframe, _React$Component4);\n\n  function FourIframe() {\n    _classCallCheck(this, FourIframe);\n\n    return _possibleConstructorReturn(this, (FourIframe.__proto__ || Object.getPrototypeOf(FourIframe)).apply(this, arguments));\n  }\n\n  _createClass(FourIframe, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        \'\\u6682\\u65E0\\u6570\\u636E!\'\n      );\n    }\n  }]);\n\n  return FourIframe;\n}(React.Component);\n\nvar FiveIframe = function (_React$Component5) {\n  _inherits(FiveIframe, _React$Component5);\n\n  function FiveIframe() {\n    _classCallCheck(this, FiveIframe);\n\n    return _possibleConstructorReturn(this, (FiveIframe.__proto__ || Object.getPrototypeOf(FiveIframe)).apply(this, arguments));\n  }\n\n  _createClass(FiveIframe, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.PassedCustomData || [];\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        \'\\u6682\\u65E0\\u6570\\u636E!\'\n      );\n    }\n  }]);\n\n  return FiveIframe;\n}(React.Component);';
    },

    getData_control5_diOo4d: function (elem) {},
    doAction_uiControl19_KXCuJA: function (data, elem) {
      if (data.eventType === 'back') {
        if (elem.ownerDocument.querySelectorAll("iframe")[1].contentDocument.querySelector("#executeButton").style.display != "none") {
          var json = { time: new Date().getTime() }; // @状态对象：记录历史记录点的额外对象，可以为空
          // @页面标题：目前所有浏览器都不支持
          // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
          var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          }
        } else {
          var json = { time: new Date().getTime() }; // @状态对象：记录历史记录点的额外对象，可以为空
          // @页面标题：目前所有浏览器都不支持
          // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
          var btn = elem.ownerDocument.querySelector('.mini-tools-close');if (btn) {
            btn.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
      }
    },
    getTemplate_uiControl19_KXCuJA: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    let _this = this;\n    let data=this.props.customData\t||\t[];\n    return (\n      <Header amStyle="primary" title="\u5DE5\u4F5C\u8BE6\u7EC6\u4FE1\u606F">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle="primary" style={{ margin: 0 }}>{data}</AMUI.Button>\t: <div style={{display:\'none\'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    );\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require("ysp-interior-components");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: "primary", title: "\\u5DE5\\u4F5C\\u8BE6\\u7EC6\\u4FE1\\u606F" },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: "primary", style: { margin: 0 }, onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: \'back\'\n                  });\n                }\n              } },\n            React.createElement("span", { className: "icon icon-left-nav" })\n          )\n        ),\n        React.createElement(\n          _yspInteriorComponents.HeaderRight,\n          null,\n          data ? React.createElement(\n            AMUI.Button,\n            { amStyle: "primary", style: { margin: 0 } },\n            data\n          ) : React.createElement("div", { style: { display: \'none\' } })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control1_cP5NmN: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var btns = elem.querySelector('.bottomBtnDiv');var signOne = elem.querySelector('#closeButton');data.push(signOne.textContent);var signTwo = elem.querySelector('#executeButton');if (signTwo && signTwo.style.display != 'none') {
          data.push(signTwo.textContent);
        }return data;
      }
    },
    doAction_uiControl2_934vis: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;if (d == 'ysp-check-btn1') {
          signTwo = elem.querySelectorAll('#executeButton')[0];signTwo.click();ysp.appMain.showLoading();
        } else if (d == 'ysp-check-btn0') {
          var signOne = elem.querySelectorAll('#closeButton')[0];if (elem.querySelector("#executeButton").style.display != "none") {
            var json = { time: new Date().getTime() }; // @状态对象：记录历史记录点的额外对象，可以为空
            // @页面标题：目前所有浏览器都不支持
            // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
            signOne.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/pendingTask.jsp?");
          } else {
            var json = { time: new Date().getTime() }; // @状态对象：记录历史记录点的额外对象，可以为空
            // @页面标题：目前所有浏览器都不支持
            // @可选的url：浏览器不会检查url是否存在，只改变url，url必须同域，不能跨域
            signOne.click();ysp.appMain.getActiveWindow().history.pushState(json, "", "/ptsoa/bps/wfclient/task/app/taskTabPage/hasBeenProcessedTask.jsp?");
          }
        }
      }
    },
    getTemplate_uiControl2_934vis: function () {
      var selfTemplate = 'export default class extends React.Component{\n  click(e){\n    var handler=this.props.customHandler;\n    var e=e.target;\n     if(handler) {                                    \n       handler({\n         data:e.className,\n         eventType:\'click\'                         \n       })\n     }\n  }\n  render(){\n    var data=this.props.customData || [];\n    return (\n      <div  className="ysp-check-btnBody" >\n      \t{data\t&& data.map((item,i)=><button className={\'ysp-check-btn\'+i} onClick={this.click.bind(this)}>{item}</button>)}\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n    value: function click(e) {\n      var handler = this.props.customHandler;\n      var e = e.target;\n      if (handler) {\n        handler({\n          data: e.className,\n          eventType: \'click\'\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData || [];\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-check-btnBody\' },\n        data && data.map(function (item, i) {\n          return React.createElement(\n            \'button\',\n            { className: \'ysp-check-btn\' + i, onClick: _this2.click.bind(_this2) },\n            item\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    },
    getData_control66_rMxRFX: function (elem) {
      //loading 加载。
      if (!elem) {
        return;
      }if (elem) {
        var loading = elem.querySelector('.mini-mask');if (loading) {
          var _loading = loading.querySelector('.mini-mask-loading');if (_loading && _loading.style.display == 'block' && _loading.textContent.trim() == '加载中...') {
            console.log('1');return [true];
          } else {
            return;
          }
        }
      }
    },
    doAction_uiControl61_15dU5A: function (data, elem) {},
    getTemplate_uiControl61_15dU5A: function () {
      var selfTemplate = 'export default class extends React.Component{\n  render(){\n    var data = this.props.customData || [];\n    if(data\t&&\tdata[0]==true){\n    \treturn(\n        <div className="ysp-loadEffect-background">\n          <div className="ysp-loadEffect">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>  \n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}\n';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data[0] == true) {\n        return React.createElement(\n          "div",\n          { className: "ysp-loadEffect-background" },\n          React.createElement(\n            "div",\n            { className: "ysp-loadEffect" },\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null),\n            React.createElement("span", null)\n          )\n        );\n      } else {\n        return React.createElement("div", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);