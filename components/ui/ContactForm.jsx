import React from "react";
import { MoveUpRight } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import ClipLoader from "react-spinners/ClipLoader";

export const ContactForm = ({ contactPageData }) => {
  const { formData, handleChange, handleSubmit, isSending } =
    useContact();

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="sub_heading mr-2">
        <span>{contactPageData?.form_title}</span>
      </h2>
      <div className="mt-6 my-2">
        <label className="" htmlFor="">
          Name
        </label>
        <input
          className="form_input"
          placeholder="Your Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData?.name}
        />
      </div>
      <div className="my-2">
        <label className="" htmlFor="">
          Email
        </label>
        <input
          className="form_input"
          placeholder="Your Email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formData?.email}
        />
      </div>
      <div className="my-2">
        <label className="" htmlFor="">
          Message
        </label>
        <textarea
          placeholder="What's on your mind?"
          className="form_input resize-none"
          rows="8"
          cols="40"
          name="message"
          onChange={handleChange}
          value={formData?.message}
        ></textarea>
      </div>
      <button className="send_btn group mb-8" type="submit" disabled={isSending}>
        <ClipLoader
          color="#f8f8f8"
          loading={isSending}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {isSending ? "Sending .." : "Send Message"}
        <span className="transition duration-500 group-hover:scale-125">
          <MoveUpRight size={17} />
        </span>
      </button>
    </form>
  );
};
