Feature('drag-and-drop');

Scenario('Navigate to site', async (I) => {

  /*
  // Does not work. Unless OS mouse is manually placed over drop zone.
  I.amOnPage('https://bestvpn.org/html5demos/drag/')
  I.showCursor()
  I.dragAndDrop('#one', '#bin')
  pause()
   */

  /*
  // Does not work. Unless OS mouse is manually placed over drop zone.
  I.amOnPage('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
  I.dragAndDrop(locate('span[draggable=true]').last(), '#mydropzone')
  I.click('Input Forms')
  pause()
  */

  /*
    // This works. It's from CodeceptJS' test suite
    I.amOnPage('https://jqueryui.com/resources/demos/droppable/default.html')
    I.dragAndDrop('#draggable', '#droppable')
    pause()
   */

  /*
  // Does not work. Unless OS mouse is manually placed over drop zone.
  I.amOnPage('https://www.w3schools.com/html/html5_draganddrop.asp')
  I.dragAndDrop('#drag1', '#div2')
  pause()
   */
})




