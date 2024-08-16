import { lerp } from "./utlis.js";
import { createProject, createBlogpost } from "./project.js";

let main = document.querySelector("main");
let video = document.querySelector("video");
let videoSection = document.querySelector("#video");

createProject();
createBlogpost();

main.addEventListener("scroll", () => {
    videoAnimate();
});

const videoTextLeft = document.querySelector(".video-text-left");
const videoTextRight = document.querySelector(".video-text-right");

function videoAnimate() {
    let { bottom } = videoSection.getBoundingClientRect();
    let scale = 1 - (bottom - window.innerHeight) * 0.0005;
    scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
    video.style.transform = `scale(${scale})`;
    // console.log(bottom)

    let transText = bottom - window.innerHeight;
    transText = transText < 0 ? 0 : transText;
    videoTextLeft.style.transform = `translateX(${-transText}px)`;
    videoTextRight.style.transform = `translateX(${transText}px)`;
}

// Project

const projectSticky = document.querySelector(".project-sticky")
const projectSlider = document.querySelector(".project-slider")

let projectTargetX = 0;
let projectCurrentX = 0;

let percentage = {
    small: 700,
    medium: 300,
    large: 100,
};

let limit =
    window.innerWidth <= 600
        ? percentage.small
        : window.innerWidth <= 1100
            ? percentage.medium
            : percentage.large;

function setLimit() {
    limit = window.innerWidth <= 600
        ? percentage.small
        : window.innerWidth <= 1100
            ? percentage.medium
            : percentage.large;
}

window.addEventListener("resize", setLimit);

function animateProjects() {
    let offsetTop = projectSticky.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1);
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0 , 0)`;
}

// BlogPost Animation
let blogSection = document.getElementById("blog");
let blogPostDiv = [...document.querySelectorAll(".post-div")];


function scrollBlogPosts() {
    let blogSectionTop = blogSection.getBoundingClientRect().top;
    console.log("blogSectionTop", blogSectionTop)
    for (let i = 0; i < blogPostDiv.length; i++) {
        if (blogPostDiv[i].parentElement.getBoundingClientRect().top <= 1) {
            // +1 to account for the first BLOG title div

            let offset = (blogSectionTop + (window.innerHeight * (i + 1))) * .0005;
            offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
            // if( i == 1) console.log(offset)
            blogPostDiv[i].style.transform = `scale(${1 + offset})`;
        }
    }
}

// Circle Section
let circleSection = document.getElementById("circle-section");
let circle = document.querySelector(".circle");

function scrollCircle() {
    let { top } = circleSection.getBoundingClientRect();
    console.log("top", top);
    let scaleTop = Math.abs(top);
    console.log("scaleTop", scaleTop)
    let scale = (scaleTop / window.innerHeight);
    console.log("scale", scale)
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
    if (top <= 0) {
        circle.style.transform = ` translate(-50%,-50%) scale(${scale})`;
    } else {
        circle.style.transform = ` translate(-50%,-50%) scale(0)`;

    }
}

// Discover Section
let discoverSection = document.getElementById("discover");
let dicoverTextLeft = document.querySelector(".dicover-text-left");
let dicoverTextRight = document.querySelector(".dicover-text-right");

function scrollDiscover() {
    let { bottom } = discoverSection.getBoundingClientRect();
    console.log("scrollDiscoverBottom", bottom)
    let transTextD = bottom - window.innerHeight;
    console.log("scrollDiscovertransTextD", transTextD)
    transTextD = transTextD < 0 ? 0 : transTextD;

    dicoverTextLeft.style.transform = `translateX(${-transTextD}px)`;
    dicoverTextRight.style.transform = `translateX(${transTextD}px)`;
}


function animate() {
    animateProjects();
    requestAnimationFrame(animate);
}

main.addEventListener("scroll", () => {
    scrollBlogPosts();
    scrollCircle();
    scrollDiscover();
})

animate()
