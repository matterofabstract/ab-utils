const { app } = require('electron');

const getSystemInfo = () => ({
  // 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
  platform: process.platform,

  // On macOS -> '10.13.6'
  // On Windows -> '10.0.17763'
  // On Linux -> '4.15.0-45-generic'
  version: process.getSystemVersion(),
});

export default getSystemInfo;
