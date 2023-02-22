const Twit = require('twit');
const open = require('open');
require('dotenv').config();

let T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 15 * 1000,
  strictSSL: true,
});

const account_name = process.env.ACCOUNT_NAME;
const account_id = process.env.ACCOUNT_ID;

let stream = T.stream('statuses/filter', {
  follow: [account_id],
});

stream.on('tweet', function (tweet) {
  if (
    tweet.user.screen_name == account_name &&
    tweet.user.id_str == account_id
  ) {
    console.log(process.env.ACCOUNT_NAME + ': ' + tweet.text);
    open('https://twitter.com/' + account_name + '/status/' + tweet.id_str);
  } else {
    console.log('Random User: ' + tweet.text);
  }
});
