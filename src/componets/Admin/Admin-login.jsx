import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Admin-login.css";
import { Productcontext } from "../../Context";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { admin } = useContext(Productcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setAdmin = admin.find(
    (adm) => adm.email === email && adm.password === password
  );

  const hanleLogin = () => {
    if (setAdmin) {
      navigate("/ViewProduct");
    } else {
      alert("invalid details");
    }
  }; 

  return (
    <>
      <div className="login-main ">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="6">
              <div className="d-flex flex-row ps-5 pt-5">
                {/* <MDBimg  style={{ color: '#709085' }}/> */}
                <img
                  src={require("../../images/RedWood logo black.png")}
                  className="logo-img"
                  alt="logo-png"
                />
                <span className="h1 fw-bold mb-0"></span>
              </div>

              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>
                <form action=""  onSubmit={hanleLogin}>
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <MDBBtn
                  className="mb-4 px-5 mx-5 w-100"
                  color="info"
                  size="lg"
                 
                >
                  Login
                </MDBBtn>
                </form>
                <p className="small mb-5 pb-lg-3 ms-5">
                  <a class="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p className="ms-5">
                  Don't have an account?{" "}
                  <a href="#!" class="link-info">
                    Register here
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol sm="6" className="d-none d-sm-block px-0">
              <img
                src="https://www.ikea.com/ext/ingkadam/m/4ddfe585f78fe26e/original/PE840208-crop001.jpg?f=s"
                alt=""
                className="w-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
