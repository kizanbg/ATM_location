(function() {
    "use strict";
    if(!window.atm){
        window.atm = {};
        window.atm.utility = {};
        window.atm.menu = {};
        window.atm.rest = {};
    }
    window.addEventListener("load", function () {
        window.atm.utility.geoLocation();
    })
})();

