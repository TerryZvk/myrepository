

$(function(){
    $('#slider').pogoSlider({
    	slideTransition:"fade",
    	responsive:true,
    	generateButtons:true,
    	displayProgess:false
    });
    $(".submenu").hide();
    $(".menu .item").mouseover(function(){
    	
    	var selector=$(this).attr("data-id");
    	$("."+selector).show();
    })
    $(".menu .item,.submenu").mouseout(function(){
    	 $(".submenu").hide();
    })
    $(".submenu").mouseover(function(){
    	$(this).show();
    })
});