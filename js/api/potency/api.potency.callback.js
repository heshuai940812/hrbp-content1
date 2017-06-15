function cbEmpWorkEfficiencyIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('potency_index_point', 'r_potency_index');
        $.each(json.data, function (i, item) {
            $('#potency_index').html(item.index);
        });
        empWorkEfficiencyMap();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('potency_index_point', 'r_potency_index');
        empWorkEfficiencyMap();
    }
}
function cbEmpWorkEfficiencyMap(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('scatter_point', 'r_scatter_point');
        // $.each(json.data, function (i, item) {
        //     item.phoneNum; //  手机号	phoneNum	必填	String	加密手机号(md5)
        //     item.workingHours; // 工作时长	workingHours	必填	String
        //     item.workPerformance; // 工作业绩	workPerformance	必填	String
        // })
        xyObj = json.data;
        quadrantCoordinatePoint();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('scatter_point', 'r_scatter_point');
    }
}
function cbEmpWorkEfficiencyPercentage(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('scatter_point', 'r_scatter_point');
        var data1 = 0;
        var data2 = 0;
        var data3 = 0;
        var data4 = 0;
        var data5 = 0;
        $.each(json.data, function (i, item) {
            if (item.assessment === '高效') {
                data1 = substringChar(item.proportion);
            }
            if (item.assessment === '勤奋') {
                data2 = substringChar(item.proportion);
            }
            if (item.assessment === '慵懒') {
                data3 = substringChar(item.proportion);
            }
            if (item.assessment === '低效') {
                data4 = substringChar(item.proportion);
            }
            if (item.assessment === '普通') {
                data5 = substringChar(item.proportion);
            }
        });
        scaleMap5('potency_index_point', 'potency-rate1', 'potency-rate2', 'potency-rate3', 'potency-rate4', 'potency-rate5', data1, data2, data3, data4, data5, 'num-span1', 'num-span2', 'num-span3', 'num-span4', 'num-span5');
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('scatter_point', 'r_scatter_point');
        // addPoint('strip','r_strip');
    }
}
function cbQuadrantCoordinatePoint(json) {

    // json1 = {"code":200,"status":"success","message":"success","data":[{"workingHours":"3","workPerformance":"80","phoneNum":"2CF7C8E6DB4A4C3EBD4B7A45F97311C4"},{"workingHours":"3","workPerformance":"90","phoneNum":"A962546AD68B97B0BF2D0AC1BC83CE8F"}],"time":"2017-05-26 18:14:29"};
    // xyObj = json1.data;
    // json = {"code":200,"status":"success","message":"success","data":[{"workTimeBottomPoint":"20","id":1,"workPerformOrigin":"50","workPerformTopPoint":"80","workTimeOrigin":"50","workPerformBottomPoint":"20","workTimeTopPoint":"80"}],"time":"2017-05-26 18:14:29"};


    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint('scatter_point', 'r_scatter_point');
        // $.each(json.data, function (i, item) {
        //     item.workTimeOrigin; // 工作时间原点	workTimeOrigin	必填	String	50
        //     item.workPerformOrigin; // 工作业绩原点	workPerformOrigin	必填	String	50
        //     item.workTimeTopPoint; // 工作时间普通上界点	workTimeTopPoint	必填	String	80
        //     item.workTimeBottomPoint; // 工作时间普通下界点	workTimeBottomPoint	必填	String	20
        //     item.workPerformTopPoint; // 工作业绩普通上界点	workPerformTopPoint	必填	String	80
        //     item.workPerformBottomPointTop; // 工作业绩普通下界点	workPerformBottomPointTop	必填	String	20
        // })
        changeQuadrant(json.data, xyObj);

        empWorkEfficiencyPercentage();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist('scatter_point', 'r_scatter_point');
    }
}