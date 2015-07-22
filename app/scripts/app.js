var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../partials/home.html",
      controller: "homeCtrl"
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "../partials/profile.html",
      controller: "profileCtrl"
    })
    .state('messages', {
      url: "/messages",
      templateUrl: "../partials/messages.html",
      controller: "messagesCtrl"
    })

    $locationProvider.html5Mode({enabled: true, requireBase: false})
});

app.controller('homeCtrl', ['$scope', function($scope){
	//...
}]);

app.controller('profileCtrl', ['$scope', function($scope){
	//...
}]);

app.controller('messagesCtrl', ['$scope', function($scope){
	//...
}]);
