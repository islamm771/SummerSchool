import React from 'react'
import "./Programs.css"
import { IoChevronBackOutline } from 'react-icons/io5'
import { LuArrowRight } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';
import { optionaTrip } from '../data';
import { GiCommercialAirplane } from 'react-icons/gi';


const OptionalTrip = () => {

    const renderPrograms = optionaTrip.map( program => (
        <div className="col-md-5 mb-4" key={program.id}>
                <div className="program-card trips">
                <img className='img-fluid' src={program.img} alt="" />
                <div className="program-card-body">
                    <h3>{program.title}</h3>
                    <a href={`/optional-trip/${program.name}`}> Learn more <LuArrowRight /> </a>
                    <GiCommercialAirplane className='plane' size={70} />
                </div>
            </div>
        </div>
) )

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

  return (
    <div className="social-page">
      <header style={{ backgroundImage: "url(/img/programs/trip/bg-img.png)" }}>
        <h1> Optional Trip </h1>
        <button onClick={goBack} className="go-back">
          <IoChevronBackOutline size={50} />
          Go Back
        </button>
      </header>

      <div
        className="programs"
        style={{ backgroundImage: "url(/img/programs/social/bg-img-2.png)" }}
      >
        <div className="container">
          <div className="programs-header">
            <h5>
              We are not done <span>YET!</span>
            </h5>
            <p>
              Enhance your travel experience with our <span>optional</span> trips. These
              carefully crafted excursions provide the perfect complement to
              your main itinerary, allowing you to delve deeper into the
              culture, history, and natural beauty of your destination. Whether
              it's a unique local tour, a culinary adventure, or an exclusive
              excursion off the beaten path, these optional trips add an extra
              layer of excitement and enrichment to your journey.
            </p>

            <p className="sentence">
              Choose to expand your horizons and make the most of your travel experience.
            </p>
          </div>

          <h3 className="programs-title">Let’s explore our <span>optional</span> trip</h3>
          <div
            className="row justify-content-md-center"
            style={{ gap: "30px" }}
          >
            {renderPrograms}
          </div>

          <a className="apply-now custom-button" href="">
            {" "}
            Apply now{" "}
          </a>
        </div>
      </div>
    </div>
  );
}


export default OptionalTrip;