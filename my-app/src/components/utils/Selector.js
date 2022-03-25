import React from "react";
import { useContext } from "react";
import { ModelContext } from "../model-context";
import Detection from "../image/Dection";
import "./Selector.css";


const Selector = () => {
    const { selected, selectMode } = useContext(ModelContext)
    return (
        <React.Fragment>
            <div className="top-div">
                <div className="section-div">
                    {selected === "Image" ? (
                        <div className="selected-div" onClick={() => selectMode('Image')}>
                            <div className="selected-text">图像上传</div>
                        </div>
                    ) : (
                        <div className="deselected-div" onClick={() => selectMode('Image')}>
                            <div className="deselected-text">图像上传</div>
                        </div>
                    )}
                </div>
            </div>
            {selected === 'Image' && (
                <Detection />
            )}
        </React.Fragment>
    )
}

export default Selector;
