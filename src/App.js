import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./App.css";
import Header from "./components/Header";
import ChartContainer from "./components/Chart";
import Skeleton from 'react-loading-skeleton';
import { dateData, headingArr } from "./constants/constants";
function App() {
const [isLoading,setIsLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setIsLoading(false);
},2000);
},[])




  return (
    <div className="App">
      <div className="card">
        <Accordion activeIndex={0} >
          <AccordionTab
            header={
              <div className="navs-links">
                {headingArr?.map((h) => (
                  <Header
                    key={h.id}
                    id={h.id}
                    label={h.label}
                    rupees={h.rupees}
                    isIcon={h.isIcon}
                    isLoading={isLoading}
                  />
                ))}
              </div>
            }
          >
            <div className="navbar">
            {isLoading ? <Skeleton  height={100}/> : <ChartContainer /> }  
              <div>
            
              </div>
            </div>
            {isLoading? <Skeleton/> : <div className="footer">
                  <div className="footerChild">
                    <span>{dateData}</span>
                  </div>
                  <div className="footerChild">
                    <span>{dateData}</span>
                  </div>
                </div> }
           
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
