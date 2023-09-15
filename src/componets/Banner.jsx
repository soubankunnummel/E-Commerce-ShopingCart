import { MDBCarousel, MDBCarouselItem, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <>
      <div className=" container mx-5  ">
        <div className="row">
          <div
            className="d-flex align-items-start bg-light ms-5 "
            style={{ height: "10px" }}
          >
            
            <MDBCol>
              {" "}
              <span className="categorys">Living Room</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">Dining Room</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">Bedroom Furniture</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">coalm</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span>coalm</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span>coalm</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span>coalm</span>
            </MDBCol>
          </div>

          <div className="images mt-5   ">
            <div className="d-flex   mb-3 ms-5" style={{ height: "650px" }}>
              <MDBCol className="pe-2">
                <img 
                className="ban-img"
                  src="https://www.ikea.com/images/new-lower-price-page-bf74a1c152fa73885a2cf0755d7ea604.jpg?f=s"
                  alt=""
                />
                <div className="mt-4">
                  <h1 className="newLower-text">
                    New lower prices to refresh your bedroom
                  </h1>
                  <p>
                    Give your home an affordable makeover just in time for fall
                    with recently lowered prices on everything you need to stay
                    cozy and comfy all season long!
                  </p>
                </div>
              </MDBCol>

              <MDBCol className="pe-2">
                <img
                 className="ban-img"
                  src="https://www.ikea.com/ext/ingkadam/m/508e2534bd9d2db9/original/PH170507-crop003.jpg?f=s"
                  alt=""
                />
              </MDBCol>
              <MDBCol>
                <img
                 className="ban-img"
                  src="https://www.ikea.com/ext/ingkadam/m/dcd97bad1ffff0b/original/PH163540-crop002.jpg?f=s"
                  alt=""
                />
              </MDBCol>
            </div>
          </div>

          <div className="butn">
            <button className="shotnow-btn">shop now</button>
          </div>
        </div>
      </div>
      {/* <div className="carosel container">
        <div className="row">
          <h1>heare carosel</h1>
          <MDBCarousel showControls>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src="https://mdbootstrap.com/img/new/slides/042.jpg"
              alt="..."
            />
            
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="https://mdbootstrap.com/img/new/slides/042.jpg"
              alt="..."
            />
            
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="https://mdbootstrap.com/img/new/slides/043.jpg"
              alt="..."
            />
            
          </MDBCarousel>
        </div>
      </div> */}
    </>
  );
}
