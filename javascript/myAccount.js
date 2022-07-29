





// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page





// start navbar all width device



$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device
 












// start tabs content

$(".anchor").click(function(){
    $(".content").removeClass('active');
    $(".content:eq(" +$('.anchor').index(this)+")").addClass('active');
    // $(".col-4 .active").css({"background":"red"})
    $(".anchor").css({"background":"transparent","color":"#151515"});
    $(".anchor:eq(0)").css({"background":"transparent","color":"#151515"});
    $(this).css({"background":"#0163D2","color":"#fff"})
})


// end tabs content


// start show password 

$("#cpassowrd").on("keyup",function() {
    if($(this).val() === "") {
        $(".show-Cpass").hide()
    } else {
        $(".show-Cpass").show()
    }
})



$(".show-Cpass").click(function() {
    if($(this).attr("toggle") === "0") {
        $("#cpassowrd").attr("type","text")
        $(this).attr("toggle","1");
    } else {
        $("#cpassowrd").attr("type","password")
        $(this).attr("toggle","0");
    }
})




$("#conpassowrd").on("keyup",function() {
    if($(this).val() === "") {
        $(".show-Conpass").hide()
    } else {
        $(".show-Conpass").show()
    }
})




$(".show-Conpass").click(function() {
    if($(this).attr("toggle") === "0") {
        $("#conpassowrd").attr("type","text")
        $(this).attr("toggle","1");
    } else {
        $("#conpassowrd").attr("type","password")
        $(this).attr("toggle","0");
    }
})



$("#npassowrd").on("keyup",function() {
    if($(this).val() === "") {
        $(".show-NewPass").hide()
    } else {
        $(".show-NewPass").show()
    }
})




$(".show-NewPass").click(function() {
    if($(this).attr("toggle") === "0") {
        $("#npassowrd").attr("type","text")
        $(this).attr("toggle","1");
    } else {
        $("#npassowrd").attr("type","password")
        $(this).attr("toggle","0");
    }
})


//  end show password 