import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CarComponent from "../Components/CarComponent";
import carData from "../Data/car";
export default function CarDetails() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3">
            <h4 className="text-dark-cyan text-center heading-h3">
              Explore Our Premium Car Collection
            </h4>
            <p className="text-dark-cyan body-text">
              Welcome to Ride Hub, your trusted partner for reliable and stylish
              car rentals. Explore our diverse fleet of well-maintained vehicles
              that cater to every journey, whether for a weekend getaway, a
              business trip, or daily commuting. Check the availability and book
              your ride with ease!
            </p>
          </div>
        </div>
        <div className="row">
          {carData.map((item) => (
            <CarComponent data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
