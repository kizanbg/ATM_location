(function(){
    "use strict";

    var banks = ["Telenor", "Intesa", "Societe"],
        locations = [
            {"lat":44.790721, "lng":20.504533},
            {"lat":44.791391, "lng":20.501529},
            {"lat":44.793006, "lng":20.499684},
            {"lat":44.793736, "lng":20.500242},
            {"lat":44.794802, "lng":20.501229},
            {"lat":44.794985, "lng":20.503718},
            {"lat":44.794254, "lng":20.505821},
            {"lat":44.792396, "lng":20.507795},
            {"lat":44.789138, "lng":20.504233},
            {"lat":44.789442, "lng":20.498868},
            {"lat":44.792244, "lng":20.496207},
            {"lat":44.794985, "lng":20.496508},
            {"lat":44.797452, "lng":20.499598},
            {"lat":44.797421, "lng":20.504190},
            {"lat":44.796356, "lng":20.507408},
            {"lat":44.795168, "lng":20.507172},
            {"lat":44.792534, "lng":20.508846},
            {"lat":44.790051, "lng":20.508653},
            {"lat":44.788848, "lng":20.505778},
            {"lat":44.787371, "lng":20.495607}
        ];

    function generateATM() {
        return {
            name : banks[Math.floor(Math.random()*3)],
            location :  locations[Math.floor(Math.random() * 20)],
            multiCurrency : Math.random() > 0.5
        };
    }

    function get(callback){
        var atms = [],
            i;

        for(i = 0; i < 10; i += 1) {
            atms.push(generateATM());
        }

        setTimeout(callback, Math.floor(Math.random() * 1000) + 1, atms);
    }

    window.atm.rest.get = get;

})();