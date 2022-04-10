import React from 'react';
import '../styles/Heading.css';

const Heading = ({displayText}) => {
  return (
    <div className='heading'>
        <div></div>
        <p>{displayText}</p>
        <div></div>
        
    </div>
  )
}

export default Heading