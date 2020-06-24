Feature('drag-and-drop');

Scenario('Navigate to site', async (I) => {

  // HTM5 Drag and Drop does not work. Unless OS mouse is manually placed over drop zone.
  I.amOnPage('https://bestvpn.org/html5demos/drag/')
  I.showCursor()
  I.nativeDragAndDrop('#one', '#bin')
  I.nativeDragAndDrop('#two', '#bin')
  I.nativeDragAndDrop('#three', '#bin')
  I.nativeDragAndDrop('#four', '#bin')
  //pause()

  // This works. It's from CodeceptJS' test suite
  //I.amOnPage('https://jqueryui.com/resources/demos/droppable/default.html')
  //I.dragAndDropNative('#draggable', '#droppable')

  // HTM5 Drag and Drop does not work. Unless OS mouse is manually placed over drop zone.
  //I.amOnPage('https://www.w3schools.com/html/html5_draganddrop.asp')
  //I.dragAndDropNative('#drag1', '#div2')
  //pause()
})




