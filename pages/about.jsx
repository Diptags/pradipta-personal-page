import { PageTitle, SeoMetadata } from "@/components";
import Link from "next/link";
import { ChevronsRight, MoveUpRight, Phone, MailCheck, MapPin, Info } from "lucide-react";
import { aboutPageData, site_metadata } from "@/constants";
import { blue_3, orange_3 } from "@/constants/colors";
import Image from "next/image";

const personalInfoIcons = {
  phone: <Phone color={orange_3} />,
  email: <MailCheck color={orange_3} />,
  location: <MapPin color={blue_3} />,
  gender: <Info color={blue_3} />,
};

const SectionHeading = ({ title, children }) => (
  <div className="my-8">
    <h2 className="sub_heading">{title}</h2>
    {children}
  </div>
);

const PhotoAndSocials = ({ story_title }) => (
  <div className="grid grid-cols-[40%,60%] items-center mb-5">
    <div className="flex justify-center">
      <Image
        src={"/images/profile.png"}
        width={200}
        height={200}
        alt={"Pradipta's Profile Photo"}
      />
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-black text-xl md:text-4xl font-poppins-bold text-center">
        {story_title}
      </h1>
    </div>
  </div>
);

const Introduction = ({ name, about }) => (
  <div>
    <p
      className="info text-justify"
      dangerouslySetInnerHTML={{
        __html: `Greetings! I'm <span class="font-bold">${name}</span>, ${about}`,
      }}
    />
  </div>
);

const InterestsList = ({ interest }) => (
  <ul>
    {interest.list.map((item, index) => (
      <li key={index} className="info text-justify my-2 flex gap-3">
        <ChevronsRight size={15} color={blue_3} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PersonalInfoCard = ({ personalInfo }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-light_2 shadow-md rounded-lg p-4 my-2">
    {personalInfo.map((info, index) => (
      <div
        key={index}
        className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
      >
        {personalInfoIcons[info.key]}
        <div>
          <p className="text-sm font-medium text-gray-500">{info.label}</p>
          <p className="text-base font-semibold text-gray-800">{info.value}</p>
        </div>
      </div>
    ))}
  </div>
);

const About = () => {
  const {
    title,
    story_title,
    name,
    personal_info,
    about,
    current_activities,
    interest,
    my_hobbies,
    my_journey,
  } = aboutPageData;
  const { about: metaAbout, desc: metaDesc } = site_metadata;

  return (
    <section className="sm:max-w-3xl">
      {/* SEO Metadata */}
      <SeoMetadata title={metaAbout.title} desc={metaDesc} />

      {/* Page Title */}
      <PageTitle title={title} effect="blue" />

      {/* Photo and Socials Section */}
      <PhotoAndSocials story_title={story_title} />

      {/* Personal Info Card */}
      <SectionHeading title={personal_info.title}>
        <PersonalInfoCard personalInfo={personal_info.data} />
      </SectionHeading>


      {/* Introduction */}
      <Introduction name={name} about={about} />

      {/* Current Activities */}
      <SectionHeading title="📝 Now">
        <p className="info text-justify">{current_activities}</p>
      </SectionHeading>

      {/* Interests */}
      <SectionHeading title="🎈 What I'm Into">
        <p className="info text-justify">{interest.title}</p>
        <InterestsList interest={interest} />
      </SectionHeading>

      {/* Hobbies */}
      <SectionHeading title="🎯 Hobbies">
        <p className="info text-justify">{my_hobbies}</p>
      </SectionHeading>

      {/* Learning Journey */}
      <SectionHeading title="🚀 My Learning Journey">
        <p
          className="info text-justify"
          dangerouslySetInnerHTML={{
            __html: `${my_journey}`,
          }}
        />
      </SectionHeading>

      {/* Link to Skills Page */}
      <Link className="inline-block" href="/skills">
        <button className="btn_link" type="button">
          My Skills & Knowledge
          <MoveUpRight size={18} />
        </button>
      </Link>
    </section>
  );
};

export default About;
