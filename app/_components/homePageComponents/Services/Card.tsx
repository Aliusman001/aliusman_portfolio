import Image, { StaticImageData } from "next/image";
import arrow from "@/public/services/up-right.svg";
interface CardProps {
  src: StaticImageData;
  title: string;
}
function Card({ src, title }: CardProps) {
  return (
    <div className="relative serviceCard md:w-full 1003-1273:w-auto w-auto group aspect-[104/127] 1003-1273:h-[508px] md:h-auto sm:h-[508px]">
      <div className="card group-hover:bg-primary animation rounded-tl-[54px] rounded-tr-[54px] border-white/60 border w-full aspect-[104/127]">
        <div className="card-body rounded-tl-[54px] rounded-tr-[54px] h-full flex-col justify-between flex">
          <h3 className="pt-12 font-medium  border-white/60 border-b text-normal 2xl:pb-8 pb-5 px-7 leading-normal">
            {title}
          </h3>
          <Image
            src={src}
            alt=""
            className="w-full mt-7 animation group-hover:scale-110 scale-[1.01]"
          />
        </div>
      </div>
      <button className="w-[28%] group-hover:bg-primary animation aspect-square flex justify-center items-center absolute right-0 bottom-0 rounded-full bg-darkgray">
        <Image src={arrow} alt="" />
      </button>
    </div>
  );
}

export default Card;
