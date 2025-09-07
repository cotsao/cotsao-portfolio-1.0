import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";

export function useAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const fadeInUp = (selector, options = {}) => {
    return gsap.to(selector, {
      opacity: 1,
      y: 0,
      duration: options.duration || 1,
      delay: options.delay || 0,
      ease: options.ease || "easeInOut",
      stagger: options.stagger || 0,
      ...options
    });
  };

  const fadeInUpWithScrollTrigger = (selector, trigger, options = {}) => {
    return gsap.to(selector, {
      scrollTrigger: trigger,
      opacity: 1,
      y: 0,
      duration: options.duration || 1,
      ease: options.ease || "easeInOut",
      stagger: options.stagger || 0,
      ...options
    });
  };

  const fadeIn = (selector, options = {}) => {
    return gsap.to(selector, {
      opacity: 1,
      duration: options.duration || 1,
      delay: options.delay || 0,
      ease: options.ease || "easeInOut",
      ...options
    });
  };

  const cameraTransition = (camera, positions, options = {}) => {
    const timeline = gsap.timeline();
    
    if (positions.z !== undefined) {
      timeline.to(camera.position, {
        z: positions.z,
        ease: options.ease || "power3.inOut",
        duration: options.duration || 1.5
      });
    }
    
    if (positions.x !== undefined) {
      timeline.to(camera.rotation, {
        x: positions.x,
        ease: options.ease || "power3.inOut",
        duration: options.duration || 1.5
      }, "<");
    }
    
    if (positions.y !== undefined) {
      timeline.to(camera.position, {
        y: positions.y,
        ease: options.yEase || "power3.in",
        duration: options.yDuration || 1.5,
        delay: options.yDelay || 1.5,
        onComplete: options.onComplete
      });
    }
    
    return timeline;
  };

  const setupNavAnimation = () => {
    const showAnim = gsap
      .from("#nav-bar", {
        yPercent: -200,
        paused: true,
        duration: 0.2
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: self => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });
  };

  const landingPageAnimations = () => {
    fadeInUp("#name", {
      duration: 2,
      delay: 1,
      ease: "expo"
    });

    fadeInUp("#titles", {
      duration: 2,
      delay: 1.5,
      ease: "expo"
    });

    fadeInUp("#button", {
      duration: 2,
      delay: 1.8,
      ease: "expo"
    });

    fadeIn("#scene", {
      opacity: 0.8,
      delay: 3,
      duration: 2
    });
  };

  const aboutPageAnimations = () => {
    fadeInUp(".title-el", {
      duration: 2,
      stagger: 0.2
    });

    fadeInUp(".nav-el", {
      duration: 0.5,
      delay: 1,
      stagger: 0.1
    });

    fadeInUp(".side-el", {
      duration: 0.5,
      delay: 2,
      stagger: 0.5
    });

    fadeInUpWithScrollTrigger(".about-section", "#about-start", {
      duration: 1,
      stagger: 0.2
    });

    fadeInUpWithScrollTrigger(".skill-svg", "#skills", {
      duration: 0.5,
      stagger: 0.1
    });

    fadeInUpWithScrollTrigger(".employment-section", "#employment", {
      duration: 1,
      stagger: 0.3
    });

    fadeInUpWithScrollTrigger(".grid-el", ".other-projects", {
      duration: 0.5,
      stagger: 0.1
    });

    fadeInUpWithScrollTrigger("#web-projects-0", "#web-projects-0", {
      duration: 1,
      y: 0,
      ease: "easeInOut",
      stagger: 0.2
    });

    fadeInUpWithScrollTrigger("#web-projects-1", "#web-projects-1", {
      duration: 1,
      y: 0,
      ease: "easeInOut",
      stagger: 0.2
    });

    fadeInUpWithScrollTrigger("#web-projects-2", "#web-projects-2", {
      duration: 1,
      y: 0,
      ease: "easeInOut",
      stagger: 0.2
    });
  };

  return {
    fadeInUp,
    fadeInUpWithScrollTrigger,
    fadeIn,
    cameraTransition,
    setupNavAnimation,
    landingPageAnimations,
    aboutPageAnimations
  };
}