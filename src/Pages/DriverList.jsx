import DriverComponent from "../Components/DriverComponent";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import driverData from "../Data/driverData";

export default function DriverList() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3">
            <h4 className="text-dark-cyan text-center heading-h3">
              Professional Drivers at Your Service
            </h4>
            <p className="text-dark-cyan body-text">
              At Ride Hub, we take pride in our team of professional and
              highly-rated drivers. Each driver is carefully selected for their
              experience, reliability, and commitment to providing a safe and
              comfortable journey. Learn more about our drivers and what makes
              them the best choice for your ride.
            </p>
          </div>
        </div>
        <div className="row">
          {driverData.map((item) => (
            <>
              <DriverComponent data={item} />
            </>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
