const { Helper } = codeceptjs;

class PeregrineMouse extends Helper {

  async rat(selector, selTarget) {
    const {page} = this.helpers.Puppeteer;

    const origin = await page.$(selector)
    const ob = await origin.boundingBox()

    await page.mouse.move(ob.x + ob.width / 2, ob.y + ob.height / 2)
    await page.mouse.down()

    const target = await page.$(selTarget)
    const targetBox = await target.boundingBox()
    await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2)
    await page.mouse.up()

  }
}

module.exports = PeregrineMouse;
