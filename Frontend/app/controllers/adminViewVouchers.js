app.controller(
    "adminViewVouchers",
    function ($scope, $http, ajax, $location, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      ajax.get(API_PORT + "api/vouchers/all", success, error);
      function success(response) {
        $scope.vouchers = response.data;
        console.log(response.data);
      }
      function error(error) {}
  
      $scope.search = function () {
        if ($scope.searchText === "") {
          ajax.get(API_PORT + "api/vouchers/all", success, error);
        } else {
          ajax.get(
            API_PORT + "api/vouchers/search/" + $scope.searchText,
            function success(response) {
              $scope.vouchers = response.data;
            },
            function (err) {
              console.log(err);
            }
          );
        }
      };
    }
  );
  