const HealthTile = ({ item }) => (
  <div className={`p-4 rounded-lg border border-white/10 ${item.bg}`}>
    <div className="flex items-center justify-between">
      <span className={`text-xs font-bold uppercase ${item.color}`}>{item.status}</span>
      <div className="h-2 w-2 rounded-full bg-current animate-pulse" />
    </div>
    <h2 className="text-xl font-mono mt-2 text-white">{item.title}</h2>
    <code className="text-[10px] block mt-2 p-2 bg-black/40 rounded text-slate-400">
      {item.command}
    </code>
    <button className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs rounded transition-all">
      RUN TRUNCATE
    </button>
  </div>
);
