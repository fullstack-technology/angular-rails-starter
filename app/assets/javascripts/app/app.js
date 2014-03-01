angular.module('myApp',['ngRoute' , 'myApp.controllers'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeController'
	})
  .otherwise({redirectTo: '/'});
});
