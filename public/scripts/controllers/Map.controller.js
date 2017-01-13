
angular
  .module('restaurantApp')
  .controller('MapController', MapController);

  MapController.$inject=['$http','$routeParams', '$location'];
  function MapController($http, $routeParams, $location) {
   var vm = this;

    vm.name = "Restaurant Map"


  };

  function initMap() {
         var myLatLng = {lat: -25.363, lng: 131.044};

         // Create a map object and specify the DOM element for display.
         var map = new google.maps.Map(document.getElementById('map'), {
           center: myLatLng,
           scrollwheel: false,
           zoom: 4
         });

         // Create a marker and set its position.
         var marker = new google.maps.Marker({
           map: map,
           position: myLatLng,
           title: 'Hello World!'
         });
       }
