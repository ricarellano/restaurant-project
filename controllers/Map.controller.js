angular.module('restaurantApp')
  .controller('MapController', MapController);

  MapController.$inject=['$http','$routeParams', '$location'];
  function MapController($http, $routeParams, $location) {
   var vm = this;

    vm.name = "Restaurant Map"


  };
