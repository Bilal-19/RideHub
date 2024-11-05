import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark-cyan">
            <div className="container-fluid">
              <Link className="navbar-brand text-light mx-3" to="/">
                <img
                  src="../company_logo.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                  className="company-logo"
                />
              </Link>
              <button
                className="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/car/details"
                    >
                      Cars
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/driver/list"
                    >
                      Drivers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/pricing"
                    >
                      Pricing & Operating Hours
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link active text-light"
                      aria-current="page"
                      to="/contact/us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
