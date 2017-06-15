var apiReq = {};

function normApi(json) {
    CTSI_API_JSON = JsonParse(json);
    apiReq = getArea();
    apiReq.date = CTSI_API_JSON.months[0].replace('.', '');
    specificationIndex();
}

/**
 * 2.1.40    用工规范指数.
 */
function specificationIndex() {

    api('/empNorm/specificationIndex', 3001, 'cbSpecificationIndex', JSON.stringify(apiReq));

}
/**
 * 2.1.41    用工增岗指数.
 */
function zengGangIndex() {
    api('/empNorm/zengGangIndex', 3001, 'cbZengGangIndex', JSON.stringify(apiReq));

}
/**
 * 2.1.42    用工离岗指数.
 */
function demobilizedIndex() {
    api('/empNorm/demobilizedIndex', 3001, 'cbDemobilizedIndex', JSON.stringify(apiReq));

}