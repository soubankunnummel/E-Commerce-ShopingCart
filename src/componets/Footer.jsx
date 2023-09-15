import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      <div className="fixed-bottom">
        <MDBFooter
          className="text-center text-white "
          style={{ backgroundColor: "#f1f1f1", height: 50 }}
        >

          <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fab fa-facebook-f" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-twitter" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-google" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-instagram" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-linkedin" />
              </MDBBtn>

              <MDBBtn
                rippleColor="dark"
                color="link"
                floating
                size="lg"
                className="text-dark m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab className="fa-github" />
              </MDBBtn>
        </MDBFooter>
      </div>
    </>
  );
}
