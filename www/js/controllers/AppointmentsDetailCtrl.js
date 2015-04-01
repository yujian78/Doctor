Controllers

.controller('AppointmentsDetailCtrl', function($scope, $ionicHistory, $ionicPopup, DisplayPatient, Followup) {
  $scope.appChoosen = JSON.parse(window.localStorage.appSelect);

  patientID = $scope.appChoosen.UserEmail;

  document.getElementById("click1").disabled = true;
  document.getElementById("click2").disabled = true;
  
  DisplayPatient.patientRequest(patientID, function(data) {
    $scope.choosenUser = angular.copy(data);
    window.localStorage.selectedUser = JSON.stringify($scope.choosenUser);
    document.getElementById("click1").disabled = false;
    document.getElementById("click2").disabled = false;
    
  });

  $scope.referralAppoint = function() {
    window.location = "#/tab/appointments/detail/referraldoctors";
  }

  $scope.followAppoint = function(date) {
    $scope.haha = date;

    var confirmPopup = $ionicPopup.confirm({
      title: 'Follow-up Appointment',
      template: 'Confirm to make follow-up appointments?'
    });

    confirmPopup.then(function(res) {
      if(res){
        app = JSON.parse(window.localStorage.appSelect); // appointment selected
        doctor = JSON.parse(window.localStorage.userInfo); // Doctor selected

        Followup.followupRequest(app.UserEmail, doctor.ID, function(data){
          // Get the message from server
          errorMessage = angular.copy(data);
          // show alert
          $scope.showAlert = function() {
            //definre alert
            var alertPopup = $ionicPopup.alert({
              title: errorMessage.title,
              template: errorMessage.msg
            });
            //show alert
            alertPopup.then(function(res){
            });
          };

          $scope.showAlert();

          $ionicHistory.nextViewOptions({
              disableBack: true
          });

          window.localStorage.removeItem("appSelect");
          window.localStorage.removeItem("selectedUser");

          window.location = "#/tab/appointments";  
        });
        
      } else{

      }
    });
  }
});