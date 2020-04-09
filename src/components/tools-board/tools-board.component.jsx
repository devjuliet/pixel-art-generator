import React from "react";

import ColourPicker from "../colour-picker/colour-picker.component";
import Eraser from "../eraser/eraser.component";
import Brush from "../brush/brush.component";

const ToolsBoard = () => (
  <div className="d-flex justify-content-start">
    <Eraser />
    <Brush />
    <ColourPicker />
  </div>
);

export default ToolsBoard;
