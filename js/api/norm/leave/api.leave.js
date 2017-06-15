var apiReq = {};

/**
 * 2.1.23    用工离岗整体占比图.
 */
function workersDemobilizedProportion() {
    api('/empNorm/workersDemobilizedProportion', 3001, 'cbWorkersDemobilizedProportion', JSON.stringify(apiReq));
}

/**
 * 2.1.24    各地区用工离岗情况排.
 */
function regionWorkersDemobilizedRanking() {
    api('/empNorm/regionWorkersDemobilizedRanking', 3001, 'cbRegionWorkersDemobilizedRanking', JSON.stringify(apiReq));
}

function normLeaveApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, normLeaveClick, false);
    apiReq = getApiReq(true);
    workersDemobilizedProportion();
}

function normLeaveClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month, true);
    workersDemobilizedProportion();
}
function formDataDay(day) {
    normLeaveClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    normLeaveClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}