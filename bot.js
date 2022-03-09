const tmi = require('tmi.js');
var fs = require('fs');

// Define configuration options
const opts = {
  identity: {
    username: "<BOT_USERNAME>",
    password: "<OAUTH_TOKEN>"
  },
  channels: [
    "<CHANNEL_NAME>"
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', messageHandler);
client.on('connected', connectedHandler);
// Connect to Twitch:
client.connect();

// Called every time a message comes in
function messageHandler (target, context, msg, self) {
    console.log(msg);
}

function privmsgHandler (msg) {
    console.log(msg);
};

// Called every time the bot connects to Twitch chat
function connectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}