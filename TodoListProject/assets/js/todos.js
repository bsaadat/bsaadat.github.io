// Check off specific todos by clicking - needs "li" as an argument otherwise won't work and to listen for element that is already on page.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo - 
$("ul").on("click", "span", function(event){
	//remove parent element - i.e. the li that the span/X is nested inside of
	//fadeOut callback needed because otherwise order of statemenets won't be hono
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//stop Event Bubbling - otherwise all elements will be removed
	event.stopPropagation();
});

//
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear out input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});