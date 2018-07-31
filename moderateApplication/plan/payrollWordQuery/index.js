(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control775_zuuKhe: function (elem) {},
    doAction_uiControl775_zVOl8a: function (data, elem) {
      if ('click' == data.eventType) {
        //ysp.customHelper.backHome();
        //ysp.appMain.back();
        history.go(-1);
      }
    },
    getTemplate_uiControl775_zVOl8a: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='ysp-flash-hard'>\n        <div onClick={this.handlerClick.bind(this)}>\n          <span onClick={this.handlerClick.bind(this)}></span>\n          <span onClick={this.handlerClick.bind(this)}>\u8FD4\u56DE</span>\n        </div>\n        <div>\n        \t<span>\u5DE5\u8D44\u5355\u67E5\u8BE2</span>\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-flash-hard' },\n      React.createElement(\n        'div',\n        { onClick: this.handlerClick.bind(this) },\n        React.createElement('span', { onClick: this.handlerClick.bind(this) }),\n        React.createElement(\n          'span',\n          { onClick: this.handlerClick.bind(this) },\n          '\\u8FD4\\u56DE'\n        )\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          null,\n          '\\u5DE5\\u8D44\\u5355\\u67E5\\u8BE2'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control776_2i0SMt: function (elem) {
      if (!elem) {
        return;
      }var data = { selectYear: [], selectedYear: [], selectMonth: [], selectedMonth: [] };var year = elem.querySelector("#ddlYear");var month = elem.querySelector("#ddlMonth");var selectedYear = year.selectedOptions[0].textContent;var selectedMonth = month.selectedOptions[0].textContent;data.selectedYear.push(selectedYear);data.selectedMonth.push(selectedMonth);var optionsYear = year.querySelectorAll("option");for (var i = 0; i < optionsYear.length; i++) {
        data.selectYear.push(optionsYear[i].textContent);
      }var optionsMonth = month.querySelectorAll("option");for (var j = 0; j < optionsMonth.length; j++) {
        data.selectMonth.push(optionsMonth[j].textContent);
      }return data;
    },
    doAction_uiControl776_TTonb4: function (data, elem) {
      if ('year' == data.eventType) {
        var value = data.dataCustom.value;var selectEl = elem.querySelectorAll('select');selectEl[0].selectedIndex = value;if (selectEl[0].onchange) {
          selectEl[0].onchange();
        } else if (selectEl[0].dispatchEvent) {
          selectEl[0].dispatchEvent(new Event('change'));
        } else {
          selectEl[0].dispatchEvent(new MouseEvent('click', { view: selectEl[0].ownerDocument.defaultView, bubbles: true, cancelable: true }));
        }
      }if ('month' == data.eventType) {
        var value = data.dataCustom.value;var selectEl = elem.querySelectorAll('select');selectEl[1].selectedIndex = value;if (selectEl[1].onchange) {
          selectEl[1].onchange();
        } else if (selectEl[1].dispatchEvent) {
          selectEl[1].dispatchEvent(new Event('change'));
        } else {
          selectEl[1].dispatchEvent(new MouseEvent('click', { view: selectEl[1].ownerDocument.defaultView, bubbles: true, cancelable: true }));
        }
      }if ('click' == data.eventType) {
        elem.querySelector("#btnQuery").click();
      }
    },
    getTemplate_uiControl776_TTonb4: function () {
      var selfTemplate = "module.exports = React.createClass({\n  //\u5E74\u4EFD\n  selectYear:function(e){\n    var data = this.props.customData && this.props.customData.selectYear;\n    var dataSelect = this.props.customData && this.props.customData.selectedYear;\n    return data.map((items,index)=>{\n      return(\n        <option selected = {dataSelect == items ? 'selected' : ''}  value={index}>{items}</option>\n      );\n    })\n  },\n  //\u6708\u4EFD\n  selectMonth:function(e){\n    var data = this.props.customData && this.props.customData.selectMonth;\n    var dataSelect = this.props.customData && this.props.customData.selectedMonth;\n    return data.map((items,index)=>{\n      return(\n      \t<option selected = {items == dataSelect ? 'selected' : ''}  value={index}>{items}</option>\n      );\n    })\n  },\n  yearChange:function(e){\n    var value = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value: value\n        },\n        eventType:'year'\n      })\n    }\n  },\n  monthChange:function(e){\n    var value = e.target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value: value\n        },\n        eventType:'month'\n      })\n    }\n  },\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  \n  render: function() {\n    var data = this.props.customData || [];\n    return (\n      <div className=\"ysp-payroll-query-hard\">\n        <div className=\"ysp-payroll-query-date\">\n          <span>\u5E74\u4EFD\uFF1A</span>\n          <select selectedIndex='0' onChange={this.yearChange.bind(this)}>{this.selectYear()}</select>\n        </div>\n        <div className=\"ysp-payroll-query-date\">\n          <span>\u6708\u4EFD\uFF1A</span>\n          <select selectedIndex='1' onChange={this.monthChange.bind(this)}>{this.selectMonth()}</select>\n        </div>\n        \n        <div className=\"ysp-payroll-query-button\" onClick={this.handlerClick.bind(this)}>\u67E5\u8BE2</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  //\u5E74\u4EFD\n  selectYear: function selectYear(e) {\n    var data = this.props.customData && this.props.customData.selectYear;\n    var dataSelect = this.props.customData && this.props.customData.selectedYear;\n    return data.map(function (items, index) {\n      return React.createElement(\n        'option',\n        { selected: dataSelect == items ? 'selected' : '', value: index },\n        items\n      );\n    });\n  },\n  //\u6708\u4EFD\n  selectMonth: function selectMonth(e) {\n    var data = this.props.customData && this.props.customData.selectMonth;\n    var dataSelect = this.props.customData && this.props.customData.selectedMonth;\n    return data.map(function (items, index) {\n      return React.createElement(\n        'option',\n        { selected: items == dataSelect ? 'selected' : '', value: index },\n        items\n      );\n    });\n  },\n  yearChange: function yearChange(e) {\n    var value = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: value\n        },\n        eventType: 'year'\n      });\n    }\n  },\n  monthChange: function monthChange(e) {\n    var value = e.target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: value\n        },\n        eventType: 'month'\n      });\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      'div',\n      { className: 'ysp-payroll-query-hard' },\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-query-date' },\n        React.createElement(\n          'span',\n          null,\n          '\\u5E74\\u4EFD\\uFF1A'\n        ),\n        React.createElement(\n          'select',\n          { selectedIndex: '0', onChange: this.yearChange.bind(this) },\n          this.selectYear()\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-query-date' },\n        React.createElement(\n          'span',\n          null,\n          '\\u6708\\u4EFD\\uFF1A'\n        ),\n        React.createElement(\n          'select',\n          { selectedIndex: '1', onChange: this.monthChange.bind(this) },\n          this.selectMonth()\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-query-button', onClick: this.handlerClick.bind(this) },\n        '\\u67E5\\u8BE2'\n      )\n    );\n  }\n});";
    },
    getData_control777_F8SyLd: function (elem) {
      if (!elem) {
        return;
      }var content = ysp.customHelper.getTableData(elem, ['工资类型', '所属期间', '说明', '操作']);return content;
    },
    doAction_uiControl777_Di237t: function (data, elem) {
      if ('click' == data.eventType) {
        var ind = data.customData.index;var index = parseInt(ind);debugger;var url = elem.querySelectorAll("tr")[index + 1].querySelectorAll("td")[3].querySelector("a").href;if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(url + "&_ysp_filepreview=1");
        } else if (ysp.appMain.isAndroid()) {
          top.location.href = url;
        } else {
          elem.querySelectorAll("tr")[index + 1].querySelectorAll("td")[3].querySelector("a").click();
        }
      }
    },
    getTemplate_uiControl777_Di237t: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          index:index\n        },\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData && this.props.customData.content || [];\n    // if(data.length == 0){\n    //   return(\n    //   \t<div className=\"ysp-payroll-query-content\">\u6682\u65E0\u6570\u636E\uFF01\uFF01</div>\n    //   );\n    // }\n    return (\n      <div className=\"ysp-payroll-query-content\">\n        {\n          data.map((item,index)=>{\n            return(\n            \t<div>\n                <div>\n                  <span>\u5DE5\u8D44\u7C7B\u578B\uFF1A</span>\n                  <span>{item[0]}</span>\n                </div>\n                <div>\n                  <span>\u6240\u5C5E\u671F\u95F4\uFF1A</span>\n                  <span>{item[1]}</span>\n                </div>\n                <div>\n                  <span>\u8BF4\u660E\uFF1A</span>\n                  <span>{item[2]}</span>\n                </div> \n                <div>\n                  <span>\u64CD\u4F5C\uFF1A</span>\n                  <span style={{'color':'red'}}onClick={this.handlerClick.bind(this)} data-index={index}>\n                    {item[3]}\n                  </span>\n                </div>\n              </div>\n            );\n          })\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var index = target.dataset.index;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          index: index\n        },\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var data = this.props.customData && this.props.customData.content || [];\n    // if(data.length == 0){\n    //   return(\n    //   \t<div className=\"ysp-payroll-query-content\">\u6682\u65E0\u6570\u636E\uFF01\uFF01</div>\n    //   );\n    // }\n    return React.createElement(\n      'div',\n      { className: 'ysp-payroll-query-content' },\n      data.map(function (item, index) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u5DE5\\u8D44\\u7C7B\\u578B\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              null,\n              item[0]\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u6240\\u5C5E\\u671F\\u95F4\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              null,\n              item[1]\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u8BF4\\u660E\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              null,\n              item[2]\n            )\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'span',\n              null,\n              '\\u64CD\\u4F5C\\uFF1A'\n            ),\n            React.createElement(\n              'span',\n              { style: { 'color': 'red' }, onClick: _this.handlerClick.bind(_this), 'data-index': index },\n              item[3]\n            )\n          )\n        );\n      })\n    );\n  }\n});";
    }
  });
})(window, ysp);