import React, { useState } from 'react';
import { FaPen } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import "../styles/Header.css";
import DialogueBox from './DialogueBox';

const Header = ({ props }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDialogOpen(true);
  };

  const handleMouseOut = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className='Header'>
      <div className='headerCard'>
        <div className='storeHeading'>
          <span
            className='storeHeadSpan'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Online Store Sessions
          </span>
          <span className='pen'>{props ? null : <FaPen />}</span>
        </div>
        <span className='money'>255,801 <span className='percent'><IoMdArrowDropup />9%</span></span>
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
