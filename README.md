# SpeedySkeleton.io

Built with [Bone.IO](http://bone.io/) and [Skeleton.css](http://getskeleton.com/), this is a flat-file CMS, much like [Grav](https://getgrav.org/) and [cms.js](https://cdmedia.github.io/cms.js/). I wanted this because I felt that cms.js didn't have enough documentation on how to expand the functionalities such as grouping posts by type, and Grav was a lot to take. I also want users to be able to easily apply themes found around the internet.

### Why Bone.IO?

Although Bone.IO is intended to work with Socket and hasn't seen a commit in 3 years, as of March 3rd, 2017, I really liked the way it would allow me to organize logic. I'm also working on a bigger project that uses Bone.IO.

### Why Skeleton.CSS?

It's basically the bare minimum to have a responsive website.

### How to Use?


Bone.IO provides a templating function

Return an element, don't append the element to the document.

### Utilities:

I have included a function called `setAttributes()` that takes two arguments, a document element and an object of attribute names and attribute values. `var luxbarCheckbox = document.createElement("input");
    setAttributes(luxbarCheckbox,{"type":"checkbox","id":"luxbar-checkbox"})
    document.body.append(luxbarCheckbox)`

will output  

    <input type="checkbox" id="luxbar-checkbox">

Additionally, `getJS(source)` can take a single string or array of strings and will sequentially load and append each source to the body. ( 0 -> end) I used this because bone.io requires jquery and will error out if jquery isn't loaded in time. If bone.io errors out, then so will the router,  template, and middleware scripts.  
    getJS(["https://code.jquery.com/jquery-3.1.1.min.js","./js/bone.io.js","./js/middleware.js","./js/template.js","./js/router.js"]);

after loading the last script, it will hide the loader BUT it doesn't automatically start the loader.
#### Template Example:

I have implemented [luxbar](https://github.com/balzss/luxbar) as an example
HardCoded: You can just stuff in the HTML
    '''
    var htmlData = '<header id="luxbar" class="luxbar-fixed"><input type="checkbox" id="luxbar-checkbox"/><div class="luxbar-menu luxbar-menu-right luxbar-menu-material-bluegrey"><ul class="luxbar-navigation">';
    htmlData = htmlData + '<li class="luxbar-header"><a href="#" class="luxbar-brand">'+ data.name + '</a><label class="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label></li>' 
    for(x in data.nav){
        htmlData = htmlData + '<li class="luxbar-item"><a href="\#' + data.nav[x] + '">' + data.nav[x] +  '</a></li>'
    }
    return(htmlData);
    '''
Pure JS:
    '''
    function navbarTemplate(data){
        var navElement = document.createElement("nav");
        setAttributes(navElement,{"class": data});
        /**Append children to navElement**/
        return navElement
    }
    '''
Using a templating language:

All you need is a callable function.


```c#
/**TODO**/
```

## Timeline

- actually serve Markdown files
- work with a config.json
- move to bower
- Move to node and create a script to minify everything. 
- create a GUI working with node
- Move to Meteor (?) for a desktop WYSIWYG editor
- Ability to read and analyze CSS files and Demo.html files to help guide implementing found themes.

