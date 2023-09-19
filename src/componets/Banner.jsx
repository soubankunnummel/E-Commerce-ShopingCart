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
    navigator("/All");
  };
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
              <span
                className="categorys"
                onClick={() => navigator("/LivingRoom")}
              >
                Living Room
              </span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span
                className="categorys"
                onClick={() => navigator("/DinigRoom")}
              >
                Dining Room
              </span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={() => navigator("/Bedroom")}>
                Bedroom
              </span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">ktchen</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">Workspac</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">Outdoor</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys">Bathroom</span>
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
      <div className="container mt-5 ">
        <div className="row">
          <div
            className="col-md-4 tex-joinus"
            style={{ width: "274px", marginLeft: " 106px" }}
          >
            <div className="text-area">
              <h3 className="fw-bold textJoin">
                Join us at Climate <br /> Week NYC 2023
              </h3>
              <div className="para">
                <p>
                  As part of our commitment to sustainability, we’re hosting the
                  Action Speaks Summit during Climate Week NYC. Join us 9/23 for
                  a free public talk with a climate-conscious fashion designer
                  and a live comedy show. Space is limited, sign up now!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="image">
              <img
                src="https://www.ikea.com/images/action-speaks-new-york-climate-week-2023-ad6391e028680822eba2ef184b0e162a.jpg?f=l"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <h3 className="text-Tips">
          Tips and ideas for a more sustainable home
        </h3>
        <Carousel responsive={responsive} className="d-flex mt-5 ">
          {/* <div className="card-carosel justify-content-around">
          <img
              src="https://www.ikea.com/images/a-person-adds-a-vegetable-peel-to-a-brown-paper-food-waste-b-06ca675190da892b8dd449647de6cf37.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn-Office">Office accessories</button>
            </div>
          </div> */}
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/a-persons-finger-presses-the-on-off-switch-on-the-cord-of-a--e383e0cd035aa339ba18f74cd44e27eb.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn-Office">Energy</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/a-person-adds-a-vegetable-peel-to-a-brown-paper-food-waste-b-06ca675190da892b8dd449647de6cf37.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn-Office">waste</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/stainless-steel-vimmern-kitchen-mixer-faucet-with-handspray--ece75b7b932d57f2e1c74bf7342f6157.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn">water</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/a-persons-hand-holds-a-paintbrush-and-applies-gray-paint-to--d4eb8a5dd1724409205b29c06fb08bed.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn">furniture</button>
            </div>
          </div>
          <div className="card" style={{ marginLeft: "10px" }}>
            {" "}
            {/* Added marginLeft */}
            <img
              src="https://www.ikea.com/images/a-person-places-a-turquoise-silicone-oevermaett-food-cover-o-cf2a27520c2f51db0bf91f51ece6afbb.jpg?f=xs"
              className="crosel-img "
              alt=""
            />
            <div>
              <button className="card-btn">reusabels</button>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="container mt-5">
        <div className="text-rightnow">
          <h1 style={{ color: "black", fontSize: "20px" }} className="mb-5">
            Right Now at RedWOOD
          </h1>
        </div>
        <div className="row  ">
          <div className="col   first-img">
            <img
              className="img-undr"
              src="https://www.ikea.com/images/81/ea/81ea8a75246f35ec0493dde8b4cf826e.jpg?f=s"
              alt=""
            />
            <div className="under-div1">
              <div className="text">
                <h1 className="under-text">New fall finds</h1>
                <p className="under-text1">
                  Cozy up with the limited HÖSTKVÄLL collection, especially
                  designed to help you embrace the beauty of autumn.
                </p>
              </div>
            </div>
            <div className="butnt">
              <button
                style={{
                  border: "none",
                  borderRadius: "80px",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "black",
                }}
              >
                <i style={{color:'white'}} class="fas fa-right-long"></i>
              </button>
            </div>
          </div>
          <div className="col">
            <img
              className="img-undr"
              src="https://www.ikea.com/images/ad/5e/ad5efd0de8cc44ebae29f0659b567e1d.jpg?f=s"
              alt=""
            />
            <div className="under-div2">
              <div className="text">
                <h1 className="under-text3">New fall finds</h1>
                <p className="under-text2">
                  Cozy up with the limited HÖSTKVÄLL collection, especially
                  designed to help you embrace the beauty of autumn.
                </p>
              </div>
            </div>
            <div className="butnt2">
              <button
                style={{
                  border: "none",
                  borderRadius: "80px",
                  width: "60px",
                  height: "60px",
                }}
              >
                <i class="fas fa-right-long"></i>
              </button>
            </div>
          </div>
          <div className="col">
            <img
              className="img-undr"
              src="https://www.ikea.com/images/93/bf/93bff21bea9b96b0d74b1e662ffc0da0.jpg?f=s"
              alt=""
            />
            <div className="under-div3">
              <div className="text">
                <h1 className="under-text3">New fall finds</h1>
                <p className="under-text2">
                  Cozy up with the limited HÖSTKVÄLL collection, especially
                  designed to help you embrace the beauty of autumn.
                </p>
              </div>
            </div>
            <div className="butnt3">
              <button
                style={{
                  border: "none",
                  borderRadius: "80px",
                  width: "60px",
                  height: "60px",
                }}
              >
                <i class="fas fa-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
