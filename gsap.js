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

// section 3 stagger
gsap.timeline({
  scrollTrigger: {
    trigger: [".section3_content"],
    scroller: "body",
    start: "top 80%",
    end: "bottom 100%",
    markers:true,
    scrub: 1,
  },
})
.from(".section3_heading", {
  y: -20,
  opacity: 0,
  duration: 1,
})

gsap.from(".boxes", {
  scrollTrigger: {
    trigger: ".boxes",
    scroll: "body",
    start: "top 70%",
    end: "bottom 50%",
    markers: true,
    scrub: 1,
  },
y: -30,
  opacity: 0,
  stagger:1
});

// section2 aimation 

gsap.timeline({
  scrollTrigger: {
    trigger: [".section2_content"],
    scroller: "body",
    start: "top 80%",
    end: "bottom 100%",
    markers:true,
    scrub: 1,
  },
})
.from("..cursor_big", {
  y: -20,
  opacity: 0,
  duration: 0.2,
})
.from(".section2_content p ", {
  y: -30,
  opacity: 0,
  duration: 1.9,
  delay:"2"
})
.from(".section_row span", {
  y: -50,
  opacity: 0,
  duration: 1,
  delay: "5",
});

// 

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function() {
  ScrollTrigger.create({
    trigger: ".start",
    start: "top top",
    endTrigger: ".end",
    end: "bottom bottom",
    markers: true,
  });
}); 

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh()