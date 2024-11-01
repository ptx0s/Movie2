app.controller('searchController', function($scope,$http,$routeParams,$rootScope, $location) {
  // Hàm để đóng mô hình tìm kiếm
  $scope.closeSearchModel = function() {
    $('.search-model').fadeOut(400, function () {
        $('#search-input').val(''); // Đặt giá trị input về rỗng
    });
};  
  

// tìm kiếm phim
$scope.searchQuery = ''; // Khởi tạo biến
$scope.performSearch = function() {
    // Thực hiện hành động tìm kiếm
    $scope.closeSearchModel();
    console.log('Searching for:', $scope.searchQuery);
    $location.path('/seachkeword/'+$scope.searchQuery);
 };
  
});

app.controller('seachkewordctrl', function($scope,$http,$routeParams,$rootScope, $location) {
    $scope.phimkeyword = {};
    $scope.key=$routeParams.keyword;
    $http.get('https://phim.nguonc.com/api/films/search?keyword='+$scope.key)
    .then(function(response) {
        if (response.data.status === "success") {
            $scope.phimkeyword= response.data;
            $rootScope.ChanggebushBreadcrumbs($scope.key,$location.url())
        }
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    }); 

    
  });
    