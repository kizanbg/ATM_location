(function () {
    "use strict";

    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else if (!hasClass(el, className)) {
            el.className += " " + className;
        }
    }
    function removeClass(el, className) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');

        if (el.classList) {
            el.classList.remove(className);
        } else if (hasClass(el, className)) {
            el.className = el.className.replace(reg, ' ');
        }
    }
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    function toggleClass(el, className) {
        if(hasClass(el, className)){
            removeClass(el, className);
        } else {
            addClass(el, className);
        }
    }
    function showPosition(position) {
        var utility = window.atm.utility,
            container = document.querySelector('.container');

        window.atm.position = position;
        utility.addClass(container,'active');
    }
    function geoLocation(){
        console.log('test');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    window.atm.utility.addClass = addClass;
    window.atm.utility.removeClass = removeClass;
    window.atm.utility.hasClass = hasClass;
    window.atm.utility.toggleClass = toggleClass;
    window.atm.utility.geoLocation = geoLocation;
    window.atm.utility.showPosition = showPosition;
})();




