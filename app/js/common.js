$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});

	svg4everybody();

});
