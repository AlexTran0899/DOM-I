const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("nav a")

//sevices

links[0].textContent= siteContent['nav']["nav-item-1"]
//product
links[1].textContent = siteContent['nav']["nav-item-2"]
//vision 
links[2].textContent = siteContent['nav']["nav-item-3"]
//Features 
links[3].textContent = siteContent['nav']["nav-item-4"]
//About
links[4].textContent = siteContent['nav']["nav-item-5"]
//Contact
links[5].textContent = siteContent['nav']["nav-item-6"]

const DomIsAwesome = document.querySelector("h1")
DomIsAwesome.innerHTML =  siteContent["cta"]["h1"].split(" ").join("<br>");
// DomIsAwesome.textContent = "dom"
// const ctatx= document.querySelector(".cta-text");
// const crt1 = document.createElement("h1")
// ctatx.appendChild(crt1);
// crt1.textContent = "isawesome"




const button = document.querySelector("button")
button.textContent = "Get Started";

const topImage = document.getElementById("cta-img")
topImage.setAttribute('src', siteContent["cta"]["img-src"])

const middleImage = document.getElementById("middle-img")
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const h4Stuff = document.querySelectorAll("h4")
const pstuff = document.querySelectorAll("p")
h4Stuff[0].textContent= siteContent['main-content']["features-h4"]
h4Stuff[1].textContent= siteContent['main-content']["about-h4"]
h4Stuff[2].textContent= siteContent['main-content']["services-h4"]
h4Stuff[3].textContent= siteContent['main-content']["product-h4"]
h4Stuff[4].textContent= siteContent['main-content']["vision-h4"]

h4Stuff[0].nextElementSibling.textContent= siteContent['main-content']['features-content']
h4Stuff[1].nextElementSibling.textContent= siteContent['main-content']['about-content']
h4Stuff[2].nextElementSibling.textContent= siteContent['main-content']['services-content']
h4Stuff[3].nextElementSibling.textContent= siteContent['main-content']['product-content']
h4Stuff[4].nextElementSibling.textContent= siteContent['main-content']['vision-content']

h4Stuff[5].textContent= "Contact"

h4Stuff[5].nextElementSibling.textContent= "123 Way 456 Street Somewhere, USA 1 (888) 888-8888 sales@greatidea.io"
document.querySelector(footer).nextElementSibling.textContent= "Copyright Great Idea! 2018"