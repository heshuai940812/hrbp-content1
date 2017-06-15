var apiReq = {};

function leaveDirectionApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, leaveDirectionClick, false);
    apiReq = getApiReq(true);
    // apiReq.date = apiReq.date.substring(4, apiReq.date.length);
    // 2.1.16	离职去向占比
    api('/mobilityAnalysis/empDimissionWhereabouts', 3001, 'cbEmpDimissionWhereabouts', JSON.stringify(apiReq));
}

function empDimissionCityDetails() {
    // 2.1.17	离职去往城市详情
    api('/mobilityAnalysis/empDimissionCityDetails', 3001, 'cbEmpDimissionCityDetails', JSON.stringify(apiReq));

}

function leaveDirectionClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month, true);
    // 2.1.16	离职去向占比
    api('/mobilityAnalysis/empDimissionWhereabouts', 3001, 'cbEmpDimissionWhereabouts', JSON.stringify(apiReq));
}
function formDataDay(day) {
    leaveDirectionClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    leaveDirectionClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}