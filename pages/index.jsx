import { HomeContent, SeoMetadata } from "@/components";
import { site_metadata } from "@/constants";

const Home = () => {
  return (
    <>
      <SeoMetadata
        title={site_metadata?.home?.title}
        desc={site_metadata?.home?.desc}
      />
      <HomeContent />
    </>
  );
};

export default Home;
