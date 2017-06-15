var apiReq = {};
var xyObj = [];
var headPost = null; // 头部区域点击后.

function potencyApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, potencyClick, false);
    apiReq = getApiReq(false);
    empWorkEfficiencyIndex();
}

function potencyClick(region2, region3, post, month) {
    headPost = post; // 保存头部选择的岗位,因为该页面接口有的需要有的不需要'岗位'.
    apiReq = clickApi(region2, region3, post, month, false);
    empWorkEfficiencyIndex();
}
function formDataDay(day) {
    potencyClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    potencyClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}

/**
 *2.1.18    工作效能指数（HRS018）.
 */
function empWorkEfficiencyIndex() {
    apiReq.post = null;
    api('/empEfficiency/empWorkEfficiencyIndex', 3001, 'cbEmpWorkEfficiencyIndex', JSON.stringify(apiReq));
}

/**
 *2.1.19    工作效能分布图（HRS019）.
 */
function empWorkEfficiencyMap() {
    if (null !== headPost) {
        apiReq.post = headPost;
    } else {
        apiReq.post = CTSI_API_JSON.postList[0];
    }
    api('/empEfficiency/empWorkEfficiencyMap', 3001, 'cbEmpWorkEfficiencyMap', JSON.stringify(apiReq));
}

/**
 *2.1.20    工作效能百分比（HRS020）.
 */
function empWorkEfficiencyPercentage() {
    if (null !== headPost) {
        apiReq.post = headPost;
    } else {
        apiReq.post = CTSI_API_JSON.postList[0];
    }
    api('/empEfficiency/empWorkEfficiencyPercentage', 3001, 'cbEmpWorkEfficiencyPercentage', JSON.stringify(apiReq));
}

/**
 * 2.1.43    象限图坐标点返回（HRS0043）.
 */
function quadrantCoordinatePoint() {
    api('/empEfficiency/quadrantCoordinatePoint', 3001, 'cbQuadrantCoordinatePoint', null);
}