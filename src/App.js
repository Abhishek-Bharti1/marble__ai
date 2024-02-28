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
  return (
    <div className="App">
      <div className="card">
        <Accordion>
          <AccordionTab
            header={
              <div className="navs-links">
                <Header />
                <Header />
                <Header />
                <Header props={true} />
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
