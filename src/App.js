import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./App.css";
import Header from "./components/Header";
import ChartContainer from "./components/Chart";
import Skeleton from 'react-loading-skeleton';
function App() {
const [isLoading,setIsLoading] = useState(true);
useEffect(()=>{
setTimeout(()=>{
setIsLoading(false);
},2000);
},[])


  const headingArr = [
    {
      label: "Online order sessions",
      rupees: "250,678",
      isIcon: false,
      id: 1,
    },
    {
      label: "Net revenue value",
      rupees: "-15,000",
      isIcon: false,
      id: 2,
    },
    {
      label: "Total orders",
      rupees: "250,678",
      isIcon: false,
      id: 3,
    },
    {
      label: "Conversion rate",
      rupees: "250,678",
      isIcon: true,
      id: 4,
    },
  ];

  return (
    <div className="App">
      <div className="card">
        <Accordion activeIndex={0} >
          <AccordionTab
            header={
              <div className="navs-links">
                {headingArr.map((h) => (
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
                    <span>Oct 1, 2022 - Feb 21, 2024</span>
                  </div>
                  <div className="footerChild">
                    <span> Oct 1, 2022 - Feb 21, 2024</span>
                  </div>
                </div> }
           
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
