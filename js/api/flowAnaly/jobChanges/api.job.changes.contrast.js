function multiDimensionContrast(region, post, month, type) {
    if (checkContrastIsNullByTypeAndValue(region, post, month, type)) {
        var obj = getContrastAreaArray(type, region);
        obj.post = getContrastPostArray(type, post);
        obj.date = getContrastMonthArray(type, month);
        obj.compareType = getContrastCompareTypeByType(type);
        // 2.1.11	岗位变动-区域对比/岗位对比/时间对比
        api('/mobilityAnalysis/multiDimensionContrast', 3001, 'cbMultiDimensionContrast', JSON.stringify(obj));
    }
}

function multiDimensionContrastApi(json) {
    CTSI_API_JSON = JsonParse(json);
    setItem("getDate", CTSI_API_JSON.months[0]);
    positionChangeContrast();
}