import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Count() {
  const scopeRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (scopeRef.current) {
        gsap.from(".hire-container", {
          opacity: 0,
          x: 30,
          duration: 0.7,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 90%",
          },
        });
      }
    },
    { dependencies: [scopeRef], scope: scopeRef }
  );

  return (
    <div ref={scopeRef} className="flex  gap-5 justify-between">
      <div className="hire-container md:text-left text-center ">
        <h5 className="text-regular leading-regular font-medium text-primary">
          20+
        </h5>
        <span className="text-text sm:text-xsmall text-base sm:leading-xsmall ">
          Project Completed
        </span>
      </div>
      <div className="hire-container md:text-left text-center ">
        <h5 className="text-regular leading-regular font-medium text-primary">
          40+
        </h5>
        <span className="text-text sm:text-xsmall text-base sm:leading-xsmall ">
          Project Completed
        </span>
      </div>
    </div>
  );
}

export default Count;
