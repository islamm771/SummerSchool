import React, { useEffect, useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import "./single-social.css"
import { optionaTrip, socialPrograms, trip } from '../data';
import { HiLocationMarker } from 'react-icons/hi';


const SocialProgram = () => {
    
    const {sName} = useParams()
    const [program , setProgram] = useState({
        id:'',
        title:"",
        name: "",
        img:"",
        desciption:""
    },)
    
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    };
    
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(program?.title)}`;
    
    useEffect( ()=>{
        const prog = socialPrograms.filter( program => program.name == sName )[0] || 
         trip.filter( program => program.name == sName )[0] ||
         optionaTrip.filter( program => program.name == sName )[0]



        setProgram( prog )
    } ,[sName])



  return (
    <div className="single-social-program">
        <section style={{ backgroundImage: `url(${program.img})` }}>
            <div className="container text-center position-relative mt-5">
                <h1> <span>{program.title}</span> </h1>
                <p> {program.desciption} </p>

                <a href={googleMapsUrl} target='_blank' className="custom-button" rel="noopener noreferrer">
                    Explore Location <HiLocationMarker size={16} />
                </a>
            </div>


            <button onClick={goBack} className="go-back">
                <IoChevronBackOutline size={50} />
                Go Back
            </button>
        </section>
    </div>
  )
}

export default SocialProgram