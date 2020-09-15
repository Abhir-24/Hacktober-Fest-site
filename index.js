  
$(document).ready(function() {
    $("#links").hide();
    $("#menu-btn").click(changeNav);
  
    function changeNav() {
      $("#links").toggle(2000);
      $("#menu-btn").toggleClass("turn");
    }
  });


  $(document).ready(function() {
    let number = parseInt($('.pull').text(), 10) || 0; 


    let interval = setInterval(function() {
        $('.pull').text(number++); 

        if (number > 100000) {
            clearInterval(interval); 
        }
    }, 300); 
}); 


$(document).ready(function() {
  let number2 = parseInt($('.comp').text(), 10) || 0; 

  let interval2 = setInterval(function() {
      $('.comp').text(number2++); 

      if (number2 > 100000) {
          clearInterval(interval2); 
      }
  }, 200); 
}); 
