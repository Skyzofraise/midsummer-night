export default {
	init: (app, CookieManager, Kira, ScrollMagic, MobileDetect, SmoothScrollingManager,) => {
		/*
		|
		| Constants
		|-----------
		*/
        const 
            $affectedByMobile   = $('body'),
            $body               = $('body'),
            $cookieBanner       = $('.cookie-banner'),
            $cookieClose        = $cookieBanner.find('.item-close'),
            $cookieAccept       = $cookieBanner.find('.item-accept'),
            $cookieRefuse       = $cookieBanner.find('.item-refuse'),
            $header             = $('#header'),
            $pageLoader         = $('.page-loader'),
			scrollAreas         = document.querySelectorAll('.scroll-area'),
            $siteContainer    = document.getElementById('site-container'),
            $vsScrollbars       = $('.vs-scrollbar')
		;
		


		/*
        |
        | Scroll Areas
        |---------------
        */
		Array.prototype.forEach.call(scrollAreas, element => {
			Scrollbar.init(element);
		});



        /*
        |
        | Variables
        |------------
        */
        let
            smoothSite = null,
            smoothMenu = null,
            isMobile   = null
        ;



        /*
        |
        | Mobile Detect
        |----------------
        */
        let mobileDetector = new MobileDetect();
        isMobile = mobileDetector.isMobile();
        if (isMobile == null) {
            $affectedByMobile.addClass('isDesktop');
        } else {
            $affectedByMobile.addClass('isMobile');
        }




        /*
        |
        | Loader
        |---------
        */
        let loaderTl;
        loaderTl = new TimelineMax({
            paused: true,
            onComplete: function () { 
                app.dispachEvent($body, 'loaderEnd');
                $pageLoader.remove();
            }
        });
        loaderTl
            .to($pageLoader.find('.line'), 0.8, { width: '28%', ease: Power1.easeOut }, 'start')
            .to($pageLoader.find('.line'), 0.8, { y:0, ease:Power1.easeOut } )
            .to($pageLoader.find('.first-line'), 0.8, { autoAlpha: 1, y:0, ease:Power1.easeOut}, '-=0.8')
            .to($pageLoader.find('.second-line'), 0.8, { autoAlpha: 1, y:0, ease:Power1.easeOut}, '+=0.2')
            .to($pageLoader.find('.second-line'), 0.8, { autoAlpha: 1, y:0, ease:Power1.easeOut}, '+=0.2')
            .to($pageLoader.find('.container'), 0.8, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.8')
            .to($pageLoader, 0.8, { autoAlpha: 0 , ease: Power1.easeOut }, '+=0.2')
            .from($('#page-home'), 0.8, { autoAlpha:0, ease:Power1.easeOut}, '-=0.2')

        $(window).on('load', function () {
            loaderTl.play();
        });

        $body.on('loaderEnd', () => {
            if (isMobile == null){
                smoothSite = new SmoothScrollingManager($siteContainer, { smooth: { callback: onScroll }, parallax: document.querySelectorAll('[data-smooth-parallax]') });
            } else {
                $body.css('overflow', 'visible');
            }
        });




        /*
        |
        | Smooth scrolling
        |-------------------
        |
        */
        $vsScrollbars.remove();
        $body.on('loaderEnd', () => {
            if (isMobile == null){
                smoothSite = new SmoothScrollingManager($siteContainer, { smooth: { callback: onScroll }, parallax: document.querySelectorAll('[data-smooth-parallax]') });
                smoothMenu = new SmoothScrollingManager($menuContainer);
                smoothMenu.off();
            } else {
                $body.css('overflow', 'visible');
            }
        });



        /*
        |
        | On scroll
        |------------
        |
        */
        let previousScrollTop = 0;

        function onScroll(scrollTop) {
            const roundScrollTop = Math.floor(scrollTop);

            if(roundScrollTop != previousScrollTop){
                handleHeaderVisibility(roundScrollTop, previousScrollTop, 100);
            }

            previousScrollTop = roundScrollTop
        }


        if (isMobile) {
            let prevScrollTop = 0;

            $(window).on('scroll', function (e) {
                const scrollTop = $(this).scrollTop();

                handleHeaderVisibility(scrollTop, prevScrollTop, 100);
                prevScrollTop = scrollTop;
            })
        }



        /*
        |
        | handleHeaderVisibility
        |-------------------------
        */
        function handleHeaderVisibility(scrollTop, prevScrollTop, offset) {
            if (scrollTop < offset) {
                $header.replaceClass('scrolled', 'not-scrolled');
            } else {
                $header.replaceClass('not-scrolled', 'scrolled');
            }

            if (prevScrollTop < scrollTop) {
                $header.replaceClass('scrolling-up', 'scrolling-down');
            } else {
                $header.replaceClass('scrolling-down', 'scrolling-up');
            }
        }



        /*
		|
		| Cookie Manager
		|-----------------
		*/
        new CookieManager($cookieBanner, {
            name: 'adveris_cookie_use',
            duration: 30,
            buttons: {
                accept: $cookieAccept,
                refuse: $cookieRefuse,
                close: $cookieClose
            }
        });

        /*
		|
		| Kira
		|-------
        */
        const kira = new Kira({
            dependencies: {
                scrollmagic: ScrollMagic
            }
        })
	}
}