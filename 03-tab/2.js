$(document).ready(function() {
	// xu ly click vao nut dieu huong

	// them 1 the html vao trong vi tri bat ky
	$('.slideanh').append("<img src='' class='anh'>");
	var dem = 1; 
	$('.phai').click(function() {
	var slanh = $('.motsanpham .slideanh>img').length;
		var url_anh = $('.slideanh img:nth-child('+dem+')').attr('src');
	console.log(slanh);

		$(this).parent().prev().children('.anh').attr({src:url_anh})
		if (dem >= 5) { dem=0; }
		dem ++;
		// console.log('bay gio dem la :'+slanh);
	});
	$('.trai').click(function() {
		var url_anh = $('.slideanh img:nth-child('+dem+')').attr('src');

		$('.slideanh .anh').attr({src:url_anh})
		// console.log('bay gio dem la :'+dem);
		if (dem == slanh) { dem=1; }
		dem ++;
	});


	// Xu ly cho quickview
	$('.quickview').click(function() {
		$(this).parent().parent().next().next().addClass('hienlen');
		$('.den').addClass('hienlen');
	})
	

	// close
	$('i.nutx,.den').click(function() {
		$('.quickviewto').removeClass('hienlen');
		$('.den').removeClass('hienlen');
	})


	// Xu ly nhan esc
	var KEYCODE_ENTER = 13;
	var KEYCODE_ESC = 27;

	$(document).keyup(function(e) {
	  // if (e.keyCode == KEYCODE_ENTER) $('.save').click();
	  if (e.keyCode == KEYCODE_ESC) {
	  	$('.quickviewto').removeClass('hienlen');
		$('.den').removeClass('hienlen');
	  };
	});

});