$(document).ready(function(){

  // jquery smooth scrolling links
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  // submit contact form and show message
  $('#submit').click(function(e){
    e.preventDefault();
    $('div#contact').find('form').hide();
    var name = $('div#contact').find('form input#name').val();
    $('div#contact').css('height', '300px');
    $('#mail-greeting').text(name);
    $('#thanks').show('slow');
  });


});
