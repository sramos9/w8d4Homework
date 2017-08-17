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
        controller.travel = response.data
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
        console.log('this is the CREATE response', response);
        controller.getTravelInfo();
        //this should make info show on page immediately, no refresh.
      },
      function(error){

      }
    );
  }
  this.editTravelInfo = function(travel){
    $http({
      method: 'PUT',
      url: '/travel/' + travel._id,
      data: {
        description: this.updatedDescription,
        image: this.updatedImage
      }
    }).then(
      function(response){
        controller.getTravelInfo();
      },
      function(error){

      }
    );
  }
  this.deleteTravelInfo = function(travel){
    $http({
      method: 'DELETE',
      url: '/travel/' + travel._id
    }).then(
      function(response){
        controller.getTravelInfo();
      },
      function(error){

      }
    );
  }
  this.getTravelInfo();
}])
