'use strict';

angular
  .module('quizApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new_question', {
        templateUrl: 'views/new_question.html',
        controller: 'QuestionFormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('#!');
  });
