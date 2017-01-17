console.log("hello");
angular
       .module('restaurantApp', ['ngRoute', 'ngMap'])
       .config(config);



 ////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home',  // this "partial" html file
      controller: 'IndexController',         // uses this controller
      controllerAs: 'IndexCtrl'              // with this name
    })
    .when('/map', {
      templateUrl: 'templates/map',
      controller: 'MapController',
      controllerAs: 'MapCtrl'
    })
    .when('/restaurant',{
      templateUrl: 'templates/restaurant',
      controller: 'RestaurantController',
      controllerAs: 'RestaurantCtrl'
    })
    .when('/soupKitchen',{
      templateUrl: 'templates/soup-kitchen',
      controller: 'SoupKitchenController',
      controllerAs: 'SoupKitchenCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
