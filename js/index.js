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

links[0].textContent= "Services"
links[0].href = `#`;
//product
links[1].textContent = "Product";
links[1].href = `#`;
//vision 
links[2].textContent = "Vision";
links[2].href = `#`;
//Features 
links[3].textContent = "Features";
links[3].href = `#`;
//About
links[4].textContent = "About";
links[4].href = `#`;
//Contact
links[5].textContent = "Contact";
links[5].href = `#`;

const DomIsAwesome = document.querySelector("h1")
DomIsAwesome.textContent = "DOM is awesome";

const button = document.querySelector("button")
button.textContent = "Get Started";

const middleImage = document.getElementById("middle-img")
middleImage.setAttribute('src', "img/mid-page-accent.jpg")

const h4Stuff = document.querySelectorAll("h4")
const pstuff = document.querySelectorAll("p")
h4Stuff[0].textContent= "Feature"
h4Stuff[1].textContent= "About"
h4Stuff[2].textContent= "Services"
h4Stuff[3].textContent= "Product"
h4Stuff[4].textContent= "Vision"

h4Stuff[0].nextElementSibling.textContent= "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4Stuff[1].nextElementSibling.textContent= 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
h4Stuff[2].nextElementSibling.textContent= "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4Stuff[3].nextElementSibling.textContent=  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
h4Stuff[4].nextElementSibling.textContent=  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

h4Stuff[5].textContent= "Contact"

h4Stuff[5].nextElementSibling.textContent= "123 Way 456 Street Somewhere, USA 1 (888) 888-8888 sales@greatidea.io"
document.querySelector(footer).nextElementSibling.textContent= "Copyright Great Idea! 2018"