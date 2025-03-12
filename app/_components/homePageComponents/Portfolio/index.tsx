"use client";
import { useScrollTriggerAnimationText } from "@/app/hook";
import { useRef } from "react";
import CustomSwiper from "./CustomSwiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const otherRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  useScrollTriggerAnimationText(null, headingRef, scopeRef, otherRef);

  useGSAP(
    () => {
      if (swiperRef.current) {
        gsap.from(swiperRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 90%",
          },
        });
      }
    },
    { dependencies: [scopeRef], scope: scopeRef }
  );

  return (
    <div
      id="project"
      className="max-w-screen mx-auto md:px-content-spacing px-5 my-20"
    >
      <div
        ref={scopeRef}
        className="flex md:flex-row flex-col gap-5 md:justify-between md:text-start items-center mb-10"
      >
        <h2
          ref={headingRef}
          className="text-secondary md:text-left text-center sm:text-xlarge  text-large leading-large sm:leading-xlarge font-semibold"
        >
          Lets have a look at <br /> my{" "}
          <span className="text-primary">Portfolio</span>
        </h2>
        {/* <RoundedBtn ref={otherRef} title="See All" handleClick={() => {}} /> */}
      </div>

      <div ref={swiperRef} className="px-1">
        <CustomSwiper />
      </div>
    </div>
  );
}

export default Portfolio;
