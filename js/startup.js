        function getJS(source){
            let scriptElement = document.createElement("script");
            if(source.length != undefined && source[1] != undefined){
                console.log(source[0]);
                setAttributes(scriptElement,{"src":source.splice(0,1),"onload":"getJS(['"+ source.join("','") + "'])"});
            } else{
                console.log(source);
                setAttributes(scriptElement,{"src":source,"onload":"showLoader(false)"});
            }
            document.body.appendChild(scriptElement);
        }
        getJS(["./config.js","https://code.jquery.com/jquery-3.1.1.min.js","./js/bone.io.js","./js/middleware.js","./js/template.js","./js/router.js"]);