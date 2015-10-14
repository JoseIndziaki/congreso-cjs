/*
	Fractal by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:		'(max-width: 1680px)',
		large:		'(max-width: 1280px)',
		medium:		'(max-width: 980px)',
		small:		'(max-width: 736px)',
		xsmall:		'(max-width: 480px)',
		xxsmall:	'(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500
				});

	});

})(jQuery);
$( "#ponentes" )
  .mouseenter(function() {
		var top = $(this).position().top-100;
		var left = $(this).position().left+100;
		$('#lap').css('top', top);
		$('#lap').css('left', left);
    $('#lap').text("Ponentes");
    $("#lap").fadeIn( "slow" );

  })
  .mouseleave(function() {
    $('.flotante h3').css("display", 'none');
  });
$( "#temas" )
  .mouseenter(function() {
		var top = $(this).position().top-100;
		var left = $(this).position().left+100;
		$('#lap').css('top', top);
		$('#lap').css('left', left);
    $('.flotante h3').text("Temas");
    $(".flotante h3").fadeIn( "slow" );
  })
  .mouseleave(function() {
    $('.flotante h3').css("display", 'none');
  });
$( "#registro" )
  .mouseenter(function() {
		var top = $(this).position().top-100;
		var left = $(this).position().left+70;
		$('#lap').css('top', top);
		$('#lap').css('left', left);
    $('.flotante h3').text("Registro en Línea");
    $(".flotante h3").fadeIn( "slow" );
  })
  .mouseleave(function() {
    $('.flotante h3').css("display", 'none');
  });

$( "#proceso" )
  .mouseenter(function() {
		var top = $(this).position().top-80;
		var left = $(this).position().left+100;
		$('#lap').css('top', top);
		$('#lap').css('left', left);
    $('.flotante h3').text("Proceso de Inscripción");
    $(".flotante h3").fadeIn( "slow" );
  })
  .mouseleave(function() {
    $('.flotante h3').css("display", 'none');
  });
$( "#cuota" )
  .mouseenter(function() {
		var top = $(this).position().top;
		var left = $(this).position().left+100;
		$('#lap').css('top', top);
		$('#lap').css('left', left);
    $('.flotante h3').text("Cuota de Recuperación");
    $(".flotante h3").fadeIn( "slow" );
  })
  .mouseleave(function() {
    $('.flotante h3').css("display", 'none');
  });
 $( "#programa" )
  .mouseenter(function() {
		var top = $(this).position().top-100;
		var left = $(this).position().left+50;
		$('#lap').css('top', top);
		$('#lap').css('left', left);
    $('.flotante h3').text("Programa Provisional");
    $(".flotante h3").fadeIn( "slow" );
  })
  .mouseleave(function() {
    $('.flotante h3').css("display", 'none');
  });
