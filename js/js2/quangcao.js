app.controller('MyController', function($scope,$timeout) {
    $timeout(function() {
        // Thực thi mã JavaScript khi nội dung đã được chèn
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
            atOptions = {
                'key' : '167785737016687a43e54efbb873bae7',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        `;
        document.body.appendChild(script);

        var adScript = document.createElement('script');
        adScript.src = "//www.topcpmcreativeformat.com/167785737016687a43e54efbb873bae7/invoke.js";
        document.body.appendChild(adScript);
    }, 0);
});

