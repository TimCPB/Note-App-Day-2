// Stores an array of note models.

// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note model.
// This function takes as an argument a string that will be the value of the text property of the note
// e.g. "Favourite drink: seltzer".

function testNoteList() {
  var noteList = new NoteList;

  assert.isTrue(noteList);

  assert.isTrue(Array.isArray(noteList.getNotes()));
};
testNoteList();
