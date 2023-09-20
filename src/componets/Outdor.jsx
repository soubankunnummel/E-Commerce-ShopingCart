import React from 'react'
import './kichen.css'
import Bansmal from './Bansmal'
import Navebar from './Navebar'

export default function Outdor() {
  return (
    <>
    <Navebar/>
    <Bansmal/>
     <div className="container">
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/60659cd82a52532/original/PH191793.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/69acd907377b205a/original/PH180743.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/48909d8f65acde7e/original/PH184303.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/1a96553db39ebb37/original/PH183657-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/710594eaae42522a/original/PH180421-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/38b891640c47d60b/original/PH180220-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>

    </>
  )
}
