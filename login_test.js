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

Scenario('Navigate to site', (I) => {
  // TODO: refactor locator per RR
  I.click(locate('//div').find('.tab').withText('Website Themes').as('Website Themes'))
  I.click(locate('div').find('span').withText('ThemecleanFlex Site').as('ThemecleanFlex Site'))
  I.click(locate('div').find('p').withText('edit and manage the pages').as('Pages'))
  // TODO: Refactor to 'add page' scenario. Need to resolve issue with BeforeSuite
  I.click(locate('a').withAttr({ title: 'add page' }))
  pause()
})

//Scenario('Add page', (I) => {
//})




