const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 6969;

const server = express()
  .use((req, res) => res.send('Zephyr web socket service'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const Websocket = require('ws');

const wss = new Websocket.Server({ server });

wss.on('connection', function connection(ws) {

  console.log('Client connected');
  console.log('Client Count:', wss.clients.size)

  ws.on('message', function incoming(data) {

    console.log('Data:', data)

    wss.clients.forEach((client) => {
      if (client.readyState === Websocket.OPEN) {
        const dataObj = JSON.stringify({ name: data, count: wss.clients.size });
        client.send(dataObj);
      }
    })
  });

  ws.on('close', () => {
    console.log(`Client disconnected`)
  });
});


