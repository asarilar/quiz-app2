'use strict';

angular.module('quizApp')
  .controller('QuizCtrl', function ($scope, $interval) {
        $scope.quiz = [{
            "q": "Who is the best ping pong player at FSA?",
            'options': ["Mike", "Eddie", "Nimit", "Patrick"],
            'answer': "Nimit",
            difficulty: 10
        }, {
            "q": "Which robot name was chanted during Lego Mindstorms?",
            'options': ['infiniteLoop', 'noHope.js', 'johnny5', 'none of the above'],
            'answer': 'noHope.js',
            difficulty: 27
        }, {
            'q': "Out of the following frontend frameworks, which framework is most rails-like",
            'options': ['Ember.js', 'Angular.js', 'Backbone.js', 'Meteor.js'],
            'answer': 'Ember.js',
            difficulty: 5
        }, {
            'q': "Which project used a local data store?",
            'options': ['TripPlanner', 'Twitter.js', 'WikiWalker', 'WikiStack'],
            'answer': 'Twitter.js',
            difficulty: 9
        }];

        $scope.score = 0;
        $scope.$on("correct_answer", function() {
          $scope.score++;
        });
        $scope.$watch('score', function(newval, oldval) {
          console.log("Score: ", newval, oldval);
        });
        

        $scope.time_remaining = 30;

        $interval(function() {
          console.log("I KNOW WHAT YOU DID LAST EVENT LOOP!");
          $scope.time_remaining--;
        }, 1000);

        // $scope.score.currentScore = 0;

        // var self = this;

        // $scope.newQuestion = {'q': 'Question Text', options: []}
        this.addOption = function() {
          $scope.newQuestion.options.push({});
        };

        // $scope.addNewQuestion = function() {
        //   var question = {
        //     q: $scope.newQuestion.q,

        //     options: $scope.newQuestion.options.map(function(option) {
        //       return option.answer_text;
        //     }),
        //     answer: $scope.newQuestion.options.filter(function(option) {
        //       return option.correctAnswer === true;
        //     })[0], 
        //     difficulty: $scope.newQuestion.q.length
        //   }
        //   $scope.quiz.push(question);
        //   $scope.newQuestion = {'q': 'Question Text', options: []}

        // };
  });
