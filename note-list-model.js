(function(exports) {
  function NoteList() {
    this.noteModels = []
  };

  NoteList.prototype.getNotes = function() {
    return this.noteModels
  }

  NoteList.prototype.createNote = function() {
    return "hello"
  }

  exports.NoteList = NoteList;
})(this);
