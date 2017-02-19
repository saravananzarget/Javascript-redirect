document.body.onload = function() {
    var objects = {
        "http://saravanancm.local:8080/sample/index.html" : { 
            "toUrl": "http://saravanancm.local:8080/sample/about.html",
            "percentage": 50
        },
        "http://saravanancm.local:8080/sample/contact.html": {
            "toUrl": "http://saravanancm.local:8080/sample/blog.html",
            "percentage": 70
        },
        "http://saravanancm.local:8080/sample/product.html" : {
            "toUrl" : "http://saravanancm.local:8080/sample/singlepost.html",
            "percentage": 40
        },
    };
    function genRand() {
        return Math.floor((Math.random() * 100) + 1);
    }
    // function setCookie(url) {
    //     document.cookie = "url=" + url;
    // }
    // function checkCookie(){
    // var s= document.cookie.indexOf('url=');
    // return s;
    // }
    function check() {
        var currentUrl = window.location.href;
        var metaData = objects[currentUrl];
        if(metaData != undefined){
            var randomNo = genRand();
            console.log(currentUrl,randomNo);
            var storedUrl = localStorage.getItem(currentUrl);
            if(storedUrl != null){
                if(currentUrl != storedUrl)
                    window.location.href = storedUrl;
            }
            else{
                var limit = metaData.percentage;
                if(randomNo >= limit){
                    localStorage.setItem(currentUrl, metaData.toUrl);
                    window.location.href = metaData.toUrl;
                }   
                else{
                    localStorage.setItem(currentUrl, currentUrl);
                }             
            }
        }


        // debugger;
        // //localStorage.setItem("url",currentUrl);
        //     console.log(currentUrl,randomNo);
        // for (var i = 0; i < objects.length; i++) {
        //     //if(!url===objects[i].fromUrl){
        //         var limit = parseInt(objects[i].percentage);
        //         if (objects[i].fromUrl === currentUrl && randomNo > limit) {
        //             localStorage.setItem("url",currentUrl);
        //             for(var x in window.localStorage){
        //             var val = localStorage.getItem(x); 
        //             }
        //             if(val === currentUrl){
        //                 window.location.href = objects[i].toUrl; 
        //                 localStorage.setItem("toUrl",objects[i].toUrl);
        //             }
        //             else
        //             {
        //                console.log("cookies enabled");
        //             }
        //         }
        //     //}
        // }
    }
    check();
};




//Printing screen height and width
 var windowWidth = window.innerWidth;
 var windowHeight = window.innerHeight;
 var scrnWidth = window.screen.width;
 var scrnHeight = window.screen.height;
 console.log("Window width = "+windowWidth+ " Window height = "+windowHeight+ " Screen height= "+scrnHeight+" Screen width= "+scrnWidth );