// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.appointments', {
      cache: false,
      url: '/appointments',
      views: {
        'tab-appointments': {
          templateUrl: 'templates/tab-appointments.html',
          controller: 'AppointmentsCtrl'
        }
      }
    })
  
  .state('tab.appointments-detail', {
      cache: false,
      url: '/appointments/detail',
      views: {
        'tab-appointments': {
          templateUrl: 'templates/appointments-detail.html',
          controller: 'AppointmentsDetailCtrl'
        }
      }
    })

  .state('tab.appointments-doctors', {
    cache: false,
    url: '/appointments/detail/referraldoctors',
    views: {
      'tab-appointments': {
        templateUrl: 'templates/appointments-doctors.html',
        controller: 'DoctorsCtrl'
      }
    }
  })

  .state('tab.appointments-doctors-specific', {
    cache: false,
    url: '/appointments/detail/referraldoctors/specific',
    views: {
      'tab-appointments': {
        templateUrl: 'templates/appointments-doctors-specific.html',
        controller: 'DoctorsSpecificCtrl'
      }
    }
  })
  

  .state('tab.account', {
    cache: false,
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

 

  .state('tab.account-password', {
    url: '/account/password',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-password.html',
        controller: 'PasswordCtrl'
      }
    }
  })




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
