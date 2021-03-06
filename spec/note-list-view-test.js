// Takes a note list model upon instantiation.
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

function testNoteListView() {
  var notelist = new NoteList();
  var noteListView = new NoteListView(notelist);
  assert.isTrue(noteListView.listToView === notelist);
  assert.isTrue(noteListView.listToView instanceof NoteList);

};

function testGetHTML() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML().includes("<ul><li>"));
};

function testGetHTML2() {
  var noteList = new NoteList();
  noteList.createNote("pizza");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML().includes("pizza"), "getHTML2");
};

function testGetHTML3() {
  var noteList = new NoteList();
  noteList.createNote("Favourite food: pesto");
  noteList.createNote("Favourite drink: seltzer");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === `<ul><li><a href="#notes/0">Favourite food: pest</a></li><li><a href="#notes/1">Favourite drink: sel</a></li></ul>`);
};

testNoteListView();
testGetHTML();
testGetHTML2();
testGetHTML3();