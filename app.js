angular.module('restaurantApp', ['ngRoute'])
       .config(config);


 ////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/index.html',  // this "partial" html file
      controller: 'IndexController',         // uses this controller
      controllerAs: 'IndexCtrl'              // with this name
    })
    .when('/map', {
      templateUrl: 'templates/map.html',
      controller: 'MapController',
      controllerAs: 'MapCtrl'
    })
    .when('/restaurant',{
      templateUrl: 'templates/restaurant.html',
      controller: 'RestaurantController',
      controllerAs: 'RestaurantCtrl'
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
