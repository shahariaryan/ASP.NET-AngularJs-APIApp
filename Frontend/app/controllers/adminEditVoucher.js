app.controller(
    "adminEditVoucher",
    function ($scope, $http, ajax, $location, $routeParams, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      var id = $routeParams.id;
      $scope.statuses = ["Active", "Inactive"];
    
      ajax.get(API_PORT + "api/vouchers/" + id, success, error);
      function success(response) {
        $scope.voucher = response.data;
        console.log(response.data);
      }
      function error(error) {}
  
      $scope.editVoucher = function (voucher) {
        ajax.put(
          API_PORT + "api/vouchers/edit",
          voucher,
          function (response) {
            // console.log(response);
            $location.path("/admin/viewvouchers");
          },
          function (err) {
            console.log(err);
          }
        );
      };
    }
  );
  