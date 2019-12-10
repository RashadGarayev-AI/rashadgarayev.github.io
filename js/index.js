$('body').click(function(e){
    var target=$(e.target),article;
    if(target.is('#course')){
        $('#course-frame').load("course.html .courses");
        $('.written').hide();
    }
    if(target.is('#teaching')){
        $('#course-frame').load("teaching.html");
        $('.written').hide();
    }
    if(target.is('#lifestyle')){
        $('#course-frame').load("lifestyle.html");
    $('.written').hide();
    }
    if(target.is('#posts')){
        $('#course-frame').load("posts.html");
        $('.written').hide();
        
    }
    if(target.is('#about')){
        $('#course-frame').load("about.html");
        $('.written').hide();
    }
    if(target.is('#contact')){
        $('#course-frame').load("contact.html");
        $('.written').hide();
    }
   
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
}
