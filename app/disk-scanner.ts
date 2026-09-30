import { execSync } from 'child_process';

const getDirSize = (path: string): string => {
    try {
          return execSync(`du -sh ${path} 2>/dev/null | cut -f1`).toString().trim();
        } catch {
              return '0B';
            }
};

const actions = [
    {
          id: 'orphans',
          title: 'Orphaned App Support',
          command: `comm -23 <(ls ~/Library/Application" Support" | sort) <(ls /Applications | sed 's/\\.app$//' | sort) | wc -l`,
          description: 'Folders in App Support with no matching .app',
        },
    {
          id: 'brew',
          title: 'Homebrew Cache',
          command: `brew cleanup -n | grep "Would remove" | wc -l`,
          description: 'Outdated formulae and bottles',
        },
    {
          id: 'snapshots',
          title: 'APFS Snapshots',
          command: `tmutil listlocalsnapshots / | wc -l`,
          description: 'Local Time Machine backups',
        },
    {
          id: 'xcode',
          title: 'Xcode DerivedData',
          size: getDirSize('~/Library/Developer/Xcode/DerivedData'),
          description: 'Rebuildable build artifacts',
        }
];

const dashboardData = actions.map(action => {
    let value = action.size || '0';
    if (action.command && !action.size) {
          value = execSync(action.command, { shell: '/bin/bash' }).toString().trim();
        }
    return { ...action, value };
});

console.log(JSON.stringify(dashboardData, null, 2));

