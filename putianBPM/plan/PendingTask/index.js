(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control22_7UfmP8: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        // var data=elem.ownerDocument.defaultView.frameElementownerDocument.parentNode.querySelectorAll(".mini-tab-active")[1].querySelector("span").textContent
        var data = "";return data;
      }
    },
    doAction_uiControl21_n99o77: function (data, elem) {
      if (data.eventType === 'back') {
        var win = elem.ownerDocument.defaultView;var parentWin = win.parent;parentWin && parentWin.location.reload();
      }
    },
    getTemplate_uiControl21_n99o77: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    let _this = this;\n    return (\n      <Header amStyle=\"primary\" title=\"\u5F85\u5904\u7406\u7684\u4EFB\u52A1\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}>\u6309\u94AE</AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \"primary\", title: \"\\u5F85\\u5904\\u7406\\u7684\\u4EFB\\u52A1\" },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \"primary\", style: { margin: 0 }, onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n              } },\n            React.createElement(\"span\", { className: \"icon icon-left-nav\" })\n          )\n        ),\n        React.createElement(\n          _yspInteriorComponents.HeaderRight,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \"primary\", style: { margin: 0 } },\n            \"\\u6309\\u94AE\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control27_T3GAMp: function (elem) {
      if (elem) {
        var data = [];$(elem).children('tr').each(function (idx, item) {
          var child = { content: [] };var str = $(item).children('td').eq(0).text();var s = str.replace(/：/g, "");child.title = s;$(item).children('td').eq(1).find('div table tbody tr td div').eq(0).children('div').each(function (i, v) {
            var children = { cont: [] };children.title = v.textContent;children.cont = $(v).children('input')[0].checked;child.content.push(children);
          });data.push(child);
        });return data;
      }return '';
    },
    doAction_uiControl24_ELar9V: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;let q = $(elem).children('tr');q.eq(d[0]).children('td').eq(1).find('div table tbody tr td div').eq(0).children('div').eq(d[1]).find('input').click();
      } else if (data.eventType == 'blur') {
        $(elem).children('tr').children('td').eq(2).find('a').click();
      }
    },
    getTemplate_uiControl24_ELar9V: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:true\n    }\n  }\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    return(\n    \t<div className=\"ysp-ProcessedTask-main\">\n      \t<b onClick={()=>{this.setState({show:!this.state.show})}}>\n          \u67E5\u8BE2\n          <span className=''></span>\n        </b>\n        <Inquiry stateShow={this.state.show} click={(i,idx)=>{customHandler({data:[i,idx],eventType:'click'})}} blur={()=>{customHandler({data:'1',eventType:'blur'})}}  \tData={customData}/>\n      </div>\n    )\n  }\n}\nclass Inquiry extends React.Component{\n  \n  render(){\n    var data=this.props.Data\t||\t[];\n    return(\n        <div className=\"ysp-ProcessedTask-check-main\" style={{ display:this.props.stateShow\t?\t'none':'block'}}>\n          { data.map((item,i)=>{\n            return(\n            <div>\n              <div className='ysp-ProcessedTask-check-main-title'>\n                {item.title}\n              </div>\n              <AMUI.List className='ysp-ProcessedTask-check-main-input'>\n              \t{item.content.map((val,idx)=><AMUI.List.Item nested=\"checkbox\" >\n                <AMUI.Field label={val.title} type=\"checkbox\" name=\"checkbox-list-1\" onClick={()=>{this.props.click(i,idx)}} key={idx} checked={val.cont}/>\n              \t</AMUI.List.Item>)}\n              </AMUI.List>\n            </div>  \n            )   \n          })}\n        \t<div className='ysp-ProcessedTask-check-btnMain'>\n        \t\t<AMUI.Button onClick={()=>{this.props.blur()}} amStyle='primary' className='ysp-ProcessedTask-check-btn'>\u67E5\u8BE2</AMUI.Button>\n        \t</div>\n        </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      show: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      return React.createElement(\n        'div',\n        { className: 'ysp-ProcessedTask-main' },\n        React.createElement(\n          'b',\n          { onClick: function onClick() {\n              _this2.setState({ show: !_this2.state.show });\n            } },\n          '\\u67E5\\u8BE2',\n          React.createElement('span', { className: '' })\n        ),\n        React.createElement(Inquiry, { stateShow: this.state.show, click: function click(i, idx) {\n            customHandler({ data: [i, idx], eventType: 'click' });\n          }, blur: function blur() {\n            customHandler({ data: '1', eventType: 'blur' });\n          }, Data: customData })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar Inquiry = function (_React$Component2) {\n  _inherits(Inquiry, _React$Component2);\n\n  function Inquiry() {\n    _classCallCheck(this, Inquiry);\n\n    return _possibleConstructorReturn(this, (Inquiry.__proto__ || Object.getPrototypeOf(Inquiry)).apply(this, arguments));\n  }\n\n  _createClass(Inquiry, [{\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      var data = this.props.Data || [];\n      return React.createElement(\n        'div',\n        { className: 'ysp-ProcessedTask-check-main', style: { display: this.props.stateShow ? 'none' : 'block' } },\n        data.map(function (item, i) {\n          return React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-ProcessedTask-check-main-title' },\n              item.title\n            ),\n            React.createElement(\n              AMUI.List,\n              { className: 'ysp-ProcessedTask-check-main-input' },\n              item.content.map(function (val, idx) {\n                return React.createElement(\n                  AMUI.List.Item,\n                  { nested: 'checkbox' },\n                  React.createElement(AMUI.Field, { label: val.title, type: 'checkbox', name: 'checkbox-list-1', onClick: function onClick() {\n                      _this4.props.click(i, idx);\n                    }, key: idx, checked: val.cont })\n                );\n              })\n            )\n          );\n        }),\n        React.createElement(\n          'div',\n          { className: 'ysp-ProcessedTask-check-btnMain' },\n          React.createElement(\n            AMUI.Button,\n            { onClick: function onClick() {\n                _this4.props.blur();\n              }, amStyle: 'primary', className: 'ysp-ProcessedTask-check-btn' },\n            '\\u67E5\\u8BE2'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Inquiry;\n}(React.Component);";
    },
    getData_control28_SZVJPk: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        //获取tr的数组
        var data = [];var trArr = elem.querySelector("tbody").querySelectorAll("tr");for (var i = 0; i < trArr.length; i++) {
          var tdArr = trArr[i].querySelectorAll("td");var arry = [];for (var j = 0; j < tdArr.length; j++) {
            arry.push(tdArr[j].textContent);
          }data.push(arry);arry.shift();arry.shift();
        }data.shift();data.shift();return data;
      }
    },
    doAction_uiControl26_6hpfrU: function (data, elem) {
      var index = parseInt(data.dataCustom.index) + 2;var i = data.dataCustom.i;if (i == 0) {
        // elem.querySelector("tbody").querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelectorAll("a")[i].click();
        // setTimeout(function () {
        //   if (elem.ownerDocument.querySelector(".mini-window")) {
        //     var url = elem.ownerDocument.querySelector(".mini-window").querySelectorAll("iframe")[0].src;
        //     console.log(url);
        //     var newUrl = ysp.appMain.getActiveWindow();
        //     newUrl.location.href = url;
        //     clearTimeout();
        //   }
        // }, 100);
        elem.querySelector("tbody").querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelectorAll("a")[i].click(); // setTimeout(function () {
        //   if (elem.ownerDocument.querySelector(".mini-window")) {
        //     var url = elem.ownerDocument.querySelector(".mini-window").querySelectorAll("iframe")[0].src;
        //     console.log(url);
        //     var newUrl = ysp.appMain.getActiveWindow();
        //     newUrl.location.href = url;
        //     clearTimeout();
        //   }
        // }, 100);
      } else {
        elem.querySelector("tbody").querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelectorAll("a")[i].click();
      } // if (data.eventType == "clickBtn") {
      //   var index = parseInt(data.dataCustom.index) + 2;
      //   var i = data.dataCustom.i;
      //   elem.querySelector("tbody").querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelectorAll("a")[i].click();
      // }
    },
    getTemplate_uiControl26_6hpfrU: function () {
      var selfTemplate = "import {Component} from 'react'\nexport default class extends React.Component{\n  upDown(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(target.className==\"ysp_bottom_down\"){\n      target.className=\"ysp_bottom_up\";\n      target.nextSibling.style.display=\"block\"\n    }else{\n      target.className=\"ysp_bottom_down\";\n      target.nextSibling.style.display=\"none\"\n    }\n  }\n  clickBtn(e){\n    var target=e.target;\n  \tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{index:target.getAttribute(\"data-index\"),i:target.dataset.i},\n        eventType:\"clickBtn\"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    var _this=this;\n    return(\n    \t<div className=\"ysp_waitingTask_list\">\n        {data.length>0? \n          data.map((d,i)=>{\n          \treturn(\n            \t<div className=\"ysp_list_item\">\n              \t<div className=\"ysp_item_top\">\n                  <i></i>\n                  <span className=\"ysp_top_title\">{d[0]}</span>\n                  <span className=\"ysp_top_status\">{d[2]}</span>\n                </div>\n                <div className=\"ysp_item_bottom\">\n                \t<div className=\"ysp_bottom_left\">\n                    <div>\u5DE5\u4F5C\u9879\u76EE\u540D\u79F0\uFF1A{d[1]}</div>\n                    <div>\u542F\u52A8\u65F6\u95F4\uFF1A{d[3]}</div>\n                  </div>\n                  <i className=\"ysp_bottom_down\" onClick={_this.upDown.bind(_this)}></i>\n                  <div className=\"ysp_btn_panel\" style={{display:\"none\"}}>\n                  \t<button className=\"ysp_btn_do\" onClick={_this.clickBtn.bind(_this)} data-index={i} data-i=\"0\">\u67E5\u770B\u8868\u5355</button>\n                    <button className=\"ysp_btn_check\" onClick={_this.clickBtn.bind(_this)} data-index={i} data-i=\"1\">\u67E5\u770B</button>\n                  </div>\n                </div>\n              </div>\n            )\n        \t}) : <div style={{display:'none'}}>\u6CA1\u6709\u8FD4\u56DE\u6570\u636E</div>\n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"upDown\",\n    value: function upDown(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (target.className == \"ysp_bottom_down\") {\n        target.className = \"ysp_bottom_up\";\n        target.nextSibling.style.display = \"block\";\n      } else {\n        target.className = \"ysp_bottom_down\";\n        target.nextSibling.style.display = \"none\";\n      }\n    }\n  }, {\n    key: \"clickBtn\",\n    value: function clickBtn(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { index: target.getAttribute(\"data-index\"), i: target.dataset.i },\n          eventType: \"clickBtn\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_waitingTask_list\" },\n        data.length > 0 ? data.map(function (d, i) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp_list_item\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_item_top\" },\n              React.createElement(\"i\", null),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_top_title\" },\n                d[0]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_top_status\" },\n                d[2]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_item_bottom\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp_bottom_left\" },\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u5DE5\\u4F5C\\u9879\\u76EE\\u540D\\u79F0\\uFF1A\",\n                  d[1]\n                ),\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u542F\\u52A8\\u65F6\\u95F4\\uFF1A\",\n                  d[3]\n                )\n              ),\n              React.createElement(\"i\", { className: \"ysp_bottom_down\", onClick: _this.upDown.bind(_this) }),\n              React.createElement(\n                \"div\",\n                { className: \"ysp_btn_panel\", style: { display: \"none\" } },\n                React.createElement(\n                  \"button\",\n                  { className: \"ysp_btn_do\", onClick: _this.clickBtn.bind(_this), \"data-index\": i, \"data-i\": \"0\" },\n                  \"\\u67E5\\u770B\\u8868\\u5355\"\n                ),\n                React.createElement(\n                  \"button\",\n                  { className: \"ysp_btn_check\", onClick: _this.clickBtn.bind(_this), \"data-index\": i, \"data-i\": \"1\" },\n                  \"\\u67E5\\u770B\"\n                )\n              )\n            )\n          );\n        }) : React.createElement(\n          \"div\",\n          { style: { display: 'none' } },\n          \"\\u6CA1\\u6709\\u8FD4\\u56DE\\u6570\\u636E\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control33_E8vlo8: function (elem) {
      if (elem) {
        var data = {};var _PagesMessage = elem.querySelector('.mini-pager-right').textContent;data.PagesMessage = _PagesMessage;var _PageNumber = elem.querySelector('.mini-pager-num').value;data.PageNumber = _PageNumber;var _PageCount = elem.querySelector('.mini-pager-pages').textContent;data.PageCount = _PageCount;return data;
      }return '';
    },
    doAction_uiControl28_EQwAIV: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;switch (d) {case 'ysp-PagesMessage-leftBM-icon':
            var btnId = elem.querySelector('#mini-13');console.log(btnId);btnId.click();break;case 'ysp-PagesMessage-left-icon':
            var btnId = elem.querySelector('#mini-14');btnId.click();break;case 'ysp-PagesMessage-right-icon':
            var btnId = elem.querySelector('#mini-15');btnId.click();break;case 'ysp-PagesMessage-rightBM-icon':
            var btnId = elem.querySelector('#mini-16');btnId.click();break;}
      }
    },
    getTemplate_uiControl28_EQwAIV: function () {
      var selfTemplate = "import {Page} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport default class\textends Component{\n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    var _this=this;\n    if(customData){\n      return(\n        <div>\n          <Page\tPassedCustomData={customData}\tpagesClick={_this.pagesClick.bind(_this)}/>\t\t     \n        </div>\n      )\n    }else{\n      return(\n        <div style={{display:'none'}}></div>\n      )\n    } \n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'pagesClick',\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      var _this = this;\n      if (customData) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(_yspCustomComponents.Page, { PassedCustomData: customData, pagesClick: _this.pagesClick.bind(_this) })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);