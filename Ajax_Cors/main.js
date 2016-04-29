$(function(){
	$("#get").click(function(){
		$.ajax({
		  method: "GET",
		  url: "http://localhost:8080/"//,
		})
		.done(function( msg ) {
			console.log( "Data Saved: " + msg );
		});
	});	
});
