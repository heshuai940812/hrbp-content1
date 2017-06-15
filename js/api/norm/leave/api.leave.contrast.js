function empLiGangContrast(region, post, month, type) {
    if (checkContrastIsNullByTypeAndValue(region, post, month, type)) {
        var obj = getContrastAreaArray(type, region);
        obj.post = getContrastPostArray(type, post);
        obj.date = getContrastMonthArray(type, month);
        obj.compareType = getContrastCompareTypeByType(type);
        // 2.1.50	用工离岗对比-区域对比/岗位对比/时间对比
        api('/empNorm/empLiGangContrast', 3001, 'cbEmpLiGangContrast', JSON.stringify(obj));
    }
}

function empLiGangContrastApi(json) {
    cancelContrastHtml();
    CTSI_API_JSON = JsonParse(json);
    setItem("getDate", CTSI_API_JSON.months[0]);
    liGangContrast();
}