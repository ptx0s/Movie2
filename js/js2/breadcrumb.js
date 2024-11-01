app.controller('BreadcrumbController', function($scope,$http,$routeParams,$rootScope,$timeout,$location) {
    // code xử lý đường đãn ví dụ home>detail>watch

    $rootScope.DeleBreadcrumb=function(vitri){
    if(vitri===$rootScope.breadcrumbs.length-1){
      return;
    }
    $rootScope.breadcrumbs.splice(vitri,$rootScope.breadcrumbs.length - vitri);
  }
  });
  