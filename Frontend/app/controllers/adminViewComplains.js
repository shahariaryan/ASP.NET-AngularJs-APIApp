app.controller(
    "adminViewComplains",
    function ($scope, $http, ajax, $location, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      ajax.get(API_PORT + "api/complains/all", success, error);
      function success(response) {
        $scope.complains = response.data;
        console.log(response.data);
      }
      function error(error) {}
    }
  );
  