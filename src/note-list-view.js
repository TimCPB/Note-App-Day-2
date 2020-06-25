(function(exports) {

  function NoteListView(notelist) {
    this.listToView = notelist
  };

  NoteListView.prototype.getHTML = function() {
    var array = this.listToView.getNotes()
    var newArray = array.map(function(note) {
      return note.getText().substr(0, 20);
    });
    return "<ul><li><div>" + newArray.join('</div></li><li><div>') + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;
})(this);

