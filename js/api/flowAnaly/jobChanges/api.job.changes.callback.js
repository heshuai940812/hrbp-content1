function cbPositionChangeWhole(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('h-unusprog-point', 'r-h-unusprog');
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 稳定	inPostNoRate	必填	String
            $.each(item.inPostNoRate, function (i, ipor) {
                $('#y_totalNum').html(ipor.totalNum);
                y_proportion = substringChar(ipor.proportion);
            });
            // 变动	inPostYesRate	必填	String
            $.each(item.inPostYesRate, function (i, ipyr) {
                $('#n_totalNum').html(ipyr.totalNum);
                n_proportion = substringChar(ipyr.proportion);
            });
        });
        scaleMap2('h-unusprog', 'base-llwig', 'base-zlwig', n_proportion, y_proportion, 'num-lchar', 'num-zchar');
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
        regionPostChange();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('warningValue_point', 'r_warningValue');
        regionPostChange();
    }
}

function cbRegionPostChange(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('warningValue_point', 'r_warningValue');
        var dataName = [];
        var data = [];
        var warningValueArr = [];
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n\n' + Number(item.totalNum) + '人'; // 区域\n区域人数
            data[i] = substringChar(item.proportion); // 占比
            // item.postYesNum; // 岗位变动识别为“是”人数	postYesNum	必填	string
            warningValueArr[i] = warningValueNum;
        });
        changeHColumarWarningValue('post-changepic', dataName, data, warningValueArr, '岗位变动');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('warningValue_point', 'r_warningValue');
    }
}

