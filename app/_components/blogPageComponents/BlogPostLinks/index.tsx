"use client";
import { useBlogPostContext } from "@/app/Provider";
import Link from "next/link";

function BlogPostLinks({ links }: { links: string[] }) {
  const { isInView } = useBlogPostContext();

  return (
    <div>
      <h3 className="text-2xl  font-semibold py-5">In this Article</h3>
      <ul className="max-w-[20.0625rem]s">
        {links?.map((link, index) => (
          <li
            key={index}
            className={` px-5 py-2 ${
              isInView === link
                ? "border-primary border-l-4 bg-primary/10 animation  text-primary"
                : " px-5 py-2"
            }`}
          >
            <Link
              href={`#${link.toLocaleLowerCase().replaceAll(" ", "-")}`}
              className={`text-base   ${
                isInView === link ? "font-semibold" : "font-semibold"
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostLinks;
