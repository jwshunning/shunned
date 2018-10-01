// $(document).ready(function () {
// 	$(".photo").on("hover", function () {
// 		$(".name").find('p').show();
// 	});
//
// });

$(document).ready(function () {

	$(".photo").mouseover(function () {
		var thisname = $(this);
		thisname.find('.name').show();
	});
	$(".photo").mouseout(function () {
		var thisname = $(this);
		thisname.find('.name').hide();
	});

	var pauseAudio = function (container) {
		var player = container.find("audio")[0];

		player.pause();
		//if you want the player to stop, instead of pause
		// player.currentTime = 0;
		container.data("playing", false);
	};
	var playAudio = function (container) {
		var player = container.find("audio")[0];

		player.play();
		container.data("playing", true);
	};
	$(".btn").on("click", function () {
		console.log("clicked!");
		/* ON CLICK PAUSE ALL AUDIO PLAYBACK, UPDATE THE STATE OF THIS AUDIO AND THE CONTAINER DATA */
		var container = $(this).closest(".audio-container"),
			player = container.find("audio")[0],
			previousContainer = $(".audio-container.active");

		if (previousContainer.data("playing") && previousContainer[0] !== container[0]) {
			pauseAudio(previousContainer);
			container.currentTime = 0;
		}

		$(".audio-container.active").removeClass("active");

		container.addClass("active");

		if (container.data("playing")) {
			pauseAudio(container);
			container.currentTime = 0;
		} else {
			playAudio(container);
		}

		//swap images when audio clicked
		var pic = $(this).find(".play");
		var swapImage = pic.attr('data-swap'),
			currentImage = pic.attr('src');

		pic.attr({
			'src': swapImage,
			'data-swap': currentImage
		});


	});
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							// $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

});