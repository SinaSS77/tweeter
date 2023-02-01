const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1674970510503,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1675056910503,
  },
];

const renderTweets = function (arrayOfTweetObj) {
  for (let item of arrayOfTweetObj) {
    const $tweet = createTweetElement(item);

    $("#tweets-container").append($tweet);
  }
};

const createTweetElement = function (tObject) {
  const $tweet = `<article class="tweet-box">

  <header>
    <div class="tweeterName">
      <img src="${tObject.user.avatars}" alt="UsersImage" />
      <label>${tObject.user.name}</label>
    </div>
    <label class="handle">${tObject.user.handle}</label>
  </header>

  <div class="tweetedText">${tObject.content.text}</div>

  <footer>
    <label>${tObject.created_at}</label>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>

</article>`;

  return $tweet;
};

renderTweets(data);
