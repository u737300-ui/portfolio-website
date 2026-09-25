import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const hasContactDestination = Boolean(
    config.contact.email ||
    config.contact.github ||
    config.contact.linkedin ||
    config.contact.instagram ||
    config.contact.whatsapp ||
    config.contact.twitter
  );

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    // Animate title from bottom
    contactTimeline.fromTo(
      ".contact-section h3",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animate contact boxes with stagger from bottom
    contactTimeline.fromTo(
      ".contact-box",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Clean up
    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's build something useful.</h3>
        <p className="contact-intro">
          Have a project, business system, or website in mind? I'm open to
          discussing practical software and interactive web projects.
        </p>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Start a conversation</h4>
            <p>Share what you are working on and what would make it useful.</p>
          </div>
          <div className="contact-box">
            <h4>Contact</h4>
            {config.contact.email && <a
              href={`mailto:${config.contact.email}`}
              data-cursor="disable"
              className="contact-social"
            >
              Get in touch <MdArrowOutward />
            </a>}
            {!hasContactDestination && <div className="contact-empty-state">
              <span>Get in touch</span>
              <p>Contact details will appear here when a verified destination is available.</p>
            </div>}
            {config.contact.github && <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>}
            {config.contact.linkedin && <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn profile for Arslan Kharal"
            >
              <FaLinkedinIn aria-hidden="true" /> LinkedIn <MdArrowOutward aria-hidden="true" />
            </a>}
            {config.contact.whatsapp && <a
              href={config.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Contact Arslan Kharal on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" /> WhatsApp <MdArrowOutward aria-hidden="true" />
            </a>}
            {config.contact.twitter && <a
              href={config.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>}
            {config.contact.instagram && <a
              href={config.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="Instagram profile for Arslan Kharal"
            >
              <FaInstagram aria-hidden="true" /> Instagram <MdArrowOutward aria-hidden="true" />
            </a>}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{config.developer.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
