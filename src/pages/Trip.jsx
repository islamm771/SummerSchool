import React from 'react'
import "./Programs.css"
import { LuArrowRight } from 'react-icons/lu'
import { trip } from '../data';
import { GiCommercialAirplane } from 'react-icons/gi';
import BackButton from '../ui/BackButton';


const Trip = () => {

    const renderPrograms = trip.map( program => (
        <div className="col-md-5 mb-4" key={program.id}>
                <div className="program-card trips">
                <img className='img-fluid' src={program.img} alt="" />
                <div className="program-card-body">
                    <h3>{program.title}</h3>
                    <a href={`/trip/${program.name}`}> Learn more <LuArrowRight /> </a>
                    <GiCommercialAirplane className='plane' size={70} />
                </div>
            </div>
        </div>
) )

  return (
    <div className="social-page">
      <header style={{ backgroundImage: "url(/img/programs/trip/bg-img.png)" }}>
        <h1> Trip </h1>
        <BackButton />
      </header>

      <div
        className="programs"
        style={{ backgroundImage: "url(/img/programs/social/bg-img-2.png)" }}
      >
        <div className="container">
          <div className="programs-header">
            <h5>
              This is where the real journey <span>BEGINS!</span>
            </h5>
            <p>
              Embark on unforgettable journeys with our curated selection of
              trips. From thrilling adventures to serene getaways, we offer a
              diverse range of experiences to suit every traveler's preferences.
              Explore breathtaking destinations, immerse yourself in new
              cultures, and create lasting memories with each adventure.
            </p>

            <p className="sentence">
              Let us guide you on your next unforgettable journey.
            </p>
          </div>

          <h3 className="programs-title">Let’s explore our trip</h3>
          <div
            className="row justify-content-md-center"
            style={{ gap: "30px" }}
          >
            {renderPrograms}
          </div>

          <a className="apply-now custom-button" href="/payment">
            {" "}
            Apply now{" "}
          </a>
        </div>
      </div>
    </div>
  );
}


export default Trip;