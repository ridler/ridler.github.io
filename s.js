$(document).ready(function() {
	$('.tc-b').mouseenter(function() {
		$(this).css('background-color', '#d9edf7');
		var current = $(this).attr('id').replace('tc-','msg-');
		$('#'+current).show();
	});
	$('.tc-b').mouseleave(function() {
		$(this).css('background-color', 'white');
		var current = $(this).attr('id').replace('tc-','msg-');
		$('#'+current).hide();
	});
	$('#resume-link').click(function() {
		$('#home').hide();
		$('#resume').fadeIn('fast');
	});
	$('.home-icon').click(function() {
		$('#resume').hide();
		$('#home').fadeIn('fast');
	});
});