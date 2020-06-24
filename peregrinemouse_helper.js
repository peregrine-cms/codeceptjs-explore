const childProcess = require("child_process");
const {Helper} = codeceptjs;
const windowOffsetY = 120 // height of chrome browser's "top chrome"

class PeregrineMouse extends Helper {

    async getActiveWindow() {
       this.runCmd('xdotool getactivewindow')
    }

    async getMouseLocation() {
        this.runCmdAsync('xdotool getmouselocation --shell')
    }

    async moveMouse(x, y) {
        this.runCmd(`xdotool mousemove --sync ${x} ${y} && sleep 1`)
        this.runCmdAsync('xdotool getmouselocation --shell')
    }

    async mouseDown() {
        //this.runCmd(`xdotool mousedown --clearmodifiers 1`)
        this.runCmd(`xdotool mousedown --clearmodifiers 1 && sleep 1`)
    }

    async mouseUp() {
        //this.runCmd(`xdotool mouseup --clearmodifiers 1`)
        this.runCmd(`xdotool mouseup --clearmodifiers 1 && sleep 1`)
    }

    async runCmd(cmd) {
        if (process.env.NO_VIDEO_CC == 1) {
            childProcess.execSync(cmd, (error, stdout, stderr) => {
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

    // Use this version if you need output
    async runCmdAsync(cmd) {
        if (process.env.NO_VIDEO_CC == 1) {
            childProcess.exec(cmd, (error, stdout, stderr) => {
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

    async nativeDragAndDrop(srcSel, dstSel) {
        const {page} = this.helpers.Puppeteer

        const source = await page.$(srcSel)
        const sourceBox = await source.boundingBox()

        const srcX = sourceBox.x + sourceBox.width / 2
        const srcY = sourceBox.y + sourceBox.height / 2

        await page.mouse.move(srcX, srcY)
        await this.moveMouse(srcX, srcY + windowOffsetY)

        await page.mouse.down(srcX, srcY)
        await this.mouseDown()

        const target = await page.$(dstSel)
        const targetBox = await target.boundingBox()
        const dstX = targetBox.x + (targetBox.width / 2)
        const dstY = targetBox.y + (targetBox.height / 2)

        await page.mouse.move(dstX, dstY)
        await this.moveMouse(dstX, dstY + windowOffsetY)

        await page.mouse.up()
        await this.mouseUp()
    }

    async nativeDragAndDrop(x1, y1, x2, y2) {
        this.moveMouse(x1,y1)
        this.mouseDown()
        this.moveMouse(x2,y2)
        this.mouseUp()
    }

    /*
    async nativeDragAndDrop(srcSel, x2, y2) {
        const {page} = this.helpers.Puppeteer

        const source = await page.$(sel)
        const sourceBox = await source.boundingBox()

        const srcX = sourceBox.x + sourceBox.width / 2
        const srcY = (sourceBox.y + sourceBox.height / 2) + windowOffsetY
        this.nativeDragAndDrop(srcX, srcY, x2, y2)
    }
     */
}

module.exports = PeregrineMouse;
