
(function(exports) {
  function NoteList() {
    this.noteModels = []
  };

  NoteList.prototype.getNotes = function() {
    return this.noteModels
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.noteModels.push(note);
  }

  exports.NoteList = NoteList;
})(this);
