export default function CarComponent(props) {
  console.log(props);
  return (
    <>
      <div className="col-md-3 mt-4 body-text">
        <div className="car-card">
          <img
            src={props.data.imgAdd}
            alt="..."
            className="card-img-top border"
          />

          <h4>{props.data.modelName}</h4>

          <div className="d-flex justify-content-between mb-0">
            <p className="mb-0">
              <i className="fa-solid fa-gauge-high"></i> {props.data.fuelAvg}
            </p>
            <p className="mt-0">
              <i className="fa-solid fa-money-bills"></i>{" "}
              {props.data.ridePerMile} / mile
            </p>
          </div>

          <button
            className={`mt-0 btn ${
              props.data.availabilityStatus == true
                ? "btn-success"
                : "btn-danger"
            } btn-sm status`}
          >
            {props.data.availabilityStatus == true
              ? "Available"
              : "Not Available"}
          </button>
        </div>
      </div>
    </>
  );
}
