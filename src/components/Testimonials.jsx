import React from "react";
import "./Testimonials.css";
import photo from "../assets/Aa8.jpg"

const testimonialsData = [
  {
    text: "Ahmad is a great developer!Ahmad is a great developer!Ahmad is a great developer!",
    name: "Client Name",
    photo: photo,
  },
  {
    text: "Fantastic work on the project!",
    name: "Another Client",
    photo: photo,
  },
  {
    text: "Highly recommend Ahmad for any development needs!",
    name: "Satisfied Client",
    photo: photo,
  },
  {
    text: "Ahmad is a great developer!",
    name: "Client Name",
    photo: photo,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-photo">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}'s testimonial`}
              />
            </div>
            <div className="testimonial-text">
              <p>{`"${testimonial.text}"`}</p>
              <h4>{`- ${testimonial.name}`}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;