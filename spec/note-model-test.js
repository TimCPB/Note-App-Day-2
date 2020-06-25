
function testNoteHasText() {
  var note = new Note("text");

  assert.isTrue(note.getText() == "text");
};

function testNoteHasID(){
  var note = new Note("test", 0)
  assert.isTrue(note.id === 0)

};

testNoteHasText();
testNoteHasID();
