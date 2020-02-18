const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 8000 });

wsServer.on('connection', function(ws) {
  ws.onmessage((data) => {
    wsServer.clients.forEach((client) => {
      if (ws !== client && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});