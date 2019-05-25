import { library, dom } from '@fortawesome/fontawesome-svg-core/index';
import { 
	faWordpress,
	faInstagram
} from '@fortawesome/free-brands-svg-icons'; // prefix: fab
import { faFire as fasFaFire } from '@fortawesome/pro-solid-svg-icons'; // prefix: fas
import { 
	faFire as farFaFire,
	faHeart as farHeart
} from '@fortawesome/pro-regular-svg-icons'; // prefix: far

import { 

	faTimes as falTimes, 
	

} from '@fortawesome/pro-light-svg-icons'; // prefix: fal

library.add(
    faWordpress,
    falTimes,
    farFaFire, 
    fasFaFire, 
    farHeart,
    faInstagram
)
dom.watch();