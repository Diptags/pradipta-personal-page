import PageUnderConstruction from "./construction";

const Blogs = () => {
  return <PageUnderConstruction />;
}

// TODO: Complete this page

// const Blogs = () => {
//   return (
//     <section className="w-full sm:max-w-3xl">
//       <SeoMetadata
//         title={site_metadata?.blog?.title}
//         desc={site_metadata?.blog?.desc}
//       />

//       <PageTitle title="My blogs" effect="blue" />

//       <div className="my-6">
//         <h2 className="sub_heading">I write blogs on ✍️</h2>
//         <div className="flex items-center gap-2 flex-wrap">
//           {blogPageData?.blogPlatforms?.map(platform => (
//             <Link
//               target="_blank"
//               href={platform.link}
//               className="blog_platform"
//             >
//               <Image src={`images/${platform.icon}`} width={20} height={20} />
//               {platform.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="mt-10">
//         <h2 className="sub_heading">Latest blogs 🎉</h2>
//         {blogPageData?.blogs?.map(blog => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>

//       <Link className="mt-6 inline-block" href="/">
//         <button className="btn_link" type="button">
//           Go to home
//           <Home size={18} />
//         </button>
//       </Link>
//     </section>
//   );
// };

export default Blogs;
