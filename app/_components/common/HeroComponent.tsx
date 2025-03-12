"use client";
import { useScrollTriggerAnimationText } from "@/app/hook";
import { useRef } from "react";

interface HeroComponentProps {
  title: string[];
  paragraph: string;
}
function HeroComponent({ title, paragraph }: HeroComponentProps) {
  const heading = useRef<HTMLHeadingElement | null>(null);
  const para = useRef<HTMLParagraphElement | null>(null);
  const scope = useRef<HTMLDivElement | null>(null);
  useScrollTriggerAnimationText(heading, para, scope);
  return (
    <div className="bg-[url('/services/bg.png')] pt-20 mb-20 overflow-hidden bg-cover bg-center pb-28 text-center sm:rounded-[50px] rounded-2xl mt-5">
      <div ref={scope} className="max-w-[76.25rem] text-white mx-auto px-10">
        <h1
          ref={heading}
          className="sm:text-xlarge max-w-[60.25rem] mx-auto text-medium leading-regular sm:leading-xlarge font-semibold"
        >
          {title[0]} <span className="text-primary">{title[1]}</span>
        </h1>
        <p ref={para} className="sm:text-xsmall  mx-auto text-base mt-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default HeroComponent;
