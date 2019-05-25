export default {
	init: (app, Swiper) => {
		app.dump('home.js');

		/*
		|
		| Constants
		|-----------
		*/
		const 
			$loadedPostsContainer = $('.loaded-posts')
		;



		/*
		|
		| Swiper
		|---------
		*/
		//initialize swiper when document ready
		var mySwiper = new Swiper ('.chatons .swiper-container', {
			slidesPerView : 3,
			spaceBetween : 30,
			speed: 800,
			navigation: {
				nextEl: '.chatons .swiper-button-next',
				prevEl: '.chatons .swiper-button-prev',
			},
			breakpoints: {
			    // when window width is <= 480px
			    540: {
			      slidesPerView: 1,
			      spaceBetween: 20
			    },
			    // when window width is <= 640px
			    991: {
			      slidesPerView: 2,
			      spaceBetween: 30
			    }
			}
		});

		var viewsSwiper = new Swiper ('.views .swiper-container', {
			slidesPerView : 1,
			spaceBetween : 30,
			speed: 800,
			navigation: {
				nextEl: '.views .swiper-button-next',
				prevEl: '.views .swiper-button-prev',
			}
		})

		
		/*
		|
		| Ajax Sample
		|--------------
		*/
		$('[data-ajax-url]').on('click', function(){
			$.ajax({
				url: $(this).data('ajax-url'),
				type: 'GET',
				dataType: 'json',
				success: (response, status) => {
					$loadedPostsContainer.append(response);
				},
				error: (response, status, error) => {
					console.log(response, status, error);
				}
			})
		});
	}
}
