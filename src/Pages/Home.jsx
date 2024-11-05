import CountUp from "react-countup";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row" id="home-banner">
          <div className="col-md-12 px-5 pt-3">
            <h2 className="text-light heading-h1">
              Effortless Rides, Exceptional Service
            </h2>
            <p className="text-light col-md-5 body-text">
              Welcome to RideHub - your trusted partner for reliable,
              comfortable, and efficient car taxi services. At RideHub, we
              prioritize your journey with a fleet of well-maintained vehicles
              and professional drivers ready to meet your travel needs. Whether
              you're commuting across town or heading to a special event, our
              commitment to safety, punctuality, and affordability ensures a
              seamless ride every time.
            </p>

            <Link
              className="brand-btn cta-style nav-link"
              aria-current="page"
              to="/car/details"
            >
              Explore Our Fleet
            </Link>
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-md-3 mx-auto">
            <i class="fa-solid fa-users text-dark-cyan"></i>
            <h4 className="text-dark-cyan body-text">
              <CountUp end={5000} duration={5} />+ Passengers
            </h4>
          </div>
          <div className="col-md-3 mx-auto">
            <i class="fa-solid fa-taxi text-dark-cyan"></i>
            <h4 className="text-dark-cyan body-text">
              <CountUp end={20} duration={5} />+ Luxury Cars
            </h4>
          </div>
          <div className="col-md-3 mx-auto">
            <i class="fa-solid fa-users text-dark-cyan"></i>
            <h4 className="text-dark-cyan body-text">
              <CountUp end={20} duration={5} />+ Drivers
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 p-5">
            <img
              src="https://images.unsplash.com/photo-1617724054780-ef6bd6b21e17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img-fluid owner-img shadow"
            />
          </div>
          <div className="col-md-8 p-5 mt-5">
            <h3 className="text-dark-cyan heading-h3">Our CEO Message</h3>
            <p className="text-justify text-dark-cyan body-text">
              Welcome to RideHub! It's an honor to have you consider us for your
              travel needs. At RideHub, we believe that each journey should be
              as comfortable and safe as the destination is rewarding. Our team
              is dedicated to providing top-notch service, transparency, and
              convenience in every mile. We're here to simplify your travel with
              a fleet of reliable vehicles and professional drivers who share
              our commitment to excellence. Thank you for trusting us to get you
              where you need to go - we're excited to be a part of your journey.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
