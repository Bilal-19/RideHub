import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid bg-dark-cyan mt-5">
          <div className="row">
            <div className="col-md-8 px-5 pt-4">
              <h3 className="text-light mx-5">
                <img
                  src="../company_logo.png"
                  alt=""
                  className="mx-3 company-logo"
                />
              </h3>
            </div>
            <div className="col-md-4 px-5 pt-5">
              <Link
                className="text-decoration-none text-light"
                to="https://www.facebook.com"
                target="_blank"
              >
                <i className="fa-brands social-icons fa-facebook"></i>
              </Link>
              <Link
                className="text-decoration-none text-light"
                to="https://www.instagram.com"
                target="_blank"
              >
                <i class="fa-brands social-icons fa-instagram"></i>
              </Link>
              <Link
                className="text-decoration-none text-light"
                to="https://www.linkedin.com"
                target="_blank"
              >
                <i class="fa-brands social-icons fa-linkedin"></i>
              </Link>
              <Link
                className="text-decoration-none text-light"
                to="https://twitter.com/?lang=en"
                target="_blank"
              >
                <i class="fa-brands social-icons fa-twitter"></i>
              </Link>
              <Link
                className="text-decoration-none text-light"
                to="https://www.youtube.com"
                target="_blank"
              >
                <i class="fa-brands social-icons fa-youtube"></i>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mx-auto">
              <hr className="bg-light" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 mx-auto text-light d-flex flex-row justify-content-between align-items-center">
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p className="text-center text-light">
                &copy; 2024 RideHub. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
