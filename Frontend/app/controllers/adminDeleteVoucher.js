app.controller(
    "adminDeleteVoucher",
    function ($scope, $http, ajax, $location, $routeParams, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      var id = $routeParams.id;
      ajax.get(API_PORT + "api/vouchers/" + id, success, error);
      function success(response) {
        $scope.voucher = response.data;
        // console.log(response.data);
      }
      function error(error) {
        console.log(error);
      }
  
      $scope.deleteVoucher = function (voucher) {
        if (confirm("Are you sure your want to delete?")) {
          ajax.delete(
            API_PORT + "api/vouchers/delete/" + voucher.voucherid,
            voucher,
            function (response) {
              // console.log(response);
              $location.path("/admin/viewvouchers");
            },
            function (err) {
              console.log(err);
            }
          );
        }
      };
    }
  );
  