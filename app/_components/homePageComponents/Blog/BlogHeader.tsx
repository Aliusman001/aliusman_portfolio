"use client";
import { RoundedBtn } from "../../usefullComponets";
import { useScrollTriggerAnimationText } from "@/app/hook";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

function BlogHeader() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLButtonElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(
    () => {
      if (blogRef.current) {
        gsap.from(".blogs", {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogRef.current,
            start: "top 80%",
          },
        });
      }
    },
    { dependencies: [blogRef], scope: blogRef }
  );

  useScrollTriggerAnimationText(null, headingRef, scopeRef, otherRef);
  return (
    <div
      ref={scopeRef}
      className="flex sm:flex-row flex-col gap-5 justify-between items-center mb-10"
    >
      <h3
        ref={headingRef}
        className="text-large sm:text-left text-center leading-large text-secondary font-bold"
      >
        From my
        <br className="sm:block hidden" /> blog post
      </h3>
      <RoundedBtn
        ref={otherRef}
        handleClick={() => {
          router.push("/blogs");
        }}
        title="See All"
      />
    </div>
  );
}

export default BlogHeader;
