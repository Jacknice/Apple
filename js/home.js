
//滚动
$(".productshow").Xslider({
    unitdisplayed:5,
    numtoMove:1,
    loop:"cycle",
    autoscroll:2000
});
$(".baoming_list").Xslider({
    unitdisplayed:2,
    numtoMove:1,
    loop:"cycle",
    scrollobj:".newslist",
    dir:"V",
    autoscroll:2000,
    speed:500
});
//文字特效

elasticText(
    {
        id: 'floor1',
        color: '#929292',
        fontSize: 13,
        duration:50,
        effact:'easeOut',
        content: '申请尊享四大免费装修服务'
    },
    {
        id: 'floor2',
        color: '#929292',
        fontSize: 13,
        duration:50,
        effact:'easeOut',
        content: '装修案例 眼见为实，触动你的灵感'
    },
    {
        id: 'floor3',
        color: '#929292',
        fontSize: 13,
        duration:50,
        effact:'easeOut',
        content: '数百位行内精英设计师为您服务'
    },
    {
        id: 'floor4',
        color: '#929292',
        fontSize: 13,
        duration:50,
        effact:'easeOut',
        content: '官网预约 先享服务后定装'
    },
    {
        id: 'floor5',
        color: '#929292',
        fontSize: 13,
        duration:50,
        effact:'easeOut',
        content: '完整装修流程与攻略'
    }
);

