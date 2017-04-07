var configuration = {
    "mode": "Server",
    "siteName": "Musing",
    "GitHubUserName": "Broster",
    "repository": "https://github.com/gnoejuan/SpeedySkeleton",
    "postTypes": {
        /*folder : Navigation Display*/
        "blogs": "Posts",
        "twitch": "Twitch Project",
        "cmsProject": "Spooky Skeleton",
        "coffeeshop": "CoffeeShop.io"
    },
    /**
     * Home and Index ("") are assumed
     */
    "pages": ["Home", "Info"],
    /**
     * External links won't be included by default. 
     */
    "external_links":
    {
        "github": "https://github.com/gnoejuan/SpeedySkeleton"
        ,
        "twitter": "https://twitter.com/SageOfNathan"
    },
    "navigation": [
        {
            "header": {
                "id": "luxbar",
                "class": "luxbar-fixed"
            }
        },
        {
            "input": {
                "type": "checkbox",
                "id": "luxbar-checkbox"
            }
        },
        {
            "div": {
                "class": "luxbar-menu luxbar-menu-right luxbar-menu-material-bluegrey"
            }
        },
        {
            "ul": {
                "class": "luxbar-navigation"
            }
        },
    ],
    /**
     * An <a href will automatically be added.
     */
    "navLinkElements": [
        {
            "li": {
                "class": "luxbar-item"
            }
        }
    ],
    /**
     * "branding" : ["true/false","string/imagePath",brandingElementClass]  //If you want to use the name, just use this.siteName 
     */
    "branding": ["true", this.siteName, "luxbar-brand"],
    /**
     * if branding is true, this will add the branding elements to the inner most element of the navigation elements.
     * It will also be assumed that branding and navigation links are attached to the same element
     */
    "brandingElements": [
        {
            "li": {
                "class": "luxbar-header",
                "href": "#",
                "id": "branding_helper"
            }
        }
    ],
    "hamburger": [
        { "parent": "branding_helper" },
        {
            "label": {
                "class": "luxbar-hamburger luxbar-hamburger-doublespin",
                "id": "luxbar-hamburger",
                "for": "luxbar-checkbox"
            }
        },
        {
            "span": {
                "": ""
            }
        }
    ]
}