import React from 'react'
import './kichen.css'
import Navebar from './Navebar'
import Bansmal from './Bansmal'
export default function Kichen() {
  return (
    <>
    
    <Navebar/>
    <Bansmal/>
    <div className="container">
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/7241ce273d90ea30/original/PH182463-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/1919020e52ebe75b/original/PH179868-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/1599882b644ef1c7/original/PH179150-crop001.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/731d1bab9bf6ca6b/original/PH176568.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/418eb065879df312/original/PH180406-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/fa5e868b79c70e6/original/PH181379-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>

    </>
  )
}
