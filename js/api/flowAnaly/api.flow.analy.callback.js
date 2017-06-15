function cbPositionStabilityIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#position_stability_index').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'position_stability_index');
            // scaleMap2('post_change_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('post_change_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
        empInPostIndex();
    }
    if (checkCodeEqualsOther(json)) {
        empInPostIndex();
    }
}

function cbEmpInPostIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#emp_in_post_index').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'emp_in_post_index');
            // scaleMap2('post_unusual_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('post_unusual_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
        turnoverIntentionIndex();
    }
    if (checkCodeEqualsOther(json)) {
        turnoverIntentionIndex();
    }
}

function cbTurnoverIntentionIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#turnover_intention_index').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'turnover_intention_index');
            // scaleMap2('leave_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('leave_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
        remainInCity();
    }
    if (checkCodeEqualsOther(json)) {
        remainInCity();
    }
}

function cbRemainInCity(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#remain_in_city').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'remain_in_city');
            // scaleMap2('leave_direction_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('leave_direction_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
    }
}