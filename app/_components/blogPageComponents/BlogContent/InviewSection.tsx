"use client";
import { useRef, useEffect, useCallback } from "react";
import { useBlogPostContext } from "@/app/Provider";

interface InViewSectionProps {
  value: string;
  top: boolean;
}

function InViewSection({ value, top }: InViewSectionProps) {
  const { setIsInView } = useBlogPostContext();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = useCallback(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect().top;
      if (rect <= 20) {
        setIsInView(value);
      } else if (top && rect > 20) {
        setIsInView("");
      }
    }
  }, [setIsInView, value, top]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <h2
      id={value.toLocaleLowerCase().replaceAll(" ", "-")}
      className="md:text-medium text-small font-semibold text-primary"
      ref={headingRef}
    >
      {value}
    </h2>
  );
}

export default InViewSection;
