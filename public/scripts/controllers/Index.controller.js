
angular
  .module('restaurantApp')
  .controller('IndexController', IndexController);

  IndexController.$inject=['$http','$routeParams', '$location'];
  function IndexController($http, $routeParams, $location) {
   var vm = this;

   vm.name = "Restaurant Index"


  };
