import { HeroComponent, ShareBlogPost } from "@/app/_components";
import {
  BlogContent,
  BlogPostLinks,
  RelatedBlogs,
} from "@/app/_components/blogPageComponents";
import { BlogPostProvider } from "@/app/Provider/BlogPostProvider";
import { formatDate, formatTimeToMinutes } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import qs from "qs";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  return {
    title: `Blogs | ${slug
      .replaceAll("-", " ")
      .split(" ")
      .map(
        (word) =>
          `${word[0].toUpperCase()}${word.slice(1, word.length).toLowerCase()}`
      )
      .join(" ")}`,
  };
}

// export async function generateStaticParams() {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
//   const path = `/api/blogs`;
//   const url = new URL(path, baseUrl);
//   const posts = await fetch(url.href).then((res) => res.json());
//   return posts.data.map((post: { slug: string }) => ({
//     slug: post.slug,
//   }));
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  const path = `/api/blogs`;

  const url = new URL(path, baseUrl);
  console.log(url.href);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: params.slug, // Apply the slug filter
      },
    },
    populate: {
      title_image: {
        fields: ["alternativeText", "name", "url"],
      },
      author: {
        fields: ["username", "bio"],
        populate: {
          profile: {
            fields: ["name", "url"],
          },
        },
      },
      keywords: {
        fields: ["tag_name"],
      },
    },
  });

  const response = await fetch(url.href);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const posts = await response.json();

  const links = posts.data[0]?.content
    ?.map((links: { type: string; children: { text: string }[] }) =>
      links.type === "heading" ? links.children[0].text : ""
    )
    .filter((text: string) => text !== "");

  return (
    <>
      <HeroComponent
        title={["Comprehensive E-Commerce", "Solution for CSD"]}
        paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              labore natus sed, illo quisquam eveniet similique hic illum
              perferendis iusto obcaecati aperiam consequuntur quaerat! Ducimus
              distinctio iure soluta facilis tenetur."
      />
      <div className="md:px-content-spacing px-5">
        <div className="mx-auto max-w-screen grid gap-5 lg:grid-cols-[2.3fr,1fr] grid-cols-1 mb-10 ">
          <BlogPostProvider>
            <div>
              <div className="rounded-3xl overflow-hidden relative group">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${posts.data[0].title_image.url}`}
                  alt="titleImage svg"
                  className="group-hover:scale-110 animation aspect-[862/489] w-full h-auto object-cover"
                  width={862}
                  height={489}
                />
                <div className="md:py-5 md:px-10 py-2 px-4 flex-col flex gap-1 md:gap-3 text-white absolute bottom-0 backdrop-blur-2xl w-full">
                  <div className="bg-primary/60 self-start items-center inline-flex gap-2 sm:gap-3 px-3 py-1 sm:px-5 sm:py-2 rounded-full">
                    <span className="sm:w-5 sm:h-5 h-2 w-2 inline-block rounded-full bg-dark-primary"></span>
                    <span className="font-normal sm:text-base text-xs">
                      {posts.data[0].tag}
                    </span>
                  </div>
                  <h1 className="md:text-3xl text-lg font-semibold">
                    {posts.data[0].title}
                  </h1>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-5 sm:text-base text-xs">
                      <span>{formatDate(posts.data[0].publishedAt)}</span>
                      <span>
                        {formatTimeToMinutes(posts.data[0].timeRequired)} read
                      </span>
                    </div>
                    <div className="flex-col sm:flex hidden ">
                      <span className="text-2xl  font-semibold">Author</span>
                      <span> {posts.data[0].author.username}</span>
                    </div>
                  </div>
                </div>
              </div>
              <BlogContent content={posts.data[0]} />
            </div>
            <div className="sticky lg:block hidden self-start top-2">
              <div className="bg-cover py-5 rounded-3xl bg-center w-full items-center justify-between px-5 flex aspect-[134/33] bg-[url('/blogPost/socialBg.png')]">
                <h5 className="text-white basis-[13.8125rem] text-xl 2xl:text-2xl  font-semibold">
                  Share with your community!
                </h5>
                <div className="flex 2xl:gap-5 gap-2">
                  <ShareBlogPost title={params.slug} />
                </div>
              </div>
              <BlogPostLinks links={links} />
            </div>
          </BlogPostProvider>
        </div>

        <RelatedBlogs tag={posts.data[0].tag} />
      </div>
    </>
  );
}
