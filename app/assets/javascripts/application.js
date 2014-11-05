function scrollDiiwaa(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top}, "slow");		
}

$(document).ready(function(){
	// Scroll to intro head
	$("a.home").click(function(){
		scrollDiiwaa("intro");
	});

	// Scroll to contact
	$("a.contact").click(function(){
		scrollDiiwaa("contact");
	});

	$("form#contactForm").submit(function(event){
		event.preventDefault();
		var data = $(this).serializeArray();
		$('#myModal .modal-body').empty();
		$.each(data, function(index, item){
			var $p = $("<p></p>");
			switch(item.name){
				case "selectUrgency":
						$p.append("Urgently: " + item.value);
					break;	
				case "InputMessage":
						$p.append("Message: " + item.value);
					break;
				case "InputEmail":
						$p.append("Email: " + item.value);
					break;
				case "InputName":
						$p.append("Name: " + item.value);
					break;
			}
			$('#myModal .modal-body').append($p);
		});
		$('#myModal').modal();
	});
});