Controllers

.controller('DoctorsCtrl', function($scope, DisplayDoc) {
  appSelect = JSON.parse(window.localStorage.appSelect);
  DisplayDoc.docRequest(appSelect.Category, function(data) {
    $scope.doctors = angular.copy(data);
  });

  $scope.goto = function(doctor) {
    window.localStorage.doctor = JSON.stringify(doctor);
    window.location = "#/tab/appointments/detail/referraldoctors/specific";
  }
});