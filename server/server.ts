import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { spawn } from 'child_process';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" } // Your React App port
});

io.on('connection', (socket) => {
  console.log('Control Plane Connected: ', socket.id);

  socket.on('execute', ({ actionId, command }) => {
    // We use /bin/bash to handle pipes/redirects in your commands
    const child = spawn('/bin/bash', ['-c', command]);

    child.stdout.on('data', (data) => {
      socket.emit(`output:${actionId}`, data.toString());
    });

    child.stderr.on('data', (data) => {
      // Send errors to the same stream, maybe prefix with [ERROR]
      socket.emit(`output:${actionId}`, `[!] ${data.toString()}`);
    });

    child.on('close', (code) => {
      socket.emit(`complete:${actionId}`, { success: code === 0 });
    });
  });
});

httpServer.listen(3001, () => {
  console.log('Purge Bridge listening on port 3001');
});
