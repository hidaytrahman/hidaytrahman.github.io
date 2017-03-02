$(document).ready(function(){ 
  function myFunction() {
    var x = Math.floor((Math.random() * 6) + 1);   
	$(".image").attr("src",x+".png");
	$(".image").attr("data-val",x);
	var current =  $(".image").attr("data-val");
		$(".currently").text(current);
	}
	$(".through-button").click(function(){
		myFunction();
	});	
});
