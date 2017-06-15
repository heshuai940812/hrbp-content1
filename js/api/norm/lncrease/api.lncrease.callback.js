function cbWorkersZengGangProportion(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('norm_increase_twig_point', 'r_norm_increase_twig');
        var y_proportion = 0;
        var n_proportion = 0;

        $.each(json.data, function (i, item) {
            // 增岗
            $.each(item.increasingEmploymentYesRate, function (i, ieyr) {
                $('#y_totalNum').html(ieyr.totalNum);
                y_proportion = substringChar(ieyr.proportion);
            });
            // 稳定
            $.each(item.increasingEmploymentNoRate, function (i, ienr) {
                $('#n_totalNum').html(ienr.totalNum);
                n_proportion = substringChar(ienr.proportion);
            })
        });
        scaleMap2('norm_increase_twig', 'base-ltwig', 'base-rtwig', y_proportion, n_proportion, 'num-lchar', 'num-zchar');
        regionWorkersZengGangRanking();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('norm_increase_twig_point', 'r_norm_increase_twig');
        regionWorkersZengGangRanking();
    }
}

function cbRegionWorkersZengGangRanking(json) {
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
        changeHColumar('h-norchart', dataName, data, '用工增岗');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('h-norchart-point', 'r-h-norchart');
    }
}