import { PageTitle, SeoMetadata } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { blogPageData, site_metadata } from "@/constants";
import { FooterButton } from "@/components/shared/FooterButton";

const BlogPlatform = ({ platform }) => (
  <Link
    target="_blank"
    href={platform.link}
    className="blog_platform flex items-center gap-2"
    aria-label={`Visit ${platform.name}`}
  >
    <Image
      src={`images/${platform.icon}`}
      width={20}
      height={20}
      alt={`${platform.name} icon`}
    />
    {platform.name}
  </Link>
);

const Blogs = () => {
  const { intro, blogTitle, blogPlatforms } = blogPageData;
  const { blog } = site_metadata;

  return (
    <section className="w-full sm:max-w-3xl">
      {/* SEO Metadata */}
      <SeoMetadata title={blog?.title} desc={blog?.desc} />

      {/* Page Title */}
      <PageTitle title="My blogs" effect="blue" />

      {/* Introduction */}
      <p className="info text-justify">{intro}</p>

      {/* Blog Platforms */}
      <div className="my-6 flex flex-col justify-center items-center">
        <h2 className="sub_heading">{blogTitle}</h2>
        <div className="flex items-center gap-2 flex-wrap">
          {blogPlatforms.map((platform) => (
            <BlogPlatform key={platform.name} platform={platform} />
          ))}
        </div>
      </div>

      {/* Link to the Contact Page */}
      <FooterButton path="/contact" title="Contact Me" />
    </section>
  );
};

export default Blogs;
