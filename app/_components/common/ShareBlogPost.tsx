"use client";
import Image from "next/image";
import facebook from "@/public/blogPost/facebook.svg";
import linkedin from "@/public/blogPost/linkedin.svg";
import twitter from "@/public/blogPost/twitter.svg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { useEffect, useState } from "react";

function ShareBlogPost({ title }: { title: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <>
      {url && (
        <>
          <FacebookShareButton url={url} title={title}>
            <Image src={facebook} alt="facebook svg" />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title}>
            <Image src={twitter} alt="twitter svg" />
          </TwitterShareButton>
          <LinkedinShareButton url={url} title={title}>
            <Image src={linkedin} alt="linkedin svg" />
          </LinkedinShareButton>
        </>
      )}
    </>
  );
}

export default ShareBlogPost;
