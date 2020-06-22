const { setHeadlessWhen } = require('@codeceptjs/configure');

const fs = require('fs');
const logProxy = console.log
const startTime = Date.now()  
const offset = 5 // seconds. ffmpeg starts way before us
var textFragmentNum = 1

if (process.env.NO_VIDEO_CC == undefined) {
  fs.truncate('cc.srt', 0, function (err) {
  });

  console.log = function () {
    let nowTime = Date.now()

    let args = Array.prototype.slice.call(arguments);
    logProxy(args)

    if (args.length == 2) {
      // Text fragments are numbered sequentially starting at 1
      fs.appendFileSync('cc.srt', `${textFragmentNum++}\n`, function (err) {
      });

      // hours:minutes:seconds,milliseconds (use a comma as the decimal separator)
      // 00:00:01,600 --> 00:00:04,200
      let elapsed = offset + Math.round((nowTime - startTime) / 1000)
      fs.appendFileSync('cc.srt', `00:00:${elapsed},000 --> 00:00:${elapsed + 2},000\n`, function (err) {
      });

      // Line break used is often the CR+LF pair.
      fs.appendFileSync('cc.srt', `${args[1]}\n\r\n`, function (err) {
      });
    }
  }
}

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
      waitForAction: 1000,
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      chrome: {
//      args: ['--no-sandbox', '--window-size=1920,1080', '--auto-open-devtools-for-tabs'],
        args: ['--no-sandbox', '--window-size=1920,1080'],
      }
    },
    ShowMouse: {
      require: './showmouse_helper.js',
    },
    AssertWrapper : {
      require: 'codeceptjs-assert',
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
