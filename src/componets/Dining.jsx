import React from 'react'
import './kichen.css'
import Bansmal from './Bansmal'
import Navebar from './Navebar'

export default function Dining() {
  return (
    <>
    <Navebar/>
    <Bansmal/>
     <div className="container">
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/5a86734bb7cce1c7/original/PH176793-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/6c8a29325c4f8426/original/PH181154-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/6ea712e5e64e4489/original/PH186825.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/5bbd02ebd2566870/original/PH164351-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/7e1c72ac15a9fdc2/original/PH180177-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/723ddfe3f84a7fb9/original/PH181164-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>



    </>
  )
}
