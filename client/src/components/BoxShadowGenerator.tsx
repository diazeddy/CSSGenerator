
import { useState } from "react";
import PreviewBox from "../PreviewBox/PreviewBox";
import { hexToRgb, rgbToHex } from "../utils/HexToRGB";


export const BoxShadowGenerator = () => {
  const [horizontalLength, setHorizontalLength] = useState(10);
  const [verticalLength, setVerticalLength] = useState(10);
  const [blurRadius, setBlurRadius] = useState(5);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState([0, 0, 0]);
  const [shadowOpacity, setShadowOpacity] = useState(0.75);
  const [isInset, setIsInset] = useState(false);

  const boxShadow = `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${
    shadowColor[0]
  }, ${shadowColor[1]}, ${shadowColor[2]}
  , ${shadowOpacity})${isInset ? " inset" : ""}`;

  const toggleInset = () => setIsInset(!isInset);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Box Shadow Options</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="horizontalLength" className="block font-bold mb-2">
              Horizontal Shadow Length
            </label>
            <input
              type="range"
              id="horizontalLength"
              min="-200"
              max="200"
              value={horizontalLength}
              onChange={(e) => setHorizontalLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="verticalLength" className="block font-bold mb-2">
              Vertical Shadow Length
            </label>
            <input
              type="range"
              id="verticalLength"
              min="-200"
              max="200"
              value={verticalLength}
              onChange={(e) => setVerticalLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="blurRadius" className="block font-bold mb-2">
              Blur Radius
            </label>
            <input
              type="range"
              id="blurRadius"
              min="0"
              max="400"
              value={blurRadius}
              onChange={(e) => setBlurRadius(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="spreadRadius" className="block font-bold mb-2">
              Spread Radius
            </label>
            <input
              type="range"
              id="spreadRadius"
              min="-200"
              max="200"
              value={spreadRadius}
              onChange={(e) => setSpreadRadius(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="shadowColor" className="block font-bold mb-2">
              Shadow Color
            </label>
            <input
              type="color"
              id="shadowColor"
              value={rgbToHex(shadowColor)}
              onChange={(e) => setShadowColor(hexToRgb(e.target.value))}
              className="w-full h-10 border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="shadowOpacity" className="block font-bold mb-2">
              Shadow Color Opacity
            </label>
            <input
              type="range"
              id="shadowOpacity"
              min="0"
              max="1"
              step="0.01"
              value={shadowOpacity}
              onChange={(e) => setShadowOpacity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4 flex items-center">
            <button
              type="button"
              onClick={toggleInset}
              className={`${
                isInset ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded-md font-bold`}
            >
              {isInset ? "Inset" : "Outset"}
            </button>
          </div>
        </div>
        <PreviewBox boxShadow={boxShadow} />
      </div>
    </div>
  );
};
