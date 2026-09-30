const PurgeTile = ({ action }) => {
  const { output, isRunning, runCommand } = useShell(action.id);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-600 transition-colors">
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{action.category}</span>
          {isRunning && <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
        
        {/* The Live Console Feed */}
        <div className="bg-black rounded-md p-3 mb-4 h-24 font-mono text-[10px] overflow-hidden border border-zinc-800">
          {output.length > 0 ? (
            output.map((line, i) => <div key={i} className="text-zinc-400">$ {line}</div>)
          ) : (
            <div className="text-zinc-700 italic">Standing by for execution...</div>
          )}
        </div>
      </div>

      <button 
        onClick={() => runCommand(action.purgeCommand)}
        disabled={isRunning}
        className={`w-full py-2 font-bold text-xs transition-all ${
          isRunning 
            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
            : 'bg-white text-black hover:bg-red-600 hover:text-white'
        }`}
      >
        {isRunning ? 'EXECUTING...' : 'RUN PURGE'}
      </button>
    </div>
  );
};
