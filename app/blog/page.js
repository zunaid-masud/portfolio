// @flow strict

// import { personalData } from "@/utils/data/personal-data";
// import BlogCard from "../components/homepage/blog/blog-card";
import Link from "next/link";

// async function getBlogs() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();
//   return data;
// };

async function page() {
  // const blogs = await getBlogs();

  return (
		// <div className="py-8">
		//   <div className="flex justify-center my-5 lg:py-8">
		//     <div className="flex  items-center">
		//       <span className="w-24 h-[2px] bg-[#1a1443]"></span>
		//       <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
		//         All Blog
		//       </span>
		//       <span className="w-24 h-[2px] bg-[#1a1443]"></span>
		//     </div>
		//   </div>

		//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
		//     {
		//       blogs.map((blog, i) => (
		//         blog?.cover_image &&
		//         <BlogCard blog={blog} key={i} />
		//       ))
		//     }
		//   </div>
		// </div>

		<div className="flex flex-col items-center justify-center h-screen text-center">
			<h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">
				404
			</h1>
			<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
				Page Not Found
			</p>
			<p className="mt-2 text-gray-500 dark:text-gray-400">
				Sorry, the page you are looking for does not exist.
			</p>
			<Link
				className="mt-5 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
				role="button"
				href="/"
			>
				Go to Home
			</Link>
		</div>
  );
};

export default page;