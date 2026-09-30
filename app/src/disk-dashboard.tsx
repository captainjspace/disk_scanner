ActionTile = ({ title, value, description, unit = "" }) => (
  <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-blue-500 transition-all cursor-pointer group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-slate-400 font-medium text-sm uppercase tracking-wider">{title}</h3>
      <span className="text-blue-400 group-hover:scale-110 transition-transform">⚡</span>
    </div>
    <div className="text-3xl font-bold text-white mb-2">
      {value}<span className="text-lg ml-1 text-slate-500">{unit}</span>
    </div>
    <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
    <button className="mt-4 w-full bg-slate-800 py-2 rounded text-xs text-slate-300 hover:bg-blue-600 hover:text-white transition-colors">
      Execute Purge
    </button>
  </div>
);

// Grid Layout
// const Dashboard = ({ data }) => (
//   <div className="min-h-screen bg-black p-8">
//       <header className="mb-8">
//             <h1 className="text-2xl font-bold text-white">Disk Purge Console <span className="text-slate-500 font-mono text-sm">v1.0</span></h1>
//                 </header>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                           {data.map(item => <ActionTile key={item.id} {...item} />)}
//                               </div>
//                                 </div>
//                                 );
//                                 
