$(document).ready(function(){
    let slideIndex = 0;
    showSlides(slideIndex);
  
    function showSlides(index) {
      const slides = $('.slider_image');
      if (index >= slides.length) { slideIndex = 0; }
      if (index < 0) { slideIndex = slides.length - 1; }
      slides.css('display', 'none');
      slides.eq(slideIndex).css('display', 'block');
    }
  
    $('.previous_button').click(function(){
      showSlides(--slideIndex);
    });
  
    $('.next_button').click(function(){
      showSlides(++slideIndex);
    });
  });