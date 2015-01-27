$(document).on('ready', function() {
  $(document).on("click", function(event) {

  	//store the coordinates in a variable
  	var x = event.pageX;
  	var y = event.pageY;

  	var marker = $("<div class='mapclass'>you are here</div>");
  	marker.css({position: "absolute", top: y, left: x});

    // Bonus 1, part 1
    var promptNotes = prompt("Enter a note to be saved with your marker");

    var textarea = $("<div class='notes'></div>").append(promptNotes);
    textarea.css({position: "absolute", top: y, left: x+40});

  	$(".container").append(marker);

     // Bonus 1, part 2
    // var showNotes = $(".container").append(textarea);

    $(marker).hover(
        function () {
          $(".container").append(textarea);
        },
        function () {
          $(".container").find("div:last").remove();
        }
      );

  	$(document).on("click", function() {
  		$(marker).remove();
      $(textarea).remove();

  	});
	});
});