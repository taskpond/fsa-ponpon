$(document).ready(function(){
	// Fetch sample data
	$(".fetchBtn").click(function(){
		$.ajax({
			type: "GET",
			dataType: "JSON",
			url: "./shared/data.json",
			beforeSend: function(){
				$(".table tr.empty td div").text("Loading Data");
			}
		})
		.success(function(result){
			$(".table tr.empty").remove();
			// Clear data
			if(result.data.length > 0) $(".table tbody").empty();
			
			$.each(result.data, function(index, data){
				var $tr = $("<tr></tr>");
				$tr.append("<td>"+(++index)+"</td>");
				$tr.append("<td>"+data.make+"</td>");
				$tr.append("<td>"+data.model+"</td>");
				$tr.append("<td>"+data.year+"</td>");
				$(".table tbody").append($tr);				
			});
		})
		.fail(function(err){
			$(".table tr.empty td div").text("Error!!");
		});
	});

	// Add new data
	$("form").submit(function(event){
		event.preventDefault();		
		var $tr = $("<tr></tr>");
		var rows = $(".table tbody tr");
		var data = $(this).serializeArray();
				
		$.each(data, function(index, result){
			$tr.append("<td>"+result.value+"</td>");
		});

		if(rows.length == 1 && rows.hasClass("empty")){
			$tr.prepend("<td>"+(rows.length)+"</td>")
			$(".table tbody").html($tr);	
		}
		else{
			$tr.prepend("<td>"+(++rows.length)+"</td>")
			$(".table tbody").append($tr);			
		}
	})
});