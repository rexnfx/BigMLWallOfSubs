const tmi = require('tmi.js');
var fs = require('fs');

//read config file
var config = null;
fs.readFile('c:/wallofsubs/config.json', 'utf-8', configReadHandler);
function configReadHandler(e, text) {
  console.log('configging');
  if(e){ 
    console.log(e);
    return; 
  }
  try {
    config = JSON.parse(text);
    console.log(config.oauth_token);
    configged(config);
  } catch( er) {
    console.log(er);
  }
}

function configged(config) {
// Define configuration options
  const opts = {
    options: {
      debug: true
    },
    identity: {
      username: config.bot_username,
      password: config.oauth_token
    },
    channels: [
      config.channel_name
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

  // Called every time the bot connects to Twitch chat
  function connectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }
}