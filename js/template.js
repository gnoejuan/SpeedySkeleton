function navbarTemplate(data){
    var htmlData = '<header id="luxbar" class="luxbar-fixed"><input type="checkbox" id="luxbar-checkbox"/><div class="luxbar-menu luxbar-menu-right luxbar-menu-material-bluegrey"><ul class="luxbar-navigation">';
    htmlData = htmlData + '<li class="luxbar-header"><a href="#" class="luxbar-brand">'+ data.name + '</a><label class="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label></li>' 
    for(x in data.nav){
        if(typeof data.nav[x] === "object"){
            let keys = Object.keys((data.nav[x]));
            for(y in keys){
                htmlData = htmlData + '<li class="luxbar-item"><a href="\#' + keys[y]+ '">' + data.nav[x][keys[y]] + '</a></li>'
            }
        } else {
            htmlData = htmlData + '<li class="luxbar-item"><a href="\#' + data.nav[x].toLowerCase() + '">' + data.nav[x] +  '</a></li>'
        }
    }
    return(htmlData);
}
bone.set('templates',{
    navbar: function(data){
        return navbarTemplate(data);
    }
});
let links = configuration.pages.concat(configuration.postTypes);
bone.mount('#top','navbar',{data:{"nav": links,
    name:configuration.siteName}
});