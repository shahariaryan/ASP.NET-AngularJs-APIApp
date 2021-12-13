app.controller(
    "adminDeleteUser",
    function ($scope, $http, ajax, $location, $routeParams, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      var id = $routeParams.id;
      ajax.get(API_PORT + "api/users/" + id, success, error);
      function success(response) {
        $scope.user = response.data;
        // console.log(response.data);
      }
      function error(error) {
        console.log(error);
      }
  
      $scope.deleteUser = function (user) {
        if(confirm('Are you sure your want to delete?')) {
          ajax.delete(
            API_PORT + "api/users/delete/" + user.userid,
            user,
            function (response) {
              // console.log(response);
              $location.path("/admin/viewusers");
            },
            function (err) {
              console.log(err);
            }
          );
        }
  
      };
    }
  );
  