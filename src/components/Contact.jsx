import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <p className="section-label fade-up">Get In Touch</p>
        <h2 className="section-title fade-up">Contact</h2>
        <div className="contact-info fade-up">
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              lineHeight: "1.75",
              marginBottom: "2rem",
              maxWidth: "520px",
            }}
          >
            I'm currently open to full-time roles and freelance projects.
            Whether you have a question or just want to say hi, my inbox is
            always open!
          </p>
          <a href="mailto:shrwnkumar08@gmail.com" className="contact-item">
            <div className="contact-icon">📧</div>shrwnkumar08@gmail.com
          </a>
          <a href="tel:+918477027827" className="contact-item">
            <div className="contact-icon">📱</div>+91 84770 27827
          </a>
          <a
            href="https://github.com/shrwn08"
            className="contact-item"
            target="_blank"
          >
            <div className="contact-icon">⬡</div>github.com/shrwn08
          </a>
          <a
            href="http://linkedin.com/in/shrwn08/"
            className="contact-item"
            target="_blank"
          >
            <div className="contact-icon">in</div>linkedin.com/in/shrwn08
          </a>
          <div className="contact-item">
            <div className="contact-icon">📍</div>Rudrapur, Uttarakhand, India
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
