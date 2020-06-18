const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1920x1080',
      waitForAction: 2000,
      chrome: {
//      args: ['--no-sandbox', '--window-size=1920,1080', '--auto-open-devtools-for-tabs'],
        args: ['--no-sandbox', '--window-size=1920,1080'],
      }
    },
    ShowMouse: {
      require: './showmouse_helper.js',
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'conceptjs',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
