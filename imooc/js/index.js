

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

     $("#signin").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
         $(".signin").removeClass("hidden").addClass("show");
           $(".signup").removeClass("show").addClass("hidden");
    })
     $("#signup").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".signup").removeClass("hidden").addClass("show");
           $(".signin").removeClass("show").addClass("hidden");
    })
       $(".close").click(function(){
        $(".loggin").removeClass("show").addClass("hidden");
         $(".bgshadow").removeClass("show").addClass("hidden");
      })
     $("#sign-in").click(function(){
        $("#signin").addClass("active").siblings().removeClass("active");
       $(".loggin").removeClass("hidden").addClass("show");
       $(".bgshadow").removeClass("hidden").addClass("show");
     })
     $("#sign-up").click(function(){
        $("#signup").addClass("active").siblings().removeClass("active");
         $(".signup").addClass("show").removeClass("hidden");
          $(".signin").addClass("hidden").removeClass("show");
       $(".loggin").removeClass("hidden").addClass("show");
       $(".bgshadow").removeClass("hidden").addClass("show");
     })
     $(".bgshadow").click(function(){
        $(".loggin").removeClass("show").addClass("hidden");
         $(".bgshadow").removeClass("show").addClass("hidden");
     })

      $("input[name='email']").blur(function(){
            var loginEmail = $.trim($("input[name='email']").val());
            if (loginEmail == null || loginEmail == '邮箱' || loginEmail == "") {
                $(".emailwarn").empty().text("您的邮箱账号忘记输入了").css("visibility","visible").css("opacity","1");
                }
                else {
                    var a=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
                    if(a.test(loginEmail)){
                        $(".emailwarn").css("visibility","visible").css("opacity","1");
                        return true;
                    }
                    else {
                        $(".emailwarn").text("请输入正确的邮箱账号").css("visibility","visible").css("opacity","1");
                    }
                }
      })
       $("input[name='email']").blur(function(){
            var loginEmail = $.trim($("input[name='email']").val());
            if (loginEmail == null || loginEmail == '邮箱' || loginEmail == "") {
                $(".signupmail").empty().text("您的邮箱账号忘记输入了").css("visibility","visible").css("opacity","1");
                }
                else {
                    var a=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
                    if(a.test(loginEmail)){
                        $(".signupmail").css("visibility","hidden").css("opacity","0");
                        return true;
                    }
                    else {
                        $(".signupmail").text("请输入正确的邮箱账号").css("visibility","visible").css("opacity","1");
                    }
                }
      })
      $("input[name='password']").blur(function(){
             var password = $.trim($("input[name='email']").val());
             if(password==null||password==""){
                $(".passwordwarn").empty().text("密码不能为空！").css("visibility","visible").css("opacity","1");
             }else{
                var a=/^([a-z0-9A]){6,16}$/;
                if(a.test(password)){
                    $(".passwordwarn").css("visibility","hidden").css("opacity","0");
                    return true;
                }else{
                    $(".passwordwarn").text("请输入6-16位密码，区分大小写，不能使用空格！").css("visibility","visible").css("opacity","1");
                }
             }
      })
            
            
        





})