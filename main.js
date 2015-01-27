$(document).on('ready', function() {
  $(document).on("click", function(event) {

  	//store the coordinates in a variable
  	var x = event.pageX;
  	var y = event.pageY;

  	var marker = $("<div class='mapclass'>you are here</div>");
  	marker.css({position: "absolute", top: y, left: x});

  	$(".container").append(marker);
  	$(document).on("click", function() {
  		$(marker).remove();

      // TEST for contributor
    
  	});
	});
});