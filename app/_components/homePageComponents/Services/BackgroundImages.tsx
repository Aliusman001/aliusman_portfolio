import Image from "next/image";
import left from "@/public/services/left.png";
import center from "@/public/services/center.png";
import right from "@/public/services/right.png";

function BackgroundImages() {
  return (
    <div>
      <Image
        src={left}
        alt="left"
        className="absolute left   top-[10%] -left-[25%]"
      />
      <Image
        src={center}
        alt="center"
        className="absolute left-[30%]  top-20 center"
      />
      <Image
        src={right}
        alt="right"
        className="absolute -right-[30%] 1003-1273:-bottom-[10%] 1024-1347:-bottom-[65%] -bottom-[10%] md:-bottom-[30%] right"
      />
    </div>
  );
}

export default BackgroundImages;
