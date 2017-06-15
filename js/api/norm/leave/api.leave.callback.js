function cbWorkersDemobilizedProportion(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('norm_leave_twig_point', 'r_norm_leave_twig');
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 离岗
            $.each(item.quitEmploymentYesRate, function (i, qeyr) {
                $('#y_totalNum').html(qeyr.totalNum);
                y_proportion = substringChar(qeyr.proportion);
            });
            // 稳定
            $.each(item.quitEmploymentNoRate, function (i, qenr) {
                $('#n_totalNum').html(qenr.totalNum);
                n_proportion = substringChar(qenr.proportion);
            })
        });
        scaleMap2('norm_leave_twig', 'base-llwig', 'base-zlwig', y_proportion, n_proportion, 'num-lchar', 'num-zchar');
        regionWorkersDemobilizedRanking();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('norm_leave_twig_point', 'r_norm_leave_twig');
        regionWorkersDemobilizedRanking();
    }
}

function cbRegionWorkersDemobilizedRanking(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('h-norchart-point', 'r-h-norchart');
        var dataName = [];
        var data = [];
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n\n' + Number(item.totalNum) + '人';
            data[i] = substringChar(item.proportion);
            // item.nonStandardNum;// 用工规范为“离岗”总人数	nonStandardNum	必填	String
        });
        changeHColumar('h-norchart', dataName, data, '用工离岗');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('h-norchart-point', 'r-h-norchart');
    }
}