var currentPage = 1; // 1全景视图；2工作效能评估


function mapApi(json) {
    CTSI_API_JSON = JsonParse(json);
    empInPostSummary();
}

/**
 * 2.1.1    员工在岗情况概述.
 *
 */
function empInPostSummary() {
    currentPage = 1;
    var obj = getArea();
    // obj.post = CTSI_API_JSON.baseInfo.postName;
    obj.date = CTSI_API_JSON.time; // 20170525
    obj.post = '所有岗位';// 2017-5-25 18:04:28，领导让写死
    api('/panoramaView/empInPostSummary', 3001, 'cbEmpInPostSummary', JSON.stringify(obj));
}

// /**
//  * 2.1.2    在岗情况概览.
//  */
// function postInfoOverview() {
//     var obj = getAreaAndGrid(CTSI_API_JSON);
//     obj.date = CTSI_API_JSON.time;
//     api('/panoramaView/postInfoOverview', 3001, 'cbPostInfoOverview', JSON.stringify(obj));
// }

/**
 * 2.1.2    在岗情况概览.
 */
function postInfoOverview() {
    // var obj = getAreaAndGrid(CTSI_API_JSON);
    // obj.date = CTSI_API_JSON.time;
    api(null, 1002, 'cbPostInfoOverview', null);
}


/**
 * 2.1.4    在岗异常原因分析.
 */
function empInPostAbnormalCauseAnalysis() {
    var obj = getArea();
    obj.date = CTSI_API_JSON.time;
    api('/panoramaView/empInPostAbnormalCauseAnalysis', 3001, 'cbEmpInPostAbnormalCauseAnalysis', JSON.stringify(obj));
}

/**
 * 2.1.3    在岗情况概览-查看员工详情.
 */
function viewEmpDetailsCB(phone, post) {
    var obj = {};
    obj.phoneNum = phone;
    obj.post = post;
    obj.date = CTSI_API_JSON.time;
    api('/panoramaView/viewEmpDetails', 3001, 'cbViewEmpDetails', JSON.stringify(obj));
}

/**
 * 2.1.45    2.1.45    工作效能评估排名.
 */
function taskPerformanceRanking() {
    currentPage = 2;
    var obj = getArea();
    // obj.post = CTSI_API_JSON.baseInfo.postName;
    obj.post = '所有岗位';// 2017-5-25 18:04:28，领导让写死
    obj.date = CTSI_API_JSON.months[0].replace('.', '');
    api('/panoramaView/taskPerformanceRanking', 3001, 'cbTaskPerformanceRanking', JSON.stringify(obj));
}

/**
 * 2.1.29    返回PNG接口.
 */
function postInfoOverviewPng(widthHeight, level, latLng) {
    var obj = getArea();
    obj.date = CTSI_API_JSON.time;
    obj.widthHeight = widthHeight;
    obj.level = level;
    obj.latLng = latLng;
    api('/panoramaView/postInfoOverviewPng', 3001, 'cbPostInfoOverviewPng', JSON.stringify(obj));
}
