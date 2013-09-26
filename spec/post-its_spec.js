describe("Board", function() {
  var board;

  beforeEach(function() {
    $("body").append("<div id='my_board'></div>");
    board = new Board("#my_board");
  })

  afterEach(function() {
    $("#my_board").remove();
  })

  describe("#setup", function() {
    it("sets up the click event", function() {
      spyOn(board.el, "click");
      board.setup();
      expect(board.el.click).toHaveBeenCalled();
    });

    it("is called when creating a new Board object", function() {
      spyOn(Board.prototype, "setup");
      new Board("#my_board");

      expect(Board.prototype.setup).toHaveBeenCalled();
    });  
  })

  describe("click event",function() {
    it("calls #addPostIt when clicked", function() {

      spyOn(board, "addPostIt");
      board.el.trigger('click');
      expect(board.addPostIt).toHaveBeenCalled();
    });
  });

  describe("addPostIt", function() {
    it("creates a new post it", function() {

      board.addPostIt();

      expect(board.notes.length).toEqual(1);
    });

    it("adds the post it to the board's el", function(){
      var note = board.addPostIt();

      expect(board.el.children("#note-" + note.id).length).toEqual(1);
    });

    it("returns the new post it", function() {
      expect(board.addPostIt() instanceof PostIt).toBeTruthy();
    });
  });
});


describe("PostIt", function() {
  describe("#render", function() {

    it("assigns the rendered note to el", function() {
      var note = new PostIt(4);
      note.render();
      expect(note.el.prop('outerHTML')).toEqual('<ul class="post-it" id="note-4"></ul>');
    });
  });

  describe("clicking a note", function() {
    it("calls #destroy", function() {
      var note = new PostIt(4);
      note.render();

      spyOn(note, "destroy");
      note.el.trigger('click');
      expect(note.destroy).toHaveBeenCalled();
    })
  })
})