import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./App.css";
import Header from "./components/Header";
import ChartContainer from "./components/Chart";

function App() {
  const [isTabActive, setIsTabActive] = useState(false);


  const handleTabChange = () => {
    setIsTabActive(!isTabActive);
  };

  const headingArr = [
    {
      label: "Online order sessions",
      rupees: "250,678",
      isIcon:false,
      id:1,
    },

    {
      label: "Net revenue value",
      rupees: "-15,000",
      isIcon:false,
      id: 2,
    },

    {
      label: "Total orders",
      rupees: "250,678",
      isIcon:false,
      id: 3,
    },

    {
      label: "Conversion rate",
      rupees: "250,678",
      isIcon:true,
      id: 4,
    }
  ]



  return (
    <div className="App">
      <div className="card">
        <Accordion>
          <AccordionTab
            header={
              <div className="navs-links">
              {headingArr.map(h=>(<Header key={h.id} id={h.id} label={h.label} rupees={h.rupees} isIcon={h.isIcon} />))}
              </div>
            }
onClick={handleTabChange}
          >
            <div className="navbar">
            {isTabActive && <ChartContainer/>}
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
