// import { HeroComponent } from "@/app/_components";
// import { BlogPosts } from "@/app/_components/blogPageComponents";
// import { Metadata } from "next";
// import qs from "qs";

// export const metadata: Metadata = {
//   title: "Ali Usman | Blogs",
//   description:
//     "Explore insightful blogs by Ali Usman on e-commerce solutions and more.",
// };

// async function page({ searchParams }: { searchParams: { page?: string } }) {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
//     const path = "/api/blogs";

//     const url = new URL(path, baseUrl);
//     url.search = qs.stringify({
//       populate: {
//         title_image: {
//           fields: ["alternativeText", "name", "url"],
//         },
//         author: {
//           fields: ["username"],
//         },
//       },
//       pagination: {
//         page: searchParams?.page || 1, // Handle page query dynamically
//         pageSize: 10, // Number of items per page
//       },
//     });

//     const response = await fetch(url.href);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const posts = await response.json();
//     return (
//       <>
//         <HeroComponent
//           title={["Comprehensive E-Commerce", "Solution for CSD"]}
//           paragraph="Experience a comprehensive e-commerce solution tailored specifically for CSD (Canteen Stores Department). Streamline operations, enhance efficiency, and deliver exceptional service with our robust platform designed to meet the unique needs of CSD businesses. From inventory management to seamless transactions, we provide everything you need to simplify processes and drive success in your operations."
//         />

//         {/* Pass the posts data to BlogPosts */}
//         <div className="px-content-spacing">
//           <BlogPosts posts={posts.data} pagination={posts.meta.pagination} />
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.error("Failed to fetch blog posts:", error);
//     return (
//       <>
//         <HeroComponent
//           title={["Comprehensive E-Commerce", "Solution for CSD"]}
//           paragraph="Experience a comprehensive e-commerce solution tailored specifically for CSD (Canteen Stores Department). Streamline operations, enhance efficiency, and deliver exceptional service with our robust platform designed to meet the unique needs of CSD businesses. From inventory management to seamless transactions, we provide everything you need to simplify processes and drive success in your operations."
//         />
//         <div className="text-center my-20 text-red-500 ">
//           <h2>Error Loading Blogs</h2>
//           <p>Unable to fetch blog posts. Please try again later.</p>
//         </div>
//       </>
//     );
//   }
// }

// export default page;

import { Discuss, HeroComponent } from "@/app/_components";
import { Metadata } from "next";
import Image from "next/image";
import rocketSvg from "@/public/blogPost/rocket.svg";

export const metadata: Metadata = {
  title: "Ali Usman | Blogs",
  description:
    "Explore insightful blogs by Ali Usman on e-commerce solutions and more.",
};

function page() {
  return (
    <>
      <HeroComponent
        title={["Comprehensive E-Commerce", "Solution for CSD"]}
        paragraph="Experience a comprehensive e-commerce solution tailored specifically for CSD (Canteen Stores Department). Streamline operations, enhance efficiency, and deliver exceptional service with our robust platform designed to meet the unique needs of CSD businesses. From inventory management to seamless transactions, we provide everything you need to simplify processes and drive success in your operations."
      />

      {/* Pass the posts data to BlogPosts */}
      <div className="px-content-spacing flex justify-center items-center my-10">
        <div className="max-w-[589px] text-center">
          <Image src={rocketSvg} alt="Rocket" className="mx-auto" />
          <h2 className="text-5xl mt-7 mb-4"> Coming Soon!</h2>
          <p className="text-lg text-gray-600">
            Are you Ready to get something new from us. Then subscribe the news
            latter to get latest updates?
          </p>
        </div>
      </div>
      <Discuss />
    </>
  );
}

export default page;
