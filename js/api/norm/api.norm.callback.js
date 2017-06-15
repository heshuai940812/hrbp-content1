function cbSpecificationIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint("norm_index_twig", "r_norm_index_twig");
        $.each(json.data, function (i, item) {
            $('#specification_index').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'specification_index');
            // scaleMap2('norm_index_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('norm_index_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
        zengGangIndex();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist("norm_index_twig", "r_norm_index_twig");
        zengGangIndex();
    }
}

function cbZengGangIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint("norm_increase_twig", "r_norm_increase_twig");
        $.each(json.data, function (i, item) {
            $('#zenggang_index').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'zenggang_index');
            // scaleMap2('norm_increase_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('norm_increase_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
        demobilizedIndex();
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist("norm_increase_twig", "r_norm_increase_twig");
        demobilizedIndex();
    }
}

function cbDemobilizedIndex(json) {
    json = JsonParse(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        removePoint("norm_leave_twig", "r_norm_leave_twig");
        $.each(json.data, function (i, item) {
            $('#demobilized_index').html(parseInt(item.index));
            checkIndexRedByIndex(item.index, 'demobilized_index');
            // scaleMap2('norm_leave_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
            scaleMap2Stage('norm_leave_twig', 'norm-ltwig', 'norm-rtwig', item.index, getRProportion(item.index, 0));
        });
    }
    if (checkCodeEqualsOther(json)) {
        checkDivIfExist("norm_leave_twig", "r_norm_leave_twig");
    }
}