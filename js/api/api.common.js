// API系列
// var projectDomain = 'http://www.ixiaoru.com/bigdata-hrbp-service';
var projectDomain = 'https://42.123.106.20:8081/bigdata-hrbp-service';

// 格式化系列
var DATE_YYYYMMDD = 'yyyyMMdd';
var DATE_MONTH_YYYYMM = 'yyyyMM';
var CTSI_API_JSON;
// 对比系列
var CONTRAST_HTMLDOMAIN = 'http://www.ixiaoru.com';
var ANALY_POSITIONCHANGECONTRAST_URL = '/hrbp-content/view/analy/positionChangeContrast.html';
var ANALY_ZAIGANGABNORMAL_URL = '/hrbp-content/view/analy/zaiGangAbnormal.html';
var NORM_LIGANGCONTRAST_URL = '/hrbp-content/view/norm/liGangContrast.html';
var NORM_WORKSTANDARDCONTRAST_URL = '/hrbp-content/view/norm/workStandardContrast.html';
var NORM_ZENGGANGCONTRAST_URL = '/hrbp-content/view/norm/zengGangContrast.html';
var POTENCY_TASKPERFORMCONTRAST_URL = '/hrbp-content/view/potency/taskPerformContrast.html';
// 参数
var INDEX_RED = 60;

/**
 * 比例图2.
 *
 * @param id
 * @param leftname
 * @param centername
 * @param lchar
 * @param zchar
 * @param numId1
 * @param numId2
 */
function scaleMap2(id, leftname, centername, lchar, zchar, numId1, numId2) {
  h_scale({
    idname: id,
    leftname: leftname,
    centername: centername,
    lchar: lchar,
    zchar: zchar,
    numId1: numId1,
    numId2: numId2
  });
}

/**
 * 比例图2.
 *
 * @param leftname
 * @param centername
 * @param lchar
 * @param zchar
 * @param id
 * @param numId1
 * @param numId2
 */
function scaleMap2Stage(id, leftname, centername, lchar, zchar, numId1,
    numId2) {
  stage_scale({
    idname: id,
    leftname: leftname,
    centername: centername,
    lchar: lchar,
    zchar: zchar,
    numId1: numId1,
    numId2: numId2
  });
}

/**
 * 比例图3.
 *
 * @param id
 * @param leftname
 * @param centername
 * @param rightname
 * @param lchar
 * @param zchar
 * @param rchar
 * @param numId1
 * @param numId2
 * @param numId3
 */
function scaleMap3(id, leftname, centername, rightname, lchar, zchar, rchar,
    numId1, numId2, numId3) {
  h_scale({
    idname: id,
    leftname: leftname,
    centername: centername,
    rightname: rightname,
    lchar: lchar,
    zchar: zchar,
    rchar: rchar,
    numId1: numId1,
    numId2: numId2,
    numId3: numId3
  });
}

/**
 * 比例图5.
 * @param id
 * @param nameOne
 * @param nameTwo
 * @param nameThree
 * @param nameFour
 * @param nameFive
 * @param charOne
 * @param charTwo
 * @param charThree
 * @param charFour
 * @param charFive
 * @param numId1
 * @param numId2
 * @param numId3
 * @param numId4
 * @param numId5
 */
function scaleMap5(id, nameOne, nameTwo, nameThree, nameFour, nameFive, charOne,
    charTwo, charThree, charFour, charFive,
    numId1, numId2, numId3, numId4, numId5) {
  jonPotency({
    idname: id,
    rate1: nameOne,
    rate2: nameTwo,
    rate3: nameThree,
    rate4: nameFour,
    rate5: nameFive,
    num1: charOne,
    num2: charTwo,
    num3: charThree,
    num4: charFour,
    num5: charFive,
    numId1: numId1,
    numId2: numId2,
    numId3: numId3,
    numId4: numId4,
    numId5: numId5
  });
}

/**
 * 柱状图-多柱-百分比.
 *
 * @param id
 * @param dataName
 * @param data
 * @param rightData
 * @param nameone
 * @param nametwo
 */
function changeColumar(id, dataName, data, rightData, nameone, nametwo) {
  columnar({
    idname: id,
    dataname: dataName,
    leftData: data,
    rightData: rightData,
    splitArea: true,
    topshow: false,
    nameone: nameone,
    nametwo: nametwo
  });
}

/**
 * 柱状图-多柱-单位：人数.
 *
 * @param id
 * @param dataName
 * @param data
 * @param rightData
 * @param nameone
 * @param nametwo
 */
function changeColumarTitle2(id, dataName, data, rightData, nameone, nametwo) {
  columnar_two({
    idname: id,
    dataname: dataName,
    leftData: data,
    rightData: rightData,
    splitArea: true,
    topshow: false,
    nameone: nameone,
    nametwo: nametwo
  });
}

/**
 * 柱状图-多柱.
 *
 * @param id
 * @param dataName
 * @param data
 * @param rightData
 * @param threeData
 * @param nameone
 * @param nametwo
 * @param namethree
 */
function changeColumar3(id, dataName, data, rightData, threeData, nameone,
    nametwo, namethree) {
  columnar_three({
    idname: id,
    dataname: dataName,
    leftData: data,
    rightData: rightData,
    threeData: threeData,
    splitArea: true,
    topshow: false,
    nameone: nameone,
    nametwo: nametwo,
    namethree: namethree
  });
}
/**
 * 柱状图-多柱.
 *
 * @param id
 * @param dataName
 * @param data
 * @param rightData
 * @param threeData
 * @param fourData
 * @param fiveData
 * @param nameone
 * @param nametwo
 * @param namethree
 * @param namefour
 * @param namefive
 */
function changeColumar5(id, dataName, data, rightData, threeData, fourData,
    fiveData, nameone, nametwo, namethree, namefour, namefive) {
  columnar_five({
    idname: id,
    dataname: dataName,
    leftData: data,
    rightData: rightData,
    threeData: threeData,
    fourData: fourData,
    fiveData: fiveData,
    splitArea: true,
    topshow: false,
    nameone: nameone,
    nametwo: nametwo,
    namethree: namethree,
    namefour: namefour,
    namefive: namefive
  });
}

/**
 * 柱状图-占比.
 *
 * @param id
 * @param dataName 汉字/n人数
 * @param data 占比.
 * @param nameone
 */
function changeHColumar(id, dataName, data, nameone) {
  h_columar({
    idname: id,  // 定义div的id
    dataname: dataName, //底部显示的字
    data: data,  //下面的数据的参数
    topshow: false,  //是否在頂部顯示數值
    nameone: nameone  //深色参数名字
  });
}

/**
 * 柱状图-占比-预警值.
 *
 * @param id
 * @param dataName 汉字/n人数
 * @param data 占比.
 * @param earlyLine
 * @param nameone
 */
function changeHColumarWarningValue(id, dataName, data, earlyLine, nameone) {
  early_columar({
    idname: id,  // 定义div的id
    dataname: dataName, //底部显示的字
    data: data,  //下面的数据的参数
    topshow: false,  //是否在頂部顯示數值
    nameone: nameone,  //深色参数名字
    earlyLine: earlyLine
  });
}

/**
 * 饼状图-4.
 *
 * @param v1 高.
 * @param v2 中.
 * @param v3 低.
 * @param v4
 */
function changeHRing4(v1, v2, v3, v4) {
  h_ring({
    name: "h-ring",
    data: [
      {value: v1},
      {value: v2},
      {value: v3},
      {value: v4}
    ]
  });
}
/**
 * 饼状图-5.
 *
 * @param v1 一线.
 * @param v2 二线.
 * @param v3 三线.
 * @param v4 四线.
 * @param v5 五线.
 */
function changeHRing5(v1, v2, v3, v4, v5) {
  h_ring({
    name: "h-ring",
    color: ['#e66440', '#f2883b', '#9aabd2', '#68738c', '#3c424f'],
    data: [
      {value: v1},
      {value: v2},
      {value: v3},
      {value: v4},
      {value: v5}
    ]
  });
}

/**
 * 头部区域.
 *
 * @param data
 * @param callBack
 * @param defauleArea
 */
function changeHRegionArea(data, callBack) {
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 0) {
    var str = {};
    $.each(data, function (i, item) {
      if (item.region2 === CTSI_API_JSON.baseInfo.defaultZone) {
        str = data.splice(i, 1);
        return false;
      }
    });
    data.unshift(str[0]);
  }

  h_region(getRegionArrayByString(data), {
    overallId: "droplDown", //点击弹出框的父盒子的ID名
    developDrop: "base-header", //这是点击顶部信息弹出框的类名
    developIcon: "base-lhead",
    leftDrop: "base-area-leftDrop", //左侧弹出的的类名  市区的类名
    rightDrop: "base-area-rightDrop",//右侧弹出的类名  详情区域的类名
    closeDrop: "base-area-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
  }, callBack);
}

function getRegionArrayByString(data) {
  var rArr = [];
  $.each(data, function (i, item) {
    var obj = {};
    obj.region2 = item.region2;
    obj.region3 = item.region3;
    rArr[i] = obj;
  });
  return rArr;
}

/**
 * 头部岗位.
 *
 * @param data
 * @param callBack
 */
function changeHRegionPost(data, callBack) {
  createPersonnel(data, {
    overallId: "personnelDown", //点击弹出框的父盒子的ID名
    developDrop: "base-header", //这是点击顶部信息弹出框的类名
    developIcon: "base-chead",
    leftDrop: "base-leftDrop", //左侧弹出的的类名  市区的类名
    rightDrop: "base-rightDrop",//右侧弹出的类名  详情区域的类名
    closeDrop: "base-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
  }, callBack);
}

/**
 * 头部时间.
 *
 * @param needDay 头部时间，是否需要'日'.
 */
function changeMonths(needDay) {
  if (needDay) {
    var num = 1;
    $("#showdata").on("touchend", function () {
      if (num === 1) {
        $("#daysDate").trigger('click');
      } else {
        $("#monthDate").trigger('click');
      }
    });
    $("#daysDate").on("click", function () {
      document.getElementById("monthFlag").value = "false";
      $(this).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
      num = 1;
    });
    var calendarDay1 = new lCalendar();
    calendarDay1.init({
      'trigger': '#daysDate',
      'type': 'date'
    });
    $("#monthDate").on("click", function () {
      document.getElementById("dateFlag").value = "false";
      $(this).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
      num = 2;
    });
    var calendarMonth1 = new lCalendar();
    calendarMonth1.init({
      'trigger': '#monthDate',
      'type': 'month'
    });

  } else {
    $("#monthDate").addClass("leftdropstyle").siblings().removeClass(
        "leftdropstyle");
    var calendarMonth = new lCalendar();
    calendarMonth.init({
      'trigger': '#showdata',
      'type': 'month'
    });
    calendarMonth.init({
      'trigger': '#monthDate',
      'type': 'month'
    });
  }
}

/**
 * @param url String地址.
 * @param type Int类型.
 * @param callBack String回调方法名.
 * @param params String json形式的字符串.
 * @returns {*}
 */
function api(url, type, callBack, params) {
  if (checkAndroid()) {
    window.getDataFromNative.postMessage(projectDomain + url, type, callBack,
        params);
  } else if (checkIos()) {
    window.webkit.messageHandlers.getDataFromNative.postMessage({
      url: projectDomain + url,
      type: type,
      callback: callBack,
      params: params
    });
  } else {
    alert('无法识别设备');
  }
}

function getBasicInformation(callBack) {
  api(null, 1001, callBack, null);
}

function getContrastHtml(htmlUrl) {
  api(null, 2001, 'openContrastHtml',
      JSON.stringify(CONTRAST_HTMLDOMAIN + htmlUrl));
}

function cancelContrastHtml() {
  api(null, 2002, null, null);
}

/**
 *
 * @param json
 * @param callBack
 * @param needDay 头部日期控件，是否需要显示'日'.
 */
function getHead(json, callBack, needDay) {
  // 三个顶级值
  $('#region').html(json.regionalScope[0].region1);
  $('#post').html(json.postList[0]);
  $('#month').html(json.months[0]);
  setItem("getDate", json.months[0]);
  // 三个多级选择
  changeHRegionArea(json.regionalScope, callBack);
  changeHRegionPost(json.postList, callBack);
  // changeMonths(json.months, callBack);
  changeMonths(needDay);
}

function getPhoneAndPost(json) {
  var obj = {};
  obj.phoneNum = json.baseInfo.userAccountNum;
  obj.postName = json.baseInfo.position;
  return obj;
}

function getArea() {
  return getAreaByUserMaxPermission();
}

function getApiReq(needPost) {
  var obj = getArea();
  obj.post = null;
  if (needPost) {
    obj.post = CTSI_API_JSON.postList[0];
  }
  obj.date = CTSI_API_JSON.months[0].replace('.', '');
  return obj;
}

/**
 * 获取正常比例.
 *
 * @param y_proportion
 * @param n_proportion
 * @returns {number}
 */
function getRProportion(y_proportion, n_proportion) {
  var r_proportion = 0;
  if (null !== y_proportion && null !== n_proportion) {
    r_proportion = 100 - (Number(y_proportion) + Number(n_proportion));
  }
  return Number(r_proportion).toFixed(2);

}

function getToday(str) {
  // return $.datepicker.formatedDate(str, new Date());
  return new Date().Format(str);
}

function checkAndroid() {
  var u = navigator.userAgent;
  //android终端
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}
function checkIos() {
  var u = navigator.userAgent;
  //ios终端
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1,
          (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(
              ("" + o[k]).length)));
    }
  }
  return fmt;
};

function checkJsonIsNotNull(json) {
  return null !== json && '' !== json;
}

function checkJosnData(code) {
  return code === 200;
}
function checkCodeEqualsOther(json) {
  return json.code === 400 || json.code === 403 || json.code === 500
      || json.code === 513 || json.code === 609 || json.code === 600;
}

function checkJsonDateIsNotNull(data) {
  return null !== data;
}

function checkCallBackJsonIsNotNull(json) {
  return !!(checkJsonIsNotNull(json) && checkJosnData(json.code));
}

function substringChar(str) {
  return str.substring(0, str.length - 1);
}

function getProportion(v1, v2) {
  return parseFloat((Number(v1) / Number(v2)) * 100).toFixed(2);
}

function getRegion1() {
  return CTSI_API_JSON.regionalScope[0].region1;
}
/**
 * 获取二级区域.
 *
 * @returns {Array}
 */
function getRegion2() {
  var array = [];
  if (checkJsonIsNotNull(CTSI_API_JSON.regionalScope)) {
    $.each(CTSI_API_JSON.regionalScope, function (i, item) {
      array[i] = item.region2;
    })
  }
  return array;
}
function getPostList() {
  if (checkJsonIsNotNull(CTSI_API_JSON.postList)) {
    return CTSI_API_JSON.postList;
  }
  return '';
}
function getMonths() {
  if (checkJsonIsNotNull(CTSI_API_JSON.months)) {
    return CTSI_API_JSON.months;
  }
  return '';
}

function clickApi(region2, region3, post, month, needPost) {
  region2 = checkRegionNotNullByStr(region2, '全部');
  region3 = checkRegionNotNullByStr(region3, '全部');

  var obj = {};
  obj.province = getProvinceByUserMaxPermission(CTSI_API_JSON);
  obj.post = null;
  if (needPost) {
    obj.post = post;
  }
  obj.date = month.replace('.', '');

  // 集团（省、市）
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 0) {
    obj.province = region2;
    obj.city = region3;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 1) {// 省级别（省、市、区县）
    obj.city = region2;
    obj.district = region3;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 2) { // 市（市、区县、街道）
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = region2;
    obj.street = region3;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 3) { // 区县（区县、街道、网格）
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
    obj.street = region2;
    obj.grid = region3;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 4) { // 街道（街道、网格）
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
    obj.street = CTSI_API_JSON.baseInfo.street;
    obj.grid = region2;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 5) { // 网格，网格不为空区域4项必填
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
    obj.street = CTSI_API_JSON.baseInfo.street;
    obj.grid = CTSI_API_JSON.baseInfo.grid;
  }
  return obj;
}

function getAreaByUserMaxPermission() {
  var obj = {};
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 0) {
    obj.province = CTSI_API_JSON.baseInfo.defaultZone;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 1) {
    obj.province = CTSI_API_JSON.baseInfo.province;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 2) {
    obj.province = CTSI_API_JSON.baseInfo.province;
    obj.city = CTSI_API_JSON.baseInfo.city;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 3) {
    obj.province = CTSI_API_JSON.baseInfo.province;
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 4) {
    obj.province = CTSI_API_JSON.baseInfo.province;
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
    obj.street = CTSI_API_JSON.baseInfo.street;
  } else if (CTSI_API_JSON.baseInfo.userMaxPermission === 5) {
    obj.province = CTSI_API_JSON.baseInfo.province;
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
    obj.street = CTSI_API_JSON.baseInfo.street;
    obj.grid = CTSI_API_JSON.baseInfo.grid;
  }
  return obj;
}

/**  **/

function warningValue() {
  // 2.1.44	各地区岗位变动情况预警值
  api('/mobilityAnalysis/warningValue', 3001, 'cbWarningValue',
      JSON.stringify(apiReq));
}

/**
 *
 * @param regionTmp 用户选择的区域.
 * @param regionStr 用户所选择区域里的第一个.
 * @returns {{}}
 */
function checkContrastRegionByPermission(regionTmp, regionStr) {
  var obj = {};
  obj.province = getProvinceByUserMaxPermission(CTSI_API_JSON);
  var objTmp = null;

  if (undefined === regionStr) {
    regionStr = regionTmp;
  }

  $.each(CTSI_API_JSON.regionalScope, function (i, item) {
    if (item.region2 === regionStr) {
      objTmp = item;
      return false;
    }
  });
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 1) { // 省-比较区域是-市
    obj.city = regionTmp;
  }
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 2) { // 市-比较区域是-区县
    obj.city = null !== objTmp ? objTmp.region1 : CTSI_API_JSON.baseInfo.city;
    obj.district = regionTmp;
  }
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 3
      || CTSI_API_JSON.baseInfo.userMaxPermission === 4) { // 区县-比较区域是-街道
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = null !== objTmp ? objTmp.region1
        : CTSI_API_JSON.baseInfo.district;
    obj.street = regionTmp;
  }
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 5) { // 网格-比较区域是-网格（网格不为空：省、市区、县、街道都不能为空）
    obj.city = CTSI_API_JSON.baseInfo.city;
    obj.district = CTSI_API_JSON.baseInfo.district;
    obj.street = CTSI_API_JSON.baseInfo.street;
    obj.city = region;
  }
  return obj;
}

function getContrastAreaArray(type, region) {
  region = checkRegionNotNullByStr(region, '全部');
  if (type === 1) {
    var regionStrTmp = null;
    var regionStr = null;
    $.each(region, function (i, item) {
      if (null !== regionStrTmp) {
        regionStrTmp += "," + item;
      } else {
        regionStrTmp = item;
        regionStr = item;
      }
    });
    return checkContrastRegionByPermission(regionStrTmp, regionStr);
  }
  return checkContrastRegionByPermission(region);
}

function getContrastPostArray(type, post) {
  var postStr = null;

  if (type === 2) {
    $.each(post, function (i, item) {
      if (null !== postStr) {
        postStr += "," + item;
      } else {
        postStr = item;
      }
    })
  } else {
    postStr = post;
  }
  return postStr;
}

function getContrastMonthArray(type, month) {
  var monthStr = '';
  if (type === 3) {
    $.each(month, function (i, item) {
      if ('' !== monthStr) {
        monthStr += "," + item.replace('.', '');
      } else {
        monthStr = item.replace('.', '');
      }
    })
  } else {
    monthStr = month.replace('.', '');
  }
  return monthStr;
}

function getContrastCompareTypeByType(type) {
  if (type === 1) {
    // 区域对比的数据是：当前区域信息中的第二级数据.
    if (CTSI_API_JSON.baseInfo.userMaxPermission === 1) {
      return 'city';
    }
    if (CTSI_API_JSON.baseInfo.userMaxPermission === 2) {
      return 'district';
    }
    if (CTSI_API_JSON.baseInfo.userMaxPermission === 3
        || CTSI_API_JSON.baseInfo.userMaxPermission === 4) {
      return 'street';
    }
  }
  if (type === 2) {
    return 'post';
  }
  if (type === 3) {
    return 'date';
  }
}

function JsonParse(json) {
  if (typeof(json) === 'string') {
    json = JSON.parse(json);
  }
  return json;
}

/**
 * @param array 2.1.43
 * @param arr 2.1.19
 */
function changeQuadrant(array, arr) {
  quadrant({
    idname: "scatter",
    array: array,
    arr: arr
  });
}

/**
 *
 * @param index 数值.
 * @param id id.
 */
function checkIndexRedByIndex(index, id) {
  if (Number(index) < INDEX_RED) {
    $('#' + id).css("color", '#e66440');
  }
}

function openContrastHtml(urlHtml) {
  window.location.href = JSON.parse(urlHtml);
}

function checkRegionNotNullByStr(region, str) {
  if (!checkRegionNotNull(region) || region.indexOf(str) > -1) {
    return region = null;
  }
  return region;
}

function checkRegionNotNull(region) {
  return !(null === region || typeof(region) === "undefined" || '' === region);

}

/**
 *
 * @returns {string} XXXX年XX月.
 */
function getYYYYMMByMonths() {
  var date = CTSI_API_JSON.months[0].split('.');
  return date[0] + '年' + date[1] + '月';
}
/**
 *
 * @returns {string} XXXX以及XXXX；XXXX、XXXX以及XXXX.
 */
function getPostStrByPostList() {
  var str;
  var pl = CTSI_API_JSON.postList;
  pl = removeByValue(pl, '全部');
  $.each(pl, function (i, item) {
    if (i > 0) {
      if (i === pl.length - 1) {
        str += '以及' + item;
      } else {
        str += '、' + item;
      }
    } else {
      str = item;
    }
  });
  return str;
}

function removeByValue(array, value) {
  var returnArray = [];
  $.each(array, function (i, item) {
    if (item.indexOf(value) <= -1) {
      returnArray[returnArray.length] = item;
    }
  });
  return returnArray;
}

function checkDivIfExist(divId, currentId) {
  if ($("#" + currentId).length <= 0) {
    addPoint(divId, currentId);
  }
}

function getProvinceByUserMaxPermission(json) {
  if (json.baseInfo.userMaxPermission === 0) { // 最高权限等于'集团'，取
    return json.baseInfo.defaultZone;
  }
  return json.baseInfo.province;
}

function getRegion1ByUserMaxPermission() {
  if (CTSI_API_JSON.baseInfo.userMaxPermission === 0) { // 最高权限等于'集团'，取
    return CTSI_API_JSON.baseInfo.defaultZone;
  }
  return CTSI_API_JSON.regionalScope[0].region1;
}

function checkContrastIsNullByTypeAndValue(region, post, month, type) {
  if (type === 1 && region.length > 0) {
    return true;
  } else if (type === 2 && post.length > 0) {
    return true;
  } else {
    return type === 3 && month.length > 0;
  }
}