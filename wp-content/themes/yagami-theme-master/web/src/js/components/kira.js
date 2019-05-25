/*
|--------------------------------------------------------------------------------
|                                   KIRA
|--------------------------------------------------------------------------------
|
| Kira is a lightweight library to handle Greensock Timelines & ScrollMagic Scenes
|
*/

/*
|
| Class
|--------
|
*/
class Kira {
    /*
    |
    | Constructor
    |--------------
    */
    constructor(params = {}) {
        this.initParams(params);
    }


    /*
    |
    | initParams
    |--------------
    */
    initParams(params) {
        const { dependencies } = params;

        
    }


    /**
	|
	| Init
	|-------
    */
    init() {
       
    }

    

    /**
    |
    | formWrapperExist
    |-------------------
    */
    formWrapperExist() {
        return this.control(this.exist(this.formWrapper), this.getMessage('formWrapperExist'), this.formWrapper);
    }

    /**
	|
	| Helper: dispachEvent
	|-----------------------
	|
	*/
    dispachEvent($element, eventName, datas = null) {
        var event = $.Event(eventName);

        if (datas !== null) {
            $.each(datas, function (key, value) {
                event[key] = value
            });
        }

        $element.trigger(event);
    }


    /**
	|
	| Helper: isDefined
	|--------------------
	|
	*/
    isDefined(item) {
        return typeof item !== 'undefined';
    }


    /**
	|
	| Helper: exist
	|----------------
	*/
    exist($item) {
        return $item.length;
    }


    /**
    |
    | Helper: control
    |------------------
    */
    control(condition, message, selector = null) {
        if (!condition) {
            if (selector === null) {
                console.error(message);
            } else {
                console.error(message, selector);
            }
        }

        return condition;
    }


    /**
	|
	| Helper: getMessage
	|---------------------
	*/
    getMessage(messageKey, var1 = '', var2 = '') {
        var messages = {
            'formWrapperExist': 'The form wrapper (specified as 1st parameter) does not exist:'
        };

        return 'Kira: ' + messages[messageKey];
    }
}

export default Kira;