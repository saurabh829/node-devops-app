module.exports = {
  build: process.env.BUILD_ID || 'local',
  commit: process.env.GIT_COMMIT || 'local'
};
