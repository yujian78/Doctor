angular.module('starter.services', [])

.factory("ServerURL", function() {
  var baseUrl = "http://ciel.at/doctors/"

  return {
    login: baseUrl + "login_doctors.php",
    patients: baseUrl + "patients_info.php",
    changePassword: baseUrl + "updatePassword.php",
    doctors: baseUrl + "doctors_info.php",
    makeReferral: baseUrl + "makeReferral.php",
    deleteAppoint: baseUrl + "deleteappointment.php",
    appointmentInfo: baseUrl + "appointment_info.php",
    makeFollowup: baseUrl + "makeFollowUp.php"

  }
})

.factory('Login', function($http, ServerURL) {
  var login = function(username, password, callback) {
    $http
    .post(ServerURL.login, {"username": username, "password": password})
    .success(function(data) {
      callback(data);
    })
  }

  return {
    login: login
  }
})

.factory('DisplayAppointment', function($http, ServerURL) {
  var appointmentRequest = function(userID, callback){
    $http
    .post(ServerURL.appointmentInfo, {"appRequest": userID})
    .success(function(data){
      callback(data);
    });
  }

  return {
    appointmentRequest: appointmentRequest
  }
})

.factory('DisplayPatient', function($http, ServerURL) {
  var patientRequest = function(patientID, callback) {
    $http
    .post(ServerURL.patients, {"patientID": patientID})
    .success(function(data) {
      callback(data);
    })
  }

  return {
    patientRequest: patientRequest
  }
})

.factory('UpdatePassword', function($http, ServerURL) {
  var passwordRequest = function(password, ID, callback){
    $http
    .post(ServerURL.changePassword, {"password": password, "ID": ID})
    .success(function(data){
      callback(data);
    });
  }

  return {
    passwordRequest: passwordRequest
  }
})

.factory('DisplayDoc', function($http, ServerURL) {
  var docRequest = function(category, callback){
    $http
    .post(ServerURL.doctors, {"selectCategory": category})
    .success(function(data){
      callback(data);
    });
  } 

  return {
    docRequest: docRequest
  }
})

.factory('Referral', function($http, ServerURL) {
  var referralRequest = function(user, doctor, callback){
    $http
    .post(ServerURL.makeReferral, {"selectUser": user, "selectDoctor": doctor})
    .success(function(data){
      callback(data);
    });
  } 

  return {
    referralRequest: referralRequest
  }
})

.factory('Followup', function($http, ServerURL) {
  var followupRequest = function(user, doctor, callback){
    $http
    .post(ServerURL.makeFollowup, {"selectUser": user, "selectDoctor": doctor})
    .success(function(data){
      callback(data);
    });
  }

  return {
    followupRequest: followupRequest
  }
})

.factory('DeleteAppointment', function($http, ServerURL) {
  var deleteRequest = function(appID, callback){
    $http
    .post(ServerURL.deleteAppoint, {"deleteRequest": appID})
    .success(function(data){
      callback(data);
    });
  } 

  return {
    deleteRequest: deleteRequest
  }
});
