var apiReq = {};

/**
 * 2.1.25    用工增岗整体占比图.
 */
function workersZengGangProportion() {
    api('/empNorm/WorkersZengGangProportion', 3001, 'cbWorkersZengGangProportion', JSON.stringify(apiReq));
}

/**
 * 2.1.26    各地区用工增岗情况排名.
 *
 */
function regionWorkersZengGangRanking() {
    api('/empNorm/regionWorkersZengGangRanking', 3001, 'cbRegionWorkersZengGangRanking', JSON.stringify(apiReq));
}

function normIncreaseApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, normIncreaseClick, false);
    apiReq = getApiReq(true);
    workersZengGangProportion();
}

function normIncreaseClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month, true);
    workersZengGangProportion();
}
function formDataDay(day) {
    normIncreaseClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    normIncreaseClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}