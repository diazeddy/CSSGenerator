import { useState } from "react";

import { BoxShadowGenerator } from "./components/BoxShadowGenerator";
import { BorderRadiusGenerator } from "./components/BorderRadiusGenerator";
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const header = (activeTab: string) => {
    if (activeTab === "tab1") return "Box Shadow";
    if (activeTab === "tab2") return "Border Radius";
    if (activeTab === "tab3") return "Text Shadow";
    if (activeTab === "tab4") return "CSS Cursor";
  }

  return (
    <div>
      <h1 id="title_brand">
        {header(activeTab)}
      </h1>
      <div className="flex flex-col">
        <div className="-mb-px flex">
          <button 
            className={`border-b-2 pb-4 ${activeTab === 'tab1' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}
            onClick={() => setActiveTab('tab1')}
          >
            Box Shadow
          </button>

          <button
            className={`border-b-2 pb-4 ${activeTab === 'tab2' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}  
            onClick={() => setActiveTab('tab2')}
          >
            Border Radius
          </button>

          <button
            className={`border-b-2 pb-4 ${activeTab === 'tab3' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}  
            onClick={() => setActiveTab('tab3')}
          >
            Text Shadow
          </button>

          <button
            className={`border-b-2 pb-4 ${activeTab === 'tab4' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}  
            onClick={() => setActiveTab('tab4')}
          >
            CSS Cursor
          </button>
        </div>

        <div>
          <div className={`${activeTab === 'tab1' ? '' : 'hidden'}`}>
            <BoxShadowGenerator />
          </div>

          <div className={`${activeTab === 'tab2' ? '' : 'hidden'}`}>
            <BorderRadiusGenerator />
          </div>

          <div className={`${activeTab === 'tab3' ? '' : 'hidden'}`}>
            
          </div>

          <div className={`${activeTab === 'tab4' ? '' : 'hidden'}`}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
