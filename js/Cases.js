$(".caseDetail-push-head").mouseover(function() {
    $(this).parent().find(".caseDetail-box").removeClass("hide");
});
$(".caseDetail-push-head").mouseout(function() {
    $(this).parent().find(".caseDetail-box").addClass("hide");
});
$(".caseDetail-box").mouseover(function() {
    $(this).removeClass("hide");
});
$(".caseDetail-box").mouseout(function() {
    $(this).addClass("hide");
});