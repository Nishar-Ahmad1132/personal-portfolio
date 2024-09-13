import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast} from "react-toastify";
import "./Contact.css";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4gsf7e5",
        "template_imkj20g",
        formData,
        "aU7ahcaqW3Gg7kx3i"
      )
      .then((response) => {
        toast.success("Message sent successfully! Thanks for contacting us", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({ from_name: "", email_id: "", message: "" });
      })
      .catch((error) => {
        toast.error("Error sending message. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email_id"
              placeholder="Email"
              value={formData.email_id}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
