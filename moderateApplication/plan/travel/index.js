(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control39_9R1adn: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl39_sMaTtz: function (data, elem) {},
    getTemplate_uiControl39_sMaTtz: function () {
      var selfTemplate = "import { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className='titleH1'>\n          <Header title={data.title}>\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={back}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: data.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },

    getData_control41_tsWEHb: function (elem) {
      if (!elem) {
        return;
      }var data = {};var table = elem.querySelectorAll('table')[0];var trs = table.querySelectorAll('tr');data.title = '基本信息';data.content = [];for (var i = 0; i < trs.length; i++) {
        var arr = [];var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          if (tds[k].querySelector('input')) {
            if (tds[k].querySelector('input').type == 'radio') {
              arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').checked ? tds[k].querySelector('input').parentElement.nextSibling.textContent.trim() : tds[k].querySelector('input').parentElement.nextSibling.textContent.trim() });
            } else {
              arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: tds[k].querySelector('input').value });
            }
          }if (tds[k].querySelector('select')) {
            var opts = tds[k].querySelector('select').querySelectorAll('option');for (var j = 0; j < opts.length; j++) {
              if (opts[j].value == tds[k].querySelector('select').value) {
                arr.push({ left: tds[k].querySelector('label').textContent.trim(), right: opts[j].textContent.trim() });
              }
            }
          }if (tds[k].querySelector('a')) {
            arr.push({ href: tds[k].querySelector('a').href, text: tds[k].textContent.trim(), type: 'a' });
          }
        }data.content.push(arr);
      }var table = elem.querySelectorAll('table')[elem.querySelectorAll('table').length - 1];var tr = table.querySelectorAll('tr')[0];var tds = tr.querySelectorAll('td')[0];data.content.push([{ left: tds.textContent.trim(), right: tr.querySelector('textarea').value, type: 'textarea' }]);return data;
    },
    doAction_uiControl41_kicTTq: function (data, elem) {},
    getTemplate_uiControl41_kicTTq: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    // debugger;\n    if(target.tagName.toLowerCase() == 'i'){\n      target = target.parentElement.parentElement;\n    }\n    if(target.tagName.toLowerCase() == 'a'){\n      target = target.parentElement;\n    }\n    if(target.previousSibling.className == 'content disnone'){\n      target.previousSibling.className = 'content';\n      // target.innerText = '\u6536\u8D77\u66F4\u591A\u5185\u5BB9';\n      target.querySelector('a').className = 'xia';\n    }else{\n      target.previousSibling.className = 'content disnone';\n      // target.innerText = '\u663E\u793A\u66F4\u591A\u5185\u5BB9';\n      target.querySelector('a').className = 'shang';\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index<2){\n        var lisele = ele.map(function(d,i){\n          return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>{d.right}</div>\n            </div>\n          )\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    var list = data.content.map(function(ele,index){\n      if(index>1){\n        var lisele = ele.map(function(d,i){\n          if(!d.type){\n            return(\n          \t<div className='contenttit'>\n            \t<div className='contentitem'>{d.left}</div>\n              <div className='contentitem'>{d.right}</div>\n            </div>\n          )\n          }else{\n            if(d.type == 'textarea'){\n              return(\n              \t<div className='contenttit'>\n                \t<div className='contentitem'>{d.left}</div>\n                  <div className='contentitem'><textarea value={d.right}></textarea></div>\n                </div>\n              )\n            }\n          }\n        })\n        return(\n        \t<div>{lisele}</div>\n        )\n      }\n    })\n    return (\n      <div className='information'>\n       \t<div className='contenttitle'><span></span><p>{data.title}</p></div>\n        <div className='content'>\n          {lis}</div>\n        <div className='content disnone'>\n          {list}\n          <div className='contentitem' style={{'border-bottom':'1px solid #e0e0e0','width':'100%','text-align':'right'}}>\n            <a href='javascript:;'>{data.content[2][data.content[2].length-1].text}</a>\n          </div>\n        </div>\n        <span onClick={_this.click}><a className='shang' href='javascript:;'></a>\u663E\u793A\u66F4\u591A\u5185\u5BB9</span>\n      </div>\n    )\n  }\n});";
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var target = e.target;\n    // debugger;\n    if (target.tagName.toLowerCase() == \'i\') {\n      target = target.parentElement.parentElement;\n    }\n    if (target.tagName.toLowerCase() == \'a\') {\n      target = target.parentElement;\n    }\n    if (target.previousSibling.className == \'content disnone\') {\n      target.previousSibling.className = \'content\';\n      // target.innerText = \'\u6536\u8D77\u66F4\u591A\u5185\u5BB9\';\n      target.querySelector(\'a\').className = \'xia\';\n    } else {\n      target.previousSibling.className = \'content disnone\';\n      // target.innerText = \'\u663E\u793A\u66F4\u591A\u5185\u5BB9\';\n      target.querySelector(\'a\').className = \'shang\';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index < 2) {\n        var lisele = ele.map(function (d, i) {\n          return React.createElement(\n            \'div\',\n            { className: \'contenttit\' },\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.left\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'contentitem\' },\n              d.right\n            )\n          );\n        });\n        return React.createElement(\n          \'div\',\n          null,\n          lisele\n        );\n      }\n    });\n    var list = data.content.map(function (ele, index) {\n      if (index > 1) {\n        var lisele = ele.map(function (d, i) {\n          if (!d.type) {\n            return React.createElement(\n              \'div\',\n              { className: \'contenttit\' },\n              React.createElement(\n                \'div\',\n                { className: \'contentitem\' },\n                d.left\n              ),\n              React.createElement(\n                \'div\',\n                { className: \'contentitem\' },\n                d.right\n              )\n            );\n          } else {\n            if (d.type == \'textarea\') {\n              return React.createElement(\n                \'div\',\n                { className: \'contenttit\' },\n                React.createElement(\n                  \'div\',\n                  { className: \'contentitem\' },\n                  d.left\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'contentitem\' },\n                  React.createElement(\'textarea\', { value: d.right })\n                )\n              );\n            }\n          }\n        });\n        return React.createElement(\n          \'div\',\n          null,\n          lisele\n        );\n      }\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'information\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        lis\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content disnone\' },\n        list,\n        React.createElement(\n          \'div\',\n          { className: \'contentitem\', style: { \'border-bottom\': \'1px solid #e0e0e0\', \'width\': \'100%\', \'text-align\': \'right\' } },\n          React.createElement(\n            \'a\',\n            { href: \'javascript:;\' },\n            data.content[2][data.content[2].length - 1].text\n          )\n        )\n      ),\n      React.createElement(\n        \'span\',\n        { onClick: _this.click },\n        React.createElement(\'a\', { className: \'shang\', href: \'javascript:;\' }),\n        \'\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9\'\n      )\n    );\n  }\n});';
    },

    getData_control43_GsLKFD: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTabledata(elem, ['文件名', '上传人', '上传时间', '版本', '操作']);data.id = elem.nextElementSibling.nextElementSibling.id;data.title = '附件';return data;
    },
    doAction_uiControl43_HFSUkP: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'commit') {
        // debugger;
        elem.ownerDocument.querySelector("#" + data).click();setTimeout(function () {
          elem.ownerDocument.defaultView.InitAttachmentList();
        }, 1000); // setTimeout(function () {
        //   var url = ysp.appMain.getActiveUrl();
        //   ysp.appMain.reloadPage(url);
        // }, 2000);
      }if (type == 'add') {
        elem.ownerDocument.querySelector("#" + data).previousElementSibling.querySelector('input').click();
      }if (type == 'updel') {
        var tds = elem.querySelectorAll('tbody')[1].querySelectorAll('tr')[data.index].querySelectorAll('td');tds[tds.length - 1].querySelectorAll('a')[data.i].click();
      }
    },
    getTemplate_uiControl43_HFSUkP: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if(target.tagName.toLowerCase() == 'button'){\n      console.log(target.id);\n      if(target.id == 'uploadDiv' ){\n        type = 'commit';\n        data = 'btnFileUpload';\n      }else{\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if(target.tagName.toLowerCase() == 'p'){\n      type = 'updel';\n      data = {\n        index:target.getAttribute('data-index'),\n        i:target.className=='xiazai'?0:1\n      }\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  click:function(e){\n    var target = e.target;\n    if(target.className == 'shang'){\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displblock';\n      }\n    }else{\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for(var i=0;i<divs.length;i++){\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      var list = ele.map(function(d,i){\n        if(i==0){\n          return(\n          \t<div className='titlediv'>\n            \t<div>{'0'+(index+1)}</div>\n              <div>{d}</div>\n              <div onClick={_this.click} className='shang'></div>\n            </div>\n          )\n        }\n        if(i == ele.length-1){\n          if(d.length>2){\n              return(\n              <div className='displnone'>\n                <div className='contentitem contentspan' style={{'width':'100%','text-align-last':'auto','text-align':'center'}}><p className='shanchu' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[2]+d[3]}</p><p data-index={index} className='xiazai' onClick={_this.onClick.bind(_this)}><span></span>{d.length>2?d[0]+d[1]:''}</p></div>\n              </div>\n            )\n          }else{\n             return(\n              <div className='displnone'>\n                <div className='contentitem'><p className='xiazai' data-index={index} onClick={_this.onClick.bind(_this)}><span></span>{d[0]+d[1]}</p></div>\n              </div>\n            )\n          }\n        }\n        return(\n        \t<div className='displnone'>\n          \t<div className='contentitem'>{data.titles[i]}</div>\n            <div className='contentitem'>{d}</div>\n          </div>\n        )\n      })\n      return(\n      \t<div className='contentit'>{list}</div>\n      )\n    })\n    \n    return (\n      <div className='Enclosure'>\n        <div className='contenttitle'>\n          <span className='xia'></span>\n          <p>{data.title}\n            <div>\n              <button onClick={_this.onClick.bind(_this)}>\u9009\u62E9\u6587\u4EF6</button>\n              <button id={data.id} onClick={_this.onClick.bind(_this)}>\u4E0A\u4F20\u6587\u4EF6</button>\n            </div>\n          </p>\n        </div>\n        <div className='content'>\n    \t\t\t{lis}\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = '',\n        data = '';\n    if (target.tagName.toLowerCase() == 'button') {\n      console.log(target.id);\n      if (target.id == 'uploadDiv') {\n        type = 'commit';\n        data = 'btnFileUpload';\n      } else {\n        type = 'add';\n        data = 'btnFileUpload';\n      }\n    }\n    if (target.tagName.toLowerCase() == 'p') {\n      type = 'updel';\n      data = {\n        index: target.getAttribute('data-index'),\n        i: target.className == 'xiazai' ? 0 : 1\n      };\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  click: function click(e) {\n    var target = e.target;\n    if (target.className == 'shang') {\n      target.className = 'xia';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displnone');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displblock';\n      }\n    } else {\n      target.className = 'shang';\n      var divs = target.parentElement.parentElement.querySelectorAll('div.displblock');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].className = 'displnone';\n      }\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      var list = ele.map(function (d, i) {\n        if (i == 0) {\n          return React.createElement(\n            'div',\n            { className: 'titlediv' },\n            React.createElement(\n              'div',\n              null,\n              '0' + (index + 1)\n            ),\n            React.createElement(\n              'div',\n              null,\n              d\n            ),\n            React.createElement('div', { onClick: _this.click, className: 'shang' })\n          );\n        }\n        if (i == ele.length - 1) {\n          if (d.length > 2) {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem contentspan', style: { 'width': '100%', 'text-align-last': 'auto', 'text-align': 'center' } },\n                React.createElement(\n                  'p',\n                  { className: 'shanchu', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[2] + d[3]\n                ),\n                React.createElement(\n                  'p',\n                  { 'data-index': index, className: 'xiazai', onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d.length > 2 ? d[0] + d[1] : ''\n                )\n              )\n            );\n          } else {\n            return React.createElement(\n              'div',\n              { className: 'displnone' },\n              React.createElement(\n                'div',\n                { className: 'contentitem' },\n                React.createElement(\n                  'p',\n                  { className: 'xiazai', 'data-index': index, onClick: _this.onClick.bind(_this) },\n                  React.createElement('span', null),\n                  d[0] + d[1]\n                )\n              )\n            );\n          }\n        }\n        return React.createElement(\n          'div',\n          { className: 'displnone' },\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            data.titles[i]\n          ),\n          React.createElement(\n            'div',\n            { className: 'contentitem' },\n            d\n          )\n        );\n      });\n      return React.createElement(\n        'div',\n        { className: 'contentit' },\n        list\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'Enclosure' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', { className: 'xia' }),\n        React.createElement(\n          'p',\n          null,\n          data.title,\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'button',\n              { onClick: _this.onClick.bind(_this) },\n              '\\u9009\\u62E9\\u6587\\u4EF6'\n            ),\n            React.createElement(\n              'button',\n              { id: data.id, onClick: _this.onClick.bind(_this) },\n              '\\u4E0A\\u4F20\\u6587\\u4EF6'\n            )\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        lis\n      )\n    );\n  }\n});";
    },
    getData_control44_TViO09: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['环节名称', '人员姓名', '人员公司', '人员部门', '人员职位', '审批操作', '审批时间', '意见']);data.title = '审批日志';return data;
    },
    doAction_uiControl44_gmyENw: function (data, elem) {},
    getTemplate_uiControl44_gmyENw: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    return (\n      <div className=\'examination\'>\n        <div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'contentitem\'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        \'th\',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          \'td\',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        \'tr\',\n        null,\n        lis\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'examination\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'contentitem\' },\n        React.createElement(\n          \'table\',\n          null,\n          React.createElement(\n            \'thead\',\n            null,\n            React.createElement(\n              \'tr\',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            \'tbody\',\n            null,\n            trs\n          )\n        )\n      )\n    );\n  }\n});';
    },
    getData_control45_5sqLwB: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = '审批操作';data.content = [];var trs = elem.querySelectorAll('tr');var obj = {};obj.left = trs[0].querySelectorAll('td')[0].textContent.trim().split('：')[0];obj.right = trs[0].querySelectorAll('td')[1].textContent.trim();data.content.push(obj);var obj = {};obj.left = '意见';obj.right = trs[1].querySelectorAll('td')[1].querySelector('textarea').value;data.content.push(obj);data.content.push({ left: trs[1].querySelectorAll('td')[1].textContent.trim() });return data;
    },
    doAction_uiControl45_lAB3qM: function (data, elem) {},
    getTemplate_uiControl45_lAB3qM: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onChange:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:\'change\',\n        data:target.value\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    return (\n      <div className=\'approval\'>\n        <div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'content\'>\n          \t<div className=\'contentitem\'>{data.content[0].left}</div>\n          \t<div className=\'contentitem\'>{data.content[0].right}</div>\n          </div>\n          <div className=\'content\'>\n          \t<div className=\'contentitem\'>{data.content[1].left}</div>\n            <textarea value={data.content[1].right} onChange={_this.onChange}></textarea>\n        \t</div>\n        <div className=\'tishi\'>{data.content[2].left}</div>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'change',\n        data: target.value\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    return React.createElement(\n      'div',\n      { className: 'approval' },\n      React.createElement(\n        'div',\n        { className: 'contenttitle' },\n        React.createElement('span', null),\n        React.createElement(\n          'p',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[0].left\n        ),\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[0].right\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'content' },\n        React.createElement(\n          'div',\n          { className: 'contentitem' },\n          data.content[1].left\n        ),\n        React.createElement('textarea', { value: data.content[1].right, onChange: _this.onChange })\n      ),\n      React.createElement(\n        'div',\n        { className: 'tishi' },\n        data.content[2].left\n      )\n    );\n  }\n});";
    },
    getData_control46_Q0XDM4: function (elem) {
      if (!elem) {
        return;
      }var data = [];var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        data.push(lis[i].textContent.trim());
      }return data;
    },
    doAction_uiControl46_LiXWWa: function (data, elem) {
      var type = data.eventType;var data = data.customData;if (type == 'click') {
        elem.querySelectorAll('li')[data].querySelector('a').click();
      }
    },
    getTemplate_uiControl46_LiXWWa: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = \'\',\n        data;\n    if(target.tagName.toLowerCase() == \'div\'){\n      target.parentElement.nextElementSibling.style.display = \'block\';\n      // target.parentElement.nextElementSibling.style.height = target.ownerDocument.style.height;\n      var lis = target.parentElement.parentElement.querySelector(\'.dianbl\').querySelectorAll(\'li\');\n      for(var i=0;i<lis.length;i++){\n        lis[i].style.bottom = i*50 +\'px\';\n      }\n    }\n    if(target.tagName.toLowerCase() == \'p\'){\n      target.parentElement.parentElement.parentElement.style.display = \'none\';\n    }\n    if(target.tagName.toLowerCase() == \'button\'){\n      type = \'click\';\n      data = target.getAttribute(\'data-id\');\n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    var _this = this;\n  \tvar lis = data.map(function(d,i){\n      if(i<2){\n        return(\n        \t<button data-id={i} onClick={_this.onClick}>{d}</button>\n        )\n      }\n    })\n    var list = data.map(function(d,i){\n      if(i>1){\n        return(\n        \t<li><button data-id={i} onClick={_this.onClick}>{d}</button></li>\n        )\n      }\n    })\n    return (\n      <div className=\'submit\'>\n        <div className=\'subtrue\'><div>{lis}</div><div onClick={_this.onClick.bind(_this)}></div></div>\n        <div className=\'dianbl\'><ul><li><p onClick={_this.onClick}>\u53D6\u6D88</p></li>{list}</ul></div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type = \'\',\n        data;\n    if (target.tagName.toLowerCase() == \'div\') {\n      target.parentElement.nextElementSibling.style.display = \'block\';\n      // target.parentElement.nextElementSibling.style.height = target.ownerDocument.style.height;\n      var lis = target.parentElement.parentElement.querySelector(\'.dianbl\').querySelectorAll(\'li\');\n      for (var i = 0; i < lis.length; i++) {\n        lis[i].style.bottom = i * 50 + \'px\';\n      }\n    }\n    if (target.tagName.toLowerCase() == \'p\') {\n      target.parentElement.parentElement.parentElement.style.display = \'none\';\n    }\n    if (target.tagName.toLowerCase() == \'button\') {\n      type = \'click\';\n      data = target.getAttribute(\'data-id\');\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var lis = data.map(function (d, i) {\n      if (i < 2) {\n        return React.createElement(\n          \'button\',\n          { \'data-id\': i, onClick: _this.onClick },\n          d\n        );\n      }\n    });\n    var list = data.map(function (d, i) {\n      if (i > 1) {\n        return React.createElement(\n          \'li\',\n          null,\n          React.createElement(\n            \'button\',\n            { \'data-id\': i, onClick: _this.onClick },\n            d\n          )\n        );\n      }\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'submit\' },\n      React.createElement(\n        \'div\',\n        { className: \'subtrue\' },\n        React.createElement(\n          \'div\',\n          null,\n          lis\n        ),\n        React.createElement(\'div\', { onClick: _this.onClick.bind(_this) })\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'dianbl\' },\n        React.createElement(\n          \'ul\',\n          null,\n          React.createElement(\n            \'li\',\n            null,\n            React.createElement(\n              \'p\',\n              { onClick: _this.onClick },\n              \'\\u53D6\\u6D88\'\n            )\n          ),\n          list\n        )\n      )\n    );\n  }\n});';
    },
    getData_control40_XNLEtS: function (elem) {
      if (!elem) {
        return;
      }var data = {};data.title = elem.querySelector("div.title").textContent.trim();data.content = [];var trs = elem.querySelector('table').querySelector('tbody').querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.content.push({ leftval: tds[k].querySelector('label').textContent.trim(), rightval: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl40_t2Z2Fa: function (data, elem) {},
    getTemplate_uiControl40_t2Z2Fa: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.parentElement.nextElementSibling.className == \'content disnone\'){\n      target.className = \'zhankai\';\n      target.parentElement.parentElement.nextElementSibling.className = \'content\';\n    }else{\n      target.className = \'shouqi\';\n      target.parentElement.parentElement.nextElementSibling.className = \'content disnone\'\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className=\'contenttit\'>\n        \t<div className=\'contentitem\'>{ele.leftval}</div>\n          <div className=\'contentitem\'>{ele.rightval}</div>\n        </div>\n      )\n    })\n    return (\n      <div className=\'initiator\'>\n        <div className=\'contenttitle\'><span></span><p>{data.title}<i className=\'shouqi\' onClick={_this.click}></i></p></div>\n        <div className=\'content disnone\'>{lis}</div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.parentElement.nextElementSibling.className == \'content disnone\') {\n      target.className = \'zhankai\';\n      target.parentElement.parentElement.nextElementSibling.className = \'content\';\n    } else {\n      target.className = \'shouqi\';\n      target.parentElement.parentElement.nextElementSibling.className = \'content disnone\';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        \'div\',\n        { className: \'contenttit\' },\n        React.createElement(\n          \'div\',\n          { className: \'contentitem\' },\n          ele.leftval\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'contentitem\' },\n          ele.rightval\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'initiator\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title,\n          React.createElement(\'i\', { className: \'shouqi\', onClick: _this.click })\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content disnone\' },\n        lis\n      )\n    );\n  }\n});';
    },
    getData_control128_lRD59W: function (elem) {
      if (!elem) {
        return;
      }var data = ysp.customHelper.getTableData(elem, ['费用明细', '申请付款金额', '去年预提']);data.title = '差旅费用报销明细';data.contentfoot = [];var table = elem.nextElementSibling,
          trs = table.querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');for (var k = 0; k < tds.length; k++) {
          data.contentfoot.push({ left: tds[k].textContent.trim(), right: tds[k].querySelector('input').value });
        }
      }return data;
    },
    doAction_uiControl128_NQldZe: function (data, elem) {},
    getTemplate_uiControl128_NQldZe: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function(d,i){\n      return(\n      \t<th>{d}</th>\n      )\n    })\n    var trs = data.content.map(function(d,i){\n      var lis = d.map(function(ele,index){\n        return(\n        \t<td>{ele}</td>\n        )\n      })\n      return(\n      \t<tr>{lis}</tr>\n      )\n    })\n    var lis = data.contentfoot.map(function(ele,index){\n      return(\n      \t<div className=\'contenttit\'>\n        \t<div className=\'contentfoot\'>{ele.left}</div>\n          <div className=\'contentfoot\'>{ele.right}</div>\n        </div>\n      )\n    })\n    return (\n      <div className=\'askleave\'>\n        <div className=\'contenttitle\'><span></span><p>{data.title}</p></div>\n        <div className=\'contentitem\'>\n        \t<table>\n            <thead><tr>{ths}</tr></thead>\n            <tbody>{trs}</tbody>\n          </table>\n        </div>\n        <div className=\'content\'>{lis}</div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  render: function render() {\n    var data = this.props.customData;\n    var ths = data.titles.map(function (d, i) {\n      return React.createElement(\n        \'th\',\n        null,\n        d\n      );\n    });\n    var trs = data.content.map(function (d, i) {\n      var lis = d.map(function (ele, index) {\n        return React.createElement(\n          \'td\',\n          null,\n          ele\n        );\n      });\n      return React.createElement(\n        \'tr\',\n        null,\n        lis\n      );\n    });\n    var lis = data.contentfoot.map(function (ele, index) {\n      return React.createElement(\n        \'div\',\n        { className: \'contenttit\' },\n        React.createElement(\n          \'div\',\n          { className: \'contentfoot\' },\n          ele.left\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'contentfoot\' },\n          ele.right\n        )\n      );\n    });\n    return React.createElement(\n      \'div\',\n      { className: \'askleave\' },\n      React.createElement(\n        \'div\',\n        { className: \'contenttitle\' },\n        React.createElement(\'span\', null),\n        React.createElement(\n          \'p\',\n          null,\n          data.title\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'contentitem\' },\n        React.createElement(\n          \'table\',\n          null,\n          React.createElement(\n            \'thead\',\n            null,\n            React.createElement(\n              \'tr\',\n              null,\n              ths\n            )\n          ),\n          React.createElement(\n            \'tbody\',\n            null,\n            trs\n          )\n        )\n      ),\n      React.createElement(\n        \'div\',\n        { className: \'content\' },\n        lis\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);