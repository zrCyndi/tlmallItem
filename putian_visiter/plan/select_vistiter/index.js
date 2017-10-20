(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control3: function (elem) {},
    doAction_uiControl5: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl5: function () {
      var selfTemplate = "var BackBtn = require('ysp-custom-components').BackBtn;\n\nmodule.exports = React.createClass({\n  render: function() {\n    return <BackBtn handler={this.props.customHandler} />;\n  }\n});";
      return "'use strict';\n\nvar BackBtn = require('ysp-custom-components').BackBtn;\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(BackBtn, { handler: this.props.customHandler });\n  }\n});";
    },
    getData_control4: function (elem) {
      var lis = elem.querySelectorAll('li');var data = [];for (var i = 0; i < lis.length; i++) {
        data.push(lis[i].textContent);
      }return data;
    },
    doAction_uiControl7: function (data, elem) {
      var event = data.eventType;var index = +data.dataCustom;var lis = elem.querySelectorAll('li');var li = lis[index];li.click();
    },
    getTemplate_uiControl7: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  handleClick: function(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while(true) {\n      if(target.tagName.toLowerCase() == 'li') {\n         break;\n      }else {\n        target = target.parentElement;\n      }\n    }\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  render: function(){\n    var data = this.props.data.customData;\n    var me = this;\n    var lis = data.map(function(d,i){\n      if(d.indexOf('\u7F8E\u901A\u4E91\u52A8')>0) {\n        return(\n          <li data-id={i} onClick={me.handleClick} className=\"mcc-li\">\n            <p className=\"icon-ysp\"></p>\n            <p className=\"mcc-title\">\u7F8E\u901A\u4E91\u52A8\u79D1\u6280\u6709\u9650\u516C\u53F8</p>\n            <p className=\"mcc-addr\">\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u6D77\u6DC0\u5927\u885727\u53F7\u5929\u4F7F\u5927\u53A6</p>\n            <span className=\"mcc-count\">2</span>\n            <span className=\"mcc-date\">2016/09/02</span>\n           </li>\n        )\n      }else if(d.indexOf('\u4E09\u5757\u5728\u7EBF')>0) {\n        return(\n          <li data-id={i} onClick={me.handleClick} className=\"mcc-li\">\n            <p className=\"icon-meituan\"></p>\n            <p className=\"mcc-title\">\u4E09\u5757\u5728\u7EBF\u79D1\u6280\u6709\u9650\u516C\u53F8</p>\n            <p className=\"mcc-addr\">\u5317\u4EAC\u5E02\u671D\u9633\u533A\u671B\u4EAC\u4E1C\u8DEF6\u53F7</p>\n            <span className=\"mcc-count\">3</span>\n            <span className=\"mcc-date\">2016/09/02</span>\n          </li>\n        )\n      }else {\n        return(\n          <li data-id={i} onClick={me.handleClick} className=\"mcc-li\">\n            <p className=\"icon-guangqi\"></p>\n            <p className=\"mcc-title\">\u5E7F\u5DDE\u6C7D\u8F66\u96C6\u56E2\u80A1\u4EFD\u6709\u9650\u516C\u53F8</p>\n            <p className=\"mcc-addr\">\u73E0\u6C5F\u65B0\u57CE\u5174\u56FD\u8DEF23\u53F7\u5E7F\u6C7D\u4E2D\u5FC3</p>\n            <span className=\"mcc-count\">1</span>\n            <span className=\"mcc-date\">2016/09/02</span>\n          </li>\n        )\n      }\n    })\n    return (\n      <ul>\n        {lis}\n      </ul>\n    )\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handleClick: function handleClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    while (true) {\n      if (target.tagName.toLowerCase() == 'li') {\n        break;\n      } else {\n        target = target.parentElement;\n      }\n    }\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var me = this;\n    var lis = data.map(function (d, i) {\n      if (d.indexOf('\u7F8E\u901A\u4E91\u52A8') > 0) {\n        return React.createElement(\n          'li',\n          { 'data-id': i, onClick: me.handleClick, className: 'mcc-li' },\n          React.createElement('p', { className: 'icon-ysp' }),\n          React.createElement(\n            'p',\n            { className: 'mcc-title' },\n            '\\u7F8E\\u901A\\u4E91\\u52A8\\u79D1\\u6280\\u6709\\u9650\\u516C\\u53F8'\n          ),\n          React.createElement(\n            'p',\n            { className: 'mcc-addr' },\n            '\\u5317\\u4EAC\\u5E02\\u6D77\\u6DC0\\u533A\\u6D77\\u6DC0\\u5927\\u885727\\u53F7\\u5929\\u4F7F\\u5927\\u53A6'\n          ),\n          React.createElement(\n            'span',\n            { className: 'mcc-count' },\n            '2'\n          ),\n          React.createElement(\n            'span',\n            { className: 'mcc-date' },\n            '2016/09/02'\n          )\n        );\n      } else if (d.indexOf('\u4E09\u5757\u5728\u7EBF') > 0) {\n        return React.createElement(\n          'li',\n          { 'data-id': i, onClick: me.handleClick, className: 'mcc-li' },\n          React.createElement('p', { className: 'icon-meituan' }),\n          React.createElement(\n            'p',\n            { className: 'mcc-title' },\n            '\\u4E09\\u5757\\u5728\\u7EBF\\u79D1\\u6280\\u6709\\u9650\\u516C\\u53F8'\n          ),\n          React.createElement(\n            'p',\n            { className: 'mcc-addr' },\n            '\\u5317\\u4EAC\\u5E02\\u671D\\u9633\\u533A\\u671B\\u4EAC\\u4E1C\\u8DEF6\\u53F7'\n          ),\n          React.createElement(\n            'span',\n            { className: 'mcc-count' },\n            '3'\n          ),\n          React.createElement(\n            'span',\n            { className: 'mcc-date' },\n            '2016/09/02'\n          )\n        );\n      } else {\n        return React.createElement(\n          'li',\n          { 'data-id': i, onClick: me.handleClick, className: 'mcc-li' },\n          React.createElement('p', { className: 'icon-guangqi' }),\n          React.createElement(\n            'p',\n            { className: 'mcc-title' },\n            '\\u5E7F\\u5DDE\\u6C7D\\u8F66\\u96C6\\u56E2\\u80A1\\u4EFD\\u6709\\u9650\\u516C\\u53F8'\n          ),\n          React.createElement(\n            'p',\n            { className: 'mcc-addr' },\n            '\\u73E0\\u6C5F\\u65B0\\u57CE\\u5174\\u56FD\\u8DEF23\\u53F7\\u5E7F\\u6C7D\\u4E2D\\u5FC3'\n          ),\n          React.createElement(\n            'span',\n            { className: 'mcc-count' },\n            '1'\n          ),\n          React.createElement(\n            'span',\n            { className: 'mcc-date' },\n            '2016/09/02'\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'ul',\n      null,\n      lis\n    );\n  }\n});";
    },
    getData_control27: function (elem) {},
    doAction_uiControl34: function (data, elem) {},
    getTemplate_uiControl34: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  render: function(){\n    return (\n      <div>\n        <input className=\"ysp-query-input\" type=\"text\" class=\"field\" placeholder=\"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0\"/>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\"input\", { className: \"ysp-query-input\", type: \"text\", \"class\": \"field\", placeholder: \"\\u8BF7\\u8F93\\u5165\\u5BA2\\u6237\\u540D\\u79F0\" })\n    );\n  }\n});";
    }
  });
})(window, ysp);