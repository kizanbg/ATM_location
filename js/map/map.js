(function(){
    "use strict";

    var map,
        currentLocation,
        currentAtm;

    function showItem(index) {
        console.log(window.atm.atms[index]);

        if(currentAtm) {
            currentAtm.setMap(null);
        }

        currentAtm = new google.maps.Marker({
            position: window.atm.atms[index].location,
            map: map
        });
    }

    function initMap() {
        var uluru = {lat: window.atm.position.coords.latitude, lng: window.atm.position.coords.longitude};

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uluru
        });

        currentLocation = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    window.addEventListener("location-loaded", initMap);
    window.atm.map.showItem = showItem;

})();