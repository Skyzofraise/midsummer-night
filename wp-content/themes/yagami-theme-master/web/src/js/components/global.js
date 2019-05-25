/*
|
| JQuery replaceClass
|----------------------
*/
$.fn.replaceClass = function (oldClasses, newClasses) {
    return this.each(function () {
        $(this).removeClass(oldClasses).addClass(newClasses);
    })
}

/*
|
| Dump
|--------
*/
export function dump(value){
  console.log(value);
}

/*
|
| Dispatch event
|-----------------
*/
export function dispachEvent($element, eventName, datas = null){
	var event = $.Event(eventName);

	if(datas !== null){
		for(let [key, value] of Object.entries(datas)){
			event[key] = value
		}
	}

	$element.trigger(event);
}

/*
|
| Check defined
|----------------
*/
export function isDefined(item) {
    return typeof item !== 'undefined';
}

/*
|
| Check exist
|-------------------
*/
export function exist(element) {
    return element.length;
}


/*
|
| Email validation
|-------------------
*/
export function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}