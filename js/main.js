$(function() {
	let header = $("#header");
	let introH = $("#intro").innerHeight();
	let scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if( scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		let blockOffset = $(blockId).offset().top - 100;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000);


		
	});



});