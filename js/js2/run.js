app.run(function($rootScope,$window) {
    $rootScope.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hiệu ứng cuộn mượt mà
        });
    }; 
    $rootScope.breadcrumbs=[]   // đường dẫn
    $rootScope.ChanggebushBreadcrumbs=function(name,path){
        var newBreadcrumbItem = {
            title: name,
            url: path.replace(/^\//, '#!/')  // Thêm '#!' vào đầu định dạng 
        };
        // Kiểm tra nếu mảng breadcrumbs không rỗng
         if ($rootScope.breadcrumbs.length > 0) {
              var lastBreadcrumb = $rootScope.breadcrumbs[$rootScope.breadcrumbs.length - 1];
             // So sánh URL của phần tử cuối cùng với newBreadcrumbItem
               if (lastBreadcrumb.url.includes('#!/watching')&& lastBreadcrumb.title.includes('Tập')) {
                $rootScope.breadcrumbs[$rootScope.breadcrumbs.length-1]=newBreadcrumbItem;
                
               }else if(lastBreadcrumb.url === newBreadcrumbItem.url){
                return;
               }
               for(let i=0;i< $rootScope.breadcrumbs.length;i++){
                if($rootScope.breadcrumbs[i].title===newBreadcrumbItem.title){
                    $rootScope.breadcrumbs[i]=newBreadcrumbItem;
                    return;
                }
               } 
               
            $rootScope.breadcrumbs.push(newBreadcrumbItem);

            } else{
                $rootScope.breadcrumbs.push(newBreadcrumbItem);
            }
            
          }


});