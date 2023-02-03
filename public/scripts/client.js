//coming from composer-char-counter.js file
$(document).ready(function () {
  // a function to create the same appearance as the rest for the newest one
  const createTweetElement = function (tObject) {
    //to escape from XSS
    const escape = function (str) {
      let param = document.createElement("p");
      param.appendChild(document.createTextNode(str));
      return param.innerHTML;
    };

    const $tweet = $(`<article class="tweet-Container">
    <header>
     <div class="tweeterName">
       <img src="${tObject.user.avatars}" alt="UsersImage" />
       <label>${tObject.user.name}</label>
     </div>
        <label class="handle">${tObject.user.handle}</label>
    </header>
         <div class="tweetedText"></div>
    <footer>
        <label>${timeago.format(tObject.created_at)}</label>
         <div class="icons">
           <i class="fa-solid fa-flag"></i>
           <i class="fa-solid fa-retweet"></i>
           <i class="fa-solid fa-heart"></i>
         </div>
    </footer>
  </article>`);
  $tweet.find('.tweetedText').text(tObject.content.text)
    return $tweet;
  };

  //resets countdoen to 140 characters
  const reset = () => {
    $(".errorContainer").text("").slideUp().delay(3000);
    $(".counter").text(140);
    $("#tweet-text").val("");
  };

  //error handler function
  const appendError = (errorMessage) => {
    // $(".errorContainer").css("visibility", "visible");
    $(".errorContainer").text(errorMessage).slideDown().delay(3000);
  };

 
  //Defining an action for submit button of form utilizing AJAX
  $("form").submit(function (event) {
    event.preventDefault();
    const $text = $("#tweet-text").val();
    if ($text.length > 140) {
      appendError(
        `🚫 Your text's charachters are more than 140. Please make it shorter.`
      );
    } else if (!$text || $text == "" || $text == null) {
      appendError(
        `🚫 Your tweet's Container is empty. Please check your tweet then resend it!`
      );
    } else {
      const serilizedData = $(this).serialize();
      $.ajax("/tweets", { method: "POST", data: serilizedData }).then(() => {
        reset();
        loadTweets();
      });
            
    }
  });

  //To render new tweets and append them to the end of tweets, with a similar appearance to others
  const renderTweets = function (arrayOfTweetObj) {
    $("#tweets-container").empty();
    for (let item of arrayOfTweetObj) {
      const $tweet = createTweetElement(item);
      $("#tweets-container").prepend($tweet);
    }
  };

  //Best Ajax way to request a GET for the "/tweets" URL and response data with the help of render-function
  const loadTweets = () => {
    $.get("/tweets").then((data) => {
      renderTweets(data);
    });
  };
  loadTweets();
});
