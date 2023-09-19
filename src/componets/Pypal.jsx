import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import './Pypal.css'

export default function Paypal() {
  const [redirect, setRedirect] = useState(false);



  if (redirect) {
    return
    //  <Redirect to="/your-destination" />;
  }

  return (
    <div className="mainn d-flex justify-content-center">
      <div className="round">
        {/* You can style this circle using CSS */}
      </div>
    </div>
  );
}
