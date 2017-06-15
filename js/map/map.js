var map = new AMap.Map('container', {resizeEnable: true});//引入一个地图，实现地图
var markers = []; //province见Demo引用的JS文件

function showmap(city) {
//这儿是进入地图的时候需要获取的城市
    map.setCity(city);

    AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {//引入地图点击放大缩小功能
        //缩放控件
        map.addControl(new BasicControl.Zoom({
            position: {
                right: '10px',
                bottom: '30px'
            }
        }));
        // var zoom = map.getZoom();
        // var center = map.getCenter();
        //
        // console.log(zoom);
    });
    var zoom = map.getZoom();  //获取到当前的缩放大小zoom值
    var centers = map.getCenter();  //获取到中心点的坐标
    // var position = getCoordinate(map); //这是获取四个坐标点
    var center = centers.lat + "," + centers.lng;
    var widthHeight = $("#container").height() + "," + $("#container").width();//地图的宽高
    var checkChange = 1;
    if (zoom < 14) {
        map.setFitView();

        postInfoOverviewPng(widthHeight, zoom, center);
        checkChange = 2;
    } else {
        postInfoOverview();

    }
    map.on('moveend', function (e) {  //这是地图移动结束获取事件
        var zoom1 = map.getZoom();  //获取到当前的缩放大小zoom值
        var centers = map.getCenter();  //获取到中心点的坐标
        var center = centers.lat + "," + centers.lng;
        // var position = getCoordinate();
        if (zoom1 < 14) {
            map.clearMap();
            // map.setFitView();
            checkChange = 2;
            postInfoOverviewPng(widthHeight, zoom, center);
        } else {
            if (checkChange == 2) {
                postInfoOverview();
                checkChange = 1;
            }
        }

    });
    map.on('zoomend', function (e) { //这是放大缩小地图的事件
        var zoom2 = map.getZoom();
        var centers = map.getCenter();
        var center = centers.lat + "," + centers.lng;
        // callback(northWest, southwest, southEast, Northeast);
        if (zoom2 < 14) {
            map.clearMap();
            // map.setFitView();
            postInfoOverviewPng(widthHeight, zoom, center);
            checkChange = 2;
        } else {
            // var arr = postInfoOverview();
            if (checkChange == 2) {
                postInfoOverview();
                checkChange = 1;
            }
        }
    });

}
function generateImg(data) {
    groundImageOpts = {
        opacity: 1,   //图片透明度
        clickable: true,//图片相应鼠标点击事件，默认：false
        map: map     //图片叠加的地图对象
    };
    var bounds = new AMap.Bounds(map.getBounds().getSouthWest(), map.getBounds().getNorthEast());
    //console.log(map.getBounds().getCenter( ))
    //实例化一个图片覆盖物对象
    var groundImage = new AMap.GroundImage('data:image/png;base64,' + data, bounds, groundImageOpts);
}
function drop(data) { //这是获取点的函数 传递data数据进入后渲染点
    for (var i = 0; i < data.length; i++) {
        marker = new AMap.Marker({
            position: (data[i].latitudeAndLongitud.split(",")[0].substring(0, 10) + "," + data[i].latitudeAndLongitud.split(",")[1].substring(0, 9)).split(","),
//            position: ["116.405" + Math.floor(Math.random() * 100) + "6", "39.905" + Math.floor(Math.random() * 100) + "9"],
            title: ("dfadsf" + i) + "",
            map: map,
            icon: new AMap.Icon({
                image: function () {
                    if (data[i].postName === "渠道人员" && data[i].isAbnormal === "是") {
                        return "../../img/qudaoiconblue.png"
                    } else if (data[i].postName === "渠道人员" && data[i].isAbnormal === "否") {
                        return "../../img/qudaoicon.png"
                    } else if (data[i].postName === "装维经理" && data[i].isAbnormal === "是") {
                        return "../../img/zhuangwei.png"
                    } else if (data[i].postName === "装维经理" && data[i].isAbnormal === "否") {
                        return "../../img/zhuangweired.png"
                    } else {
                        return "../../img/zhuangweired.png"
                    }
                }(),
                size: new AMap.Size(64, 64),  //图标大小
                imageSize: new AMap.Size(32, 32)
            }),
            clickable: true

        });
        AMap.event.addListener(marker, 'click', function (e) {
            var position = marker.getPosition();
            var phone, post, coordin;
            var testLength = 0;
            for (var j = 0; j < data.length; j++) {
                coordin = data[j].latitudeAndLongitud.split(",")[0].substring(0, 10) + "," + data[j].latitudeAndLongitud.split(",")[1].substring(0, 9);
                if (coordin == position.lng + "," + position.lat) {
                    phone = data[j].phoneNum;
                    post = data[j].postName;

                }
            }

            viewEmpDetailsCB(phone, post);
            $(".map-popframe").show();
            //此处点击弹出个人详情框，可在此发送请求取出数据
        });
        markers.push(marker);
    }
    // map.setFitView();
}
function getCoordinate(map) { //这是获取四个方位坐标点的函数
    var bounds = map.getBounds();
    var southWest = bounds.getSouthWest();
    var NorthEast = bounds.getNorthEast();
    var size = map.getSize(); //这是获取地图窗口大小的函数
    // console.log(NorthEast);

    //获取左上角的坐标
    var leftTop_lng = southWest.lng;
    var leftTop_let = NorthEast.lat;
    var northWest = leftTop_lng + "," + leftTop_let; //这是左上角坐标  西北坐标点

    //获取右下角的坐标
    var rightBottom_let = NorthEast.lng;
    var rightBottom_lng = southWest.lat;
    var southEast = rightBottom_let + "," + rightBottom_lng; //这是右下角坐标 东南坐标点

    // 获取左下角坐标点
    var southwest = southWest.lng + "," + southWest.lat; //这是左下角坐标点  西南坐标点
    // console.log(southwest);

    // 获取右上叫坐标点
    var Northeast = NorthEast.lng + "," + NorthEast.lat; //这是右上角坐标点  东北坐标点

    // callback(northWest, southwest, southEast, Northeast);
    return {
        northWest: northWest,
        Northeast: Northeast,
        southwest: southwest,
        southEast: southEast

    }

}

//这是点击将弹出个人信息消失
$(".map-frame").siblings().on("touchend", function () {
    $(".map-popframe").hide();

});
//点击页面显示全景视图
$("#map-analyse").on("touchend", function () {
    $(this).css("color", "#e66440").siblings().css("color", "#666666");
    $(".map-person").stop().animate({"left": "0"}, 500);
    $(".map-potency").stop().animate({"left": "25rem"}, 500);
    empInPostSummary();
});
//点击显示柱状图
$("#map-estimate").on("touchend", function () {
    $(this).css("color", "#e66440").siblings().css("color", "#666666");
    $(".map-person").stop().animate({"left": "-25rem"}, 500);
    $(".map-potency").stop().animate({"left": "0"}, 500);
    taskPerformanceRanking();
});