const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to("path", { y: "0%", duration: 0, stagger: 0.2 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.3 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".blog-post-aria", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



window.addEventListener("scroll", function(e) {
    var clock = document.querySelector(".test");
    clock.classList.toggle("sticky", window.scrollY > 700)
})