import React from 'react'
import './kichen.css'
import Bansmal from './Bansmal'
import Navebar from './Navebar'

export default function Works() {
  return (
    <>
    <Navebar/>
    <Bansmal/>
     <div className="container">
            <div className='bansmal'>
        <div className="row mt-5">
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/3411a19c46375e78/original/PH174011-crop002.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

           
                <img className='image2' src="https://www.ikea.com/ext/ingkadam/m/278ef401aaac34fb/original/PH181305-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
              
                <img className='image1' src="https://www.ikea.com/ext/ingkadam/m/79b5abed9a83f3b6/original/PH176426-crop001.jpg?f=s" alt="" />

            </div>
        </div>
        <div className="row">
            <div className="col">
           
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/2e8302ab418198c8/original/PH173742-crop002.jpg?f=s" alt="" />
                
            </div>
            <div className="col">

                <img className='image3' src="https://www.ikea.com/ext/ingkadam/m/607f762a0051b8b3/original/PH181153-crop001.jpg?f=s" alt="" />
                
            </div>
            <div className="col">
               
                <img className='image4' src="https://www.ikea.com/ext/ingkadam/m/7a5c251a9bad7ff3/original/PH181286-crop001.jpg?f=s" alt="" />

            </div>
        </div>
    </div>
    </div>

    </>
  )
}
