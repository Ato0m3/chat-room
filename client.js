console.log('client');

const prompt = require('prompt-sync')();

const WebSocket = require('ws');

const wsClient = new WebSocket('ws://localhost:3000/');

wsClient.on('error', function(error) {
  console.log('Connection failed : ', error.name);
} );

wsClient.on('open', function open() {
  console.log('Connected');
  wsClient.send(Date.now());
});

wsClient.on('message', function incoming(data) {
  console.log('New message : ', data);
})

wsClient.on('close', function close() {
  console.log('Disconnected');
});
