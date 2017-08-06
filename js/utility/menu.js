(function(){
    "use strict";

    var closeBtn = document.querySelector('.show-wrapper-btn'),
        utility = window.atm.utility;

    function toggleMenu(){
        var menu = document.querySelector(".list-wrapper");
            utility.toggleClass(menu,'active');
            utility.toggleClass(closeBtn,'active');
    }

    function restCallBack(atms){
        var itemsWrapper = document.querySelector(".list-wrapper .items-wrapper"),
            listWrapper = document.querySelector(".list-wrapper"),
            i,
            items = '';

        for(i = 0; i < 10; i += 1) {
            items += '<div class="item">';
            items += '<div class="title">'+atms[i].name+'</div>';
            items += '<div class="description">Distance: 110km</div>';
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