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
});