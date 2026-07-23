/*=========================================
INITIALIZE AOS
=========================================*/

AOS.init({
    duration: 800,
    once: true
});

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        onComplete: () => {
            loader.style.display = "none";
        }
    });

});

/*=========================================
CURSOR GLOW
=========================================*/
/* =========================================
CUSTOM CURSOR
========================================= */

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
const glow = document.querySelector('.cursor-glow');

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

// Track mouse
window.addEventListener('mousemove', (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    // Glow follows too
    glow.style.left = mouseX + 'px';
    glow.style.top = mouseY + 'px';

});

// Smooth trailing ring
function animateRing(){

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animateRing);
}

animateRing();

/* =========================================
HOVER INTERACTION
========================================= */

const hoverTargets = document.querySelectorAll(
    'a, button, .project-card, .service-card'
);

hoverTargets.forEach(el => {

    el.addEventListener('mouseenter', () => {
        ring.classList.add('hover');
    });

    el.addEventListener('mouseleave', () => {
        ring.classList.remove('hover');
    });

});
/*=========================================
MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");

    });

});

/*=========================================
THEME TOGGLE
=========================================*/

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");
        themeBtn.innerHTML = "🌙";

    }else{

        localStorage.setItem("theme","dark");
        themeBtn.innerHTML = "☀️";

    }

});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight -
                   document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.padding = "0";
        header.style.background = "rgba(8,8,8,.88)";
        header.style.backdropFilter = "blur(20px)";

    }else{

        header.style.background = "rgba(10,10,10,.45)";

    }

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
FAQ
=========================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button=item.querySelector(".faq-question");

    button.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

/*=========================================
GSAP HERO
=========================================*/

const tl=gsap.timeline();

tl.from(".hero-tag",{

    y:40,
    opacity:0,
    duration:.8

})

.from(".hero-left h1",{

    y:60,
    opacity:0,
    duration:1

},"-=.4")

.from(".hero-description",{

    y:30,
    opacity:0,
    duration:.8

},"-=.5")

.from(".hero-buttons",{

    y:20,
    opacity:0,
    duration:.8

},"-=.4")

.from(".hero-stats div",{

    y:40,
    opacity:0,
    duration:.5,
    stagger:.15

},"-=.3")

.from(".hero-image-card",{

    scale:.8,
    opacity:0,
    duration:1

},"-=1");

/*=========================================
GSAP SCROLL ANIMATIONS
=========================================*/

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        },

        opacity:0,

        y:60,

        duration:1

    });

});

/*=========================================
FLOATING CARDS
=========================================*/

gsap.to(".card-one",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:2

});

gsap.to(".card-two",{

    y:20,

    repeat:-1,

    yoyo:true,

    duration:2.5

});

gsap.to(".card-three",{

    y:-12,

    repeat:-1,

    yoyo:true,

    duration:2.2

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
const testimonialSwiper = new Swiper(".testimonialSwiper",{

    loop:true,

    grabCursor:true,

    centeredSlides:true,

    spaceBetween:30,

    autoplay:{

        delay:4500,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    breakpoints:{

        768:{

            slidesPerView:1,

        },

        1024:{

            slidesPerView:1,

        }

    }

});
/*=========================================
PORTFOLIO DATA
=========================================*/

const collections = {

    branding: [

        {
            image: "images/branding/prime.jpg",
            title: "Prime Essentials",
            category: "Brand Identity",
            description: "A complete branding system developed for Prime Essentials including logo design, packaging, stationery, mockups and digital assets.",
            client: "Prime Essentials",
            services: "Logo Design, Brand Identity, Packaging",
            software: "Illustrator • Photoshop"
        },

        {
            image: "images/branding/luxury.jpg",
            title: "Luxury Brand",
            category: "Brand Identity",
            description: "Minimal luxury branding focused on elegance and premium positioning.",
            client: "Confidential",
            services: "Brand Identity",
            software: "Illustrator"
        }

    ],

    social: [

        {
            image:"images/social/social1.jpg",
            title:"Instagram Campaign",
            category:"Social Media",
            description:"Promotional campaign for product awareness.",
            client:"XYZ",
            services:"Social Media Design",
            software:"Photoshop"
        }

    ],

    flyers:[

    ],

    sports:[

    ],

    music:[

    ],

    thumbnails:[

    ]

};

/*=========================================
ELEMENTS
=========================================*/

const collectionCards = document.querySelectorAll(".collection-card");

const galleryModal = document.querySelector(".gallery-modal");

const projectModal = document.querySelector(".project-modal");

const galleryGrid = document.getElementById("galleryGrid");

const galleryTitle = document.getElementById("galleryTitle");

const galleryCount = document.getElementById("galleryCount");

const closeGallery = document.querySelector(".close-gallery");

const closeProject = document.querySelector(".close-project");

const projectImage = document.getElementById("projectImage");

const projectTitle = document.getElementById("projectTitle");

const projectCategory = document.getElementById("projectCategory");

const projectDescription = document.getElementById("projectDescription");

const projectClient = document.getElementById("projectClient");

const projectServices = document.getElementById("projectServices");

const projectSoftware = document.getElementById("projectSoftware");

const prevBtn = document.getElementById("prevProject");

const nextBtn = document.getElementById("nextProject");

/*=========================================
STATE
=========================================*/

let currentCollection = [];

let currentIndex = 0;

/*=========================================
OPEN COLLECTION
=========================================*/

collectionCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const category = card.dataset.collection;

        currentCollection = collections[category];

        galleryTitle.textContent =
            card.querySelector("h3").textContent;

        galleryCount.textContent =
            `${currentCollection.length} Projects`;

        galleryGrid.innerHTML = "";

        currentCollection.forEach((project,index)=>{

            const img = document.createElement("img");

            img.src = project.image;

            img.alt = project.title;

            img.dataset.index = index;

            img.addEventListener("click",()=>{

                openProject(index);

            });

            galleryGrid.appendChild(img);

        });

        galleryModal.classList.add("active");

        document.body.classList.add("modal-open");
    });

});

/*=========================================
OPEN PROJECT
=========================================*/

function openProject(index){

    currentIndex = index;

    const project = currentCollection[index];

    projectImage.src = project.image;

    projectTitle.textContent = project.title;

    projectCategory.textContent = project.category;

    projectDescription.textContent = project.description;

    projectClient.textContent = project.client;

    projectServices.textContent = project.services;

    projectSoftware.textContent = project.software;

    projectModal.classList.add("active");

}

/*=========================================
NEXT
=========================================*/

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=currentCollection.length){

        currentIndex=0;

    }

    openProject(currentIndex);

});

/*=========================================
PREVIOUS
=========================================*/

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=currentCollection.length-1;

    }

    openProject(currentIndex);

});

/*=========================================
CLOSE
=========================================*/

closeGallery.addEventListener("click",()=>{

    galleryModal.classList.remove("active");

    document.body.style.overflow = "";

});

closeProject.addEventListener("click",()=>{

    projectModal.classList.remove("active");

});

/*=========================================
ESC KEY
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        galleryModal.classList.remove("active");

        projectModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});

/*=========================================
CLICK OUTSIDE TO CLOSE
=========================================*/

galleryModal.addEventListener("click",(e)=>{

    if(e.target===galleryModal){

        galleryModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});

projectModal.addEventListener("click",(e)=>{

    if(e.target===projectModal){

        projectModal.classList.remove("active");

    }

});