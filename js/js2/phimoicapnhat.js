app.controller('moicapnhatctrl', function($scope,$http,$routeParams,$rootScope,$location) {
    $scope.phims = {};
    $scope.danhmuc=$routeParams.loai;
    $scope.trang=parseInt($routeParams.page, 10)
    $scope.pages=[];
    $scope.pagedautien=$routeParams.page2;
    $http.get(' https://phim.nguonc.com/api/films/'+$scope.danhmuc+'?page='+ $scope.trang)
    .then(function(response) {
        if (response.data.status === "success") {
            $scope.phims = response.data;
            $rootScope.ChanggebushBreadcrumbs('Mới cập nhật',$location.url())
            if($scope.pagedautien==$scope.trang){
              if($scope.trang<=5){
                  for (let i = 1; i <= 5; i++) {
                      if($scope.pages.length<=5 && i>0){
                          $scope.pages.push(i);
                      }
                    }     
              }else{
                  for (let i = parseInt($scope.trang, 10)-4; i <= parseInt($scope.trang, 10); i++) {
                      if($scope.pages.length<=5 && i>0){
                          $scope.pages.push(i);
                      }else{
                          break;
                      }
                    }
              }
  
            }else{
  
            if(parseInt($scope.trang, 10)+4 < $scope.phims.paginate.total_page){
              for (let i = parseInt($scope.trang, 10); i <= parseInt($scope.trang, 10)+4; i++) {
                  if($scope.pages.length<=5){
                      $scope.pages.push(i);
                  }else{
                      break;
                  }
                }
            }else{
              for (let i = $scope.phims.paginate.total_page-4; i <= $scope.phims.paginate.total_page; i++) {
                  if($scope.pages.length<=5 && i>0){
                      $scope.pages.push(i);
                  }
                } 
            }
          }
            $rootScope.scrollToTop();
        }
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    }); 
     
    
    });