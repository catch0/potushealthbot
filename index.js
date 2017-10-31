//this bot simply sends ot a tweet
const config = require('./config');
const twit = require('twit');
const T = new twit(config);

////setting an interval
postTweet();
setInterval(postTweet, 1000 * 60 * 60 * 12);

//// this post actually posts the tweet using built in functions from Twit
function postTweet(){
 //get a random item so the tweets aren't the same thing every time
   const items = ['bag', 'sack', 'cauldron', 'box', 'bin', 'tray', 'case', 'bucket', 'pot', 'jar', 'basket', 'carton', 'order'] ;
   const item = items[Math.floor(Math.random()*items.length)];
      var tweet = {
        status: '@realdonaldtrump eat a ' + item + ' of dicks'
      }
      T.post('statuses/update', tweet, tweeted);
      function tweeted(err, data, response){
        if(err){
          console.log("there was an error", err);
        }
        else{
          console.log("it worked!!!")
        }
    }
}
