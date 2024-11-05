import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function PricingAndOperatingHours() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h3 className="heading-h3 text-dark-cyan">Pricing</h3>
            <table className="table table-bordered table-striped text-dark-cyan body-text">
              <tr>
                <th>Base Fare:</th>
                <td>$3.00</td>
              </tr>
              <tr>
                <th>Price Per Mile:</th>
                <td>$2.50</td>
              </tr>
              <tr>
                <th>Waiting Charges:</th>
                <td>$0.50 per minute</td>
              </tr>
              <tr>
                <th>Night Fare (10PM - 6AM):</th>
                <td>Additional 20% surcharge</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-8 mx-auto">
            <h3 className="text-dark-cyan heading-h3">Operating Hours</h3>
            <table className="table table-bordered table-striped text-dark-cyan body-text">
              <tr>
                <th>Monday to Friday:</th>
                <td>6:00 AM - 11:00 PM</td>
              </tr>

              <tr>
                <th>Saturday:</th>
                <td>8:00 AM - 12:00 AM</td>
              </tr>

              <tr>
                <th>Sunday:</th>
                <td>8:00 AM - 10:00 PM</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
