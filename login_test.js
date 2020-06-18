Feature('login');

Scenario('Log into Peregrine', (I) => {
  I.amOnPage('/');
  I.showCursor();
  I.see('Log In');
  I.fillField('Username', 'admin');
  I.fillField('Password', 'admin');
  I.moveCursorTo('#login');
  I.click('Log In');
  I.see('your websites');
  I.moveCursorTo('.create-tenant')
  I.doubleClick('.create-tenant')
  I.see('themecleanflex')
  I.doubleClick(locate('//button[contains(., "Next")]').as("Next"))
});
