import React, { useState, useRef, useEffect } from 'react';
import { FaPen } from "react-icons/fa";
import { IoMdArrowDropup,IoMdArrowDropdown } from "react-icons/io";
import "../styles/Header.css";
import DialogueBox from './DialogueBox';
import { ListBox } from 'primereact/listbox';
import countryTemplate from './Template';

const Header = ({ isIcon, rupees, label, id }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const data = [
    { name: 'Average Order Value', code: 'AU' },
    { name: 'Conversion rate', code: 'BR' },
    { name: 'Gross Sales', code: 'CN' },
    { name: 'Net Revenue Value', code: 'EG' },
    { name: 'Store search conversion', code: 'FR' },
    { name: 'Return rate', code: 'DE' },
  ];

  const dropdownRef = useRef(null);

  const handleMouseOver = () => {
    setIsDialogOpen(true);
  };

  const handleMouseOut = () => {
    setIsDialogOpen(false);
  };

  const handleDropdown = (e) => {
    setDropdown(!dropdown);
    e.stopPropagation();
  };
  const handleHeader = (e)=>{
    e.stopPropagation();
  }
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='Header' style={{ background: id === 1 ? '#f1f1f1' : '#fff' }} onClick={(e)=>handleHeader(e)}>
      <div className='headerCard'>
        <div className='storeHeading'>
          <span
            className='storeHeadSpan'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {label}
          </span>
          <div className='pen' onClick={handleDropdown} ref={dropdownRef}><span >{isIcon ? null : <FaPen />}</span></div>
          {dropdown && (
            <div className='dropdown'>
              <ListBox value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={data} optionLabel="name"
                itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
            </div>
          )}
        </div>
        <span className='money'>{rupees}<span className='percent'>{parseFloat(rupees)>0 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}9%</span></span>
      </div>
      {isDialogOpen && (
        <div className="dialogBox">
          <DialogueBox />
        </div>
      )}
    </div>
  );
};

export default Header;
