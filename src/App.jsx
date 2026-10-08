import React, { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Ganpati Cinematic",
    category: "Cinematic Edit",
    video: "/Video1.mp4",
    featured: true,
  },
  {
    title: "Cinematic Story",
    category: "Video Editing",
    video: "/Video2.mp4",
  },
  {
    title: "Creative Film",
    category: "Cinematic Edit",
    video: "/video3.mp4",
  },
  {
    title: "Wedding Moments",
    category: "Wedding Cinematic",
    video: "/Video4.mp4",
  },
  {
    title: "Visual Story",
    category: "Creative Video",
    video: "/Video5.mp4",
  },
  {
    title: "Latest Project",
    category: "Cinematic Video",
    video: "/Video6.mp4",
  },
];

const services = [
  {
    number: "01",
    title: "Cinematic Editing",
    description:
      "Professional editing with strong storytelling, smooth pacing and cinematic visuals.",
  },
  {
    number: "02",
    title: "Wedding Films",
    description:
      "Emotional wedding films that turn your special moments into timeless stories.",
  },
  {
    number: "03",
    title: "Color Grading",
    description:
      "Professional color correction and cinematic grading for a premium visual look.",
  },
  {
    number: "04",
    title: "Reels & Shorts",
    description:
      "Engaging short-form content designed for Instagram, YouTube and social media.",
  },
  {
    number: "05",
    title: "Music Videos",
    description:
      "Creative music video editing with rhythm, transitions and visual storytelling.",
  },
  {
    number: "06",
    title: "Brand Videos",
    description:
      "Modern promotional videos that help brands communicate their story effectively.",
  },
];

const testimonials = [
  {
    name: "Wedding Client",
    role: "Wedding Project",
    text:
      "The final video looked amazing. The editing, music and transitions made the whole story feel cinematic.",
  },
  {
    name: "Content Creator",
    role: "Social Media Project",
    text:
      "Very creative editing and excellent attention to detail. The final result was exactly what I wanted.",
  },
  {
    name: "Brand Client",
    role: "Brand Video",
    text:
      "Professional work from start to finish. The video gave our brand a much more premium look.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("/Video1.mp4");
  const [soundOn, setSoundOn] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const openVideo = (video) => {
    setSelectedVideo(video);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="cinematic-app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div
          className="brand"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.jpg"
            alt="Cinematic_021 Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <h2>Cinematic_021</h2>

            <span>
              CINEMATIC VIDEO EDITOR
            </span>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </button>

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("testimonials")}>
            Testimonials
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </nav>

        <button
          className="navbar-cta"
          onClick={() => scrollToSection("contact")}
        >
          Start a Project →
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="hero"
      >

        <video
          className="hero-video"
          autoPlay
          muted={!soundOn}
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/Video1.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">
            CINEMATIC VIDEO EDITOR
          </p>

          <h1>
            YOUR MOMENTS.
            <br />

            <span>
              OUR CINEMATIC STORY.
            </span>
          </h1>

          <p className="hero-description">
            Professional cinematic video editing for
            weddings, brands, music, travel and social
            media. Turning your footage into stories
            people remember.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() =>
                scrollToSection("portfolio")
              }
            >
              View My Work →
            </button>

            <button
              className="outline-button"
              onClick={() =>
                scrollToSection("contact")
              }
            >
              Let's Create →
            </button>

          </div>

          <div className="social-links">

            <a
              href="https://www.instagram.com/cinematic.sd_021/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919356330402"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="mailto:Shubhamdolas021@gmail.com">
              Email
            </a>

          </div>

        </div>


        {/* SHOWREEL */}

        <button
          className="showreel-button"
          onClick={() => openVideo("/Video1.mp4")}
        >
          <span className="play-icon">
            ▶
          </span>

          <span className="showreel-text">
            PLAY SHOWREEL
          </span>
        </button>


        {/* SOUND */}

        <button
          className="sound-button"
          onClick={() => setSoundOn(!soundOn)}
        >
          {soundOn ? "🔊 Sound On" : "🔇 Sound Off"}
        </button>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stat-item">
          <strong>100+</strong>
          <span>Projects</span>
        </div>

        <div className="stat-item">
          <strong>50+</strong>
          <span>Clients</span>
        </div>

        <div className="stat-item">
          <strong>5+</strong>
          <span>Years Experience</span>
        </div>

        <div className="stat-item">
          <strong>1M+</strong>
          <span>Views</span>
        </div>

      </section>


      {/* ================= LATEST CREATIONS ================= */}

      <section
        id="portfolio"
        className="section portfolio-section"
      >

        <div className="section-heading">

          <div>

            <p>
              SELECTED WORK
            </p>

            <h2>
              Latest{" "}
              <span>
                Creations
              </span>
            </h2>

          </div>

          <button
            onClick={() => openVideo("/Video1.mp4")}
          >
            View Showreel →
          </button>

        </div>


        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={index}
              onClick={() =>
                openVideo(project.video)
              }
            >

              <div className="project-image">

                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"

                  onMouseEnter={(event) => {
                    event.currentTarget
                      .play()
                      .catch(() => {});
                  }}

                  onMouseLeave={(event) => {
                    event.currentTarget.pause();

                    event.currentTarget.currentTime = 0;
                  }}
                />

                <div className="project-overlay">

                  <div className="project-play">
                    ▶
                  </div>

                </div>


                {project.featured && (
                  <div className="featured-label">
                    LATEST
                  </div>
                )}

              </div>


              <div className="project-info">

                <div>

                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                </div>

                <p>
                  {project.category}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>



    {/* ================= SERVICES ================= */}

<section
  id="services"
  className="services-section"
>
  <div className="services-container">

    {/* HEADER */}

    <div className="services-header">

      <div className="services-heading">

        <div className="section-label">
          <span></span>
          WHAT I DO
        </div>

        <h2>
          Visuals that
          <br />
          <span>tell your story.</span>
        </h2>

      </div>

      <div className="services-intro">

        <p>
          From raw footage to polished cinematic
          stories, every frame is carefully crafted
          to create an experience your audience
          remembers.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="services-cta"
        >
          Discuss Your Project
          <span>↗</span>
        </button>

      </div>

    </div>


    {/* SERVICES GRID */}

    <div className="professional-services-grid">

      {services.map((service, index) => (

        <article
          className={`professional-service-card ${
            index === 0 ? "service-featured" : ""
          }`}
          key={index}
        >

          <div className="service-top">

            <span className="service-index">
              {service.number}
            </span>

            <span className="service-arrow">
              ↗
            </span>

          </div>


          <div className="service-content">

            <div className="service-icon-box">

              {index === 0 && "✦"}
              {index === 1 && "◇"}
              {index === 2 && "◐"}
              {index === 3 && "▣"}
              {index === 4 && "♫"}
              {index === 5 && "▱"}

            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </div>


          <div className="service-bottom">

            <span>
              CINEMATIC_021
            </span>

            <span>
              0{index + 1}
            </span>

          </div>

        </article>

      ))}

    </div>


    {/* BOTTOM MESSAGE */}

    <div className="services-bottom">

      <span>
        AVAILABLE FOR SELECT PROJECTS
      </span>

      <div className="availability-line"></div>

      <span>
        INDIA · WORLDWIDE
      </span>

    </div>

  </div>
</section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="about-video">

          <video
            src="/Video2.mp4"
            muted
            loop
            autoPlay
            playsInline
          />

          <div className="about-video-label">
            CINEMATIC_021
          </div>

        </div>


        <div className="about-content">

          <p className="eyebrow">
            ABOUT THE EDITOR
          </p>

          <h2>
            Creating Stories
            <br />
            <span>Beyond Frames.</span>
          </h2>

          <p>
            Cinematic_021 is focused on transforming
            ordinary footage into visually powerful
            stories through professional editing,
            creative transitions and cinematic color.
          </p>

          <p>
            Every project is approached with attention
            to emotion, rhythm and detail — creating
            videos that connect with the audience.
          </p>


          <div className="about-stats">

            <div>
              <strong>100+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Clients</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Experience</span>
            </div>

          </div>


          <button
            className="primary-button"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Start a Project →
          </button>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}

      <section
        id="testimonials"
        className="section testimonials-section"
      >

        <div className="center-heading">

          <p>
            CLIENT FEEDBACK
          </p>

          <h2>
            What Clients{" "}
            <span>
              Say
            </span>
          </h2>

        </div>


        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <div className="quote">
                "
              </div>

              <p>
                {item.text}
              </p>

              <div className="testimonial-bottom">

                <div>
                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    {item.role}
                  </span>
                </div>

                <div className="stars">
                  ★★★★★
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-bg"></div>

        <div className="contact-content">

          <p className="eyebrow">
            LET'S CREATE
          </p>

          <h2>
            Have a Project
            <br />
            <span>In Mind?</span>
          </h2>

          <p>
            Tell me about your project and let's
            create something cinematic together.
          </p>


          <div className="contact-buttons">

            <a
              href="https://wa.me/919356330402?text=Hello%20Cinematic_021%2C%20I%20want%20to%20discuss%20a%20video%20editing%20project."
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Start a Project →
            </a>

            <a
              href="mailto:Shubhamdolas021@gmail.com"
              className="outline-button"
            >
              Send Email →
            </a>

          </div>


          <div className="contact-details">

            <a href="tel:+919356330402">
              +91 9356330402
            </a>

            <a href="mailto:Shubhamdolas021@gmail.com">
              Shubhamdolas021@gmail.com
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <img
            src="/logo.jpg"
            alt="Cinematic_021"
          />

          <div>
            <h3>
              Cinematic_021
            </h3>

            <span>
              CINEMATIC VIDEO EDITOR
            </span>
          </div>

        </div>


        <div className="footer-social">

          <a
            href="https://www.instagram.com/cinematic.sd_021/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/919356330402"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a href="mailto:Shubhamdolas021@gmail.com">
            Email
          </a>

        </div>


        <p>
          © 2026 Cinematic_021
        </p>

      </footer>


      {/* ================= VIDEO MODAL ================= */}

      {showVideo && (

        <div
          className="video-modal"
          onClick={closeVideo}
        >

          <button
            className="close-video"
            onClick={closeVideo}
          >
            ×
          </button>


          <div
            className="modal-video-container"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <video
              className="video-player"
              controls
              autoPlay
              playsInline
            >

              <source
                src={selectedVideo}
                type="video/mp4"
              />

              Your browser does not support video.

            </video>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;