function cbEmpDimissionWhereabouts(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('leave-twing-point', 'r-leave-twing');
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 工作地变更识别为“ 否”
            $.each(item.quitDirInRate, function (j, qdir) {
                y_proportion = substringChar(qdir.proportion); // 占比	proportion	必填	String
                $('#y_totalNum').html(qdir.totalNum);// 总人数	totalNum	必填	String
            });
            // 工作地变更识别为“ 是”
            $.each(item.quitDirOutRate, function (k, qdor) {
                n_proportion = substringChar(qdor.proportion); // 占比	proportion	必填	String
                $('#n_totalNum').html(qdor.totalNum);// 总人数	totalNum	必填	String
            })
        });
        scaleMap2('leave-twing', 'base-llwig', 'base-zlwig', y_proportion, n_proportion, 'num-lchar', 'num-zchar');
        empDimissionCityDetails();
        return;
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('leave-twing-point', 'r-leave-twing');
        empDimissionCityDetails();
    }
}

function cbEmpDimissionCityDetails(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('leave-ring-point', 'r-leave-ring');
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
        var v4 = 0;
        var v5 = 0;
        $.each(json.data, function (i, item) {
            // item.totalNum; // 总人数	totalNum	必填	String
            if (item.cityLevel === '一线城市') {
                v1 = substringChar(item.proportion);
            }
            if (item.cityLevel === '二线城市') {
                v2 = substringChar(item.proportion);
            }
            if (item.cityLevel === '三线城市') {
                v3 = substringChar(item.proportion);
            }
            if (item.cityLevel === '四线城市') {
                v4 = substringChar(item.proportion);
            }
            if (item.cityLevel === '五线城市') {
                v5 = substringChar(item.proportion);
            }
        });
        changeHRing5(v1, v2, v3, v4, v5);
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('leave-ring-point', 'r-leave-ring');
    }
}