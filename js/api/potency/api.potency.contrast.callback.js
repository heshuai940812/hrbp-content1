function cbWorkEfficiencyContrast(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removeDataFree();
    var dataName = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    var data5 = [];
    var nameone = [];
    var nametwo = [];
    var namethree = [];
    var namefour = [];
    var namefive = [];
    $.each(json.data.compareType, function (i, ct) {
      dataName[i] = ct;
    });
    $.each(json.data.data, function (j, d) {
      if (d.name === '高效') {
        $.each(d.value, function (k, d1) {
          data1[k] = d1;
        });
        nameone = d.name;
      }
      if (d.name === '勤奋') {
        $.each(d.value, function (k, d2) {
          data2[k] = d2;
        });
        nametwo = d.name;
      }
      if (d.name === '普通') {
        $.each(d.value, function (k, d3) {
          data3[k] = d3;
        });
        namethree = d.name;
      }
      if (d.name === '低效') {
        $.each(d.value, function (k, d4) {
          data4[k] = d4;
        });
        namefour = d.name;
      }
      if (d.name === '慵懒') {
        $.each(d.value, function (k, d5) {
          data5[k] = d5;
        });
        namefive = d.name;
      }
    });
    changeColumar5('columar-area', dataName, data1, data2, data3, data4, data5,
        nameone, nametwo, namethree, namefour, namefive);
  }
  if (checkCodeEqualsOther(json)) {
    addDataFree();
  }
}