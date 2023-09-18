import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import "./Banner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

import AllProducts from "./AllProducts";

export default function Banner() {
  const navigator = useNavigate();
  const handlShopnow = () => {
    navigator('/All')
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className=" container mx-5  ">
        <div className="row">
          <div
            className="d-flex align-items-start bg-light ms-5 "
            style={{ height: "10px" }}
          >
            <div></div>
            <MDBCol>
              {" "}
              <span className="categorys"onClick={()=> navigator('/LivingRoom')}>Living Room</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={()=> navigator('/DinigRoom')}>Dining Room</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={()=> navigator('/Bedroom')}>Bedroom Furniture</span>
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
            <button className="shotnow-btn" onClick={handlShopnow}>
              shop now
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5 w-75">
        <Carousel responsive={responsive} className="d-flex ">
          <div className="card-carosel justify-content-around">
            <img
              src="https://www.ikea.com/images/storage-containers-7914dd2f2a10f52920d85a70c66e47f9.jpg?f=xs"
              className="crosel-img1 "
              alt=""
              
            />
            <div>
              <button className="card-btn-storage">Storage containers</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/office-accessories-b0adcb553d941b6db4fe076cb539f0c4.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn-Office">Office accessories</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/bed-textiles-a13e46258a722094b07af8d044fdcd7a.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn">Bed textails</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/cooking-accessories-f357da8a5787d63386b8b6a990867154.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn">Food storage</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/food-storage-b76081f2b5d03e574c5c27ff7895f5ba.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn">Dinnerware</button>
            </div>
          </div>
          
        </Carousel>
      </div>
      <div className="container mt-5">

        <h1>under the carosel</h1>
        <div className="row">
          <div className="colash-img">
            
          </div>
        </div>
      </div>
      <AllProducts/>
    </>
  );
}
