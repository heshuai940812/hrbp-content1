function cbEmpSpecification(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint("base-navTitle", "r_emp_specification");
        var y_proportion = 0;
        var n_proportion = 0;
        var r_proportion = 0;
        $.each(json.data, function (i, item) {
            if (null !== item.normYesRate && undefined !== item.normYesRate) {
                $('#y_totalNum').html(item.normYesRate[0].totalNum);
                y_proportion = substringChar(item.normYesRate[0].proportion);
            }
            if (null !== item.normNoRate && undefined !== item.normNoRate) {
                $('#n_totalNum').html(item.normNoRate[0].totalNum);
                n_proportion = substringChar(item.normNoRate[0].proportion);
            }
            if (null !== item.normRemind && undefined !== item.normRemind) {
                $('#r_talNum').html(item.normRemind[0].totalNum);
                r_proportion = substringChar(item.normRemind[0].proportion);
            }
        });

        scaleMap3('emp_specification', 'base-ltwig', 'base-ztwig', 'base-rtwig', n_proportion, r_proportion, y_proportion, 'num-lchar', 'num-zchar', 'num-rchar');

        regionSpecificationRanking();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist("base-navTitle", "r_emp_specification");
        regionSpecificationRanking();
    }
}

function cbRegionSpecificationRanking(json) {

    // json = {
    //     "code": 200,
    //     "status": "success",
    //     "message": "success",
    //     "data": [{"region": "789", "nonStandardNum": "39", "proportion": "20%"}],
    //     "time": "2017-06-12 09:09:57"
    // }
    // ;

    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint("norm-normchart", "r-h-norchart");
        var dataName = [];
        var data = [];
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n\n' + Number(item.totalNum) + '人'; // 区域\n用工规范总人数
            data[i] = substringChar(item.proportion);
            // item.nonStandardNum; // 用工规范为“否”总人数	nonStandardNum	必填	String
        });
        changeHColumar('h-norchart', dataName, data, '用工不规范');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist("norm-normchart", "r-h-norchart");
    }
}