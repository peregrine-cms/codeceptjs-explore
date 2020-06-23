Feature('login');

Before((I) => {
  I.amOnPage('/')
  I.showCursor()
  I.see('Log In')
  I.fillField('Username', 'admin')
  I.fillField('Password', 'admin')
  I.click('Log In')
  I.see('your websites')
})

Scenario('Navigate to site', async (I) => {
  // TODO: refactor locators
  I.click(locate('//div').find('.tab').withText('Website Themes').as('Website Themes'))
  I.click(locate('div').find('span').withText('ThemecleanFlex Site').as('ThemecleanFlex Site'))
  I.click(locate('div').find('p').withText('edit and manage the pages').as('Pages'))

  // TODO: Refactor into 'add page' scenario. Need to resolve issue with BeforeSuite
  I.click(locate('a').withAttr({ title: 'add page' }).as('add page'))
  I.click(locate('a').withAttr({ title: 'base page' }).as('base page template'))
  I.click('Next')
  // This is not a real form. Can't use fillField()
  // I.fillField('title', 'Test Site')
  I.fillField(locate('input[id=title]'), 'Test Page')
  let siteName = await I.grabValueFrom('#name')
  I.assert(siteName, 'test-page')
  I.click('Next')
  I.click('Finish and Edit!')

  // TODO: Refactor into 'component X' scenario.
  //I.seeElement(locate('li').find('span').withText('Text - Heading 2'));
  //pause()
})



