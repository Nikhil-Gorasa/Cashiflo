import { useEffect } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  useEffect(() => {
    const animate = (counter: Element, duration: number, delay = 0) => {
      const numHeight = (counter.querySelector(".num") as HTMLElement)?.clientHeight;
      const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut"
      });
    };

    // Initialize counter animations
    animate(document.querySelector(".counter-3")!, 5);
    animate(document.querySelector(".counter-2")!, 6);
    animate(document.querySelector(".counter-1")!, 2, 4);

    // Create timeline for synchronized animations
    const tl = gsap.timeline({
      onComplete: () => {
        // Force remove preloader elements
        const preloader = document.querySelector('.preloader-content');
        const loadingScreen = document.querySelector('.loading-screen');
        if (preloader) preloader.remove();
        if (loadingScreen) loadingScreen.remove();
        
        // Clean up any remaining preloader elements
        document.body.style.overflow = 'auto';
      }
    });

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
    }, 7.5);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

        .preloader-content {
          height: 100vh;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          pointer-events: none;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          font-family: 'Poppins', sans-serif;
          font-size: 120px;
          font-weight: 700;
          color: white;
          text-align: center;
          line-height: 1;
          opacity: 0;
        }

        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000;
          color: #fff;
          pointer-events: none;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .counter {
          height: 100px;
          font-size: 90px;
          font-weight: normal;
          display: flex;
          line-height: 102px;
          clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);
        }

        .digit {
          position: relative;
          top: -15px;
        }

        .num {
          position: relative;
        }

        .num1offset1 {
          right: -25px;
        }

        .num1offset2 {
          right: -10px;
        }

        .loader {
          width: 300px;
          height: 50px;
          background: #444;
          display: flex;
        }

        .bar {
          background: #fff;
          height: 100%;
        }

        .loader-1 {
          width: 200px;
        }

        .loader-2 {
          width: 100px;
        }
      `}</style>

      <div className="preloader-content">
        <div className="logo">CF</div>
      </div>

      <div className="loading-screen">
        <div className="content-wrapper">
          <div className="counter">
            <div className="counter-1 digit">
              <div className="num">0</div>
              <div className="num num1offset1">1</div>
            </div>
            <div className="counter-2 digit">
              <div className="num">0</div>
              <div className="num num1offset2">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
            <div className="counter-3 digit">
              <div className="num">0</div>
              <div className="num">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
              <div className="num">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
          </div>
          <div className="loader">
            <div className="loader-1 bar"></div>
            <div className="loader-2 bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader; 