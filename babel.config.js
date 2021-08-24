function getPresetEnv() {
  const node = 'current';
  const targets = { node };
  const opts = { targets };
  return [ '@babel/preset-env', opts ];
}

module.exports = {
  presets: [ getPresetEnv() ]
}
