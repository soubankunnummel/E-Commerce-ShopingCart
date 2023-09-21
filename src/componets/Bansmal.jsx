import React from 'react'
import "./Banner.css";
import { MDBCol } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import './Bansma.css'

export default function Bansmal() {
    const navigator = useNavigate()
  return (
    <>
    <div className=" container mx-5  ">
        <div className="row ban-main ">
          <div
            className="d-flex align-items-start bg-light ms-5 "
            style={{ height: "10px" }}
          >
            <div></div>
            <MDBCol>
              {" "}
              <span
                className="categorys"
                onClick={() => navigator("/Living")}
              >
                Living Room
              </span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span
                className="categorys"
                onClick={() => navigator("/Dinig")}
              >
                Dining Room
              </span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={() => navigator("/Bed")}>
                Bedroom
              </span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={() => navigator("/kichen")}>ktchen</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={() => navigator("/work")}>Workspac</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={() => navigator("/Outdor")}>Outdoor</span>
            </MDBCol>
            <MDBCol>
              {" "}
              <span className="categorys" onClick={() => navigator("/Bath")}>Bathroom</span>
            </MDBCol>
          </div>

          

        </div>
      </div>

    </>
  )
}
