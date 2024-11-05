import React from "react";

export default function DriverComponent(props) {
  return (
    <>
     <div className="col-md-3 body-text">
      <div className="driver-card">
        <img
          src={props.data.driverProfilePic}
          alt=""
          className="img-fluid driver-profile-img"
        />
        <b className="mb-0 text-center">{props.data.driverName}</b>

          <p className="mb-0"><b>Experience:</b> {props.data.yearsOfExperience}+ years</p>
          <p className="mb-0"><b>Rating:</b> {props.data.driverRating} / 5</p>

        <p className="mb-0">
         {props.data.driverBio}
        </p>
      </div>
      </div>
    </>
  );
}
