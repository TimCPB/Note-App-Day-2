
(function(exports) {
  function NoteList() {
    this.noteModels = []
    // this.id = 0
  };

  NoteList.prototype.getNotes = function() {
    return this.noteModels
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    // note.id += 1
    this.noteModels.push(note);
    // note.id = this.noteModels.length
  }

  exports.NoteList = NoteList;
})(this);
