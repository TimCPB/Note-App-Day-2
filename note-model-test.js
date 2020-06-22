// (function(exports) {
  function testNoteHasText() {
    var note = new Note("text");

    assert.isTrue(note.getText() == "text");
  };
  testNoteHasText();
// })(this);
