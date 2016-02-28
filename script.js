$( document ).ready(function() {
 
 	$('.hoverWrapper').each(function(i){ // just like a for loop
 		$(this).on("mouseenter", function(e){ //when they mouse over this element
	 		$(this).children("a").eq(0).show(); // "a" search the a tag ; eq() is equals 
	 	}).on("mouseleave", function(e){ //when they mouse away from this element
	 		$(this).children("a").eq(0).hide();
	 	});
	});
});
