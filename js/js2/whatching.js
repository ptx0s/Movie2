app.controller('watchingctrl', function($scope,$http,$routeParams,$sce,$rootScope,$location) {
    $scope.pmovieData={};
    $scope.slugid=$routeParams.slug;
    $scope.namephim;
    $scope.tapphim=1;
    $http.get('https://phim.nguonc.com/api/film/'+$scope.slugid)
    .then(function(response) {
        if (response.data.status === "success") {
            $scope.pmovieData = response.data.movie;
            $scope.namephim=$scope.pmovieData.name;
            $scope.tongsotap=$scope.pmovieData.episodes[0].items.length;
            $scope.tapphim=$scope.pmovieData.episodes[0].items[0].name;
            $rootScope.ChanggebushBreadcrumbs($scope.namephim+' '+'Tập'+' '+$scope.pmovieData.episodes[0].items[0].name,$location.url())
            $scope.iframeSrc =$sce.trustAsResourceUrl($scope.pmovieData.episodes[0].items[0].embed);
            $scope.scrollToTop();
        }
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });
       // Hàm để thay đổi iframeSrc
       $scope.changeIframeSrc = function(episode) {
        $rootScope.ChanggebushBreadcrumbs($scope.namephim+' '+'Tập'+' '+episode.name,$location.url())
        $scope.iframeSrc =$sce.trustAsResourceUrl(episode.embed);
        $scope.tapphim=episode.name;
        $rootScope.scrollToTop();
           
    };
       // Tập trước
       $scope.XemTapTruoc = function(tap) { 
        if($scope.tongsotap>1 ){
            $scope.dulieutapphim=$scope.pmovieData.episodes[0].items[tap-2];
            $scope.iframeSrc=$sce.trustAsResourceUrl($scope.dulieutapphim.embed);
            $scope.tapphim=$scope.dulieutapphim.name;
            $rootScope.ChanggebushBreadcrumbs($scope.namephim+' '+'Tập'+' '+$scope.tapphim,$location.url())
        }else{
            $scope.dulieutapphim=$scope.pmovieData.episodes[0].items[0];
            $scope.iframeSrc=$sce.trustAsResourceUrl($scope.dulieutapphim.embed);
            $scope.tapphim=$scope.dulieutapphim.name;
            $rootScope.ChanggebushBreadcrumbs($scope.namephim+' '+'Tập'+' '+$scope.tapphim,$location.url())
        }
        $rootScope.scrollToTop();
           
    }; 
    $scope.XemTapTiepTheo = function(tap) { 
       if($scope.tongsotap>1 && $scope.tapphim<$scope.tongsotap){
        $scope.dulieutapphim=$scope.pmovieData.episodes[0].items[tap];
        $scope.iframeSrc=$sce.trustAsResourceUrl($scope.dulieutapphim.embed);
        $scope.tapphim=$scope.dulieutapphim.name;
        $rootScope.ChanggebushBreadcrumbs($scope.namephim+' '+'Tập'+' '+$scope.tapphim,$location.url())
       }else{
        $scope.dulieutapphim=$scope.pmovieData.episodes[0].items[0];
        $scope.iframeSrc=$sce.trustAsResourceUrl($scope.dulieutapphim.embed);
        $scope.tapphim=$scope.dulieutapphim.name;
        $rootScope.ChanggebushBreadcrumbs($scope.namephim+' '+'Tập'+' '+$scope.tapphim,$location.url())
       }
       $rootScope.scrollToTop();
    }   
});