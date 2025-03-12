"use client";
import Image, { StaticImageData } from "next/image";
import PortfolioLink from "./PortfolioLink";

interface PortfolioCardProps {
  image: StaticImageData;
  title: string;
  content: string;
  link: string;
}

function PortfolioCard({ image, title, content, link }: PortfolioCardProps) {
  return (
    <div className="w-full group cursor-pointer relative rounded-3xl overflow-hidden  aspect-[633/371]">
      <Image
        src={image}
        alt="Portfolio Png"
        className="w-full aspect-[633/371]"
      />
      <div className="absolute opacity-70 inset-0 bg-gradient-to-tr from-black to-transparent"></div>
      <PortfolioLink href={link} />
      <div className="absolute bottom-3 right-4 left-4 group-hover:backdrop-blur-2xl  group-hover:bg-black/40 duration-200 animation ease-light-bounce text-white rounded-3xl md:py-8 py-4">
        <h4 className="md:text-[70px] text-3xl animation group-hover:ml-5 md:group-hover:mb-8 group-hover:mb-3  md:leading-10 font-bold ease-light-bounce duration-200">
          {title}
        </h4>
        <p className="md:group-hover:mt-5 animation ease-light-bounce mx-5  md:text-base  duration-200 h-0 group-hover:h-12 text-[10px] overflow-hidden">
          {content}
        </p>
      </div>
    </div>
  );
}

export default PortfolioCard;
