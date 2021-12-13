app.controller(
    "home",
    function ($scope, $http, ajax, $location, $rootScope) {
      $rootScope.PageType = "home";
  
      console.log($rootScope.PageType);
      console.log($rootScope.UserType);
  
    }
  );
  