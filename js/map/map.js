/* Google map api key AIzaSyCBEAAeTIczihZiBFF-AnDfkJIT-yH__dg */

(function(){
    "use strict";

    function initMap() {
        var uluru = {lat: window.atm.position.coords.latitude, lng: window.atm.position.coords.longitude},
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: uluru
            }),
            marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
    }

    window.addEventListener("location-loaded", initMap);

})();