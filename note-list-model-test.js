// Stores an array of note models.

// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note model.
// This function takes as an argument a string that will be the value of the text property of the note
// e.g. "Favourite drink: seltzer".

function testNoteList() {
  var noteList = new NoteList;

  assert.isTrue(noteList);

  assert.isTrue(Array.isArray(noteList.getNotes()));

  //assert.isTrue(noteList.createNote());
  
};
testNoteList();

function testCreateNoteMethod() {
var noteList = new NoteList();
noteList.createNote("someText");
noteList.createNote("More text");

assert.isTrue(noteList.getNotes()[0] instanceof Note)

assert.isTrue(noteList.getNotes()[1] instanceof Note)

assert.isTrue(noteList.getNotes()[1].getText() === "More text")

};
testCreateNoteMethod();
