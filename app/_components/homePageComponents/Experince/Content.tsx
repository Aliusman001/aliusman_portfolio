"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ContentProps {
  title: string;
  date: string;
  className?: string;
}

function Content({ title, date, className }: ContentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // GSAP Animation Hook
  useGSAP(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
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
    <div ref={containerRef} className="flex gap-10 lg:ml-0 ml-5 pr-3">
      <div
        className={`border-secondary border-l border-dashed lg:hidden block relative w-[1px]`}
      >
        <div className="absolute md:mt-2 -mt-1 left-0 -top-0 -translate-x-1/2">
          <div
            className={`h-12 w-12 p-2 dot relative border-darkgray animate-spin bg-white rounded-full before:bg-secondary ${
              className ? className : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="">
        <h4 className="font-semibold sm:text-medium text-small  sm:leading-medium leading-small  text-secondary">
          {title}
        </h4>
        <p className="sm:text-xsmall text-base text-lightGray sm:leading-xsmall  mb-10">
          {date}
        </p>
      </div>
    </div>
  );
}

export default Content;
