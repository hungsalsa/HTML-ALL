// $(document).ready(function() {
// 	// click vao nut nao thi doi class
// 	// $('bonnut li').click(function(event) {
// 	// 	alert('sadada')
// 	// });
// 	$('bonnut li').click(function(){
// 	    alert('sadada');
// 	});
		
// });
// 	// 
	
$(function () {
	$('bonnut li').click(function(){
		// body...
		$(this).addClass('active');
	})
}