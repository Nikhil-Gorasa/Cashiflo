window.addEventListener('load', () => {
    const animate = (counter, duration, delay = 0) => {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut"
        });
    };

    // Initialize counter animations
    animate(document.querySelector(".counter-3"), 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    // Create timeline for synchronized animations
    const tl = gsap.timeline();

    // Initial animations
    tl.from(".loader-1", {
        width: 0,
        duration: 6,
        ease: "power2.inOut"
    })
    .from(".loader-2", {
        width: 0,
        duration: 2,
        ease: "power2.inOut"
    }, 1.9)
    .to(".digit", {
        top: "-150px",
        stagger: {
            amount: 0.25
        },
        duration: 1,
        ease: "power4.inOut"
    }, 6)
    .to(".loader", {
        background: "none",
        duration: 0.1
    }, 6)
    .to(".loader-1", {
        rotate: 90,
        y: -50,
        duration: 0.5
    }, 6)
    .to(".loader-2", {
        x: -75,
        y: 75,
        duration: 0.5
    }, "<")
    .to('.loader', {
        scale: 40,
        duration: 1,
        ease: "power2.inOut"
    }, 7)
    .to('.loader', {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        ease: "power2.inOut"
    }, 7)
    .to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut"
    }, 7.5)
    .to("h1", {
        y: -80,
        duration: 1.5,
        ease: "power4.inOut",
        stagger: {
            amount: 0.1
        }
    }, 7);
}); 