(function(exports) {
  function testNoteHasText() {
    var note = new Note("text");

    if (note.getText() !== "text") {
      throw new Error("wrong text");
    }

    if (note.getText() === "text") {
      console.log("winners")
    }
  };

  testNoteHasText();
})(this);
