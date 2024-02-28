import React, { useState } from 'react';
import { FaPen } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import "../styles/Header.css";
import DialogueBox from './DialogueBox';

const Header = ({ isIcon,rupees,label, id}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMouseOver = (event) => {
    setIsDialogOpen(true);
  };

  const handleMouseOut = (event) => {
    setIsDialogOpen(false);
  };

  return (
    <div className='Header' style={{background: id===1?'#f1f1f1': '#fff'}} >
      <div className='headerCard'>
        <div className='storeHeading'>
          <span
            className='storeHeadSpan'
            onMouseOver={(e)=>handleMouseOver(e)}
            onMouseOut={(e)=>handleMouseOut(e)}
          >
           {label}
          </span>
          <span className='pen'>{isIcon ? null : <FaPen />}</span>
        </div>
        <span className='money'>{rupees}<span className='percent'><IoMdArrowDropup />9%</span></span>
      </div>
      {isDialogOpen && (
        <div className="dialogBox">
    <DialogueBox/>
        </div>
      )}
    </div>
  );
};

export default Header;
