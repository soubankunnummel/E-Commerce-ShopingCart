import React from 'react'
import './kichen.css'
import Bansmal from './Bansmal'
import Navebar from './Navebar'

export default function Bathroom() {
  return (
    <>
    <Navebar/>
    <Bansmal/>
     <div className="container">
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/b99beb24c79f38/original/PH193319.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/6594abb0e040ea4a/original/PH172455-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/776a9d8d6ae17187/original/PH162337-crop003.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/59bdac20a666bc70/original/PH186660-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/6b8e04a69352f927/original/PH180913-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/12c62a1b33d1c5d4/original/PH180131-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>


    </>
  )
}
