angular
    .module('SmokeApp', [
        'ngAnimate',
        'mgcrea.ngStrap',
        'ngRoute'
    ])
    .controller('MainController', function ($scope, $location, $modal) {
        $scope.pageName = function() { return $location.path(); };
    })
    .controller('ECigController', function ($scope, $location, $modal) {

        $scope.pageName = function() { return $location.path(); };

        $scope.eCigDescription = [
            "Assembled",
            "Assembled (transparent view)",
            "Tank",
            "Heating coil",
            "Base with battery thread",
            "Metal mesh",
            "Polyfill material",
            "Wisk",
            "Drip tip"
        ];

        $scope.description = [
            "Electronic cigarettes are one of latest inventions in the world of tobacco products. " +
            "The electronic cigarette delivers nicotine in the form of an aerosol (mist) instead of a smoke. " +
            "The aerosol (most people inaccurately refer to it as vapor) comes from the liquid (electronic liquid / electronic juice) " +
            "that gets heated up by heating of the coil inside of a device.",

            "Although the first patent for a smokeless, non-tobacco cigarette was made as early as 1963, " +
            "electronic cigarettes were not commercialized until 2003, when a Chinese pharmacist " +
            "Hon Lik first invented and then patented the modern day e-cigarette."
        ];

        $scope.eCigTypes = [
            {
                name: "Atomizer",
                image: "../images/atomizer.jpg",
                pros: ["Low cost", "Perfect for dipping - can switch between different e-liquid flavors very fast"],
                cons: ["Have to continuously refill", "Hard to see level of e-liquid inside"],
                description: "Atomizers are one of the original (first generation) devices. " + 
                "They have a fairly small capacity and are best for people who prefer dripping. "+ 
                "There are different design but majority of atomizers have a heating coil on the bottom with metal mesh or silica wick on top of the coil.",
                help: {
                    clean: ["https://www.youtube.com/watch?v=pXYil2ppWcc"]
                }
            },
            {
                name: "Cartomizer",
                image: "../images/cartomizer.jpg",
                pros: ["Low cost", "Holds more e-liquid", "Easy to rebuild"],
                cons: ["Not the best choice for continuous vaping", "May retain previous e-liquid flavor"],
                description: "In design cartomizers are similar to the atomizer. " + 
                "The difference is that cartomizers have polyfill wrapped around a heating coil. " + 
                "A polyfill soaks e-liquid and allows for longer vape time over atomizer. " + 
                "There are some designs of cartomizers that are housed inside a larger cylindrical tank that holds even larger capacity of e-liquid."
            },
            {
                name: "Clearomizer",
                image: "../images/clearomizer.jpg",
                pros: ["Longer life cycle", "Holds much more e-liquid"],
                cons: ["More expensive", "Retains previous e-liquid flavor", "May leak more (depending on manufacturer/model)"],
                description: "Clearomizers are one of the newest and most popular devices on the market. " +
                "These type of devices are usually cylindrical and feature a clear polycarbonate plastic or pyrex glass tank. " + 
                "A clear tank allows you to see the level of e-liquid inside of a clearomizer. " + 
                "E-liquid is delivered to the heating coil by ways of a silica wick. " + 
                "Some designs feature heating coil at the top with longer wicks, " + 
                "others have heating coil at the bottom with shorter wicks which allows for easier wick saturation of e-liquid.",
                help: {
                    clean: ["https://www.youtube.com/watch?v=kg7oA3o9EZE"]
                }
            }
        ];

        $scope.pageName = function() { return $location.path(); };

        $scope.openModal = function ($event, type) {
            $scope.currentType = type;
            $modal({
                scope: $scope,
                contentTemplate: 'templates/image-modal.html',
                show: true
            });
        };
    })
    .controller("SnusController", function SnusController ($scope, $location, $modal) {
        
        $scope.pageName = function() { return $location.path(); };

        $scope.description = [
            "Snus is another alternative to smoking tobacco. " +
            "Snus is a moist powder tobacco that is placed under lip (mostly upper) for extended periods of time. " +
            "Unlike it's predecessors like snuff or dipping tobacco it does not require spitting. " +
            "On top of that it is believed to be safer than snuff or dipping. " +
            "Snus takes origin in 19th century Sweden when Swedish producers started manufacturing moist snuff that later became known as snus. " +
            "Moreover snus can be safely used in a lot of environments where smoking is prohibited, such as airplanes. "
        ];

        $scope.snusTypes = [
            {
                "name"          : "Scandinavian snus",
                "condition"     : "moist smokeless powder tobacco",
                "application"   : "placed under upper (sometimes lower) lip for extended period of time",
                "flavors"       : "mildly flavored. ex: smoke, bergamot, citrus, juniper berry, herbs, floral flavors",
                "images"        : [{"source":"images/snus_swedish_portioned.jpg"}]
            },
            {
                "name"          : "American snus",
                "condition"     : "moist smokeless powder tobacco, lower pH level",
                "application"   : "placed under upper (sometimes lower) lip for extended period of time",
                "flavors"       : "often flavored. ex.: spearmint, wintergreen, vanilla, fruit (e.g. cherry)",
                "images"        : [{"source":"images/snus_american.jpg"}]
            },
            {
                "name"          : "Nasal snuff",
                "condition"     : "dry smokeless powder tobacco",
                "application"   : "insufflation (\"sniffed\", but not deeply \"snorted\") through the nose",
                "flavors"       : "often flavored. ex.: menthol or other scents",
                "images"        : [{"source":"images/nasal_snuff.jpg"}, {"source":"images/nasal_snuff_accessories.jpg", "name": "Nasal snuff accessories (snuff bullets)"}]
            },
            {
                "name"          : "Chewing tobacco",
                "condition"     : "tobacco in the form of loose leaf and stem strands or chopped leaves and stems compressed into blocks (\"plugs\") or finely ground pieces compressed into pellets",
                "application"   : "placed between cheek and gums or actively chewed",
                "flavors"       : "sometimes flavored. ex.: wintergreen, apple, cherry",
                "images"        : [{"source":"images/chewing_tobacco.jpg"},{"source":"images/spittoon.jpg", "name": "Spittoon (Mud jug)"}]
            },
            {
                "name"          : "Dipping tobacco",
                "condition"     : "moist smokeless finely ground (but less than snus) tobacco",
                "application"   : "placed between the lower lip or cheek and the gums (it is not used nasally); salivation is copious and usually spat out",
                "flavors"       : "usually flavored, although unflavored brands remain popular. ex.: wintergreen, mint",
                "accessories"   : "Spittoon (mud jug)",
                "images"        : [{"source":"images/dip_tobacco.jpg"},{"source":"images/spittoon.jpg", "name": "Spittoon (Mud jug)"}]
            },
            {
                "name"          : "Makla",
                "condition"     : "moist smokeless powder tobacco (very similar to Scandinavian snus, but more finely ground), higher nicotine content, higher pH level (~ above 10)",
                "application"   : "placed under upper (sometimes lower) lip for extended period of time",
                "flavors"       : "sometimes flavored. ex: menthol, coffee, chocolate-mint",
                "images"        : [{"source":"images/makla.jpg"}]
                // "brands"        : "Chema Makla, Makla Africaine (al Kantara, Platinum), Makla Ifrikia (Neffa), "
            },
            {
                "name"          : "Naswār",
                "condition"     : "moist smokeless powder tobacco, often green and sometimes caked with mineral lime and/or wood ash",
                "application"   : "used like dipping tobacco (placed between lip or cheek and the gums), or put under the tongue",
                "flavors"       : "usually heavily flavored. ex.: culinary oils (cardamom, sesame), the fruit, lime, menthol",
                "images"        : [{"source":"images/naswar2.jpg"}]
            }
        ];

        $scope.openModal = function ($event, type) {
            $scope.currentType = type;
            $modal({
                scope: $scope,
                contentTemplate: 'templates/image-snus-multiple-modal.html',
                show: true
            });
        };

    })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'templates/home.html',
                controller: 'MainController'
            })
            .when('/e-cigs', {
                templateUrl: 'templates/e-cigs.html',
                controller: 'ECigController'
            })
            .when('/snus', {
                templateUrl: 'templates/snus.html',
                controller: 'SnusController'
            })
            .when('/quit', {
                templateUrl: 'templates/quit.html',
                controller: 'MainController'
            })
            ;

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })
    ;