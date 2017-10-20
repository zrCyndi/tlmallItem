var capitals = {
	'长春分公司' : '吉林省',
	'长沙分公司' : '湖南省',
	'西安分公司' : '陕西省',
	'天津分公司' : '天津市',
	'南宁分公司' : '海南省',
	'杭州太力' : '浙江省',
	'合肥分公司' : '安徽省',
	'北京分公司' : '北京市',
	'厦门分公司' : '福建省',
	'成都分公司' : '四川省',
	'广州分公司' : '广东省',
	'贵阳分公司' : '贵州省',
	'哈尔滨分公司' : '黑龙江省',
	'内蒙古分公司' : '内蒙古自治区',
	'济南分公司' : '山东省',
	'沈阳分公司' : '辽宁省',
	'南昌分公司' : '江西省',
	'南宁分公司' : '广西壮族自治区',
	'昆明分公司' : '云南省',
	'成都分公司' : '西藏自治区',
	'兰州分公司' : '甘肃省',
	'武汉分公司' : '湖北省',
	'上海普天' : '上海市',
	'石家庄分公司' : '河北省',
	'新疆分公司' : '新疆维吾尔自治区',
	'南京分公司' : '江苏省',
	'兰州分公司' : '宁夏回族自治区',
	'郑州分公司' : '河南省',
	'兰州分公司' : '青海省',
	'太原分公司' : '山西省',
	'重庆分公司' : '重庆市',
	'长春分公司' : '吉林',
	'长沙分公司' : '湖南',
	'西安分公司' : '陕西',
	'天津分公司' : '天津',
	'南宁分公司' : '海南',
	'杭州太力' : '浙江',
	'合肥分公司' : '安徽',
	'北京分公司' : '北京',
	'厦门分公司' : '福建',
	'成都分公司' : '四川',
	'广州分公司' : '广东',
	'贵阳分公司' : '贵州',
	'哈尔滨分公司' : '黑龙江',
	'内蒙古分公司' : '内蒙古',
	'济南分公司' : '山东',
	'沈阳分公司' : '辽宁',
	'南昌分公司' : '江西',
	'南宁分公司' : '广西',
	'昆明分公司' : '云南',
	'兰州分公司' : '甘肃',
	'武汉分公司' : '湖北',
	'上海普天' : '上海',
	'石家庄分公司' : '河北',
	'新疆分公司' : '新疆',
	'南京分公司' : '江苏',
	'兰州分公司' : '宁夏',
	'郑州分公司' : '河南',
	'兰州分公司' : '青海',
	'太原分公司' : '山西',
	'重庆分公司' : '重庆',
	'成都分公司' : '西藏'
};

var provinceToBranchName = {
	"吉林省" : "长春分公司",
	"湖南省" : "长沙分公司",
	"陕西省" : "西安分公司",
	"天津市" : "天津分公司",
	"海南省" : "南宁分公司",
	"浙江省" : "杭州太力",
	"安徽省" : "合肥分公司",
	"北京市" : "北京分公司",
	"福建省" : "厦门分公司",
	"四川省" : "成都分公司",
	"广东省" : "广州分公司",
	"贵州省" : "贵阳分公司",
	"黑龙江省" : "哈尔滨分公司",
	"内蒙古自治区" : "内蒙古分公司",
	"山东省" : "济南分公司",
	"辽宁省" : "沈阳分公司",
	"江西省" : "南昌分公司",
	"广西壮族自治区" : "南宁分公司",
	"云南省" : "昆明分公司",
	"西藏自治区" : "成都分公司",
	"甘肃省" : "兰州分公司",
	"湖北省" : "武汉分公司",
	"上海市" : "上海普天",
	"河北省" : "石家庄分公司",
	"新疆维吾尔自治区" : "新疆分公司",
	"江苏省" : "南京分公司",
	"宁夏回族自治区" : "兰州分公司",
	"河南省" : "郑州分公司",
	"青海省" : "兰州分公司",
	"山西省" : "太原分公司",
	"重庆市" : "重庆分公司",
	"吉林" : "长春分公司",
	"湖南" : "长沙分公司",
	"陕西" : "西安分公司",
	"天津" : "天津分公司",
	"海南" : "南宁分公司",
	"浙江" : "杭州太力",
	"安徽" : "合肥分公司",
	"北京" : "北京分公司",
	"福建" : "厦门分公司",
	"四川" : "成都分公司",
	"广东" : "广州分公司",
	"贵州" : "贵阳分公司",
	"黑龙江" : "哈尔滨分公司",
	"内蒙古" : "内蒙古分公司",
	"山东" : "济南分公司",
	"辽宁" : "沈阳分公司",
	"江西" : "南昌分公司",
	"广西" : "南宁分公司",
	"云南" : "昆明分公司",
	"甘肃" : "兰州分公司",
	"湖北" : "武汉分公司",
	"上海" : "上海普天",
	"河北" : "石家庄分公司",
	"新疆" : "新疆分公司",
	"江苏" : "南京分公司",
	"宁夏" : "兰州分公司",
	"河南" : "郑州分公司",
	"青海" : "兰州分公司",
	"山西" : "太原分公司",
	"重庆" : "重庆分公司",
	'西藏' : '成都分公司'
};

var position = {};
position.LEADER = '总部领导';
position.BIZ_GENERAL_MANAGER = '事业部总经理';
position.BRANCH = '分公司分总';
position.PRODUCT_MANAGER = '产品经理';
position.BRAND_MANAGER = '品牌经理';
position.OFFICE_MAN = '办事处主任';
position.SALES_MAN = '销售代表';

// 地图
function ajaxData_1004() {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = 1004;
	if (myPosition != position.LEADER && myPosition != position.BIZ_GENERAL_MANAGER)
		parms.interfaceId = 1023;

	// delete parms.month;
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var customerByBranch = data.Rows;
			ajaxData_cc(customerByBranch);

		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

function ajaxData_cc(customerByBranch) {
	var parms = $("#queryForm").serializeObject();
	parms.interfaceId = 1005;
	if (myPosition != position.LEADER && myPosition != position.BIZ_GENERAL_MANAGER)
		parms.interfaceId = 1024;
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		async : false,
		cache : false,
		success : function(data) {
			var stroeByBranch = data.Rows;
			echartsMap(customerByBranch, stroeByBranch);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	})

}

// 地图显示
function echartsMap(customerByBranch, stroeByBranch) {
	var customerList = [];
	var customers = [];
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER) {
		for ( var i in customerByBranch) {
			var row = {};
			customers.push(customerByBranch[i].branchname);
			for ( var j in stroeByBranch) {
				if (customerByBranch[i].branchname == stroeByBranch[j].branchname) {
					row.name = customerByBranch[i].branchname;
					row.value = '<br>拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：' + stroeByBranch[j].stroeNum;
				} else {
					row.name = customerByBranch[i].branchname;
					row.value = '<br>拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：0';
				}
			}

			customerList.push(row);
		}
		// 补齐
		for ( var i in stroeByBranch) {
			if (customers.indexOf(stroeByBranch[i].branchname) < 0) {
				var row = {};
				row.name = stroeByBranch[i].branchname;
				row.value = '<br>拜访客户数量：0' + '<br>拜访门店数量：'
						+ stroeByBranch[i].stroeNum;
				customerList.push(row);
			}
		}
	} else {
		for ( var i in customerByBranch) {
			var row = {};
			customers.push(customerByBranch[i].officename);
			for ( var j in stroeByBranch) {
				if (customerByBranch[i].officename == stroeByBranch[j].officename) {
					row.name = customerByBranch[i].officename;
					row.value = '<br>拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：' + stroeByBranch[j].stroeNum;
				} else {
					row.name = customerByBranch[i].officename;
					row.value = '<br>拜访客户数量：' + customerByBranch[i].cusNum
							+ '<br>拜访门店数量：0';
				}
			}

			customerList.push(row);
		}
		// 补齐
		for ( var i in stroeByBranch) {
			if (customers.indexOf(stroeByBranch[i].officename) < 0) {
				var row = {};
				row.name = stroeByBranch[i].officename;
				row.value = '<br>拜访客户数量：0' + '<br>拜访门店数量：'
						+ stroeByBranch[i].stroeNum;
				customerList.push(row);
			}
		}
	}

	var mapType = 'china';
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER)
		mapType = 'china';
	else if ((myPosition == position.BRANCH || myPosition == position.BRAND_MANAGER) && branchname) {
		var key = branchname.split('_')[3];
		mapType = capitals[key];
	} else if (myPosition == position.OFFICE_MAN && branchname) {
		var key = branchname.split('_')[3];
		mapType = capitals[key];
	} else if (myPosition == position.SALES_MAN && branchname) {
		var key = branchname.split('_')[3];
		mapType = capitals[key];
	}

	var t = echarts.init(document.getElementById("mapChart")), n = {
		tooltip : {
			trigger : 'item',
			formatter : function(param) {
				var res = customerList;
				if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER) {
					for ( var i in customerList) {
						var key = customerList[i].name.substr(11,
								customerList[i].name.length - 1);

						if (param.name == capitals[key]) {
							return provinceToBranchName[param.name]
									+ customerList[i].value;
						}
					}
					return provinceToBranchName[param.name]
							+ '<br>拜访客户数量：0<br>拜访门店数量：0';
				} else {
					for ( var i in customerList) {
						var key = customerList[i].name.replace('办事处', '');

						if (param.name.replace('市', '') == key) {
							return customerList[i].name + customerList[i].value;
						}
					}
					return param.name + '<br>拜访客户数量：0<br>拜访门店数量：0';
				}

			}
		},
		dataRange : {
			min : 0,
			max : 1000,
			orient : 'vertical',
			x : 'right',
			y : 'top',
			text : [ '高', '低' ], // 文本，默认为数值文本
			calculable : true,
		},
		series : [ {
			name : [ '客户数量' ],
			type : 'map',
			mapType : mapType,
			roam : false,
			itemStyle : {
				normal : {
					label : {
						show : true
					}
				},
				emphasis : {
					label : {
						show : true
					}
				}
			},
			data : customerList
		} ]
	};
  //绑定option参数到DOM节点上，供采集里面调用
document.getElementById("mapChart").setAttribute("option",JSON.stringify(n));
	t.setOption(n), window.onresize = t.resize;
}

// 月度客户拜访趋势图

function areaMap(rows) {
	var mydata = [];
	for (var i = 1; i < 13; i++) {
		var value = 0;
		for ( var j in rows) {
			if (i == rows[j].month.substr(5, 6)) {
				value = rows[j].signNum;
			}
		}
		mydata.push(value);
	}
	var a = echarts.init(document.getElementById("chart_a")), option_a = {
		tooltip : {
			trigger : 'axis'
		},
		color : [ '#ed694f' ],
		calculable : true,
		grid : {
			width : '90%',
			height : 200,
			x : '5%',
			y : '30px'
		},
		xAxis : [ {
			type : 'category',
			// boundaryGap : false,
			splitLine : {
				show : false
			},
			data : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
					'10月', '11月', '12月' ]
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [ {
			type : 'line',
			smooth : true,
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'default'
					}
				}
			},
			data : mydata,
			markLine : {
				data : [ {
					type : 'average',
					name : '平均值'
				} ]
			}
		} ]
	};
  //绑定option参数到DOM节点上，供采集里面调用
		document.getElementById("chart_a").setAttribute("option",JSON.stringify(option_a));
	a.setOption(option_a), $(window).resize(a.resize);
}

// 月度门店拜访趋势图

function storeMap(rows) {
	var mydata = [];
	for (var i = 1; i < 13; i++) {
		var value = 0;
		for ( var j in rows) {
			if (i == rows[j].month.substr(5, 6)) {
				value = rows[j].signNum;
			}
		}
		mydata.push(value);
	}
	var b = echarts.init(document.getElementById("chart_b")), option_b = {
		tooltip : {
			trigger : 'axis'
		},
		calculable : true,
		grid : {
			width : '90%',
			height : 200,
			x : '5%',
			y : '30px'
		},
		xAxis : [ {
			type : 'category',
			// boundaryGap : false,
			splitLine : {
				show : false
			},
			data : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
					'10月', '11月', '12月' ]
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [ {
			type : 'line',
			smooth : true,
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'default'
					}
				}
			},
			data : mydata,
			markLine : {
				data : [ {
					type : 'average',
					name : '平均值'
				} ]
			}
		} ]
	};
  //绑定option参数到DOM节点上，供采集里面调用
		document.getElementById("chart_b").setAttribute("option",JSON.stringify(option_b));
	b.setOption(option_b), $(window).resize(b.resize);
}

// 客户拜访总览--总部
var branchname = [];
var cusNum = [];
var signNum = [];
var storeNum = [];
var cusSignNum = [];
var storeSignNum = [];

function ajaxData_n() {
	var parms = $("#queryForm").serializeObject();
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER)
		parms.interfaceId = 1015;
	else if (myPosition == position.BRANCH|| myPosition == position.BRAND_MANAGER)
		parms.interfaceId = 1017;
	else if (myPosition == position.OFFICE_MAN)
		parms.interfaceId = 1019;
	else if (myPosition == position.SALES_MAN)
		parms.interfaceId = 1021;
	else
		window.console.log('输入角色失败！');

	// delete parms.month;
	$.ajax({
		type : "POST",
		url : "/ptDataShow/echarts/postDataFromEs",
		data : parms,
		dataType : "json",
		success : function(data) {
			var cusRow = data.Rows;
			ajaxData_m(cusRow);
		},
		error : function(data) {
			window.console.log('get data error');
		}
	});
}

function ajaxData_m(cusRow) {
	var key = '';
	var parms = $("#queryForm").serializeObject();
	if (myPosition == position.LEADER || myPosition == position.BIZ_GENERAL_MANAGER|| myPosition == position.PRODUCT_MANAGER) {
		key = 'branchname';
		parms.interfaceId = 1016;
	} else if (myPosition == position.BRANCH|| myPosition == position.BRAND_MANAGER) {
		key = 'officename';
		parms.interfaceId = 1018;
	} else if (myPosition == position.OFFICE_MAN) {
		key = 'salername';
		parms.interfaceId = 1020;
	} else if (myPosition == position.SALES_MAN) {
		key = 'customername';
		parms.interfaceId = 1022;
	} else
		window.console.log('输入角色失败！');
	// delete parms.month;
	$
			.ajax({
				type : "POST",
				url : "/ptDataShow/echarts/postDataFromEs",
				data : parms,
				dataType : "json",
				success : function(data) {
					var storeRow = data.Rows;
					if (myPosition == position.SALES_MAN) {
						for ( var i in cusRow) {
							var html = '<div class="col-sm-4 problem" style="line-height:48px;">';
							html += '<div class="pull-left customer_name">'
									+ cusRow[i].customername + '</div>';
							html += '<div class="pull-left customer_tiv">';
							html += '<div class="col-xs-4 text-center"><span>拜访要求</span><h2 class="text1">'
									+ cusRow[i].requirementsByCus
									+ '</h2></div>';
							html += '<div class="col-xs-4 text-left"><span>拜访次数</span><h2 class="text2">'
									+ cusRow[i].signNumByCus + '</h2></div>';
							if(cusRow[i].requirementsByCus)
							    html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3">'
									+ Math.floor(100 * (cusRow[i].signNumByCus / cusRow[i].requirementsByCus))
									+ '%</h2></div>';
							else
								html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3"></h2></div>';
							html += '</div></div>';
							$("#myid").after(html);
						}
						for ( var i in storeRow) {
							var html = '<div class="col-sm-4 problem" style="line-height:48px;">';
							html += '<div class="pull-left customer_name">'
									+ storeRow[i].storename + '</div>';
							html += '<div class="pull-left customer_tiv">';
							html += '<div class="col-xs-4 text-center"><span>拜访要求</span><h2 class="text1">'
									+ storeRow[i].requirementsByStore
									+ '</h2></div>';
							html += '<div class="col-xs-4 text-left"><span>拜访次数</span><h2 class="text2">'
									+ storeRow[i].signNumByStore + '</h2></div>';
							if(storeRow[i].requirementsByStore)
							    html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3">'
									+ Math.floor(100 * (storeRow[i].signNumByStore / storeRow[i].requirementsByStore))
									+ '%</h2></div>';
							else
								html += '<div class="col-xs-4 text-left"><span>拜访达成率</span><h2 class="text3"></h2></div>';
							html += '</div></div>';
							$("#myid").after(html);
						}
					} else {
						var cusKeys = [];
						var rows = [];
						for ( var i in cusRow) {
							var row = cusRow[i];
							row.key = cusRow[i][key];
							row.storeNum = 0;
							row.signNumByStore = 0;
							row.requirementsByStore = 0;
							cusKeys.push(cusRow[i][key]);
							for ( var j in storeRow) {
								if (cusRow[i][key] == storeRow[j][key]) {
									row.storeNum = storeRow[j].storeNum;
									row.signNumByStore = storeRow[j].signNumByStore;
									row.requirementsByStore = storeRow[j].requirementsByStore;
									break;
								}
							}
							rows.push(row);
						}
						for ( var j in storeRow) {
							if (cusKeys.indexOf(storeRow[j][key]) == -1) {
								var row = storeRow[j];
								row.key = storeRow[j][key];
								row.userNum = 0;
								row.signNumByCus = 0;
								row.requirementsByCus = 0;
								rows.push(row);
							}
						}

						for ( var i in rows) {
							var row = rows[i];
							var html = "<tr>";
							html += "<td><a href='#'>"
									+ row[key]
											.replace(/[^\u4e00-\u9fa5]/gi, "")
									+ "</a></td>";
							html += "<td>" + row.requirementsByCus + "</td>";
							html += "<td>" + row.requirementsByStore + "</td>";
							html += "<td>" + row.signNumByCus + "</td>";
							html += "<td>" + row.signNumByStore + "</td>";
							if (row.requirementsByCus == 0)
								html += "<td></td>";
							else
								html += "<td>"+ Math.floor((row.signNumByCus / row.requirementsByCus) * 100)+ "%</td>";
							if (row.requirementsByStore == 0)
								html += "<td></td>";
							else
								html += "<td>"
										+ Math
												.floor((row.signNumByStore / row.requirementsByStore) * 100)
										+ "%</td>";
							html += "</tr>";
							if (i % 2 == 0) {
								$('.vis_left tbody').append(html);
							} else {
								$('.vis_right tbody').append(html);
							}
						}
					}
				},
				error : function(data) {
					window.console.log('get data error');
				}
			});
}