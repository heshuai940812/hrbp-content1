var calendar = new lCalendar();
calendar.init({
    'trigger': '#showdata',
    'type': 'date'
});
calendar.init({
    'trigger': '#daysDate',
    'type': 'date'
});
var calendarMonth = new lCalendar();
calendarMonth.init({
    'trigger': '#monthDate',
    'type': 'month'
});
$(".date_btn_box").css("display","none");
$(".post-posttime").on("touchend",function () {
    $(".post-timeShow").stop().fadeToggle();
    $(".post-closetime").stop().fadeToggle();
    $(".post-posttime .icon-xiala").toggleClass("icon-shangla");

})
$(".post-closetime").on("touchend",function () {
    $(".post-timeShow").stop().fadeToggle();
    $(".post-closetime").stop().fadeToggle();
    $(".post-posttime .icon-xiala").toggleClass("icon-shangla");
})
$(".post-timeShow").on("touchend","span",function () {
    $(this).addClass("post-timeclick").siblings().removeClass("post-timeclick");
    var index = $(this).index();
    var txt = $(this).html();
    console.log(txt);
    $(".post-posttime span").html("在岗时长"+txt+" ");
})
var data = [
    {
        region2 :　"东城区",
        region3 : [
            "安抚卫生服务而非",
            "东方卫视的范围",
            "单位埃尔文",
            "是否为而服务",
            "史蒂文安稳区分",
            "是打发违法未放弃无符文",
        ]
    },
    {
        region2 :　"西城区",
        region3 : [
            "大废物发生的访问法",
            "的三分闻风丧胆访问方式的范围",
            "大额我发的是访问",
            "的身份无法飒飒的范围",
            "的是否为发送到服务",
            "的无法闻风丧胆",
            "干妈风味发",
            "大范围放弃违法",
        ]
    },
    {
        region2 :　"海淀区",
        region3 : [
            "大师傅违法服务",
            "是打发的范围",
            "的萨芬违法的是否为",
            "大访问方式的称为",
            "是打发额无法为其",
            "大富翁发大水发文",
            "发vs方式单位房去重v中文网",
            "大范围艾弗森的氛围",
        ]
    },
    {
        region2 :　"朝阳区",
        region3 : [
            "大事发生的发问",
            "大微风物权法",
            "大访问方式的范围",
            "是打发违法第三方",
            "大废物发我",
            "苏打粉无法的范围",
            "大幅闻风丧胆",
            "大闻风丧胆",
        ]
    },
    {
        region2 :　"通州区",
        region3 : [
            "出vs打的娃儿",
            "大范围放弃违法",
            "大师傅为啥分",
            "大富翁群二二群热无",
            "大富翁群群二群二",
            "大访问方式的范围",
            "打发威锋网",
            "大废物发斯蒂芬色",
        ]
    },
    {
        region2 :　"昌平区",
        region3 : [
            "出vs打的娃儿",
            "大范围放弃违法",
            "大师傅为啥分",
            "大富翁群二二群热无",
            "大富翁群群二群二",
            "大访问方式的范围",
            "打发威锋网",
            "大废物发斯蒂芬色",
        ]
    },
    {
        region2 :　"大兴区",
        region3 : [
            "出vs打的娃儿",
            "大范围放弃违法",
            "大师傅为啥分",
            "大富翁群二二群热无",
            "大富翁群群二群二",
            "大访问方式的范围",
            "打发威锋网",
            "大废物发斯蒂芬色",
        ]
    },
];
var data1 = [
    {
        region2 :　"装维人员",
        region3 : [

        ]
    },
    {
        region2 :　"渠道人员",
        region3 : [

        ]
    },
    {
        region2 :　"全部人员",
        region3 : [

        ]
    }
];
h_region(data1,{
    overallId : "personnelDown", //点击弹出框的父盒子的ID名
    developDrop : "base-header", //这是点击顶部信息弹出框的类名
    developIcon : "base-chead",
    leftDrop : "base-leftDrop", //左侧弹出的的类名  市区的类名
    rightDrop : "base-rightDrop",//右侧弹出的类名  详情区域的类名
    closeDrop : "base-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
});
h_region(data,{
    overallId : "droplDown", //点击弹出框的父盒子的ID名
    developDrop : "base-header", //这是点击顶部信息弹出框的类名
    developIcon : "base-lhead",
    leftDrop : "base-area-leftDrop", //左侧弹出的的类名  市区的类名
    rightDrop : "base-area-rightDrop",//右侧弹出的类名  详情区域的类名
    closeDrop : "base-area-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
});


