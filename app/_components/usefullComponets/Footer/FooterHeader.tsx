"use client";
import Image from "next/image";
import arrow from "@/public/services/up-right.svg";
import { useRouter } from "next/navigation";

function FooterHeader() {
  const router = useRouter();
  return (
    <div className="flex md:flex-row gap-5 flex-col md:justify-between items-center pb-24 border-[#475467]  border-b-2">
      <h4 className="sm:sm:text-xlarge  text-large leading-large text-large leading-large sm:sm:leading-xlarge md:text-left text-center text-white font-semibold">
        Let Connect there
      </h4>
      <button
        onClick={() => {
          router.push("/contact-us");
        }}
        className="bg-primary flex items-center relative z-10 px-8 py-4 text-small leading-small group font-medium text-white rounded-[3.75rem]"
      >
        <span className="text-nowrap">Hire me</span>
        <Image
          src={arrow}
          alt="play btn svg"
          className="w-[43px] h-[43px] group-hover:rotate-45 animation"
        />
      </button>
    </div>
  );
}

export default FooterHeader;
