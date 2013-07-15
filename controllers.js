angular.module('app.controllers', ['app.models','uitools']).
  controller('AppointmentCreateController', function($scope, $timeout, Appointments){
    $scope.appt = Appointments.appointments;
    $scope.onDateSelect = function(newValue, a, b) {
      console.log('newval: '+newValue);
      console.log(a);
      console.log(b);
      $scope.appt.when = newValue;
    };
  });