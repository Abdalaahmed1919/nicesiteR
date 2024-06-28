// call elemnts
let contactushome = document.querySelector(".home .contactus");
let firstphome = document.querySelector(".firstphome");
let h1home = document.querySelector(".home h1");
let aboutsection = document.querySelector(".about");
let imagesabout = document.querySelectorAll(".about img");
let headingabout = document.querySelector(".about h3");
let phaabout = document.querySelector(".about p");
let featuredsection = document.querySelector(".featured");
let featurescards = document.querySelectorAll(".featured .row .card");
let templetssection = document.querySelector(".templets");
let templetscards = document.querySelectorAll(".templets .row .card");
let theyear = document.querySelector(".footer .bootomfooter .year span")
// call functions
window.onload = homepageanimatoin();
// to custmize animation a home page
function homepageanimatoin () {
    contactushome.style.cssText = "transform: translateX(0);"
    firstphome.style.cssText = "transform: translateX(0);"
    h1home.style.cssText = "transform: translate(0 , -50%);"
}

// to custmize animation a about page
window.onscroll = () => {
    if (this.scrollY >= aboutsection.offsetTop-300) {
        imagesabout.forEach((el) => {
            el.classList.add("active");
        })
        headingabout.style.cssText = "transform: translateX(0);"
        phaabout.style.cssText = "transform: translateY(0);"
    } 

    if (this.scrollY >= featuredsection.offsetTop-300) {
        featurescards.forEach((el) => {
            el.classList.add("active");
        })
    }  

    if (this.scrollY >= templetssection.offsetTop-400) {
        templetscards.forEach((el) => {
            el.classList.add("active");
        })
    }  
}   
// to handle the year 
let year = new Date ();
theyear.innerHTML = `${year.getFullYear()}`

