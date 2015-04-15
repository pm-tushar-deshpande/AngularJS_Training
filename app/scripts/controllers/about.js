'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.repeatData = [1,2,1];
    $scope.statusList = ["inprogress", "Approved", "Pending"];
  });
