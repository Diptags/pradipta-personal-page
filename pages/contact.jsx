import { PageTitle, ContactForm, SeoMetadata } from "@/components";
import {
  Github,
  Gitlab,
  Linkedin,
  Instagram,
  MailCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contactPageData, site_metadata } from "@/constants";

const socialIcons = {
  Linkedin: <Linkedin />,
  Instagram: <Instagram />,
  Github: <Github />,
  Gitlab: <Gitlab />,
};

const Contact = () => {
  const { title, intro, email_title, socials, alternative } = contactPageData || {};
  const { contact } = site_metadata || {};

  return (
    <section className="sm:max-w-3xl">
      <SeoMetadata title={contact?.title} desc={contact?.desc} />
      <PageTitle title={title} effect="blue" />
      <p className="info text-justify">{intro}</p>

      {/* Email Address */}
      <ul className="flex gap-2 flex-wrap mt-8 mb-6">
        <li className="flex items-center gap-2">
          <MailCheck size={20} />
          <span>{email_title}</span>
          <Link
            href="mailto:pradipta.samiadji@gmail.com"
            className="alternative_contact"
          >
            {alternative?.email}
          </Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <ul className="flex gap-2 my-4">
        {socials?.map((platform) => (
          <li key={platform.id} className="social_icon">
            <Link href={platform.link} target="_blank">
              {socialIcons[platform.name] || <Github />}
            </Link>
          </li>
        ))}
      </ul>

      {/* TODO: Integrate Contact Form With Database */}
      <div className="my-10 md:flex md:gap-4 md:justify-between md:items-end">
        <ContactForm contactPageData={contactPageData} />
        <div>
          <Image
            src="/images/get-in-touch.png"
            width={300}
            height={150}
            alt="Get in touch"
            className="w-full dark:hidden"
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;
