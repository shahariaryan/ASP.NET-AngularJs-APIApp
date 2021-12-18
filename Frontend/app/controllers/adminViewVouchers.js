app.controller(
  "sellerViewNotices",
  function ($scope, $http, ajax, $location, $rootScope) {
  $rootScope.PageType = "seller";

    if ($rootScope.UserType != "Seller") {
      //$location.path("/");
      return;
    }
    ajax.get("https://localhost:44336/api/notices/all", success, error);
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
        ajax.get("https://localhost:44336/api/notices/all", success, error);
      } else {
        ajax.get(
          "https://localhost:44336/api/notices/search/" + $scope.searchText,
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
