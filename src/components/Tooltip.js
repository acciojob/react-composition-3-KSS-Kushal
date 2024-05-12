import React, { useState } from 'react';
import './../styles/App.css';

const Tooltip = ({text, children }) => {
    const [isHide, setIsHide] = useState(true);
  return (
    <div className='container'>
        {!isHide && <div className="tooltiptext">{text}</div>}
        <div className="tooltipContainer" onMouseEnter={()=>setIsHide(false)} onMouseLeave={()=>setIsHide(true)}>{children}</div>
    </div>
  )
}

export default Tooltip