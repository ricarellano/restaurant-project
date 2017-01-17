
angular
  .module('restaurantApp')
  .controller('SoupKitchenController', SoupKitchenController);

  SoupKitchenController.$inject=['$http','$routeParams', '$location'];
  function SoupKitchenController($http, $routeParams, $location) {
   var vm = this;
      vm.name = "Ricardo"
  //  vm.name = "Restaurant Index"
    vm.soupKitchen = [{
      name: "St. Anthony Foundation",
      address: "150 Golden Gate Ave, San Francisco, CA 94102",
      phone: "(415) 241-2600",
      web: "https://www.stanthonysf.org/",
      image: "http://www.ucarecdn.com/4f6fdc5d-f427-44bb-9ab0-ef1e25d8034e/-/preview/300x300/"
    },
    {
      name: "Glide Memorial Church",
      address: "330 Ellis St, San Francisco, CA 94102",
      phone: "(415) 674-6000",
      web: "http://www.glide.org/",
      image: "https://www.glide.org/view.image?Id=1108"
    },
    {
      name: "HandsOn Bay Area",
      address: "1504 Bryant St #100, San Francisco, CA 94103",
      phone: "(415) 541-9616",
      web: "https://www.handsonbayarea.org/",
      image: "https://www.bikex.org/images/logos/logo-hands-on-bay-area.jpg"
    },
    {
      name: "San Francisco City Impact",
      address: "230 Jones St, San Francisco, CA 94102",
      phone: "(415) 292-1770",
      web: "http://www.sfcityimpact.com/",
      image: "https://i.ytimg.com/vi/gt4kHWFBO5w/maxresdefault.jpg"
    }
  ];



    //
    // $http({
    //   method: 'GET',
    //   url: 'https://api.yelp.com/v3/businesses/search'
    //
    //
    // }).then(function successCallback(response) {
    //   console.log(response);
    // }, function errorCallback(response) {
    //   console.log('There was an error getting the data', response);
    // });
  };
