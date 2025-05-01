import Head from "next/head";
import { site_metadata } from "@/constants";

export const SeoMetadata = ({ title, desc }) => {
  return (
    <Head>
      <title>{title || "Rd Pradipta Gitaya Samiadji - Software Engineer, Writer, and Designer"}</title>
      <meta
        name="description"
        content={desc || ""}
      />
      <link rel="canonical" href={site_metadata?.hostname} />
    </Head>
  )
}
