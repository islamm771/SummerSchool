import React from 'react'
import "./Transport.css"
import BackButton from '../ui/BackButton'


const Transport = () => {
  return (
    <div
      className="transport-page"
      style={{ backgroundImage: "url(/img/bg-img-2.png)" }}
    >
      <header>
        <BackButton className={"colored"} />
        <div className="container">
          <h3>
            We can assure you that you are going to enjoy your trip with this
            variety of <span>Transportation Methods</span>
          </h3>
        </div>
      </header>

      <div className="transport-types">
        <div className="container">
          <div className="transport-type-item">
            <img src="/img/transport/img-01.png" alt="" />
            <div className="transport-type-body">
              <h3>Tram</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                sollicitudin orci.
              </p>
            </div>
          </div>

          <div className="transport-type-item right">
            <img src="/img/transport/img-02.png" alt="" />
            <div className="transport-type-body">
              <h3>Train</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                sollicitudin orci.
              </p>
            </div>
          </div>

          <div className="transport-type-item">
            <img src="/img/transport/img-03.png" alt="" />
            <div className="transport-type-body">
              <h3>Uber</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                sollicitudin orci.
              </p>
            </div>
          </div>

          <div className="transport-type-item right">
            <img src="/img/transport/img-04.png" alt="" />
            <div className="transport-type-body">
              <h3>Microbus</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                sollicitudin orci.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Transport