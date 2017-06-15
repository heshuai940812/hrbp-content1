function empZangGangStandardContrast(region, post, month, type) {
    if (checkContrastIsNullByTypeAndValue(region, post, month, type)) {
        var obj = getContrastAreaArray(type, region);
        obj.post = getContrastPostArray(type, post);
        obj.date = getContrastMonthArray(type, month);
        obj.compareType = getContrastCompareTypeByType(type);
        // 2.1.49	用工增岗对比-区域对比/岗位对比/时间对比
        api('/empNorm/empZangGangStandardContrast', 3001, 'cbEmpZangGangStandardContrast', JSON.stringify(obj));
    }
}

function empZangGangStandardContrastApi(json) {
    CTSI_API_JSON = JsonParse(json);
    setItem("getDate", CTSI_API_JSON.months[0]);
    zengGangContrast();
}