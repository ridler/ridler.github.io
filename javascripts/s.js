$(document).ready(function() {
	$('h1').fadeIn(2500, function() {
		$('.header').fadeIn(500, function() {
			$('table').fadeIn(1000, function() {
				$('.container').fadeIn(1000, function() {
					$('footer').show();
				});
			});
		});
	});

	// $('h1').mouseover(function() {
	// 	$(this).animate( { : '+=10' }, { duration: 100 } );
	// });

	// $('h1').mouseleave(function() {
	// 	$(this).animate( { bottom: '-=10' }, { duration: 100 } );
	// });

	// $('img').mouseover(function() {
	// 	$(this).animate( { width: '+=10', height: '+=10', }, 100);
	// });

	// $('img').mouseleave(function() {
	// 	$(this).animate( { width: '-=10', height: '-=10', }, 100);
	// });

});