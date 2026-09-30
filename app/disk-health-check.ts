import { execSync } from 'child_process';

interface DriveHealth {
  volume: string;
  totalGi: number;
  usedGi: number;
  availableGi: number;
  usagePercent: number;
  inodeUsagePercent: number;
  healthScore: number; // 0-100
}

const getVolumeHealth = (path: string = '/System/Volumes/Data'): DriveHealth => {
  const stats = execSync(`df -h ${path} | tail -1`).toString().split(/\s+/);
  const inodeStats = execSync(`df -ih ${path} | tail -1`).toString().split(/\s+/);

  const totalGi = parseFloat(stats[1]);
  const usedGi = parseFloat(stats[2]);
  const availGi = parseFloat(stats[3]);
  const usagePct = parseInt(stats[4]);
  const inodePct = parseInt(inodeStats[4]);

  // Health Score Logic: 
  // - High disk usage reduces score
  // - High inode density (too many small files) reduces score further
  let score = 100 - usagePct;
  if (inodePct > 10) score -= (inodePct * 2); 

  return {
    volume: path,
    totalGi,
    usedGi,
    availableGi: availGi,
    usagePercent: usagePct,
    inodeUsagePercent: inodePct,
    healthScore: Math.max(0, score)
  };
};
