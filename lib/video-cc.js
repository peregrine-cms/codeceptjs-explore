if (process.env.NO_VIDEO_CC == undefined) {

    const fs = require('fs')
    const closedCaptionFile = 'cc.srt'
    const logProxy = console.log
    const startTime = Date.now()
    const offset = 5 // seconds. ffmpeg starts way before us
    let textFragmentNum = 1

    fs.truncate(closedCaptionFile, 0, function (err) {
    });

    console.log = function () {
        let nowTime = Date.now()

        let args = Array.prototype.slice.call(arguments);
        logProxy(args)

        if (args.length == 2) {
            // Text fragments are numbered sequentially starting at 1
            fs.appendFileSync(closedCaptionFile, `${textFragmentNum++}\n`, function (err) {
            })

            // hours:minutes:seconds,milliseconds (use a comma as the decimal separator)
            // 00:00:01,600 --> 00:00:04,200
            let elapsed = offset + Math.round((nowTime - startTime) / 2000)
            fs.appendFileSync(closedCaptionFile, `00:00:${elapsed},000 --> 00:00:${elapsed + 2},000\n`, function (err) {
            })

            // Line break used is often the CR+LF pair.
            fs.appendFileSync(closedCaptionFile, `${args[1]}\n\r\n`, function (err) {
            })
        }
    }
}