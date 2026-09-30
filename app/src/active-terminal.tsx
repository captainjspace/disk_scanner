const TerminalTile = ({ action, output }) => (
  <div className="bg-black border border-zinc-800 rounded-lg overflow-hidden flex flex-col h-64">
    <div className="p-4 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-blue-400 font-mono text-xs">{action.title}</h3>
        <span className="text-[10px] text-zinc-600">ID: {action.id}</span>
      </div>
      <div className="text-3xl font-black text-white">{action.size}</div>
    </div>
    
    {/* Real-time output zone */}
    <div className="bg-zinc-900/50 p-2 font-mono text-[10px] h-24 overflow-y-auto border-t border-zinc-800 text-zinc-500">
      {output || "> Ready for execution..."}
    </div>
    
    <button className="w-full bg-blue-600 py-2 text-xs font-bold text-white hover:bg-red-600">
      RUN_ACTION
    </button>
  </div>
);
