"use client";
import SmallIcons from "./SmallIcons";
import star from "@/public/discuss/star.svg";
import shield from "@/public/discuss/shield.svg";
import award from "@/public/discuss/award.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

function Discuss() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (scopeRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 90%",
          },
        });
        timeline.from(".contact-heading", {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        });
        timeline.from(".contact-form", {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        });
        timeline.from(".contact-icons", {
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [] }
  );

  return (
    <div
      id="contact"
      ref={scopeRef}
      className="max-w-screen mx-auto md:px-content-spacing px-5 my-20"
    >
      <h2 className="sm:text-xlarge  text-large leading-large contact-heading text-center mx-auto text-secondary sm:leading-xlarge font-semibold max-w-[744px]">
        Have an Awsome Project Idea?{" "}
        <span className="text-primary">Let&apos;s Discuss</span>
      </h2>
      <ContactForm />
      <div className="max-w-[770px] mx-auto justify-between flex">
        <SmallIcons
          className="contact-icons"
          title="4.9/5 Average Rating"
          icon={star}
        />
        <SmallIcons
          className="contact-icons"
          title="25+ Winning Awards"
          icon={award}
        />
        <SmallIcons
          className="contact-icons"
          title="Certified Product Designer"
          icon={shield}
        />
      </div>
    </div>
  );
}

export default Discuss;
