import Image from "next/image";
import TabBtn from "../Tabs/TabBtn";
import Point from "./Point";
import arrow from "@/public/services/up-right.svg";
import Link from "next/link";
interface BlogCardProps {
  tag?: string;
  title?: string;
  username?: string;
  date?: string;
  titleImage?: string;
  slug?: string;
}
function BlogCard({
  tag,
  slug,
  title,
  username,
  date,
  titleImage,
}: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="flex blogs sm:w-[416px] w-auto  md:w-auto flex-col group cursor-pointer gap-5 justify-start "
    >
      <div className="relative aspect-[26/27] w-full">
        <div className="blog-card bg-primary aspect-[26/27] w-full rounded-3xl relative overflow-hidden">
          {titleImage && (
            <Image
              alt={arrow}
              src={`${process.env.NEXT_PUBLIC_API_URL}${titleImage}`}
              className="object-cover"
              fill
            />
          )}
        </div>

        <button className="w-[25%] group-hover:bg-primary animation aspect-square flex justify-center items-center absolute right-2 bottom-0 rounded-full bg-darkgray">
          <Image src={arrow} alt="Arrow Icon" />
        </button>
      </div>
      <TabBtn title={tag} className="self-start" />
      <div className="flex  gap-10">
        <Point title={username} />
        <Point date title={date} />
      </div>
      <h4 className="xl:text-large md:text-4xl text-3xl animation group-hover:text-primary text-secondary xl:leading-large overflow-hidden text-ellipsis line-clamp-2">
        {title}
      </h4>
    </Link>
  );
}

export default BlogCard;
