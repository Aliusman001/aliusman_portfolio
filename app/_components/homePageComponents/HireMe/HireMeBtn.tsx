import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function HireMeBtn() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      if (btnRef.current) {
        gsap.from(btnRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 90%",
          },
        });
      }
    },
    { dependencies: [btnRef], scope: btnRef }
  );

  return (
    <button
      ref={btnRef}
      onClick={() => {
        router.push("/contact-us");
      }}
      className="w-[14.5625rem] group relative cursor-pointer overflow-hidden mt-3 text-secondary h-[6.75rem] border border-black rounded-[2rem] "
    >
      <span
        className={`group-hover:text-white animation  duration-200   relative z-10 overflow-hidden text-secondary font-semibold text-3xl  md:leading-xsmal `}
      >
        Hire Me
      </span>
      <div
        className={`bg-primary translate-y-full animation  duration-200 group-hover:translate-y-0   h-full left-0 right-0 absolute rounded-[2rem] top-0`}
      ></div>
    </button>
  );
}

export default HireMeBtn;
