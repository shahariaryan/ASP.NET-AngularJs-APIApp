app.controller("login", function ($scope, ajax, $rootScope, $location) {
  if ($rootScope.isUserLoggedIn) {
    $location.path("/login");
    return;
  }
  $rootScope.PageType = "login";
  console.log($rootScope.PageType);
  $scope.login = function (user) {
 
    
    ajax.post(
      "https://localhost:44336/api/Login", user,
      function (response) {
        // console.log(response);
        $scope.user = response.data;
        if ($scope.user == null) {
          alert("Invalid Email and Password");
        } else {
          //set id value and type value
          $rootScope.UserId = $scope.user.userid;
          $rootScope.UserType = $scope.user.usertype;
          $rootScope.UserName = $scope.user.name;
          $rootScope.UserPassword = $scope.user.password;
          $rootScope.UserPhone = $scope.user.phone;
          $rootScope.UserEmail = $scope.user.email;
          localStorage.setItem("user", JSON.stringify($scope.user));
          $location.path("/SellerHome");
          // console.log($rootScope.UserName);
          //set login status
          if ($scope.user.usertype == "Seller") {
            
          }
         
        }
      },
      function (err) {
        alert(err);
      }
    );
  };
});
