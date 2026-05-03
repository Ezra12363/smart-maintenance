const { exec } = require('child_process');
const os = require('os');

const openBrowser = (url) => {
  const platform = os.platform();
  
  let command;
  switch (platform) {
    case 'darwin':  // macOS
      command = `open ${url}`;
      break;
    case 'win32':   // Windows
      command = `start ${url}`;
      break;
    default:       // Linux
      command = `xdg-open ${url}`;
  }
  
  exec(command, (err) => {
    if (err) console.error('Erreur ouverture navigateur:', err);
  });
};

module.exports = openBrowser;
