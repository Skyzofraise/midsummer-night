export default {
    init: (app, customGoogleMap) => {
        /*
        |
        | Constants
        |------------
        */
        const
            $map = $('#map')
        ;


        /*
		|
		| initGoogleMap
		|----------------
		|
		*/
        $.each($map, function () {
            var $map = $(this);

            var map = new customGoogleMap($map, {
                'markers': $map.find('.marker'),
                'zoom': 16
            });
        });
    }
}