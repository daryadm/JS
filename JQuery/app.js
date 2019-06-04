
$(".bgorange").on("click" , function() {
	$(this).toggleClass("bgorangetoggle");
});
	
$( "li" ).first().css( "font-size", "30px" );

$( "li" ).last().css( "color", "green" );

$("button").click(function(){
	$("img").attr("width", "1000");
	$("img").css("display", "none").fadeIn(2500);
});

$ ("header").on("click" , function() {
	$( "header" ).append( "<h1> Now We Have a Header! </h1>" ); 
	
});

$( ".lihover" ).hover(
	function() {
		$( this ).addClass( "hover" );
	}, function() {
		$( this ).removeClass( "hover" );
	}
);
