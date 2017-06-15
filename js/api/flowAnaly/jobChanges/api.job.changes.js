var apiReq = {};
var warningValueNum = 0;

function jobChangesApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, jobChangeClick, false);
    apiReq = getApiReq(true);
    // 2.1.9	岗位变动整体占比图
    api('/mobilityAnalysis/positionChangeWhole', 3001, 'cbPositionChangeWhole', JSON.stringify(apiReq));
}
function regionPostChange() {
    // 2.1.10	各地区岗位变动情况排名
    api('/mobilityAnalysis/regionPostChange', 3001, 'cbRegionPostChange', JSON.stringify(apiReq));
}

function jobChangeClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month, true);
    // 2.1.9	岗位变动整体占比图
    api('/mobilityAnalysis/positionChangeWhole', 3001, 'cbPositionChangeWhole', JSON.stringify(apiReq));
}
function formDataDay(day) {
    jobChangeClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    jobChangeClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}