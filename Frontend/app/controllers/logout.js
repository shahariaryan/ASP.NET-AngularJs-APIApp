app.controller("logout", function ($scope, ajax, $rootScope, $location) {
    if (localStorage.getItem("user")){
      localStorage.removeItem("user");
    }
  
    $rootScope.isUserLoggedIn = false;
  
    $rootScope.UserId="";
    $rootScope.UserType="";
    $rootScope.UserName="";
    $rootScope.UserEmail="";
    $rootScope.UserPhone="";
    $rootScope.UserPassword="";
  
    $location.path("/");
  });
  