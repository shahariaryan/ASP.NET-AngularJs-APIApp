app.controller(
    "adminEditNotice",
    function ($scope, $http, ajax, $location, $routeParams, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      var id = $routeParams.id;
      $scope.statuses = ["Active", "Inactive"];
      $scope.usertypes = ["Admin", "Manager", "Seller", "Customer"];
    
      ajax.get(API_PORT + "api/notices/" + id, success, error);
      function success(response) {
        $scope.notice = response.data;
        console.log(response.data);
      }
      function error(error) {}
  
      $scope.editNotice = function (notice) {
        ajax.put(
          API_PORT + "api/notices/edit",
          notice,
          function (response) {
            // console.log(response);
            $location.path("/admin/viewnotices");
          },
          function (err) {
            console.log(err);
          }
        );
      };
    }
  );
  