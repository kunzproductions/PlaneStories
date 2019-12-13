// jquery
/* global $, document, TweenMax, window, alert*/



  $(document).ready(function() {
    var W = $(window).width();
    
      
    var MenuW = ["100vw", "100px", "0%", "0%", "auto"]
    var MenuW_ul = ["60%", "50px", "40vw", "0%"]
    var MenuW_li = ["left", "20%"]

    var HMenu = "-100px";
    $("#HMenu").hide();
      
      
      
    if(W == 768) {
        MenuW_ul = ["80%", "50px", "17vw", "0%"]
        MenuW = ["100vw", "100px", "0%", "0%", "auto"]
        MenuW_li = ["left", "20%"]
        
        HMenu = "-100px";
        $("#HMenu").hide();
        
    } else if(W == 480) {
        MenuW_ul = ["100%", "auto", "0%", "30%"]
        MenuW = ["60vw", "100vh", "0%", "auto", "0vw"]
        MenuW_li = ["auto", "100%"]
        
        HMenu = "0px";
        $("#HMenu").show();
        TweenMax.set("#W_Menu", {marginRight: "-60vw"})
    }
    
    $("#W_Menu").css({width: MenuW[0], height: MenuW[1], top: MenuW[2], left: MenuW[3]});
    $("header").css({right: MenuW[4]});
    
    $("#W_Menu ul").css({width: MenuW_ul[0], height: MenuW_ul[1], left: MenuW_ul[2], paddingTop: MenuW_ul[3]});
    $("#W_Menu li").css({float: MenuW_li[0], width: MenuW_li[1]});
    
    $("#W_Menu li").hover(function() {
        $(this).find("a").css({color: "#2c2052"})
    }, function() {
         $(this).find("a").css({color: "#FFF"})
    })
    
    $("#W_Menu li.active").hover(function() {
        $(this).find("a").css({color: "#FFF"})
    }, function() {
         $(this).find("a").css({color: "#FFF"})
    })
    
    $(this).on("mousewhell DOMMouseScroll", function(e) { //mousewhell > firefox, DOMMouseScroll > MacOS
//        e.preventDefault();
        if(e.originalEvent.detail >= 0 || e.originalEvent.WheelDelta <= 0) {
            TweenMax.to("#W_Menu, #W_Logo", .2, {marginTop: HMenu})
        } else {
            TweenMax.to("#W_Menu, #W_Logo", .2, {marginTop: "0px"})
        }
    })

    
    
    
    var NH_Menu = 0;
    
    
    $("#HMenu").click(function() {
        if(NH_Menu == 1) {
            NH_Menu = 0;
            TweenMax.to("#W_Menu", .5, {marginRight: "-60vw"})
        } else {
            NH_Menu = 1;
            TweenMax.to("#W_Menu", .5, {marginRight: "0vw"})
        }
    })
  });