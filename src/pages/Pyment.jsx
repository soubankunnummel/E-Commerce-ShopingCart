import React, { useContext } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import Navebar from "../componets/Navebar";
import { Productcontext } from "../Context";
import { useNavigate } from "react-router-dom"
import './Pyment.css'

export default function Payment() {
  const navigate = useNavigate()
  const {cart} = useContext(Productcontext)
  return (
    <>
    <Navebar size={cart.length}  />
    <MDBContainer className=" ">
      <MDBCard className="pyemt-card">
        <MDBCardBody>
          <h4 className="text-center mb-4">Payment</h4>
          
          {/* Card Details */}
          <div className="mb-4">
            <label className="form-label">Card Number</label>
            <input type="text" className="form-control" placeholder="Enter card number" />
          </div>
          
          <div className="mb-4">
            <label className="form-label">Expiration Date</label>
            <input type="text" className="form-control" placeholder="MM/YY" />
          </div>
          
          <div className="mb-4">
            <label className="form-label">CVV</label>
            <input type="text" className="form-control" placeholder="CVV" />
          </div>
          
          <div className="text-center">
            <MDBBtn color="primary" onClick={()=> navigate('/pypal')} size="lg">
              Proceed to Payment
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </>
  );
}
