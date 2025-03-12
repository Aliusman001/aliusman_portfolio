"use client";
import Image from "next/image";
import vector from "@/public/hero/vector1.png";
import quote from "@/public/hero/quote-up.png";
import rating from "@/public/hero/rating.png";
import shape from "@/public/hero/shape.png";
import frame from "@/public/hero/frame.png";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeaderButtonSection from "./HeaderButtonSection";
import play from "@/public/common/play.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const [protfolio, setProtfolio] = useState(true);
  const primaryHeading = useRef(null);
  const primaryContent = useRef(null);
  const frameRef = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    const heading = primaryHeading.current;
    const content = primaryContent.current;
    const frame = frameRef.current;
    if (!heading) return;

    if (protfolio) {
      gsap.to(heading, {
        opacity: 1,
        y: 0, // Moves to original position
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
      gsap.to(content, {
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
      gsap.to(frame, {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    } else {
      // Animate fading out and moving back to the bottom
      gsap.to(heading, {
        opacity: 0,
        y: 300, // Moves back to below the screen
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
      gsap.to(content, {
        opacity: 1,
        y: -250,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
      gsap.to(frame, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [protfolio]);

  return (
    <div className="relative max-w-screen pb-14 mx-auto px-5 md:px-content-spacing xl:h-[800px] lg:min-h-[750px] text-black">
      <div ref={primaryHeading} className="text-center">
        <div className="relative lg:mb-0 mb-6 h-[45px] mx-auto w-[103px] mt-14 ">
          <span className="h-full w-full flex justify-center items-center border rounded-full border-lightBlack sm:leading-xsmall   font-medium sm:text-xsmall text-base">
            Hello!
          </span>
          <Image
            placeholder="blur"
            src={vector}
            width={28}
            height={29}
            className="absolute -right-4 -top-5"
            alt="vector image hero section png"
          />
        </div>
        <div className="lg:text-xxlarge lg:leading-xxlarge sm:leading-[75px] sm:text-[65px] text-5xl leading-[60px]">
          <h1 className="text-lightBlack lg:font-medium font-bold">
            I’m <span className="text-primary">Ali Usman</span>,
          </h1>
          <div className="relative max-w-[900px] mx-auto">
            <h1 className="lg:-mt-8 text-lightBlack lg:font-medium font-bold">
              Frontend Developer
            </h1>
            <Image
              placeholder="blur"
              src={vector}
              width={72}
              height={75}
              className="absolute lg:block hidden -left-9 -bottom-7 -rotate-180"
              alt="vector image hero section png"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block text-center mt-5">
        <button
          onClick={() => {
            router.push("/contact-us");
          }}
          className={` relative group`}
        >
          <span className="bg-primary text-nowrap inline-block relative z-10 px-8 py-4  text-lg  font-bold text-white rounded-[3.75rem]">
            Contact Us
          </span>
          <div className="h-14 w-14 group-hover:-translate-x-[60px] animation duration-150 absolute left-0 top-1/2 -translate-y-1/2 bg-secondary rounded-full">
            <div className="relative flex justify-center w-full h-full items-center">
              <Image src={play} alt="play btn svg" />
            </div>
          </div>
        </button>
      </div>
      <div
        ref={primaryContent}
        className=" lg:flex hidden justify-between items-center mt-20"
      >
        <div className="max-w-[21rem] flex flex-col items-start gap-5">
          <Image
            placeholder="blur"
            src={quote}
            width={36}
            height={36}
            alt="quotes start png"
          />
          <p className="text-secondary sm:leading-xsmall   sm:text-xsmall text-base font-medium">
            Designing seamless and interactive user experiences. Specializing in
            modern, responsive web applications.
          </p>
        </div>
        <div className="flex items-end gap-5 flex-col">
          <Image
            placeholder="blur"
            src={rating}
            width={162}
            height={32}
            alt="ratings start png"
          />
          <div className="text-right">
            <h3 className="font-bold -mb-2 text-large leading-large">
              6 Months
            </h3>
            <span className="sm:text-xsmall text-base sm:leading-xsmall ">
              Experince
            </span>
          </div>
        </div>
      </div>
      <div className="absolute lg:block hidden w-full max-w-[59.5rem] h-[39.875rem] translate-x-1/2 right-1/2 bottom-0">
        <div className="relative max-w-[59.5rem] h-[39.875rem]">
          <Image
            width={952}
            height={638}
            placeholder="blur"
            src={shape}
            alt="Profile image hero section png "
            className="absolute bottom-0"
          />
          <Image
            ref={frameRef}
            placeholder="blur"
            src={frame}
            alt="Profile image hero section png "
            className={`absolute bottom-0 ${protfolio ? "hidden" : ""}`}
          />
          <Image
            width={952}
            height={638}
            src={"/hero/woman.png"}
            alt="Profile image hero section png "
            className="absolute z-50 bottom-0"
          />
          <HeaderButtonSection
            protfolio={protfolio}
            setProtfolio={setProtfolio}
          />
        </div>
      </div>
    </div>
  );
}
