import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1,
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "inline-block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
console.log("working");


var circle = document.querySelector(".circle");
var frame = document.querySelector("#cursor_big ");
window.addEventListener('mousemove',function(dets){
  // console.log(dets.clientX,dets.clientY);
  circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
})
frame.addEventListener('mousemove',function(dets){
  gsap.to(circle,{
    scale:4,
    
  })
})
frame.addEventListener('mouseleave',function(dets){
  gsap.to(circle,{
    scale:1
  })
})

