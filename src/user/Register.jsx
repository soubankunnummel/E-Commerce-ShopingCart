import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Productcontext } from "../Context";

export default function Register() {
  const { user, setUser } = useContext(Productcontext);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const name = e.target.elements.form1.value;
    const email = e.target.elements.form2.value;
    const password = e.target.elements.form3.value;
    const repetpassword = e.target.elements.form4.value;

    // input validation 
    // if (!name || !email || !password || !repetpassword) {
    //   alert("Please fill in all fields");
    //   return; 
    // }

    const emailValid = user.filter((item) => item.email === email);
    if (emailValid.length !== 0) {
      alert("Email already exists");
      return; // Do not proceed with registration
    }

    // Validation passed, proceed with registration
    setUser(() => [...user, { name, email, password, repetpassword }]);
    e.target.reset();
    console.log(user);
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard
        className="mt-5"
        style={{ height: "500px", marginBottom: "8rem" }}
      >
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form action="" onSubmit={register}>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="form1"
              type="text"
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email" 
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
              required
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>

            <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
              Register
            </MDBBtn>
          </form>
          Already have an account?{" "}
          <Link to="/login">Login here</Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
