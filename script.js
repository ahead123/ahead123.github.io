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
    var $message = $('form input:nth-of-type(4)');
    // show error if no message
    if($message.val() === "Message" || $message.val() === ""){
      $message.val("please enter a message before submitting").css("color", "red");
        $message.click(function(){
          $message.val("");
          $message.css("color", "#fff");
        });
    }else{
      // display thank you message with persons name
      $('div#contact').find('form').hide();
      var name = $('div#contact').find('form input#name').val();
      $('div#contact').css('height', '300px');
      $('#mail-greeting').text(name);
      $('#thanks').show('slow');
    }
  });

  // clear contact inputs on click
  $('form input').click(function(){
    if($(this).val() === "Phone_number" || $(this).val() === "Name" || $(this).val() === "Email" || $(this).val() === "Message"){
      $(this).val("");
    }  
  });


});
