function cbEmpInPostSummary(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removePoint("h-guard-point", "r-h-guard");
    var lchar = 0;
    var zchar = 0;
    $.each(json.data, function (j, item) {
      // 异常
      $.each(item.inPostYesRate, function (j, ipyr) {
        lchar = substringChar(ipyr.proportion);
      });
      // 正常
      $.each(item.inPostNoRate, function (k, ipnr) {
        zchar = substringChar(ipnr.proportion);
      })
    });
    scaleMap2('h-guard', 'map-ltwig', 'map-rtwig', lchar, zchar, 'y-lchar',
        'n-zchar');

    empInPostAbnormalCauseAnalysis();
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist("h-guard-point", "r-h-guard");
    empInPostAbnormalCauseAnalysis();
  }
}

function cbPostInfoOverview(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    drop(json.data);
  }
}

function cbEmpInPostAbnormalCauseAnalysis(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removePoint("map-onguard-point", "r-map-onguard");
    var lchar = 0;
    var zchar = 0;
    var rchar = 0;
    $.each(json.data, function (i, item) {
      $.each(item.other, function (i, o) {
        rchar = substringChar(o.proportion);
      });
      $.each(item.quitInclinationRate, function (i, qir) {
        zchar = substringChar(qir.proportion);
      });
      $.each(item.postChangeYesRate, function (i, pcyr) {
        lchar = substringChar(pcyr.proportion);
      })
    });
    scaleMap3('map-onguard', 'map-ltwig', 'map-ztwig', 'map-rtwig', lchar,
        zchar, rchar, 'num-lchar', 'num-zchar', 'num-rchar');
    showmap(getRegion1ByUserMaxPermission()); // 2017-5-27 15:45:18，经李哲、何帅决定，将地图执行放在最后.
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist("map-onguard-point", "r-map-onguard");
    showmap(getRegion1ByUserMaxPermission()); // 2017-5-27 15:45:18，经李哲、何帅决定，将地图执行放在最后.
  }
}

function cbViewEmpDetails(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    $.each(json.data, function (i, item) {
      $('#detail_postName').html(item.postName);// 岗位
      $('#detail_cumulativeWorkDate').html(item.abnormalDate + '小时');// 累计工作时长
      $('#detail_onTheJobRate').html(item.onTheJobRate + '%');// 在岗率
      $('#detail_region').html(item.area); // 负责区域
    });
  }
}

function cbTaskPerformanceRanking(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    // 2017年5月
    $('#stats_date').html(getYYYYMMByMonths());
    // 北京市装维以及渠道人员
    $('#stats_city').html(CTSI_API_JSON.baseInfo.city);
    $('#stats_post').html(getPostStrByPostList());

    removePoint("h-jobpote-point", "r-h-jobpote");
    var dataname = [];
    var data = [];
    var topdata = [];
    $.each(json.data, function (i, item) {
      if (item.workEfficiency === '高效') {
        $('#stats_efficient_y').html(item.normalNum);
        $('#stats_efficient_n').html(item.abnormalNum);
        dataname[0] = item.workEfficiency;
        data[0] = item.abnormalNum;
        topdata[0] = item.normalNum;
      }
      if (item.workEfficiency === '勤奋') {
        $('#stats_diligence_y').html(item.normalNum);
        $('#stats_diligence_n').html(item.abnormalNum);
        dataname[1] = item.workEfficiency;
        data[1] = item.abnormalNum;
        topdata[1] = item.normalNum;
      }
      if (item.workEfficiency === '慵懒') {
        $('#stats_lazy_y').html(item.normalNum);
        $('#stats_lazy_n').html(item.abnormalNum);
        dataname[2] = item.workEfficiency;
        data[2] = item.abnormalNum;
        topdata[2] = item.normalNum;
      }
      if (item.workEfficiency === '低效') {
        $('#stats_inefficient_y').html(item.normalNum);
        $('#stats_inefficient_n').html(item.abnormalNum);
        dataname[3] = item.workEfficiency;
        data[3] = item.abnormalNum;
        topdata[3] = item.normalNum;
      }
      if (item.workEfficiency === '普通') {
        $('#stats_ordinary_y').html(item.normalNum);
        $('#stats_ordinary_n').html(item.abnormalNum);
        dataname[4] = item.workEfficiency;
        data[4] = item.abnormalNum;
        topdata[4] = item.normalNum;
      }
    });
    changeColumar('h-jobpote', dataname, data, topdata, '异常', '在岗');
  }
  if (checkCodeEqualsOther(json)) {
    checkDivIfExist("h-jobpote-point", "r-h-jobpote");
  }
}

function cbPostInfoOverviewPng(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json)) {
    generateImg(json.data)
  }
}

/**
 *
 * @param province 用户在页面右上角选择,客户端提供.
 */
function cbMapByProvince(province) {
  // 将CTSI_API_JSON里的省、默认省改为用户选择的数据.
  // 这样后面的代码可以一字不改.
  CTSI_API_JSON.baseInfo.defaultZone = province;
  CTSI_API_JSON.baseInfo.province = province;
  if (currentPage === 1) {
    empInPostSummary();
  } else {
    taskPerformanceRanking();
  }
}