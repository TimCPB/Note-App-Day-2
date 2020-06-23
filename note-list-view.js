(function(exports) {

  function NoteListView(notelist) {
    this.listToView = notelist
  };

  NoteListView.prototype.getHTML = function() {
    array = this.listToView.getNotes()
    newArray = array.map(function(note) {
      return note.getText();
    });
    return "<ul><li><div>" + newArray.join('</div></li><li><div>') + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;
})(this);

