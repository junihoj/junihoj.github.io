$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 300){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function (e) { 
       $('.navbar .menu').toggleClass('active');
    });
});