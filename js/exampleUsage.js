
var configProfile = {
  "profile": {"screenName": 'cctcollege'},
  "domId": 'exampleProfile',
  "maxTweets": 3,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);




var config1 = {
  "id": '345170787868762112',
  "domId": 'example1',
  "maxTweets": 1,
  "enableLinks": true
};
twitterFetcher.fetch(config1);


var config2 = {
  "id": '347099293930377217',
  "domId": 'example2',
  "maxTweets": 5,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "lang": 'en'
};
twitterFetcher.fetch(config2);

var config3 = {
  "id": '502160051226681344',
  "domId": 'example3',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": true
};
twitterFetcher.fetch(config3);


var config4 = {
  "id": '345690956013633536',
  "domId": 'example4',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": false,
  "showTime": true,
  "dateFunction": dateFormatter,
  "showRetweet": false
};

function dateFormatter(date) {
  return date.toTimeString();
}

twitterFetcher.fetch(config4);


var config5 = {
  "id": '345690956013633536',
  "domId": '',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "customCallback": handleTweets,
  "showInteraction": false
};

function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example5');
    var html = '<ul>';
    while(n < x) {
      html += '<li>' + tweets[n] + '</li>';
      n++;
    }
    html += '</ul>';
    element.innerHTML = html;
}

twitterFetcher.fetch(config5);


var config6 = {
  "id": '345690956013633536',
  "domId": 'example6',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": false,
  "showTime": true,
  "dateFunction": momentDateFormatter,
  "showRetweet": false
};

function momentDateFormatter(date, dateString) {
  return moment(dateString).fromNow();
}

twitterFetcher.fetch(config6);



var config8 = {
  "id": '502160051226681344',
  "dataOnly": true,
  "customCallback": populateTpl
};

twitterFetcher.fetch(config8);

function populateTpl(tweets){
  var element = document.getElementById('example8');
  var html = '<ul>';
  for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
    var tweetObject = tweets[i];
    html += '<li>'
      + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
      + '<p class="tweet-content">' + tweetObject.tweet + '</p>'
      + '<p class="tweet-infos">Posted on the ' + tweetObject.time + ', by ' + tweetObject.author + '</p>'
      + '<p class="tweet-link"><a href="' + tweetObject.permalinkURL + '">Link</a></p>'
    + '</li>';
  }
  html += '</ul>';
  element.innerHTML = html;
}
