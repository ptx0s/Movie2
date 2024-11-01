var app = angular.module("myapp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homectrl',
        })
        .when('/detail/:slug', {
            templateUrl: 'view/anime-details.html',
            controller: 'detailctrl',
        })
        .when('/watching/:slug', {
            templateUrl: 'view/anime-watching.html',
            controller: 'watchingctrl',
        })
        .when('/categories/:loai/:page/:page2', {
            templateUrl: 'view/categories.html',
            controller: 'categoriesctrl',
        })
        .when('/quocgias/:loai/:page/:page2', {
            templateUrl: 'view/categories.html',
            controller: 'quocgiasctrl',
        })
        .when('/namphathanhs/:loai/:page/:page2', {
            templateUrl: 'view/categories.html',
            controller: 'namphathanhsctrl',
        })
        .when('/danhmuc/:loai/:page/:page2', {
            templateUrl: 'view/categories.html',
            controller: 'danhmucsctrl',
        })
        .when('/moicapnhat/:loai/:page/:page2', {
            templateUrl: 'view/moicapnhat.html',
            controller: 'moicapnhatctrl',
        })
        .when('/seachkeword/:keyword', {
            templateUrl: 'view/searchkeyword.html',
            controller: 'seachkewordctrl',
        })
        .otherwise({
            redirectTo: '/home',
        });
});

  app.controller('homectrl', function($scope,$http,$rootScope,$timeout,$location) {
    $scope.phimAnime = [];
    $http.get('https://phim.nguonc.com/api/films/the-loai/hoat-hinh?page=1')
    .then(function(response) {
        if (response.data.status === "success") {
            $scope.phimAnime = response.data.items;
        }
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    }); 

    $scope.phimMoiCapNhat = []; 
    $http.get('https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=1')
    .then(function(response) {
        if (response.data.status === "success") {
            $scope.phimMoiCapNhat = response.data.items;
        }
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });
    $scope.phimDangChieu = []; 
    $http.get('https://phim.nguonc.com/api/films/danh-sach/phim-dang-chieu?page=1')
    .then(function(response) {
        if (response.data.status === "success") {
            $scope.phimDangChieu = response.data.items;
        }
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });


   

    $rootScope.scrollToTop();
    $rootScope.ChanggebushBreadcrumbs("Home",$location.url())

    
});
app.controller('detailctrl', function($scope,$http,$routeParams,$rootScope,$timeout,$location) {
  $scope.pmovieData={};
  $scope.slugid=$routeParams.slug;

  $http.get('https://phim.nguonc.com/api/film/'+$scope.slugid)
  .then(function(response) {
      if (response.data.status === "success") {
          $scope.pmovieData = response.data.movie;
          $rootScope.ChanggebushBreadcrumbs($scope.pmovieData.name,$location.url())
      }
  })
  .catch(function(error) {
      console.error('Error fetching data:', error);
  })
  
  $rootScope.scrollToTop();

});

