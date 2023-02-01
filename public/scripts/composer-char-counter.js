//$(document).ready runs a callback when the DOM is ready to be manipulated with jQuery. Without it we might accidentally try to access HTML elements that the browser hasn't had the chance to load, causing errors.

$(document).ready(function(){
  
  $("#tweet-text").on("keyup", function(e){  // inside the document, targeting the textbox
    
    const currentValue = $(this).val().length;  // calculate the current charecter
    const remainingCharacter = 140 - currentValue; // maximum is 140 character
    const counterElement = $(".counter");
    counterElement.text(remainingCharacter);

    if(remainingCharacter >= 50){
      counterElement.css('color','black');
    }else if(remainingCharacter < 50 && remainingCharacter > 0){
      counterElement.css('color','orange');
    } else {
      counterElement.css('color','red');
    }

  })

})