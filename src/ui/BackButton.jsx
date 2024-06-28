import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = ({className}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

  return (
    <button onClick={goBack} className={`go-back ${className ? className : ""}`}>
        <IoChevronBackOutline size={50} />
        Go Back
    </button>
  )
}

export default BackButton