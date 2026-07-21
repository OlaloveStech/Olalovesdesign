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

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

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

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "🌙";

}

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