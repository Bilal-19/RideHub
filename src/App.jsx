import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing all the pages
import Home from "./Pages/Home";
import CarDetails from "./Pages/CarDetails";
import DriverList from "./Pages/DriverList";
import PricingAndOperatingHours from "./Pages/Pricing";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/car/details" Component={CarDetails} />
          <Route path="/driver/list" Component={DriverList} />
          <Route path="/pricing" Component={PricingAndOperatingHours} />
          <Route path="/contact/us" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
