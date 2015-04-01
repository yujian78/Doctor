Controllers

.controller('LoginCtrl', function($scope, Login, $ionicPopup, $timeout, DisplayAppointment) {
  $scope.signin = function(username, password) {
    // window.localStorage.username = username;

    if(username=="" || password=="" || username==undefined || password==undefined) {
      alert("You must type password sb!");
      return;
    }
    Login.login(username, password, function(data) {
      if(data["code"] == 1) {
        window.localStorage.userInfo = JSON.stringify(data["info"]);
        // Fetch appointments data first
        DisplayAppointment.appointmentRequest(username, function(data){
          apps = angular.copy(data);
          window.localStorage.userApp = JSON.stringify(apps);
          window.location = "#/tab/appointments";
        });
      } else {
        $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
            title: 'Invalid Password',
            template: 'Please re-enter your account info'
          });
          alertPopup.then(function(res) {
          });
        };
        $scope.showAlert();
      }
    });
  }
});