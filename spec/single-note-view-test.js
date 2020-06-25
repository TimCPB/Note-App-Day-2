function testSingleNoteView() {
  var singleNoteView = new SingleNoteView("Howdy");

  assert.isTrue(singleNoteView.noteList === "Howdy")
  assert.isTrue(singleNoteView.returnHTML() === "<div>Howdy</div>")
};

testSingleNoteView();
