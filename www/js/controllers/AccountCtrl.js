Controllers

.controller('AccountCtrl', function($scope) {
  $scope.userInfo = JSON.parse(window.localStorage.userInfo);

  $scope.resetPassword = function() {
    window.location = "#/tab/account/password";
  }
  
});