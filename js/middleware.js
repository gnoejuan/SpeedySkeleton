var middleware ={
    scrollTop: function(route, next){
        $(window).scrollTop(0);
        next();
    }
}