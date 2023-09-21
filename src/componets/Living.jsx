import React from 'react'
import './kichen.css'
import Bansmal from './Bansmal'
import Navebar from './Navebar'

export default function Living() {
  return (
    <>
    <Navebar/>
    <Bansmal/> 
     <div className="container ">
        <div className='bansmal'>
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/4074df89d11506aa/original/PH172373-crop002.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/2810fdc68c584a6f/original/PH181183-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/4a8e4d4b0ccc98a7/original/PH188830.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/988b25b40151131/original/PH178196-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/3445a2b169fc2c25/original/PH180408-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/2f770c94361dee5c/original/PE816836-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>
    </div>

    </>
  )
}
