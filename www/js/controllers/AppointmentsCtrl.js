Controllers

.controller('AppointmentsCtrl', function($scope, $rootScope) {
		$scope.apps = JSON.parse(window.localStorage.userApp);
		$scope.doctor = JSON.parse(window.localStorage.userInfo);
		
		$scope.chooseApp = function(appChoosen) {
			window.localStorage.appSelect = JSON.stringify(appChoosen);			
			window.location = "#/tab/appointments/detail";
		}
});