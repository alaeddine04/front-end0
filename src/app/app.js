(function () {
  'use strict';

  angular
    .module('app',['ngRoute'])
    .config(config)
    .run(run);

  config.$inject =['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: 'home/benevolform.component.html',
      controllerAs: 'vm'
    }).when('/login', {
      controller: 'LoginController',
      templateUrl: 'login/benevolform.component.html',
      controllerAs: 'vm'
    }).otherwise({ redirectTo: '/login' });
  }

  run.$inject =['$rootScope', '$location', '$http', '$window'];
  function run($rootScope, $location, $http, $window) {
    var userData = $window.sessionStorage.getItem('userData');
    if (userData) {
      $http.defaults.headers.common['Authorization']              = 'Basic ' + JSON.parse(userData).authData;
    }

    $rootScope
      .$on('$locationChangeStart', function (event, next, current) {
        var restrictedPage
          = $.inArray($location.path(),['/login']) === -1;
        var loggedIn
          = $window.sessionStorage.getItem('userData');
        if (restrictedPage && !loggedIn) {
          $location.path('/login');
        }
      });
  }
})();

(function () {
  'use strict';
  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject =['$location', '$window', '$http'];
  function LoginController($location, $window, $http) {
    var vm = this;
    vm.login = login;

    (function initController() {
      $window.localStorage.setItem('token', '');
    })();

    function login() {
      $http({
        url: 'http://localhost:8082/login',
        method: "POST",
        data: {
          'userName': vm.username,
          'password': vm.password
        }
      }).then(function (response) {
        if (response.data) {
          var token
            = $window.btoa(vm.username + ':' + vm.password);
          var userData = {
            userName: vm.username,
            authData: token
          }
          $window.sessionStorage.setItem(
            'userData', JSON.stringify(userData)
          );
          $http.defaults.headers.common['Authorization']                      = 'Basic ' + token;
          $location.path('/');
        } else {
          alert("Authentication failed.")
        }
      });
    };
  }
})();
