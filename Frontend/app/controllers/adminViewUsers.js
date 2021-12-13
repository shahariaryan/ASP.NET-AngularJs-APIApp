app.controller(
    "adminViewUsers",
    function ($scope, $http, ajax, $location, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      ajax.get(API_PORT + "api/users/all", success, error);
      function success(response) {
        $scope.users = response.data;
        $scope.users.forEach((element) => {
          var v = new Date(element.createdat);
          element.date = v.toDateString();
          element.time = v.toLocaleTimeString();
        });
        console.log($scope.users);
      }
      function error(error) {}
  
      $scope.search = function () {
        if ($scope.searchText === "") {
          ajax.get(API_PORT + "api/users/all", success, error);
        } else {
          ajax.get(
            API_PORT + "api/users/search/" + $scope.searchText,
            function success(response) {
              $scope.users = response.data;
            },
            function (err) {
              console.log(err);
            }
          );
        }
      };
    }
  );
  