(function(exports) {

  function NoteListView(notelist) {
    this.listToView = notelist;
  };

  NoteListView.prototype.getHTML = function() {
    var array = []
    this.listToView.getNotes().forEach(function(note) {
      array.push(`<a href="#notes/${note.id}">`+ note.getText().substr(0, 20)+ '</a>');
    });
    return `<ul><li>` + array.join(`</li><li>`) + `</li></ul>`;
  };

  exports.NoteListView = NoteListView;
})(this);

