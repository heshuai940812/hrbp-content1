function taskPerformContrast() {
    var contrastType = 1; //对比类型
    var sites, post, time, type,multiName,types =1;
    var region1 = getRegion1();
    var areaList = getRegion2();
    var postList = getPostList();
    var timeList = getMonths();
    var getSite = getItem("getArea"); //默认区域
    var getPost = getItem("getPost"); //默认岗位
    var getTime = getItem("getDate"); //默认时间
    var fiveCode = getTime.substring(4,5);
    if(fiveCode !="."){
        getTime = getTime.substring(0,4)+"."+getTime.substring(4,getTime.length);
    }
    if(getTime.length>7){
        getTime = timeList[0] ;
    }
    var multiData = [], currentSingleSelectLeft = getPost, currentSingleSelectRight = getTime,
        multiSelectData = areaList, singleSelectLeft = postList, singleSelectRight = timeList;
//动态改变柱状图形上标题
    function createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight,sites) {
        $(".ch_columar_title").css("display", "block");
        if(types == 1){
            multiName = "区域"
        }else if(types == 2){
            multiName = "岗位"
        }else if(types == 3){
            multiName = "时间"
        }
        if(currentSingleSelectLeft.indexOf("全部")>=0 && currentSingleSelectRight.indexOf("全部")>=0){
            currentSingleSelectLeft = "";
        }
        if(sites == "全部"){
           currentSingleSelectLeft = region1;
        }
        if (multiData.length == 0) {
            var multiString = '<span class="title-color"></span>';
        }
        else if (multiData.length == 1) {
            var multiString = '<span class="title-color">' + multiData[0] + '</span>';
        }
        else if (multiData.length == 2) {
            var multiString = '<span class="title-color">' + multiData[0] + '</span>与<span class="title-color">' + multiData[1] + '</span>';
        }
        else {
            var multiString = '<span class="title-color">' + multiData[0] + '</span>与<span class="title-color">' + multiData[1] + '</span>等' + multiData.length+"个" + multiName;
        }
        $(".multiSelectName").html(multiString);
        $(".currentSingleLeftName").html(currentSingleSelectLeft);
        $(".currentSingleRightName").html(currentSingleSelectRight);
        multiData = "";
        currentSingleSelectLeft = "";
        currentSingleSelectRight = "";
    }

//首次加载
    function selectList(container, selectData) {
        $(container).children("li").remove();
        for(var i = 0;i<selectData.length;i++){
            var newDom = $("<li></li>");
            if(container != ".addAreaList ul"){
                if(selectData[i]==currentSingleSelectLeft ||selectData[i]==currentSingleSelectRight ){
                    $(newDom).addClass('selectedList');
                }
            }else{
                var index = selectData[i].indexOf("全部");
                if(index>-1){
                    $(newDom).css("display","none");
                }
            }
            newDom.text(selectData[i]);
            $(container).append(newDom);
        }
    }

    selectList(".addAreaList ul", multiSelectData);
    selectList("#selectLeftArea ul", singleSelectLeft);
    selectList("#selectRightArea ul", singleSelectRight);
    $("#rightSelect .currentSelect").html(currentSingleSelectRight);
    $("#leftSelect .currentSelect").html(currentSingleSelectLeft);

//tab切换
    function tabChange(param1, param2, param3, type, left, right, title) {
        contrastType = type;
         multiData = [];
        currentSingleSelectLeft = null;
        currentSingleSelectRight = null;
        $(title).css("display", "block").siblings().css("display", "none");
        multiSelectData = param1;
        singleSelectLeft = param2;
        singleSelectRight = param3;
        currentSingleSelectLeft = left;
        currentSingleSelectRight = right;
        $("#leftSelect .currentSelect").html(currentSingleSelectLeft);
        $("#rightSelect .currentSelect").html(currentSingleSelectRight);
        selectList(".addAreaList ul", multiSelectData);
        selectList("#selectLeftArea ul", singleSelectLeft);
        selectList("#selectRightArea ul", singleSelectRight);
    }

    function changeStyle() {
        num = 0;
        $(".icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        $("#columar-area,.ch_columar_title,.columar-tip").css("display", "none");
        $(".multiSelect").children("li.selectedList").remove();
    }

    $('.contrastList li').on('touchend', function (e) {
        e.preventDefault();
        var i = $(this).index();
        $('.contrastList li').removeClass('currentOption').eq(i).addClass('currentOption');
        i = i + 1;
        $(".contrastList").css("background-image", "url(../../img/positionChangeContrast/contrastSwipeBg" + i + ".png)");
        $(".addAreaList,#selectLeftArea,#selectRightArea").css("display", "none");
        $(".addAreaList ul li").removeClass('selectedList');
        if (i == 1) {
            types = 1;
            changeStyle();
            tabChange(areaList, postList, timeList, 1, getPost, getTime, ".areaTitle");
        } else if (i == 2) {
            types = 2;
            changeStyle();
            tabChange(postList, areaList, timeList, 2, getSite, getTime, ".stationTitle");
        } else if (i == 3) {
            types = 3;
            changeStyle();
            tabChange(timeList, areaList, postList, 3, getSite, getPost, ".titleTitle");
        }
    });

//维度添加和选择
    var num = 0, currentObj;

    function contrastSelect(param1, param2, param3, param4) {
        if (currentObj != param1) {
            num = 0;
            $(currentObj + ' .icon-shangla').removeClass("icon-shangla").addClass("icon-xiala");
        }
        num++;
        currentObj = param1;
        if (num % 2 != 0) {
            $(param1 + ' .icon-xiala').removeClass("icon-xiala").addClass("icon-shangla");
            $(param2).css("display", "block");
        } else {
            $(param1 + ' .icon-shangla').removeClass("icon-shangla").addClass("icon-xiala");
            $(param2).css("display", "none");
        }
        $(param3).css("display", "none");
        $(param4).css("display", "none");
    }

    $(".addContrast").click(function () {
        contrastSelect(".addContrast", ".addAreaList", "#selectLeftArea", "#selectRightArea");
    });
    $("#leftSelect").click(function () {
        contrastSelect("#leftSelect", "#selectLeftArea", ".addAreaList", "#selectRightArea");
    });
    $("#rightSelect").click(function () {
        contrastSelect("#rightSelect", "#selectRightArea", "#selectLeftArea", ".addAreaList");
    });

//多维度取消选择
    $(".addAreaList ul").on("touchend", "li", function () {
        var selectedLength = $(".addAreaList ul .selectedList").length;
        if ($(this).hasClass('selectedList')) {
            $(this).removeClass('selectedList');
            selectedLength--;
            if(selectedLength>=5){
                $(".addAreaList ul li[class !='selectedList']").addClass("disabled");
            }else{
                $(".addAreaList ul li.disabled").removeClass("disabled");
            }
        } else {
            $(this).addClass('selectedList');
            selectedLength++;
            if(selectedLength>=5){
                $(".addAreaList ul li[class !='selectedList']").addClass("disabled");
            }
        }
    });
    $(".addAreaList ul").on("touchend","li.disabled",function(){
        $(this).removeClass('selectedList');
    });

//多维度添加确定
    function jsonData() {
        if (contrastType == 1) {
            sites = multiData;
            post = currentSingleSelectLeft;
            time = currentSingleSelectRight;
            type = 1;
        }
        if (contrastType == 2) {
            sites = currentSingleSelectLeft;
            post = multiData;
            time = currentSingleSelectRight;
            type = 2;
        }
        if (contrastType == 3) {
            sites = currentSingleSelectLeft;
            post = currentSingleSelectRight;
            time = multiData;
            type = 3;
        }
    };
    $(".btnOk").click(function () {
        $(".multiSelect").children("li.selectedList").remove();
        multiData = [];
        num = 0;
        var selectedDom = $(".addAreaList ul li.selectedList");
        for (var i = 0; i < selectedDom.length; i++) {
            var selectedDomValue = $(selectedDom[i]).html();
            multiData.push(selectedDomValue);
            var newDom = $("<li></li>");
            newDom.text(selectedDomValue);
            $(newDom).addClass('selectedList');
            $(".multiSelect").prepend(newDom);
        }

        $(".addAreaList").css("display", "none");
        $(".addContrast .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        jsonData();
        workEfficiencyContrast(sites, post, time, type);
        createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight,sites,1);
    });

//左单维选择
    $("#selectLeftArea ul").on("touchend", "li", function () {
        num = 0;
        $("#leftSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        var val = $(this).html();
        currentSingleSelectLeft = val;
        $("#leftSelect i").html(val);
        $('#selectLeftArea ul li').removeClass('selectedList');
        $(this).addClass('selectedList');
        jsonData();
        workEfficiencyContrast(sites, post, time, type);
        createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight,sites,2);
        $("#selectLeftArea").css("display", "none");
    });

//右单维选择
    $("#selectRightArea ul").on("touchend", "li", function () {
        num = 0;
        $("#rightSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        var val = $(this).html();
        currentSingleSelectRight = val;
        $("#rightSelect i").html(val);
        $('#selectRightArea ul li').removeClass('selectedList');
        $(this).addClass('selectedList');
        jsonData();
        workEfficiencyContrast(sites, post, time, type);
        createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight,sites,3);
        $("#selectRightArea").css("display", "none");
    });

//阻止事件冒泡
    var addAreaList = document.querySelector(".addAreaList");
    var whiteBg = document.querySelector(".whiteBg");
    var selectLeftArea = document.querySelector("#selectLeftArea");
    var selectRightArea = document.querySelector("#selectRightArea");
    whiteBg.addEventListener('touchend', function (e) {
        e.stopPropagation();
    });
    addAreaList.addEventListener('touchend', function (e) {
        $(this).css("display", "none");
        $('.addAreaList ul li').removeClass('selectedList');
        num = 0;
        $(".addContrast .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
    });
    selectLeftArea.addEventListener('touchend', function (e) {
        $(this).css("display", "none");
        num = 0;
        $("#leftSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
    });
    selectRightArea.addEventListener('touchend', function (e) {
        $(this).css("display", "none");
        num = 0;
        $("#rightSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
    });
}