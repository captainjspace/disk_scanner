import { Client } from 'ssh2';

const conn = new Client();

// A reusable function to stream command output to your dashboard
export const streamCommand = (cmd: string, onData: (chunk: string) => void) => {
  conn.on('ready', () => {
    conn.exec(cmd, (err, stream) => {
      if (err) throw err;
      stream.on('data', (data: Buffer) => {
        onData(data.toString());
      }).on('close', () => {
        console.log('Stream Closed');
      });
    });
  }).connect({
    host: '127.0.0.1',
    username: 'your_user',
    privateKey: require('fs').readFileSync('/Users/your_user/.ssh/id_rsa')
  });
};
