app.controller(
    "adminDeleteNotice",
    function ($scope, $http, ajax, $location, $routeParams, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      var id = $routeParams.id;
      ajax.get(API_PORT + "api/notices/" + id, success, error);
      function success(response) {
        $scope.notice = response.data;
        // console.log(response.data);
      }
      function error(error) {
        console.log(error);
      }
  
      $scope.deleteNotice = function (notice) {
        if(confirm('Are you sure your want to delete?')) {
          ajax.delete(
            API_PORT + "api/notices/delete/" + notice.noticeid,
            notice,
            function (response) {
              // console.log(response);
              $location.path("/admin/viewnotices");
            },
            function (err) {
              console.log(err);
            }
          );
        }
      };
    }
  );
  