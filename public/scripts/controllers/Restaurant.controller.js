angular
  .module('restaurantApp')
  .controller('RestaurantController', RestaurantController);

  RestaurantController.$inject=['$http','$routeParams', '$location'];
  function RestaurantController($http, $routeParams, $location) {
   var vm = this;

    vm.name = " Each Restaurant"


  };
