function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotive();
function loadingAnimation() {
  var tl = gsap.timeline();

  gsap.from("#loader h1", {
    y: 100,
    opacity: 0,
    duration: 3.2,
    delay: 0.01,
    ease: "power4.inOut",
  });
  gsap.from("#page3 #about h3", {
    y: 100,
    opacity: 0,
    duration: 3.2,
    delay: 0.01,
    ease: "power4.inOut",
    ScrollTrigger:{
      trigger: "#page3 #about h3",
      scroller: "body"
    }
  });
  

  tl.from("#counter h2", {
    opacity: 0,
    delay: 0.3,
    onStart: function () {
      var h2 = document.querySelector("#counter h2");
      var count = 0;
      setInterval(function () {
        if (count < 100) {
          count++;
          h2.innerHTML = count;
        } else {
          h2.innerHTML = count;
        }
      }, 30);
    },
  });

  tl.to("#loader", {
    duration: 2,
    delay: 2.5,
    onComplete: function () {
      var loader = document.getElementById("loader");
      loader.style.display = "none";
    },
  });

  tl.from("#page1", {
    y: 1000,
    stagger: 1,
    duration: 0.4,
  });
  tl.from("nav h1", {
    opacity: 0,
    duration: 1, // Duration of 1 second
    ease: "power3.out",
  });
  tl.from("#nav", {
    opacity: 0,
  });

  tl.from("#hero", {
    opacity: 0,
  });
  tl.from("#hero h1", {
    y: 200,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  })
  tl.from("#hero h3",{
      y: 200,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.3"); // Starts the h3 animation 0.5 seconds before the h1 finishe//
}

loadingAnimation();




function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      top: dets.y + "px",
      left: dets.x + "px",
    });
  });
}

cursorAnimation();

