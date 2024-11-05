import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row body-text mt-5">
          <div className="col-md-5 mb-sm-40">
          <h3 className="heading-h3 text-dark-cyan mt-5">Contact Us</h3>
            <p>
              Have questions or need assistance? We're here to help! Fill out
              the form and our friendly team will get back to you as soon as
              possible. At RideHub, your satisfaction and seamless travel
              experience are our priorities.
            </p>
            <h4 className="text-uppercase text-dark-cyan fw-bold mt-5">Contact Information</h4>
            <p className="mb-0"><i class="contact-icon fa-solid fa-phone"></i> 1 (123) 456-7890</p>
            <p className="mb-0"><i class="contact-icon fa-solid fa-envelope"></i> support@ridehub.com</p>
            <p className="mb-0"><i class="contact-icon fa-solid fa-location-dot"></i> 123 Main Street, City, State, ZIP</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <label htmlFor="" className="form-label mb-0">
              Full Name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Enter your full name"
            />

            <label htmlFor="" className="form-label mb-0 mt-3">
              Email Address:{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="emailAddress"
              placeholder="Enter your email address"
            />

            <label htmlFor="" className="form-label mb-0 mt-3">
              Phone Number:{" "}
            </label>
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter your phone number"
            />

            <label htmlFor="" className="form-label mb-0 mt-3">
              Message:{" "}
            </label>
            <textarea
              name="message"
              id=""
              className="form-control"
              rows="5"
              style={{ resize: "none" }}
              placeholder="Write your message here..."
            ></textarea>

            <label htmlFor="" className="form-label mb-0 mt-3">
              How would you like us to contact you?{" "}
            </label>
            <select name="contactPreference" className="form-select">
              <option value="Email">Email</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Text Message">Text Message</option>
            </select>

            <label htmlFor="" className="form-label mb-0 mt-3">
              Reason for Contact{" "}
            </label>
            <select name="contactPreference" className="form-select">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Booking Request">Booking Request</option>
              <option value="Feedback">Feedback</option>
              <option value="Complaint">Complaint</option>
              <option value="Other">Other</option>
            </select>

            <button className="contact-us-btn"><i class="fa-solid fa-paper-plane"></i> Send Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
