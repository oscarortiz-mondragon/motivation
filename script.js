// For Quotes buttons

let $danger = $(".btn-danger")
let $success = $(".btn-success")

$(function(){
$('#quoteHolder').hide()
$danger.hide();
});
$success.on('click',function(){
$success.hide();
$('#quoteHolder').slideDown(500);
$danger.slideDown(510);
$danger.on('click',function(){
$danger.hide();
$("#quoteHolder").slideUp(500);
$success.slideDown(510);
})
})

