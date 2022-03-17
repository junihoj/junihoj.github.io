$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 300){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            console.log("i am called")
            $('.scroll-button').addClass('show')
        }else{
            $('.scroll-button').removeClass('show')
        }
    });

    $('.scroll-button').click(function(){
        $('html').animate({scrollTop:0})
    })

    $('.menu-btn').click(function (e) { 
       $('.navbar .menu').toggleClass('active');
    });

    
});