function cbEmpStandardContrast(json) {
  json = JsonParse(json);
  if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
    removeDataFree();
    var dataName = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var nameone = '';
    var nametwo = '';
    var namethree = '';
    $.each(json.data.compareType, function (i, ct) {
      dataName[i] = ct;
    });
    $.each(json.data.data, function (j, d) {
      if (d.name === '告警') {
        $.each(d.value, function (k, d1) {
          data1[k] = d1;
        });
        nameone = d.name;
      }
      if (d.name === '提醒') {
        $.each(d.value, function (l, d2) {
          data2[l] = d2;
        });
        nametwo = d.name;
      }
      if (d.name === '正常') {
        $.each(d.value, function (l, d3) {
          data3[l] = d3;
        });
        namethree = d.name;
      }
    });
    changeColumar3('columar-area', dataName, data1, data2, data3, nameone,
        nametwo, namethree);
  }
  if (checkCodeEqualsOther(json)) {
    addDataFree();
  }
}