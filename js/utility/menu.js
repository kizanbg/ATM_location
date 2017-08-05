(function(){
    "use strict";

    var closeBtn = document.querySelector('.show-wrapper-btn');

    function toggleMenu(){
        var utility = window.atm.utility,
            menu = document.querySelector(".list-wrapper");
        utility.toggleClass(menu,'active');
        utility.toggleClass(closeBtn,'active');
    }

    closeBtn.addEventListener("click", toggleMenu);
    window.atm.utility.toggleMenu = toggleMenu;

})();