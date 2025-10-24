// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  const safeRequire = (name) => {
    try { return require(name); } catch { return null; }
  };

  const plugins = [
    safeRequire('karma-jasmine'),
    safeRequire('karma-chrome-launcher'),
    safeRequire('karma-firefox-launcher'),
    safeRequire('karma-jasmine-html-reporter'),
    safeRequire('karma-coverage')
  ].filter(Boolean);

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins,
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution order
        // random: false
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    // Default browsers; will extend below based on host capabilities
    browsers: ['FirefoxHeadless'],
    restartOnFileChange: true,
    // Fallback configuration for systems without Chrome
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox']
      },
      SafariTechPreview: {
        base: 'SafariTechPreview'
      }
    }
  });

  // Dynamically add Chrome headless iff launcher AND CHROME_BIN present
  if (safeRequire('karma-chrome-launcher') && process.env.CHROME_BIN) {
    config.browsers.push('ChromeHeadlessNoSandbox');
  }

  // Add Safari on macOS only if launcher exists
  if (process.platform === 'darwin' && safeRequire('karma-safari-launcher')) {
    config.browsers.push('Safari');
  }
};
