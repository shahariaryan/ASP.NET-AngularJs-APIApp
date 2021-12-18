app.controller("adminCreateUser", function ($scope, $http, ajax, $location, $rootScope) {
    $rootScope.PageType = "admin";
  
    if ($rootScope.UserType != "Admin") {
      //$location.path("/");
      return;
    }
  
    $scope.statuses = ["Valid", "Invalid", "Banned"];
  
    $scope.createUser = function (user) {
      if (user.password != user.cpassword){
        $scope.passError = "Passwords Dont Match";
      }
      else {
        ajax.post("https://localhost:44336/api/users/add",user,
        function(response){
          console.log(response);
          $location.path("/admin/viewusers")
        },
        function(err){
          console.log(err);
        });
      }
    };
  });
  