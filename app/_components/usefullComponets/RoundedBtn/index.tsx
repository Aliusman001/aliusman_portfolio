import { forwardRef } from "react";
import Image from "next/image";
import play from "@/public/common/play.svg";

interface RoundedBtnProps {
  handleClick: () => void;
  title: string;
}

const RoundedBtn = forwardRef<HTMLButtonElement, RoundedBtnProps>(
  ({ handleClick, title }, ref) => {
    return (
      <button ref={ref} onClick={handleClick} className="relative group">
        <span className="bg-primary text-nowrap inline-block relative z-10 px-8 py-4 sm:text-xsmall text-base sm:leading-xsmall  font-bold text-white rounded-[3.75rem]">
          {title}
        </span>
        <div className="h-14 w-14 group-hover:-translate-x-[60px] animation duration-150 absolute left-0 top-1/2 -translate-y-1/2 bg-secondary rounded-full">
          <div className="relative flex justify-center w-full h-full items-center">
            <Image src={play} alt="play btn svg" />
          </div>
        </div>
      </button>
    );
  }
);

RoundedBtn.displayName = "RoundedBtn";

export default RoundedBtn;
