const { withExpoAdapter } = require("@expo/electron-adapter");

ELECTRON_DISABLE_SECURITY_WARNINGS = 1;

module.exports = withExpoAdapter({
  projectRoot: __dirname,
  whiteListedModules: ["stream-chat", "stream-chat-react"],
  // Provide any overrides for electron-webpack: https://github.com/electron-userland/electron-webpack/blob/master/docs/en/configuration.md
});
