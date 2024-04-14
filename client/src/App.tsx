import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import axiosApi from "./service/AxiosConfig";
import { BoxShadowGenerator } from "./components/BoxShadowGenerator";
import { BorderRadiusGenerator } from "./components/BorderRadiusGenerator";
import { TextShadowGenerator } from "./components/TextShadowGenerator";
import { CssCursorGenerator } from "./components/CSSCursorGenerator";
import './App.css';

const App: React.FC = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('boxTab');

  const header = (activeTab: string) => {
    if (activeTab === "boxTab") return "Box Shadow";
    if (activeTab === "borderTab") return "Border Radius";
    if (activeTab === "textTab") return "Text Shadow";
    if (activeTab === "cssTab") return "CSS Cursor";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        html2canvas(containerRef.current).then((canvas) => {
          const imageData = canvas.toDataURL("image/png");
          console.log({ imageData });
          console.log("canvas calling");
          axiosApi
            .post("/capture", { imageData })
            .then(() => {
              console.log("Image data sent to server");
            })
            .catch((error) => {
              console.error("Error sending image data:", error);
            });
        });
      }
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef}>
      <h1 id="title_brand">
        {header(activeTab)}
      </h1>
      <div className="flex flex-col">
        <div className="-mb-px flex">
          <button 
            className={`text-blue-500 hover:bg-blue-300 border-b-2 pb-4 ${activeTab === 'boxTab' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}
            onClick={() => setActiveTab('boxTab')}
          >
            Box Shadow
          </button>

          <button
            className={`text-blue-500 hover:bg-blue-300 border-b-2 pb-4 ${activeTab === 'borderTab' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}  
            onClick={() => setActiveTab('borderTab')}
          >
            Border Radius
          </button>

          <button
            className={`text-blue-500 hover:bg-blue-300 border-b-2 pb-4 ${activeTab === 'textTab' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}  
            onClick={() => setActiveTab('textTab')}
          >
            Text Shadow
          </button>

          <button
            className={`text-blue-500 hover:bg-blue-300 border-b-2 pb-4 ${activeTab === 'cssTab' ? 'border-orange-500' : 'border-transparent'} flex-1 text-left`}  
            onClick={() => setActiveTab('cssTab')}
          >
            CSS Cursor
          </button>
        </div>

        <div>
          <div className={`${activeTab === 'boxTab' ? '' : 'hidden'}`}>
            <BoxShadowGenerator />
          </div>

          <div className={`${activeTab === 'borderTab' ? '' : 'hidden'}`}>
            <BorderRadiusGenerator />
          </div>

          <div className={`${activeTab === 'textTab' ? '' : 'hidden'}`}>
            <TextShadowGenerator />
          </div>

          <div className={`${activeTab === 'cssTab' ? '' : 'hidden'}`}>
            <CssCursorGenerator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
