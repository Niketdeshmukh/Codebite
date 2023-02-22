var circle = document.querySelector(".circle");
window.addEventListener("mouseover",function(dets){
  // gsap.to(circle,{
  //   x:dets.clientX,
  //   y:dets.clientY,
  //   duration:.1,
  //   ease:Expo
  // })
})

var t1 = gsap.timeline();

t1.from(".logo", {
  opacity: 0,
  scale: 1.3,
  duration: 0.5
})
  .from(
    ".handyy",
    {
      opacity: 0,
      stagger: 0.1,
      y: -15,
    //   delay:.2,
    },
    "niket"
  )
  .from(
    ".headline",
    {
      opacity: 0,
      stagger: 0.1,
      y: -10,
      delay:.4
    },
    "niket"
  )
  .from(".headline2-container", {
    opacity: 0,
    y: 20,
  })
  .from(".headline2 ", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
  .from(".line ", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
  .from(".headline2 hr ", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
  .from(".headline-para", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
  .from(".explore-container", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
  .from(".mandala", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
//   .from(".background-headline", {
//     opacity: 0,
//     y: 20,
//     duration: 0.2,
//     delay:.3
//   })
  .from(".text .text__four", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  })
  .from(" .button__resume", {
    opacity: 0,
    y: 20,
    duration: 0.2,
  });

  //HANDICRAFT ANIMATION
const myText = new SplitType('.background-headline')

gsap.to('.char',{
    opacity:1,
    y:0,
    stagger:0.05,
    delay:.1,
    duration:.1
})


