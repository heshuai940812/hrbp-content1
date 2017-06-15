function cbEmpDimissionProportion(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('leave-ring-point', 'r-leave-ring');
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
        var v4 = 0;
        $.each(json.data, function (i, item) {
            // dataname[i] = item.quitInclinationType; // 离职倾向类型	quitInclination Type	必填	String	高/中/低
            // data[i] = item.peoNum; // 人数	peoNum	必填	String
            // proportion[i] = substringChar(item.proportion);// 占比	proportion	必填	String
            if (item.quitInclinationType === '高') {
                v1 = substringChar(item.proportion);
            }
            if (item.quitInclinationType === '中') {
                v2 = substringChar(item.proportion);
            }
            if (item.quitInclinationType === '低') {
                v3 = substringChar(item.proportion);
            }
            if (item.quitInclinationType === '无离职倾向') {
                v4 = substringChar(item.proportion);
            }
        });
        changeHRing4(v1, v2, v3, v4);

        empDimissionInclination();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('leave-ring-point', 'r-leave-ring');
        empDimissionInclination();
    }
}

function cbEmpDimissionInclination(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('leave-columnar-point', 'r-leave-columnar');
        var dataName = [];
        var data = [];
        $.each(json.data, function (i, item) {
            dataName[i] = item.workEfficiency + '\n\n' + Number(item.totalNum) + '人'; // 区域\n总人数
            data[i] = getProportion(item.turnoverInttalNum, item.totalNum); // 离职倾向总人数,总人数
        });
        changeHColumar('leave-columnar', dataName, data, '可能离职人数');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('leave-columnar-point', 'r-leave-columnar');
    }
}