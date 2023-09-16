import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Productcontext } from "../Context";
 
export default function Login(props) {
  const { login, userName,setUerName } = useContext(Productcontext);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handlLogin = (e) => {
    e.preventDefault();

    // const email = e.target.elements.emil.value;
    // const password = e.target.elements.pass.value;
    
    const getUser = login.find((user)=> (user.email === email && user.password === password))
    console.log(getUser.username);

    if(getUser){
      setUerName( [...userName,...getUser.username])
      navigat('/')
      
    }else{
      alert("invalid user")
    }
    
    // if(getUser.lenght!==0){
    //   if(getUser[0].password === password){
    //     navigat('/')
    //     setUerName(getUser[0].name)
        
    //   }else{
    //     alert("invalid details") 
    //   }
    // }else{
    //   alert("user not avilable")
    // }
  }
  console.log(userName);
  const navigat = useNavigate();

 

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>
                <form action="" onSubmit={handlLogin}>
                  <MDBInput
                   
                   
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="emil"
                    type="email"
                    size="lg"
                    required
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                  <MDBInput
                 
                 
                 wrapperClass="mb-4 w-100"
                 label="Password"
                 id="pass"
                 type="password"
                 size="lg"
                 required
                 onChange={(e) => {setPassword(e.target.value)}}
                 />
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Remember password"
                  />

                  <MDBBtn size="lg" type="submit">
                    Login
                  </MDBBtn>
                </form>
                Don't have an account{" "}
                <Link
                  to={"/Register"}
                  onClick={() => props.onFormSwitch("register")}
                >
                  {" "}
                  Register
                </Link>
                <hr className="my-4" />
                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>
                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
