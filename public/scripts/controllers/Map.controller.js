
angular
  .module('restaurantApp')
  .controller('MapController', MapController)
  .directive('ngMap', MapDirective)

  var state = 0;
  var forwardBtn = false;
  var backBtn = true;

  MapController.$inject=['$http'];

  function MapController($http) {
    var vm = this;
    vm.name = "Restaurant Map"
    vm.markers = []

    vm.search = function() {
      vm.markers = [
        {
          id: 1,
          position: "37.786156,-122.412975",
          infoWindow: "1-window",
          name: "St. Anthony Foundation",
          address: "150 Golden Gate Ave, San Francisco, CA 94102"
        },

      ];
    }

    // vm.process = [false, true, false, false];
    vm.hideForward = forwardBtn;
    vm.hideBack = backBtn;

    vm.process = state;

    vm.goForward = function() {
      backBtn = false;
      state = state + 1;
      if (state == 3) {
        forwardBtn = true;
      } else {
        forwardBtn = false;
      }
    }

    vm.goBack = function() {
      forwardBtn = false;
      state = state - 1;
      if (state == 0) {
        backBtn = true;
      } else {
        backBtn = false;
      }
    }
  };


  function MapDirective(NgMap) {

    // NgMap.getMap().then(function(map) {
    //   console.log(map.getCenter());
    //   console.log('markers', map.markers);
    //   console.log('shapes', map.shapes);
    // });
  };
