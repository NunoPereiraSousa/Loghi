gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.to(".presentation__title .line div", {
  y: "5%",
  stagger: 0.25
})
  .to(
    ".presentation__banner",
    {
      opacity: 1
    },
    "-=0.4"
  )
  .to(".presentation__svg", {
    opacity: 1
  })
  .to(
    ".presentation__email .line div",
    {
      y: "10%"
    },
    "-=0.4"
  );

// gsap.to(".home_subtitle1 .line div", {
//   y: "15%",
//   stagger: 0.25,
//   scrollTrigger: {
//     trigger: ".presentation__email",
//     start: "top center",
//     markers: true
//   }
// });

// gsap.to(".about__paragraph .line div", {
//   y: "15%",
//   stagger: 0.25,
//   scrollTrigger: {
//     trigger: ".about",
//     start: "top center",
//     markers: true
//   }
// });

// gsap.to(".home_subtitle2 .line div", {
//   y: "15%",
//   stagger: 0.25,
//   scrollTrigger: {
//     trigger: ".services",
//     start: "-10% center",
//     markers: true
//   }
// });

// let servicesArr = document.querySelectorAll(".services__grid__card");

// gsap.to(`.services__grid__card__title .line div`, {
//   y: "15%",
//   stagger: 0.25,
//   scrollTrigger: {
//     trigger: ".services",
//     start: "top center",
//     markers: true
//   }
// });
