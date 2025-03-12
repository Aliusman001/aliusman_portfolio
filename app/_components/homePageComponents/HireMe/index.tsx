"use client";
import Image from "next/image";
import girl from "@/public/hireMe/girl.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollTriggerAnimationText } from "@/app/hook";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Count from "./Count";
import HireMeBtn from "./HireMeBtn";

gsap.registerPlugin(ScrollTrigger);
function HireMe() {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useScrollTriggerAnimationText(paraRef, headingRef, scopeRef);

  useGSAP(
    () => {
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
          },
        });
      }
    },
    { dependencies: [scopeRef, imageRef], scope: scopeRef }
  );

  return (
    <div className="bg-lighterBlue">
      <div className="py-24 flex lg:flex-row 1025-1170:flex-col flex-col max-w-screen items-center mx-auto md:gap-20 gap-10 2xl:gap-52 2xl:justify-center px-5 lg:px-content-spacing">
        <Image
          ref={imageRef}
          src={girl}
          alt="girl point out"
          width={603}
          height={600}
          className="w-[603px]  aspect-[201/200]"
          placeholder="blur"
        />
        <div ref={scopeRef} className="max-w-[43.5rem] flex flex-col gap-8">
          <h2
            ref={headingRef}
            className="sm:text-xlarge  text-large leading-large  text-center text-secondary font-semibold sm:leading-xlarge lg:text-left 1025-1170:text-center"
          >
            Why <span className="text-primary">Hire Me?</span>
          </h2>
          <p
            ref={paraRef}
            className="lg:max-w-[444px] max-w-[744px] text-center text-text sm:text-xsmall text-base sm:leading-xsmall lg:text-left 1025-1170:text-center"
          >
            I combine technical expertise, creativity, and a user-focused
            approach to deliver exceptional web solutions. My dedication to
            quality, problem-solving skills, and commitment to deadlines make me
            a reliable choice for your projects.
          </p>
          <Count />
          <div className="lg:text-left 1025-1170:text-center text-center ">
            <HireMeBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
