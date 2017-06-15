var apiReq = {};

function flowAnalyApi(json) {
    CTSI_API_JSON = JsonParse(json);
    apiReq = getArea();
    apiReq.date = CTSI_API_JSON.months[0].replace('.', '');
    // 2.1.5    岗位稳定指数.
    api('/mobilityAnalysis/positionStabilityIndex', 3001, 'cbPositionStabilityIndex', JSON.stringify(apiReq));
}

function empInPostIndex() {
    // 2.1.6    员工在岗指数.
    api('/mobilityAnalysis/empInPostIndex', 3001, 'cbEmpInPostIndex', JSON.stringify(apiReq));
}
function turnoverIntentionIndex() {
// 2.1.7    离职倾向指数.
    api('/mobilityAnalysis/turnoverIntentionIndex', 3001, 'cbTurnoverIntentionIndex', JSON.stringify(apiReq));
}
function remainInCity() {
// 2.1.8    留在本市指数.
    api('/mobilityAnalysis/remainInCity', 3001, 'cbRemainInCity', JSON.stringify(apiReq));
}