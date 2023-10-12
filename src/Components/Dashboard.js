import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("/logout")
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  ggn">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
              >
                <span className="logoo">
                  <img src={logo}></img>
                </span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {/* <li>
								<Link to="/trainer"  className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
							</li> */}
                {/* <li>
								<Link to="/trainer" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Trainer</span> </Link>
							</li> */}

                <li>
                  <button
                    onClick={handleLogout}
                    className="nav-link px-0 align-middle text-white "
                  >
                    <h4>
					<FontAwesomeIcon icon={faPowerOff} />{" "}
                      <span className="ms-1 d-none d-sm-inline">Logout</span>
                    </h4>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-0 m-0">
            <div className="d-flex justify-content-center pb-2">
              <h2 className="gradient-heading pb-1">
                Teach Track: Faculty Management Suite
              </h2>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
