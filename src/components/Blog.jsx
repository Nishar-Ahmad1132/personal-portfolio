import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Blog.css";
import blog1 from "../assets/img2.jpg";
import blog2 from "../assets/projectImage.jpg";

const blogs = [
  {
    title: "Back-End Development",
    description:
      "Elevate your coding game with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog1,
    date: "3 Jun, 2024",
    category: "Software Development",
    author: "James Field",
  },
  {
    title: "Front-End Development",
    description:
      "Elevate your coding game with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog2,
    date: "29 May, 2024",
    category: "Software Development",
    author: "James Field",
  },
  {
    title: "Responsive UX/UI Design",
    description:
      "Elevate your website design with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog1,
    date: "12 May, 2024",
    category: "Software Development",
    author: "James Field",
  },
  {
    title: "Back-End Development",
    description:
      "Elevate your coding game with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog1,
    date: "3 Jun, 2024",
    category: "Software Development",
    author: "James Field",
  },
  {
    title: "Front-End Development",
    description:
      "Elevate your coding game with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog2,
    date: "29 May, 2024",
    category: "Software Development",
    author: "James Field",
  },
  {
    title: "Responsive UX/UI Design",
    description:
      "Elevate your website design with our 30-day program. Daily challenges and exercises to boost your skills fast!",
    image: blog1,
    date: "12 May, 2024",
    category: "Software Development",
    author: "James Field",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <h2>Blogs</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            const allSlides = document.querySelectorAll(".swiper-slide");
            allSlides.forEach((slide) => {
              slide.classList.remove("swiper-slide-active-scale");
            });
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide)
              activeSlide.classList.add("swiper-slide-active-scale");
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="blog-item">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-details">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <div className="blog-meta">
                    <p>
                      Published {blog.date} | Category: {blog.category}
                    </p>
                    <p>By {blog.author}</p>
                  </div>
                  <button className="blog-btn">Details</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
