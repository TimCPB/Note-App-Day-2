// Add code that gets hold of the app div element in your index.html page. console.log the element to be sure you've got it.

// var object = (document.getElementById("app"));
// console.log(object.innerHTML);
// object.innerHTML = "howdy";

(function(exports) {

  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink seltzer");
    this.NoteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.addHTMLtoPage = function() {
    document.getElementById("app").innerHTML = this.NoteListView.getHTML();
  };

  exports.NoteController = NoteController
})(this);

// nc = new this.NoteController;
// nc.addHTMLtoPage();