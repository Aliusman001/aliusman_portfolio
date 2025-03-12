"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import phone from "@/public/common/TelephoneFill.svg";
import envelope from "@/public/common/EnvelopeFill.svg";
import location from "@/public/common/location.svg";
import Image from "next/image";
import Link from "next/link";
import { useScrollTriggerAnimationText } from "@/app/hook";

gsap.registerPlugin(ScrollTrigger);

function ContactUsLinks() {
  const listRef = useRef<HTMLUListElement>(null);
  const heading = useRef<HTMLHeadingElement | null>(null);
  const para = useRef<HTMLParagraphElement | null>(null);
  const scope = useRef<HTMLDivElement | null>(null);
  useScrollTriggerAnimationText(heading, para, scope);

  useEffect(() => {
    if (scope.current && listRef.current) {
      const listItems = listRef.current.querySelectorAll("li");

      gsap.fromTo(
        listItems,
        { x: -50, opacity: 0 }, // Start state (slide in from the left)
        {
          x: 0, // End state
          opacity: 1,
          stagger: 0.2, // Add stagger for cascading effect
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 90%", // Animation starts when the top of the list is near the viewport
            end: "bottom 10%", // Animation ends as the list moves out of view
          },
        }
      );
    }
  }, []);

  return (
    <div ref={scope} className="md:block hidden">
      <h2 ref={heading} className="text-large leading-medium font-semibold">
        Let&apos;s Innovate Together – Get in Touch Today!
      </h2>
      <p ref={para} className="text-xl max-w-[29rem] font-medium my-5">
        Tell us more about yourself and what you&apos;re got in mind,
      </p>
      <ul ref={listRef}>
        <li>
          <Link
            className="flex text-xl gap-5 w-full animation hover:text-white font-medium px-10 min-h-[4.5rem] rounded-full hover:bg-footer items-center"
            href="mailto:au08854@gmail.com"
          >
            <Image src={envelope} alt="email svg icon" />
            au08854@gmail.com
          </Link>
        </li>
        <li>
          <Link
            className="flex text-xl gap-5 w-full animation hover:text-white font-medium px-10 min-h-[4.5rem] rounded-full hover:bg-footer items-center"
            href="tel:03024780522"
          >
            <Image src={phone} alt="phone svg icon" />
            +923024780522
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="flex text-xl gap-5 w-full animation hover:text-white font-medium px-10 min-h-[4.5rem] rounded-full hover:bg-footer items-center"
            href="https://maps.app.goo.gl/dmt8pLyA79MveXog8"
          >
            <Image src={location} alt="location svg icon" />
            Islamabad, Pakistan
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactUsLinks;
