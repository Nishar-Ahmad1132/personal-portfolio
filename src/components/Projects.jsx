import React, { useState } from "react";
import { FaGithub } from "react-icons/fa"; // Importing the GitHub icon
import "./Projects.css";
import proj1 from "../assets/webD1.jpg";
import proj2 from "../assets/webD2.jpg";
import proj3 from "../assets/projectImage.jpg";
import proj4 from "../assets/appD.jpg";
import lockboot from "../assets/lockboot.png";

// Sample project data with different categories
const projects = [
  {
    name: "Portfolio Website",
    image: proj1,
    description: "Built a portfolio website to showcase projects and blogs.",
    category: "Web Development",
    rating: "4.7/5",
    date: "05 March, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
  {
    name: "Ahmad's Blog",
    image: proj2,
    description: "Developed a full-featured blog website using the MERN stack.",
    category: "Web Development",
    rating: "4.5/5",
    date: "08 June, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
  {
    name: "Chatbot App",
    image: proj4,
    description: "Flutter-based chatbot app using the OpenAI API.",
    category: "App",
    rating: "3.5/5",
    date: "29 May, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
  {
    name: "lockbot",
    image: lockboot,
    description: "An innovative way to invest in digital media.",
    category: "App",
    rating: "4.5/5",
    date: "13 May, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
  {
    name: "Expense Tracker",
    image: proj4,
    description: "Track daily expenses with a good UI/UX experience.",
    category: "App",
    rating: "4.1/5",
    date: "10 July, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
  {
    name: "E-Commerce Platform",
    image: proj3,
    description:
      "E-commerce website using React, Node.js, and Stripe integration.",
    category: "Web Development",
    rating: "4.2/5",
    date: "01 February, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
  {
    name: "Social Media App",
    image: proj4,
    description: "Mobile app allowing users to connect and share posts.",
    category: "App",
    rating: "4.3/5",
    date: "15 June, 2024",
    creator: "Nishar Ahmad",
    link: "https://github.com/Nishar-Ahmad1132/ahmad-blog",
  },
];

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("Latest Projects");

  // Function to filter projects based on the selected tab
  const filteredProjects = projects.filter((project) => {
    if (selectedTab === "Latest Projects") return true; // Show all for "Latest Projects"
    if (selectedTab === "Apps Projects") return project.category === "App";
    if (selectedTab === "Web Projects")
      return project.category === "Web Development";
    return true;
  });

  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        {/* Tabs */}
        <div className="tabs">
          {["Latest Projects", "Apps Projects", "Web Projects"].map(
            (tab, index) => (
              <button
                key={index}
                className={`tab-button ${selectedTab === tab ? "active" : ""}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.image} alt={project.name} />
              <div className="project-info">
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-name">{project.name}</div>
              <div className="project-footer">
                <div className="project-rating">⭐{project.rating}</div>
                <div className="project-date">{project.date}</div>
              </div>
              <div className="project-overlay">
                <div className="project-details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="source-code">
                    <p>Click below to see the source code of the project.</p>
                    <a
                      className="view-more"
                      href={project.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                  <p>Created by: {project.creator}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
