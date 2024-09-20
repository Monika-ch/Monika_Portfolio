import React from "react";
import GoogleForm from '../components/GoogleForm'
import "../styled-components/ContactPage.css"

const ContactPage = () => {
  return (
    <div id="contact" className="contact-page">
      <div className="contact-page-text-wrapper">
        <p>
          Got an exciting <span className="highlight-text">job opportunity</span>? I’d love to hear about it!
        </p>
        <p>
          <span className="highlight-text">Let’s say "hi"</span> and get to know each other, <span className="highlight-text-orange">or</span> feel free to <span className="highlight-text">share your thoughts on my portfolio</span>!
        </p>
      </div>

      <GoogleForm />
    </div>
  )
}
export default ContactPage;
