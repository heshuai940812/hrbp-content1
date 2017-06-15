function cbEmpPostOverallSituation(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('h-unusprog-point', 'r-h-unusprog');
        var y_proportion = 0;
        var n_proportion = 0;

        $.each(json.data, function (i, item) {
            // 异常
            $.each(item.inPostYesRate, function (i, iptr) {
                $('#y_totalNum').html(iptr.totalNum);
                y_proportion = substringChar(iptr.proportion);
            });
            // 稳定
            $.each(item.inPostNoRate, function (i, ipnr) {
                $('#n_totalNum').html(ipnr.totalNum);
                n_proportion = substringChar(ipnr.proportion);
            })
        });
        scaleMap2('h-unusprog', 'base-llwig', 'base-zlwig', y_proportion, n_proportion, 'num-lchar', 'num-zchar');
        warningValue();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('h-unusprog-point', 'r-h-unusprog');
        warningValue();
    }
}

function cbWarningValue(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('warningValue_point', 'r_warningValue');
        $.each(json.data, function (i, item) {
            warningValueNum = item.warningValue;
            $('#warningValue').html(warningValueNum);
        });
        postAbnormalRanking($('#post_abnormal_ranking').html());
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('warningValue_point', 'r_warningValue');
        postAbnormalRanking($('#post_abnormal_ranking').html());
    }
}

function cbPostAbnormalRanking(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('warningValue_point', 'r_warningValue');
        var dataName = [];
        var data = [];
        var warningValueArr = [];
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n\n' + Number(item.totalNum) + '人';
            data[i] = getProportion(item.abnormalNum, item.totalNum);
            warningValueArr[i] = $('#warningValue').html();
        });
        changeHColumarWarningValue('post-norchart', dataName, data, warningValueArr, '异常');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('warningValue_point', 'r_warningValue');
    }
}