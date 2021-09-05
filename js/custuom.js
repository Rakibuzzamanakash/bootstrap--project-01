

$(document).ready(function(){
    // banner slider
    $('.banner-slider').slick({
      autoplay:true,
      arrows:false,
      dots:true,
    });

    // about popup 
    $('.venobox').venobox({
        closeColor: 'var(--bcol)',
    }); 
  });