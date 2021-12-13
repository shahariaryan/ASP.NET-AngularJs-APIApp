app.controller(
    "adminViewAuditLog",
    function ($scope, $http, ajax, $location, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      ajax.get(API_PORT + "api/auditlogs/all", success, error);
      function success(response) {
        $scope.auditlogs = response.data;
        $scope.auditlogs.forEach((element) => {
          var v = new Date(element.createdat);
          element.date = v.toDateString();
          element.time = v.toLocaleTimeString();
        });
        // console.log(response.data);
      }
      function error(error) {}
  
      $scope.search = function () {
        if ($scope.searchText === "") {
          ajax.get(API_PORT + "api/auditlogs/all", success, error);
        } else {
          ajax.get(
            API_PORT + "api/auditlogs/search/" + $scope.searchText,
            function success(response) {
              $scope.auditlogs = response.data;
            },
            function (err) {
              console.log(err);
            }
          );
        }
      };
    }
  );
  