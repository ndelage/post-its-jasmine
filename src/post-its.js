var Board = function( selector ) {
  this.el = $(selector);
  this.notes = [];
  this.setup();
};

Board.prototype.setup = function() {
  var self = this;
  this.el.click(function() {
    self.addPostIt()
  });
};

Board.prototype.addPostIt = function() {
  //new postit
  var note = new PostIt(this.notes.length);
  this.notes.push(note);
  note.render();
  //add it to the board (the el)
  this.el.append(note.el);
  return note;
}

function PostIt(id) {
  this.id = id;
  this.el = "";
}


PostIt.prototype.render = function() {
  var noteHtml = $("<ul class='post-it'></ul>");
  noteHtml.attr('id', 'note-' + this.id);

  var self = this;
  noteHtml.click(function(){
    self.destroy()
  });

  // setup click handler
  this.el = noteHtml;
}

PostIt.prototype.destroy = function() {


}