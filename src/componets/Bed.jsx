import React from 'react'
import './kichen.css'
import Bansmal from './Bansmal'
import Navebar from './Navebar'


export default function Bed() {
  return (
    <>
    <Navebar/>
    <Bansmal/>
     <div className="container ">
            <div className='bansmal'>
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/26915b2696fde58/original/PH179505-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/33a13fe8d028711e/original/PH180330.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/a2653b88ec097bd/original/PH177596.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/7ed0af3412ce71b0/original/PH189292.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/2f4ad4e0e6908f2/original/PE564408-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/1919020e52ebe75b/original/PH179868-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>
    </div>


    </>
  )
}
