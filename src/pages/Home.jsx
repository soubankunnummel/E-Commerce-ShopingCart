import React, { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Productcontext } from "../Context";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Banner from "../componets/Banner";
import Navebar from "../componets/Navebar";

export default function Home() {
  const navigate = useNavigate();

  // Define the function to navigate to the product view
  const handleViewProduct = (productId) => {
    navigate(`/View/${productId}`);
  };

  const { productss, serchTerm ,cart} = useContext(Productcontext);

  return (
    <>
     <Navebar size={cart.length}  />
    {/* {!serchTerm ? (  */}
      
      <Banner />
    {/* // ):( */}
      <div className="container mx-5 ">
      <h1 className="mt-5 my-5 home-card ms-3" style={{  fontSize:'28px',color:'black' }}>
           products
        </h1>
        <MDBRow className="mt-5 my-5 card-row" id="allproducts">
          {productss.map((product, index) => (
            <MDBCol md="3" sm={2} key={index} style={{ marginBottom: 10 }}>
              <MDBCard className=" hover-zoom  ">
                <MDBCardImage
                  className=""
                  onClick={() => handleViewProduct(product.id)}
                  src={product.image}
                  position="top"
                  alt="..."
                /> 
                <MDBCardBody>
                  <MDBCardTitle>{product.name} </MDBCardTitle>
                  <MDBCardText>{product.discription}</MDBCardText>
                  <MDBCardTitle>${product.price} </MDBCardTitle>

                  {/* Pass the product.id as a parameter to the handleViewProduct function */}
                  <MDBBtn onClick={() => handleViewProduct(product.id)}>
                    View
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>

     {/* )} */}
      
    </>
  );
}
