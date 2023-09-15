import React, { useContext } from 'react'
import { Productcontext } from '../../Context'
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
import { useNavigate } from 'react-router-dom';

export default function Bedroom() {
  const navigat = useNavigate()

  const handleViewProduct = (productId) => {
    navigat(`/View/${productId}`);
  };
  const {DinigRoom,serchTerm} =useContext(Productcontext)
  return (
    <div className="container mx-5">
      <h1 className="mt-5" style={{textAlign:'center'}}>Dinigroom</h1>
      <MDBRow className="mt-5" id="allproducts">
        {DinigRoom.filter((val) => {
          return serchTerm.toLowerCase() === " "
            ? val
            : val.name.toLowerCase().includes(serchTerm);
          // return false; // Return false to exclude items that don't match the search term
        }).map((product, index) => (
          <MDBCol md="4" key={index}>
            <MDBCard className="mt-3">
              <MDBCardImage 
               onClick={() => handleViewProduct(product.id)}
                src={product.image}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>{product.name} </MDBCardTitle>
                <MDBCardText>{product.discription}</MDBCardText>
                <MDBCardTitle>₹{product.price} </MDBCardTitle>
                
                {/* Pass the product.id as a parameter to the handleViewProduct function */}
                <MDBBtn onClick={() => handleViewProduct(product.id)}>View</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))} 
      </MDBRow>
    </div>
  )
}
