import { PageTitle, ContactForm, SeoMetadata } from "@/components";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MailCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contactPageData, site_metadata } from "@/constants";

const socialIcons = {
  Twitter: <Twitter />,
  Linkedin: <Linkedin />,
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  Github: <Github />,
};

const Contact = () => {
  const { title, intro, socials, alternative } = contactPageData || {};
  const { contact } = site_metadata || {};

  return (
    <section className="sm:max-w-3xl">
      <SeoMetadata title={contact?.title} desc={contact?.desc} />
      <PageTitle title={title} effect="purple" />
      <p className="info">{intro}</p>

      <ul className="flex gap-2 my-4">
        {socials?.map((platform) => (
          <li key={platform.id} className="social_icon">
            <Link href={platform.link} target="_blank">
              {socialIcons[platform.name] || <Github />}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex gap-2 flex-wrap mb-6">
        <li className="flex items-center gap-2">
          <MailCheck size={18} />
          <span>My Email:</span>
          <Link
            href="mailto:pradipta.samiadji@gmail.com"
            className="alternative_contact"
          >
            {alternative?.email}
          </Link>
        </li>
      </ul>

      <div className="my-10 md:flex md:gap-4 md:justify-between md:items-end">
        <ContactForm contactPageData={contactPageData} />
        <div className="mt-10 md:mt-0 md:flex md:flex-col md:justify-between">
          <Image
            src="/images/get-in-touch.svg"
            width={1000}
            height={500}
            alt="Get in touch"
            className="w-full dark:hidden"
          />
          <Image
            src="/images/get-in-touch-dark.svg"
            width={1000}
            height={500}
            alt="Get in touch"
            className="w-full hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
