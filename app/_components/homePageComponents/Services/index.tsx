"use client";
import gsap from "gsap";
import frame from "@/public/Services/Frame.png";
import frame2 from "@/public/Services/Frame2.png";
import Card from "./Card";
import Content from "./Content";
import BackgroundImages from "./BackgroundImages";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Register the plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);
const handleMouseEnter = () => {
  gsap.to(".center", {
    x: 450, // Moves 3.125rem down on the Y-axis
    rotation: 130, // Complete rotation (360 degrees)
    duration: 5, // Slow animation to simulate floating effect
    ease: "sine.inOut",
    yoyo: true,
  });
  gsap.to(".left", {
    y: 200, // Moves 3.125rem down on the Y-axis
    rotation: -100, // Complete rotation (360 degrees)
    duration: 5, // Slow animation to simulate floating effect
    ease: "sine.inOut",
    yoyo: true,
  });
  gsap.to(".right", {
    x: 100, // Moves 3.125rem down on the Y-axis
    rotation: -80, // Complete rotation (360 degrees)
    duration: 5, // Slow animation to simulate floating effect
    ease: "sine.inOut",
    yoyo: true,
  });
};

const handleMouseLeave = () => {
  gsap.to(".center", {
    x: 0, // Return to the original Y position
    rotation: -120, // Return to the original rotation
    duration: 3, // Smooth return
    ease: "power1.inOut",
    yoyo: false,
  });
  gsap.to(".left", {
    y: 0, // Return to the original Y position
    rotation: 5, // Return to the original rotation
    duration: 3, // Smooth return
    ease: "power1.inOut",
    yoyo: false,
  });
  gsap.to(".right", {
    x: 0, // Return to the original Y position
    rotation: 5, // Return to the original rotation
    duration: 3, // Smooth return
    ease: "power1.inOut",
    yoyo: false,
  });
};

function Services() {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.from(".serviceCard", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".serviceCardbox",
        start: "top 80%",
      },
    });
  }, [{ scope: container }]);
  return (
    <div
      id="services"
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[url('/services/bg.png')]  mb-20 lg:px-content-spacing px-5 overflow-hidden bg-cover bg-center pb-20 sm:rounded-[50px] rounded-2xl"
    >
      <div className="max-w-screen mx-auto relative h-full">
        <BackgroundImages />
        <div className="text-white relative z-1">
          <Content />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 1003-1273:grid-cols-2  grid-cols-1 justify-items-center serviceCardbox justify-between gap-10">
            <Card src={frame} title="UI/UX Design" />
            <Card src={frame2} title="Landing Pages" />
            <Card src={frame} title="Web Pages" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
