   $("#development").click(function() {
    $('html,body').animate({
        scrollTop: $(".posts").offset().top},
        'slow');
});


$('.posts').load("/template/news.html");
$('body').click(function(e){
    var target=$(e.target),article;
     if(target.is('#postpage')){
        $('.posts').load("/template/news.html");
       
    };
  

    if(target.is('#development')){
        $('.posts').load("/template/development.html");
    
    };
 
    if(target.is('#contact')){
        $('.posts').load("/template/contact.html");
       
        
    };
    
  
       
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


