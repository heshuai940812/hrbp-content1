function postAbnormalContrast(region, post, month, type) {
    if (checkContrastIsNullByTypeAndValue(region, post, month, type)) {
        var obj = getContrastAreaArray(type, region);
        obj.post = getContrastPostArray(type, post);
        obj.date = getContrastMonthArray(type, month);
        obj.compareType = getContrastCompareTypeByType(type);
        // 2.1.46	  在岗异常对比-区域对比/岗位对比/时间对
        api('/mobilityAnalysis/postAbnormalContrast', 3001, 'cbPostAbnormalContrast', JSON.stringify(obj));
    }
}

function postAbnormalContrastApi(json) {
    CTSI_API_JSON = JsonParse(json);
    setItem("getDate", CTSI_API_JSON.months[0]);
    zaiGangAbnormal();
}