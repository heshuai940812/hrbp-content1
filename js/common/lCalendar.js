
window.lCalendar = (function() {
	var datePre = getDateStr(-1);
	var yyValPre = Number(datePre.split('-')[0].trim());
	//console.log(typeof yyValPre);
	var mmValPre = Number(datePre.split('-')[1].trim());
	var ddValPre = Number(datePre.split('-')[2].trim());
	var monthPre = getMonthStr(-1);
	var yyValPre_mon = Number(monthPre.split('-')[0].trim());
	var mmValPre_mon = Number(monthPre.split('-')[1].trim());
	var now = new Date();
	//var thisYear = now.getFullYear();
	//var yesterYear = thisYear - 1;
	var thisYear = yyValPre;
	var yesterYear = yyValPre - 1;
	//console.log(thisYear + "和" + yesterYear);
	//获取前n天的日期
	function getDateStr(addDayCount) { 
		var dd = new Date(); 
		dd.setDate(dd.getDate()+addDayCount);//获取AddDayCount天后的日期 
		var y = dd.getFullYear(); 
		var m = dd.getMonth() + 1;//获取当前月份的日期 
		var d = dd.getDate(); 
		return y+"-"+m+"-"+d; 
	} 
	//获取前n个月的日期
	function getMonthStr(addMonthCount) {
		var mm = new Date();
		mm.setMonth(mm.getMonth() + addMonthCount);
		var y = mm.getFullYear();
		var m = mm.getMonth() + 1;
		return y + "-" + m;
	}
	var MobileCalendar = function() {
		this.gearDate;
		this.minY = yesterYear;
		this.minM = 1,
			this.minD = 1,
			this.maxY = thisYear,
			this.maxM = 12,
			this.maxD = 31
	}
	MobileCalendar.prototype = {
		init: function(params) {
			this.type = params.type;
			this.trigger = document.querySelector(params.trigger);
			this.bindEvent(this.type);
		},
		bindEvent: function(type) {
			var _self = this;
			//_self.trigger.value = "2017-06-07";
			//呼出日期插件
			function popupDate(e) {
				_self.gearDate = document.createElement("div");
				_self.gearDate.className = "gearDate";
				_self.gearDate.innerHTML = 
				'<div class="date_ctrl">' +
					
					'<div class="date_roll_mask">' +
						'<div class="date_roll">' +
							'<div>' +
								'<div class="gear date_yy" data-datetype="date_yy"></div>' +
								'<div class="date_grid">' +
									'<div>年</div>' +
								'</div>' +
							'</div>' +
							'<div>' +
								'<div class="gear date_mm" data-datetype="date_mm"></div>' +
									'<div class="date_grid">' +
									'<div>月</div>' +
								'</div>' +
							'</div>' +
							'<div>' +
								'<div class="gear date_dd" data-datetype="date_dd"></div>' +
								'<div class="date_grid">' +
									'<div>日</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="date_btn_box">' +
						'<div class="date_btn lcalendar_cancel">取消</div>' +
						'<div class="date_btn lcalendar_finish">确定</div>' +
					'</div>' +
				'</div>';
				//document.body.appendChild(_self.gearDate);
				document.getElementById("loadICalendar").innerHTML = '';
				document.getElementById("loadICalendar").appendChild(_self.gearDate);
				dateCtrlInit();
				var lcalendar_cancel = _self.gearDate.querySelector(".lcalendar_cancel");
				lcalendar_cancel.addEventListener('touchstart', closeMobileCalendar);
				var lcalendar_finish = _self.gearDate.querySelector(".lcalendar_finish");
				lcalendar_finish.addEventListener('touchstart', finishMobileDate);
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var date_mm = _self.gearDate.querySelector(".date_mm");
				var date_dd = _self.gearDate.querySelector(".date_dd");
				date_yy.addEventListener('touchstart', gearTouchStart);
				date_mm.addEventListener('touchstart', gearTouchStart);
				date_dd.addEventListener('touchstart', gearTouchStart);
				date_yy.addEventListener('touchmove', gearTouchMove);
				date_mm.addEventListener('touchmove', gearTouchMove);
				date_dd.addEventListener('touchmove', gearTouchMove);
				date_yy.addEventListener('touchend', gearTouchEnd);
				date_mm.addEventListener('touchend', gearTouchEnd);
				date_dd.addEventListener('touchend', gearTouchEnd);
			}
			//初始化年月日插件默认值
			function dateCtrlInit() {
				var date = new Date();
				/*var dateArr = {
					yy: date.getYear(),
					mm: date.getMonth(),
					dd: date.getDate() - 1
				};*/
				//console.log(typeof date.getYear());
				console.log(date.getYear() + "-" + date.getMonth() + "-" + date.getDate());
				var dateArr = {
					yy: yyValPre - 1900,
					mm: mmValPre,
					dd: ddValPre - 1
				};
				console.log(yyValPre + "-" + mmValPre + "-" + ddValPre);
				if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(_self.trigger.value)) {
					//console.log(_self.trigger.value);
					rs = _self.trigger.value.match(/(^|-)\d{1,4}/g);
					//console.log(rs);
					dateArr.yy = rs[0] - _self.minY;
					dateArr.mm = rs[1].replace(/-/g, "") - 1;
					dateArr.dd = rs[2].replace(/-/g, "") - 1;
					//console.log(dateArr.mm);
				} else {
					dateArr.yy = dateArr.yy + 1900 - _self.minY;
				}
				_self.gearDate.querySelector(".date_yy").setAttribute("val", dateArr.yy);
				_self.gearDate.querySelector(".date_mm").setAttribute("val", dateArr.mm);
				_self.gearDate.querySelector(".date_dd").setAttribute("val", dateArr.dd);
				setDateGearTooth();
			}

			//呼出年月插件
			function popupMonth(e) {
				console.log("haha");
				_self.gearDate = document.createElement("div");
				_self.gearDate.className = "gearDate";
				_self.gearDate.innerHTML = 
				'<div class="date_ctrl">' +
					'<div class="date_roll_mask">' +
						'<div class="date_roll">' +
							'<div>' +
								'<div class="gear date_yy" data-datetype="date_yy"></div>' +
								'<div class="date_grid">' +
									'<div>年</div>' +
								'</div>' +
							'</div>' +
							'<div>' +
								'<div class="gear date_dd" data-datetype="date_dd"></div>' +
								'<div class="date_grid">' +
									'<div></div>' +
								'</div>' +
							'</div>' +
							'<div>' +
								'<div class="gear date_mm" data-datetype="date_mm"></div>' +
								'<div class="date_grid">' +
									'<div>月</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="date_btn_box">' +
						'<div class="date_btn lcalendar_cancel">取消</div>' +
						'<div class="date_btn lcalendar_finish">确定</div>' +
					'</div>' +
				'</div>';
				//document.body.appendChild(_self.gearDate);
				document.getElementById("loadICalendar").innerHTML = '';
				document.getElementById("loadICalendar").appendChild(_self.gearDate);
				MonthCtrlInit();
				var lcalendar_cancel = _self.gearDate.querySelector(".lcalendar_cancel");
				lcalendar_cancel.addEventListener('touchstart', closeMobileCalendar);
				var lcalendar_finish = _self.gearDate.querySelector(".lcalendar_finish");
				lcalendar_finish.addEventListener('touchstart', finishMobileMonth);
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var date_mm = _self.gearDate.querySelector(".date_mm");
				//var date_dd = _self.gearDate.querySelector(".date_dd");
				date_yy.addEventListener('touchstart', gearTouchStart);
				date_mm.addEventListener('touchstart', gearTouchStart);
				//date_dd.addEventListener('touchstart', gearTouchStart);
				date_yy.addEventListener('touchmove', gearTouchMove);
				date_mm.addEventListener('touchmove', gearTouchMove);
				//date_dd.addEventListener('touchmove', gearTouchMove);
				date_yy.addEventListener('touchend', gearTouchEnd);
				date_mm.addEventListener('touchend', gearTouchEnd);
				//date_dd.addEventListener('touchend', gearTouchEnd);
			}

			//初始化年月插件默认值
			function MonthCtrlInit() {
				var date = new Date();
				/*var dateArr = {
					yy: date.getYear(),
					mm: date.getMonth(),
					dd: date.getDate() - 1
				};*/
				var dateArr = {
					yy: yyValPre_mon - 1900,
					mm: mmValPre_mon - 1
				};
				if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(_self.trigger.value)) {
					rs = _self.trigger.value.match(/(^|-)\d{1,4}/g);
					dateArr.yy = rs[0] - _self.minY;
					dateArr.mm = rs[1].replace(/-/g, "") - 1;
					dateArr.dd = rs[2].replace(/-/g, "") - 1;
				} else {
					dateArr.yy = dateArr.yy + 1900 - _self.minY;
				}
				_self.gearDate.querySelector(".date_yy").setAttribute("val", dateArr.yy);
				_self.gearDate.querySelector(".date_mm").setAttribute("val", dateArr.mm);
				//_self.gearDate.querySelector(".date_dd").setAttribute("val", dateArr.dd);
				setMonthGearTooth();
			}

			//呼出年周插件
			function popupWeek(e) {
				_self.gearDate = document.createElement("div");
				_self.gearDate.className = "gearDate";
				_self.gearDate.innerHTML = '<div class="date_ctrl slideInUp">' +
					'<div class="date_btn_box">' +
					'<div class="date_btn lcalendar_cancel">取消</div>' +
					'<div class="date_btn lcalendar_finish">确定</div>' +
					'</div>' +
					'<div class="date_roll_mask">' +
					'<div class="date_roll">' +
					'<div>' +
					'<div class="gear date_yy" data-datetype="date_yy"></div>' +
					'<div class="date_grid">' +
					'<div>年</div>' +
					'</div>' +
					'</div>' +
					'<div>' +
					'<div class="gear date_dd" data-datetype="date_dd"></div>' +
					'<div class="date_grid">' +
					'<div></div>' +
					'</div>' +
					'</div>' +
					'<div>' +
					'<div class="gear date_mm" data-datetype="date_mm"></div>' +
					'<div class="date_grid">' +
					'<div>周</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>';
				document.body.appendChild(_self.gearDate);
				WeekCtrlInit();
				var lcalendar_cancel = _self.gearDate.querySelector(".lcalendar_cancel");
				lcalendar_cancel.addEventListener('touchstart', closeMobileCalendar);
				var lcalendar_finish = _self.gearDate.querySelector(".lcalendar_finish");
				lcalendar_finish.addEventListener('touchstart', finishMobileWeek);
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var date_mm = _self.gearDate.querySelector(".date_mm");
				//var date_dd = _self.gearDate.querySelector(".date_dd");
				date_yy.addEventListener('touchstart', gearTouchStart);
				date_mm.addEventListener('touchstart', gearTouchStart);
				//date_dd.addEventListener('touchstart', gearTouchStart);
				date_yy.addEventListener('touchmove', gearTouchMove);
				date_mm.addEventListener('touchmove', gearTouchMove);
				//date_dd.addEventListener('touchmove', gearTouchMove);
				date_yy.addEventListener('touchend', gearTouchEnd);
				date_mm.addEventListener('touchend', gearTouchEnd);
				//date_dd.addEventListener('touchend', gearTouchEnd);
			}
			//初始化年周默认插值
			function WeekCtrlInit() {
				var date = new Date();
				var dateArr = {
					yy: date.getYear(),
					mm: date.getMonth(),
					dd: date.getDate() - 1
				};
				if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(_self.trigger.value)) {
					rs = _self.trigger.value.match(/(^|-)\d{1,4}/g);
					dateArr.yy = rs[0] - _self.minY;
					dateArr.mm = rs[1].replace(/-/g, "") - 1;
					dateArr.dd = rs[2].replace(/-/g, "") - 1;
				} else {
					dateArr.yy = dateArr.yy + 1900 - _self.minY;
				}
				_self.gearDate.querySelector(".date_yy").setAttribute("val", dateArr.yy);
				_self.gearDate.querySelector(".date_mm").setAttribute("val", dateArr.mm);
				//_self.gearDate.querySelector(".date_dd").setAttribute("val", dateArr.dd);
				setDateGearTooth();
			}

			//呼出年季度插件
			function popupQuarter(e) {
				_self.gearDate = document.createElement("div");
				_self.gearDate.className = "gearDate";
				_self.gearDate.innerHTML = '<div class="date_ctrl slideInUp">' +
					'<div class="date_btn_box">' +
					'<div class="date_btn lcalendar_cancel">取消</div>' +
					'<div class="date_btn lcalendar_finish">确定</div>' +
					'</div>' +
					'<div class="date_roll_mask">' +
					'<div class="date_roll">' +
					'<div>' +
					'<div class="gear date_yy" data-datetype="date_yy"></div>' +
					'<div class="date_grid">' +
					'<div>年</div>' +
					'</div>' +
					'</div>' +
					'<div>' +
					'<div class="gear date_dd" data-datetype="date_dd"></div>' +
					'<div class="date_grid">' +
					'<div></div>' +
					'</div>' +
					'</div>' +
					'<div>' +
					'<div class="gear date_quarter" data-datetype="date_quarter"></div>' +
					'<div class="date_grid">' +
					'<div>季度</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>';
				document.body.appendChild(_self.gearDate);
				quarterCtrlInit();
				var lcalendar_cancel = _self.gearDate.querySelector(".lcalendar_cancel");
				lcalendar_cancel.addEventListener('touchstart', closeMobileCalendar);
				var lcalendar_finish = _self.gearDate.querySelector(".lcalendar_finish");
				lcalendar_finish.addEventListener('touchstart', finishMobileQuarter);
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var date_quarter = _self.gearDate.querySelector(".date_quarter");
				//var date_dd = _self.gearDate.querySelector(".date_dd");
				date_yy.addEventListener('touchstart', gearTouchStart);
				date_quarter.addEventListener('touchstart', gearTouchStart);
				//date_dd.addEventListener('touchstart', gearTouchStart);
				date_yy.addEventListener('touchmove', gearTouchMove);
				date_quarter.addEventListener('touchmove', gearTouchMove);
				//date_dd.addEventListener('touchmove', gearTouchMove);
				date_yy.addEventListener('touchend', gearTouchEnd);
				date_quarter.addEventListener('touchend', gearTouchEnd);
				//date_dd.addEventListener('touchend', gearTouchEnd);
			}
			//初始化年季度默认插值
			function quarterCtrlInit() {
				var date = new Date();
				var dateArr = {
					yy: date.getYear(),
					mm: date.getMonth(),
					dd: date.getDate() - 1
				};
				if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(_self.trigger.value)) {
					rs = _self.trigger.value.match(/(^|-)\d{1,4}/g);
					dateArr.yy = rs[0] - _self.minY;
					dateArr.mm = rs[1].replace(/-/g, "") - 1;
					dateArr.dd = rs[2].replace(/-/g, "") - 1;
				} else {
					dateArr.yy = dateArr.yy + 1900 - _self.minY;
				}
				_self.gearDate.querySelector(".date_yy").setAttribute("val", dateArr.yy);
				_self.gearDate.querySelector(".date_quarter").setAttribute("val", dateArr.mm);
				//_self.gearDate.querySelector(".date_dd").setAttribute("val", dateArr.dd);
				setQuarterGearTooth();
			}
			
			//重置日期节点个数
			function setDateGearTooth() {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var itemStr = "";
				
				console.log(yyValPre);
				if (date_yy && date_yy.getAttribute("val")) {
					//得到年份的值
					console.log(parseInt(date_yy.getAttribute("val")));
					var yyVal = parseInt(date_yy.getAttribute("val"));
					//p 当前节点前后需要展示的节点个数
					for (var p = 0; p <= passY - 1; p++) {
						itemStr += "<div class='tooth'>" + (_self.minY + p) + "</div>";
					}
					date_yy.innerHTML = itemStr;
					var top = Math.floor(parseFloat(date_yy.getAttribute('top')));
					if (!isNaN(top)) {
						top % 2 == 0 ? (top = top) : (top = top + 1);
						top > 8 && (top = 8);
						var minTop = 8 - (passY - 1) * 2;
						top < minTop && (top = minTop);
						date_yy.style["-webkit-transform"] = 'translate3d(0,' + top + 'em,0)';
						date_yy.setAttribute('top', top + 'em');
						yyVal = Math.abs(top - 8) / 2;
						date_yy.setAttribute("val", yyVal);
					} else {
						date_yy.style["-webkit-transform"] = 'translate3d(0,' + (8 - yyVal * 2) + 'em,0)';
						date_yy.setAttribute('top', 8 - yyVal * 2 + 'em');
					}
				} else {
					return;
				}
				//var nowDate = new Date();
				var date_mm = _self.gearDate.querySelector(".date_mm");
				if (date_mm && date_mm.getAttribute("val")) {
					itemStr = "";
					//得到月份的值
					var mmVal = parseInt(date_mm.getAttribute("val"));
					
					var maxM = 11;
					//var maxM = nowDate.getMonth();
					//console.log(maxM);
					var minM = 0;
					//当年份到达最大值
					if (yyVal == passY - 1) {
						//maxM = _self.maxM - 1;
						//maxM = now.getMonth();
						if(_self.type == "month") {
							maxM = mmValPre_mon - 1;
						}else {
							maxM = mmValPre - 1;
						}
						
					}
					//当年份到达最小值
					if (yyVal == 0) {
						minM = _self.minM - 1;
					}
					//p 当前节点前后需要展示的节点个数
					for (var p = 0; p < maxM - minM + 1; p++) {
						itemStr += "<div class='tooth'>" + (minM + p + 1) + "</div>";
					}
					date_mm.innerHTML = itemStr;
					if (mmVal > maxM) {
						mmVal = maxM;
						date_mm.setAttribute("val", mmVal);
					} else if (mmVal < minM) {
						mmVal = maxM;
						date_mm.setAttribute("val", mmVal);
					}
					date_mm.style["-webkit-transform"] = 'translate3d(0,' + (8 - (mmVal - minM) * 2) + 'em,0)';
					date_mm.setAttribute('top', 8 - (mmVal - minM) * 2 + 'em');
				} else {
					return;
				}
				var date_dd = _self.gearDate.querySelector(".date_dd");
				if (date_dd && date_dd.getAttribute("val")) {
					itemStr = "";
					//得到日期的值
					var ddVal = parseInt(date_dd.getAttribute("val"));
					//返回月份的天数
					var maxMonthDays = calcDays(yyVal, mmVal);
					//p 当前节点前后需要展示的节点个数
					var maxD = maxMonthDays - 1;
					//console.log(now.getDate());
					var minD = 0;
					//如果当前年份是最大值，将月份最大值设为当前月份
					if(yyVal == passY - 1) {
						//_self.maxM = now.getMonth() + 1;
						_self.maxM = mmValPre;
					}
					//当年份月份到达最大值
					//console.log(yyVal == passY - 1);
					//console.log(_self.maxM == mmVal + 1);

					if (yyVal == passY - 1 && _self.maxM == mmVal + 1) {
						//maxD = _self.maxD - 1;
						//debugger;
						//console.log(now.getDate());
						//maxD = now.getDate() - 1;
						maxD = ddValPre - 1;
					}
					//当年、月到达最小值
					if (yyVal == 0 && _self.minM == mmVal + 1) {
						minD = _self.minD - 1;
					}
					for (var p = 0; p < maxD - minD + 1; p++) {
						itemStr += "<div class='tooth'>" + (minD + p + 1) + "</div>";
					}
					date_dd.innerHTML = itemStr;
					if (ddVal > maxD) {
						ddVal = maxD;
						date_dd.setAttribute("val", ddVal);
					} else if (ddVal < minD) {
						ddVal = minD;
						date_dd.setAttribute("val", ddVal);
					}
					date_dd.style["-webkit-transform"] = 'translate3d(0,' + (8 - (ddVal - minD) * 2) + 'em,0)';
					date_dd.setAttribute('top', 8 - (ddVal - minD) * 2 + 'em');
				} else {
					return;
				}
			}
			//重置年月节点个数
			function setMonthGearTooth() {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var itemStr = "";
				if (date_yy && date_yy.getAttribute("val")) {
					//得到年份的值
					var yyVal = parseInt(date_yy.getAttribute("val"));
					//p 当前节点前后需要展示的节点个数
					for (var p = 0; p <= passY - 1; p++) {
						itemStr += "<div class='tooth'>" + (_self.minY + p) + "</div>";
					}
					date_yy.innerHTML = itemStr;
					var top = Math.floor(parseFloat(date_yy.getAttribute('top')));
					if (!isNaN(top)) {
						top % 2 == 0 ? (top = top) : (top = top + 1);
						top > 8 && (top = 8);
						var minTop = 8 - (passY - 1) * 2;
						top < minTop && (top = minTop);
						date_yy.style["-webkit-transform"] = 'translate3d(0,' + top + 'em,0)';
						date_yy.setAttribute('top', top + 'em');
						yyVal = Math.abs(top - 8) / 2;
						date_yy.setAttribute("val", yyVal);
					} else {
						date_yy.style["-webkit-transform"] = 'translate3d(0,' + (8 - yyVal * 2) + 'em,0)';
						date_yy.setAttribute('top', 8 - yyVal * 2 + 'em');
					}
				} else {
					return;
				}
				var date_mm = _self.gearDate.querySelector(".date_mm");
				if (date_mm && date_mm.getAttribute("val")) {
					itemStr = "";
					//得到月份的值
					var mmVal = parseInt(date_mm.getAttribute("val"));
					var maxM = 11;
					var minM = 0;
					//当年份到达最大值
					if (yyVal == passY - 1) {
						//maxM = _self.maxM - 1;
						//maxM = now.getMonth();
						maxM = mmValPre_mon - 1;
					}
					//当年份到达最小值
					if (yyVal == 0) {
						minM = _self.minM - 1;
					}
					console.log("maxM:" + maxM + "minM:" + minM);
					//p 当前节点前后需要展示的节点个数
					for (var p = 0; p < maxM - minM + 1; p++) {
						itemStr += "<div class='tooth'>" + (minM + p + 1) + "</div>";
					}
					date_mm.innerHTML = itemStr;
					if (mmVal > maxM) {
						mmVal = maxM;
						date_mm.setAttribute("val", mmVal);
					} else if (mmVal < minM) {
						mmVal = maxM;
						date_mm.setAttribute("val", mmVal);
					}
					date_mm.style["-webkit-transform"] = 'translate3d(0,' + (8 - (mmVal - minM) * 2) + 'em,0)';
					date_mm.setAttribute('top', 8 - (mmVal - minM) * 2 + 'em');
				} else {
					return;
				}
			}
			//重置年季度节点个数
			function setQuarterGearTooth() {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = _self.gearDate.querySelector(".date_yy");
				var itemStr = "";
				if (date_yy && date_yy.getAttribute("val")) {
					//得到年份的值
					var yyVal = parseInt(date_yy.getAttribute("val"));
					//p 当前节点前后需要展示的节点个数
					for (var p = 0; p <= passY - 1; p++) {
						itemStr += "<div class='tooth'>" + (_self.minY + p) + "</div>";
					}
					date_yy.innerHTML = itemStr;
					var top = Math.floor(parseFloat(date_yy.getAttribute('top')));
					if (!isNaN(top)) {
						top % 2 == 0 ? (top = top) : (top = top + 1);
						top > 8 && (top = 8);
						var minTop = 8 - (passY - 1) * 2;
						top < minTop && (top = minTop);
						date_yy.style["-webkit-transform"] = 'translate3d(0,' + top + 'em,0)';
						date_yy.setAttribute('top', top + 'em');
						yyVal = Math.abs(top - 8) / 2;
						date_yy.setAttribute("val", yyVal);
					} else {
						date_yy.style["-webkit-transform"] = 'translate3d(0,' + (8 - yyVal * 2) + 'em,0)';
						date_yy.setAttribute('top', 8 - yyVal * 2 + 'em');
					}
				} else {
					return;
				}
				var date_quarter = _self.gearDate.querySelector(".date_quarter");
				if (date_quarter && date_quarter.getAttribute("val")) {
					itemStr = "";
					//得到月份的值
					var mmVal = parseInt(date_quarter.getAttribute("val"));
					var maxM = 11;
					var minM = 0;
					//当年份到达最大值
					if (yyVal == passY - 1) {
						maxM = _self.maxM - 1;
					}
					//当年份到达最小值
					if (yyVal == 0) {
						minM = _self.minM - 1;
					}
					//p 当前节点前后需要展示的节点个数
					for (var p = 0; p < maxM - minM + 1; p++) {
						itemStr += "<div class='tooth'>" + (minM + p + 1) + "</div>";
					}
					date_quarter.innerHTML = itemStr;
					if (mmVal > maxM) {
						mmVal = maxM;
						date_quarter.setAttribute("val", mmVal);
					} else if (mmVal < minM) {
						mmVal = maxM;
						date_quarter.setAttribute("val", mmVal);
					}
					date_quarter.style["-webkit-transform"] = 'translate3d(0,' + (8 - (mmVal - minM) * 2) + 'em,0)';
					date_quarter.setAttribute('top', 8 - (mmVal - minM) * 2 + 'em');
				} else {
					return;
				}
			}
			//重置时间节点个数
			function setTimeGearTooth() {
				var time_hh = _self.gearDate.querySelector(".time_hh");
				if (time_hh && time_hh.getAttribute("val")) {
					var i = "";
					var hhVal = parseInt(time_hh.getAttribute("val"));
					for (var g = 0; g <= 23; g++) {
						i += "<div class='tooth'>" + g + "</div>";
					}
					time_hh.innerHTML = i;
					time_hh.style["-webkit-transform"] = 'translate3d(0,' + (8 - hhVal * 2) + 'em,0)';
					time_hh.setAttribute('top', 8 - hhVal * 2 + 'em');
				} else {
					return
				}
				var time_mm = _self.gearDate.querySelector(".time_mm");
				if (time_mm && time_mm.getAttribute("val")) {
					var i = "";
					var mmVal = parseInt(time_mm.getAttribute("val"));
					for (var g = 0; g <= 59; g++) {
						i += "<div class='tooth'>" + g + "</div>";
					}
					time_mm.innerHTML = i;
					time_mm.style["-webkit-transform"] = 'translate3d(0,' + (8 - mmVal * 2) + 'em,0)';
					time_mm.setAttribute('top', 8 - mmVal * 2 + 'em');
				} else {
					return
				}
				
				var time_ss = _self.gearDate.querySelector(".time_ss");
				if (time_ss && time_ss.getAttribute("val")) {
					var i = "";
					var mmVal = parseInt(time_ss.getAttribute("val"));
					for (var g = 0; g <= 59; g++) {
						i += "<div class='tooth'>" + g + "</div>";
					}
					time_ss.innerHTML = i;
					time_ss.style["-webkit-transform"] = 'translate3d(0,' + (8 - mmVal * 2) + 'em,0)';
					time_ss.setAttribute('top', 8 - mmVal * 2 + 'em');
				} else {
					return
				}
			}
			//求月份最大天数
			function calcDays(year, month) {
				if (month == 1) {
					year += _self.minY;
					if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year % 4000 != 0)) {
						return 29;
					} else {
						return 28;
					}
				} else {
					if (month == 3 || month == 5 || month == 8 || month == 10) {
						return 30;
					} else {
						return 31;
					}
				}
			}
			//触摸开始
			function gearTouchStart(e) {
				e.preventDefault();
				var target = e.target;
				while (true) {
					if (!target.classList.contains("gear")) {
						target = target.parentElement;
					} else {
						break
					}
				}
				clearInterval(target["int_" + target.id]);
				target["old_" + target.id] = e.targetTouches[0].screenY;
				target["o_t_" + target.id] = (new Date()).getTime();
				var top = target.getAttribute('top');
				if (top) {
					target["o_d_" + target.id] = parseFloat(top.replace(/em/g, ""));
				} else {
					target["o_d_" + target.id] = 0;
				}
			}
			//手指移动
			function gearTouchMove(e) {
				e.preventDefault();
				var target = e.target;
				while (true) {
					if (!target.classList.contains("gear")) {
						target = target.parentElement;
					} else {
						break
					}
				}
				target["new_" + target.id] = e.targetTouches[0].screenY;
				target["n_t_" + target.id] = (new Date()).getTime();
				//var f = (target["new_" + target.id] - target["old_" + target.id]) * 18 / target.clientHeight;
				var f = (target["new_" + target.id] - target["old_" + target.id]) * 18 / 370;
				target["pos_" + target.id] = target["o_d_" + target.id] + f;
				target.style["-webkit-transform"] = 'translate3d(0,' + target["pos_" + target.id] + 'em,0)';
				target.setAttribute('top', target["pos_" + target.id] + 'em');
			}
			//离开屏幕
			function gearTouchEnd(e) {
				e.preventDefault();
				var target = e.target;
				while (true) {
					if (!target.classList.contains("gear")) {
						target = target.parentElement;
					} else {
						break;
					}
				}
				var flag = (target["new_" + target.id] - target["old_" + target.id]) / (target["n_t_" + target.id] - target["o_t_" + target.id]);
				if (Math.abs(flag) <= 0.2) {
					target["spd_" + target.id] = (flag < 0 ? -0.08 : 0.08);
				} else {
					if (Math.abs(flag) <= 0.5) {
						target["spd_" + target.id] = (flag < 0 ? -0.16 : 0.16);
					} else {
						target["spd_" + target.id] = flag / 2;
					}
				}
				if (!target["pos_" + target.id]) {
					target["pos_" + target.id] = 0;
				}
				rollGear(target);
			}
			//缓动效果
			function rollGear(target) {
				var d = 0;
				var stopGear = false;
				var passY = _self.maxY - _self.minY + 1;
				//var nowDate = new Date();
				clearInterval(target["int_" + target.id]);
				target["int_" + target.id] = setInterval(function() {
					var pos = target["pos_" + target.id];
					var speed = target["spd_" + target.id] * Math.exp(-0.03 * d);
					pos += speed;
					if (Math.abs(speed) > 0.1) {} else {
						speed = 0.1;
						var b = Math.round(pos / 2) * 2;
						if (Math.abs(pos - b) < 0.02) {
							stopGear = true;
						} else {
							if (pos > b) {
								pos -= speed
							} else {
								pos += speed
							}
						}
					}
					if (pos > 8) {
						pos = 8;
						stopGear = true;
					}
					switch (target.dataset.datetype) {
						case "date_yy":
							var minTop = 8 - (passY - 1) * 2;
							if (pos < minTop) {
								pos = minTop;
								stopGear = true;
							}
							if (stopGear) {
								var gearVal = Math.abs(pos - 8) / 2;
								setGear(target, gearVal);
								clearInterval(target["int_" + target.id]);
							}
							break;
						case "date_mm":
							var date_yy = _self.gearDate.querySelector(".date_yy");
							//得到年份的值
							var yyVal = parseInt(date_yy.getAttribute("val"));
							var maxM = 11;
							var minM = 0;
							
							//当年份到达最大值
							if (yyVal == passY - 1) {
								//maxM = _self.maxM - 1;
								//maxM = now.getMonth();
								//console.log(_self.type);
								if(_self.type == "month") {
									maxM = mmValPre_mon - 1;
								}else{
									maxM = mmValPre - 1;
								}
							}
							//当年份到达最小值
							if (yyVal == 0) {
								minM = _self.minM - 1;
							}
							var minTop = 8 - (maxM - minM) * 2;
							if (pos < minTop) {
								pos = minTop;
								stopGear = true;
							}
							if (stopGear) {
								var gearVal = Math.abs(pos - 8) / 2 + minM;
								setGear(target, gearVal);
								clearInterval(target["int_" + target.id]);
							}
							break;
						case "date_dd":
							var date_yy = _self.gearDate.querySelector(".date_yy");
							var date_mm = _self.gearDate.querySelector(".date_mm");
							//得到年份的值
							var yyVal = parseInt(date_yy.getAttribute("val"));
							//得到月份的值
							var mmVal = parseInt(date_mm.getAttribute("val"));
							//返回月份的天数
							var maxMonthDays = calcDays(yyVal, mmVal);
							var maxD = maxMonthDays - 1;
							var minD = 0;
							//如果当前年份是最大值，将月份最大值设为当前月份
							if(yyVal == passY - 1) {
								//_self.maxM = now.getMonth() + 1;
								_self.maxM = mmValPre ;
							}
							//当年份月份到达最大值
							if (yyVal == passY - 1 && _self.maxM == mmVal + 1) {
								//maxD = _self.maxD - 1;
								//console.log(now.getDate());
								//maxD = now.getDate() - 1;
								maxD = ddValPre - 1;
							}
							//当年、月到达最小值
							if (yyVal == 0 && _self.minM == mmVal + 1) {
								minD = _self.minD - 1;
							}
							var minTop = 8 - (maxD - minD) * 2;
							if (pos < minTop) {
								pos = minTop;
								stopGear = true;
							}
							if (stopGear) {
								var gearVal = Math.abs(pos - 8) / 2 + minD;
								setGear(target, gearVal);
								clearInterval(target["int_" + target.id]);
							}
							break;
						case "time_hh":
							if (pos < -38) {
								pos = -38;
								stopGear = true;
							}
							if (stopGear) {
								var gearVal = Math.abs(pos - 8) / 2;
								setGear(target, gearVal);
								clearInterval(target["int_" + target.id]);
							}
							break;
						case "time_mm":
							if (pos < -110) {
								pos = -110;
								stopGear = true;
							}
							if (stopGear) {
								var gearVal = Math.abs(pos - 8) / 2;
								setGear(target, gearVal);
								clearInterval(target["int_" + target.id]);
							}
							break;
						case "time_ss":
							if (pos < -110) {
								pos = -110;
								stopGear = true;
							}
							if (stopGear) {
								var gearVal = Math.abs(pos - 8) / 2;
								setGear(target, gearVal);
								clearInterval(target["int_" + target.id]);
							}
							break;
						default:
					}
					target["pos_" + target.id] = pos;
					target.style["-webkit-transform"] = 'translate3d(0,' + pos + 'em,0)';
					target.setAttribute('top', pos + 'em');
					d++;
				}, 30);
			}
			//控制插件滚动后停留的值
			function setGear(target, val) {
				val = Math.round(val);
				target.setAttribute("val", val);
				if (/date/.test(target.dataset.datetype)) {
					setDateGearTooth();
				} else {
					setTimeGearTooth();
				}
			}
			//取消
			function closeMobileCalendar(e) {
				e.preventDefault();
				var evt = new CustomEvent('input');
				_self.trigger.dispatchEvent(evt);
				//document.body.removeChild(_self.gearDate);
				document.getElementById("loadICalendar").removeChild(_self.gearDate);
			}
			//日期确认
			function finishMobileDate(e) {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = parseInt(Math.round(_self.gearDate.querySelector(".date_yy").getAttribute("val")));
				var date_mm = parseInt(Math.round(_self.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
				date_mm = date_mm > 9 ? date_mm : '0' + date_mm;
				var date_dd = parseInt(Math.round(_self.gearDate.querySelector(".date_dd").getAttribute("val"))) + 1;
				date_dd = date_dd > 9 ? date_dd : '0' + date_dd;
				_self.trigger.value = (date_yy % passY + _self.minY) + "-" + date_mm + "-" + date_dd;
				var date_year = date_yy % passY + _self.minY;
                // console.log("年:"+date_year);
                // console.log("月:"+date_mm);
                // console.log("日:"+date_dd);
                $("#dateDropDown").stop().slideUp();
                $(".base-rhead .icon-xiala").removeClass("icon-shangla");
                $(".base-header").removeClass("backgroundThree");
                $(".data-closedrop").fadeOut();
                setItem("getDate", date_year+date_mm+date_dd);
                formDataDay(date_year+date_mm+date_dd);
                $("#month").html(date_year+"."+date_mm+"."+date_dd);
                document.getElementById("dateFlag").value = "true";
                //closeMobileCalendar(e);
			}
			//月份确认
			function finishMobileMonth(e) {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = parseInt(Math.round(_self.gearDate.querySelector(".date_yy").getAttribute("val")));
				var date_mm = parseInt(Math.round(_self.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
				date_mm = date_mm > 9 ? date_mm : '0' + date_mm;
				_self.trigger.value = (date_yy % passY + _self.minY) + "-" + date_mm ;
				var date_year = date_yy % passY + _self.minY;
                // console.log("年:"+date_year);
                // console.log("月:"+date_mm);
                $("#dateDropDown").stop().slideUp();
                $(".base-rhead .icon-xiala").removeClass("icon-shangla");
                $(".base-header").removeClass("backgroundThree");
                $(".data-closedrop").fadeOut();
                setItem("getDate", date_year+date_mm);
                formDataMouth(date_year+date_mm);
                $("#month").html(date_year+"."+date_mm);
                document.getElementById("monthFlag").value = "true";
                //closeMobileCalendar(e);
			}
			//季度确认
			function finishMobileQuarter(e) {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = parseInt(Math.round(_self.gearDate.querySelector(".date_yy").getAttribute("val")));
				var date_quarter = parseInt(Math.round(_self.gearDate.querySelector(".date_quarter").getAttribute("val"))) + 1;
				date_quarter = date_quarter > 9 ? date_quarter : '0' + date_quarter;
				_self.trigger.value = (date_yy % passY + _self.minY) + "-" + date_quarter ;
				closeMobileCalendar(e);
			}
			//周确认
			function finishMobileWeek(e) {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = parseInt(Math.round(_self.gearDate.querySelector(".date_yy").getAttribute("val")));
				var date_mm = parseInt(Math.round(_self.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
				date_mm = date_mm > 9 ? date_mm : '0' + date_mm;
				_self.trigger.value = (date_yy % passY + _self.minY) + "-" + date_mm ;
				closeMobileCalendar(e);
			}
			//日期时间确认
			function finishMobileDateTime(e) {
				var passY = _self.maxY - _self.minY + 1;
				var date_yy = parseInt(Math.round(_self.gearDate.querySelector(".date_yy").getAttribute("val")));
				var date_mm = parseInt(Math.round(_self.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
				date_mm = date_mm > 9 ? date_mm : '0' + date_mm;
				var date_dd = parseInt(Math.round(_self.gearDate.querySelector(".date_dd").getAttribute("val"))) + 1;
				date_dd = date_dd > 9 ? date_dd : '0' + date_dd;
				var time_hh = parseInt(Math.round(_self.gearDate.querySelector(".time_hh").getAttribute("val")));
				time_hh = time_hh > 9 ? time_hh : '0' + time_hh;
				var time_mm = parseInt(Math.round(_self.gearDate.querySelector(".time_mm").getAttribute("val")));
				time_mm = time_mm > 9 ? time_mm : '0' + time_mm;
				_self.trigger.value = (date_yy % passY + _self.minY) + "-" + date_mm + "-" + date_dd + " " + (time_hh.length < 2 ? "0" : "") + time_hh + (time_mm.length < 2 ? ":0" : ":") + time_mm;
				closeMobileCalendar(e);
			}
			//时间确认
			function finishMobileTime(e) {
				var time_hh = parseInt(Math.round(_self.gearDate.querySelector(".time_hh").getAttribute("val")));
				time_hh = time_hh > 9 ? time_hh : '0' + time_hh;
				var time_mm = parseInt(Math.round(_self.gearDate.querySelector(".time_mm").getAttribute("val")));
				time_mm = time_mm > 9 ? time_mm : '0' + time_mm;
				
				var time_ss = parseInt(Math.round(_self.gearDate.querySelector(".time_ss").getAttribute("val")));
				time_ss = time_ss > 9 ? time_ss : '0' + time_ss;
				
				
				_self.trigger.value = (time_hh.length < 2 ? "0" : "") + time_hh + (time_mm.length < 2 ? ":0" : ":") + time_mm+ (time_ss.length < 2 ? ":0" : ":") + time_ss;
				closeMobileCalendar(e);
			}
			
			
			_self.trigger.addEventListener('click', function() {
				var dateFlag = document.getElementById("dateFlag").value;
				var monthFlag = document.getElementById("monthFlag").value;
				//debugger;
				switch (type) {
					case "date":
						if(dateFlag == "false") {
							popupDate();
							
						}
						break;
					case "month":
						if(monthFlag == "false") {
							popupMonth();
						}
						break;
					default:
						return;
				}
			});
		}
	}
	return MobileCalendar;
})()