(function (exports) {

    function SingleNoteView(noteList) {
      this.noteList = noteList;
    }

    SingleNoteView.prototype.returnHTML = function() {
      return '<div>' + this.noteList + '</div>'
    };

    exports.SingleNoteView = SingleNoteView;
})(this);