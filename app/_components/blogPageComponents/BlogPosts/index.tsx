"use client";
import BlogCard from "../../homePageComponents/Blog/BlogCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { BlogPost } from "@/utils";
import CustomPagination from "../CustomPagination";

// Register the plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface BlogPostsProps {
  posts: BlogPost[];
  pagination: { total: number; pageSize: number } | null;
}

function BlogPosts({ posts, pagination }: BlogPostsProps) {
  const blogRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (blogRef.current) {
        gsap.from(".blogs", {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogRef.current,
            start: "top 80%",
          },
        });
      }
    },
    { dependencies: [blogRef], scope: blogRef }
  );

  return (
    <div className="max-w-screen mx-auto  mb-20">
      <div
        ref={blogRef}
        className="grid md:grid-cols-2 lg:grid-cols-3 1003-1273:grid-cols-2  grid-cols-1 justify-items-center gap-10"
      >
        {posts.map((blog: BlogPost, index: number) => {
          return (
            <BlogCard
              key={index}
              tag={blog?.tag}
              date={blog.datePublished}
              username={blog?.author?.username}
              title={blog.title}
              titleImage={blog.title_image.url}
              slug={blog.slug}
            />
          );
        })}
      </div>
      {pagination && (
        <CustomPagination
          total={Math.ceil(pagination.total / pagination.pageSize)}
        />
      )}
    </div>
  );
}

export default BlogPosts;
