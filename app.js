  window.addEventListener("scroll", function () {
    document.querySelectorAll(".navbar").forEach(function (nav) {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  });

   gsap.to("#circleRotate", {
    rotation: 360,
    duration: 5,
    repeat: -1,   // infinite
    ease: "linear"
  });