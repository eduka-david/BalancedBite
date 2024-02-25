import React from "react";
import instagram from "../image/instagram.png";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p className="mb-4">Have questions or want to reach out?</p>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2-1a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"
                clipRule="evenodd"
              />
              <path d="M2 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2-1a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm5 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            </svg>
            <p>Email: eduka_david@yahoo.com</p>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12.5a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 002 0V7.5a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p>Phone: +65 84587442</p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex items-center mb-4">
            <a
              href="https://twitter.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src="/twitter-logo.png" alt="Twitter" className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/ddd_david_ddd/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src={instagram} alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook-logo.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
