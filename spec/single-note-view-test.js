function testSingleNoteView() {
  var note = new Note("Howdy")
  var singleNoteView = new SingleNoteView(note);

  assert.isTrue(singleNoteView.note.getText() === "Howdy")
  assert.isTrue(singleNoteView.returnHTML() === "<div>Howdy</div>")
};

testSingleNoteView();
