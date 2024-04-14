
import { useState } from "react";
import PreviewBorderRadius from "../PreviewBox/PreviewBorderRadius";
import { copyToClipboard } from "../utils/CopyToClipBoard";

const borderStyleTypes: string[] = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "none", "hidden"];

export const BorderRadiusGenerator = () => {
    const [allCornersLength, setAllCornersLength] = useState(10);
    const [topLeftLength, setTopLeftLength] = useState(10);
    const [topRightLength, setTopRightLength] = useState(10);
    const [bottomRightLength, setBottomRightLength] = useState(10);
    const [bottomLeftLength, setBottomLeftLength] = useState(10);
    const [borderWidth, setBorderWidth] = useState(0);
    const [borderColor, setBorderColor] = useState("#77CC2b");
    const [borderStyle, setBorderStyle] = useState(borderStyleTypes[0]);
    const [backgroundColor, setBackgroundColor] = useState("#155bbb");
    const [isGenerate, setIsGenerate] = useState(false);
    const [copied, setCopied] = useState(false);

    const borderRadius = `${topLeftLength}px ${topRightLength}px ${bottomRightLength}px ${bottomLeftLength}px`;

    const background = backgroundColor;

    const border = `${borderWidth}px ${borderStyle} ${borderColor}`;

    const handleCopy = async () => {
        const success = await copyToClipboard(borderRadius + background + border);
        setCopied(success);
        if (success) {
            setTimeout(() => setCopied(false), 5000);
        }
    };

    const toggleInclude = () => setIsGenerate(!isGenerate);

    return (
        <div className="flex gap-4">
            <div className="flex-grow-0 flex-shrink-0 w-1/3">
                <div className="border-b-4 border-l border-r border-gray-300">
                    <h4 className="text-18px bg-[#158cba] text-white py-[10px] px-[15px]">
                        Border Radius Options
                    </h4>
                    <div className="p-[7px] text-[#555555]">
                        <div className="border border-grey-30 p-4">
                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="allCornersLength" className="block mb-2">
                                        All Corners Radius
                                    </label>
                                    <label className="text-[#158cba] font-bold text-base">
                                        {allCornersLength}px
                                    </label>
                                </div>
                                <input
                                    type="range"
                                    id="allCornersLength"
                                    min="0"
                                    max="200"
                                    value={allCornersLength}
                                    onChange={(e) => {
                                        setAllCornersLength(parseInt(e.target.value));
                                        setTopLeftLength(parseInt(e.target.value));
                                        setTopRightLength(parseInt(e.target.value));
                                        setBottomLeftLength(parseInt(e.target.value));
                                        setBottomRightLength(parseInt(e.target.value));
                                    }}
                                    className="w-full"
                                />
                            </div>
                            
                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="topLeftLength" className="block mb-2">
                                        Top Left Radius
                                    </label>
                                    <label className="text-[#158cba] font-bold text-base">
                                        {topLeftLength}px
                                    </label>
                                </div>
                                <input
                                    type="range"
                                    id="topLeftLength"
                                    min="0"
                                    max="200"
                                    value={topLeftLength}
                                    onChange={(e) =>
                                    setTopLeftLength(parseInt(e.target.value))
                                    }
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="topRightLength" className="block mb-2">
                                        Top Right Radius
                                    </label>
                                    <label className="text-[#158cba] font-bold text-base">
                                        {topRightLength}px
                                    </label>
                                </div>
                                <input
                                    type="range"
                                    id="topRightLength"
                                    min="0"
                                    max="200"
                                    value={topRightLength}
                                    onChange={(e) =>
                                    setTopRightLength(parseInt(e.target.value))
                                    }
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="bottomRightLength" className="block mb-2">
                                        Bottom Right Radius
                                    </label>
                                    <label className="text-[#158cba] font-bold text-base">
                                        {bottomRightLength}px
                                    </label>
                                </div>
                                <input
                                    type="range"
                                    id="bottomRightLength"
                                    min="0"
                                    max="200"
                                    value={bottomRightLength}
                                    onChange={(e) =>
                                    setBottomRightLength(parseInt(e.target.value))
                                    }
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="bottomLeftLength" className="block mb-2">
                                        Bottom Left Radius
                                    </label>
                                    <label className="text-[#158cba] font-bold text-base">
                                        {bottomLeftLength}px
                                    </label>
                                </div>
                                <input
                                    type="range"
                                    id="bottomLeftLength"
                                    min="0"
                                    max="200"
                                    value={bottomLeftLength}
                                    onChange={(e) =>
                                    setBottomLeftLength(parseInt(e.target.value))
                                    }
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between">
                                    <label htmlFor="borderWidth" className="block mb-2">
                                        Border Width
                                    </label>
                                    <label className="text-[#158cba] font-bold text-base">
                                        {borderWidth}px
                                    </label>
                                </div>
                                <input
                                    type="range"
                                    id="borderWidth"
                                    min="0"
                                    max="200"
                                    value={borderWidth}
                                    onChange={(e) =>
                                    setBorderWidth(parseInt(e.target.value))
                                    }
                                    className="w-full"
                                />
                            </div>
                        
                            <div className="mb-4">
                                <label htmlFor="borderColor" className="block mb-2">
                                    Border Color
                                </label>
                                <div className="flex flex-row-reverse items-center gap-2">
                                    <input
                                        type="color"
                                        id="borderColor"
                                        value={borderColor}
                                        onChange={(e) => setBorderColor(e.target.value)}
                                        className="max-w-[40%] h-10 border-solid border-[5px] border-gray-300 rounded-md"
                                    />
                                    <label>
                                        {borderColor}
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4 flex justify-between">
                                <label htmlFor="borderWidth" className="block mb-2">
                                    Border Style
                                </label>
                                <select value={borderStyle} onChange={(e) => setBorderStyle(e.target.value)}>
                                    {
                                        borderStyleTypes.map((type: string, id: number) => (
                                            <option key={id} value={type}>{type}</option>
                                        ))
                                    }
                                </select>

                            </div>

                            <div className="mb-4">
                                <label htmlFor="backgroundColor" className="block mb-2">
                                    Background Color
                                </label>
                                <div className="flex flex-row-reverse items-center gap-2">
                                    <input
                                        type="color"
                                        id="backgroundColor"
                                        value={backgroundColor}
                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                        className="max-w-[40%] h-10 border-solid border-[5px] border-gray-300 rounded-md"
                                    />
                                    <label>
                                        {backgroundColor}
                                    </label>
                                </div>
                            </div>

                            <div className="mb-4 flex items-center">
                                <button
                                type="button"
                                onClick={toggleInclude}
                                className={`${
                                    !isGenerate
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                                } px-4 py-2 rounded-md`}
                                >
                                {!isGenerate ? "GenerateBG" : "NotGenerateBG"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-2/3 flex items-center justify-center flex-col">
                <PreviewBorderRadius borderRadius={borderRadius} backgroundColor={background} border={border} />
                <div className="w-[700px] max-w-full mt-[100px] mb-[10px] bg-[#eee] p-[15px] text-[20px] rounded-8 min-h-[60px] ">
                    <div>box-shadow: {borderRadius};</div>
                    <div>-webkit-box-shadow: {borderRadius};</div>
                    <div>-moz-box-shadow: {borderRadius};</div>
                    {isGenerate && <div>background: {backgroundColor}</div>}
                    <div>border: {border}</div>
                </div>
                <button
                    className="text-[#ffffff] bg-[#75caeb] p-[9px] rounded-[10px]"
                    onClick={handleCopy}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
};
