const {exec} = require("child_process");
const {Helper} = codeceptjs;
const windowOffsetY = 120 // height to chrome browser's "top chrome"

class PeregrineMouse extends Helper {

    async getActiveWindow() {
       this.runCmd('xdotool getactivewindow')
    }

    async getMouseLocation() {
        this.runCmd('xdotool getmouselocation --shell')
    }

    async movePointer(x, y) {
        this.runCmd(`xdotool mousemove --sync ${x} ${y}`)
        this.runCmd('xdotool getmouselocation --shell')
    }

    async runCmd(cmd) {
        //if (process.env.NO_VIDEO_CC == undefined) {
        if (process.env.NO_VIDEO_CC == 1) {
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            })
        }
    }

    async dragAndDropNative(srcSel, dstSel) {
        const {page} = this.helpers.Puppeteer

        const source = await page.$(srcSel)
        const sourceBox = await source.boundingBox()

        const srcX = sourceBox.x + sourceBox.width / 2
        const srcY = sourceBox.y + sourceBox.height / 2
        await page.mouse.move(srcX, srcY)
        this.movePointer(srcX, srcY + windowOffsetY)
        await page.mouse.down(srcX, srcY)

        const target = await page.$(dstSel)
        const targetBox = await target.boundingBox()
        const dstX = targetBox.x + (targetBox.width / 2)
        const dstY = targetBox.y + (targetBox.height / 2)
        await page.mouse.move(dstX, dstY)
        this.movePointer(dstX, dstY + windowOffsetY)
        await page.mouse.up()
    }
}

module.exports = PeregrineMouse;
