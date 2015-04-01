Controllers

.controller('DoctorsSpecificCtrl', function($scope, $ionicPopup, $ionicHistory, Referral, DisplayAppointment, DeleteAppointment) {
	$scope.doctor = JSON.parse(window.localStorage.doctor); // Selected referral doctor

	$scope.referralConfirm = function() {
	    var confirmPopup = $ionicPopup.confirm({
	      title: 'Referral Appointment',
	      template: 'Confirm to make referral appointments?'
	    });

	    confirmPopup.then(function(res) {
			if(res){
				app = JSON.parse(window.localStorage.appSelect); // appointment selected
				
				Referral.referralRequest(app.UserEmail, $scope.doctor.ID, function(data){
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

					selectID = app.ID;
					DeleteAppointment.deleteRequest(selectID, function(data){
		                // Get the message from server
		                errorMessage = angular.copy(data);
		            });

					doc = JSON.parse(window.localStorage.userInfo); // User of the app
					DisplayAppointment.appointmentRequest(doc.ID, function(data){
			            apps = angular.copy(data);
			            window.localStorage.userApp = JSON.stringify(apps);

			            // Remove unnecessaty items
		                window.localStorage.removeItem("appSelect");
		                window.localStorage.removeItem("selectedUser");
		                window.localStorage.removeItem("doctor");
		                
						$ionicHistory.nextViewOptions({
		                    disableBack: true
		                });

		                window.location = "#/tab/appointments";
			        });

					
				});
				
			} else{

			}
	    });
    }
});