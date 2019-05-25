/*
|
| Importing Libs 
|------------------
*/
require('@lib/iziModal/js/iziModal.js')($); //désolé
import Swiper from 'swiper/dist/js/swiper.min';
import { TweenMax } from "gsap/TweenMax";
import SplitText from "@lib/gsap-pro/SplitText";
import ScrollTo from "gsap/ScrollToPlugin";
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';
import ScrollMagic from 'scrollmagic';
import Scrollbar from 'smooth-scrollbar';

/*
|
| Importing Components
|-----------------------
*/
import CookieManager from './components/cookie-manager';
import customGoogleMap from './components/custom-google-map.js';
import Kira from './components/kira.js';
import MobileDetect from './components/mobile-detect.js';
import SmoothScrollingManager from './components/smooth-scrolling-manager.js';

/*
|
| Importing Utils
|-------------------
*/
import './utils/fa';
import Router from './utils/router.js';

/*
|
| Importing App files
|----------------------
*/
import * as app from './components/global.js';
import main from './pages/main.js';
import home from './pages/home.js';
import contact from './pages/contact.js';

/*
|
| Routing
|----------
*/
const routes = new Router([
	{
		'file': main, 
		'dependencies': [app, CookieManager, Kira, ScrollMagic, MobileDetect, SmoothScrollingManager,]
	},
	{
		'file': home, 
		'dependencies': [app, Swiper],
		'resolve': '#page-home'
    },
    {
        'file': contact,
        'dependencies': [app, customGoogleMap],
        'resolve': '#page-contact'
    }
]);

/*
|
| Run
|------
*/
(($) => { routes.load() })(jQuery);
