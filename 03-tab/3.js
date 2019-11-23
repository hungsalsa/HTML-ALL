$(document).ready(function($) {
	$('.bonnut li').click(function(){
		// body...
		$('.bonnut li').removeClass('active');
		$(this).addClass('active');

		// lay vi tri cua dong duoc click
		x = $(this).index()+1;
		// console.log("vi tri phan tu dc click la" + x );

		// cho noi dung tuong ung hien thi
		$('.bonnd ul li').removeClass('hienlen');
		$('.bonnd ul li:nth-child('+x+')').addClass('hienlen');
	});
});
	
