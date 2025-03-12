import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useScrollTriggerAnimationText } from "@/app/hook";

// Register the plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);
function Content() {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);

  useScrollTriggerAnimationText(paraRef, headingRef, scopeRef);
  return (
    <div
      ref={scopeRef}
      className="flex md:flex-row flex-col md:items-start items-center md:py-28 pt-20 pb-14"
    >
      <h2
        ref={headingRef}
        className="flex-1 text-large leading-large font-medium"
      >
        My <span className="text-primary">Services</span>
      </h2>
      <p
        ref={paraRef}
        className="flex-1 md:text-left text-center md:mt-0 mt-5 sm:text-xsmall text-base sm:leading-xsmall "
      >
        I specialize in creating responsive, user-friendly, and visually
        appealing web applications. From modern interfaces to optimized
        performance, I deliver tailored digital solutions.
      </p>
    </div>
  );
}

export default Content;
