"use client";
import { useEffect, useRef, useState } from "react";
import NavItems from "./NavItems";
import { navbarItems } from "@/utils";
import MobileNavbar from "./MobileNavbar";
import Icon from "../Icon/Icon";
import Link from "next/link";
import top from "@/public/services/up-right.svg";
import Image from "next/image";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(-1);
  const [isOpen, setOpen] = useState(false);
  const [scrollBtn, setScrollBtn] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarElement = navbarRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollBtn(!entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% of the navbar must be visible to trigger
    );

    if (navbarElement) {
      observer.observe(navbarElement);
    }

    return () => {
      if (navbarElement) {
        observer.unobserve(navbarElement);
      }
    };
  }, []);

  return (
    <div
      id={"home"}
      ref={navbarRef}
      className={`bg-black overflow-hidden p-3 md:transition-none transition-all duration-500 lg:mx-content-spacing mx-2 lg:rounded-full rounded-[2.5rem] lg:h-[5.625rem] md:h-[4.6875rem] ${
        isOpen ? "h-[23.575rem]" : "h-[4.6875rem]"
      }`}
    >
      <div className="md:flex hidden overflow-hidden justify-between  items-center">
        <NavItems
          items={navbarItems[0]}
          setActiveIndex={setActiveIndex}
          setActiveIndex1={setActiveIndex1}
          activeIndex={activeIndex}
          activeIndex1={activeIndex1}
        />
        <Icon />
        <NavItems
          items={navbarItems[1]}
          setActiveIndex={setActiveIndex1}
          setActiveIndex1={setActiveIndex}
          activeIndex={activeIndex1}
          activeIndex1={activeIndex}
        />
      </div>

      <MobileNavbar isOpen={isOpen} setIsOpen={setOpen} />

      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={`fixed p-3 ${
          scrollBtn ? "translate-x-0" : "translate-x-[90px]"
        } right-5 rounded-full  animation z-50 hover:bg-primary/95 bottom-20  bg-primary flex justify-center items-center text-white shadow-2xl`}
      >
        <div className="flex flex-col min-h-[100px] gap-3  items-center">
          <Image src={top} alt="scroll svg arrow" className="w-8 -rotate-45 " />
          <span className="-rotate-90  text-base font-normal tracking-wider">
            Scroll
          </span>
        </div>
      </Link>
    </div>
  );
}
