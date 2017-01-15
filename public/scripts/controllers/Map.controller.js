
angular
  .module('restaurantApp')
  .controller('MapController', MapController)
  .directive('ngMap', MapDirective);


  MapController.$inject=['$http'];

  function MapController($http) {
    var vm = this;
    vm.name = "Restaurant Map"





  };


  function MapDirective(NgMap) {
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  };
