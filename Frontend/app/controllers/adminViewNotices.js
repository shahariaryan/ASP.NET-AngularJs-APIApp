app.controller(
    "adminViewNotices",
    function ($scope, $http, ajax, $location, $rootScope) {
    $rootScope.PageType = "admin";
  
      if ($rootScope.UserType != "Admin") {
        $location.path("/");
        return;
      }
      ajax.get(API_PORT + "api/notices/all", success, error);
      function success(response) {
        $scope.notices = response.data;
        $scope.notices.forEach((element) => {
          var v = new Date(element.createdat);
          element.date = v.toDateString();
          element.time = v.toLocaleTimeString();
        });
        // console.log(response.data);
      }
      function error(error) {}
  
      $scope.search = function () {
        if ($scope.searchText === "") {
          ajax.get(API_PORT + "api/notices/all", success, error);
        } else {
          ajax.get(
            API_PORT + "api/notices/search/" + $scope.searchText,
            function success(response) {
              $scope.notices = response.data;
            },
            function (err) {
              console.log(err);
            }
          );
        }
      };
    }
  );
  