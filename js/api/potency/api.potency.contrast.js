function workEfficiencyContrast(region, post, month, type) {

    if (checkContrastIsNullByTypeAndValue(region, post, month, type)) {
        var obj = getContrastAreaArray(type, region);
        obj.post = getContrastPostArray(type, post);
        obj.date = getContrastMonthArray(type, month);
        obj.compareType = getContrastCompareTypeByType(type);
        // 2.1.47	员工工作效能评估对比-区域对比/岗位对比/时间对比
        api('/mobilityAnalysis/workEfficiencyContrast', 3001, 'cbWorkEfficiencyContrast', JSON.stringify(obj));
    }
}

function workEfficiencyContrastApi(json) {
    CTSI_API_JSON = JsonParse(json);
    setItem("getDate", CTSI_API_JSON.months[0]);
    taskPerformContrast();
}