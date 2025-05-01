import { PageTitle, ContactForm, SeoMetadata } from "@/components";
import {
  MailCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contactPageData, site_metadata } from "@/constants";

const Contact = () => {
  const { title, intro, email_title, alternative } = contactPageData || {};
  const { contact } = site_metadata || {};

  return (
    <section className="sm:max-w-3xl">
      <SeoMetadata title={contact?.title} desc={contact?.desc} />
      <PageTitle title={title} effect="blue" />
      <p className="info text-justify">{intro}</p>

      {/* Email Address */}
      <ul className="flex gap-2 flex-wrap my-5">
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

      {/* TODO: Integrate Contact Form With Database */}
      <div className="md:flex md:gap-4 md:justify-between md:items-end">
        <ContactForm contactPageData={contactPageData} />
        <div className="hidden md:block">
          <Image
            src="/images/get-in-touch.png"
            width={300}
            height={150}
            alt="Get in touch"
            className="w-full"
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;
