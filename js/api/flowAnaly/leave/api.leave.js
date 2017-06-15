var apiReq = {};

function leaveApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, leaveClick,false);
    apiReq = getApiReq(true);
    // 2.1.14	离职概率占比
    api('/mobilityAnalysis/empDimissionProportion', 3001, 'cbEmpDimissionProportion', JSON.stringify(apiReq));
}
function empDimissionInclination() {
    // 2.1.15	各类员工离职倾向占比
    api('/mobilityAnalysis/empDimissionInclination', 3001, 'cbEmpDimissionInclination', JSON.stringify(apiReq));

}

function leaveClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month, true);
    // 2.1.14	离职概率占比
    api('/mobilityAnalysis/empDimissionProportion', 3001, 'cbEmpDimissionProportion', JSON.stringify(apiReq));
}
function formDataDay(day) {
    leaveClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    leaveClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}