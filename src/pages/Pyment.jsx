import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

export default function Payment() {
  return (
    <MDBContainer className="">
      <MDBCard>
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
            <MDBBtn color="primary" size="lg">
              Proceed to Payment
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
