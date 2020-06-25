
(function(exports) {
  function NoteList() {
    this.noteModels = []
    this.id = 0
  };

  NoteList.prototype.getNotes = function() {
    return this.noteModels
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text, this.id);
    this.noteModels.push(note);
    this.incrementID();
  }

  NoteList.prototype.incrementID = function() {
    this.id++;
  }

  exports.NoteList = NoteList;
})(this);
