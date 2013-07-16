angular.module('app.controllers', ['app.models','uitools']).
  controller('AppointmentCreateController', function($scope, $timeout, Appointments){
    $scope.appt = Appointments.appointments;
    $scope.onDateSelect = function(newValue) {
      console.log('newval: '+newValue);
      $scope.appt.when = newValue;
    };
  });