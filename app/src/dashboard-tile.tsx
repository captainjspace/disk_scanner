import React from 'react';

const Dashboard = ({ actions }) => {
  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-zinc-300 font-mono">
      <div className="mb-12 border-b border-zinc-800 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tighter italic">PURGE_CONSOLE_v1.0</h1>
          <p className="text-zinc-500 mt-1">Status: <span className="text-green-500 animate-pulse">WRI_ENABLED</span></p>
        </div>
        <div className="text-right text-xs text-zinc-600">
          SYSTEM_DISK_ROOT: /dev/disk3s1
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action) => (
          <div key={action.id} className="group relative bg-zinc-900 border border-zinc-800 p-6 rounded-none hover:bg-zinc-800/50 transition-all">
            {/* Danger Indicator */}
            <div className={`absolute top-0 right-0 w-1 h-full ${
              action.dangerLevel === 'high' ? 'bg-red-600' : 
              action.dangerLevel === 'medium' ? 'bg-amber-500' : 'bg-blue-500'
            }`} />
            
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-white font-bold uppercase tracking-widest">{action.title}</h2>
              <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400">{action.category}</span>
            </div>

            <p className="text-sm text-zinc-500 mb-6 h-10 overflow-hidden">{action.description}</p>
            
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] block text-zinc-600 mb-1 font-bold italic">RECLAIMABLE:</span>
                <span className="text-2xl font-black text-white">{action.size || '?? GB'}</span>
              </div>
              
              <button className="bg-white text-black text-xs font-bold px-4 py-2 hover:bg-red-600 hover:text-white transition-colors">
                EXEC_PURGE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
