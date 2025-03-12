"use client";
import type { NavItem } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";

interface NavItemsProps {
  items: NavItem[];
  setActiveIndex: Dispatch<SetStateAction<number>>;
  setActiveIndex1: Dispatch<SetStateAction<number>>;
  activeIndex1: number;
  activeIndex: number;
}

function NavItems({
  items,
  setActiveIndex,
  setActiveIndex1,
  activeIndex,
  activeIndex1,
}: NavItemsProps) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/blogs") {
      setActiveIndex(1);
      setActiveIndex1(-1);
    }
    if (pathname === "/contact-us") {
      setActiveIndex(2);
      setActiveIndex1(-1);
    }
    if (pathname === "/project") {
      setActiveIndex(0);
      setActiveIndex1(-1);
    }
    if (pathname === "/services") {
      setActiveIndex(-1);
      setActiveIndex1(2);
    }
    if (pathname === "/about") {
      setActiveIndex(-1);
      setActiveIndex1(1);
    }
    if (pathname === "/") {
      setActiveIndex(-1);
      setActiveIndex1(0);
    }
  }, [pathname, setActiveIndex, setActiveIndex1]);
  return (
    <ul className="text-white flex  relative text-base lg:sm:leading-xsmall  lg:sm:text-xsmall text-base gap-2 custom-breakpoint:text-lg">
      {items.map((link, index) => {
        return (
          <li key={index}>
            <Link
              onClick={() => {
                setActiveIndex(index);
                setActiveIndex1(-1);
              }}
              href={link.path}
              className={`lg:h-[66px] custom-breakpoint:w-[100px] h-[50px] flex relative z-10 justify-center items-center rounded-full  lg:w-[136px] w-[90px]`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
      {activeIndex1 === -1 && (
        <div
          className="lg:h-[66px] h-[50px] bg-primary lg:w-[136px] w-[90px] custom-breakpoint:w-[100px] rounded-full absolute animation duration-300 ease-light-bounce"
          style={{
            transform: `translateX(calc(${activeIndex} * (100% + 8px)))`, // Dynamic position
          }}
        ></div>
      )}
    </ul>
  );
}

export default NavItems;
