$('body').click(function(e){
    var target=$(e.target),article;
    if(target.is('.mainpage')){
        $('.posts').load("/template/news.html");
        
    }
    if(target.is('.development')){
        $('.posts').load("/template/development.html");
        $('.written').hide();
    }
    if(target.is('.about')){
        $('.posts').load("/template/about.html");
    $('.written').hide();
    }
    if(target.is('.contact')){
        $('.posts').load("/template/contact.html");
        $('.written').hide();
        
    }
   
   
   
});