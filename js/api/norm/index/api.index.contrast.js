function empStandardContrast(region, post, month, type) {
    if (checkContrastIsNullByTypeAndValue(region, post, month, type)) {
        var obj = getContrastAreaArray(type, region);
        obj.post = getContrastPostArray(type, post);
        obj.date = getContrastMonthArray(type, month);
        obj.compareType = getContrastCompareTypeByType(type);
        // 2.1.48	用工规范对比-区域对比/岗位对比/时间对比
        api('/empNorm/empStandardContrast', 3001, 'cbEmpStandardContrast', JSON.stringify(obj));
    }
}

function empStandardContrastApi(json) {
    CTSI_API_JSON = JsonParse(json);
    setItem("getDate", CTSI_API_JSON.months[0]);
    workStandardContrast();
}