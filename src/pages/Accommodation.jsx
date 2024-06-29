import React from 'react'
import "./Accommodation.css"
import BackButton from '../ui/BackButton'
const Accommodation = () => {
  return (
    <div className='accommodation-page' style={{background:"url( /img/bg-img.png ) center center / cover no-repeat"}}>
        <header>
            <BackButton className={"colored"} />
            <div className="container">
            <h3>
                If you want a comfortable stay during your trip to 
                Alexandria, you definitely mean <span>Abeer Hotel</span>
            </h3>
            </div>
        </header>


        <div className="container">
            <div className="acc-wrapper d-flex flex-wrap">
                <div className='col-md-6 col-lg-4 px-2 mb-4 mb-md-0'>
                    <div>
                        <img className='img-fluid' src="/img/accommodation/img-01.png" alt="" />
                    </div>
                </div>
                <div className='col-md-6 col-lg-4 px-2 mb-4 mb-md-0'>
                    <div>
                        <img className='img-fluid' src="/img/accommodation/img-02.png" alt="" />
                    </div>
                </div>
                <div className='col-md-6 col-lg-4 px-2 mb-4 mb-md-0'>
                    <div>
                        <img className='img-fluid' src="/img/accommodation/img-03.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accommodation