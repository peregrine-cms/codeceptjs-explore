Feature('login');

Scenario('Log into Peregrine', (I) => {
  I.amOnPage('/');
  I.see('Log In');
  I.fillField('Username', 'admin');
  I.fillField('Password', 'admin');
  I.moveCursorTo('#login');
  I.click('Log In');
  I.see('your websites');
});
