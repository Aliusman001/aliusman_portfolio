import Image from "next/image";
import star from "@/public/designMarquee/star.svg";

function Content({ title }: { title: string }) {
  return (
    <div className="flex items-center mx-3 gap-6">
      <h5 className="text-large leading-large font-normal">{title}</h5>
      <Image src={star} alt="star svg" />
    </div>
  );
}

export default Content;
