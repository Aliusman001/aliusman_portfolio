import qs from "qs";
import BlogPosts from "../BlogPosts";
import { QueryParams } from "@/utils";

async function RelatedBlogs({ tag }: { tag: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  const path = "/api/blogs";

  const url = new URL(path, baseUrl);

  // Build the query parameters
  const queryParams: QueryParams = {
    populate: {
      title_image: {
        fields: ["alternativeText", "name", "url"],
      },
      author: {
        fields: ["username"],
      },
    },
    pagination: {
      page: 1, // Change this dynamically for pagination
      pageSize: 3, // Number of items per page
    },
  };

  // Add filters conditionally if tag exists
  if (tag) {
    queryParams.filters = {
      tag: {
        $eq: tag, // Apply filter for the provided tag
      },
    };
  }

  // Convert query parameters into a query string
  url.search = qs.stringify(queryParams);

  const response = await fetch(url.href);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const posts = await response.json();

  return (
    <div>
      {tag && (
        <h4 className="text-primary max-w-screen mx-auto text-4xl font-semibold my-8">
          Related Blogs
        </h4>
      )}
      {/* Pass the posts data to BlogPosts */}
      <BlogPosts posts={posts.data} pagination={null} />
    </div>
  );
}

export default RelatedBlogs;
