import React from 'react'
import "./Programs.css"
import { IoChevronBackOutline } from 'react-icons/io5'
import { LuArrowRight } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';
import { socialPrograms } from '../data';


const SocialPrograms = () => {

    const renderPrograms = socialPrograms.map( program => (
        <div className="col-md-5 mb-4" key={program.id}>
                <div className="program-card">
                <img className='img-fluid' src={program.img} alt="" />
                <div className="program-card-body">
                    <h3>{program.title}</h3>
                    <a href={`/socialprogram/${program.name}`}> Learn more <LuArrowRight /> </a>
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
      <header
        style={{ backgroundImage: "url(/img/programs/social/bg-img.png)" }}
      >
        <h1> Social Program </h1>
        <button onClick={goBack} className="go-back">
          <IoChevronBackOutline size={50} />
          Go Back
        </button>
      </header>

      <div className="programs" style={{backgroundImage: "url(/img/programs/social/bg-img-2.png)"}}>
        <div className="container">
          <div className="programs-header">
            <h5>Why we are sure that you’re going to enjoy this one?</h5>
            <p>
                Because Alexandria is the <span>second</span> largest city in Egypt
                and is even considered by some as the largest capital. Known as the{" "}
                <span>“Pearl of the Mediterranean”</span>, it is also the largest
                city on the Mediterranean Coast. Its strategic location yields a
                magnificent view and pleasant climate throughout the year.  The city
                combines old and new, quiet and boisterous with its mix of tranquil
                beaches, bustling restaurants, dynamic nightlife, and lovely
                architecture.
            </p>

            <p className='sentence'>
                Whatever your taste, we can guarantee you will enjoy your time here with us in Alexandria.
            </p>
          </div>

          <h3 className='programs-title'>Let’s explore our social program</h3>
          <div className="row justify-content-md-center" style={{gap:"30px"}}>
            {renderPrograms}
          </div>

          <a className='apply-now custom-button' href=""> Apply now </a>
        </div>
      </div>
    </div>
  );
}


export default SocialPrograms;