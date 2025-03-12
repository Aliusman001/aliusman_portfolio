import { RelatedBlogs } from "../../blogPageComponents";
import BlogHeader from "./BlogHeader";

function Blog() {
  return (
    <div
      id="blog"
      className="mx-auto max-w-screen lg:px-content-spacing px-5 my-20"
    >
      <BlogHeader />
      <RelatedBlogs tag="" />
    </div>
  );
}

export default Blog;
