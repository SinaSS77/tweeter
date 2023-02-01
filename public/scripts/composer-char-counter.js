//responsible for character counter of tweet input form
$(document).ready(function () {
  $('#tweet-text').on('keyup', function (e) {
    //tracking character count input from user using keyup
    const currentValue = $(this).val().length
    //locating the counter element
    const remainingChars = 140 - currentValue;

    const counterElement = $('.counter')
    //updating counter elem on DOM to reflect current changes in remaining characters
    counterElement.text(remainingChars);

    if (remainingChars < 0) {
      counterElement.css('color', 'red');
    } else if (remainingChars > 0 && remainingChars < 50){
      counterElement.css('color', 'orange');
    }
      remainingChars.css('color', 'black');
    
  })
});