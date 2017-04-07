        bone.router({
            routes: {
                /*url : function*/
                "": "index",
                "home": "home",
                "info": "about"
            },
            middleware:[
                middleware.scrollTop
            ],
            index: function () {
                console.log("this is index");
            },
            home: function () {
                console.log("home");
            },
            about: function () {
                console.log("this is info");
            }
        });
        bone.router.start(/*{pushState:true}*/);