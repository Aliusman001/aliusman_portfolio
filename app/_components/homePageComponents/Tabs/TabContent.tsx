import Image from "next/image";
import upRight from "@/public/services/up-right.svg";
import { useRef } from "react";
import { useLineAnimation } from "@/app/hook";
import Link from "next/link";

interface TabContentProps {
  title: string;
  content: string;
  link: string;
  className?: string;
}

function TabContent({ title, content, className }: TabContentProps) {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useLineAnimation(paraRef, containerRef, headingRef);
  return (
    <div
      ref={containerRef}
      className={`text-center mx-auto px-5 ${className ? className : ""}`}
    >
      <div
        ref={headingRef}
        className="flex items-center justify-center gap-2 md:gap-5 mb-3"
      >
        <h4 className="sm:text-large  text-4xl  text-secondary sm:leading-large font-bold">
          {title}
        </h4>
        {/* <Link
          href=""
          className="max-w-[58px] hover:rotate-45 animation w-full bg-primary flex justify-center items-center aspect-square rounded-full h-[58px]"
        >
          <Image
            src={upRight}
            className="w-9 h-9  aspect-square"
            alt="arrow icon svg"
          />
        </Link> */}
      </div>
      <p ref={paraRef} className="max-w-[742px] text-secondary mx-auto">
        {content}
      </p>
    </div>
  );
}

export default TabContent;
