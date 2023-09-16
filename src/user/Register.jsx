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
  const { login,setLogin} = useContext(Productcontext);
  const navigate = useNavigate(); 
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const register = (e) => {
  
    e.preventDefault();
    setLogin((use) => (use = [...login,{name:name, email:email , password:password}]))
    alert("user Registration succesfully completed..... Plese login page")
    console.log(login);


   
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
              onChange={(e) => {setName(e.target.value)}}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email" 
              required
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              required
              onChange={(e) => {setPassword(e.target.value)}}
              />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
              required
              onChange={(e) => {setPassword(e.target.value)}}

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
