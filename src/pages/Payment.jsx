import React from 'react'
import BackButton from '../ui/BackButton'
import "./Payment.css"
const Payment = () => {
  return (
    <div className='payment-page'>
        <header>
        <BackButton className={"colored"} />
        <div className="container">
            <h3>Fees and Payment</h3>
        </div>
      </header>

      <div className="payment-card-wrapper">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div>
                        <img className='img-fluid' src="/img/payment/img-01.png" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='img-fluid' src="/img/payment/img-02.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>


      <div className="deadline-wrapper">
        <div className="container">
            <h3>Deadlines</h3>
            <div className="row justify-content-start mb-5">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div>
                        <img className='img-fluid' src="/img/deadline/img-01.png" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='img-fluid' src="/img/deadline/img-02.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div>
                        <img className='img-fluid' src="/img/deadline/img-03.png" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className='img-fluid' src="/img/deadline/img-04.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='button-wrapper'>
        <button className='custom-button'>Register</button>
      </div>
    </div>
  )
}

export default Payment