import { useState, useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

export const useShell = (actionId: string) => {
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const s = io('http://localhost:3001'); // Your local bridge
    setSocket(s);

    s.on(`output:${actionId}`, (data: string) => {
      setOutput((prev) => [...prev.slice(-5), data]); // Keep last 5 lines for the tile
    });

    return () => { s.disconnect(); };
  }, [actionId]);

  const runCommand = useCallback((command: string) => {
    setIsRunning(true);
    socket?.emit('execute', { actionId, command });
    
    socket?.once(`complete:${actionId}`, () => {
      setIsRunning(false);
    });
  }, [socket, actionId]);

  return { output, isRunning, runCommand };
};
