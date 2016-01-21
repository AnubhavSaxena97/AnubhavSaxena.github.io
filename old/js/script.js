$(document).ready(function () {
	
	/* Scroll to section */
	hash = window.location.hash;
	$('section.selected').removeClass('selected');
	if (hash) $('section' + hash).addClass('selected');
	$.scrollTo($('section' + hash), 1000, { 
		onAfter: function () {		
			window.location.hash = hash;
			enableScroll = true;
		},
		easing: 'easeOutQuad'
	});
	showMap();
	$('section.selected nav.side a').css({'margin-top': ($('section.selected .height_count').height()/2-13-10) + 'px'});


	/* Background */
	$.supersized({
	
		// Functionality
		slide_interval          :   4000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	2000,		// Speed of transition

		horizontal_center		:	1,
		min_width				:	$(window).width(),
												   
		// Slideshow Images							
		slides 					:  	[
			{image : 'http://farm7.staticflickr.com/6224/6240022647_41233835f4_b.jpg', thumb: ''},
			{image : 'http://farm2.staticflickr.com/1256/4728043610_f7889a00a8_b.jpg', thumb: ''},
			{image : 'http://farm6.staticflickr.com/5252/5453113651_703fc669bc_o.jpg', thumb: ''}
		]
		
	});

	/* Navigation */
	$('nav.main a').click(function () {
		
		/* Select menu item */
		$('nav.main a').removeClass('selected');
		$(this).addClass('selected');
		
		/* Scroll to section */
		hash = $(this).attr('href');
		$('section.selected').removeClass('selected');
		$('section' + hash).addClass('selected');
		$.scrollTo($('section' + hash), 1000, { 
			onAfter: function () {		
				window.location.hash = hash;
				enableScroll = true;
			},
			easing: 'easeOutQuad'
		});

		/* Fix Google Maps problem */
		showMap();

		/* Side navigation */
		$('section.selected nav.side a').css({'margin-top': ($('section.selected .height_count').height()/2-13-10) + 'px'});

		return false;
	});

	$('.back').click(function () {

		/* Select menu item */
		$('nav.main a').removeClass('selected');
		$(this).addClass('selected');

		/* Scroll to section */
		hash = $(this).attr('href');
		$.scrollTo($('section' + hash), 1000, { 
			onAfter: function () {		
				window.location.hash = hash;
				enableScroll = true;
				$('section.selected').removeClass('selected');
				$('section' + hash).addClass('selected');
			},
			easing: 'easeOutQuad'
		});
	});

	$('article a.top, article h3 a').click(function () {

		/* Scroll to blogpost */
		hash = $(this).attr('href');
		$('section.selected').removeClass('selected');
		$('section#blog').addClass('selected');
		$('section' + hash).addClass('selected');
		$.scrollTo($('section' + hash), 1000, { 
			onAfter: function () {		
				window.location.hash = hash;
				enableScroll = true;
			},
			easing: 'easeOutQuad'
		});

	});
	
	/* Fancybox */
	$('.portfolio a').fancybox({
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'padding'			: '1',
		'overlayColor'		: '#000'
	});
	
	/* Contact form */
	$('#contact_form').submit(function () {
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: {
				name: $('#contact_form input[type=text]').val(),
				email: $("#contact_form input[type=email]").val(),
				text: $("#contact_form textarea").val()
			},
			success: function(data) {
				if ( data == 'sent' ) {
					$('#contact_form .status').html('E-mail has been sent.');
				} else if ( data == 'invalid' ) {
					$('#contact_form .status').html('Your name, email or message is invalid.');
				} else {
					$('#contact_form .status').html('E-mail could not be sent.');					
				}
			},
			error: function () {
				$('#contact_form .status').html('E-mail could not be sent.');
			}
		});
		return false;
	});

	/* Check side navigation */
	$('nav.side').each(function () {
		checkNavigation($(this).attr('data-type'));
	});

	/* Side navigation */
	$('nav.side .next').click(function () {
		type = $(this).parent().attr('data-type');
		pages = $('.pages[data-type=' + type + ']');
		pages.children('.pages_content').animate({
			'left': '-=' + (pages.width() + 20) + 'px'
		});
		current = pages.attr('data-current');
		pages.attr('data-current', parseInt(pages.attr('data-current')) + 1);
		checkNavigation(type);
	});
	$('nav.side .previous').click(function () {
		type = $(this).parent().attr('data-type');
		pages = $('.pages[data-type=' + type + ']');
		pages.children('.pages_content').animate({
			'left': '+=' + (pages.width() + 20) + 'px'
		});
		current = pages.attr('data-current');
		pages.attr('data-current', parseInt(pages.attr('data-current')) - 1);
		checkNavigation(type);
	});
	function checkNavigation (type) {
		pages = $('.pages[data-type=' + type + ']');
		nav = $('nav.side[data-type=' + type + ']');
		(pages.attr('data-current') == 1) ? nav.children('.previous').hide() : nav.children('.previous').show();
		(pages.attr('data-current') == pages.find('.page').length) ? nav.children('.next').hide() : nav.children('.next').show();
	}

	/* Gallery filter */
	$('nav.gallery_nav a').click(function () {
		$('nav.gallery_nav a').removeClass('selected');
		$(this).addClass('selected');
		$('.gallery li').fadeTo('slow', 0.2);
		$('.gallery li.' + $(this).attr('data-tag')).stop().fadeTo('slow', 1);
	});

	/* Portfolio filter */
	$('nav.portfolio_nav a').click(function () {
		$('nav.portfolio_nav a').removeClass('selected');
		$(this).addClass('selected');
		$('.portfolio li').fadeTo('slow', 0.2);
		$('.portfolio li.' + $(this).attr('data-tag')).stop().fadeTo('slow', 1);
	});

	/* Prevent default (don't refresh) */
	$('nav.side a, nav.main a, .back, article a.top, article h3 a, nav.gallery_nav a, nav.portfolio_nav a').click(function (e) {
		e.preventDefault();
	});

});