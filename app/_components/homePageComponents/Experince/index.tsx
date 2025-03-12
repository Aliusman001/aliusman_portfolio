"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { firstStep, secondStep, thirdStep } from "@/app/utils";
import Stepper from "./Stepper";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function Experince() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // GSAP Animation Hook
  useGSAP(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }
  }, [containerRef, { scope: containerRef }]);
  return (
    <div
      id="about"
      ref={containerRef}
      className="max-w-screen lg:px-content-spacing px-5 mx-auto mb-24"
    >
      <h2
        ref={headingRef}
        className="sm:text-xlarge  text-large leading-large sm:leading-xlarge text-secondary font-medium text-center mb-10"
      >
        My <span className="text-primary">Work Experince</span>
      </h2>
      <Stepper
        content1={firstStep.part1}
        content2={firstStep.part2}
        border={true}
      />
      <Stepper
        content1={secondStep.part1}
        content2={secondStep.part2}
        border={true}
        dot={true}
      />
      <Stepper
        content1={thirdStep.part1}
        content2={thirdStep.part2}
        border={false}
      />
    </div>
  );
}

export default Experince;
