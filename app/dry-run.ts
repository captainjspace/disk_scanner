const execute = (action: PurgeAction, dryRun = true) => {
  const cmd = dryRun ? action.checkCommand : action.purgeCommand;
  // Stream to your dashboard via Socket...
};
