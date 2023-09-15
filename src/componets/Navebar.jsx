import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Products } from "./Products";
import { Link, useNavigate } from "react-router-dom";
import "./Navebar.css";
import { Productcontext } from "../Context";

export default function App({ size, userName }) {
  const naviget = useNavigate();
  // const [serchTerm, setSerchTerm] = useState("");
  const [showBasic, setShowBasic] = useState(false);
  const navigat = useNavigate();
  const { setSerchTerm } = useContext(Productcontext);

  return (
    <>
      <MDBNavbar
        expand="lg"
        className="main"
        style={{ boxShadow: "none" }}
        light
        bgColor=""
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <div className="logo-img ms-2">
              <img
                onClick={() => navigat("/")}
                src={require("../images/RedWood logo black.png")}
                style={{ width: 50 }}
                alt="image"
              />

              <img
                src={require("../images/redwood text.png")}
                style={{ width: 60 }}
                className="mt-2"
                alt=""
              />
            </div>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mx-5  mb-lg-0  nav-main">
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => navigat("/")}
                  active
                  aria-current="page"
                  href="#"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => navigat("/")} href="">
                  Procuts
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Catogerys
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={() => navigat("/LivingRoom")} link>
                    Living Room
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigat("/DinigRoom")} link>
                    Dining Room
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigat("/Bedroom")} link>
                    Bedroom Furniture
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                onChange={(e) => setSerchTerm(e.target.value)}
                id="serchInput"
                type="search"
                className="form-control"
                placeholder="Serch items"
                aria-label="Search"
                style={{ width: "500px", borderRadius: 20 }}
              />
            </form>
            <MDBDropdown group className="shadow-0">
              <MDBDropdownToggle color="white">
                <MDBIcon
                  fas
                  icon="user-circle"
                  className="ms-1 me-2"
                  style={{ fontSize: "30px" }}
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link onClick={() => navigat("/")}>
                  {" "}
                  {userName}{" "}
                </MDBDropdownItem>
                <MDBDropdownItem link onClick={() => navigat("/")}>
                  Settings
                </MDBDropdownItem>
                <MDBDropdownItem link onClick={() => navigat("/login")}>
                  {userName ? " Sign Out" : "Login"}
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <Link to={"/Cart"}>
              <MDBIcon fcas icon="cart-plus" color="black" className="mx-1" />
            </Link>
            <span>{size} </span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
