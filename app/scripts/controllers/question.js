'use strict';

angular.module('quizApp')
    .controller('QuestionController', function($scope, $rootScope) {
        this.checkAnswer = function(question) {
            console.log("Checking answer", question);
            if (question.choice === question.answer) {
                $rootScope.$broadcast("correct_answer");
            }
            question.answered = true;
        };

    })
