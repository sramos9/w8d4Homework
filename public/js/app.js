const app = angular.module('MyApp', []);

app.controller('travelController', ['$http', function($http){
  const controller = this;
  this.getTravelInfo = function(){
    $http({
      method: 'GET',
      url: '/travel'
    }).then(
      function(response){
        console.log('this is the response');
        controller.todos = response.data
      },
      function(error){

      }
    );
  }
  this.createTravelInfo = function(){
    $http({
      method: 'POST',
      url: '/travel',
      data: {
        description: this.description,
        image: this.image
      }
    }).then(
      function(response){
        controller.getTravelInfo();
        //this should make info show on page immediately, no refresh.
      },
      function(error){

      }
    );
  }
  
  this.getTravelInfo();
}])
