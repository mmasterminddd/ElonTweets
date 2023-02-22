# TweetMonitor Bot

This is a simple Node.js bot that uses Twitter's Streaming API to listen for tweets from a specific account and open them in a browser window.

I developed this project to receive instant updates on Elon Musk's tweets in order to make informed investment decisions in the crypto market, as Elon Musk was significantly impacting the market with his tweets in 2021.

## Prerequisites

Before running the bot, you will need to have:

- A Twitter Developer account and an application set up
- Node.js installed on your computer
- A `.env` file with the following variables:
  - `CONSUMER_KEY`: Your Twitter API consumer key
  - `CONSUMER_SECRET`: Your Twitter API consumer secret
  - `ACCESS_TOKEN`: Your Twitter API access token
  - `ACCESS_TOKEN_SECRET`: Your Twitter API access token secret
  - `ACCOUNT_NAME`: The name of the Twitter account to listen for tweets from
  - `ACCOUNT_ID`: The Twitter account ID to listen for tweets from

## Installation

1. Clone this repository to your local machine.

```
git clone https://github.com/mmasterminddd/ElonTweets.git
```

2. Install the required dependencies.

```
npm install
```

3. Create a `.env` file in the root directory of the project and add your Twitter API keys and account information.

```CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
ACCESS_TOKEN=your_access_token
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCOUNT_NAME=account_name
ACCOUNT_ID=account_id
```

4. Start the bot.

```
node index.js
```

The bot will start listening for tweets from the specified account and open them in a browser window.

## License

This project is licensed under the MIT License.
