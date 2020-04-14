import React from "react";

import ColourPicker from "../ColourPicker/ColourPicker";
import Eraser from "../Eraser/Eraser";
import Brush from "../Brush/Brush";

const ToolsBoard = () => (
  <div className="d-flex justify-content-start">
    <Eraser />
    <Brush />
    <ColourPicker />
  </div>
);

export default ToolsBoard;
