(function() {
    "use strict";
    if(!window.atm){
        window.atm = {};
        window.atm.utility = {};
        window.atm.menu = {};
        window.atm.rest = {};
        window.atm.map = {};
    }
    window.addEventListener("load", function () {
        window.atm.utility.geoLocation();
    })
})();

