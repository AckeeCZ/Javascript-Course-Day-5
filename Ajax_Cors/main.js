$(function(){
	$("#get").click(function(){
		$.ajax({
		  method: "GET",
		  url: "http://localhost:8080/"//,
		  //data: { name: "John", location: "Boston" }
		})
		.done(function( msg ) {
			console.log( "Data Saved: " + msg );
		});
	});	

	$("#post").click(function(){
		$.ajax({
		  method: "POST",
		  url: "http://localhost:8080/",
		  data: { name: "John", location: "Boston" }
		})
		.done(function( msg ) {
			console.log( "Data Saved: " + msg );
		});
	});	


	$.ajax({
	  method: "GET",
	  url: "http://localhost:8080/",
	  dataType: 'jsonp'
	})
	.done(function( msg ) {
		console.log( "Data Saved: " + msg );
	});

});
