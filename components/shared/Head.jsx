import Head from "next/head";

export const SeoMetadata = ({ title, desc }) => {
  return (
      <Head>
        <title>{ title || "Rd Pradipta Gitaya Samiadji - Software Engineer, Writer, and Designer"}</title>
        <meta
          name="description"
          content={desc || ""}
        />
      </Head>
  )
}
