import { PageTitle, ContactForm, SeoMetadata } from "@/components";
import { MailCheck } from "lucide-react";
import Link from "next/link";
import { contactPageData, site_metadata } from "@/constants";
import { FooterButton } from "@/components/shared/FooterButton";

const EmailSection = ({ emailTitle, email }) => (
  <ul className="flex gap-2 flex-wrap my-5">
    <li className="flex items-center gap-2">
      <MailCheck size={20} />
      <span>{emailTitle}</span>
      <Link
        href={`mailto:${email}`}
        className="alternative_contact"
        aria-label={`Send an email to ${email}`}
      >
        {email}
      </Link>
    </li>
  </ul>
);

const Contact = () => {
  const { title, intro, email_title, alternative } = contactPageData || {};
  const { contact } = site_metadata || {};

  return (
    <section className="sm:max-w-3xl">
      {/* SEO Metadata */}
      <SeoMetadata title={contact?.title} desc={contact?.desc} />

      {/* Page Title */}
      <PageTitle title={title} effect="blue" />

      {/* Introduction */}
      <p className="info text-justify">{intro}</p>

      {/* Email Section */}
      <EmailSection emailTitle={email_title} email={alternative?.email} />

      {/* Contact Form */}
      <ContactForm contactPageData={contactPageData} />

      {/* Link to the Home Page */}
      <FooterButton path="/" title="Back to Home" />
    </section>
  );
};

export default Contact;
