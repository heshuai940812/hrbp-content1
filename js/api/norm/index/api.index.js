var apiReq = {};

/**
 * 2.1.21    用工规范整体占比图.
 */
function empSpecification() {
    api('/empNorm/empSpecification', 3001, 'cbEmpSpecification', JSON.stringify(apiReq));
}

/**
 * 2.1.22    各地区用工规范情况排名.
 */
function regionSpecificationRanking() {
    api('/empNorm/regionSpecificationRanking', 3001, 'cbRegionSpecificationRanking', JSON.stringify(apiReq));
}

function normIndexApi(json) {
    CTSI_API_JSON = JsonParse(json);
    getHead(CTSI_API_JSON, normIndexClick, false);
    apiReq = getApiReq(true);
    empSpecification();
}

function normIndexClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month, true);
    empSpecification();
}
function formDataDay(day) {
    normIndexClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), day);
}
function formDataMouth(month) {
    normIndexClick(getItem("getArea"), getItem("getArea1"), getItem("getPost"), month);
}