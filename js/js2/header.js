app.controller('HeaderController', function($scope,$timeout,$location,$rootScope) {
    $scope.years = [];
    for (let year = 2024; year >= 2004; year--) {
        $scope.years.push(year);
    }
    $scope.danhmucs = [
        { id: 'phim-dang-chieu', name: 'Phim đang chiếu' },
        { id: 'tv-shows', name: 'TV shows' },
        { id: 'phim-le', name: 'Phim lẻ' },
        { id: 'tv-shows', name: 'Phim bộ' }
    ];
    
    
    $rootScope.Thaydoimanglienket=function(){
        $rootScope.breadcrumbs=[] ;
        $location.path('/home');
      }
    
});
