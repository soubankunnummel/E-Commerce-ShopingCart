import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Productcontext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart, itemCount } = useContext(Productcontext);
  console.log(itemCount.length);
  const naviga = useNavigate();

  const handleBackToShopping = () => {
    naviga("/");
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const [count, setCount] = useState(1);

  const increaseCount = () => { 
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * count, 0);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    {cart.map((item) => (
                      <div
                        className="d-flex align-items-center mb-5"
                        key={item.id}
                      >
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            src={item.image}
                            fluid
                            style={{ width: "150px" }}
                            alt={item.name}
                          />
                        </div>

                        <div className="flex-grow-1 ms-3">
                          <a
                            href="#!"
                            className="float-end text-black"
                            onClick={() => removeItem(item.id)}
                          >
                            <MDBIcon fas icon="times" />
                          </a>
                          <MDBTypography tag="h5" className="text-primary">
                            {item.name}
                          </MDBTypography>
                          <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                            Color: {item.color}
                          </MDBTypography>

                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">
                              {item.price}$
                            </p>

                            <div className="def-number-input number-input safari_only">
                              <button
                                style={{ border: "1px" }}
                                className="minus mx-2 "
                                onClick={() => decreaseCount(item.id)}
                              >
                                {" "}
                                -
                              </button>
                              <span>{count} </span>
                              <button
                                className="plus"
                                style={{ border: "1px" }}
                                onClick={() => increaseCount(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <MDBTypography tag="h5" className="fw-bold  mx-5">
                            Total:
                          </MDBTypography>
                          <MDBTypography
                            tag="h5"
                            style={{ width: "100px" }}
                            className="fw-bold mx-5 "
                          >
                            {item.price * count}$
                          </MDBTypography>
                        </div>
                      </div>
                    ))}
                  </MDBCol>

                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    ></MDBTypography>

                    <form className="mb-5">
                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <MDBBtn
                          onClick={() => naviga("/Pyment")}
                          className=""
                          block
                          size="lg"
                        >
                          Buy now
                        </MDBBtn>

                        <a
                          href="#!"
                          className="m-2"
                          onClick={handleBackToShopping}
                        >
                          <MDBIcon className="pt-4" fas icon="angle-left me-2" />
                          Back to shopping
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
