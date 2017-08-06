(function(){
    "use strict";

    var closeBtn = document.querySelector('.show-wrapper-btn'),
        utility = window.atm.utility;

    function toggleMenu(){
        var menu = document.querySelector(".list-wrapper");
            utility.toggleClass(menu,'active');
            utility.toggleClass(closeBtn,'active');
    }

    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    function getDistanceFromLatLonInKm(atmLat,atmlon) {
        var earthRadius = 6371,
            dLat = deg2rad(atmLat-window.atm.position.coords.latitude),
            dLon = deg2rad(atmlon-window.atm.position.coords.longitude),
            a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(window.atm.position.coords.latitude)) * Math.cos(deg2rad(atmLat)) * Math.sin(dLon/2) * Math.sin(dLon/2),
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)),
            atmDistance = Math.round(earthRadius * c * 1000);
        return atmDistance;
    }

    function restCallBack(atms){
        var itemsWrapper = document.querySelector(".list-wrapper .items-wrapper"),
            listWrapper = document.querySelector(".list-wrapper"),
            i,
            items = '';

        window.atm.atms = atms;

        for(i = 0; i < 10; i += 1) {
            items += '<div class="item" onclick="window.atm.map.showItem('+i+')">';
            items += '<div class="title">'+atms[i].name+'</div>';
            items += '<div class="description">Distance: '+getDistanceFromLatLonInKm(atms[i].location.lat,atms[i].location.lng)+'m</div>';
            items += '</div>';
        }

        itemsWrapper.innerHTML = items;
        utility.addClass(listWrapper,'list-loaded');
    }

    function initAtmList() {
        window.atm.rest.get(restCallBack);
    }

    closeBtn.addEventListener("click", toggleMenu);
    window.atm.utility.toggleMenu = toggleMenu;

    window.addEventListener("location-loaded", initAtmList);

})();