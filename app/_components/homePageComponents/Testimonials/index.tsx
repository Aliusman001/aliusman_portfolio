"use client";
import Image from "next/image";
import start from "@/public/testimonials/star.svg";
import Review from "./Review";
import Marquee from "react-fast-marquee";
import { useScrollTriggerAnimationText } from "@/app/hook";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

// Register the plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Testimonials() {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useScrollTriggerAnimationText(paraRef, headingRef, scopeRef);

  useGSAP(
    () => {
      if (marqueeRef.current) {
        gsap.from(marqueeRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 90%",
          },
        });
      }
    },
    { dependencies: [marqueeRef], scope: marqueeRef }
  );
  return (
    <div className="bg-[url('/services/bg.png')] pt-20  mb-20 overflow-hidden bg-cover bg-center pb-28 text-center sm:rounded-[50px] rounded-2xl">
      <div ref={scopeRef} className="px-5">
        <h2
          ref={headingRef}
          className="sm:text-5xl  text-4xl mb-5 relative mx-auto max-w-[448px] testimonial  font-medium text-white"
        >
          Testimonials That
          <br />
          Speak to
          <span className="text-primary"> My Results</span>
        </h2>
        <div className="max-w-[742px] relative mx-auto text-white">
          <p
            ref={paraRef}
            className="sm:text-xsmall text-base sm:leading-xsmall "
          >
            I’ve had an amazing experience using this site. The design is sleek,
            modern, and incredibly user-friendly, making navigation a breeze.
            The mobile version is just as impressive, with smooth scrolling and
            quick loading times even on slower connections.
          </p>
          <Image src={start} alt="stars vertors" />
          <Image
            src={start}
            alt="stars vertors"
            className="absolute -right-10 -top-5"
          />
        </div>
      </div>
      <div ref={marqueeRef} className="mt-20 min-h-[260px]">
        <Marquee autoFill speed={100} pauseOnHover>
          <Review /> <Review /> <Review /> <Review />
        </Marquee>
      </div>
    </div>
  );
}

export default Testimonials;
