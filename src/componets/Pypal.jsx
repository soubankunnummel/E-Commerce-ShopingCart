import React from "react";
import "./Pypal.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function Paypal() {
  const navigete = useNavigate()
  return (
    <>
    <div className="mainn d-flex justify-content-center">
      <div className="round">
        <i className="fas fa-check"></i>
        {/* You can style this circle using CSS */}
      </div>
      <h3>Pyment successfully</h3>
      <a className="mt-5" href="#" onClick={()=> navigete('/')}>Back to shopping</a>
    </div>
    
      </>
  );
}
