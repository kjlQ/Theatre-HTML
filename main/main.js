$(".burg").on('click',function() {
    $(".links").toggleClass("active")
    $(".links").toggleClass("disable")
    $(".all-links").toggleClass("active-sidebar")
})
$(".links li a").on("click",function() {
    $(".links").toggleClass("active")
    $(".links").toggleClass("disable")
    $(".all-links").toggleClass("active-sidebar")
})